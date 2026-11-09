(() => {
  'use strict';
  const root=document.querySelector('#cross-team-collaboration .tw-walk');
  const base='https://school-gitlab.xsolla.dev/haozhe_wang/stray-kitty/-/';
  const steps=[
    {kicker:'01 · WORK ITEM + TICKET',title:'A teammate reports a cross-module issue.',detail:'Peer QA flags two progression blockers: a missing exploration exit and a retry that loses its mainline identity.',proof:'Work Item #4 · original peer QA',description:'Oct 29 · reported P1 blockers',link:base+'work_items/4#note_8317',file:'workitem-ticket.webp'},
    {kicker:'02 · DISCUSS + DAILY ALIGNMENT',title:'The owners clarify fixes and dependencies.',detail:'The map owner maps each report to a scoped fix and linked MR. Daily checks keep dependencies and overlapping changes visible.',proof:'Work Item #4 · fix response',description:'Oct 30 · owner response',link:base+'work_items/4#note_8605',file:'workitem-resolution.webp'},
    {kicker:'03 · NEW BRANCH + MERGE REQUEST',title:'A scoped branch reaches the integrated game.',detail:'MR !80 targets main from fix/map-qa-followup. Passing checks and integration MR !81 document delivery; no formal approval was recorded.',proof:'MR !80 · merged through !81',description:'fix/map-qa-followup → main',link:base+'merge_requests/80',file:'branch-mr.webp'},
    {kicker:'04 · MERGE + PLAYER-PATH VERIFICATION',title:'The integrated game is tested again.',detail:'Peer QA confirms progression on the tested route through Chapters 1, 2, 4 and 5, while reporting remaining control hints.',proof:'Work Item #4 · follow-up QA',description:'Nov 2 · tested routes, not every branch',link:base+'work_items/4#note_9310',file:'followup-qa.webp'}
  ];
  const buttons=[...root.querySelectorAll('.tw-flow-node')];
  const previous=root.querySelector('#previousPhase');
  const next=root.querySelector('#nextPhase');
  const counter=root.querySelector('#phaseCounter');
  const crops=root.querySelector('#twProofCrops');
  // Display selected source regions at readable scale; inspect still opens the complete original.
  const regions=[
    [[9,32,620,27],[108,75,515,58],[120,157,500,46]],
    [[9,32,620,27],[109,105,512,24],[109,184,512,96]],
    [[8,47,628,60],[10,270,620,110]],
    [[9,32,620,27],[108,105,512,100],[119,226,508,20]]
  ];
  const inspect=root.querySelector('#twProof');
  const fields={kicker:root.querySelector('#phaseKicker'),title:root.querySelector('#phaseTitle'),detail:root.querySelector('#phaseText'),proof:root.querySelector('#proofTitle'),description:root.querySelector('#proofDescription'),link:root.querySelector('#proofLink')};
  let phase=0,visible=false;
  const media=()=> 'assets/teamwork/gitlab/'+steps[phase].file;
  function loadEvidence(){crops.querySelectorAll('img').forEach(image=>{if(image.getAttribute('src')!==media())image.src=media();});}
  function showCrops(){
    const selected=regions[phase];
    crops.replaceChildren();
    crops.style.setProperty('--stack-ratio',selected.reduce((sum,r)=>sum+r[3]/r[2],0));
    crops.style.setProperty('--crop-gaps',((selected.length-1)*6)+'px');
    selected.forEach(([x,y,w,h],index)=>{
      const region=document.createElement('span');region.className='tw-proof-crop';region.style.aspectRatio=w+'/'+h;
      const image=document.createElement('img');image.dataset.mediaSrc=media();
      image.alt=steps[phase].proof+' — original '+(index===0?'title / status':'selected mention or finding');
      image.style.cssText=`width:${648/w*100}%;left:${-x/w*100}%;top:${-y/h*100}%;`;
      region.append(image);crops.append(region);
    });
  }
  function show(index,load=true){
    phase=Math.max(0,Math.min(steps.length-1,index));
    const item=steps[phase];root.dataset.phase=String(phase);
    buttons.forEach(button=>{const active=Number(button.dataset.phase)===phase;button.setAttribute('aria-pressed',String(active));button.classList.toggle('is-active',active);});
    for(const key of ['kicker','title','detail','proof','description'])fields[key].textContent=item[key];
    fields.description.textContent=item.description+' · click for full record';
    fields.link.href=item.link;fields.link.textContent='Original source ↗';
    showCrops();
    inspect.setAttribute('aria-label','Inspect '+item.proof);
    counter.textContent=String(phase+1).padStart(2,'0')+' / '+String(steps.length).padStart(2,'0');
    previous.disabled=phase===0;next.textContent=phase===steps.length-1?'Start again ↺':'Next phase →';
    if(load||visible)loadEvidence();
  }
  buttons.forEach(button=>button.addEventListener('click',()=>show(Number(button.dataset.phase))));
  previous.addEventListener('click',()=>show(phase-1));
  next.addEventListener('click',()=>show(phase===steps.length-1?0:phase+1));
  root.addEventListener('keydown',event=>{
    if(event.target.closest('button,a')&&[' ','Enter'].includes(event.key))event.stopPropagation();
  });
  inspect.addEventListener('click',()=>{
    const dialog=document.getElementById('screenshotDialog');
    const full=document.getElementById('enlargedScreenshot');
    full.src=media();full.alt=steps[phase].proof+' — complete original GitLab excerpt';
    document.getElementById('screenshotTitle').textContent=steps[phase].proof;
    dialog.showModal();
  });
  window.addEventListener('presentation:viewchange',event=>{visible=event.detail.id==='cross-team-collaboration'&&event.detail.visible;if(visible)loadEvidence();});
  show(0,false);

})();
