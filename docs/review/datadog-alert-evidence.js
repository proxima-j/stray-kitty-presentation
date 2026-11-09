(() => {
  'use strict';
  const open = document.getElementById('ddOpenArchive');
  const close = document.getElementById('ddCloseArchive');
  const overlay = document.getElementById('ddArchiveOverlay');
  const record = document.getElementById('ddArchiveRecord');
  const image = document.getElementById('ddEvidenceImage');
  const zoom = document.getElementById('ddEvidenceZoom');
  const imageOverlay = document.getElementById('ddAlertImageOverlay');
  const closeImage = document.getElementById('ddCloseAlertImage');
  const fullImage = document.getElementById('ddAlertImageFull');
  const stages = [...document.querySelectorAll('[data-alert-stage]')];
  const sources = [...document.querySelectorAll('[data-alert-source]')];
  const base = '../assets/datadog/page-03-alerts/';
  const evidence = {
    slack: {
      alert: { file: 'slack-health-alert.png', label: 'Slack · ALERT · Nov 4, 22:36 (UTC+08)', caption: 'Original Slack message · click to enlarge', url: 'https://bjxsollaschool.slack.com/archives/C0C0S9KAWUE/p1793803004626329' },
      recovery: { file: 'slack-health-recovery.png', label: 'Slack · RECOVERY · Nov 4, 22:41 (UTC+08)', caption: 'Original Slack message · click to enlarge', url: 'https://bjxsollaschool.slack.com/archives/C0C0S9KAWUE/p1793803302935099' }
    },
    datadog: {
      alert: { file: 'datadog-health-failed.png', label: 'Datadog · FAILED RUN · Nov 4, 22:35 (UTC+08)', caption: '22:35 failed run → 22:36 alert · click to enlarge', url: 'https://us5.datadoghq.com/synthetics/details/nu2-fet-6dn/result/183503211253861456' },
      recovery: { file: 'datadog-health-passed.png', label: 'Datadog · PASSED RUN · Nov 4, 22:40 (UTC+08)', caption: '22:40 passed run → 22:41 recovery · click to enlarge', url: 'https://us5.datadoghq.com/synthetics/details/nu2-fet-6dn/result/1917610770815308180' }
    }
  };
  let stage = 'alert';
  let source = 'slack';
  let loaded = false;
  function renderEvidence() {
    const selected = evidence[source][stage];
    stages.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.alertStage === stage)));
    sources.forEach(button => button.setAttribute('aria-selected', String(button.dataset.alertSource === source)));
    image.src = base + selected.file;
    image.alt = selected.label;
    zoom.setAttribute('aria-label', `Enlarge ${source === 'slack' ? 'Slack' : 'Datadog'} ${stage} screenshot`);
    document.getElementById('ddEvidenceCaption').textContent = selected.caption;
  }
  stages.forEach(button => button.addEventListener('click', () => { stage = button.dataset.alertStage; renderEvidence(); }));
  sources.forEach(button => button.addEventListener('click', () => { source = button.dataset.alertSource; renderEvidence(); }));
  zoom.addEventListener('click', () => {
    const selected = evidence[source][stage];
    fullImage.src = base + selected.file;
    fullImage.alt = selected.label;
    document.getElementById('ddAlertImageTitle').textContent = selected.label;
    document.getElementById('ddAlertImageSource').href = selected.url;
    imageOverlay.hidden = false;
    imageOverlay.querySelector('.dd-alert-image-scroll').scrollTop = 0;
    closeImage.focus();
  });
  function dismissImage() { imageOverlay.hidden = true; zoom.focus(); }
  closeImage.addEventListener('click', dismissImage);
  imageOverlay.addEventListener('click', event => { if (event.target === imageOverlay) dismissImage(); });
  function dismiss() {
    overlay.hidden = true;
    open.focus();
  }
  open.addEventListener('click', async () => {
    overlay.hidden = false;
    close.focus();
    if (loaded) return;
    try {
      const response = await fetch('../assets/datadog/page-03-alerts/alert-recovery-evidence.json');
      if (!response.ok) throw new Error('Archived record unavailable');
      record.textContent = JSON.stringify(await response.json(), null, 2);
      loaded = true;
    } catch (_) {
      record.textContent = 'The archived record could not load. Use the GitLab source link on the page.';
    }
  });
  close.addEventListener('click', dismiss);
  overlay.addEventListener('click', event => { if (event.target === overlay) dismiss(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !imageOverlay.hidden) { dismissImage(); event.stopPropagation(); }
    if (event.key === 'Escape' && !overlay.hidden) { dismiss(); event.stopPropagation(); }
  });
})();
