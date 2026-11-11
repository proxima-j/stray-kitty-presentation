(() => {
  'use strict';

  // Presentation pacing: the viewport moves first, then content assembles into a
  // stable view. A single time-driven player owns arrow-key progression; the
  // mouse wheel remains genuinely scrub-controlled with damped rendering.
  const space = document.getElementById('scrollSpace');
  const world = document.getElementById('world');
  const routeSvg = document.getElementById('roadDrawing');
  const routeGhost = document.getElementById('routeGhost');
  const routeInk = document.getElementById('routeInk');
  const routeReveal = document.getElementById('routeReveal');
  const hero = document.getElementById('heroCat');
  const video = document.getElementById('openingVideo');
  const filmPlay = document.getElementById('playOpeningFilm');
  const filmSkip = document.getElementById('skipOpeningFilm');
  const helpButton = document.getElementById('helpButton');
  const helpPanel = document.getElementById('helpPanel');
  const helpClose = document.getElementById('helpClose');
  const paceSelect = document.getElementById('paceSelect');
  const scenes = [...document.querySelectorAll('.scene')];
  const sceneBuilds = scenes.map(scene => ({
    camera: scene.querySelector('.scene-camera'),
    elements: [...scene.querySelectorAll('[data-build]')],
    progress: -1,
  }));
  const homeSceneIndex = scenes.findIndex(scene => scene.id === 'home-hub');

  // Integration geometry is derived from the registry; v3 pacing stays unchanged.
  scenes.forEach((scene, index) => { scene.style.left = `${index * 100}vw`; });
  world.style.width = routeSvg.style.width = `${scenes.length * 100}vw`;
  space.style.height = `${100 + Math.max(0, scenes.length - 1) * 125}vh`;
  let lastViewKey = '';
  const stops = scenes.map((_, index) => index / Math.max(1, scenes.length - 1));
  const clamp = (value, min = 0, max = 1) => Math.max(min, Math.min(max, value));
  const mix = (a, b, t) => a + (b - a) * t;
  const smooth = value => { const t = clamp(value); return t * t * (3 - 2 * t); };
  const segment = (value, a, b) => clamp((value - a) / Math.max(0.000001, b - a));
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Keyboard: one fixed-duration, reliably paced scene per press.
  let beatDurationMs = 4200;
  let keyboardMotion = null;
  let pendingDirection = 0;
  let renderedProgress = 0;
  let previousDistance = 0;
  let lastFrameAt = 0;
  let animationFrame = 0;
  let roadPathLength = 0;
  let catHeight = 66;
  let viewportW = window.innerWidth;
  let viewportH = window.innerHeight;
  let roadSamples = [];
  let lastActiveIndex = -1;
  const scrollTolerancePx = 1;

  function scrollRange() {
    return Math.max(1, space.offsetHeight - window.innerHeight);
  }
  function routeGeometry() {
    viewportW = window.innerWidth;
    viewportH = window.innerHeight;
    catHeight = hero.getBoundingClientRect().height || 66;
    const w = viewportW, h = viewportH;
    const d = [
      `M 0 ${h * .836}`,
      `C ${w * .25} ${h * .833}, ${w * .50} ${h * .804}, ${w * .83} ${h * .824}`,
      `S ${w * 1.43} ${h * .850}, ${w * 1.86} ${h * .822}`,
      `S ${w * 2.52} ${h * .806}, ${w * 2.94} ${h * .835}`,
      `S ${w * 3.60} ${h * .815}, ${w * 4} ${h * .832}`,
    ];
    // Keep the original first four route segments and continue their dotted path.
    for (let end = 5; end <= scenes.length; end++) {
      d.push(`S ${w * (end - .4)} ${h * (end % 2 ? .85 : .81)}, ${w * end} ${h * .832}`);
    }
    const route = d.join(' ');
    routeSvg.setAttribute('viewBox', `0 0 ${scenes.length * w} ${h}`);
    routeGhost.setAttribute('d', route);
    routeInk.setAttribute('d', route);
    routeReveal.setAttribute('height', String(h));
    roadPathLength = routeGhost.getTotalLength();
    // Sample this SVG only on resize; the animation loop interpolates in JS.
    roadSamples = Array.from({ length: 512 }, (_, index) => {
      const pt = routeGhost.getPointAtLength((index / 511) * roadPathLength);
      return { x: pt.x, y: pt.y };
    });
  }
  function roadY(x) {
    let lo = 0, hi = roadSamples.length - 1;
    while (hi - lo > 1) {
      const mid = Math.floor((lo + hi) / 2);
      if (roadSamples[mid].x < x) lo = mid;
      else hi = mid;
    }
    const a = roadSamples[lo], b = roadSamples[hi];
    return mix(a.y, b.y, clamp((x - a.x) / Math.max(1, b.x - a.x)));
  }

  function stepPhase(progress, index) {
    if (index === 0) return 1;
    return segment(progress, stops[index - 1], stops[index]);
  }
  function cameraDistance(progress) {
    if (progress <= stops[0]) return 0;
    for (let index = 1; index < stops.length; index++) {
      if (progress <= stops[index]) {
        const phase = stepPhase(progress, index);
        // Travel lasts the first ~72% of a beat, with content beginning to
        // assemble while the cat is still approaching its destination.
        return index - 1 + smooth(segment(phase, 0.015, 0.72));
      }
    }
    return stops.length - 1;
  }
  function revealProgress(progress, index) {
    if (index === 0) return 1;
    if (progress <= stops[index - 1]) return 0;
    if (progress >= stops[index]) return 1;
    return segment(stepPhase(progress, index), 0.23, 0.985);
  }
  function buildElement(element, progress) {
    // Original data-at values indicate ordering. Compress their start positions
    // into 0–68% of the reveal beat so every item has visible time to unfold.
    const start = Math.min(0.68, Number(element.dataset.at || 0) * 0.73);
    const q = smooth(segment(progress, start, start + 0.29));
    const type = element.dataset.build;
    element.style.opacity = String(clamp(q * 1.7));
    if (type === 'rise') {
      element.style.transform = `translate3d(0,${(1 - q) * 120}px,0) perspective(850px) rotateX(${(1 - q) * -27}deg) scaleY(${0.48 + 0.52 * q})`;
      element.style.clipPath = `inset(${(1 - q) * 90}% 0 0 0)`;
    } else if (type === 'line') {
      element.style.opacity = String(q);
      element.style.transform = `scaleX(${q})`;
    } else {
      element.style.transform = `translate3d(0,${(1 - q) * 40}px,0)`;
      element.style.clipPath = 'none';
    }
  }
  function updateView(progress, deltaSeconds) {
    const cameraDistanceNow = cameraDistance(progress);
    const cameraOffset = cameraDistanceNow * viewportW;
    world.style.transform = `translate3d(${-cameraOffset}px,0,0)`;
    const forwardX = cameraOffset + viewportW * 0.24;
    routeReveal.setAttribute('width', String(forwardX));
    // Give Home Hub captions space; cat and dotted route move together, easing at entry/exit.
    const homeClearance = homeSceneIndex < 0 ? 0 : 60 * smooth(1 - Math.abs(cameraDistanceNow - homeSceneIndex) / .18);
    routeSvg.style.translate = `0 ${homeClearance}px`;
    hero.style.top = `${roadY(forwardX) - catHeight + 3 + homeClearance}px`;

    // Walk only while the camera actually moves. Pausing a manual scroll no
    // longer leaves the cat bouncing indefinitely in place.
    const actualVelocity = deltaSeconds > 0 ? Math.abs(cameraDistanceNow - previousDistance) / deltaSeconds : 0;
    const isWalking = actualVelocity > 0.055 && !reducedMotion;
    hero.classList.toggle('walking', isWalking);
    previousDistance = cameraDistanceNow;

    sceneBuilds.forEach((build, index) => {
      if (index === 0) return;
      const localProgress = revealProgress(progress, index);
      if (localProgress === build.progress) return;
      build.progress = localProgress;
      // CSS perspective is strongest at entry, then settles front-on.
      const approach = smooth(segment(localProgress, 0, 0.68));
      build.camera.style.transform = `perspective(1400px) translate3d(${(1 - approach) * 20}px,${(1 - approach) * 17}px,0) rotateY(${-(1 - approach) * 7}deg) rotateX(${(1 - approach) * 4}deg) scale(${0.95 + 0.05 * approach})`;
      build.elements.forEach(el => buildElement(el, localProgress));
    });

    // Video stops decoding as the opening exits, reducing scroll jank.
    if (cameraDistanceNow > 0.02 || document.hidden) {
      if (video && !video.paused) video.pause();
    }
    world.dataset.distance = cameraDistanceNow.toFixed(4);
    world.dataset.progress = progress.toFixed(4);
    // Integration only: direct review URLs and accessible off-screen scenes.
    const activeIndex = Math.round(cameraDistanceNow);
    if (activeIndex !== lastActiveIndex) {
      lastActiveIndex = activeIndex;
      world.dataset.scene = String(activeIndex);
      scenes.forEach((scene, index) => {
        scene.inert = index !== activeIndex;
        scene.setAttribute('aria-hidden', String(index !== activeIndex));
      });
    }
    if (progress === stops[activeIndex]) {
      const page = scenes[activeIndex].dataset.page;
      const url = new URL(location.href);
      if (url.searchParams.get('page') !== page) {
        url.searchParams.set('page', page);
        history.replaceState(null, '', url);
      }
      document.title = `Stray Kitty — Page ${page} · ${scenes[activeIndex].dataset.title || 'Presentation'}`;
    }
    // Scoped visibility signal for scene interactions; opening-film ownership remains above.
    const visible = Math.abs(cameraDistanceNow - activeIndex) < .01 && !keyboardMotion;
    const viewKey = `${activeIndex}:${visible}`;
    if (viewKey !== lastViewKey) {
      lastViewKey = viewKey;
      world.dataset.settledScene = visible ? scenes[activeIndex].id : '';
      window.dispatchEvent(new CustomEvent('presentation:viewchange', {
        detail: { id: scenes[activeIndex].id, page: scenes[activeIndex].dataset.page, visible }
      }));
    }
  }

  function frame(now) {
    animationFrame = 0;
    const dt = clamp(now - (lastFrameAt || now), 0, 48);
    lastFrameAt = now;
    const range = scrollRange();
    let completed = false;
    if (keyboardMotion) {
      const elapsed = now - keyboardMotion.startedAt;
      const q = clamp(elapsed / keyboardMotion.duration);
      // Linear time here: camera easing and individual reveals are authored
      // inside a beat, while the full beat always takes the same time.
      renderedProgress = mix(keyboardMotion.from, keyboardMotion.to, q);
      window.scrollTo({ top: renderedProgress * range, behavior: 'instant' });
      if (q >= 1) {
        renderedProgress = keyboardMotion.to;
        keyboardMotion = null;
        document.documentElement.dataset.transitioning = 'false';
        completed = true;
      }
    } else {
      const target = clamp(window.scrollY / range);
      // Damped visual follower absorbs trackpad/wheel jumps; limiting its speed
      // keeps scene-builds visible even after a large wheel delta.
      const weight = 1 - Math.exp(-dt / 185);
      if (Math.abs(target - renderedProgress) * range > scrollTolerancePx) {
        const delta = clamp((target - renderedProgress) * weight, -(dt / 1000) * 0.21, (dt / 1000) * 0.21);
        renderedProgress = clamp(renderedProgress + delta);
      } else {
        // Native scroll positions are rounded to pixels. Settle on the exact
        // scene stop so its content, URL and media all agree.
        const stop = stops.find(value => Math.abs(value - target) * range <= scrollTolerancePx);
        if (stop !== undefined) renderedProgress = stop;
      }
    }
    updateView(renderedProgress, dt / 1000);
    if (completed && pendingDirection) advance(pendingDirection);
    if (keyboardMotion || Math.abs(window.scrollY - renderedProgress * range) > scrollTolerancePx) {
      requestFrame();
    } else if (hero.classList.contains('walking')) {
      // One stationary frame to remove walking state after momentum settles.
      requestFrame();
    }
  }
  function requestFrame() {
    if (!animationFrame) animationFrame = requestAnimationFrame(frame);
  }
  function showHelp(show) {
    helpPanel.hidden = !show;
    helpButton.setAttribute('aria-expanded', String(show));
  }
  function finishMotion() {
    if (!keyboardMotion) return;
    startMove(keyboardMotion.toIndex, true);
  }
  function startMove(destinationIndex, immediate = false) {
    pendingDirection = 0;
    const toIndex = clamp(destinationIndex, 0, stops.length - 1);
    const from = renderedProgress;
    const to = stops[toIndex];
    if (to !== from) {
      // Give the destination's stills and posters the travel time to load.
      window.dispatchEvent(new CustomEvent('presentation:loadmedia', { detail: { id: scenes[toIndex].id } }));
    }
    if (immediate || reducedMotion || Math.abs(to - from) < 0.001) {
      keyboardMotion = null;
      renderedProgress = to;
      window.scrollTo({ top: to * scrollRange(), behavior: 'instant' });
      document.documentElement.dataset.transitioning = 'false';
      updateView(renderedProgress, 0);
      requestFrame();
      return;
    }
    const segmentDistance = Math.abs(to - from) / Math.abs(stops[Math.max(1, toIndex)] - stops[Math.max(0, Math.max(1, toIndex) - 1)]);
    const duration = Math.max(750, beatDurationMs * clamp(segmentDistance, 0.18, 1));
    keyboardMotion = { from, to, toIndex, startedAt: performance.now(), duration };
    document.documentElement.dataset.transitioning = 'true';
    requestFrame();
  }
  function advance(direction) {
    if (keyboardMotion) {
      // Buffer one deliberate tap; key repeats are filtered by the listener.
      pendingDirection = direction;
      return;
    }
    pendingDirection = 0;
    const range = scrollRange();
    const index = direction > 0
      ? stops.findIndex(stop => (stop - renderedProgress) * range > scrollTolerancePx)
      : stops.findLastIndex(stop => (renderedProgress - stop) * range > scrollTolerancePx);
    if (index !== -1) startMove(index);
  }
  function onScroll() {
    if (keyboardMotion) {
      // Native scrolling takes over only when the document actually moves
      // away from the position written by the keyboard animation.
      if (Math.abs(window.scrollY - renderedProgress * scrollRange()) <= scrollTolerancePx) return;
      keyboardMotion = null;
      pendingDirection = 0;
      document.documentElement.dataset.transitioning = 'false';
    }
    requestFrame();
  }
  function onResize() {
    routeGeometry();
    // Keep the scene position and any in-flight beat when the viewport changes.
    window.scrollTo({ top: renderedProgress * scrollRange(), behavior: 'instant' });
    previousDistance = cameraDistance(renderedProgress);
    updateView(renderedProgress, 0);
    requestFrame();
  }

  if (video && filmPlay) {
    filmPlay.addEventListener('click', () => {
      if (video.ended) video.currentTime = 0;
      video.muted = false;
      video.controls = true;
      video.play().catch(() => { filmPlay.hidden = false; });
    });
    video.addEventListener('play', () => { filmPlay.hidden = true; });
    video.addEventListener('pause', () => {
      if (video.ended) return;
      filmPlay.hidden = false;
      filmPlay.textContent = 'Resume film ▶';
      filmPlay.setAttribute('aria-label', 'Resume opening film with sound');
    });
    video.addEventListener('ended', () => {
      filmPlay.hidden = false;
      filmPlay.textContent = 'Replay film ▶';
      filmPlay.setAttribute('aria-label', 'Replay opening film with sound');
      filmSkip.textContent = 'Continue →';
    });
    filmSkip.addEventListener('click', () => { video.pause(); advance(1); });
  }
  helpButton.addEventListener('click', () => showHelp(helpPanel.hidden));
  helpClose.addEventListener('click', () => showHelp(false));
  paceSelect.addEventListener('change', () => { beatDurationMs = Number(paceSelect.value); });
  document.addEventListener('keydown', event => {
    if (event.ctrlKey || event.altKey || event.metaKey || ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) return;
    if (event.key === ' ' && document.activeElement?.closest('[data-local-space]')) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      if (!helpPanel.hidden) showHelp(false);
      else finishMotion();
      return;
    }
    if (event.key === '?' || event.key.toLowerCase() === 'h' && event.shiftKey) {
      event.preventDefault(); showHelp(helpPanel.hidden); return;
    }
    if (!helpPanel.hidden) return;
    if (event.key === 'ArrowRight' || event.key === ' ' || event.key === 'PageDown') {
      event.preventDefault(); if (!event.repeat) advance(1);
    }
    if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
      event.preventDefault(); if (!event.repeat) advance(-1);
    }
    if (event.key === 'Home') {
      event.preventDefault(); startMove(0, true);
    }
    if (event.key === 'End') {
      event.preventDefault(); startMove(stops.length - 1, true);
    }
  });
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onResize);
  document.addEventListener('visibilitychange', () => { if (document.hidden) video?.pause(); });

  routeGeometry();
  const requestedPage = new URLSearchParams(location.search).get('page');
  const entryIndex = Math.max(0, scenes.findIndex(scene => scene.dataset.page === requestedPage || scene.id === requestedPage));
  renderedProgress = stops[entryIndex];
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.scrollTo({ top: renderedProgress * scrollRange(), behavior: 'instant' });
  previousDistance = cameraDistance(renderedProgress);
  updateView(renderedProgress, 0);
  requestFrame();
})();
