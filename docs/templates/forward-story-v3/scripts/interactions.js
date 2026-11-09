(() => {
 'use strict';
 const scene=document.getElementById('interactive-example');
 if(!scene)return;
 const controls=[...scene.querySelectorAll('[data-example-view]')];
 const panels=[...scene.querySelectorAll('[data-example-panel]')];
 function choose(key){
  controls.forEach(x=>x.setAttribute('aria-pressed',String(x.dataset.exampleView===key)));
  panels.forEach(x=>x.hidden=x.dataset.examplePanel!==key);
  window.dispatchEvent(new CustomEvent('presentation:loadmedia',{detail:{id:scene.id}}));
 }
 controls.forEach(x=>x.addEventListener('click',()=>choose(x.dataset.exampleView)));
 choose('before');
})();
