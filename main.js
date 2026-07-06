import { createInitialState } from "./state.js";
import {
  beginActivity,
  chooseSceneOption,
  continueAfterOutcome,
  openTab,
  startGame
} from "./engine.js";
import { clearSave, loadGame as loadSavedGame, saveGame as persistGame } from "./save.js";
import { render } from "./ui.js";

let state = createInitialState();
const app = document.getElementById("app");

const saved = loadSavedGame();
if (saved && saved.version === "0.3-flat") {
  state = saved;
}

const actions = {
  startGame(player) {
    startGame(state, player);
    persistGame(state);
    update();
  },

  openTab(tabName) {
    openTab(state, tabName);
    update();
  },

  beginActivity(activityId) {
    beginActivity(state, activityId);
    update();
    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  chooseSceneOption(index) {
    chooseSceneOption(state, index);
    persistGame(state);
    update();
    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  continueAfterOutcome() {
    continueAfterOutcome(state);
    persistGame(state);
    update();
    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  saveGame() {
    persistGame(state);
    alert("Saved.");
  },

  loadGame() {
    const loaded = loadSavedGame();
    if (!loaded) {
      alert("No saved game found in this browser.");
      return;
    }
    if (loaded.version !== "0.3-flat") {
      alert("That save is from an older version and cannot be loaded. Start a new month instead.");
      return;
    }
    state = loaded;
    update();
  },

  resetGame() {
    const yes = confirm("Reset this playthrough? This clears the local save in this browser.");
    if (!yes) return;
    clearSave();
    state = createInitialState();
    update();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

function update() {
  render(app, state, actions);
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
