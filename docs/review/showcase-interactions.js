(() => {
  'use strict';
  const trigger = document.getElementById('advisorTrigger');
  const layer = document.getElementById('advisorLayer');
  const close = document.getElementById('advisorClose');
  const next = document.getElementById('advisorNext');
  const before = document.getElementById('advisorBefore');
  const after = document.getElementById('advisorAfter');
  const step = document.getElementById('advisorStep');
  const reposition = document.getElementById('repositionTrigger');
  const video = document.getElementById('repositionVideo');
  const source = document.getElementById('repositionSource');
  let state = 0, playback = 0;
  for (const button of [trigger, close, next, before, reposition]) button.dataset.localSpace = '';
  function stopReposition() {
    playback++; video.pause(); video.hidden = true; source.hidden = true;
    reposition.setAttribute('aria-pressed', 'false');
  }
  reposition.addEventListener('click', async () => {
    if (!video.hidden) { stopReposition(); return; }
    const request = ++playback;
    video.currentTime = 0; video.playbackRate = 1; video.muted = true;
    video.hidden = false; source.hidden = false; reposition.setAttribute('aria-pressed', 'true');
    try { await video.play(); } catch (error) { if (request === playback) stopReposition(); }
  });
  video.addEventListener('ended', stopReposition);
  video.addEventListener('error', stopReposition);
  function render() {
    layer.hidden = state === 0;
    trigger.setAttribute('aria-expanded', String(state > 0));
    before.hidden = state !== 1; after.hidden = state !== 2;
    step.textContent = state === 2 ? '2 / 2' : '1 / 2';
    next.textContent = state === 2 ? 'Back to question' : 'Show answer →';
  }
  function dismiss(focus = true) { state = 0; render(); if (focus) trigger.focus({preventScroll: true}); }
  trigger.addEventListener('click', () => { stopReposition(); state = 1; render(); close.focus({preventScroll: true}); });
  close.addEventListener('click', () => dismiss());
  next.addEventListener('click', () => { state = state === 1 ? 2 : 1; render(); });
  before.addEventListener('click', () => { state = 2; render(); next.focus({preventScroll: true}); });
  document.addEventListener('keydown', event => {
    if (state > 0 && ['Escape', 'ArrowRight', 'ArrowLeft'].includes(event.key)) {
      event.preventDefault(); event.stopImmediatePropagation();
      if (event.key === 'Escape') dismiss();
      else if (!event.repeat) { state = event.key === 'ArrowRight' ? 2 : 1; render(); }
    } else if (event.key === 'Escape' && !video.hidden) {
      event.preventDefault(); event.stopImmediatePropagation(); stopReposition();
    }
  }, true);
  window.addEventListener('presentation:viewchange', event => {
    if (event.detail.id !== 'combat' || !event.detail.visible) { stopReposition(); dismiss(false); }
  });
  render();
})();
