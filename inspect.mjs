import { SCENE_SOURCES, SCENES, SPECIALS, WEEKLY_TEMPLATE, DAYS, TIME_SLOTS } from './data-index.js';
for (const [file, scenes] of Object.entries(SCENE_SOURCES)) {
  console.log(`\n${file}: ${Object.keys(scenes).length} scenes`);
  for (const [id, scene] of Object.entries(scenes)) {
    const v = scene.variants ? ` variants=${scene.variants.length}` : '';
    const c = scene.choices ? ` choices=${scene.choices.length}` : '';
    console.log(`  ${id}: ${scene.title || ''}${v}${c}`);
  }
}
console.log('\nSPECIALS:');
for (const [key, sp] of Object.entries(SPECIALS)) {
  const [d,s] = key.split('-').map(Number);
  console.log(`${key} W${DAYS[d].week} ${DAYS[d].weekday} ${TIME_SLOTS[s]} ${sp.exclusive?'EXCLUSIVE':''}`);
  for (const item of sp.items) console.log(`  ${item.id} -> ${item.sceneId} (${item.title})`)
}
