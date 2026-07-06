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

import { DAYS, MEMORIES, TIME_SLOTS, WEEKLY_TEMPLATE, SPECIALS, CHARACTERS, SCENES } from "./data-index.js";
import { getPronouns } from "./state.js";

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

export function getNoticeboardItems(state) {
  const day = DAYS[state.dayIndex];
  if (!day) return [];

  const slotKey = `${day.weekday}-${state.slotIndex}`;
  const special = SPECIALS[getCurrentKey(state)];

  let items;
  if (special && special.exclusive) {
    items = [...special.items];
  } else {
    items = (WEEKLY_TEMPLATE[slotKey] || []).filter(
      item => !item.weeks || item.weeks.includes(day.week)
    );
    if (special) {
      const replaced = new Set(special.items.map(item => item.replaces).filter(Boolean));
      items = items.filter(item => !replaced.has(item.id));
      items = [...special.items, ...items];
    }
  }

  const apartmentListed = items.some(item => item.location === "Your Apartment");
  if (!apartmentListed) {
    const apartmentScenes = ["apartment_morning", "apartment_afternoon", "apartment_evening"];
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

export function matchWhen(state, when) {
  if (!when) return true;
  if (when.flag && !state.flags[when.flag]) return false;
  if (when.notFlag && state.flags[when.notFlag]) return false;
  if (when.anyFlag && !when.anyFlag.some(flag => state.flags[flag])) return false;
  if (when.memory && !state.memories.includes(when.memory)) return false;
  if (when.notMemory && state.memories.includes(when.notMemory)) return false;
  if (when.seenScene && !state.seenScenes.includes(when.seenScene)) return false;
  if (when.week && DAYS[state.dayIndex] && DAYS[state.dayIndex].week !== when.week) return false;
  if (when.weeks && DAYS[state.dayIndex] && !when.weeks.includes(DAYS[state.dayIndex].week)) return false;
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
    const variant = base.variants.find(v => matchWhen(state, v.when));
    if (variant) {
      const { when, ...overrides } = variant;
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
  const choices = (scene.choices || []).filter(choice => {
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

export function startGame(state, player) {
  state.player.name = player.name?.trim() || "New Resident";
  state.player.pronouns = player.pronouns || "they/them";
  state.view = "noticeboard";
  state.activeTab = "noticeboard";
  return state;
}

export function openTab(state, tabName) {
  state.activeTab = tabName;
  state.view = "noticeboard";
  state.activeSceneId = null;
  state.pendingOutcome = null;
  return state;
}

export function beginActivity(state, activityId) {
  const item = getNoticeboardItems(state).find(activity => activity.id === activityId);
  if (!item) return state;
  state.activeSceneId = item.sceneId;
  state.view = "scene";
  state.activeTab = "noticeboard";
  return state;
}

export function chooseSceneOption(state, choiceIndex) {
  const scene = resolveScene(state, state.activeSceneId);
  if (!scene) return state;

  const choice = scene.choices[choiceIndex];
  if (!choice) return state;

  applyEffects(state, choice.effects || {});
  markSeen(state, state.activeSceneId);

  const outcomeBlocks = (choice.outcome || [{ text: "The time passes." }])
    .filter(block => matchWhen(state, block.when));

  state.pendingOutcome = {
    title: scene.title,
    location: scene.location,
    art: scene.art,
    content: substituteLines(outcomeBlocks, state),
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

  state.activeSceneId = null;
  advanceTime(state);
  if (state.dayIndex >= DAYS.length) {
    state.view = "ending";
    state.activeTab = "noticeboard";
  } else {
    state.view = "noticeboard";
    state.activeTab = "noticeboard";
  }
  return state;
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
    if (state.flags.rhonda_pushed_too_hard && score >= 2) return "She has not forgotten what you said at rehearsal. She has decided it was possibly, irritatingly, fair.";
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
  } else if (state.flags.missed_concert) {
    lines.push("The Autumn Concert happened down the hall. You heard the applause through the door. People are still telling the stories. You nod along.");
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
    lines.push("Jean watched the concert from the third row, a programme folded in her lap and no clipboard in sight.");
  } else if (state.flags.jean_carried_it_alone) {
    lines.push("Jean ran the raffle with a biscuit tin, a roll of tickets, and a pencil sharpened down to a stub.");
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
  const pronouns = getPronouns(state.player.pronouns);

  return lines.map(item => {
    const copy = { ...item };
    copy.text = replaceTokens(copy.text, playerName, pronouns);
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

function replaceTokens(text, playerName, pronouns) {
  return String(text)
    .replaceAll("{name}", playerName)
    .replaceAll("{they}", pronouns.subject)
    .replaceAll("{them}", pronouns.object)
    .replaceAll("{their}", pronouns.possessive)
    .replaceAll("{themself}", pronouns.reflexive)
    .replaceAll("{are}", pronouns.be)
    .replaceAll("{have}", pronouns.have);
}
