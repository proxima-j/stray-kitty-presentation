/* Native V2 Combat. Approved review interactions, owned only by this scene. */
(() => {
  'use strict';
  const combat = document.getElementById('combat');
  if (!combat) return;
  const get = id => combat.querySelector('#' + id);
  const battlefield = combat.querySelector('.battlefield-image');
  const frame = get('v2BattlefieldFrame');
  const back = get('v2ReturnBattlefield');
  const defaultVideo = get('v2DefaultBattleVfx');
  const defaultStatus = get('v2DefaultVfxStatus');
  const video = get('repositionVideo');
  const status = get('repositionSource');
  const retry = get('v2CombatRetry');
  const reposition = get('repositionTrigger');
  const activate = get('skillsTrigger');
  const eventButton = get('v2EventProofTrigger');
  const proof = get('v2BattleProof');
  const proofTitle = get('v2ProofTitle');
  const proofKicker = get('v2ProofKicker');
  const proofImage = get('v2ProofImage');
  const proofBody = get('v2ProofBody');
  const proofCaption = get('v2ProofCaption');
  const cards = [...combat.querySelectorAll('[data-v2-skill]')];
  const advisor = get('advisorLayer');
  const advisorTrigger = get('advisorTrigger');
  const advisorBefore = get('advisorBefore');
  const advisorAfter = get('advisorAfter');
  const advisorNext = get('advisorNext');
  const advisorStep = get('advisorStep');
  const skills = {
    rongrong: { name: 'Rongrong', ability: 'Star Burst', still: 'assets/pages/09/caster-star-vfx.webp' },
    banban: { name: 'Banban', ability: 'Shield', still: 'assets/pages/09/guard-shield-vfx.webp' },
    diandian: { name: 'Diandian', ability: 'Healing Purr', still: 'assets/pages/09/diandian-heal-vfx.webp' }
  };
  let sceneVisible = false, generation = 0, mode = 'default', bufferingTimer = 0;
  let selectedClip = null;
  const active = () => sceneVisible && !document.hidden;
  function loadImages() {
    window.dispatchEvent(new CustomEvent('presentation:loadmedia', { detail: { id: 'combat' } }));
  }
  function stopAll() {
    generation++;
    clearTimeout(bufferingTimer);
    for (const clip of [defaultVideo, video]) {
      clip.pause();
      clip.hidden = true;
      clip.controls = false;
      clip.muted = true;
      if (Number.isFinite(clip.duration)) clip.currentTime = 0;
    }
    battlefield.hidden = false;
    for (const element of [status, defaultStatus, proof, back, retry, advisor]) element.hidden = true;
    for (const element of [eventButton, reposition, activate, ...cards]) {
      element.setAttribute('aria-pressed', 'false');
      element.removeAttribute('aria-busy');
    }
    advisorTrigger.setAttribute('aria-expanded', 'false');
    advisorBefore.hidden = false;
    advisorAfter.hidden = true;
    advisorStep.textContent = '1 / 2';
    advisorNext.textContent = 'Show answer →';
    selectedClip = null;
  }
  function playbackFailed(clip) {
    if (!active() || clip.hidden) return;
    clearTimeout(bufferingTimer);
    clip.pause();
    clip.hidden = true;
    battlefield.hidden = false;
    retry.hidden = false;
    const output = clip === defaultVideo ? defaultStatus : status;
    output.hidden = false;
    output.textContent = 'Playback unavailable · retry clip · muted';
  }
  function play(clip, src, token) {
    clip.muted = true;
    clip.controls = false;
    clip.preload = 'auto';
    clip.playbackRate = 1;
    // Keep the approved still during loading and reload a failed source on retry.
    if (!clip.hasAttribute('poster') && clip.dataset.mediaPoster) clip.poster = clip.dataset.mediaPoster;
    if (clip.getAttribute('src') !== src || clip.error) {
      clip.src = src;
      clip.load();
    }
    clip.hidden = false;
    clip.play().then(() => {
      if (token !== generation) return;
      if (!active()) { stopAll(); return; }
      battlefield.hidden = true;
      retry.hidden = true;
    }).catch(() => { if (token === generation) playbackFailed(clip); });
  }
  function showDefault() {
    stopAll();
    mode = 'default';
    if (!active()) return;
    defaultStatus.hidden = false;
    const src = defaultVideo.dataset.v2DefaultSrc?.trim();
    if (!src) {
      defaultStatus.textContent = 'GENERAL BATTLE VFX · MUTED LOOP PENDING';
      return;
    }
    defaultStatus.textContent = 'GENERAL BATTLE VFX · MUTED';
    defaultVideo.loop = true;
    play(defaultVideo, src, generation);
  }
  function startClip(src, label, button = null) {
    if (!active() || !src) return;
    stopAll();
    mode = 'clip';
    selectedClip = { src, label, button };
    back.hidden = false;
    status.hidden = false;
    status.textContent = 'Loading genuine ' + label + ' · muted…';
    button?.setAttribute('aria-pressed', 'true');
    video.loop = false;
    video.setAttribute('aria-label', label + ' · genuine recorded footage · muted');
    play(video, src, generation);
  }
  reposition.addEventListener('click', () => startClip(video.dataset.demoSrc, 'Reposition · separate take · 1×', reposition));
  activate.addEventListener('click', () => startClip(activate.dataset.demoSrc, 'Banban Shield · historical activation · 1×', activate));
  video.addEventListener('ended', () => { if (mode === 'clip') showDefault(); });
  for (const clip of [video, defaultVideo]) {
    clip.addEventListener('error', () => playbackFailed(clip));
    clip.addEventListener('waiting', () => {
      if (!active() || clip.hidden) return;
      const output = clip === defaultVideo ? defaultStatus : status;
      output.hidden = false;
      output.textContent = 'Buffering genuine footage · muted…';
      clearTimeout(bufferingTimer);
      bufferingTimer = setTimeout(() => {
        if (active() && !clip.hidden && clip.readyState < 3) playbackFailed(clip);
      }, 15000);
    });
    clip.addEventListener('playing', () => {
      if (!active() || clip.hidden) { clip.pause(); return; }
      clearTimeout(bufferingTimer);
      retry.hidden = true;
      const output = clip === defaultVideo ? defaultStatus : status;
      output.textContent = (clip === defaultVideo ? 'GENERAL BATTLE VFX' : selectedClip?.label || 'Recorded demonstration') + ' · MUTED';
    });
  }
  retry.addEventListener('click', () => {
    if (mode === 'default') showDefault();
    else if (selectedClip) startClip(selectedClip.src, selectedClip.label, selectedClip.button);
  });
  function openProof(kicker, title, caption) {
    stopAll();
    mode = 'proof';
    back.hidden = false;
    proof.hidden = false;
    proofKicker.textContent = kicker;
    proofTitle.textContent = title;
    proofCaption.textContent = caption;
    proofImage.hidden = true;
    proofBody.replaceChildren();
  }
  function showSkill(key) {
    const skill = skills[key];
    const card = cards.find(item => item.dataset.v2Skill === key);
    if (!skill || !active()) return;
    const src = card.dataset.v2SkillClip?.trim();
    if (src) { startClip(src, skill.name + ' · ' + skill.ability, card); return; }
    openProof('EXISTING AUTHENTIC SKILL STILL', skill.name + ' · ' + skill.ability,
      'Historical still only. Updated skill video pending.');
    card.setAttribute('aria-pressed', 'true');
    proofImage.src = skill.still;
    proofImage.alt = skill.name + ' · approved authentic VFX still, not the updated animation';
    proofImage.hidden = false;
    proofBody.textContent = 'Updated pre-release animation pending. The verified clip will play muted when this cat is selected.';
  }
  cards.forEach(card => {
    card.addEventListener('click', () => showSkill(card.dataset.v2Skill));
    card.addEventListener('keydown', event => {
      if (!['Enter', ' '].includes(event.key)) return;
      event.preventDefault(); event.stopPropagation(); showSkill(card.dataset.v2Skill);
    });
  });
  function showEvent(step = 0) {
    if (!active()) return;
    openProof('FROM RANDOM EVENTS → BATTLE', 'Carried Battle Effect',
      'Verified linked capture pending. Fish +1 and Material +1 are resources, not this battle effect.');
    eventButton.setAttribute('aria-pressed', 'true');
    const { v2EventChoice: choice, v2EventState: state, v2EventBattle: battle, v2EventCaption: caption } = proof.dataset;
    if (choice && state && battle && caption) {
      if (step === 2) { startClip(battle, caption, eventButton); return; }
      proofTitle.textContent = step === 0 ? 'Event Choice' : 'Stored Support / Pressure';
      proofImage.src = step === 0 ? choice : state;
      proofImage.alt = proofTitle.textContent + ' · verified linked gameplay evidence';
      proofImage.hidden = false;
      proofCaption.textContent = caption;
      const next = document.createElement('button');
      next.type = 'button'; next.dataset.localSpace = '';
      next.textContent = step === 0 ? 'Stored effect →' : 'Actual battle consequence →';
      next.addEventListener('click', () => showEvent(step + 1));
      proofBody.append(next);
    } else {
      proofBody.innerHTML = '<div class="v2-event-steps"><span>EVENT CHOICE</span><b>→</b><span>STORED SUPPORT / PRESSURE</span><b>→</b><span>ACTUAL BATTLE CONSEQUENCE</span></div>';
    }
  }
  eventButton.addEventListener('click', () => showEvent());
  get('v2ProofClose').addEventListener('click', showDefault);
  function showAdvisor() {
    if (!active()) return;
    stopAll(); mode = 'advisor'; back.hidden = false;
    advisor.hidden = false; advisorTrigger.setAttribute('aria-expanded', 'true');
    loadImages(); get('advisorClose').focus({ preventScroll: true });
  }
  function toggleAnswer() {
    const answer = advisorAfter.hidden;
    advisorBefore.hidden = answer; advisorAfter.hidden = !answer;
    advisorStep.textContent = answer ? '2 / 2' : '1 / 2';
    advisorNext.textContent = answer ? 'Back to question' : 'Show answer →';
    loadImages();
  }
  advisorTrigger.addEventListener('click', showAdvisor);
  advisorNext.addEventListener('click', toggleAnswer);
  advisorBefore.addEventListener('click', toggleAnswer);
  get('advisorClose').addEventListener('click', () => { showDefault(); advisorTrigger.focus({ preventScroll: true }); });
  back.addEventListener('click', () => { showDefault(); frame.focus({ preventScroll: true }); });
  document.addEventListener('keydown', event => {
    if (!active()) return;
    if (mode === 'advisor' && ['ArrowRight', 'ArrowLeft'].includes(event.key)) {
      event.preventDefault(); event.stopImmediatePropagation();
      if (!event.repeat && (event.key === 'ArrowRight') === advisorAfter.hidden) toggleAnswer();
    } else if (event.key === 'Escape' && mode !== 'default') {
      event.preventDefault(); event.stopImmediatePropagation(); showDefault(); frame.focus({ preventScroll: true });
    }
  }, true);
  window.addEventListener('presentation:viewchange', event => {
    sceneVisible = event.detail.id === 'combat' && event.detail.visible;
    if (sceneVisible) showDefault(); else { stopAll(); mode = 'default'; }
  });
  document.addEventListener('visibilitychange', () => {
    if (active()) showDefault(); else { stopAll(); mode = 'default'; }
  });
  stopAll();
})();
