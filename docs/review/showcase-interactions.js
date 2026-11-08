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
  const skills = document.getElementById('skillsTrigger');
  const video = document.getElementById('repositionVideo');
  const source = document.getElementById('repositionSource');
  const demos = [
    {button: reposition, src: video.getAttribute('src'), label: 'Reposition', caption: 'REPOSITION · SEPARATE TAKE · 1×'},
    {button: skills, src: skills.dataset.demoSrc, label: 'Activate Skills', caption: 'BANBAN · SHIELD · SEPARATE TAKE · 1×'}
  ];
  let state = 0, playback = 0, activeDemo = null, bufferingTimer = 0, retryable = false;
  for (const button of [trigger, close, next, before, reposition, skills]) button.dataset.localSpace = '';
  function stopReposition() {
    playback++; clearTimeout(bufferingTimer); activeDemo = null; retryable = false;
    video.pause(); video.hidden = true; source.hidden = true;
    demos.forEach(demo => { demo.button.setAttribute('aria-pressed', 'false'); demo.button.removeAttribute('aria-busy'); });
  }
  function showBuffering() {
    if (!activeDemo) return;
    source.hidden = false;
    source.textContent = `${video.currentTime > 0 ? 'Buffering' : 'Loading'} ${activeDemo.label}…`;
    activeDemo.button.setAttribute('aria-busy', 'true');
    clearTimeout(bufferingTimer);
    bufferingTimer = setTimeout(() => {
      if (!activeDemo || video.readyState >= 3) return;
      retryable = true;
      source.textContent = `Still buffering — click ${activeDemo.label} to retry.`;
    }, 15000);
  }
  function showFailure() {
    if (!activeDemo) return;
    clearTimeout(bufferingTimer); retryable = true;
    video.hidden = true; source.hidden = false;
    activeDemo.button.removeAttribute('aria-busy');
    source.textContent = `Clip unavailable — click ${activeDemo.label} to retry.`;
  }
  demos.forEach(demo => demo.button.addEventListener('click', async () => {
    if (activeDemo === demo && !retryable) { stopReposition(); return; }
    stopReposition(); activeDemo = demo;
    const request = playback;
    video.src = demo.src; video.load();
    video.currentTime = 0; video.playbackRate = 1; video.muted = true;
    video.setAttribute('aria-label', `${demo.label}: genuine continuous clip, separate take at the same stage, normal speed`);
    video.hidden = false; demo.button.setAttribute('aria-pressed', 'true'); showBuffering();
    try { await video.play(); } catch (error) { if (request === playback) showFailure(); }
  }));
  video.addEventListener('waiting', showBuffering);
  video.addEventListener('stalled', showBuffering);
  video.addEventListener('playing', () => {
    if (!activeDemo) return;
    clearTimeout(bufferingTimer); retryable = false;
    activeDemo.button.removeAttribute('aria-busy'); source.textContent = activeDemo.caption;
  });
  video.addEventListener('ended', stopReposition);
  video.addEventListener('error', showFailure);
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
