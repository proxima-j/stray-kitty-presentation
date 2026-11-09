(() => {
  'use strict';
  const root = document.querySelector('.tw-walk');
  if (!root) return;
  const base = 'https://school-gitlab.xsolla.dev/haozhe_wang/stray-kitty/-/work_items/';
  const steps = [
    {
      kicker: '01 · WORK ITEM + TICKET',
      title: 'A teammate reports a cross-module issue.',
      detail: 'Peer QA documented reproducible battle-retry and progression problems in the Combat Work Item, so the relevant owner could act on specific player-path failures.',
      proof: 'Work Item #4 · original peer-QA report',
      description: 'Documented QA report, reproduction details and severity. A genuine screenshot still needs collection.',
      link: base + '4#note_8317', linkLabel: 'Read peer-QA Work Item ↗', icon: '#4'
    },
    {
      kicker: '02 · DISCUSS + DAILY ALIGNMENT',
      title: 'The owners clarify the fix and dependencies.',
      detail: 'The map and battle work was discussed in the relevant Work Item. Scope, expected progression and focused verification were agreed; daily checks helped identify overlapping changes.',
      proof: 'Work Item #4 · fix response / coordination',
      description: 'Linked owner response documents scoped fixes. Daily alignment is a team workflow, not a claim this single note recorded one check-in.',
      link: base + '4#note_8605', linkLabel: 'Read fix coordination ↗', icon: '#4'
    },
    {
      kicker: '03 · NEW BRANCH + MERGE REQUEST',
      title: 'A scoped change is developed and reviewed.',
      detail: 'Agreed changes move into a dedicated branch, with a Merge Request and review before merging. The specific MR screenshot for this QA case remains to be sourced.',
      proof: 'Code delivery · branch and MR stage',
      description: 'Workflow confirmed by project documentation. This case-specific MR screenshot has not yet been verified or published.',
      link: base + '3#note_9277', linkLabel: 'Read recorded merge handoff ↗', icon: 'MR'
    },
    {
      kicker: '04 · MERGE + PLAYER-PATH VERIFICATION',
      title: 'The integrated game is tested again.',
      detail: 'A subsequent peer-QA pass verified progression along the tested path and identified remaining interaction issues. The result fed back into the owner’s Work Item.',
      proof: 'Work Item #4 · follow-up player-path QA',
      description: 'The follow-up report distinguishes the tested player route from untested paths.',
      link: base + '4#note_9310', linkLabel: 'Read follow-up QA ↗', icon: '#4'
    }
  ];
  const buttons = [...root.querySelectorAll('.tw-flow-node')];
  const previous = root.querySelector('#previousPhase');
  const next = root.querySelector('#nextPhase');
  const counter = root.querySelector('#phaseCounter');
  const fields = {
    kicker: root.querySelector('#phaseKicker'),
    title: root.querySelector('#phaseTitle'),
    detail: root.querySelector('#phaseText'),
    proof: root.querySelector('#proofTitle'),
    description: root.querySelector('#proofDescription'),
    link: root.querySelector('#proofLink'),
    icon: root.querySelector('.tw-proof-icon')
  };
  let phase = 0;
  function show(index) {
    phase = Math.max(0, Math.min(steps.length - 1, index));
    const item = steps[phase];
    buttons.forEach(button => {
      const selected = Number(button.dataset.phase) === phase;
      button.setAttribute('aria-pressed', String(selected));
      button.classList.toggle('is-active', selected);
    });
    fields.kicker.textContent = item.kicker;
    fields.title.textContent = item.title;
    fields.detail.textContent = item.detail;
    fields.proof.textContent = item.proof;
    fields.description.textContent = item.description;
    fields.link.href = item.link;
    fields.link.textContent = item.linkLabel;
    fields.icon.textContent = item.icon;
    counter.textContent = String(phase + 1).padStart(2, '0') + ' / 04';
    previous.disabled = phase === 0;
    next.textContent = phase === 3 ? 'Start again ↺' : 'Next phase →';
  }
  buttons.forEach(button => button.addEventListener('click', () => show(Number(button.dataset.phase))));
  previous.addEventListener('click', () => show(phase - 1));
  next.addEventListener('click', () => show(phase === steps.length - 1 ? 0 : phase + 1));
  show(0);
})();