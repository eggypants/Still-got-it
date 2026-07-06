# Still Got It — v0.4.2

A friendship life sim set in Summer Hills Retirement Village. 28 days, four weeks,
three time slots a day, ending at the Autumn Concert. Flat-file, no build step,
GitHub Pages friendly.

## What's new in 0.4.2

- Full 28-day / 4-week calendar (previously a 7-day proof route)
- Village schedule split into a recurring WEEKLY_TEMPLATE plus SPECIALS story beats
- Scene variants: scenes deepen with friendship and repeat visits
- Conditional content blocks: the concert scene converges the outcomes of every arc
- Four arcs built and validated: Rhonda (concert route), Bob (reunion), Miranda (garden competition), Pablo (harvest feast)
- The player's own arc: the apartment scenes change across the four weeks
- The concert converges all four arcs; endings reflect each
- Data split into per-character files so arcs can be edited in isolation
- `validate.js`: run `node validate.js` after any edit; it checks all references
  and plays the game six ways before you deploy
- Save version bumped to 0.4.2-catchup — old saves reset on first load
- Added catch-up variants for easy-to-miss memory beats while keeping noticeboard titles neutral
- Added `notMemory` and `weeks` variant conditions
- Added validator coverage for critical memories that only have one scheduled access point
- Added a repeat variant for the duplicated final rehearsal slot

## Files (all in repo root — no folders)

Engine/UI: `index.html`, `style.css`, `state.js`, `save.js`, `main.js`, `engine.js`, `ui.js`
Data: `data-index.js` (merge point), `data-core.js` (calendar, characters, memories, schedule),
`data-generic.js`, `data-rhonda.js`, `data-pablo.js`, `data-miranda.js`, `data-bob.js`,
`data-jean.js`, `data-al.js`, `data-duets.js`, `data-concert.js`
Tooling: `validate.js` (not loaded by the game; safe to upload or omit)

## Uploading from mobile

Upload all files directly into the repository root. Do not upload a containing
folder. Replace files with the same names. GitHub Pages: deploy from branch,
`main`, `/ root`.

## For future editors (human or AI)

Read `HANDOFF.md` before touching anything. Run `node validate.js` after every
edit. Exit code 0 means safe to upload. The game also shows a red banner on load
if any scheduled scene is missing.
