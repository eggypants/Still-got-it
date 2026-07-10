export const SAVE_VERSION = "0.4.3-flow";
export const SAVE_KEY = "still-got-it-v043-summer-hills";

export function createInitialState() {
  return {
    version: SAVE_VERSION,
    view: "setup",
    activeTab: "noticeboard",
    overlayTab: null,
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
    seenVariants: [],
    log: []
  };
}

export function normalizeState(saved) {
  const initial = createInitialState();
  const source = saved && typeof saved === "object" ? saved : {};
  const state = { ...initial, ...source, version: SAVE_VERSION };

  state.player = {
    ...initial.player,
    ...(source.player && typeof source.player === "object" ? source.player : {})
  };

  state.friendships = { ...initial.friendships };
  if (source.friendships && typeof source.friendships === "object") {
    for (const id of Object.keys(initial.friendships)) {
      const value = Number(source.friendships[id]);
      state.friendships[id] = Number.isFinite(value) ? value : initial.friendships[id];
    }
  }

  state.flags = source.flags && typeof source.flags === "object" ? { ...source.flags } : {};
  state.seenScenes = Array.isArray(source.seenScenes) ? [...source.seenScenes] : [];
  state.seenVariants = Array.isArray(source.seenVariants) ? [...source.seenVariants] : [];
  state.memories = Array.isArray(source.memories) ? [...source.memories] : [];
  state.log = Array.isArray(source.log) ? [...source.log] : [];

  if (!Number.isInteger(state.dayIndex)) state.dayIndex = initial.dayIndex;
  if (!Number.isInteger(state.slotIndex)) state.slotIndex = initial.slotIndex;

  const views = new Set(["setup", "noticeboard", "scene", "outcome", "ending"]);
  if (!views.has(state.view)) state.view = "noticeboard";

  const tabs = new Set(["noticeboard", "journal", "residents", "settings"]);
  if (!tabs.has(state.activeTab)) state.activeTab = "noticeboard";

  const overlayTabs = new Set(["journal", "residents", "settings"]);
  if (!overlayTabs.has(state.overlayTab)) state.overlayTab = null;

  if (!state.pendingOutcome || typeof state.pendingOutcome !== "object") {
    state.pendingOutcome = null;
  }

  return state;
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
