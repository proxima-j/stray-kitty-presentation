(() => {
 'use strict';
 const scenes=[...document.querySelectorAll('.scene')];
 const videos=[...document.querySelectorAll('video[data-scene-video]')];
 let visible={id:'',visible:false};
 function loadMedia(scene) {
  if(!scene)return;
  scene.querySelectorAll('[data-media-src]').forEach(element=>{
   if(element.closest('[hidden]')||element.tagName==='VIDEO')return;
   if(!element.hasAttribute('src'))element.src=element.dataset.mediaSrc;
  });
 }
 function syncVideos(){
  videos.forEach(video=>{
   const active=visible.visible&&video.closest('.scene')?.id===visible.id&&!video.closest('[hidden]')&&!document.hidden;
   if(!active){video.pause();return;}
   if(!video.getAttribute('src')&&video.dataset.mediaSrc){video.src=video.dataset.mediaSrc;video.load();}
   video.muted=true;video.play().catch(()=>{});
  });
 }
 const q=new URLSearchParams(location.search).get('page');
 loadMedia(scenes.find(x=>x.id===q||x.dataset.page===q)||scenes[0]);
 window.addEventListener('presentation:viewchange',event=>{visible=event.detail;loadMedia(document.getElementById(visible.id));syncVideos();});
 window.addEventListener('presentation:loadmedia',event=>loadMedia(document.getElementById(event.detail.id)));
 document.addEventListener('visibilitychange',syncVideos);
})();
