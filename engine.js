// Engine v0.4.2. Pure logic, no DOM. Data comes merged from data-index.js.
//
// New in 0.3:
//   - 28-day calendar driven by WEEKLY_TEMPLATE + SPECIALS (see data-core.js)
//   - Scene variants: a scene may define `variants: [{ when, ...overrides }]`.
//     The first variant whose `when` matches the state replaces the base
//     scene's overridden fields (content, choices, title...). This is how
//     scenes deepen with friendship and how Crossroads gate their private
//     pressure-point on closeness.
//   - Conditional content blocks: any content/outcome block may carry
//     `when: {...}`; non-matching blocks are dropped at resolve time. This is
//     how the concert converges the results of every arc.
//   - Gated choices: `requiresMemory`, `requiresFlag`, `requiresNotFlag`,
//     `requiresFriendship: { id: min }`.
//
// `when` conditions (all present conditions must hold):
//   { flag: "x" }                 – state.flags.x is truthy
//   { notFlag: "x" }              – state.flags.x is falsy
//   { anyFlag: ["a","b"] }        – at least one flag truthy
//   { memory: "id" }              – memory collected
//   { notMemory: "id" }           – memory not collected
//   { seenScene: "sceneId" }      – scene already played
//   { minFriendship: { id: n } }  – every listed friendship >= n
//   { week: n }                   – current week equals n
//   { weeks: [n, m] }              – current week is in the list

import { DAYS, MEMORIES, TIME_SLOTS, WEEKLY_TEMPLATE, SPECIALS, CHARACTERS, SCENES, STORY_QUEUES } from "./data-index.js";


export function getCurrentDate(state) {
  const day = DAYS[Math.min(state.dayIndex, DAYS.length - 1)];
  const slot = TIME_SLOTS[state.slotIndex];
  return { ...day, slot };
}

export function getCurrentKey(state) {
  return `${state.dayIndex}-${state.slotIndex}`;
}

// ---------------------------------------------------------------------------
// Schedule
// ---------------------------------------------------------------------------

// The next unseen, eligible story beat for a location, or null. This is the
// floating-scene system: story advances when the player visits the place, not
// on an exact calendar day. See data-stories.js.
function storyBeatEligible(state, beat) {
  if (state.seenScenes.includes(beat.sceneId)) return false;
  if (beat.minDay !== undefined && state.dayIndex < beat.minDay) return false;
  if (beat.maxDay !== undefined && state.dayIndex > beat.maxDay) return false;
  if (!matchWhen(state, beat.when)) return false;
  return true;
}

export function getNextStoryBeat(state, location) {
  const queue = STORY_QUEUES[location];
  if (!queue) return null;
  // Priority list, not a gate chain: return the first floating beat that is
  // unseen and eligible. Beats with their own noticeboard cards are excluded:
  // they must not consume this location visit's one-floating-beat allowance.
  for (const beat of queue) {
    if (beat.notice) continue;
    if (storyBeatEligible(state, beat)) return beat;
  }
  return null;
}

export function getStandaloneStoryItems(state) {
  const items = [];
  for (const beats of Object.values(STORY_QUEUES)) {
    for (const beat of beats) {
      if (!beat.notice || !storyBeatEligible(state, beat)) continue;
      items.push({
        ...beat.notice,
        sceneId: beat.sceneId,
        _story: true,
        _standaloneStory: true
      });
    }
  }
  return items;
}

export function getNoticeboardItems(state) {
  const day = DAYS[state.dayIndex];
  if (!day) return [];

  const slotKey = `${day.weekday}-${state.slotIndex}`;
  const special = SPECIALS[getCurrentKey(state)];

  let items;
  if (special && special.exclusive) {
    items = [...special.items];
  } else {
    items = (WEEKLY_TEMPLATE[slotKey] || []).filter(item => {
      if (item.weeks && !item.weeks.includes(day.week)) return false;
      if (item.once === true && state.seenScenes.includes(item.sceneId)) return false;
      if (item.when && !matchWhen(state, item.when)) return false;
      return true;
    });
    if (special) {
      const replaced = new Set(special.items.map(item => item.replaces).filter(Boolean));
      items = items.filter(item => !replaced.has(item.id));
      items = [...special.items, ...items];
    }

    // Mark which items are specials so the floating layer leaves them alone.
    const specialIds = new Set((special ? special.items : []).map(item => item.id));

    // Floating story beats: if a listed activity's location has a story beat
    // ready, swap that activity's scene for the story scene. The activity's
    // title/note stay (the player still just sees "Coffee in the lounge"); the
    // scene behind it is the next chapter of that place's story.
    // SPECIALS are deliberate calendar events (crossroads, the concert, the
    // reunion bus) and must NEVER be overridden by a floating beat.
    items = items.map(item => {
      if (specialIds.has(item.id)) return item;
      const beat = getNextStoryBeat(state, item.location);
      if (beat) {
        return { ...item, sceneId: beat.sceneId, _story: true };
      }
      return item;
    });
    // De-dupe: if two activities in the same slot share a location, only the
    // first should carry the story beat (otherwise the same scene appears twice).
    const usedStory = new Set();
    items = items.filter(item => {
      if (item._story) {
        if (usedStory.has(item.sceneId)) return false;
        usedStory.add(item.sceneId);
      }
      return true;
    });

    // Standalone story cards have their own authored location and noticeboard
    // entry. They coexist with scheduled activities and do not use or suppress
    // any location's floating-story beat for this slot.
    const scheduledScenes = new Set(items.map(item => item.sceneId));
    const standalone = getStandaloneStoryItems(state)
      .filter(item => !scheduledScenes.has(item.sceneId));
    items = [...standalone, ...items];
  }

  const apartmentListed = items.some(item => item.location === "Your Apartment");
  if (!(special && special.exclusive) && !apartmentListed) {
    const apartmentScenes = ["apartment_morning", "apartment_evening"];
    items = [
      ...items,
      {
        id: `apartment-${getCurrentKey(state)}`,
        title: "Stay in your apartment",
        location: "Your Apartment",
        note: "The kettle works. The door can stay closed.",
        sceneId: apartmentScenes[state.slotIndex] || "apartment_evening"
      }
    ];
  }

  return items;
}

// ---------------------------------------------------------------------------
// Condition matching
// ---------------------------------------------------------------------------

export 
function hashString(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) { h = ((h << 5) - h + s.charCodeAt(i)) | 0; }
  return Math.abs(h);
}
function matchWhen(state, when) {
  if (!when) return true;
  if (when.flag && !state.flags[when.flag]) return false;
  if (when.notFlag && state.flags[when.notFlag]) return false;
  if (when.anyFlag && !when.anyFlag.some(flag => state.flags[flag])) return false;
  if (when.memory && !state.memories.includes(when.memory)) return false;
  if (when.notMemory && state.memories.includes(when.notMemory)) return false;
  if (when.seenScene && !state.seenScenes.includes(when.seenScene)) return false;
  if (when.week && DAYS[state.dayIndex] && DAYS[state.dayIndex].week !== when.week) return false;
  if (when.weeks && DAYS[state.dayIndex] && !when.weeks.includes(DAYS[state.dayIndex].week)) return false;
  if (when.minCounter) {
    for (const [id, min] of Object.entries(when.minCounter)) {
      if ((state.counters?.[id] || 0) < min) return false;
    }
  }
  if (when.maxCounter) {
    for (const [id, max] of Object.entries(when.maxCounter)) {
      if ((state.counters?.[id] || 0) > max) return false;
    }
  }
  if (when.minFriendship) {
    for (const [id, min] of Object.entries(when.minFriendship)) {
      if ((state.friendships[id] || 0) < min) return false;
    }
  }
  return true;
}

// ---------------------------------------------------------------------------
// Scene resolution
// ---------------------------------------------------------------------------

export function resolveScene(state, sceneId) {
  const base = SCENES[sceneId];
  if (!base) return null;

  let scene = base;

  if (base.variants) {
    let variant;
    if (base.pickVariant === "random") {
      // If this scene is currently open and we've locked a variant, honour it
      // so the scene can't reshuffle between resolves.
      if (state.lockedVariant && state.lockedVariant.sceneId === sceneId) {
        const li = state.lockedVariant.index;
        base._variantIndex = li;
        variant = li < 0 ? null : base.variants[li];
      } else {
      // The base scene (index -1) is also a pickable option in the random pool,
      // alongside any variants whose conditions match and that aren't spent.
      const pool = [];
      if (!base.baseWhen || matchWhen(state, base.baseWhen)) {
        pool.push({ v: null, i: -1 });
      }
      base.variants.forEach((v, i) => {
        if (matchWhen(state, v.when) && (!v.once || !(state.seenVariants || {})[sceneId + "#" + i])) {
          pool.push({ v, i });
        }
      });
      if (pool.length) {
        const seed = (hashString(sceneId) + state.dayIndex * 131 + state.slotIndex * 17) >>> 0;
        const pick = pool[seed % pool.length];
        base._variantIndex = pick.i;
        variant = pick.v;
      }
      }
    } else {
      variant = base.variants.find(v => matchWhen(state, v.when));
      if (variant) base._variantIndex = base.variants.indexOf(variant);
    }
    if (variant) {
      const { when, ...overrides } = variant;
      // A variant that supplies its own content but no choices is a terminal
      // beat — it must NOT inherit the base scene's choices. Only carry base
      // choices when the variant explicitly omits content (pure gate variant).
      if (overrides.content && !("choices" in overrides)) {
        overrides.choices = [];
      }
      scene = { ...base, ...overrides };
    }
  }

  // Back-compat: simple repeat text for revisited scenes with no matching variant.
  if (scene === base && base.repeatContent && state.seenScenes.includes(sceneId)) {
    scene = { ...base, content: base.repeatContent };
  }

  scene = {
    ...scene,
    content: (scene.content || []).filter(block => matchWhen(state, block.when))
  };

  return filterSceneChoices(state, scene);
}

function filterSceneChoices(state, scene) {
  const authoredChoices = scene.choices || [];

  // A scene with authored content and no authored choices is a terminal beat.
  // The empty text is never rendered as story prose; the UI presents the
  // standard Continue control, and the engine advances time directly.
  if (!authoredChoices.length && (scene.content || []).length) {
    return {
      ...scene,
      choices: [{ text: "", terminal: true, effects: scene.terminalEffects || {} }]
    };
  }

  const choices = authoredChoices.filter(choice => {
    if (choice.requiresMemory && !state.memories.includes(choice.requiresMemory)) return false;
    if (choice.requiresFlag && !state.flags[choice.requiresFlag]) return false;
    if (choice.requiresNotFlag && state.flags[choice.requiresNotFlag]) return false;
    if (choice.requiresFriendship) {
      for (const [id, min] of Object.entries(choice.requiresFriendship)) {
        if ((state.friendships[id] || 0) < min) return false;
      }
    }
    return true;
  });

  return { ...scene, choices };
}

export function getSceneForActivity(state, activityId) {
  const item = getNoticeboardItems(state).find(activity => activity.id === activityId);
  if (!item) return null;
  return resolveScene(state, item.sceneId);
}

// ---------------------------------------------------------------------------
// Game flow
// ---------------------------------------------------------------------------

function clearActivitySession(state) {
  state.activeSceneId = null;
  state.pendingOutcome = null;
  state.flowTranscript = null;
  state.lockedVariant = null;
  state.activityCommitted = false;
}

function finishActivity(state) {
  clearActivitySession(state);
  advanceTime(state);
  state.activeTab = "noticeboard";
  state.view = state.dayIndex >= DAYS.length ? "ending" : "noticeboard";
  return state;
}

export function openTab(state, tabName) {
  // Once the player has made any choice, the activity is committed. Leaving
  // through a tab completes it and consumes the slot, including from the
  // outcome view. pendingOutcome/flowTranscript are retained as compatibility
  // fallbacks for saves created before activityCommitted existed.
  const committed = Boolean(
    state.activityCommitted || state.pendingOutcome || state.flowTranscript
  );
  if (committed) {
    finishActivity(state);
    if (state.view !== "ending") state.activeTab = tabName;
    return state;
  }

  clearActivitySession(state);
  state.activeTab = tabName;
  state.view = "noticeboard";
  return state;
}

export function beginActivity(state, activityId) {
  const item = getNoticeboardItems(state).find(activity => activity.id === activityId);
  if (!item) return state;
  state.activeSceneId = item.sceneId;
  state.pendingOutcome = null;
  state.flowTranscript = null;
  state.activityCommitted = false;
  // Lock the random-variant choice for the whole time this scene is open, so it
  // can't reshuffle between resolves (which would let a displayed choice execute
  // a different variant's outcome). Cleared when the scene ends.
  state.lockedVariant = null;
  const resolved = resolveScene(state, state.activeSceneId);
  if (resolved && resolved._variantIndex !== undefined) {
    state.lockedVariant = { sceneId: state.activeSceneId, index: resolved._variantIndex };
  }
  state.view = "scene";
  state.activeTab = "noticeboard";
  return state;
}

export function chooseSceneOption(state, choiceIndex) {
  const scene = resolveScene(state, state.activeSceneId);
  if (!scene) return state;

  const choice = scene.choices[choiceIndex];
  if (!choice) return state;

  // Record which variant was shown, AFTER we've locked in the scene the player
  // actually saw — so a `once` variant isn't swapped out mid-decision.
  if (scene._variantIndex !== undefined && scene._variantIndex !== null && scene._variantIndex >= 0) {
    state.seenVariants ||= {};
    state.seenVariants[state.activeSceneId + "#" + scene._variantIndex] = true;
  }

  if (choice.terminal === true) {
    state.activityCommitted = true;
    applyEffects(state, choice.effects || {});
    markSeen(state, state.activeSceneId);
    return finishActivity(state);
  }

  // Flowing chains stay on one transcript. Non-leaf choices may apply effects,
  // but the leaf is the only point that offers Continue.
  const flowTarget = (choice.nextSceneId && choice.flow === true)
    ? resolveScene(state, choice.nextSceneId)
    : null;
  const flowGateOk = flowTarget && (!flowTarget.when || matchWhen(state, flowTarget.when));
  if (flowTarget && flowGateOk) {
    const nextScene = flowTarget;

    const outcomeBlocks = (choice.outcome || [{ text: "The time passes." }])
      .filter(block => matchWhen(state, block.when));
    const substitutedOutcome = substituteLines(outcomeBlocks, state);

    markSeen(state, state.activeSceneId);
    state.activityCommitted = true;

    // Non-leaf flowing choices may still carry effects (e.g. setting an intro
    // flag, or a friendship bump mid-conversation). Apply them now.
    if (choice.effects) applyEffects(state, choice.effects);

    if (!state.flowTranscript) {
      state.flowTranscript = {
        title: scene.title,
        location: scene.location,
        art: scene.art,
        content: substituteLines(scene.content || [], state)
      };
    }

    // Show what the player just did, so the accumulating transcript stays legible.
    // A spoken choice ("Bob") becomes: PLAYER NAME. Bob
    // An action choice ("Join them") becomes: *You join them* (italic narration)
    const label = String(choice.text || "").trim();
    const looksSpoken = /^["“”].*["“”]$/.test(label);
    if (looksSpoken) {
      const spoken = label.replace(/^["“”]+|["“”]+$/g, "");
      const playerName = state.player.name || "You";
      state.flowTranscript.content.push({ kind: "dialogue", speaker: playerName.toUpperCase(), text: spoken });
    } else {
      state.flowTranscript.content.push({ kind: "narration", text: "You " + label.charAt(0).toLowerCase() + label.slice(1) });
    }

    state.flowTranscript.content.push(...substitutedOutcome);
    state.flowTranscript.content.push(...substituteLines(nextScene.content || [], state));
    state.activeSceneId = choice.nextSceneId;
    state.pendingOutcome = null;
    state.view = "scene";
    state.activeTab = "noticeboard";
    return state;
  }

  state.activityCommitted = true;
  applyEffects(state, choice.effects || {});
  markSeen(state, state.activeSceneId);

  const outcomeBlocks = (choice.outcome || [{ text: "The time passes." }])
    .filter(block => matchWhen(state, block.when));
  const substitutedOutcome = substituteLines(outcomeBlocks, state);

  if (state.flowTranscript) {
    state.flowTranscript.content.push(...substitutedOutcome);
    state.pendingOutcome = {
      title: state.flowTranscript.title,
      location: state.flowTranscript.location,
      art: state.flowTranscript.art,
      content: state.flowTranscript.content,
      nextSceneId: null,
      flow: true
    };
    state.view = "outcome";
    return state;
  }

  state.pendingOutcome = {
    title: scene.title,
    location: scene.location,
    art: scene.art,
    content: substitutedOutcome,
    nextSceneId: choice.nextSceneId || null
  };
  state.view = "outcome";
  return state;
}

export function continueAfterOutcome(state) {
  const nextSceneId = state.pendingOutcome?.nextSceneId || null;
  state.pendingOutcome = null;

  if (nextSceneId) {
    state.activeSceneId = nextSceneId;
    state.view = "scene";
    state.activeTab = "noticeboard";
    return state;
  }

  return finishActivity(state);
}

export function advanceTime(state) {
  state.slotIndex += 1;
  if (state.slotIndex >= TIME_SLOTS.length) {
    state.slotIndex = 0;
    state.dayIndex += 1;
  }
}

export function applyEffects(state, effects) {
  if (effects.friendship) {
    for (const [id, amount] of Object.entries(effects.friendship)) {
      state.friendships[id] = Math.max(0, (state.friendships[id] || 0) + amount);
    }
  }
  if (effects.flags) {
    for (const [key, value] of Object.entries(effects.flags)) {
      state.flags[key] = value;
    }
  }
  if (effects.counters) {
    state.counters ||= {};
    for (const [key, amount] of Object.entries(effects.counters)) {
      state.counters[key] = (state.counters[key] || 0) + amount;
    }
  }
  if (effects.memories) {
    for (const memoryId of effects.memories) {
      if (!state.memories.includes(memoryId)) {
        state.memories.push(memoryId);
      }
    }
  }
}

export function markSeen(state, sceneId) {
  if (!sceneId) return;
  if (!state.seenScenes.includes(sceneId)) state.seenScenes.push(sceneId);
}

export function getMemoryText(memoryId) {
  return MEMORIES[memoryId] || memoryId;
}

// ---------------------------------------------------------------------------
// Relationship presentation (no numbers shown, ever)
// ---------------------------------------------------------------------------

export function getFriendshipLabel(score, id, state) {
  if (id === "rhonda" && state.flags.rhonda_show_success) return "Dear friend";
  if (score >= 8) return "Close";
  if (score >= 5) return "Warm";
  if (score >= 2) return "Friendly";
  if (score >= 1) return "Familiar";
  return "Stranger";
}

export function getResidentNote(id, state) {
  const score = state.friendships[id] || 0;
  const character = CHARACTERS[id];

  if (id === "rhonda") {
    if (state.flags.rhonda_show_success) return "She has started saying ‘next time’ as if next time is already real.";
    if (state.flags.rhonda_show_failed) return "She still makes people laugh, but the old programmes have disappeared.";
    if (score >= 5) return "She saves you a seat and pretends it is an accident.";
    if (score >= 2) return "She has decided not to take your ignorance to heart.";
  }

  if (id === "bob") {
    if (state.flags.bob_went_reunion) return "He came back from the reunion with sand in his shoes and three phone numbers in his good jacket.";
    if (state.flags.bob_reunion_missed && score >= 2) return "He fixed four things in the workshop the week after the bus left. None of them were broken.";
    if (state.memories.includes("bob_june_roses") && score >= 2) return "He has not mentioned the photograph again. He knows you saw it.";
  }

  if (id === "miranda") {
    if (state.flags.miranda_delegated) return "She has started leaving jobs unfinished on purpose, to see if the world ends. It has not, yet.";
    if (state.flags.miranda_did_it_alone && score >= 2) return "The competition certificate is in a drawer. Her wrist is still strapped. Neither is discussed.";
    if (state.memories.includes("miranda_good_tablecloth") && score >= 2) return "The gloves she lent you have not been asked for back.";
    if (state.flags.saw_pablo_miranda_corner_table) return "She keeps accepting the second cup, under protest.";
  }

  if (id === "pablo") {
    if (state.flags.pablo_cooked_carmens) return "He has started letting people bring him things. Small things. It is a start.";
    if (state.memories.includes("pablo_carmen_rice") && score >= 2) return "He has not mentioned the recipe card again. It is still in his wallet; you have seen him check.";
    if (state.flags.saw_pablo_miranda_corner_table) return "He keeps finding reasons to make two cups of tea.";
  }

  if (id === "jean") {
    if (state.flags.jean_let_go) return "The petition folder is no longer under her arm. She is carrying a library book instead.";
    if (state.memories.includes("jean_festival_days") && score >= 2) return "She has shown you the shoebox of festival photographs. The yellow scarf was brighter than the tent canvas.";
  }

  if (id === "al") {
    if (state.flags.Al_love) return "He still holds court, but he lets other people finish their stories now. Mostly.";
    if (state.memories.includes("als_band") && score >= 2) return "He mentioned the band once, without the punchline. He noticed you noticing, and put the punchline back.";
  }

  if (score >= 5) return "You know where to find them, and sometimes they know where to find you.";
  if (score >= 2) return "You’ve shared a few ordinary moments.";
  if (score >= 1) return "They recognise you now.";
  return character.defaultNote;
}

// ---------------------------------------------------------------------------
// Ending
// ---------------------------------------------------------------------------

export function buildEnding(state) {
  const entries = Object.entries(state.friendships).sort((a, b) => b[1] - a[1]);
  const closest = entries[0];
  const closestName = closest ? CHARACTERS[closest[0]].name : "nobody in particular";
  const closestLabel = closest ? getFriendshipLabel(closest[1], closest[0], state) : "Stranger";

  const lines = [];

  if (state.flags.rhonda_show_success) {
    lines.push("Rhonda performed at the Autumn Concert. She has already said 'next time' twice, to people who didn't ask.");
  } else if (state.flags.rhonda_show_failed) {
    lines.push("The concert went ahead without Rhonda. People still laughed. The feather boa has not been seen since.");
  } else if (state.flags.attended_concert_uninvolved) {
    lines.push("You watched the Autumn Concert from the third row, between people who all seemed to know each other.");
  } else {
    lines.push("The month ended quietly. The village kept moving, whether or not you moved with it.");
  }

  if (state.flags.bob_went_reunion) {
    lines.push("Bob read a poem at the concert. It was about June. Nobody asked questions afterwards, and he seemed glad of both.");
  } else if (state.flags.bob_reunion_missed) {
    lines.push("The veterans' bus left without Bob. He said maybe next year. Nobody argued.");
  }

  if (state.flags.miranda_delegated) {
    lines.push("Miranda's garden won the competition. The certificate is in a drawer. The jam people keep leaving at her door is not.");
  } else if (state.flags.miranda_did_it_alone) {
    lines.push("Miranda's garden won the competition. She did it the way she does everything: completely, and alone. She was too tired to enjoy the win.");
  }

  if (state.flags.pablo_cooked_carmens) {
    lines.push("At the feast, Pablo cooked Carmen's rice and let other people salt it. On Tuesday, someone cooked him breakfast. He sat down for it.");
  } else if (state.flags.pablo_substituted) {
    lines.push("The feast was a triumph. The recipe card stayed in Pablo's wallet, behind the photographs. He was not ready, and that is allowed.");
  }

  if (state.flags.jean_let_go) {
    lines.push("Jean watched the concert from the third row, Rae beside her with spiky pink hair and the tambourine player’s grin.");
  } else if (state.flags.jean_carried_it_alone) {
    lines.push("Jean ran the raffle with a biscuit tin, a roll of tickets, and a pencil sharpened down to a stub.");
  }

  if (state.flags.Al_love) {
    lines.push("Al sang one song straight and dedicated it to nobody. People are still deciding what it meant, which is the most attention he has ever earned by trying less.");
  } else {
    lines.push("Al charmed the whole concert and went home alone, the act intact, the way he likes it. Probably.");
  }

  if (state.flags.saw_pablo_miranda_corner_table || (state.flags.saw_pablo_miranda_tea && state.flags.saw_pablo_miranda_seedlings)) {
    lines.push("Pablo and Miranda keep ending up at the same tables with the same excuses. Nobody has said anything. Everybody has noticed.");
  } else if (state.flags.saw_pablo_miranda_tea || state.flags.saw_pablo_miranda_seedlings) {
    lines.push("You caught Pablo and Miranda orbiting each other once or twice. Whatever it was, it carried on without you.");
  } else {
    lines.push("Other things happened in corners you did not visit.");
  }

  if (closest && closest[1] >= 5) {
    lines.push(`By the end of the month, ${closestName} had started saving you a seat.`);
  } else if (closest && closest[1] >= 2) {
    lines.push(`You were beginning to know ${closestName}. Enough to be missed if you skipped a morning.`);
  } else {
    lines.push("You kept mostly to yourself. Nothing terrible happened. The kettle worked. The days passed.");
  }

  lines.push("On Monday, there will be new notices on the board.");

  return { closestName, closestLabel, lines };
}

// ---------------------------------------------------------------------------
// Text substitution
// ---------------------------------------------------------------------------

export function substituteLines(lines, state) {
  const playerName = state.player.name || "New Resident";

  return lines.map(item => {
    const copy = { ...item };
    copy.text = replaceTokens(copy.text, playerName);
    return copy;
  });
}

export function substituteScene(scene, state) {
  return {
    ...scene,
    content: substituteLines(scene.content || [], state),
    choices: scene.choices || []
  };
}

function replaceTokens(text, playerName) {
  return String(text).replaceAll("{name}", playerName);
}
