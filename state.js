export const SAVE_VERSION = "0.4.2-catchup";
export const SAVE_KEY = "still-got-it-v042-summer-hills";

export function createInitialState() {
  return {
    version: SAVE_VERSION,
    view: "setup",
    activeTab: "noticeboard",
    player: {
      name: "",
      pronouns: "they/them"
    },
    dayIndex: 0,
    slotIndex: 0,
    activeSceneId: null,
    pendingOutcome: null,
    friendships: {
      rhonda: 0,
      pablo: 0,
      miranda: 0,
      bob: 0,
      jean: 0,
      al: 0
    },
    flags: {},
    memories: [],
    seenScenes: [],
    log: []
  };
}

export function cloneState(state) {
  return structuredClone(state);
}

export function getPronouns(pronounChoice) {
  const table = {
    "she/her": { subject: "she", object: "her", possessive: "her", reflexive: "herself", be: "is", have: "has" },
    "he/him": { subject: "he", object: "him", possessive: "his", reflexive: "himself", be: "is", have: "has" },
    "they/them": { subject: "they", object: "them", possessive: "their", reflexive: "themself", be: "are", have: "have" }
  };

  return table[pronounChoice] || table["they/them"];
}
