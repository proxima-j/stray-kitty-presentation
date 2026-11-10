(() => {
  'use strict';

  const home = document.querySelector('.v2p-home');
  if (home) {
    const buttons = [...home.querySelectorAll('[data-v2-tab]')];
    const panels = [...home.querySelectorAll('[data-v2-view]')];
    const stopVideos = () => {
      home.querySelectorAll('video').forEach(video => {
        video.pause();
        video.currentTime = 0;
      });
    };
    function choose(name) {
      stopVideos();
      for (const button of buttons) {
        button.setAttribute('aria-pressed', String(button.dataset.v2Tab === name));
      }
      for (const panel of panels) {
        const selected = panel.dataset.v2View === name;
        panel.hidden = !selected;
        if (selected) {
          panel.querySelectorAll('video[data-v2-video]').forEach(video => {
            if (!video.src) video.src = video.dataset.v2Video;
          });
        }
      }
    }
    for (const button of buttons) {
      button.addEventListener('click', () => choose(button.dataset.v2Tab));
    }
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stopVideos();
    });
    choose('growth');
  }

  const combat = document.querySelector('.v2p-combat');
  if (!combat) return;
  const video = combat.querySelector('#v2CombatVideo');
  const still = combat.querySelector('#v2CombatStill');
  const label = combat.querySelector('#v2CombatMediaLabel');
  const controls = [...combat.querySelectorAll('[data-v2-combat-clip]')];
  const advisorToggle = combat.querySelector('[data-v2-advisor]');
  const advisorPanel = combat.querySelector('[data-v2-advisor-panel]');
  const clipSources = {
    reposition: '../assets/pages/09/reposition-closeup.mp4',
    skill: '../assets/pages/09/skill-activation-closeup.mp4'
  };

  function resetBattle() {
    video.pause();
    video.hidden = true;
    still.hidden = false;
    label.textContent = 'CURRENT REAL GAME CAPTURE';
    controls.forEach(control => control.setAttribute('aria-pressed', 'false'));
  }
  async function playClip(name) {
    const src = clipSources[name];
    if (!src) return;
    video.pause();
    video.muted = true; // These existing captures have no in-game SFX. New assets are pending.
    if (video.getAttribute('src') !== src) {
      video.src = src;
      video.load();
    }
    video.hidden = false;
    still.hidden = true;
    label.textContent = 'EXISTING GAME CLIP · SILENT · NEW VFX/SFX PENDING';
    controls.forEach(control => control.setAttribute('aria-pressed', String(control.dataset.v2CombatClip === name)));
    try {
      video.currentTime = 0;
      await video.play();
    } catch {
      label.textContent = 'Use the video player to retry · existing silent capture';
    }
  }

  controls.forEach(button => button.addEventListener('click', () => playClip(button.dataset.v2CombatClip)));
  combat.querySelector('[data-v2-combat-reset]').addEventListener('click', resetBattle);
  video.addEventListener('ended', resetBattle);
  advisorToggle.addEventListener('click', () => {
    const opened = advisorPanel.hidden;
    advisorPanel.hidden = !opened;
    advisorToggle.setAttribute('aria-expanded', String(opened));
    if (opened) video.pause();
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) video.pause();
  });
  resetBattle();
})();