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

  function shouldPlay(video) {
    return activeView.visible && video.closest('.scene').id === activeView.id &&
      !video.closest('[hidden]') && !document.hidden && !manualPause.has(video);
  }
  function updateButton(video) {
    const button = video.parentElement.querySelector('.clip-toggle');
    const playing = !video.paused;
    button.textContent = playing ? 'Ⅱ' : '▶';
    button.setAttribute('aria-label', `${playing ? 'Pause' : 'Play'} ${video.getAttribute('aria-label')}`);
  }
  function syncClips() {
    clips.forEach(video => {
      const play = shouldPlay(video);
      video.autoplay = play;
      video.muted = true;
      if (play && video.paused) {
        video.play().then(() => { if (!shouldPlay(video)) video.pause(); }).catch(() => updateButton(video));
      } else if (!play && !video.paused) video.pause();
      updateButton(video);
    });
  }
  tabs.forEach(button => button.addEventListener('click', () => {
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
  });
  window.addEventListener('presentation:viewchange', event => {
    activeView = event.detail;
    syncClips();
  });
  document.addEventListener('visibilitychange', syncClips);
})();
