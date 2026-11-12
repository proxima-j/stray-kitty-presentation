/* Native Datadog integration. v3 engine and its 4200ms beat are unchanged. */
(() => {
  const overlays=document.getElementById('datadogOverlays');
  const openDialog=()=>[...overlays.querySelectorAll('.dd-overlay')].find(el=>!el.hidden);
  document.addEventListener('keydown',event=>{
    const dialog=openDialog();
    if(event.target.closest('.datadog-scope .dd-analysis')&&['PageDown','PageUp','Home','End'].includes(event.key)){event.stopPropagation();return;}
    if(dialog){
      if(event.key==='Escape'){event.preventDefault();dialog.querySelector('button').click();}
      event.stopImmediatePropagation();return;
    }
    if((event.key===' '||event.key==='Enter')&&event.target.closest('.datadog-scope button,.datadog-scope a'))event.stopPropagation();
  },true);
  document.addEventListener('wheel',event=>{
    if(event.target.closest('.datadog-scope .dd-analysis')){event.stopPropagation();return;}
    if(!openDialog())return;
    event.stopPropagation();
    event.preventDefault();
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
    fetch('assets/datadog/composition-review/sections.json').then(r=>{if(!r.ok)throw new Error('Missing section inventory');return r.json();}).then(value=>{
      for(const content of Object.values(value))for(const section of content.sections)section.src=section.src.replace('../assets/','assets/');
      data=value;render();const first=root.querySelector('[data-dashboard-tab="'+(new URLSearchParams(location.search).get('tab')||'overview')+'"]');if(first)first.click();
    }).catch(error=>{requested=false;document.getElementById('compositionHint').textContent='Dashboard captures could not load. Select this page again to retry.';console.error(error);});
  }
  window.addEventListener('presentation:viewchange',event=>{if(event.detail.id==='observability'&&event.detail.visible){loadComposition();loadBoardImages();requestAnimationFrame(fitSheets);}});

})();
