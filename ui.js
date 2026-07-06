import { CHARACTERS } from "./data-index.js";
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
  app.innerHTML = "";

  if (state.view === "setup") {
    app.appendChild(renderSetup(state, actions));
    focusMainHeading(app);
    return;
  }

  if (state.view === "ending") {
    app.appendChild(renderEnding(state, actions));
    focusMainHeading(app);
    return;
  }

  app.appendChild(renderGameShell(state, actions));
  focusMainHeading(app);
}

function renderSetup(state, actions) {
  const screen = el("main", "screen setup");

  const card = el("section", "card");
  const inner = el("div", "card-inner");
  card.appendChild(inner);

  inner.appendChild(el("h1", null, "Still Got It"));
  inner.appendChild(el("p", null, "A friendship life sim about moving into Sunset Pines and discovering that the good bit may not be over."));

  const form = el("form", "form-grid");
  form.innerHTML = `
    <div class="field">
      <label for="player-name">Your name</label>
      <input id="player-name" name="name" autocomplete="name" maxlength="40" placeholder="New Resident" />
    </div>
    <div class="field">
      <label for="pronouns">Pronouns</label>
      <select id="pronouns" name="pronouns">
        <option value="they/them">they/them</option>
        <option value="she/her">she/her</option>
        <option value="he/him">he/him</option>
      </select>
    </div>
    <button class="primary-button" type="submit">Move in</button>
  `;

  form.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(form);
    actions.startGame({
      name: data.get("name"),
      pronouns: data.get("pronouns")
    });
  });

  inner.appendChild(form);

  const note = el("p", "small muted", "Your first month at Sunset Pines starts on a Monday.");
  inner.appendChild(note);

  screen.appendChild(card);
  return screen;
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
  const top = el("section", "card");
  const inner = el("div", "card-inner topbar");
  top.appendChild(inner);

  const brand = el("div", "brand");
  brand.appendChild(el("h1", null, "Still Got It"));
  brand.appendChild(el("p", null, "Sunset Pines Retirement Village"));
  inner.appendChild(brand);

  const date = el("div", "date-pill");
  date.appendChild(el("strong", null, `${current.weekday}`));
  date.appendChild(el("span", null, `Week ${current.week} of 4 · ${current.slot}`));
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
  let title = "Sunset Pines";

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
  art.appendChild(el("p", "kicker", kicker));
  art.appendChild(el("h2", null, title));
  return art;
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
  const wrapper = el("div", "scene-card");

  wrapper.appendChild(el("h2", null, scene.title));
  wrapper.appendChild(renderSceneText(scene.content));

  const choices = el("div", "choice-list");
  for (const [index, choice] of scene.choices.entries()) {
    const button = el("button", "choice-button", choice.text);
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
  button.type = "button";
  button.addEventListener("click", actions.continueAfterOutcome);
  wrapper.appendChild(button);
  return wrapper;
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
  art.appendChild(el("h2", null, "Sunset Pines"));
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
