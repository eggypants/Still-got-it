import { characters } from './characters.js';

export const SLOT_NAMES = ['morning', 'afternoon', 'evening'];
export const FINAL_DAY = 10;
export const CROSSROADS_DAY = 6;

const pronounSets = {
  she: {
    label: 'she/her', subject: 'she', object: 'her', possessiveAdjective: 'her', possessivePronoun: 'hers', reflexive: 'herself', be: 'is'
  },
  he: {
    label: 'he/him', subject: 'he', object: 'him', possessiveAdjective: 'his', possessivePronoun: 'his', reflexive: 'himself', be: 'is'
  },
  they: {
    label: 'they/them', subject: 'they', object: 'them', possessiveAdjective: 'their', possessivePronoun: 'theirs', reflexive: 'themself', be: 'are'
  }
};

export function getPronounSet(key = 'they') {
  return pronounSets[key] || pronounSets.they;
}

export function createNewState({ name = 'New Resident', pronouns = 'they' } = {}) {
  const relationships = {};

  for (const character of Object.values(characters)) {
    relationships[character.id] = {
      trust: 0,
      romance: 0,
      playerFlirted: false,
      maxTrust: 100,
      crossroadsOutcome: null
    };
  }

  return {
    version: 1,
    phase: 'playing',
    player: {
      name: name.trim() || 'New Resident',
      pronouns,
      pronounSet: getPronounSet(pronouns)
    },
    day: 1,
    slotIndex: 0,
    relationships,
    flags: {},
    seenScenes: [],
    choiceLog: [],
    crossroads: {
      chosenCharacterId: null,
      eventId: null,
      resolved: false
    },
    ending: null,
    lastFeedback: null
  };
}
