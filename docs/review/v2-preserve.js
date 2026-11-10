(() => {
  'use strict';

  // Review-only page interactions. The actual presentation player remains untouched.
  const home = document.getElementById('home-hub');
  if (home) {
    const content = home.querySelector('.home-content');
    const tabs = [...home.querySelectorAll('[data-home-view]')];
    const views = [...home.querySelectorAll('.home-view')];
    const clips = [...home.querySelectorAll('video[data-preview-src]')];

    function stopHomeClips() {
      for (const clip of clips) {
        clip.pause();
        if (Number.isFinite(clip.duration)) clip.currentTime = 0;
      }
    }
    function showHomeMode(mode) {
      stopHomeClips();
      content.dataset.homeMode = mode;
      for (const tab of tabs) {
        tab.setAttribute('aria-pressed', String(tab.dataset.homeView === mode));
      }
      for (const view of views) {
        view.hidden = view.dataset.view !== mode;
      }
      if (mode === 'responds') {
        for (const clip of clips) {
          if (!clip.getAttribute('src')) {
            clip.src = clip.dataset.previewSrc;
            clip.load();
          }
          clip.muted = true; // Historical clips have no requested new audio.
          clip.loop = true;
          clip.play().catch(() => {
            clip.controls = true;
            const button = clip.parentElement.querySelector('.clip-toggle');
            if (button) {
              button.textContent = '▶';
              button.setAttribute('aria-label', 'Play this authentic interaction clip');
            }
          });
        }
      }
    }
    for (const tab of tabs) {
      tab.addEventListener('click', () => showHomeMode(tab.dataset.homeView));
    }
    for (const button of home.querySelectorAll('.clip-toggle')) {
      const clip = button.parentElement.querySelector('video');
      button.addEventListener('click', () => {
        if (clip.paused) {
          clip.play().catch(() => { clip.controls = true; });
        } else {
          clip.pause();
        }
      });
      clip.addEventListener('play', () => {
        button.textContent = 'Ⅱ';
        button.setAttribute('aria-label', 'Pause this interaction clip');
      });
      clip.addEventListener('pause', () => {
        button.textContent = '▶';
        button.setAttribute('aria-label', 'Play this interaction clip');
      });
    }
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stopHomeClips();
    });
    showHomeMode('growth');
  }

  const combat = document.getElementById('combat');
  if (!combat) return;

  const battlefield = combat.querySelector('.battlefield-image');
  const battlefieldFrame = document.getElementById('v2BattlefieldFrame');
  const returnButton = document.getElementById('v2ReturnBattlefield');
  const defaultVfx = document.getElementById('v2DefaultBattleVfx');
  const defaultStatus = document.getElementById('v2DefaultVfxStatus');
  const demoVideo = document.getElementById('repositionVideo');
  const demoStatus = document.getElementById('repositionSource');
  const repositionButton = document.getElementById('repositionTrigger');
  const activateButton = document.getElementById('skillsTrigger');
  const eventButton = document.getElementById('v2EventProofTrigger');
  const proof = document.getElementById('v2BattleProof');
  const proofTitle = document.getElementById('v2ProofTitle');
  const proofKicker = document.getElementById('v2ProofKicker');
  const proofImage = document.getElementById('v2ProofImage');
  const proofBody = document.getElementById('v2ProofBody');
  const proofCaption = document.getElementById('v2ProofCaption');
  const skillCards = [...combat.querySelectorAll('[data-v2-skill]')];
  const advisorLayer = document.getElementById('advisorLayer');
  const advisorButton = document.getElementById('advisorTrigger');
  const advisorClose = document.getElementById('advisorClose');
  const advisorBefore = document.getElementById('advisorBefore');
  const advisorAfter = document.getElementById('advisorAfter');
  const advisorNext = document.getElementById('advisorNext');
  const advisorStep = document.getElementById('advisorStep');

  const existingSkillStills = {
    rongrong: {
      name: 'Rongrong', ability: 'Star Burst',
      still: '../assets/pages/09/caster-star-vfx.webp'
    },
    banban: {
      name: 'Banban', ability: 'Shield',
      still: '../assets/pages/09/guard-shield-vfx.webp'
    },
    diandian: {
      name: 'Diandian', ability: 'Healing Purr',
      still: '../assets/pages/09/diandian-heal-vfx.webp'
    }
  };

  let playbackGeneration = 0;
  let activeClipName = null;
  let activeMode = 'default';

  function stopAllMedia() {
    playbackGeneration += 1;
    defaultVfx.pause();
    demoVideo.pause();
    defaultVfx.hidden = true;
    demoVideo.hidden = true;
    battlefield.hidden = false;
    demoStatus.hidden = true;
    defaultStatus.hidden = true;
    proof.hidden = true;
    returnButton.hidden = true;
    eventButton.setAttribute('aria-pressed', 'false');
    repositionButton.setAttribute('aria-pressed', 'false');
    activateButton.setAttribute('aria-pressed', 'false');
    skillCards.forEach(card => card.setAttribute('aria-pressed', 'false'));
    activeClipName = null;
  }

  function showDefaultBattleVfx() {
    stopAllMedia();
    activeMode = 'default';
    defaultStatus.hidden = false;

    // No teammate footage yet: keep the genuine original battlefield visible
    // with an explicit label. Never simulate nonexistent game VFX.
    const src = defaultVfx.dataset.v2DefaultSrc?.trim();
    if (!src) {
      defaultStatus.textContent = 'GENERAL BATTLE VFX · MUTED LOOP PENDING';
      return;
    }
    if (document.hidden) return;

    const generation = playbackGeneration;
    defaultVfx.muted = true;
    defaultVfx.loop = true;
    defaultVfx.controls = false;
    defaultVfx.playbackRate = 1;
    if (defaultVfx.getAttribute('src') !== src) {
      defaultVfx.src = src;
      defaultVfx.load();
    }
    defaultVfx.hidden = false;
    defaultStatus.textContent = 'GENERAL BATTLE VFX · MUTED';
    // This is a muted autoplay loop. No presenter click or sound is needed
    // when entering Combat or returning from a one-shot demonstration.
    defaultVfx.play().then(() => {
      if (generation === playbackGeneration && activeMode === 'default') {
        battlefield.hidden = true;
      }
    }).catch(() => {
      if (generation !== playbackGeneration || activeMode !== 'default') return;
      battlefield.hidden = false;
      defaultVfx.controls = true; // Explicit retry fallback for blocked playback.
      defaultStatus.textContent = 'MUTED VFX · PLAYBACK BLOCKED — PRESS PLAY ON VIDEO';
    });
  }

  function startRecordedClip(source, label, { button = null } = {}) {
    if (!source) return;
    stopAllMedia();
    activeMode = 'clip';
    returnButton.hidden = false;
    activeClipName = label;
    const generation = playbackGeneration;
    if (button) button.setAttribute('aria-pressed', 'true');

    if (demoVideo.getAttribute('src') !== source) {
      demoVideo.src = source;
      demoVideo.load();
    }
    demoVideo.muted = true; // All Combat clips stay muted.
    demoVideo.loop = false;
    demoVideo.playbackRate = 1;
    demoVideo.controls = false;
    demoVideo.hidden = false;
    demoStatus.hidden = false;
    demoStatus.textContent = 'Loading genuine ' + label + ' · muted…';

    demoVideo.currentTime = 0;
    // Play the selected muted VFX immediately on the profile/button click.
    const playback = demoVideo.play();
    playback.then(() => {
      if (generation === playbackGeneration) {
        demoStatus.textContent = label + ' · VIDEO · MUTED';
      }
    }).catch(() => {
      if (generation !== playbackGeneration) return;
      demoVideo.controls = true;
      demoStatus.textContent = 'Clip unavailable or blocked — use Play on video to retry.';
    });
  }

  repositionButton.addEventListener('click', () => {
    startRecordedClip(demoVideo.dataset.previewSrc, 'Reposition', {button: repositionButton});
  });
  activateButton.addEventListener('click', () => {
    startRecordedClip(activateButton.dataset.previewSrc, 'Banban skill', {button: activateButton});
  });
  demoVideo.addEventListener('ended', showDefaultBattleVfx);
  demoVideo.addEventListener('waiting', () => {
    if (!activeClipName) return;
    demoStatus.hidden = false;
    demoStatus.textContent = 'Buffering ' + activeClipName + '…';
  });

  function showEventProof() {
    stopAllMedia();
    activeMode = 'proof';
    returnButton.hidden = false;
    eventButton.setAttribute('aria-pressed', 'true');
    proof.hidden = false;
    proofKicker.textContent = 'FROM RANDOM EVENTS → BATTLE';
    proofTitle.textContent = 'Carried Battle Effect';
    proofImage.hidden = true;
    proofBody.innerHTML =
      '<div class="v2-event-steps"><span>EVENT CHOICE</span><b>→</b>' +
      '<span>SAVED SUPPORT</span><b>→</b><span>BATTLE EFFECT</span></div>';
    proofCaption.textContent =
      'Verified linked capture pending. Fish +1 and Material +1 are resources, not this battle effect.';
  }
  eventButton.addEventListener('click', showEventProof);

  function showSkillPreview(key) {
    const skill = existingSkillStills[key];
    if (!skill) return;
    const card = skillCards.find(item => item.dataset.v2Skill === key);
    const source = card?.dataset.v2SkillClip?.trim();

    if (source) {
      startRecordedClip(source, skill.name, {button: card});
      return;
    }

    stopAllMedia();
    activeMode = 'proof';
    returnButton.hidden = false;
    card?.setAttribute('aria-pressed', 'true');
    proof.hidden = false;
    proofKicker.textContent = 'EXISTING AUTHENTIC SKILL STILL';
    proofTitle.textContent = skill.name + ' · ' + skill.ability;
    proofImage.src = skill.still;
    proofImage.alt = 'Genuine existing ' + skill.name + ' ability screenshot, not the new animation';
    proofImage.hidden = false;
    proofBody.textContent = 'Updated pre-release animation pending. Once captured, clicking this cat starts its VFX automatically, muted.';
    proofCaption.textContent = 'Historical still only. The updated animation has not been captured; no sound is required.';
  }

  for (const card of skillCards) {
    card.addEventListener('click', () => showSkillPreview(card.dataset.v2Skill));
    card.addEventListener('keydown', event => {
      if (!['Enter', ' '].includes(event.key)) return;
      event.preventDefault();
      showSkillPreview(card.dataset.v2Skill);
    });
  }
  document.getElementById('v2ProofClose').addEventListener('click', showDefaultBattleVfx);

  function dismissAdvisor(restoreFocus = false, restoreBattle = false) {
    advisorLayer.hidden = true;
    advisorButton.setAttribute('aria-expanded', 'false');
    if (restoreBattle) showDefaultBattleVfx();
    if (restoreFocus) advisorButton.focus({preventScroll: true});
  }
  function showAdvisorQuestion() {
    stopAllMedia();
    activeMode = 'advisor';
    returnButton.hidden = false;
    advisorLayer.hidden = false;
    advisorButton.setAttribute('aria-expanded', 'true');
    advisorBefore.hidden = false;
    advisorAfter.hidden = true;
    advisorStep.textContent = '1 / 2';
    advisorNext.textContent = 'Show answer →';
  }
  function toggleAdvisorAnswer() {
    const showAnswer = advisorAfter.hidden;
    advisorBefore.hidden = showAnswer;
    advisorAfter.hidden = !showAnswer;
    advisorStep.textContent = showAnswer ? '2 / 2' : '1 / 2';
    advisorNext.textContent = showAnswer ? 'Back to question' : 'Show answer →';
  }
  advisorButton.addEventListener('click', showAdvisorQuestion);
  advisorClose.addEventListener('click', () => dismissAdvisor(true, true));
  advisorNext.addEventListener('click', toggleAdvisorAnswer);
  advisorBefore.addEventListener('click', toggleAdvisorAnswer);

  returnButton.addEventListener('click', () => {
    dismissAdvisor(false, false);
    showDefaultBattleVfx();
    battlefieldFrame.focus({preventScroll: true});
  });

  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    if (!advisorLayer.hidden) {
      event.preventDefault();
      dismissAdvisor(true, true);
    } else if (!proof.hidden || !demoVideo.hidden) {
      event.preventDefault();
      showDefaultBattleVfx();
    }
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopAllMedia();
    } else {
      showDefaultBattleVfx();
    }
  });
  window.addEventListener('presentation:viewchange', event => {
    if (event.detail?.id !== 'combat') return;
    if (event.detail.visible) showDefaultBattleVfx();
    else stopAllMedia();
  });

  dismissAdvisor();
  showDefaultBattleVfx();
})();
