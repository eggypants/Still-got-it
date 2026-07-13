import { createInitialState, SAVE_VERSION } from "./state.js";
import {
  beginActivity,
  chooseSceneOption,
  continueAfterOutcome,
  openTab
} from "./engine.js";
import { clearSave, loadGame as loadSavedGame, saveGame as persistGame } from "./save.js";
import { render } from "./ui.js";

let state = createInitialState();
const app = document.getElementById("app");

const saved = loadSavedGame();
if (saved && saved.version === SAVE_VERSION) {
  state = saved;
}

const actions = {
  openTab(tabName) {
    openTab(state, tabName);
    persistGame(state);
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
    if (loaded.version !== SAVE_VERSION) {
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

const INTRO_TEXT = "Your son drops you off early in the morning. He has to head off straight away to catch his flight home. He'll see you at Christmas, he says. You look at the buildings in front of you: red brick units surround a central brick building. Big windows with cream-painted wooden frames. Concrete paths lined with native shrubs. Down a small hill to your right, a garden plot. In front of you, apartment 7. Your new home at Summer Hills Retirement Village.";

actions.dismissIntro = function () {
  state.introSeen = true;
  persistGame(state);
  update();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function renderIntro() {
  app.innerHTML = "";
  const wrap = document.createElement("div");
  wrap.className = "intro-screen";
  const card = document.createElement("div");
  card.className = "intro-card";
  const title = document.createElement("h1");
  title.className = "intro-title";
  title.textContent = "Still Got It";
  const sub = document.createElement("p");
  sub.className = "intro-sub";
  sub.textContent = "Summer Hills Retirement Village";
  const body = document.createElement("p");
  body.className = "intro-body";
  body.textContent = INTRO_TEXT;
  const btn = document.createElement("button");
  btn.className = "primary-button intro-button";
  btn.textContent = "Move in";
  btn.addEventListener("click", () => actions.dismissIntro());
  card.append(title, sub, body, btn);
  wrap.appendChild(card);
  app.appendChild(wrap);
}

function update() {
  if (!state.introSeen) {
    renderIntro();
    return;
  }
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
  for (const id of ["apartment_morning", "apartment_evening"]) {
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
