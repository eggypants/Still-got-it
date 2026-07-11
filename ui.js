import { CHARACTERS, DAYS } from "./data-index.js";
import {
  buildEnding,
  getCurrentDate,
  getFriendshipLabel,
  getMemoryText,
  getNoticeboardItems,
  getResidentNote,
  resolveScene,
  substituteScene
} from "./engine.js";

export function render(app, state, actions) {
  applySlotClass(app, state);
  app.innerHTML = "";

  if (state.view === "ending") {
    app.appendChild(renderEnding(state, actions));
    focusMainHeading(app);
    return;
  }

  app.appendChild(renderGameShell(state, actions));
  focusMainHeading(app);
  scheduleFlowScroll(app, state);
}

function renderGameShell(state, actions) {
  const screen = el("main", "screen");
  screen.appendChild(renderTopbar(state));
  screen.appendChild(renderTabs(state, actions));

  const stage = el("section", "stage");

  const art = renderArtPanel(state);
  stage.appendChild(art);

  const panel = el("section", "card panel");
  const inner = el("div", "card-inner");
  panel.appendChild(inner);

  if (state.view === "scene") {
    inner.appendChild(renderScene(state, actions));
  } else if (state.view === "outcome") {
    inner.appendChild(renderOutcome(state, actions));
  } else if (state.activeTab === "journal") {
    inner.appendChild(renderJournal(state));
  } else if (state.activeTab === "residents") {
    inner.appendChild(renderResidents(state));
  } else if (state.activeTab === "settings") {
    inner.appendChild(renderSettings(actions));
  } else {
    inner.appendChild(renderNoticeboard(state, actions));
  }

  stage.appendChild(panel);
  screen.appendChild(stage);

  return screen;
}

function renderTopbar(state) {
  const current = getCurrentDate(state);
  const totalSlots = DAYS.length * 2;
  const elapsedSlots = state.dayIndex * 2 + state.slotIndex;
  const progress = totalSlots > 0 ? Math.max(0, Math.min(1, elapsedSlots / totalSlots)) : 0;

  const top = el("section", "card");
  const inner = el("div", "card-inner topbar");
  top.appendChild(inner);

  const brand = el("div", "brand");
  brand.appendChild(el("h1", null, "Still Got It"));
  brand.appendChild(el("p", null, "Summer Hills Retirement Village"));
  inner.appendChild(brand);

  const date = el("div", "date-pill");
  const progressTrack = el("div", "time-progress");
  progressTrack.setAttribute("aria-label", "Progress toward the concert");
  const progressFill = el("div", "time-progress-fill");
  progressFill.style.width = `${progress * 100}%`;
  progressTrack.appendChild(progressFill);
  date.appendChild(progressTrack);
  date.appendChild(el("span", "date-label", `${current.weekday} · ${current.slot}`));
  inner.appendChild(date);

  return top;
}

function renderTabs(state, actions) {
  const tabs = el("nav", "tabs");
  const items = [
    ["noticeboard", "Noticeboard"],
    ["journal", "Journal"],
    ["residents", "Residents"],
    ["settings", "Settings"]
  ];

  for (const [id, label] of items) {
    const button = el("button", `tab-button ${state.activeTab === id && state.view === "noticeboard" ? "active" : ""}`, label);
    button.type = "button";
    button.addEventListener("click", () => actions.openTab(id));
    tabs.appendChild(button);
  }

  return tabs;
}

function renderArtPanel(state) {
  let kicker = "Artwork space";
  let title = "Summer Hills";

  if (state.view === "scene") {
    const scene = substituteScene(resolveScene(state, state.activeSceneId), state);
    const current = getCurrentDate(state);
    kicker = `${current.weekday} ${current.slot}`;
    title = scene.location || "Scene";
  } else if (state.view === "outcome" && state.pendingOutcome) {
    const current = getCurrentDate(state);
    kicker = `${current.weekday} ${current.slot}`;
    title = state.pendingOutcome.location || "Scene";
  } else if (state.activeTab === "journal") {
    kicker = "Journal";
    title = "Things you noticed";
  } else if (state.activeTab === "residents") {
    kicker = "Residents";
    title = "People you know";
  } else if (state.activeTab === "settings") {
    kicker = "Settings";
    title = "Save and reset";
  } else {
    const current = getCurrentDate(state);
    kicker = `${current.weekday} ${current.slot}`;
    title = "Noticeboard";
  }

  const art = el("aside", "art-panel");
  const loc = (state.view === "scene" || state.view === "outcome") ? title : "Noticeboard";
  art.classList.add("loc-" + slugLocation(loc));
  art.appendChild(el("p", "kicker", kicker));
  art.appendChild(el("h2", null, title));
  return art;
}

function slugLocation(name) {
  const map = {
    "Community Lounge": "lounge",
    "Village Café": "cafe",
    "Village Cafe": "cafe",
    "Gardens": "garden",
    "Garden": "garden",
    "Workshop": "workshop",
    "Craft Room": "craft",
    "Library": "library",
    "Cinema Room": "cinema",
    "TV Room": "tvroom",
    "Hall": "hall",
    "Reception": "walking",
    "Foyer": "walking",
    "Your Apartment": "apartment",
    "Noticeboard": "noticeboard"
  };
  return map[name] || "noticeboard";
}

function renderNoticeboard(state, actions) {
  const wrapper = el("div", "noticeboard");
  const current = getCurrentDate(state);
  wrapper.appendChild(el("h2", null, `${current.weekday} ${current.slot}`));
  wrapper.appendChild(el("p", "muted", "Choose where to spend this part of the day. The other notices won’t wait around."));

  const list = el("div", "notice-list");
  const items = getNoticeboardItems(state);

  for (const item of items) {
    const card = el("article", "notice-item");
    card.appendChild(el("h3", null, item.title));
    card.appendChild(el("p", null, `${item.location} · ${item.note}`));
    const button = el("button", "choice-button", "Go");
    button.type = "button";
    button.addEventListener("click", () => actions.beginActivity(item.id));
    card.appendChild(button);
    list.appendChild(card);
  }

  wrapper.appendChild(list);
  return wrapper;
}

function renderScene(state, actions) {
  const scene = substituteScene(resolveScene(state, state.activeSceneId), state);
  const transcript = state.flowTranscript;
  const wrapper = el("div", "scene-card");

  wrapper.appendChild(el("h2", null, transcript?.title || scene.title));
  wrapper.appendChild(renderSceneText(transcript?.content || scene.content));

  const choices = el("div", "choice-list");
  if (transcript) choices.dataset.flowAnchor = "true";
  for (const [index, choice] of scene.choices.entries()) {
    const button = el("button", "choice-button", getChoiceButtonText(scene, choice));
    button.type = "button";
    button.addEventListener("click", () => actions.chooseSceneOption(index));
    choices.appendChild(button);
  }
  wrapper.appendChild(choices);

  return wrapper;
}

function renderOutcome(state, actions) {
  const wrapper = el("div", "scene-card");
  wrapper.appendChild(el("h2", null, state.pendingOutcome.title));
  wrapper.appendChild(renderSceneText(state.pendingOutcome.content));
  const button = el("button", "primary-button", "Continue");
  if (state.pendingOutcome.flow) button.dataset.flowAnchor = "true";
  button.type = "button";
  button.addEventListener("click", actions.continueAfterOutcome);
  wrapper.appendChild(button);
  return wrapper;
}

function getChoiceButtonText(scene, choice) {
  if (scene.choices.length === 1 && !choice.nextSceneId && !/^continue[.!?]?$/i.test(choice.text.trim())) {
    return "Continue";
  }
  return choice.text;
}

function renderSceneText(content) {
  const box = el("div", "scene-text");
  for (const block of content || []) {
    const p = document.createElement("p");
    p.className = block.speaker ? "line-dialogue" : "line-action";
    if (block.speaker) {
      const speaker = el("span", "speaker", block.speaker);
      p.appendChild(speaker);
    }
    p.appendChild(document.createTextNode(block.text));
    box.appendChild(p);
  }
  return box;
}

function renderJournal(state) {
  const wrapper = el("div", "panel");
  wrapper.appendChild(el("h2", null, "Journal"));

  if (!state.memories.length) {
    wrapper.appendChild(el("p", "muted", "Nothing written down yet. Go places. Sit with people. Listen."));
    return wrapper;
  }

  const list = el("div", "journal-list");
  for (const memoryId of state.memories) {
    const item = el("article", "journal-item");
    item.appendChild(el("p", null, getMemoryText(memoryId)));
    list.appendChild(item);
  }
  wrapper.appendChild(list);
  return wrapper;
}

function renderResidents(state) {
  const wrapper = el("div", "panel");
  wrapper.appendChild(el("h2", null, "Residents"));
  wrapper.appendChild(el("p", "muted", "No numbers. Just a sense of where things stand."));

  const list = el("div", "resident-list");
  for (const [id, character] of Object.entries(CHARACTERS)) {
    const item = el("article", "resident-item");
    item.appendChild(el("h3", null, `${character.name} · born ${character.born}`));
    item.appendChild(el("p", null, character.short));
    item.appendChild(el("div", "relationship-word", getFriendshipLabel(state.friendships[id] || 0, id, state)));
    item.appendChild(el("p", "small", getResidentNote(id, state)));
    list.appendChild(item);
  }
  wrapper.appendChild(list);
  return wrapper;
}

function renderSettings(actions) {
  const wrapper = el("div", "panel");
  wrapper.appendChild(el("h2", null, "Settings"));
  wrapper.appendChild(el("p", "muted", "Saves are stored in this browser on this device."));

  const row = el("div", "button-row");
  const save = el("button", "primary-button", "Save game");
  save.type = "button";
  save.addEventListener("click", actions.saveGame);
  row.appendChild(save);

  const load = el("button", "secondary-button", "Load game");
  load.type = "button";
  load.addEventListener("click", actions.loadGame);
  row.appendChild(load);

  const reset = el("button", "secondary-button", "Reset game");
  reset.type = "button";
  reset.addEventListener("click", actions.resetGame);
  row.appendChild(reset);

  wrapper.appendChild(row);
  wrapper.appendChild(el("div", "status-line", "GitHub Pages friendly. Flat files only. No server."));
  return wrapper;
}

function renderEnding(state, actions) {
  const ending = buildEnding(state);
  const screen = el("main", "screen");

  const art = el("aside", "art-panel");
  art.appendChild(el("p", "kicker", "One month later"));
  art.appendChild(el("h2", null, "Summer Hills"));
  screen.appendChild(art);

  const card = el("section", "card");
  const inner = el("div", "card-inner");
  card.appendChild(inner);
  inner.appendChild(el("h2", null, "One month later"));

  const list = el("div", "ending-list");
  for (const line of ending.lines) {
    const item = el("article", "journal-item");
    item.appendChild(el("p", null, line));
    list.appendChild(item);
  }
  inner.appendChild(list);

  const row = el("div", "button-row");
  const restart = el("button", "primary-button", "Start again");
  restart.type = "button";
  restart.addEventListener("click", actions.resetGame);
  row.appendChild(restart);
  inner.appendChild(row);

  screen.appendChild(card);
  return screen;
}

function applySlotClass(app, state) {
  const slotClasses = ["slot-morning", "slot-evening"];
  const current = getCurrentDate(state);
  const slotClass = `slot-${String(current.slot || "").toLowerCase()}`;
  app.classList.remove(...slotClasses);
  document.body.classList.remove(...slotClasses);
  if (slotClasses.includes(slotClass)) {
    app.classList.add(slotClass);
    document.body.classList.add(slotClass);
  }
}


function scheduleFlowScroll(app, state) {
  if (!state.flowTranscript || typeof requestAnimationFrame !== "function") return;
  requestAnimationFrame(() => {
    const anchor = app.querySelector('[data-flow-anchor="true"]');
    if (anchor) anchor.scrollIntoView({ behavior: "smooth", block: "end" });
  });
}

function focusMainHeading(app) {
  const heading = app.querySelector(".scene-card h2, .noticeboard h2, .panel h2, .setup h1, section.card h2, main h1, main h2");
  if (!heading) return;
  heading.setAttribute("tabindex", "-1");
  heading.focus({ preventScroll: true });
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}
