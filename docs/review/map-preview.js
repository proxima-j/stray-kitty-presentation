(() => {
  'use strict';
  const clips = [...document.querySelectorAll('.map-media video')];

  for (const video of clips) {
    // The first real frame is the paused visual for review, without new poster assets.
    video.addEventListener('loadedmetadata', () => {
      if (!video.dataset.previewReady && Number.isFinite(video.duration) && video.duration > 0.7) {
        video.dataset.previewReady = 'true';
        video.currentTime = 0.5;
      }
    }, { once: true });
    video.addEventListener('play', () => {
      for (const other of clips) if (other !== video && !other.paused) other.pause();
      updateButtons();
    });
    video.addEventListener('pause', updateButtons);
    video.addEventListener('ended', updateButtons);
  }
  function updateButtons() {
    for (const video of clips) {
      const media = video.closest('.map-media');
      const button = media?.querySelector('.clip-toggle');
      if (!button) continue;
      const playing = !video.paused;
      media.closest('.map-card')?.classList.toggle('is-playing', playing);
      button.textContent = playing ? 'PAUSE' : 'PLAY';
      button.setAttribute('aria-pressed', String(playing));
    }
  }
  document.querySelectorAll('.clip-toggle').forEach(button => {
    button.addEventListener('click', async () => {
      const video = button.closest('.map-media').querySelector('video');
      if (!video) return;
      if (!video.paused) { video.pause(); return; }
      try { await video.play(); } catch { button.textContent = 'RETRY'; }
    });
  });
})();