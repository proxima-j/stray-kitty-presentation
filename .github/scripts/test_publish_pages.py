"""Focused regressions for slow Pages publication and false-green prevention."""

import contextlib
import hashlib
import io
import os
import unittest
from unittest.mock import patch

import publish_pages as publisher


class PublisherTests(unittest.TestCase):
    def clock(self):
        now = [0]
        def advance(seconds):
            now[0] += seconds
        return now, advance

    def test_sync_can_finish_after_ten_minutes(self):
        now, _ = self.clock()
        statuses = iter(['deployment_queued', 'syncing_files', 'syncing_files', 'succeed'])
        def slow_poll(_):
            now[0] += 350
        with patch.object(publisher, 'request_json', side_effect=lambda *a, **k: {'status': next(statuses)}), \
             patch.object(publisher.time, 'monotonic', side_effect=lambda: now[0]), \
             patch.object(publisher.time, 'sleep', side_effect=slow_poll), \
             contextlib.redirect_stdout(io.StringIO()):
            publisher.wait_for_deployment('https://api.example/pages/deployments/sha', 'fake')
        self.assertGreater(now[0], 600)

    def test_watcher_timeout_does_not_cancel_accepted_deployment(self):
        now, advance = self.clock()
        with patch.object(publisher, 'request_json', return_value={'status': 'syncing_files'}) as api, \
             patch.object(publisher.time, 'monotonic', side_effect=lambda: now[0]), \
             patch.object(publisher.time, 'sleep', side_effect=advance), \
             contextlib.redirect_stdout(io.StringIO()):
            with self.assertRaisesRegex(RuntimeError, 'left running'):
                publisher.wait_for_deployment('https://api.example/deployment', 'fake', timeout_seconds=30)
        self.assertTrue(all(call.args[0] == 'https://api.example/deployment'
                            and 'method' not in call.kwargs for call in api.call_args_list))

    def test_terminal_error_cannot_report_success(self):
        with patch.object(publisher, 'request_json', return_value={'status': 'deployment_content_failed'}), \
             contextlib.redirect_stdout(io.StringIO()):
            with self.assertRaisesRegex(RuntimeError, 'deployment_content_failed'):
                publisher.wait_for_deployment('https://api.example/deployment', 'fake')

    def test_rerun_resumes_without_another_post_or_oidc_request(self):
        with patch.object(publisher, 'request_json', return_value={'status': 'syncing_files'}) as api, \
             contextlib.redirect_stdout(io.StringIO()):
            self.assertEqual(publisher.create_or_resume('https://api.example/deployments', 'fake', 'abc', 42), 'abc')
        self.assertEqual(api.call_count, 1)

    def test_lost_create_response_recovers_without_duplicate_post(self):
        responses = [publisher.ApiError(404), {'value': 'fake-oidc'},
                     publisher.ApiError(503), {'status': 'deployment_queued'}]
        with patch.dict(os.environ, {'ACTIONS_ID_TOKEN_REQUEST_URL': 'https://oidc.example',
                                     'ACTIONS_ID_TOKEN_REQUEST_TOKEN': 'fake-request'}), \
             patch.object(publisher, 'request_json', side_effect=responses) as api, \
             contextlib.redirect_stdout(io.StringIO()):
            self.assertEqual(publisher.create_or_resume('https://api.example/deployments', 'fake', 'abc', 42), 'abc')
        self.assertEqual(sum(c.kwargs.get('method') == 'POST' for c in api.call_args_list), 1)

    def stamp(self):
        bodies = [b'current deck', b'previous deck']
        return {'commit': 'abc', 'run_id': '123',
                'current_sha256': hashlib.sha256(bodies[0]).hexdigest(),
                'previous_sha256': hashlib.sha256(bodies[1]).hexdigest()}, bodies

    def test_stale_public_release_is_retried_then_both_decks_verified(self):
        expected, bodies = self.stamp()
        now, advance = self.clock()
        with patch.object(publisher, 'request_json', side_effect=[{'commit': 'old'}, expected]), \
             patch.object(publisher.urllib.request, 'urlopen', side_effect=[io.BytesIO(b) for b in bodies]), \
             patch.object(publisher.time, 'monotonic', side_effect=lambda: now[0]), \
             patch.object(publisher.time, 'sleep', side_effect=advance), \
             contextlib.redirect_stdout(io.StringIO()):
            publisher.verify_public_release('https://site.example/', expected)
        self.assertEqual(now[0], 10)

    def test_matching_stamp_alone_cannot_hide_stale_deck_bytes(self):
        expected, _ = self.stamp()
        now, advance = self.clock()
        with patch.object(publisher, 'request_json', return_value=expected), \
             patch.object(publisher.urllib.request, 'urlopen', side_effect=lambda *a, **k: io.BytesIO(b'wrong deck')), \
             patch.object(publisher.time, 'monotonic', side_effect=lambda: now[0]), \
             patch.object(publisher.time, 'sleep', side_effect=advance):
            with self.assertRaisesRegex(RuntimeError, 'public verification'):
                publisher.verify_public_release('https://site.example/', expected, timeout_seconds=20)


if __name__ == '__main__':
    unittest.main()
