(() => {
  'use strict';
  const scene = document.getElementById('adaptive-interface');
  const frame = scene.querySelector('#demoBrowser');
  const stage = scene.querySelector('.adaptive-stage');
  const bar = frame.querySelector('.demo-browser-bar');
  const canvas = scene.querySelector('.adaptive-canvas');
  const note = scene.querySelector('.review-note');
  const capture = scene.querySelector('#uiuxCapture');
  const images = [...capture.querySelectorAll('[data-capture]')];
  const buttons = [...scene.querySelectorAll('.viewport-toggle button')];
  let narrow = false;
  stage.dataset.viewport = 'wide';
  function fit() {
    const box = getComputedStyle(canvas);
    const barHeight = bar.offsetHeight;
    const available = Math.max(1, canvas.clientHeight - parseFloat(box.paddingTop) - parseFloat(box.paddingBottom) - barHeight - 4);
    const availableWidth = Math.max(1, canvas.clientWidth - parseFloat(box.paddingLeft) - parseFloat(box.paddingRight) - 4);
    const ratio = narrow ? 565 / 616 : 1600 / 900;
    const height = Math.min(available, availableWidth / ratio);
    frame.style.height = `${height + barHeight + 4}px`;
    frame.style.width = `${height * ratio + 4}px`;
  }
  buttons.forEach(button => {
    button.dataset.localSpace = '';
    button.addEventListener('click', () => {
      narrow = button.dataset.state === 'narrow';
      const state = narrow ? 'narrow' : 'wide';
      frame.dataset.state = state;
      stage.dataset.viewport = state;
      images.forEach(image => { image.hidden = image.dataset.capture !== state; });
      capture.dataset.fullImage = narrow ? 'assets/uiux/adaptive/narrow-user-selected.png' : 'assets/uiux/adaptive/normal-1600x900.png';
      capture.dataset.imageTitle = narrow ? 'Narrow view' : 'Normal view';
      note.textContent = narrow ? 'Narrow view' : 'Normal view';
      buttons.forEach(candidate => candidate.setAttribute('aria-pressed', String(candidate === button)));
      window.dispatchEvent(new CustomEvent('presentation:loadmedia', {detail: {id: scene.id}}));
      fit();
    });
  });
  new ResizeObserver(fit).observe(canvas);
  fit();
})();
