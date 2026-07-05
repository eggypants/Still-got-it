import { createNewState } from './state.js';
import { applyChoice, finishGame, getCurrentCrossroadsEvent, getSceneById, resolveCrossroadsChoice, triggerCrossroadsIfNeeded } from './engine.js';
import { clearSave, loadGame, saveGame } from './save.js';
import { renderApp } from './ui.js';

const app = document.querySelector('#app');
let state = loadGame();
let activeSceneId = null;

if (state) {
  if (state.phase === 'playing') triggerCrossroadsIfNeeded(state);
  if (state.phase === 'ending' && !state.ending) finishGame(state);
}

const handlers = {
  start(player) {
    state = createNewState(player);
    activeSceneId = null;
    saveGame(state);
    render();
  },

  openScene(sceneId) {
    activeSceneId = sceneId;
    render();
  },

  backHome() {
    activeSceneId = null;
    render();
  },

  chooseSceneChoice(sceneId, choiceId) {
    const scene = getSceneById(state, sceneId);
    const choice = scene?.choices.find(item => item.id === choiceId);

    if (!scene || !choice) {
      state.lastFeedback = 'Something went sideways. The committee has been informed.';
      activeSceneId = null;
      render();
      return;
    }

    applyChoice(state, scene, choice);
    activeSceneId = null;
    saveGame(state);
    render();
  },

  chooseCrossroads(choiceId) {
    const event = getCurrentCrossroadsEvent(state);
    const choice = event.choices.find(item => item.id === choiceId);
    if (!choice) return;

    resolveCrossroadsChoice(state, choice);
    activeSceneId = null;
    saveGame(state);
    render();
  },

  save() {
    if (!state) return;
    saveGame(state);
    window.alert('Saved. Sunset Pines remembers, which is more than can be said for the bridge roster.');
  },

  load() {
    const loaded = loadGame();
    if (!loaded) {
      window.alert('No save found yet.');
      return;
    }
    state = loaded;
    if (state.phase === 'playing') triggerCrossroadsIfNeeded(state);
    if (state.phase === 'ending' && !state.ending) finishGame(state);
    activeSceneId = null;
    render();
  },

  newGame() {
    if (state && !window.confirm('Start a new game and clear the current save?')) return;
    clearSave();
    state = null;
    activeSceneId = null;
    render();
  }
};

function render() {
  renderApp(app, state, handlers, activeSceneId);
}

render();
