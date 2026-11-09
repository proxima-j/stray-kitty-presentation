import {readFileSync, existsSync} from 'node:fs';
import {join, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const root=join(dirname(fileURLToPath(import.meta.url)),'..');
const page=readFileSync(join(root,'index.html'),'utf8');
const scenes=[...page.matchAll(/<section\b[^>]*class="scene"[^>]*>/g)].map(m=>m[0]);
function fail(message){throw new Error('Template check failed: '+message);}
if(scenes.length<2)fail('At least two scenes are required');
const ids=scenes.map(x=>x.match(/\bid="([^"]+)"/)?.[1]);
const pages=scenes.map(x=>x.match(/data-page="([^"]+)"/)?.[1]);
const indices=scenes.map(x=>Number(x.match(/data-scene="(\d+)"/)?.[1]));
if(ids.some(x=>!x)||new Set(ids).size!==ids.length)fail('Scene ids must be unique');
if(new Set(pages).size!==pages.length)fail('data-page must be unique');
if(!indices.every((x,i)=>x===i))fail('data-scene must be zero-based and ordered');
if(!pages.every((x,i)=>x===String(i+1).padStart(2,'0')))fail('data-page must be 01,02,...');
for(const id of ['scrollSpace','stage','world','roadDrawing','routeGhost','routeInk','routeReveal','heroCat','helpButton','helpPanel','helpClose','paceSelect']){
 if(!page.includes('id="'+id+'"'))fail('Missing required element #'+id);
}
for(const item of JSON.parse(readFileSync(join(root,'assets/manifest.json'),'utf8')).assets){
 if(!existsSync(join(root,item.path)))fail('Missing asset: '+item.path);
}
for(const path of ['styles/tokens.css','styles/core.css','styles/layouts.css','scripts/story-engine.js','scripts/media.js','scripts/interactions.js']){
 if(!existsSync(join(root,path)))fail('Missing runtime file '+path);
}
console.log('OK: '+scenes.length+' ordered scenes, player hooks and media manifest.');
