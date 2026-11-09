(() => {
  'use strict';
  const world=document.querySelector('.tw-world');
  const svg=world.querySelector('svg');
  const core=world.querySelector('.tw-world-core');
  const nodes=['events','battle','home','story'].map(key=>world.querySelector('.tw-world-'+key));
  const names=['Exploration & Events','Combat','Cats & Home','Story & World'];
  // Two illustrative future influences per system keep the response readable.
  const destinations=[[1,2],[2,3],[0,3],[0,1]];
  const links=[...svg.querySelectorAll('.tw-world-link')];
  const cross=[...svg.querySelectorAll('.tw-world-crosslink')];
  const dots=document.createElementNS('http://www.w3.org/2000/svg','g');
  svg.append(dots);
  const status=document.getElementById('effectStatus');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  let frame=0,sequence=0;
  world.dataset.playing='false';
  function stop(){
    cancelAnimationFrame(frame);frame=0;dots.replaceChildren();
    nodes.forEach(node=>node.classList.remove('is-receiving'));
    core.classList.remove('is-relaying');world.dataset.playing='false';
  }
  const box=e=>({x:e.offsetLeft,y:e.offsetTop,w:e.offsetWidth,h:e.offsetHeight});
  function draw(){
    stop();const w=world.clientWidth,h=world.clientHeight;if(!w||!h)return;
    svg.setAttribute('viewBox',`0 0 ${w} ${h}`);
    const c=box(core),bounds=nodes.map(box);
    bounds.forEach((n,i)=>{
      const left=i%2===0,upper=i<2,x=left?n.x+n.w:n.x,y=n.y+n.h/2;
      const tx=left?c.x:c.x+c.w,ty=c.y+c.h*(upper?.32:.68),mx=(x+tx)/2;
      links[i].setAttribute('d',`M${x} ${y} C${mx} ${y} ${mx} ${ty} ${tx} ${ty}`);
    });
    cross.forEach((path,i)=>{
      const a=bounds[i*2],b=bounds[i*2+1],x=a.x+a.w,tx=b.x;
      const y=i?a.y+a.h:a.y,ty=i?b.y+b.h:b.y,cy=i?h-5:5;
      path.setAttribute('d',`M${x} ${y} C${x+45} ${cy} ${tx-45} ${cy} ${tx} ${ty}`);
    });
  }
  function play(source){
    stop();const targets=destinations[source];sequence++;
    world.dataset.source=String(source);world.dataset.sequence=String(sequence);
    nodes.forEach((node,i)=>{
      node.classList.toggle('is-source',i===source);
      node.classList.toggle('is-connected',targets.includes(i));
      node.setAttribute('aria-pressed',String(i===source));
    });
    links.forEach((link,i)=>link.classList.toggle('is-connected',i===source||targets.includes(i)));
    status.textContent=`${names[source]} influences ${targets.map(i=>names[i]).join(' and ')} through Living World. Proposed future relationships; click again to replay.`;
    if(reduced.matches)return;
    const journeys=[{index:source,start:0,duration:320,reverse:false},...targets.map((index,i)=>({index,start:320+i*80,duration:540,reverse:true}))].map(journey=>{
      const dot=document.createElementNS('http://www.w3.org/2000/svg','circle');
      dot.classList.add('influence-dot');dot.setAttribute('r','5');dot.setAttribute('opacity','0');dots.append(dot);
      return {...journey,dot,length:links[journey.index].getTotalLength()};
    });
    world.dataset.playing='true';const began=performance.now();
    function tick(now){
      const elapsed=now-began;
      journeys.forEach(j=>{
        const progress=(elapsed-j.start)/j.duration;
        if(progress<0||progress>1){j.dot.setAttribute('opacity','0');return;}
        const point=links[j.index].getPointAtLength((j.reverse?1-progress:progress)*j.length);
        j.dot.setAttribute('cx',point.x);j.dot.setAttribute('cy',point.y);
        j.dot.setAttribute('opacity',String(Math.min(1,progress*8,(1-progress)*8)));
      });
      core.classList.toggle('is-relaying',elapsed>=280&&elapsed<520);
      targets.forEach((index,i)=>nodes[index].classList.toggle('is-receiving',elapsed>=800+i*80));
      if(elapsed<1100)frame=requestAnimationFrame(tick);else stop();
    }
    frame=requestAnimationFrame(tick);
  }
  nodes.forEach((node,i)=>{
    node.addEventListener('click',()=>play(i));
    node.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();play(i);}});
  });
  document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();});
  reduced.addEventListener('change',()=>{if(reduced.matches)stop();});
  new ResizeObserver(draw).observe(world);
  document.fonts.ready.then(draw);
  draw();
})();
