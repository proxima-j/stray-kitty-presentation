(() => {
  'use strict';
  const frame = document.getElementById('dialogueFrame');
  const dialogue = [...frame.querySelectorAll('[data-dialogue]')];
  const state = document.getElementById('dialogueState');
  let dialogueIndex = 0;
  frame.addEventListener('click', () => {
    dialogueIndex = (dialogueIndex + 1) % dialogue.length;
    dialogue.forEach((image, index) => { image.hidden = index !== dialogueIndex; });
    frame.dataset.dialogueState = String(dialogueIndex + 1);
    state.textContent = `Dialogue ${dialogueIndex + 1} of 3. Click or press Enter or Space for the next dialogue.`;
  });
  frame.dataset.dialogueState = '1';

  const home = document.getElementById('home-hub');
  const tabs = [...home.querySelectorAll('[data-home-view]')];
  const views = [...home.querySelectorAll('.home-view')];
  const clips = [...document.querySelectorAll('video[data-scene-video]')];
  let activeView = { id: '', visible: false };
  const manualPause = new WeakSet();
  const pendingPlay = new WeakSet();
  // Direct entry into a later scene should not compete with the full film download.
  const requestedPage = new URLSearchParams(location.search).get('page');
  const openingFilm = document.getElementById('openingVideo');
  if (requestedPage && !['01', 'opening-film'].includes(requestedPage) && openingFilm.paused) {
    openingFilm.preload = 'none';
    openingFilm.load();
  }

  function shouldPlay(video) {
    return activeView.visible && video.closest('.scene').id === activeView.id &&
      !video.closest('[hidden]') && !document.hidden && !manualPause.has(video);
  }
  function updateButton(video) {
    const button = video.parentElement.querySelector('.clip-toggle');
    const playing = !video.paused;
    video.parentElement.classList.toggle('is-paused', !playing);
    button.textContent = video.hasAttribute('data-map-clip') ? (playing ? 'PAUSE' : 'PLAY') : (playing ? 'Ⅱ' : '▶');
    if (video.hasAttribute('data-map-clip')) button.setAttribute('aria-pressed', String(playing));
    button.setAttribute('aria-label', `${playing ? 'Pause' : 'Play'} ${video.getAttribute('aria-label')}`);
  }
  function syncClips() {
    clips.forEach(video => {
      const play = shouldPlay(video);
      video.autoplay = play;
      video.muted = true;
      video.preload = play ? 'auto' : video.hasAttribute('data-map-clip') ? 'none' : 'metadata';
      if (play && video.paused && !pendingPlay.has(video)) {
        pendingPlay.add(video);
        video.play().then(() => { if (!shouldPlay(video)) video.pause(); })
          .catch(() => {})
          .finally(() => { pendingPlay.delete(video); updateButton(video); });
      } else if (!play && !video.paused) video.pause();
      updateButton(video);
    });
  }
  tabs.forEach(button => button.addEventListener('click', () => {
    home.querySelector('.home-content').dataset.homeMode = button.dataset.homeView;
    tabs.forEach(tab => tab.setAttribute('aria-pressed', String(tab === button)));
    views.forEach(view => { view.hidden = view.dataset.view !== button.dataset.homeView; });
    syncClips();
  }));
  clips.forEach(video => {
    video.parentElement.querySelector('.clip-toggle').addEventListener('click', () => {
      if (video.paused) manualPause.delete(video);
      else manualPause.add(video);
      syncClips();
    });
    video.addEventListener('play', () => updateButton(video));
    video.addEventListener('pause', () => updateButton(video));
    video.addEventListener('loadeddata', syncClips);
    video.addEventListener('canplay', syncClips);
  });
  window.addEventListener('presentation:viewchange', event => {
    activeView = event.detail;
    syncClips();
  });
  document.addEventListener('visibilitychange', syncClips);

  const dialog = document.getElementById('screenshotDialog');
  const enlarged = document.getElementById('enlargedScreenshot');
  document.querySelectorAll('[data-full-image]').forEach(button => button.addEventListener('click', () => {
    enlarged.src = button.dataset.fullImage;
    enlarged.alt = button.dataset.imageTitle + ' — full original screenshot';
    document.getElementById('screenshotTitle').textContent = button.dataset.imageTitle;
    dialog.showModal();
  }));
  document.getElementById('closeScreenshot').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  document.addEventListener('keydown', event => {
    if (!dialog.open) return;
    event.stopImmediatePropagation();
    if (event.key === 'Escape') { event.preventDefault(); dialog.close(); }
  }, true);
})();
