// Single import point for all game data. The engine imports ONLY this file.
// When adding a character arc, create data-<name>.js exporting <NAME>_SCENES
// (and optionally merge additional MEMORIES below), then add it here.
// Scene id collisions are a bug — the validator checks for them.

export { TIME_SLOTS, DAYS, CHARACTERS, MEMORIES, WEEKLY_TEMPLATE, SPECIALS } from "./data-core.js";
export { STORY_QUEUES } from "./data-stories.js";

import { GENERIC_SCENES } from "./data-generic.js";
import { RHONDA_SCENES } from "./data-rhonda.js";
import { PABLO_SCENES } from "./data-pablo.js";
import { MIRANDA_SCENES } from "./data-miranda.js";
import { BOB_SCENES } from "./data-bob.js";
import { JEAN_SCENES } from "./data-jean.js";
import { AL_SCENES } from "./data-al.js";
import { DUET_SCENES } from "./data-duets.js";
import { CONCERT_SCENES } from "./data-concert.js";
import { NEW_SCENES } from "./data-newscenes.js";

export const SCENE_SOURCES = {
  "data-generic.js": GENERIC_SCENES,
  "data-rhonda.js": RHONDA_SCENES,
  "data-pablo.js": PABLO_SCENES,
  "data-miranda.js": MIRANDA_SCENES,
  "data-bob.js": BOB_SCENES,
  "data-jean.js": JEAN_SCENES,
  "data-al.js": AL_SCENES,
  "data-duets.js": DUET_SCENES,
  "data-concert.js": CONCERT_SCENES,
  "data-newscenes.js": NEW_SCENES
};

export const SCENES = {
  ...GENERIC_SCENES,
  ...RHONDA_SCENES,
  ...PABLO_SCENES,
  ...MIRANDA_SCENES,
  ...BOB_SCENES,
  ...JEAN_SCENES,
  ...AL_SCENES,
  ...DUET_SCENES,
  ...CONCERT_SCENES,
  ...NEW_SCENES
};
