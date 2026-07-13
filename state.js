export const SAVE_VERSION = "0.4.3-flow";
export const SAVE_KEY = "still-got-it-v043-summer-hills";

export function createInitialState() {
  return {
    version: SAVE_VERSION,
    view: "noticeboard",
    activeTab: "noticeboard",
    player: {
      name: "New Resident"
    },
    introSeen: false,
    dayIndex: 0,
    slotIndex: 0,
    activeSceneId: null,
    pendingOutcome: null,
    flowTranscript: null,
    lockedVariant: null,
    activityCommitted: false,
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

