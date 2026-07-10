import { createInitialState, normalizeState, SAVE_VERSION } from "./state.js";
import {
  beginActivity,
  chooseSceneOption,
  closeOverlay,
  continueAfterOutcome,
  openTab,
  recoverLoadedState,
  startGame
} from "./engine.js";
import { clearSave, loadGame as loadSavedGame, saveGame as persistGame } from "./save.js";
import { render } from "./ui.js";

let state = createInitialState();
let systemWarning = "";
const app = document.getElementById("app");

const saved = loadSavedGame();
applyLoadedGame(saved, { automatic: true });

const actions = {
  startGame(player) {
    startGame(state, player);
    persistCurrentGame();
    update();
  },

  openTab(tabName) {
    openTab(state, tabName);
    update();
  },

  closeOverlay() {
    closeOverlay(state);
    update();
  },

  dismissWarning() {
    systemWarning = "";
    update();
  },

  beginActivity(activityId) {
    beginActivity(state, activityId);
    update();
    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  chooseSceneOption(index) {
    chooseSceneOption(state, index);
    persistCurrentGame();
    update();
    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  continueAfterOutcome() {
    continueAfterOutcome(state);
    persistCurrentGame();
    update();
    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  saveGame() {
    if (persistCurrentGame()) {
      alert("Saved.");
    } else {
      update();
    }
  },

  loadGame() {
    const loaded = loadSavedGame();
    if (!loaded.ok && loaded.reason === "empty") {
      alert("No saved game found in this browser.");
      return;
    }
    applyLoadedGame(loaded);
    update();
  },

  resetGame() {
    const yes = confirm("Reset this playthrough? This clears the local save in this browser.");
    if (!yes) return;
    clearSave();
    state = createInitialState();
    systemWarning = "";
    update();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

function update() {
  render(app, { ...state, systemWarning }, actions);
}

function persistCurrentGame() {
  const result = persistGame(state);
  if (!result.ok) {
    systemWarning = "Saving failed in this browser. You can keep playing, but progress may not persist.";
    return false;
  }
  if (systemWarning.startsWith("Saving failed")) systemWarning = "";
  return true;
}

function applyLoadedGame(result, options = {}) {
  if (!result.ok) {
    if (result.reason === "empty") return;
    state = recoverLoadedState(normalizeState(null), { forceNoticeboard: true });
    systemWarning = "That save could not be read, so play has been returned to the noticeboard.";
    return;
  }

  const loaded = result.state && typeof result.state === "object" ? result.state : null;
  const outdated = !loaded || loaded.version !== SAVE_VERSION;
  const previousView = loaded?.view;
  const previousSceneId = loaded?.activeSceneId;
  state = recoverLoadedState(normalizeState(loaded), { forceNoticeboard: outdated });

  if (outdated) {
    systemWarning = "That save was from an older build, so play has been returned to the noticeboard.";
  } else if ((previousView === "scene" || previousView === "outcome") && state.view === "noticeboard" && previousSceneId) {
    systemWarning = "That save pointed to a scene that is no longer available, so play has been returned to the noticeboard.";
  } else if (!options.automatic) {
    systemWarning = "";
  }
}

// Integrity check: every scheduled sceneId must exist. Runs once on load.
// If anything is missing, a visible banner appears — no dev tools needed.
// The deeper checks live in validate.js (run with: node validate.js).
import("./data-index.js").then(({ DAYS, TIME_SLOTS, WEEKLY_TEMPLATE, SPECIALS, SCENES }) => {
  const missing = new Set();
  for (const items of Object.values(WEEKLY_TEMPLATE)) {
    for (const item of items) if (!SCENES[item.sceneId]) missing.add(item.sceneId);
  }
  for (const special of Object.values(SPECIALS)) {
    for (const item of special.items) if (!SCENES[item.sceneId]) missing.add(item.sceneId);
  }
  for (const id of ["apartment_morning", "apartment_afternoon", "apartment_evening"]) {
    if (!SCENES[id]) missing.add(id);
  }
  if (missing.size) {
    const banner = document.createElement("div");
    banner.style.cssText = "background:#b3261e;color:#fff;padding:10px 14px;font-size:14px;border-radius:12px;margin:8px";
    banner.textContent = "Data problem — missing scenes: " + [...missing].join(", ");
    document.body.prepend(banner);
  }
});

update();
