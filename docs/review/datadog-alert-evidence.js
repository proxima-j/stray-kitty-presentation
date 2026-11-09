(() => {
  'use strict';
  const open = document.getElementById('ddOpenArchive');
  const close = document.getElementById('ddCloseArchive');
  const overlay = document.getElementById('ddArchiveOverlay');
  const record = document.getElementById('ddArchiveRecord');
  let loaded = false;
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
    if (event.key === 'Escape' && !overlay.hidden) { dismiss(); event.stopPropagation(); }
  });
})();
