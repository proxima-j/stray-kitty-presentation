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
  const video = document.getElementById('repositionVideo');
  const status = document.getElementById('repositionSource');
  const reposition = document.getElementById('repositionTrigger');
  const activate = document.getElementById('skillsTrigger');
  const proof = document.getElementById('v2BattleProof');
  const proofTitle = document.getElementById('v2ProofTitle');
  const proofKicker = document.getElementById('v2ProofKicker');
  const proofImage = document.getElementById('v2ProofImage');
  const proofBody = document.getElementById('v2ProofBody');
  const proofCaption = document.getElementById('v2ProofCaption');
  const eventTrigger = document.getElementById('v2EventProofTrigger');
  const skillCards = [...combat.querySelectorAll('[data-v2-skill]')];
  const advisorLayer = document.getElementById('advisorLayer');
  const advisorTrigger = document.getElementById('advisorTrigger');
  const advisorClose = document.getElementById('advisorClose');
  const advisorBefore = document.getElementById('advisorBefore');
  const advisorAfter = document.getElementById('advisorAfter');
  const advisorNext = document.getElementById('advisorNext');
  const advisorStep = document.getElementById('advisorStep');
  const dialog = document.getElementById('v2FullVfxDialog');
  const fullButton = document.getElementById('v2FullVfxTrigger');
  const fullClose = document.getElementById('v2FullVfxClose');
  const fullFrameVideo = document.getElementById('v2FullVfxVideo');
  const fullFrameReference = document.getElementById('v2FullVfxReference');
  const fullFramePending = document.getElementById('v2FullVfxPending');

  const skillReferences = {
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
  let activeClip = null;

  function stopCurrentMedia() {
    playbackGeneration++;
    video.pause();
    fullFrameVideo.pause();
    video.hidden = true;
    battlefield.hidden = false;
    status.hidden = true;
    proof.hidden = true;
    eventTrigger.setAttribute('aria-pressed', 'false');
    reposition.setAttribute('aria-pressed', 'false');
    activate.setAttribute('aria-pressed', 'false');
    skillCards.forEach(card => card.setAttribute('aria-pressed', 'false'));
    activeClip = null;
  }

  async function playHistoricVideo(button, src, name) {
    stopCurrentMedia();
    const generation = playbackGeneration;
    activeClip = name;
    button.setAttribute('aria-pressed', 'true');
    if (video.getAttribute('src') !== src) {
      video.src = src;
      video.load();
    }
    video.muted = true; // These old source clips are silent.
    video.playbackRate = 1;
    video.hidden = false;
    battlefield.hidden = true;
    status.hidden = false;
    status.textContent = 'Loading genuine existing ' + name + ' clip (silent)…';
    try {
      video.currentTime = 0;
      await video.play();
      if (generation !== playbackGeneration) return;
      status.textContent = 'EXISTING REAL VIDEO · SILENT · NEW VFX/SFX PENDING';
    } catch {
      if (generation !== playbackGeneration) return;
      video.controls = true;
      status.textContent = 'Clip may require buffering — use the player or click again.';
    }
  }
  reposition.addEventListener('click', () => playHistoricVideo(
    reposition, video.dataset.previewSrc, 'Reposition'
  ));
  activate.addEventListener('click', () => playHistoricVideo(
    activate, activate.dataset.previewSrc, 'Banban skill'
  ));
  video.addEventListener('ended', stopCurrentMedia);
  video.addEventListener('waiting', () => {
    if (!activeClip) return;
    status.hidden = false;
    status.textContent = 'Buffering ' + activeClip + '…';
  });

  function showEventProof() {
    stopCurrentMedia();
    eventTrigger.setAttribute('aria-pressed', 'true');
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
  eventTrigger.addEventListener('click', showEventProof);

  function showSkillPreview(key) {
    const skill = skillReferences[key];
    if (!skill) return;
    stopCurrentMedia();
    const card = skillCards.find(item => item.dataset.v2Skill === key);
    card?.setAttribute('aria-pressed', 'true');

    // One click on a profile opens the genuine clip AND starts its game audio.
    // Empty clip bindings deliberately keep the reviewed authentic still as a
    // placeholder until teammate-captured VFX+SFX media has been verified.
    const clipSrc = card?.dataset.v2SkillClip?.trim();
    if (clipSrc) {
      const generation = playbackGeneration;
      activeClip = skill.name;
      video.src = clipSrc;
      video.muted = false;
      video.volume = 1;
      video.playbackRate = 1;
      video.controls = true;
      video.hidden = false;
      battlefield.hidden = true;
      status.hidden = false;
      status.textContent = 'Loading ' + skill.name + ' · VFX with original game sound…';
      // Important: play() is called immediately inside the user's card click,
      // not after a timer or asynchronous media-loading callback.
      video.currentTime = 0;
      const playback = video.play();
      playback.then(() => {
        if (generation === playbackGeneration) {
          status.textContent = skill.name + ' · VIDEO + IN-GAME SFX';
        }
      }).catch(() => {
        if (generation === playbackGeneration) {
          status.textContent = 'Audio/playback blocked — use the video controls to retry.';
        }
      });
      return;
    }

    proof.hidden = false;
    proofKicker.textContent = 'EXISTING AUTHENTIC SKILL STILL';
    proofTitle.textContent = skill.name + ' · ' + skill.ability;
    proofImage.src = skill.still;
    proofImage.alt = 'Existing genuine ' + skill.name +
      ' ability screenshot (not updated animation footage)';
    proofImage.hidden = false;
    proofBody.textContent =
      'Updated pre-release animation and synchronized game sound pending. Once captured, opening this cat immediately starts its VFX and audio (no second Play click).';
    proofCaption.textContent =
      'The still is genuine older game evidence. No new VFX or SFX is simulated.';
  }
  for (const card of skillCards) {
    card.addEventListener('click', () => showSkillPreview(card.dataset.v2Skill));
    card.addEventListener('keydown', event => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      showSkillPreview(card.dataset.v2Skill);
    });
  }
  document.getElementById('v2ProofClose').addEventListener('click', stopCurrentMedia);

  function dismissAdvisor(restoreFocus = false) {
    advisorLayer.hidden = true;
    advisorTrigger.setAttribute('aria-expanded', 'false');
    if (restoreFocus) advisorTrigger.focus({preventScroll: true});
  }
  function showAdvisorQuestion() {
    stopCurrentMedia();
    advisorLayer.hidden = false;
    advisorTrigger.setAttribute('aria-expanded', 'true');
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
  advisorTrigger.addEventListener('click', showAdvisorQuestion);
  advisorClose.addEventListener('click', () => dismissAdvisor(true));
  advisorNext.addEventListener('click', toggleAdvisorAnswer);
  advisorBefore.addEventListener('click', toggleAdvisorAnswer);

  fullButton.addEventListener('click', () => {
    stopCurrentMedia();
    dismissAdvisor();
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');

    // In production, a verified full-frame recording is placed in this data
    // attribute. Opening the viewer then immediately starts video AND sound.
    const clipSrc = fullFrameVideo.dataset.v2VideoSrc?.trim();
    if (!clipSrc) return; // Pending asset: show honest static placeholder.

    fullFrameVideo.src = clipSrc;
    fullFrameVideo.muted = false;
    fullFrameVideo.volume = 1;
    fullFrameVideo.currentTime = 0;
    fullFrameVideo.hidden = false;
    fullFrameReference.hidden = true;
    fullFramePending.hidden = true;
    // User click is the autoplay permission: no separate Play button needed.
    fullFrameVideo.play().catch(() => {
      fullFrameVideo.controls = true;
      fullFramePending.hidden = false;
      fullFramePending.querySelector('p').textContent =
        'Playback unavailable — use the video controls to retry with sound.';
    });
  });
  fullClose.addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => {
    fullFrameVideo.pause();
    fullFrameVideo.hidden = true;
    fullFrameReference.hidden = false;
    fullFramePending.hidden = false;
    fullButton.focus({preventScroll: true});
  });

  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape' || !dialog.open) return;
    event.stopPropagation();
    dialog.close();
  }, true);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopCurrentMedia();
      if (dialog.open) dialog.close();
    }
  });

  dismissAdvisor();
  stopCurrentMedia();
})();
