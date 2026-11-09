
(() => {
  'use strict';
  const qa = document.getElementById('ddSequence');
  if (qa) {
    const idle = document.getElementById('ddIdleVideo');
    const response = document.getElementById('ddResponseVideo');
    const clickArea = document.getElementById('ddGameClick');
    const reveal = document.getElementById('ddDatadogAfter');
    const progress = document.getElementById('ddDatadogProgress');
    const finished = document.getElementById('ddDatadogFinished');
    const replay = document.getElementById('ddReplay');
    const view = document.getElementById('ddViewTrace');
    const sound = document.getElementById('ddSound');
    const hint = document.getElementById('ddActionHint');
    const overlay = document.getElementById('ddTraceOverlay');
    const close = document.getElementById('ddTraceClose');
    let step = 'idle';
    let audioEnabled = true;
    function setStep(next) {
      step = next;
      qa.dataset.demoState = step;
      progress.hidden = next !== 'response';
      finished.hidden = next !== 'complete';
      clickArea.disabled = next !== 'idle';
      hint.textContent = next === 'idle' ? 'Click the event choice in the game frame' :
        next === 'response' ? 'Playing the genuine recorded event result…' :
        'Trace recorded · use Replay to repeat';
      replay.disabled = next === 'idle';
      view.disabled = next !== 'complete';
      reveal.classList.toggle('is-visible', next === 'complete');
    }
    function replayDemo() {
      response.pause();
      response.hidden = true;
      try { response.currentTime = 0; } catch (_) {}
      idle.hidden = false;
      try { idle.currentTime = 0; } catch (_) {}
      if (!document.hidden) idle.play().catch(() => {});
      closeOverlay();
      setStep('idle');
    }
    function finish() {
      if (step !== 'response') return;
      setStep('complete');
    }
    function start() {
      if (step !== 'idle') return;
      setStep('response');
      idle.pause();
      idle.hidden = true;
      response.hidden = false;
      response.muted = !audioEnabled;
      try { response.currentTime = 0; } catch (_) {}
      const play = response.play();
      if (play && typeof play.catch === 'function') {
        play.catch(() => { response.muted = true; return response.play(); })
            .catch(() => { response.hidden = true; idle.hidden = false; idle.play().catch(() => {}); setStep('idle'); });
      }
    }
    function closeOverlay() { overlay.hidden = true; }
    clickArea.addEventListener('click', start);
    response.addEventListener('ended', finish);
    response.addEventListener('error', () => { if (step === 'response') replayDemo(); });
    replay.addEventListener('click', replayDemo);
    view.addEventListener('click', () => { if (step === 'complete') { overlay.hidden = false; close.focus(); } });
    close.addEventListener('click', closeOverlay);
    overlay.addEventListener('click', event => { if (event.target === overlay) closeOverlay(); });
    sound.addEventListener('click', () => {
      audioEnabled = !audioEnabled;
      response.muted = !audioEnabled;
      sound.setAttribute('aria-pressed', String(audioEnabled));
      sound.textContent = audioEnabled ? 'Sound: On' : 'Sound: Off';
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && !overlay.hidden) { closeOverlay(); event.stopPropagation(); }
    });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        idle.pause();
        if (step === 'response') response.pause();
      } else if (step === 'idle') {
        idle.play().catch(() => {});
      } else if (step === 'response') {
        response.play().catch(() => {});
      }
    });
    idle.muted = true;
    idle.play().catch(() => {});
    setStep('idle');
  }
  const dashboard = document.getElementById('ddDashboardPreview');
  if (dashboard) {
    const tabs = [...dashboard.querySelectorAll('[data-dashboard-tab]')];
    const panels = [...dashboard.querySelectorAll('[data-dashboard-panel]')];
    tabs.forEach(tab => tab.addEventListener('click', () => {
      const selected = tab.dataset.dashboardTab;
      tabs.forEach(button => button.setAttribute('aria-selected', String(button === tab)));
      panels.forEach(panel => {
        const active = panel.dataset.dashboardPanel === selected;
        panel.hidden = !active;
        if (active) panel.querySelectorAll('img[data-src]').forEach(img => {
          img.src = img.dataset.src; img.removeAttribute('data-src');
        });
      });
    }));
  }
  const synth = document.getElementById('ddSyntheticPreview');
  if (synth) {
    const tabs = [...synth.querySelectorAll('[data-check-tab]')];
    const images = [...synth.querySelectorAll('[data-check-panel]')];
    tabs.forEach(tab => tab.addEventListener('click', () => {
      tabs.forEach(b => b.setAttribute('aria-selected', String(b === tab)));
      images.forEach(panel => {
        const active = panel.dataset.checkPanel === tab.dataset.checkTab;
        panel.hidden = !active;
        if (active) panel.querySelectorAll('img[data-src]').forEach(img => {
          img.src = img.dataset.src; img.removeAttribute('data-src');
        });
      });
    }));
  }
})();
