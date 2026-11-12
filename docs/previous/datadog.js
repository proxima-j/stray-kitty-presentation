/* Native Datadog integration. v3 engine and its 4200ms beat are unchanged. */
(() => {
  const overlays=document.getElementById('datadogOverlays');
  const openDialog=()=>[...overlays.querySelectorAll('.dd-overlay')].find(el=>!el.hidden);
  document.addEventListener('keydown',event=>{
    const dialog=openDialog();
    if(event.target.closest('.datadog-scope .dd-analysis,.datadog-scope .dd-alert-evidence')&&['PageDown','PageUp','Home','End'].includes(event.key)){event.stopPropagation();return;}
    if(dialog){
      if(event.key==='Escape'){event.preventDefault();dialog.querySelector('button').click();}
      event.stopImmediatePropagation();return;
    }
    if((event.key===' '||event.key==='Enter')&&event.target.closest('.datadog-scope button,.datadog-scope a'))event.stopPropagation();
  },true);
  document.addEventListener('wheel',event=>{
    if(event.target.closest('.datadog-scope .dd-analysis,.datadog-scope .dd-alert-evidence')){event.stopPropagation();return;}
    if(!openDialog())return;
    event.stopPropagation();
    if(!event.target.closest('.dd-trace-scroll,.dd-alert-image-scroll,.dd-record-panel'))event.preventDefault();
  },{capture:true,passive:false});
  new MutationObserver(()=>{
    const dialog=openDialog();
    dialog?.querySelectorAll('img[data-media-src]').forEach(img=>{if(!img.hasAttribute('src'))img.src=img.dataset.mediaSrc;});
  }).observe(overlays,{subtree:true,attributes:true,attributeFilter:['hidden']});
  window.addEventListener('presentation:viewchange',event=>{
    if(!event.detail.visible){
      overlays.querySelectorAll('.dd-overlay').forEach(el=>el.hidden=true);
      if(document.activeElement?.closest('.datadog-scope'))document.activeElement.blur();
    }
  });
})();


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
    let audioEnabled = false;
    let qaVisible = false;
    let traceOpener = null;
    let playback = 0;
    response.muted = true;
    function prepareResponse() {
      if (response.hasAttribute('src')) return;
      response.poster = response.dataset.mediaPoster;
      response.preload = 'auto';
      response.src = response.dataset.responseSrc;
      response.load();
    }
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
      playback++;
      response.pause();
      response.hidden = true;
      try { response.currentTime = 0; } catch (_) {}
      idle.hidden = false;
      closeOverlay();
      setStep('idle');
    }
    function finish() {
      if (step !== 'response') return;
      setStep('complete');
    }
    function start(event) {
      event.stopPropagation();
      if (step !== 'idle') return;
      qaVisible = true;
      prepareResponse();
      const request = ++playback;
      setStep('response');
      // Keep the genuine still visible while a slow connection buffers the clip.
      idle.hidden = false;
      response.hidden = false;
      response.muted = !audioEnabled;
      try { response.currentTime = 0; } catch (_) {}
      const play = response.play();
      if (play && typeof play.catch === 'function') {
        play.catch(() => {
          if (request !== playback || !qaVisible) return;
          response.muted = true;
          return response.play().catch(() => { if (request === playback) replayDemo(); });
        });
      }
    }
    function closeOverlay() {
      const wasOpen = !overlay.hidden;
      overlay.hidden = true;
      if (wasOpen && traceOpener) traceOpener.focus({preventScroll:true});
    }
    function openTrace(event) {
      if (step !== 'complete') return;
      traceOpener = event.currentTarget;
      overlay.hidden = false;
      document.getElementById('ddTraceScroll').scrollTop = 0;
      close.focus({preventScroll:true});
    }
    clickArea.addEventListener('click', start);
    response.addEventListener('ended', finish);
    response.addEventListener('playing', () => {
      if (step !== 'response') return;
      idle.hidden = true;
      hint.textContent = 'Playing the genuine recorded event result…';
    });
    response.addEventListener('waiting', () => {
      if (step === 'response') hint.textContent = 'Loading recorded action…';
    });
    response.addEventListener('error', () => { if (step === 'response') replayDemo(); });
    replay.addEventListener('click', replayDemo);
    view.addEventListener('click', openTrace);
    finished.addEventListener('click', openTrace);
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
    function syncResponse() {
      if (qaVisible && !document.hidden && step === 'response') response.play().catch(() => {});
      else response.pause();
    }
    window.addEventListener('presentation:viewchange', event => {
      qaVisible = event.detail.id === 'gameplay-telemetry' && event.detail.visible;
      if (event.detail.id === 'gameplay-telemetry') prepareResponse();
      syncResponse();
    });
    document.addEventListener('visibilitychange', syncResponse);
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
    const heading = document.getElementById('ddSyntheticHeading');
    tabs.forEach(tab => tab.addEventListener('click', () => {
      heading.textContent = tab.dataset.checkTab === 'payment'
        ? 'Is the payment configuration reachable?'
        : 'Can players reach the public game?';
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

(() => {
  'use strict';
  const root=document.getElementById('ddDashboardPreview');
  const query=new URLSearchParams(location.search);
  const selectedComposition=root.dataset.selectedComposition;
  let layout=selectedComposition==='stacked'||query.get('layout')==='stacked'?'stacked':'spread';
  let data;
  const dialog=document.getElementById('compositionInspect');
  const image=document.getElementById('compositionInspectImage');
  function inspect(section){image.src=section.src;image.alt=section.title+' — genuine Datadog capture';document.getElementById('compositionInspectTitle').textContent=section.title;dialog.hidden=false;document.getElementById('compositionInspectClose').focus({preventScroll:true});}
  function fitSheets(){document.querySelectorAll('.screenshot-sheet').forEach(sheet=>{const col=sheet.parentElement;const h=col.clientHeight-30;const w=Math.min(col.clientWidth,h*Number(sheet.dataset.ratio));sheet.style.width=w+'px';});}
  function picture(section){const button=document.createElement('button');button.type='button';button.setAttribute('aria-label','Inspect '+section.title);const img=document.createElement('img');img.dataset.mediaSrc=section.src;img.alt=section.title+' — authentic dashboard section';button.append(img);button.addEventListener('click',()=>inspect(section));return button;}
  function render(){
    if(!data)return;
    document.querySelectorAll('[data-layout]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.layout===layout)));
    for(const board of document.querySelectorAll('[data-board]')){
      board.replaceChildren();const key=board.dataset.board;const content=data[key];
      if(key==='overview'||layout==='spread'){
        const halves=[content.sections.slice(0,content.split),content.sections.slice(content.split)];
        halves.forEach((sections,i)=>{const col=document.createElement('div');col.className='screenshot-column';const title=document.createElement('span');title.textContent=i?'02 / Continued sections':'01 / Upper sections';const sheet=document.createElement('div');sheet.className='screenshot-sheet';sheet.dataset.ratio=sections[0].width/sections.reduce((h,s)=>h+s.height,0);sections.forEach(s=>sheet.append(picture(s)));col.append(title,sheet);board.append(col);});
      }else{
        const stack=document.createElement('div');stack.className='chunk-stack';
        content.sections.forEach((section,i)=>{const card=document.createElement('section');card.className='chunk-card'+(i===0?' is-open':'');const heading=document.createElement('button');heading.type='button';heading.className='chunk-title';heading.textContent=String(i+1).padStart(2,'0')+' / '+section.title;heading.setAttribute('aria-expanded',String(i===0));heading.addEventListener('click',()=>{stack.querySelectorAll('.chunk-card').forEach(c=>{const open=c===card;c.classList.toggle('is-open',open);c.querySelector('.chunk-title').setAttribute('aria-expanded',String(open));});loadBoardImages();});const view=picture(section);view.className='chunk-view';card.append(heading,view);stack.append(card);});board.append(stack);
      }
    }
    hint();loadBoardImages();requestAnimationFrame(fitSheets);
  }
  function hint(){const tab=root.querySelector('[data-dashboard-tab][aria-selected="true"]').dataset.dashboardTab;document.getElementById('compositionHint').textContent=selectedComposition?(tab==='overview'?'Operational Overview · service metrics, monitors and SLOs':'Choose a section title to explore the complete dashboard chunk'):tab==='overview'?'Overview · locked side-by-side composition':layout==='stacked'?'A · Titled stack — choose a section header to reveal the complete chunk':'B · Two consecutive screenshot columns — full sections shown together';}
  document.querySelectorAll('[data-layout]').forEach(button=>button.addEventListener('click',()=>{layout=button.dataset.layout;query.set('layout',layout);history.replaceState(null,'','?'+query);render();}));
  root.querySelectorAll('[data-dashboard-tab]').forEach(tab=>tab.addEventListener('click',()=>{const url=new URL(location.href);url.searchParams.set('tab',tab.dataset.dashboardTab);history.replaceState(null,'',url);hint();loadBoardImages();requestAnimationFrame(fitSheets);}));
  document.getElementById('compositionInspectClose').addEventListener('click',()=>dialog.hidden=true);
  dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.hidden=true;});
  document.addEventListener('keydown',event=>{if(event.key==='Escape')dialog.hidden=true;});
  new ResizeObserver(fitSheets).observe(root);
  function loadBoardImages(){
    root.querySelectorAll('img[data-media-src]').forEach(img=>{
      if(img.closest('[hidden]'))return;
      const card=img.closest('.chunk-card');if(card&&!card.classList.contains('is-open'))return;
      if(!img.hasAttribute('src'))img.src=img.dataset.mediaSrc;
    });
  }
  let requested=false;
  function loadComposition(){
    if(requested)return;requested=true;
    fetch('../assets/datadog/composition-review/sections.json').then(r=>{if(!r.ok)throw new Error('Missing section inventory');return r.json();}).then(value=>{
      data=value;render();const first=root.querySelector('[data-dashboard-tab="'+(new URLSearchParams(location.search).get('tab')||'overview')+'"]');if(first)first.click();
    }).catch(error=>{requested=false;document.getElementById('compositionHint').textContent='Dashboard captures could not load. Select this page again to retry.';console.error(error);});
  }
  window.addEventListener('presentation:viewchange',event=>{if(event.detail.id==='observability'&&event.detail.visible){loadComposition();loadBoardImages();requestAnimationFrame(fitSheets);}});

})();

(() => {
  'use strict';
  const open = document.getElementById('ddOpenArchive');
  if (!open) return;
  const close = document.getElementById('ddCloseArchive');
  const overlay = document.getElementById('ddArchiveOverlay');
  const record = document.getElementById('ddArchiveRecord');
  const image = document.getElementById('ddEvidenceImage');
  const zoom = document.getElementById('ddEvidenceZoom');
  const imageOverlay = document.getElementById('ddAlertImageOverlay');
  const closeImage = document.getElementById('ddCloseAlertImage');
  const fullImage = document.getElementById('ddAlertImageFull');
  const stages = [...document.querySelectorAll('[data-alert-stage]')];
  const sources = [...document.querySelectorAll('[data-alert-source]')];
  const base = '../assets/datadog/page-03-alerts/';
  const evidence = {
    slack: {
      alert: { file: 'slack-health-alert.png', label: 'Slack · ALERT · Nov 4, 22:36 (UTC+08)', caption: 'Original Slack message · click to enlarge', url: 'https://bjxsollaschool.slack.com/archives/C0C0S9KAWUE/p1793803004626329' },
      recovery: { file: 'slack-health-recovery.png', label: 'Slack · RECOVERY · Nov 4, 22:41 (UTC+08)', caption: 'Original Slack message · click to enlarge', url: 'https://bjxsollaschool.slack.com/archives/C0C0S9KAWUE/p1793803302935099' }
    },
    datadog: {
      alert: { file: 'datadog-health-failed.png', label: 'Datadog · FAILED RUN · Nov 4, 22:35 (UTC+08)', caption: '22:35 failed run → 22:36 alert · click to enlarge', url: 'https://us5.datadoghq.com/synthetics/details/nu2-fet-6dn/result/183503211253861456' },
      recovery: { file: 'datadog-health-passed.png', label: 'Datadog · PASSED RUN · Nov 4, 22:40 (UTC+08)', caption: '22:40 passed run → 22:41 recovery · click to enlarge', url: 'https://us5.datadoghq.com/synthetics/details/nu2-fet-6dn/result/1917610770815308180' }
    }
  };
  let stage = 'alert';
  let source = 'slack';
  let loaded = false;
  function renderEvidence() {
    const selected = evidence[source][stage];
    stages.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.alertStage === stage)));
    sources.forEach(button => button.setAttribute('aria-selected', String(button.dataset.alertSource === source)));
    image.src = base + selected.file;
    image.alt = selected.label;
    zoom.setAttribute('aria-label', `Enlarge ${source === 'slack' ? 'Slack' : 'Datadog'} ${stage} screenshot`);
    document.getElementById('ddEvidenceCaption').textContent = selected.caption;
  }
  stages.forEach(button => button.addEventListener('click', () => { stage = button.dataset.alertStage; renderEvidence(); }));
  sources.forEach(button => button.addEventListener('click', () => { source = button.dataset.alertSource; renderEvidence(); }));
  zoom.addEventListener('click', () => {
    const selected = evidence[source][stage];
    fullImage.src = base + selected.file;
    fullImage.alt = selected.label;
    document.getElementById('ddAlertImageTitle').textContent = selected.label;
    document.getElementById('ddAlertImageSource').href = selected.url;
    imageOverlay.hidden = false;
    imageOverlay.querySelector('.dd-alert-image-scroll').scrollTop = 0;
    closeImage.focus({preventScroll:true});
  });
  function dismissImage() { imageOverlay.hidden = true; zoom.focus({preventScroll:true}); }
  closeImage.addEventListener('click', dismissImage);
  imageOverlay.addEventListener('click', event => { if (event.target === imageOverlay) dismissImage(); });
  function dismiss() {
    overlay.hidden = true;
    open.focus({preventScroll:true});
  }
  open.addEventListener('click', async () => {
    overlay.hidden = false;
    close.focus({preventScroll:true});
    if (loaded) return;
    try {
      const response = await fetch('../assets/datadog/page-03-alerts/alert-recovery-evidence.json');
      if (!response.ok) throw new Error('Archived record unavailable');
      record.textContent = JSON.stringify(await response.json(), null, 2);
      loaded = true;
    } catch (_) {
      record.textContent = 'The archived record could not load. Use the GitLab source link on the page.';
    }
  });
  close.addEventListener('click', dismiss);
  overlay.addEventListener('click', event => { if (event.target === overlay) dismiss(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !imageOverlay.hidden) { dismissImage(); event.stopPropagation(); }
    if (event.key === 'Escape' && !overlay.hidden) { dismiss(); event.stopPropagation(); }
  });
})();
