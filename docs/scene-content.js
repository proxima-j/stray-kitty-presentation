(() => {
  'use strict';
  // Transformed/off-screen scenes are not native lazy-loading boundaries.
  // Attach image, SVG and poster URLs only when their scene/view is needed.
  const scenes = [...document.querySelectorAll('.scene')];
  function loadSceneImages(scene) {
    scene?.querySelectorAll('[data-media-src], [data-media-poster]').forEach(element => {
      if (element.closest('[hidden]')) return;
      if (element.dataset.mediaPoster && !element.hasAttribute('poster')) {
        element.setAttribute('poster', element.dataset.mediaPoster);
      }
      if (element.tagName.toLowerCase() === 'video') return;
      const attribute = element.tagName.toLowerCase() === 'image' ? 'href' :
        element.tagName.toLowerCase() === 'object' ? 'data' : 'src';
      if (element.dataset.mediaSrc && !element.hasAttribute(attribute)) {
        element.setAttribute(attribute, element.dataset.mediaSrc);
      }
    });
  }
  window.addEventListener('presentation:loadmedia', event => loadSceneImages(document.getElementById(event.detail.id)));
  const requestedPage = new URLSearchParams(location.search).get('page');
  loadSceneImages(scenes.find(scene => scene.dataset.page === requestedPage || scene.id === requestedPage) || scenes[0]);
  const frame = document.getElementById('dialogueFrame');
  const dialogue = [...frame.querySelectorAll('[data-dialogue]')];
  const state = document.getElementById('dialogueState');
  let dialogueIndex = 0;
  frame.addEventListener('click', () => {
    dialogueIndex = (dialogueIndex + 1) % dialogue.length;
    dialogue.forEach((image, index) => { image.hidden = index !== dialogueIndex; });
    frame.dataset.dialogueState = String(dialogueIndex + 1);
    state.textContent = `Dialogue ${dialogueIndex + 1} of 3. Click or press Enter or Space for the next dialogue.`;
    loadSceneImages(frame.closest('.scene'));
  });
  frame.dataset.dialogueState = '1';

  const home = document.getElementById('home-hub');
  const tabs = [...home.querySelectorAll('[data-home-view]')];
  const views = [...home.querySelectorAll('.home-view')];
  const clips = [...document.querySelectorAll('video[data-scene-video]')];
  let activeView = { id: '', visible: false };
  const manualPause = new WeakSet();
  const pendingPlay = new WeakSet();
  // Keep the full film available without fetching it behind later scenes.
  const openingFilm = document.getElementById('openingVideo');
  const filmSource = openingFilm.querySelector('source');
  const mediaBase = document.currentScript?.src || location.href;
  function loadOpeningFilm() {
    if (!filmSource?.dataset.filmSrc || filmSource.hasAttribute('src')) return;
    filmSource.src = new URL(filmSource.dataset.filmSrc, mediaBase).href;
    openingFilm.preload = 'auto';
    openingFilm.load();
  }
  // The large full film starts downloading only after the explicit Play action.
  openingFilm.preload = 'none';
  document.getElementById('playOpeningFilm')?.addEventListener('click', loadOpeningFilm);

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
      video.preload = play ? 'auto' : 'none';
      if (play && !video.hasAttribute('src') && video.dataset.mediaSrc) {
        video.src = video.dataset.mediaSrc;
        video.load();
      }
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
    loadSceneImages(home);
    syncClips();
  }));
  clips.forEach(video => {
    video.parentElement.querySelector('.clip-toggle').addEventListener('click', () => {
      if (video.closest('#home-hub') && video.error) video.load();
      if (video.paused) manualPause.delete(video);
      else manualPause.add(video);
      syncClips();
    });
    // Home keeps its genuine poster/still on a failed request; retry uses this player.
    if (video.closest('#home-hub')) {
      const fallback = document.createElement('small');
      fallback.className = 'home-media-error';
      fallback.setAttribute('role', 'status');
      fallback.textContent = 'Video unavailable · press Play to retry';
      fallback.hidden = true;
      video.parentElement.append(fallback);
      video.addEventListener('error', () => { fallback.hidden = false; });
      video.addEventListener('loadeddata', () => { fallback.hidden = true; });
    }
    video.addEventListener('play', () => updateButton(video));
    video.addEventListener('pause', () => updateButton(video));
    video.addEventListener('loadeddata', syncClips);
    video.addEventListener('canplay', syncClips);
  });
  window.addEventListener('presentation:viewchange', event => {
    activeView = event.detail;
    loadSceneImages(document.getElementById(activeView.id));
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
