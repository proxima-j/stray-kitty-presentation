import {readFileSync, existsSync} from 'node:fs';
import {join, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const entryFiles = ['index.html', 'blank.html'];
const requiredElementIds = [
  'scrollSpace', 'stage', 'world', 'roadDrawing', 'routeGhost',
  'routeInk', 'routeReveal', 'heroCat', 'helpButton', 'helpPanel',
  'helpClose', 'paceSelect'
];
const requiredFiles = [
  'styles/tokens.css', 'styles/core.css', 'styles/layouts.css',
  'styles/blank.css', 'scripts/story-engine.js',
  'scripts/media.js', 'scripts/interactions.js'
];

function fail(message) {
  throw new Error('Template check failed: ' + message);
}

function inspectEntry(fileName) {
  const html = readFileSync(join(root, fileName), 'utf8');
  const scenes = [...html.matchAll(/<section\b[^>]*class="scene"[^>]*>/g)].map(match => match[0]);
  if (scenes.length < 2) fail(fileName + ': at least two scenes are required');

  const ids = scenes.map(scene => scene.match(/\bid="([^"]+)"/)?.[1]);
  const pages = scenes.map(scene => scene.match(/data-page="([^"]+)"/)?.[1]);
  const indices = scenes.map(scene => Number(scene.match(/data-scene="(\d+)"/)?.[1]));

  if (ids.some(id => !id) || new Set(ids).size !== ids.length) {
    fail(fileName + ': scene IDs must be unique');
  }
  if (new Set(pages).size !== pages.length) fail(fileName + ': data-page must be unique');
  if (!indices.every((value, index) => value === index)) {
    fail(fileName + ': data-scene must be zero-based and ordered');
  }
  if (!pages.every((value, index) => value === String(index + 1).padStart(2, '0'))) {
    fail(fileName + ': data-page must be consecutive 01,02,...');
  }
  for (const id of requiredElementIds) {
    if (!html.includes('id="' + id + '"')) fail(fileName + ': missing element #' + id);
  }
  for (const script of ['scripts/story-engine.js', 'scripts/media.js']) {
    if (!html.includes('src="' + script + '"')) fail(fileName + ': missing shared script ' + script);
  }
  return scenes.length;
}

for (const fileName of requiredFiles) {
  if (!existsSync(join(root, fileName))) fail('Missing shared file: ' + fileName);
}
for (const asset of JSON.parse(readFileSync(join(root, 'assets/manifest.json'), 'utf8')).assets) {
  if (!existsSync(join(root, asset.path))) fail('Missing asset: ' + asset.path);
}
for (const fileName of entryFiles) {
  const count = inspectEntry(fileName);
  console.log('OK: ' + fileName + ' — ' + count + ' ordered scenes and shared player hooks.');
}
