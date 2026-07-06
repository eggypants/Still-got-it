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
if (saved && saved.version === "0.2-real-flat") {
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

update();
