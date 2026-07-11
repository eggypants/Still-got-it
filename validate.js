// Validator for Still Got It. Run after EVERY data or engine edit:
//
//   node validate.js
//
// Exit code 0 = safe to upload. Non-zero = do not deploy; fix errors first.
//
// It checks referential integrity (every sceneId, memory, friendship id, and
// flag reference resolves), scene shape, schedule coverage of all 56 slots,
// scene id collisions across data files — and then PLAYS the game three ways:
// a stay-home run, a Rhonda golden-path run, and a Bob Crossroads run,
// asserting the key flags and endings come out right.

import { DAYS, TIME_SLOTS, WEEKLY_TEMPLATE, SPECIALS, SCENES, CHARACTERS, MEMORIES, SCENE_SOURCES, STORY_QUEUES } from "./data-index.js";
import * as engine from "./engine.js";
import { createInitialState } from "./state.js";

let errors = 0;
let warnings = 0;
const err = msg => { errors += 1; console.error("  ERROR:", msg); };
const warn = msg => { warnings += 1; console.warn("  warn :", msg); };

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
console.log("2. Schedule integrity (56 slots)");
{
  if (TIME_SLOTS.length !== 2 || TIME_SLOTS[0] !== "Morning" || TIME_SLOTS[1] !== "Evening") {
    err(`TIME_SLOTS must be exactly Morning, Evening; got ${JSON.stringify(TIME_SLOTS)}`);
  }
  for (let d = 0; d < DAYS.length; d++) {
    for (let s = 0; s <= 1; s++) {
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
  for (const [slotKey, templateItems] of Object.entries(WEEKLY_TEMPLATE)) {
    for (const item of templateItems) {
      if (item.once !== undefined && typeof item.once !== "boolean") {
        err(`WEEKLY_TEMPLATE "${slotKey}" item "${item.id}" has non-boolean once`);
      }
    }
  }
  for (const [location, beats] of Object.entries(STORY_QUEUES)) {
    if (!Array.isArray(beats)) {
      err(`STORY_QUEUES "${location}" must be an array`);
      continue;
    }
    for (const [i, beat] of beats.entries()) {
      if (beat.maxDay !== undefined && (!Number.isInteger(beat.maxDay) || beat.maxDay < 0 || beat.maxDay >= DAYS.length)) {
        err(`STORY_QUEUES "${location}" beat[${i}] has invalid maxDay ${JSON.stringify(beat.maxDay)}`);
      }
      if (beat.maxDay !== undefined && beat.minDay !== undefined && beat.maxDay < beat.minDay) {
        err(`STORY_QUEUES "${location}" beat[${i}] has maxDay before minDay`);
      }
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
  for (let dayIndex = 6; dayIndex < DAYS.length; dayIndex++) {
    const lateRhondaState = createInitialState();
    lateRhondaState.dayIndex = dayIndex;
    const lateRhondaBeat = engine.getNextStoryBeat(lateRhondaState, "Community Lounge");
    if (lateRhondaBeat?.sceneId === "rhonda_first_meeting") {
      err(`rhonda_first_meeting must not be served after day 5; served on day ${dayIndex}`);
      break;
    }
  }
  const concertState = createInitialState();
  concertState.dayIndex = 27;
  concertState.slotIndex = 1;
  const concertItems = engine.getNoticeboardItems(concertState);
  if (concertItems.length !== 1 || concertItems[0].sceneId !== "rhonda_opening_night") {
    err(`day 27 evening must offer only the concert; got ${concertItems.map(item => item.sceneId).join(", ")}`);
  }
}

// ---------------------------------------------------------------------------
console.log("3. Scene shape and reference integrity");
{
  const checkWhen = (when, where) => {
    if (!when) return;
    const known = ["flag", "notFlag", "anyFlag", "memory", "notMemory", "seenScene", "minFriendship", "minCounter", "week", "weeks"];
    for (const key of Object.keys(when)) {
      if (!known.includes(key)) err(`${where}: unknown when-condition "${key}"`);
    }
    if (when.memory && !MEMORIES[when.memory]) err(`${where}: unknown memory "${when.memory}"`);
    if (when.notMemory && !MEMORIES[when.notMemory]) err(`${where}: unknown memory "${when.notMemory}"`);
    if (when.weeks && (!Array.isArray(when.weeks) || when.weeks.some(w => !Number.isInteger(w) || w < 1 || w > 4))) err(`${where}: invalid weeks condition`);
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

  for (const [id, scene] of Object.entries(SCENES)) {
    const where = `scene "${id}"`;
    if (!scene.title) err(`${where}: no title`);
    if (!scene.location) err(`${where}: no location`);
    checkBlocks(scene.content, where);
    checkChoices(scene.choices, where);
    if (!(scene.choices || []).length && !(scene.variants || []).length && !(scene.content || []).length) {
      warn(`${where}: no content or choices`);
    }
    for (const [vi, variant] of (scene.variants || []).entries()) {
      const vwhere = `${where} variant[${vi}]`;
      if (!variant.when) warn(`${vwhere}: no when-condition (base scene is unreachable)`);
      checkWhen(variant.when, vwhere);
      checkBlocks(variant.content, vwhere);
      checkChoices(variant.choices, vwhere);
      if (variant.content && !Object.prototype.hasOwnProperty.call(variant, "choices") && (scene.choices || []).length > 1) {
        warn(`${vwhere}: overrides content but inherits multiple base choices — check that the choices still answer the displayed scene`);
      }
    }
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
    { pattern: /^Beat\.?$/i, label: "screenplay tic: standalone 'Beat.'" }
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
  const scheduled = new Set(["apartment_morning", "apartment_evening"]);
  for (const items of Object.values(WEEKLY_TEMPLATE)) for (const item of items) scheduled.add(item.sceneId);
  for (const special of Object.values(SPECIALS)) for (const item of special.items) scheduled.add(item.sceneId);
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
    for (const flag of Object.keys(scene.terminalEffects?.flags || {})) setFlags.add(flag);
    for (const variant of scene.variants || []) {
      collectSet(variant.choices);
      for (const flag of Object.keys(variant.terminalEffects?.flags || {})) setFlags.add(flag);
    }
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
    "rhonda_show_success", "rhonda_show_failed", "attended_concert_uninvolved",
    "bob_went_reunion", "bob_reunion_missed", "saw_pablo_miranda_corner_table",
    "saw_pablo_miranda_tea", "saw_pablo_miranda_seedlings", "rhonda_pushed_too_hard",
    "rhonda_night_before_success", "rhonda_night_before_failed", "rhonda_recruitment_seen",
    "miranda_delegated", "miranda_did_it_alone", "pablo_cooked_carmens", "pablo_substituted",
    "jean_let_go", "jean_carried_it_alone", "jean_deflected_festival", "Al_love",
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
console.log("8. Simulated playthroughs");

function playRun(name, pickFn, assertions) {
  const state = createInitialState();
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

// Run A: hermit. Stay home until the mandatory concert, then attend cold.
playRun("hermit run", (state, items) => {
  const concert = byScene(items, "rhonda_opening_night");
  if (concert) return concert;
  return apartment(items);
}, (state, ending) => {
  if (!state.flags.attended_concert_uninvolved) throw new Error("mandatory concert should set attended_concert_uninvolved");
  if (!ending.lines.some(l => l.includes("third row"))) throw new Error("uninvolved concert ending line absent");
  if (!ending.lines.some(l => l.includes("kettle worked"))) throw new Error("kettle line absent for hermit");
});

// Run B: Rhonda golden path. Chase every Rhonda scene; take the memory-gated
// choice at the night-before scene; attend the concert.
playRun("rhonda golden path", (state, items) => {
  const targets = [
    "rhonda_first_meeting", "rhonda_pottery", "rhonda_old_box", "rhonda_movie_night",
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

// Run: Al Crossroads. Keep visiting the lounge until the cards scene's guitar
// version appears, then take the tune -> interrupt -> love path and attend cold.
playRun("al crossroads", (state, items) => {
  const lounge = byLoc(items, "Community Lounge");
  if (lounge && !state.flags.Al_love) return lounge;
  const concert = byScene(items, "rhonda_opening_night");
  if (concert) return concert;
  return apartment(items);
}, (state, ending) => {
  if (!state.flags.Al_love) throw new Error("Al_love not set by the guitar-scene love path");
  if (!state.seenScenes.includes("generic_cards_al__v2_c1_c1")) throw new Error("full guitar love path was not reached");
  if (!ending.lines.some(l => l.includes("straight") && l.includes("nobody"))) throw new Error("Al success ending line absent");
});

// Flow-chain clock test: guitar -> interrupt -> love. The two non-leaf
// choices must not advance time or apply leaf effects; one Continue after the
// leaf must advance exactly one slot.
{
  const state = createInitialState();
  state.dayIndex = 3;
  state.slotIndex = 0;
  state.seenScenes.push("generic_cards_al");
  state.activeSceneId = "generic_cards_al";
  state.view = "scene";

  const startClock = state.dayIndex * TIME_SLOTS.length + state.slotIndex;

  engine.chooseSceneOption(state, 0); // Are you gonna play us a tune, Al?
  if (state.activeSceneId !== "generic_cards_al__v2_c1" || state.view !== "scene") {
    err("[flowing conversation] first link did not render the next scene immediately");
  }
  if (state.dayIndex * TIME_SLOTS.length + state.slotIndex !== startClock) {
    err("[flowing conversation] clock advanced after the first non-leaf choice");
  }

  engine.chooseSceneOption(state, 0); // Interrupt Al.
  if (state.activeSceneId !== "generic_cards_al__v2_c1_c1" || state.view !== "scene") {
    err("[flowing conversation] second link did not render the next scene immediately");
  }
  if (state.dayIndex * TIME_SLOTS.length + state.slotIndex !== startClock) {
    err("[flowing conversation] clock advanced after the second non-leaf choice");
  }
  if (state.flags.Al_love) err("[flowing conversation] Al_love was applied before the leaf choice");

  engine.chooseSceneOption(state, 0); // Have you ever been in love?
  if (!state.flags.Al_love) err("[flowing conversation] leaf choice did not set Al_love");
  if (state.view !== "outcome" || !state.pendingOutcome?.flow) {
    err("[flowing conversation] leaf did not produce the single Continue state");
  }
  if (state.dayIndex * TIME_SLOTS.length + state.slotIndex !== startClock) {
    err("[flowing conversation] clock advanced before Continue");
  }

  engine.continueAfterOutcome(state);
  const endClock = state.dayIndex * TIME_SLOTS.length + state.slotIndex;
  if (endClock !== startClock + 1) {
    err(`[flowing conversation] clock advanced ${endClock - startClock} slots instead of exactly one`);
  } else if (state.flags.Al_love) {
    console.log("  ok  : flowing conversation");
  }
}

// Terminal-beat test: authored content with no choices should resolve to the
// standard Continue control and advance exactly one slot with no outcome page.
{
  const state = createInitialState();
  state.flags.miranda_dismissed = true;
  state.activeSceneId = "generic_garden_miranda";
  state.view = "scene";

  const startClock = state.dayIndex * TIME_SLOTS.length + state.slotIndex;
  const scene = engine.resolveScene(state, state.activeSceneId);
  if (scene?.choices?.length !== 1 || scene.choices[0].terminal !== true) {
    err("[terminal scene] no-choice scene did not resolve to one engine Continue control");
  } else {
    engine.chooseSceneOption(state, 0);
    const endClock = state.dayIndex * TIME_SLOTS.length + state.slotIndex;
    if (endClock !== startClock + 1) err(`[terminal scene] clock advanced ${endClock - startClock} slots instead of exactly one`);
    if (state.view !== "noticeboard" || state.pendingOutcome) err("[terminal scene] Continue did not return directly to the noticeboard");
    if (!state.seenScenes.includes("generic_garden_miranda")) err("[terminal scene] scene was not marked seen");
    if (endClock === startClock + 1 && state.view === "noticeboard" && !state.pendingOutcome) {
      console.log("  ok  : terminal scene");
    }
  }
}

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
  console.error(`FAILED: ${errors} error(s), ${warnings} warning(s). Do not deploy.`);
  process.exit(1);
} else {
  console.log(`PASSED: 0 errors, ${warnings} warning(s). Safe to upload.`);
}
