import { characters } from './characters.js';
import {
  choiceAvailable,
  getAvailableActivities,
  getCurrentCrossroadsEvent,
  getRelationship,
  getRomance,
  getSceneById,
  getSlotName,
  getTrust,
  relationshipTier,
  titleCase
} from './engine.js';
import { CROSSROADS_DAY, FINAL_DAY } from './state.js';

export function renderApp(app, state, handlers, activeSceneId = null) {
  if (!state) {
    renderSetup(app, handlers);
    return;
  }

  if (state.phase === 'crossroads') {
    renderCrossroads(app, state, handlers);
    return;
  }

  if (state.phase === 'ending') {
    renderEnding(app, state, handlers);
    return;
  }

  if (activeSceneId) {
    const scene = getSceneById(state, activeSceneId);
    if (scene) {
      renderScene(app, state, scene, handlers);
      return;
    }
  }

  renderHome(app, state, handlers);
}

function renderSetup(app, handlers) {
  app.innerHTML = `
    <main class="setup-panel">
      <p class="brand-kicker">Sunset Pines presents</p>
      <h1>Still Got It</h1>
      <p class="subtle">A tiny replayable dating sim about retirement village romance, specific compliments, and the dangerous eroticism of remembering someone’s tea order.</p>

      <div class="card" style="box-shadow:none; margin-top: 18px;">
        <h2>Move in</h2>
        <p>You have ten days before the Sunset Pines festival. That is enough time for one romance, maybe one close friendship, and absolutely not enough time to understand the printer in the library.</p>
        <form id="setup-form" class="form-grid">
          <label>
            Your name
            <input name="name" maxlength="32" autocomplete="given-name" placeholder="New Resident" />
          </label>
          <label>
            Pronouns
            <select name="pronouns">
              <option value="she">she/her</option>
              <option value="he">he/him</option>
              <option value="they" selected>they/them</option>
            </select>
          </label>
          <button class="btn" type="submit">Start unpacking</button>
        </form>
      </div>

      <p class="footer-note">Prototype build: Rhonda, Pablo, and Miranda routes. More village chaos can be added as data.</p>
    </main>
  `;

  app.querySelector('#setup-form').addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    handlers.start({
      name: data.get('name'),
      pronouns: data.get('pronouns')
    });
  });
}

function renderHome(app, state, handlers) {
  const activities = getAvailableActivities(state);

  app.innerHTML = `
    ${renderTopbar(state)}
    ${state.lastFeedback ? `<div class="feedback">${escapeHtml(state.lastFeedback)}</div>` : ''}
    <div class="grid" style="margin-top:16px;">
      <main class="noticeboard">
        <p class="brand-kicker">Village noticeboard</p>
        <h2>Day ${state.day}, ${titleCase(getSlotName(state))}</h2>
        <p class="subtle">The Crossroads happens on Day ${CROSSROADS_DAY}. Whoever you are closest to then will pull you into their bigger story.</p>
        <ul class="activity-list">
          ${activities.map(activity => renderActivity(activity)).join('')}
        </ul>
      </main>
      <aside>
        ${renderRelationships(state)}
        ${renderRecentLog(state)}
      </aside>
    </div>
  `;

  bindCommonButtons(app, handlers);
  app.querySelectorAll('[data-scene-id]').forEach(button => {
    button.addEventListener('click', () => handlers.openScene(button.dataset.sceneId));
  });
}

function renderScene(app, state, scene, handlers) {
  const choices = scene.choices.filter(choice => choiceAvailable(choice, state));
  const character = scene.characterId ? characters[scene.characterId] : null;

  app.innerHTML = `
    ${renderTopbar(state)}
    <main class="scene-layout" style="margin-top:16px;">
      <section class="card">
        <p class="brand-kicker">${escapeHtml(scene.location || 'Sunset Pines')}</p>
        <h2>${escapeHtml(scene.title)}</h2>
        ${character ? `<div class="tag-row"><span class="tag">${escapeHtml(character.name)}</span><span class="tag">${escapeHtml(relationshipTier(state, character.id))}</span></div>` : ''}
        <p class="story-text">${escapeHtml(readText(scene.text, state))}</p>
      </section>
      <section class="choice-panel">
        <h3>Choose your approach</h3>
        <ul class="choice-list">
          ${choices.map(choice => renderChoice(choice)).join('')}
        </ul>
        <div class="toolbar"><button class="btn secondary" data-back-home>Back to noticeboard</button></div>
      </section>
    </main>
  `;

  bindCommonButtons(app, handlers);
  app.querySelector('[data-back-home]').addEventListener('click', handlers.backHome);
  app.querySelectorAll('[data-choice-id]').forEach(button => {
    button.addEventListener('click', () => handlers.chooseSceneChoice(scene.id, button.dataset.choiceId));
  });
}

function renderCrossroads(app, state, handlers) {
  const event = getCurrentCrossroadsEvent(state);
  const character = event.characterId ? characters[event.characterId] : null;

  app.innerHTML = `
    ${renderTopbar(state)}
    <main class="scene-layout" style="margin-top:16px;">
      <section class="card">
        <p class="brand-kicker">The Crossroads</p>
        <h2>${escapeHtml(event.title)}</h2>
        <p class="subtle">${escapeHtml(event.subtitle)}</p>
        ${character ? `<div class="tag-row"><span class="tag">Closest bond: ${escapeHtml(character.name)}</span><span class="tag">Trust ${getTrust(state, character.id)}</span></div>` : ''}
        <p class="story-text">${escapeHtml(readText(event.intro, state))}</p>
      </section>
      <section class="choice-panel">
        <h3>This one matters</h3>
        <p class="subtle">This will not end the relationship, but it will shape its ceiling.</p>
        <ul class="choice-list">
          ${event.choices.map(choice => renderChoice(choice)).join('')}
        </ul>
      </section>
    </main>
  `;

  bindCommonButtons(app, handlers);
  app.querySelectorAll('[data-choice-id]').forEach(button => {
    const choice = event.choices.find(item => item.id === button.dataset.choiceId);
    button.addEventListener('click', () => handlers.chooseCrossroads(choice.id));
  });
}

function renderEnding(app, state, handlers) {
  const ending = state.ending;

  app.innerHTML = `
    <main class="setup-panel">
      <p class="brand-kicker">Festival night</p>
      <h1>Ending</h1>
      <div class="grid" style="margin-top: 16px;">
        <section class="card">
          <h2>${escapeHtml(ending.romance.title)}</h2>
          <p>${escapeHtml(ending.romance.text)}</p>
        </section>
        <section class="card">
          <h2>${escapeHtml(ending.bestFriend.title)}</h2>
          <p>${escapeHtml(ending.bestFriend.text)}</p>
        </section>
        <section class="card">
          <h2>${escapeHtml(ending.legacy.title)}</h2>
          <p>${escapeHtml(ending.legacy.text)}</p>
        </section>
        <section class="card">
          <h2>Roll credits</h2>
          <p>${escapeHtml(ending.closingLine)}</p>
          <div class="toolbar">
            <button class="btn" data-new-game>Play again</button>
            <button class="btn secondary" data-save>Save ending</button>
          </div>
        </section>
      </div>
    </main>
  `;

  bindCommonButtons(app, handlers);
}

function renderTopbar(state) {
  return `
    <header class="topbar">
      <section class="brand-card">
        <p class="brand-kicker">Still Got It</p>
        <h1>Sunset Pines</h1>
        <p class="subtle">${escapeHtml(state.player.name)} · Day ${state.day}/${FINAL_DAY} · ${titleCase(getSlotName(state))}</p>
        <div class="toolbar">
          <button class="btn secondary" data-save>Save</button>
          <button class="btn secondary" data-load>Load</button>
          <button class="btn ghost" data-new-game>New game</button>
        </div>
      </section>
      <section class="brand-card">
        <h3>Design rule</h3>
        <p class="subtle">Nobody falls for you by default. Build trust, make the first move, and pay attention when people tell you who they are.</p>
      </section>
    </header>
  `;
}

function renderRelationships(state) {
  return `
    <section class="card">
      <h2>Residents</h2>
      <div class="character-grid">
        ${Object.values(characters).map(character => renderCharacterCard(state, character)).join('')}
      </div>
    </section>
  `;
}

function renderCharacterCard(state, character) {
  const rel = getRelationship(state, character.id);
  const trustPercent = Math.round((rel.trust / (rel.maxTrust || 100)) * 100);
  const romancePercent = Math.round(rel.romance);
  const outcome = rel.crossroadsOutcome ? `<span class="tag">Crossroads: ${escapeHtml(rel.crossroadsOutcome)}</span>` : '';

  return `
    <article class="character-card">
      <div class="character-head">
        <div class="portrait ${character.id}">${escapeHtml(character.icon)}</div>
        <div>
          <h3>${escapeHtml(character.name)} <span class="small">b. ${character.born}</span></h3>
          <p class="small">${escapeHtml(character.tagline)}</p>
        </div>
      </div>
      <div class="meter"><span style="width:${trustPercent}%"></span></div>
      <p class="small">Trust ${rel.trust}/${rel.maxTrust} · ${escapeHtml(relationshipTier(state, character.id))}</p>
      <div class="meter romance"><span style="width:${romancePercent}%"></span></div>
      <p class="small">Romance ${rel.romance}/100 ${rel.playerFlirted ? '· signalled' : '· not signalled'}</p>
      <div class="tag-row">${outcome}</div>
    </article>
  `;
}

function renderActivity(activity) {
  const character = activity.characterId ? characters[activity.characterId] : null;
  return `
    <li>
      <button class="activity-card" data-scene-id="${escapeHtml(activity.id)}">
        <span class="activity-title">${escapeHtml(activity.title)}</span>
        <span class="activity-meta">${escapeHtml(activity.location || character?.location || 'Sunset Pines')}</span>
        <span>${escapeHtml(activity.summary || '')}</span>
      </button>
    </li>
  `;
}

function renderChoice(choice) {
  return `
    <li>
      <button class="choice-button" data-choice-id="${escapeHtml(choice.id)}">
        <span class="choice-title">${escapeHtml(choice.text)}</span>
        ${choice.meta ? `<span class="choice-meta">${escapeHtml(choice.meta)}</span>` : ''}
      </button>
    </li>
  `;
}

function renderRecentLog(state) {
  const recent = state.choiceLog.slice(-5).reverse();
  if (!recent.length) {
    return `
      <section class="card" style="margin-top:16px;">
        <h2>Memory</h2>
        <p class="subtle">No choices yet. Suspiciously peaceful.</p>
      </section>
    `;
  }

  return `
    <section class="card" style="margin-top:16px;">
      <h2>Memory</h2>
      <ul class="log-list">
        ${recent.map(entry => `
          <li class="log-item small">
            Day ${entry.day}, ${escapeHtml(entry.slot)} — ${escapeHtml(entry.choiceId.replaceAll('_', ' '))}
          </li>
        `).join('')}
      </ul>
    </section>
  `;
}

function bindCommonButtons(app, handlers) {
  app.querySelectorAll('[data-save]').forEach(button => button.addEventListener('click', handlers.save));
  app.querySelectorAll('[data-load]').forEach(button => button.addEventListener('click', handlers.load));
  app.querySelectorAll('[data-new-game]').forEach(button => button.addEventListener('click', handlers.newGame));
}

function readText(value, state) {
  return typeof value === 'function' ? value(state) : value;
}

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}
