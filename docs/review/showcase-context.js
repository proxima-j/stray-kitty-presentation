/* A limited review sequence assembled from existing sources, not another deck. */
(async () => {
  'use strict';
  const parser = new DOMParser();
  const here = new URL(location.href);
  const deckURL = new URL('../index.html', here);
  const isCombat = here.pathname.endsWith('combat-02-friends-ai.html');
  const otherURL = new URL(isCombat ? 'events-01-random.html' : 'combat-02-friends-ai.html', here);
  otherURL.searchParams.set('v', 'combat-playback-20261109');
  const current = document.querySelector('main.showcase-review').cloneNode(true);
  async function read(url) {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Review source unavailable (${response.status})`);
    return parser.parseFromString(await response.text(), 'text/html');
  }
  function resolveMedia(root, base) {
    root.querySelectorAll('[src],[href],[poster],[data-full-image],[data-demo-src]').forEach(node => {
      for (const attr of ['src', 'href', 'poster', 'data-full-image', 'data-demo-src']) {
        const value = node.getAttribute(attr);
        if (value && !value.startsWith('#')) node.setAttribute(attr, new URL(value, base).href);
      }
    });
  }
  async function script(path) {
    await new Promise((resolve, reject) => {
      const node = document.createElement('script');
      const url = new URL(path, here);
      if (path === 'showcase-interactions.js') url.searchParams.set('v', 'combat-playback-20261109');
      node.src = url.href;
      node.onload = resolve; node.onerror = reject;
      document.body.append(node);
    });
  }
  function preloadPlayer() {
    return Promise.all(['showcase-interactions.js', '../scene-content.js', '../engine-v3.js'].map(path => new Promise((resolve, reject) => {
      const link = document.createElement('link');
      const url = new URL(path, here);
      if (path === 'showcase-interactions.js') url.searchParams.set('v', 'combat-playback-20261109');
      link.rel = 'preload'; link.as = 'script'; link.href = url.href;
      link.onload = resolve; link.onerror = reject; document.head.append(link);
    })));
  }
  try {
    const [deck, other] = await Promise.all([read(deckURL), read(otherURL), preloadPlayer()]);
    const events = isCombat ? other.querySelector('main.showcase-review') : current;
    const combat = isCombat ? current : other.querySelector('main.showcase-review');
    resolveMedia(events, isCombat ? otherURL : here);
    resolveMedia(combat, isCombat ? here : otherURL);
    deck.querySelectorAll('script').forEach(node => node.remove());
    resolveMedia(deck.body, deckURL);
    const opening = deck.getElementById('openingVideo');
    // The shared scene interactions expect this optional film element. It stays
    // hidden and source-free; the full opening film is not loaded for this review.
    opening.replaceChildren(); opening.removeAttribute('poster'); opening.preload = 'none'; opening.hidden = true;
    const world = deck.getElementById('world');
    const leadIn = new Set(['visual-novel', 'home-hub', 'payment']);
    world.querySelectorAll('.scene').forEach(scene => { if (!leadIn.has(scene.id)) scene.remove(); });
    deck.getElementById('stage').append(opening);
    function appendScene(id, title, content) {
      const scene = document.createElement('section');
      scene.id = id; scene.className = 'scene';
      scene.dataset.page = id; scene.dataset.title = title;
      const camera = document.createElement('div'); camera.className = 'scene-camera';
      camera.append(content); scene.append(camera); world.append(scene);
    }
    appendScene('random-events', 'Random Events', events);
    appendScene('combat', 'Real-Time Tactical Tower Defense', combat);
    world.querySelectorAll('.scene').forEach((scene, index) => { scene.dataset.scene = String(index); });
    const build = (node, type, at) => { node.dataset.build = type; node.dataset.at = String(at); };
    build(events.querySelector('h1'), 'text', .04);
    events.querySelectorAll('.event-sequence figure').forEach((node, i) => build(node, 'rise', .12 + i * .19));
    build(events.querySelector('.event-footnotes'), 'text', .54);
    events.querySelectorAll('.event-closeups figure').forEach((node, i) => build(node, 'rise', .65 + i * .12));
    build(events.querySelector('.event-conclusion'), 'text', .9);
    build(combat.querySelector('h1'), 'text', .04);
    build(combat.querySelector('.combat-bridge'), 'text', .1);
    build(combat.querySelector('.combat-main'), 'rise', .2);
    build(combat.querySelector('.combat-profiles'), 'rise', .42);
    deck.getElementById('stage').setAttribute('aria-label', 'Context review: Visual Novel, Home Hub, Payment, Random Events and Combat');
    const styles = ['../engine-v3.css', '../library/tokens.css', '../library/components.css', '../presentation.css'];
    const styleAnchor = document.head.querySelector('link');
    await Promise.all(styles.map(path => new Promise((resolve, reject) => {
      const link = document.createElement('link'); link.rel = 'stylesheet'; link.href = new URL(path, here).href;
      link.onload = resolve; link.onerror = reject; document.head.insertBefore(link, styleAnchor);
    })));
    // Off-screen clips must not occupy the connection pool ahead of the player.
    // The existing scene controller selects Home clips when their view is active;
    // repositioning starts only when the presenter clicks its mechanic button.
    deck.body.querySelectorAll('video').forEach(video => {
      video.preload = 'none';
      if (video.matches('[data-scene-video]')) {
        video.dataset.contextSrc = video.getAttribute('src');
        video.removeAttribute('src');
      }
    });
    const entry = here.searchParams.get('page') || (isCombat ? 'combat' : '05');
    world.querySelectorAll('.scene').forEach(scene => {
      const visible = scene.dataset.page === entry || scene.id === entry;
      scene.querySelectorAll('img').forEach(image => { image.loading = visible ? 'eager' : 'lazy'; });
    });
    deck.getElementById('heroCat').querySelector('img').fetchPriority = 'high';
    document.body.replaceChildren(...deck.body.childNodes);
    document.body.classList.add('context-preview');
    // Re-select media sources after adopting the parsed nodes into this page.
    document.querySelectorAll('video').forEach(video => video.load());
    if (!here.searchParams.has('page')) {
      here.searchParams.set('page', isCombat ? 'combat' : '05');
      history.replaceState(null, '', here);
    }
    // Register local controls before the unchanged v3 document-key handler.
    await script('showcase-interactions.js');
    await script('../scene-content.js');
    const home = document.getElementById('home-hub');
    let visibleScene = '';
    function loadHomeClips() {
      if (visibleScene !== 'home-hub' || home.querySelector('[data-view="responds"]').hidden) return;
      home.querySelectorAll('video[data-context-src]').forEach(video => {
        video.src = video.dataset.contextSrc;
        delete video.dataset.contextSrc;
        video.load();
      });
    }
    home.querySelectorAll('[data-home-view]').forEach(button => button.addEventListener('click', loadHomeClips));
    window.addEventListener('presentation:viewchange', event => {
      visibleScene = event.detail.visible ? event.detail.id : '';
      loadHomeClips();
    });
    await script('../engine-v3.js');
    document.documentElement.classList.remove('context-loading');
  } catch (error) {
    document.documentElement.classList.remove('context-loading');
    console.error('Context review could not open:', error);
  }
})();
