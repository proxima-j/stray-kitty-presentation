
(() => {
  'use strict';
  const qa = document.getElementById('ddSequence');
  if (qa) {
    const idle = document.getElementById('ddIdleStill');
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
    // The overlay is an exact crop of the green button in the 1600×900 still.
    const sourceButton = { x: 563, y: 642, width: 474, height: 56 };
    function alignGameButton() {
      const { width, height } = idle.parentElement.getBoundingClientRect();
      const scale = Math.min(width / 1600, height / 900);
      const left = (width - 1600 * scale) / 2;
      const top = (height - 900 * scale) / 2;
      Object.assign(clickArea.style, {
        left: `${left + sourceButton.x * scale}px`,
        top: `${top + sourceButton.y * scale}px`,
        width: `${sourceButton.width * scale}px`,
        height: `${sourceButton.height * scale}px`
      });
    }
    new ResizeObserver(alignGameButton).observe(idle.parentElement);
    idle.addEventListener('load', alignGameButton);
    clickArea.addEventListener('keydown', event => {
      if (event.key === ' ' || event.key === 'Enter') event.stopPropagation();
    });
    function setStep(next) {
      step = next;
      qa.dataset.demoState = step;
      progress.hidden = next !== 'response';
      finished.hidden = next !== 'complete';
      clickArea.disabled = next !== 'idle';
      clickArea.hidden = next !== 'idle';
      hint.textContent = next === 'idle' ? 'Click the recorded Roll dice button' :
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
      closeOverlay();
      setStep('idle');
      alignGameButton();
    }
    function finish() {
      if (step !== 'response') return;
      setStep('complete');
    }
    function start(event) {
      event.stopPropagation();
      if (step !== 'idle') return;
      setStep('response');
      idle.hidden = true;
      response.hidden = false;
      response.muted = !audioEnabled;
      try { response.currentTime = 0; } catch (_) {}
      const play = response.play();
      if (play && typeof play.catch === 'function') {
        play.catch(() => { response.muted = true; return response.play(); })
            .catch(() => { response.hidden = true; idle.hidden = false; setStep('idle'); });
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
        if (step === 'response') response.pause();
      } else if (step === 'response') {
        response.play().catch(() => {});
      }
    });
    setStep('idle');
    alignGameButton();
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
