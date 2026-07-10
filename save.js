import { SAVE_KEY } from "./state.js";

export function saveGame(state) {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(state));
    return { ok: true };
  } catch (error) {
    console.warn("Save failed", error);
    return { ok: false, error };
  }
}

export function loadGame() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return { ok: false, reason: "empty" };
    return { ok: true, state: JSON.parse(raw) };
  } catch (error) {
    console.warn("Load failed", error);
    return { ok: false, reason: "invalid", error };
  }
}

export function clearSave() {
  try {
    localStorage.removeItem(SAVE_KEY);
    return { ok: true };
  } catch (error) {
    console.warn("Clear save failed", error);
    return { ok: false, error };
  }
}
