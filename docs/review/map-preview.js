(() => {
  'use strict';
  const clips=[...document.querySelectorAll('.map-media video')];
  const auto=Boolean(document.querySelector('.four-maps-review,.vertical-map-review'));
  const held=new WeakSet();
  function updateButtons(){
    for(const video of clips){
      const card=video.closest('.map-card');
      const btn=card?.querySelector('.clip-toggle');
      if(!btn)continue;
      const playing=!video.paused;
      card.classList.toggle('is-playing',playing);
      btn.textContent=playing?'PAUSE':'PLAY';
      btn.setAttribute('aria-pressed',String(playing));
    }
  }
  for(const video of clips){
    video.muted=true;
    video.loop=true;
    video.playsInline=true;
    video.addEventListener('play',()=>{if(!auto)for(const other of clips)if(other!==video)other.pause();updateButtons()});
    video.addEventListener('pause',updateButtons);
    video.addEventListener('ended',updateButtons);
  }
  document.querySelectorAll('.clip-toggle').forEach(button=>button.addEventListener('click',()=>{
    const video=button.closest('.map-media')?.querySelector('video');
    if(!video)return;
    if(!video.paused){held.add(video);video.pause();}
    else{held.delete(video);video.play().catch(()=>{button.textContent='RETRY'})}
  }));
  if(auto){
    if('IntersectionObserver' in window){
      const observer=new IntersectionObserver(entries=>{
        for(const entry of entries){
          const video=entry.target;
          if(!entry.isIntersecting||document.hidden)video.pause();
          else if(!held.has(video))video.play().catch(()=>{});
        }
      },{threshold:.15});
      clips.forEach(clip=>observer.observe(clip));
    }
    document.addEventListener('visibilitychange',()=>{
      for(const video of clips){
        if(document.hidden)video.pause();
        else if(!held.has(video))video.play().catch(()=>{});
      }
    });
  }
  updateButtons();
})();
