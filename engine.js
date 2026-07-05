import { characters } from './characters.js';
import { scenes } from './scenes.js';
import { crossroadsEvents } from './crossroads.js';
import { SLOT_NAMES, FINAL_DAY, CROSSROADS_DAY } from './state.js';
import { determineEnding } from './endings.js';

export function getSlotName(state) {
  return SLOT_NAMES[state.slotIndex] || 'morning';
}

export function titleCase(value) {
  return `${value}`.slice(0, 1).toUpperCase() + `${value}`.slice(1);
}

export function hasSeen(state, sceneId) {
  return state.seenScenes.includes(sceneId);
}

export function hasFlag(state, flag) {
  return Boolean(state.flags[flag]);
}

export function wasChoiceMade(state, choiceId) {
  return state.choiceLog.some(entry => entry.choiceId === choiceId);
}

export function getTrust(state, characterId) {
  return state.relationships[characterId]?.trust ?? 0;
}

export function getRomance(state, characterId) {
  return state.relationships[characterId]?.romance ?? 0;
}

export function getRelationship(state, characterId) {
  return state.relationships[characterId];
}

export function addTrust(state, characterId, amount) {
  const rel = getRelationship(state, characterId);
  if (!rel) return;
  rel.trust = clamp(rel.trust + amount, 0, rel.maxTrust ?? 100);
}

export function addRomance(state, characterId, amount) {
  const rel = getRelationship(state, characterId);
  if (!rel) return;
  rel.romance = clamp(rel.romance + amount, 0, 100);
  if (amount > 0) rel.playerFlirted = true;
}

export function setMaxTrust(state, characterId, value) {
  const rel = getRelationship(state, characterId);
  if (!rel || value == null) return;
  rel.maxTrust = value;
  rel.trust = Math.min(rel.trust, value);
}

export function relationshipTier(state, characterId) {
  const trust = getTrust(state, characterId);
  const thresholds = characters[characterId].route.thresholds;
  if (trust >= thresholds.romance && getRelationship(state, characterId).playerFlirted) return 'romantic possibility';
  if (trust >= thresholds.closeFriend) return 'close bond';
  if (trust >= thresholds.friend) return 'friend';
  if (trust >= thresholds.acquaintance) return 'acquaintance';
  return 'stranger-ish';
}

export function getAvailableActivities(state) {
  if (state.phase !== 'playing') return [];

  const uniqueScenes = scenes
    .filter(scene => safeAvailable(scene, state))
    .filter(scene => scene.choices.some(choice => choiceAvailable(choice, state)))
    .map(scene => ({ ...scene, type: 'unique' }));

  const repeatables = Object.values(characters).map(character => makeRepeatableScene(state, character));

  return [...uniqueScenes, ...repeatables];
}

export function getSceneById(state, sceneId) {
  const unique = scenes.find(scene => scene.id === sceneId);
  if (unique) return unique;

  const repeatableMatch = /^repeat_(.+)$/.exec(sceneId);
  if (repeatableMatch) {
    const character = characters[repeatableMatch[1]];
    if (character) return makeRepeatableScene(state, character);
  }

  return null;
}

export function applyChoice(state, scene, choice) {
  if (!choiceAvailable(choice, state)) {
    state.lastFeedback = 'That choice is not available right now.';
    return;
  }

  applyEffects(state, choice.effects || {});

  if (!scene.repeatable && !state.seenScenes.includes(scene.id)) {
    state.seenScenes.push(scene.id);
  }

  state.choiceLog.push({
    day: state.day,
    slot: getSlotName(state),
    sceneId: scene.id,
    choiceId: choice.id,
    characterId: scene.characterId || null
  });

  state.lastFeedback = choice.after || 'You make your choice. Life at Sunset Pines rearranges itself slightly.';
  advanceTime(state);
}

export function triggerCrossroadsIfNeeded(state) {
  if (state.phase !== 'playing') return;
  if (state.crossroads.resolved) return;
  if (state.day !== CROSSROADS_DAY || state.slotIndex !== 0) return;

  const chosenId = chooseCrossroadsCharacter(state);
  const eventId = chosenId ? characters[chosenId].route.crossroadsId : 'village_mishap';

  state.crossroads.chosenCharacterId = chosenId;
  state.crossroads.eventId = eventId;
  state.phase = 'crossroads';
}

export function getCurrentCrossroadsEvent(state) {
  return crossroadsEvents[state.crossroads.eventId] || crossroadsEvents.village_mishap;
}

export function resolveCrossroadsChoice(state, choice) {
  const event = getCurrentCrossroadsEvent(state);
  const result = choice.resolve(state);

  if (event.characterId) {
    addTrust(state, event.characterId, result.trustDelta || 0);
    addRomance(state, event.characterId, result.romanceDelta || 0);
    setMaxTrust(state, event.characterId, result.maxTrust);
    state.relationships[event.characterId].crossroadsOutcome = result.outcome;
  }

  Object.assign(state.flags, result.flags || {});

  state.choiceLog.push({
    day: state.day,
    slot: 'crossroads',
    sceneId: event.id,
    choiceId: choice.id,
    characterId: event.characterId || null,
    outcome: result.outcome
  });

  state.crossroads.resolved = true;
  state.phase = 'playing';
  state.day = CROSSROADS_DAY + 1;
  state.slotIndex = 0;
  state.lastFeedback = result.text;
}

export function advanceTime(state) {
  if (state.phase !== 'playing') return;

  if (state.day > FINAL_DAY) {
    finishGame(state);
    return;
  }

  state.slotIndex += 1;

  if (state.slotIndex >= SLOT_NAMES.length) {
    state.slotIndex = 0;
    state.day += 1;
  }

  if (state.day > FINAL_DAY) {
    finishGame(state);
    return;
  }

  triggerCrossroadsIfNeeded(state);
}

export function finishGame(state) {
  state.phase = 'ending';
  state.ending = determineEnding(state);
}

export function chooseCrossroadsCharacter(state) {
  const ranked = Object.keys(state.relationships)
    .map(id => ({ id, trust: getTrust(state, id), romance: getRomance(state, id) }))
    .filter(item => item.trust >= 18)
    .sort((a, b) => (b.trust - a.trust) || (b.romance - a.romance) || a.id.localeCompare(b.id));

  return ranked[0]?.id || null;
}

export function choiceAvailable(choice, state) {
  return typeof choice.requirements === 'function' ? Boolean(choice.requirements(state)) : true;
}

export function applyEffects(state, effects) {
  if (effects.trust) {
    for (const [characterId, amount] of Object.entries(effects.trust)) addTrust(state, characterId, amount);
  }

  if (effects.romance) {
    for (const [characterId, amount] of Object.entries(effects.romance)) addRomance(state, characterId, amount);
  }

  if (effects.flags) {
    Object.assign(state.flags, effects.flags);
  }
}

function safeAvailable(scene, state) {
  try {
    return scene.available(state);
  } catch (error) {
    console.warn(`Scene availability failed for ${scene.id}`, error);
    return false;
  }
}

function makeRepeatableScene(state, character) {
  const slot = getSlotName(state);
  const titles = {
    morning: `Morning tea with ${character.name}`,
    afternoon: `An afternoon with ${character.name}`,
    evening: `Evening company with ${character.name}`
  };

  return {
    id: `repeat_${character.id}`,
    repeatable: true,
    characterId: character.id,
    title: titles[slot],
    location: character.location,
    summary: `Spend casual time with ${character.name}. Small bonds count, but they are slow.`,
    text: () => repeatableText(character, slot),
    choices: [
      {
        id: `repeat_${character.id}_listen`,
        text: 'Listen properly instead of waiting for your turn to talk.',
        meta: '+2 Trust',
        effects: { trust: { [character.id]: 2 } },
        after: `${character.name} notices. Not dramatically. Not all at once. But a small door opens.`
      },
      {
        id: `repeat_${character.id}_help`,
        text: 'Offer practical help with whatever they are doing.',
        meta: '+1 Trust, occasionally the adult thing to do',
        effects: { trust: { [character.id]: 1 } },
        after: `The help is accepted. At Sunset Pines, a useful person is remembered.`
      },
      {
        id: `repeat_${character.id}_flirt`,
        text: 'Let your interest show, gently but unmistakably.',
        meta: 'Requires 15 Trust. +3 Romance, +1 Trust.',
        requirements: s => getTrust(s, character.id) >= 15,
        effects: { trust: { [character.id]: 1 }, romance: { [character.id]: 3 }, flags: { [`playerFlirtedWith${capitalise(character.id)}`]: true } },
        after: `${character.name} does not swoon. Thank God. But the air changes, just a little, because you chose to make it change.`
      }
    ]
  };
}

function repeatableText(character, slot) {
  const openings = {
    morning: `The morning sun hits ${character.location.toLowerCase()} with gentle optimism and disrespectful brightness.`,
    afternoon: `The afternoon stretches lazily across Sunset Pines. Somewhere, someone is arguing with a printer.`,
    evening: `Evening settles over the village. The day becomes softer, which does not stop anyone from having opinions.`
  };

  return `${openings[slot]}\n\nYou find ${character.name} at ${character.location.toLowerCase()}. Nothing dramatic has happened yet. That is sometimes where connection starts.`;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function capitalise(value) {
  return value.slice(0, 1).toUpperCase() + value.slice(1);
}
