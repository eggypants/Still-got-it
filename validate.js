// Validator for Still Got It. Run after EVERY data or engine edit:
//
//   node validate.js
//
// Exit code 0 = no blocking errors. Warnings still need review before release.
// Non-zero = do not deploy; fix errors first.
//
// It checks referential integrity (every sceneId, memory, friendship id, and
// flag reference resolves), scene shape, schedule coverage of every calendar slot,
// scene id collisions across data files — and then PLAYS the game three ways:
// a stay-home run, a Rhonda golden-path run, and a Bob Crossroads run,
// asserting the key flags and endings come out right.

import { DAYS, TIME_SLOTS, WEEKLY_TEMPLATE, SPECIALS, STORY_QUEUES, SCENES, CHARACTERS, MEMORIES, SCENE_SOURCES } from "./data-index.js";
import * as engine from "./engine.js";
import { createInitialState, normalizeState } from "./state.js";

let errors = 0;
let warnings = 0;
const err = msg => { errors += 1; console.error("  ERROR:", msg); };
const warn = msg => { warnings += 1; console.warn("  warn :", msg); };
const MAX_WEEK = Math.max(...DAYS.map(day => day.week));

// ---------------------------------------------------------------------------
console.log("1. Scene id collisions across data files");
{
  const seen = new Map();
  for (const [file, scenes] of Object.entries(SCENE_SOURCES)) {
    for (const id of Object.keys(scenes)) {
      if (seen.has(id)) err(`scene "${id}" defined in both ${seen.get(id)} and ${file}`);
      seen.set(id, file);
    }
  }
}

// ---------------------------------------------------------------------------
console.log(`2. Schedule integrity (${DAYS.length * TIME_SLOTS.length} slots)`);
{
  for (let d = 0; d < DAYS.length; d++) {
    for (let s = 0; s < TIME_SLOTS.length; s++) {
      const state = createInitialState();
      state.dayIndex = d;
      state.slotIndex = s;
      const items = engine.getNoticeboardItems(state);
      if (!items.length) err(`slot ${d}-${s} (${DAYS[d].weekday} W${DAYS[d].week}) has no activities`);
      for (const item of items) {
        if (!SCENES[item.sceneId]) err(`slot ${d}-${s} item "${item.id}" references missing scene "${item.sceneId}"`);
        if (!item.note) warn(`slot ${d}-${s} item "${item.id}" has no note`);
      }
      const ids = items.map(i => i.id);
      if (new Set(ids).size !== ids.length) err(`slot ${d}-${s} has duplicate activity ids`);
    }
  }
  for (const [key, special] of Object.entries(SPECIALS)) {
    const [d, s] = key.split("-").map(Number);
    if (Number.isNaN(d) || Number.isNaN(s) || d >= DAYS.length || s >= TIME_SLOTS.length) {
      err(`SPECIALS key "${key}" is outside the calendar`);
    }
    for (const item of special.items) {
      if (item.replaces && special.exclusive) warn(`SPECIALS "${key}" item "${item.id}" has replaces inside an exclusive slot (replaces is ignored)`);
    }
  }
  for (const [location, queue] of Object.entries(STORY_QUEUES)) {
    if (!Array.isArray(queue)) {
      err(`STORY_QUEUES "${location}" is not an array`);
      continue;
    }
    for (const [i, beat] of queue.entries()) {
      const where = `STORY_QUEUES "${location}" beat[${i}]`;
      if (!beat.sceneId) err(`${where}: missing sceneId`);
      else if (!SCENES[beat.sceneId]) err(`${where}: references missing scene "${beat.sceneId}"`);
      if (beat.minDay !== undefined && (!Number.isInteger(beat.minDay) || beat.minDay < 0 || beat.minDay >= DAYS.length)) {
        err(`${where}: minDay ${beat.minDay} is outside the ${DAYS.length}-day calendar`);
      }
    }
  }
}

// ---------------------------------------------------------------------------
console.log("3. Scene shape and reference integrity");
{
  const checkWhen = (when, where) => {
    if (!when) return;
    const known = ["flag", "notFlag", "anyFlag", "memory", "notMemory", "seenScene", "seenVariant", "notSeenVariant", "anySeenVariant", "minFriendship", "week", "weeks"];
    for (const key of Object.keys(when)) {
      if (!known.includes(key)) err(`${where}: unknown when-condition "${key}"`);
    }
    if (when.memory && !MEMORIES[when.memory]) err(`${where}: unknown memory "${when.memory}"`);
    if (when.notMemory && !MEMORIES[when.notMemory]) err(`${where}: unknown memory "${when.notMemory}"`);
    if (when.week !== undefined && (!Number.isInteger(when.week) || when.week < 1 || when.week > MAX_WEEK)) {
      err(`${where}: impossible week ${when.week} for a ${MAX_WEEK}-week game`);
    }
    if (when.weeks && (!Array.isArray(when.weeks) || when.weeks.some(w => !Number.isInteger(w) || w < 1 || w > MAX_WEEK))) {
      err(`${where}: impossible weeks condition for a ${MAX_WEEK}-week game`);
    }
    if (when.seenScene && !SCENES[when.seenScene]) err(`${where}: unknown scene "${when.seenScene}"`);
    if (when.minFriendship) {
      for (const id of Object.keys(when.minFriendship)) {
        if (!CHARACTERS[id]) err(`${where}: unknown character "${id}"`);
      }
    }
  };

  const checkBlocks = (blocks, where) => {
    for (const block of blocks || []) {
      if (typeof block.text !== "string") err(`${where}: content block without text`);
      checkWhen(block.when, where);
    }
  };

  const checkChoices = (choices, where) => {
    for (const [i, choice] of (choices || []).entries()) {
      const cwhere = `${where} choice[${i}]`;
      if (typeof choice.text !== "string") err(`${cwhere}: no text`);
      if (choice.requiresMemory && !MEMORIES[choice.requiresMemory]) err(`${cwhere}: unknown memory "${choice.requiresMemory}"`);
      if (choice.requiresFriendship) {
        for (const id of Object.keys(choice.requiresFriendship)) {
          if (!CHARACTERS[id]) err(`${cwhere}: unknown character "${id}"`);
        }
      }
      if (choice.nextSceneId && !SCENES[choice.nextSceneId]) err(`${cwhere}: nextSceneId references missing scene "${choice.nextSceneId}"`);
      checkBlocks(choice.outcome, cwhere + " outcome");
      const fx = choice.effects || {};
      if (fx.friendship) {
        for (const id of Object.keys(fx.friendship)) {
          if (!CHARACTERS[id]) err(`${cwhere}: friendship effect for unknown character "${id}"`);
        }
      }
      for (const memoryId of fx.memories || []) {
        if (!MEMORIES[memoryId]) err(`${cwhere}: grants unknown memory "${memoryId}"`);
      }
    }
  };

  const checkScheduleItemWeeks = (item, where) => {
    if (!item.weeks) return;
    if (!Array.isArray(item.weeks) || item.weeks.some(w => !Number.isInteger(w) || w < 1 || w > MAX_WEEK)) {
      err(`${where}: impossible weeks condition for a ${MAX_WEEK}-week game`);
    }
  };

  for (const [id, scene] of Object.entries(SCENES)) {
    const where = `scene "${id}"`;
    if (!scene.title) err(`${where}: no title`);
    if (!scene.location) err(`${where}: no location`);
    checkBlocks(scene.content, where);
    checkChoices(scene.choices, where);
    if (!(scene.choices || []).length && !(scene.variants || []).length) warn(`${where}: no choices (player will be stuck)`);
    if (scene.oneShot && !scene.variantId) err(`${where}: oneShot base variation requires variantId`);
    for (const [vi, variant] of (scene.variants || []).entries()) {
      const vwhere = `${where} variant[${vi}]`;
      if (variant.oneShot && !variant.id) err(`${vwhere}: oneShot variant requires a stable id`);
      if (!variant.when) warn(`${vwhere}: no when-condition (base scene is unreachable)`);
      checkWhen(variant.when, vwhere);
      checkBlocks(variant.content, vwhere);
      checkChoices(variant.choices, vwhere);
      if (variant.content && !Object.prototype.hasOwnProperty.call(variant, "choices") && (scene.choices || []).length > 1) {
        warn(`${vwhere}: overrides content but inherits multiple base choices — check that the choices still answer the displayed scene`);
      }
    }
  }

  for (const [slotKey, items] of Object.entries(WEEKLY_TEMPLATE)) {
    for (const [i, item] of items.entries()) checkScheduleItemWeeks(item, `WEEKLY_TEMPLATE "${slotKey}" item[${i}]`);
  }
  for (const [key, special] of Object.entries(SPECIALS)) {
    for (const [i, item] of special.items.entries()) checkScheduleItemWeeks(item, `SPECIALS "${key}" item[${i}]`);
  }
  for (const [location, queue] of Object.entries(STORY_QUEUES)) {
    for (const [i, beat] of queue.entries()) checkWhen(beat.when, `STORY_QUEUES "${location}" beat[${i}]`);
  }
}

// ---------------------------------------------------------------------------
console.log("3b. One-shot variation ids");
{
  const ids = new Map();
  const note = (id, where) => {
    if (!id) return;
    if (ids.has(id)) err(`variation id "${id}" used by both ${ids.get(id)} and ${where}`);
    ids.set(id, where);
  };
  for (const [sceneId, scene] of Object.entries(SCENES)) {
    note(scene.variantId, `scene "${sceneId}" base`);
    for (const [vi, variant] of (scene.variants || []).entries()) note(variant.id, `scene "${sceneId}" variant[${vi}]`);
  }
}

// ---------------------------------------------------------------------------
console.log("4. Prose lint warnings");
{
  const proseTics = [
    { pattern: /\bspiritually\b/i, label: "secular 'spiritually'" },
    { pattern: /like an accusation/i, label: "ornamental simile: 'like an accusation'" },
    { pattern: /from a height/i, label: "Salt Bae-ish cooking image: 'from a height'" },
    { pattern: /\bpalpable\b/i, label: "AI prose tic: 'palpable'" },
    { pattern: /soft chuckle/i, label: "AI prose tic: 'soft chuckle'" },
    { pattern: /barely above a whisper/i, label: "AI prose tic: 'barely above a whisper'" },
    { pattern: /\ba mix of\b/i, label: "AI prose tic: 'a mix of'" },
    { pattern: /smiles despite (himself|herself|themself|themselves)/i, label: "overused smile beat" },
    { pattern: /almost smiles/i, label: "overused smile beat: 'almost smiles'" },
    { pattern: /whole personality/i, label: "quip tic: 'whole personality'" },
    { pattern: /^Beat\.?$/i, label: "screenplay tic: standalone 'Beat.'" },
    { pattern: /^(AL|BOB|JEAN|MIRANDA|PABLO|RHONDA)\s*[:.]?$/, label: "merge artefact: standalone character heading/speaker label" },
    { pattern: /\b(AL|BOB|JEAN|MIRANDA|PABLO|RHONDA)\s*[:.]\s+/, label: "merge artefact: pasted speaker label inside narration" },
    { pattern: /\bBorn\s+(18|19|20)\d{2}\b/, label: "merge artefact: pasted character biography" },
    { pattern: /(Silk scarf, pearl earrings|Former restaurateur\. Warm|Practical, sharp, hard to impress|Calm, traditional, shy|Retired librarian, freelance writer|Ladies[’'] man, old band stories|Former actress)/i, label: "merge artefact: pasted character biography text" },
    { pattern: /^(SHARED VILLAGE SCENES|VILLAGE SCENES|SHARED SCENES|CHARACTER NOTES|SCENE NOTES|SCENES|SECTION)\s*$/i, label: "merge artefact: standalone section heading" },
    { pattern: /^[A-Z][A-Z0-9 /&-]{8,}$/, label: "possible merge artefact: all-caps imported heading" },
    { pattern: /(?<!\.)\.\.(?!\.)|,,|!!|\?\?|;;|::/, label: "copy-editing error: doubled punctuation" },
    { pattern: /\b(TODO|FIXME|Scene spec|Generated from|approved Still Got It script|Chunk \d+)\b/i, label: "merge artefact: imported instruction/source text" }
  ];

  const checkText = (value, where) => {
    if (typeof value !== "string") return;
    for (const tic of proseTics) {
      if (tic.pattern.test(value)) warn(`${where}: ${tic.label}`);
    }
  };

  const scanBlocks = (blocks, where) => {
    for (const [i, block] of (blocks || []).entries()) checkText(block.text, `${where} block[${i}]`);
  };

  const scanChoices = (choices, where) => {
    for (const [i, choice] of (choices || []).entries()) {
      checkText(choice.text, `${where} choice[${i}] text`);
      scanBlocks(choice.outcome, `${where} choice[${i}] outcome`);
    }
  };

  for (const [id, memory] of Object.entries(MEMORIES)) checkText(memory, `memory "${id}"`);
  for (const [id, scene] of Object.entries(SCENES)) {
    const where = `scene "${id}"`;
    checkText(scene.title, `${where} title`);
    scanBlocks(scene.content, where);
    scanChoices(scene.choices, where);
    for (const [vi, variant] of (scene.variants || []).entries()) {
      scanBlocks(variant.content, `${where} variant[${vi}]`);
      scanChoices(variant.choices, `${where} variant[${vi}]`);
    }
  }
}

// ---------------------------------------------------------------------------
console.log("5. Reachability: every scene appears on the schedule");
{
  const scheduled = new Set(["apartment_morning", "apartment_afternoon", "apartment_evening"]);
  for (const items of Object.values(WEEKLY_TEMPLATE)) for (const item of items) scheduled.add(item.sceneId);
  for (const special of Object.values(SPECIALS)) for (const item of special.items) scheduled.add(item.sceneId);
  for (const queue of Object.values(STORY_QUEUES)) for (const beat of queue) scheduled.add(beat.sceneId);
  const collectNext = choices => {
    for (const choice of choices || []) if (choice.nextSceneId) scheduled.add(choice.nextSceneId);
  };
  for (const scene of Object.values(SCENES)) {
    collectNext(scene.choices);
    for (const variant of scene.variants || []) collectNext(variant.choices);
  }
  for (const id of Object.keys(SCENES)) {
    if (!scheduled.has(id)) warn(`scene "${id}" is never scheduled (unreachable)`);
  }
}


// ---------------------------------------------------------------------------
console.log("6. Critical memory availability");
{
  const requiredMemories = new Map();
  const grantedMemories = new Map();

  const noteRequired = (memoryId, sceneId) => {
    if (!requiredMemories.has(memoryId)) requiredMemories.set(memoryId, new Set());
    requiredMemories.get(memoryId).add(sceneId);
  };
  const noteGranted = (memoryId, sceneId) => {
    if (!grantedMemories.has(memoryId)) grantedMemories.set(memoryId, new Set());
    grantedMemories.get(memoryId).add(sceneId);
  };
  const scanChoicesForMemories = (choices, sceneId) => {
    for (const choice of choices || []) {
      if (choice.requiresMemory) noteRequired(choice.requiresMemory, sceneId);
      for (const memoryId of choice.effects?.memories || []) noteGranted(memoryId, sceneId);
    }
  };

  for (const [sceneId, scene] of Object.entries(SCENES)) {
    scanChoicesForMemories(scene.choices, sceneId);
    for (const variant of scene.variants || []) scanChoicesForMemories(variant.choices, sceneId);
  }

  const scheduleOccurrences = new Map();
  const bump = sceneId => scheduleOccurrences.set(sceneId, (scheduleOccurrences.get(sceneId) || 0) + 1);
  for (const items of Object.values(WEEKLY_TEMPLATE)) for (const item of items) bump(item.sceneId);
  for (const special of Object.values(SPECIALS)) for (const item of special.items) bump(item.sceneId);
  for (const queue of Object.values(STORY_QUEUES)) for (const beat of queue) bump(beat.sceneId);

  for (const [memoryId, requiredScenes] of requiredMemories.entries()) {
    const grantScenes = grantedMemories.get(memoryId) || new Set();
    if (!grantScenes.size) {
      err(`memory "${memoryId}" is required by ${[...requiredScenes].join(", ")} but never granted`);
      continue;
    }
    const totalScheduledAccess = [...grantScenes].reduce((sum, sceneId) => sum + (scheduleOccurrences.get(sceneId) || 0), 0);
    if (totalScheduledAccess <= 1) {
      warn(`memory "${memoryId}" gates a later choice but is only available through one scheduled scene: ${[...grantScenes].join(", ")}`);
    }
  }
}

// ---------------------------------------------------------------------------
console.log("7. Flag hygiene: flags read somewhere should be set somewhere");
{
  const setFlags = new Set();
  const collectSet = choices => {
    for (const choice of choices || []) {
      for (const flag of Object.keys(choice.effects?.flags || {})) setFlags.add(flag);
    }
  };
  for (const scene of Object.values(SCENES)) {
    collectSet(scene.choices);
    for (const variant of scene.variants || []) collectSet(variant.choices);
  }
  const readFlags = new Set();
  const collectRead = when => {
    if (!when) return;
    if (when.flag) readFlags.add(when.flag);
    if (when.notFlag) readFlags.add(when.notFlag);
    for (const flag of when.anyFlag || []) readFlags.add(flag);
  };
  for (const scene of Object.values(SCENES)) {
    for (const block of scene.content || []) collectRead(block.when);
    for (const variant of scene.variants || []) {
      collectRead(variant.when);
      for (const block of variant.content || []) collectRead(block.when);
      for (const choice of variant.choices || []) for (const block of choice.outcome || []) collectRead(block.when);
    }
    for (const choice of scene.choices || []) {
      if (choice.requiresFlag) readFlags.add(choice.requiresFlag);
      if (choice.requiresNotFlag) readFlags.add(choice.requiresNotFlag);
      for (const block of choice.outcome || []) collectRead(block.when);
    }
  }
  // Flags the engine itself reads (buildEnding, getResidentNote, opening-night gates):
  for (const flag of [
    "rhonda_show_success", "rhonda_show_failed", "attended_concert_uninvolved", "missed_concert",
    "bob_went_reunion", "bob_reunion_missed", "saw_pablo_miranda_corner_table",
    "saw_pablo_miranda_tea", "saw_pablo_miranda_seedlings", "rhonda_pushed_too_hard",
    "rhonda_night_before_success", "rhonda_night_before_failed", "rhonda_recruitment_seen",
    "miranda_delegated", "miranda_did_it_alone", "pablo_cooked_carmens", "pablo_substituted",
    "jean_let_go", "jean_carried_it_alone", "jean_deflected_festival",
    "concert_started", "rhonda_rehearsal_seen"
  ]) readFlags.add(flag);

  for (const flag of readFlags) {
    if (!setFlags.has(flag)) err(`flag "${flag}" is READ but never SET by any choice`);
  }
  for (const flag of setFlags) {
    if (!readFlags.has(flag)) warn(`flag "${flag}" is set but never read (dead flag — fine if intentional)`);
  }
}

// ---------------------------------------------------------------------------
console.log("7b. One-shot availability and save migration");
{
  const migrated = normalizeState({ ...createInitialState(), seenVariants: undefined });
  if (!Array.isArray(migrated.seenVariants)) err("old save migration did not add seenVariants");


  const tv = createInitialState();
  tv.dayIndex = 3; // Thursday, week 1
  tv.slotIndex = 2;
  let tvItem = engine.getNoticeboardItems(tv).find(item => item.sceneId === "generic_tv_room");
  if (!tvItem) err("television pilot scene is not initially available");
  else {
    engine.beginActivity(tv, tvItem.id);
    const scene = engine.resolveScene(tv, tv.activeSceneId);
    if (scene?.variantId !== "generic_tv_room.default") err("television pilot resolved the wrong variation");
    engine.chooseSceneOption(tv, 0);
    engine.continueAfterOutcome(tv);
    tv.dayIndex = 4; // Friday, week 1
    tv.slotIndex = 2;
    tvItem = engine.getNoticeboardItems(tv).find(item => item.sceneId === "generic_tv_room");
    if (tvItem) err("television location remained after its only variation was played");
  }

  const movie = createInitialState();
  movie.seenScenes.push("rhonda_movie_night"); // expose the recurring pilot scene
  movie.dayIndex = 2; // Wednesday, week 1
  movie.slotIndex = 2;
  let movieItem = engine.getNoticeboardItems(movie).find(item => item.sceneId === "generic_movie");
  if (!movieItem) err("default movie variation is not initially available");
  else {
    engine.beginActivity(movie, movieItem.id);
    let scene = engine.resolveScene(movie, movie.activeSceneId);
    if (scene?.variantId !== "generic_movie.default") err("default movie resolved the wrong variation");
    engine.chooseSceneOption(movie, 0);
    engine.continueAfterOutcome(movie);

    movie.dayIndex = 9; // Wednesday, week 2: no new eligible movie variation
    movie.slotIndex = 2;
    movieItem = engine.getNoticeboardItems(movie).find(item => item.sceneId === "generic_movie");
    if (movieItem) err("movie remained visible with no eligible unplayed variation");

    movie.friendships.rhonda = 2;
    movie.dayIndex = 16; // Wednesday, week 3: Rhonda variation becomes eligible
    movie.slotIndex = 2;
    movieItem = engine.getNoticeboardItems(movie).find(item => item.sceneId === "generic_movie");
    if (!movieItem) err("movie did not return when a later variation became eligible");
    else {
      engine.beginActivity(movie, movieItem.id);
      scene = engine.resolveScene(movie, movie.activeSceneId);
      if (scene?.variantId !== "generic_movie.rhonda_hat") err("Rhonda movie variation did not take priority when eligible");
      engine.chooseSceneOption(movie, 0);
      engine.continueAfterOutcome(movie);
      movie.dayIndex = 16;
      movie.slotIndex = 2;
      movieItem = engine.getNoticeboardItems(movie).find(item => item.sceneId === "generic_movie");
      if (movieItem) err("movie remained visible after all eligible variations were played");
    }
  }
}

// ---------------------------------------------------------------------------
console.log("8. Simulated playthroughs");

function playRun(name, pickFn, assertions) {
  const state = createInitialState();
  engine.startGame(state, { name: "Tester", pronouns: "they/them" });
  let guard = 0;
  while (state.view !== "ending" && guard < 500) {
    guard += 1;

    if (state.view === "outcome") {
      if (!state.pendingOutcome || !state.pendingOutcome.content.length) {
        err(`[${name}] produced an empty outcome`);
        return;
      }
      engine.continueAfterOutcome(state);
      continue;
    }

    if (state.view === "scene") {
      const scene = engine.resolveScene(state, state.activeSceneId);
      if (!scene) { err(`[${name}] chained scene "${state.activeSceneId}" failed to resolve`); return; }
      if (!scene.choices.length) { err(`[${name}] chained scene "${state.activeSceneId}" resolved with zero choices — player stuck`); return; }
      engine.chooseSceneOption(state, 0);
      continue;
    }

    const items = engine.getNoticeboardItems(state);
    const pick = pickFn(state, items) || items[items.length - 1];
    engine.beginActivity(state, pick.id);
    const scene = engine.resolveScene(state, state.activeSceneId);
    if (!scene) { err(`[${name}] scene "${state.activeSceneId}" failed to resolve`); return; }
    if (!scene.choices.length) { err(`[${name}] scene "${state.activeSceneId}" resolved with zero choices — player stuck`); return; }
    const choiceIndex = (pick.chooseIndex !== undefined) ? pick.chooseIndex : 0;
    engine.chooseSceneOption(state, Math.min(choiceIndex, scene.choices.length - 1));
  }
  if (state.view !== "ending") { err(`[${name}] never reached the ending (loop guard hit)`); return; }
  const ending = engine.buildEnding(state);
  try {
    assertions(state, ending);
    console.log(`  ok  : ${name}`);
  } catch (e) {
    err(`[${name}] ${e.message}`);
  }
}

const byScene = (items, sceneId) => items.find(item => item.sceneId === sceneId);
const apartment = items => items.find(item => item.location === "Your Apartment");
const byLoc = (items, location) => items.find(item => item.location === location);

// Floating-scene aware crossroads navigator. Under the story-queue system the
// memory scene surfaces by LOCATION, not by a fixed sceneId, so tests must
// visit the place and take whatever scene is served — picking the memory
// choice when it appears. Params: the character's location, their crossroads
// sceneId, the memory id, and the friendship floor the crossroads variant needs.
function crossroadsNav(location, crossroadsSceneId, memoryId, minFr) {
  return (state, items) => {
    const cross = byScene(items, crossroadsSceneId);
    const haveMem = state.memories.includes(memoryId);
    // Once the crossroads is on the board and we have the memory + closeness, take it.
    if (cross && haveMem) return { ...cross, chooseIndex: 0 };
    // Otherwise keep visiting the character's location to build friendship and
    // collect the memory when the reveal beat surfaces.
    const here = byLoc(items, location);
    if (here) {
      const scene = engine.resolveScene(state, here.sceneId);
      const idx = scene?.choices?.findIndex(c => c.effects?.memories?.includes(memoryId));
      if (idx !== undefined && idx >= 0) return { ...here, chooseIndex: idx };
      return here;
    }
    if (cross) return { ...cross, chooseIndex: 0 };
    const concert = byScene(items, "rhonda_opening_night");
    if (concert) return concert;
    return apartment(items);
  };
}

// Run A: hermit. Stay home for 21 days.
playRun("hermit run", (state, items) => apartment(items), (state, ending) => {
  if (!state.flags.missed_concert) throw new Error("hermit should have missed_concert set");
  if (!ending.lines.some(l => l.includes("applause through the door"))) throw new Error("missed-concert ending line absent");
  if (!ending.lines.some(l => l.includes("kettle worked"))) throw new Error("kettle line absent for hermit");
});

// Run B: Rhonda golden path. Chase every Rhonda scene; take the memory-gated
// choice at the night-before scene; attend the concert.
playRun("rhonda golden path", (state, items) => {
  const targets = [
    "rhonda_first_meeting", "rhonda_pottery", "rhonda_movie_night",
    "rhonda_concert_notice", "rhonda_recruitment", "rhonda_rehearsal",
    "rhonda_lounge_before_show", "rhonda_final_rehearsal", "rhonda_lounge_short"
  ];
  for (const target of targets) {
    const hit = byScene(items, target);
    if (hit) return hit;
  }
  const nightBefore = byScene(items, "rhonda_night_before");
  if (nightBefore) {
    // The memory-gated hat choice is appended after the two base choices.
    return { ...nightBefore, chooseIndex: 2 };
  }
  const concert = byScene(items, "rhonda_opening_night");
  if (concert) return concert;
  return apartment(items);
}, (state, ending) => {
  if (!state.memories.includes("rhonda_hat_laugh")) throw new Error("hat memory not collected at movie night");
  if (!state.flags.rhonda_night_before_success) throw new Error("night-before success flag not set (memory-gated choice missing?)");
  if (!state.flags.rhonda_show_success) throw new Error("concert success flag not set");
  if (!ending.lines.some(l => l.includes("next time"))) throw new Error("success ending line absent");
  if ((state.friendships.rhonda || 0) < 8) throw new Error(`rhonda friendship only ${state.friendships.rhonda} — Close should be reachable on the golden path`);
});

// Run C: Bob Crossroads. Work the workshop until the June photo appears, take
// the reunion pressure point with the memory choice, attend the concert cold.
playRun("bob crossroads", (state, items) => {
  const reunion = byScene(items, "bob_reunion");
  if (reunion) return { ...reunion, chooseIndex: 0 };
  const workshop = byScene(items, "generic_workshop_bob");
  if (workshop) return workshop;
  const concert = byScene(items, "rhonda_opening_night");
  if (concert) return concert;
  return apartment(items);
}, (state, ending) => {
  if (!state.memories.includes("bob_june_roses")) throw new Error("June memory not collected via workshop variant");
  if (!state.flags.bob_went_reunion) throw new Error("bob_went_reunion not set — pressure point or memory gate failed");
  if (!ending.lines.some(l => l.includes("poem") && l.includes("June"))) throw new Error("Bob convergence ending line absent");
  if (!state.flags.attended_concert_uninvolved) throw new Error("cold concert attendance should set attended_concert_uninvolved");
});

// Run E: Miranda Crossroads. Garden until the tablecloth appears, take the
// pressure point with the memory choice, attend the concert cold.
playRun("miranda crossroads", crossroadsNav("Gardens", "miranda_competition", "miranda_good_tablecloth", 5), (state, ending) => {
  if (!state.memories.includes("miranda_good_tablecloth")) throw new Error("miranda_good_tablecloth not collected");
  if (!state.flags.miranda_delegated) throw new Error("miranda_delegated not set — pressure point or memory gate failed");
  if (!ending.lines.some(l => l.includes("jam"))) throw new Error("miranda crossroads success ending line absent");
});

// Run F: Pablo Crossroads. Cafe until the recipe card appears, take the feast
// pressure point with the memory choice, attend the concert cold.
playRun("pablo crossroads", crossroadsNav("Village Café", "pablo_feast", "pablo_carmen_rice", 5), (state, ending) => {
  if (!state.memories.includes("pablo_carmen_rice")) throw new Error("pablo_carmen_rice not collected");
  if (!state.flags.pablo_cooked_carmens) throw new Error("pablo_cooked_carmens not set — pressure point or memory gate failed");
  if (!ending.lines.some(l => l.includes("breakfast"))) throw new Error("pablo crossroads success ending line absent");
});


// Run G: Jean Crossroads. Library until the festival photograph appears, take
// the fig tree pressure point with the memory choice, attend the concert cold.
playRun("jean crossroads", crossroadsNav("Library", "jean_figtree", "jean_festival_days", 5), (state, ending) => {
  if (!state.memories.includes("jean_festival_days")) throw new Error("jean_festival_days not collected");
  if (!state.flags.jean_let_go) throw new Error("jean_let_go not set — pressure point or memory gate failed");
  if (!ending.lines.some(l => l.includes("Rae") && l.includes("tambourine player"))) throw new Error("jean crossroads success ending line absent");
});


// Run D: reunion without closeness — the observer base scene must appear and
// set the missed flag without offering the pressure point.
playRun("bob reunion as stranger", (state, items) => {
  const reunion = byScene(items, "bob_reunion");
  if (reunion) return reunion;
  return apartment(items);
}, (state) => {
  if (!state.flags.bob_reunion_missed) throw new Error("observer reunion should set bob_reunion_missed");
  if (state.flags.bob_went_reunion) throw new Error("stranger should not be able to send Bob to the reunion");
});

// ---------------------------------------------------------------------------
console.log("");
if (errors) {
  console.error(`FAILED: ${errors} error(s), ${warnings} warning(s).`);
  console.error("Release readiness: not ready; fix errors before upload.");
  process.exit(1);
} else if (warnings) {
  console.log(`PASSED WITH WARNINGS: 0 errors, ${warnings} warning(s).`);
  console.log("Release readiness: warnings need review before upload.");
} else {
  console.log("PASSED: 0 errors, 0 warnings.");
  console.log("Release readiness: ready to upload.");
}
