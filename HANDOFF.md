# Still Got It — Successor Handoff

You are inheriting a working, validated build. Your job is to extend it without
breaking it. Read DESIGN.md for structure and WRITING-KITS.md before writing any
character. This file is the operating manual.

## The prime directives

1. **Run `node validate.js` after every edit.** Exit code 0 or you do not hand
   files back. It checks every reference and plays the game six ways. If you
   cannot run node, say so explicitly and flag the delivery as unvalidated.
2. **Edit one data file per task.** The files are split so you can hold your
   whole working set in view. Never rewrite engine.js, ui.js, state.js, save.js,
   or main.js unless the task explicitly says so.
3. **Scoped changes only.** Do not refactor, rename, "clean up", or improve
   adjacent code or prose. If a joke works, it is load-bearing.
4. **The noticeboard never names or identifies residents.** Activities, rooms,
   objects, atmosphere. This is a core mechanic, not a style preference.
5. **Never show friendship numbers to the player.** Bands and prose notes only.
6. **No moral statements, anywhere.** If a line explains what a scene meant,
   delete the line.

## Do-not-touch list

- state.js structure, SAVE_KEY, save version string (unless a task plans a bump)
- Friendship thresholds and the Math.max(0, …) floor
- The WEEKLY_TEMPLATE rhythm (SPECIALS is where story beats go)
- Flat-file root layout; no folders; no renamed files
- Existing scenes outside the file your task names

## How the pieces fit (60-second engine tour)

- `data-core.js` — calendar (28 days × 3 slots), CHARACTERS, MEMORIES,
  WEEKLY_TEMPLATE (recurring activities keyed "Weekday-slot"), SPECIALS (story
  beats keyed "dayIndex-slot"; items can `replaces:` a template id; a slot can
  be `exclusive`).
- `data-<name>.js` — scene objects owned by one character. Merged in
  `data-index.js`; id collisions are validator errors.
- Scenes: `{ title, location, art, content: [blocks], choices: [...],
  variants: [...] }`. Blocks are `{ text }` or `{ speaker, text }`, optionally
  `{ when }`. Variants are `{ when, ...overrides }` — first match replaces the
  base's overridden fields. The base must stand alone: it is what strangers see.
- Choices: `{ text, outcome: [blocks], effects: { friendship, flags, memories },
  requiresMemory / requiresFlag / requiresNotFlag / requiresFriendship }`.
  Gated choices simply do not appear when unmet — the player never sees a lock.
- Outcome blocks are condition-filtered AFTER effects apply.
- Player-name/pronoun tokens in any text: `{name} {they} {them} {their}
  {themself} {are} {have}`.

## The arc pattern (copy Bob)

`data-bob.js` is the exemplar. Every arc follows its shape:

1. Recurring template scene owned by the character (their routine).
2. A `seenScene` repeat variant so revisits don't replay verbatim.
3. A friendship-banded variant that reveals the key memory as a concrete image
   (the June photograph). Grant the memory on EVERY choice in that variant —
   witnessing is the gate, not choice roulette.
4. A week-3 Crossroads SPECIAL: base scene = what a stranger observes (their
   belief winning quietly); variant gated ~`minFriendship: 5` = the private
   pressure point. The success choice is gated on the memory and consists of the
   player giving the character's own words back. Failure choices are kind —
   reassurance and easy outs, the things friends say that change nothing.
5. Success/failure flags → conditional blocks in the concert scene
   (data-rhonda.js), ending lines (engine.js buildEnding), and a resident-note
   ladder (engine.js getResidentNote).

## Scene-writing prompt template (paste this to your writing model)

> You are writing ONE scene for Still Got It, a warm, dry friendship life sim in
> an Australian retirement village. Read the attached character kit section
> first. Output a single JS object literal matching the schema in HANDOFF.md,
> and nothing else — no commentary, no markdown fences.
>
> Scene spec: [id, calendar slot, who is present, what happens, which variant of
> which scene, what memory/flags/friendship it grants]
>
> Hard rules: narration is plain and short; the character carries all wit in
> dialogue; emotional lines get PLAINER, not fancier; objects carry meaning; no
> narrator explanations of feelings; no "Beat."; no moral statements; choices say
> what the player says or does (quoted dialogue preferred), never what the
> choice achieves; 8–16 content blocks; 2–4 choices; match the exact voice of
> the two exemplar scenes provided.
>
> Exemplars: [paste the character's existing best scene + one Bob scene]

Then: paste the returned object into the character's file, run the validator,
and read the scene aloud. If any line could appear in any AI-written story, cut
or replace it.

## Deployment (unchanged)

Upload changed files to repo root on GitHub mobile, replace same-named files,
Pages deploys from main. Deploys can queue or transiently fail — retry via a
trivial commit. Old saves reset when the save version string changes; otherwise
players resume mid-game, so content edits to already-seen scenes may not be
visible to them until Reset.

## Known open work (priority order)

Built and validated: Rhonda route, Bob arc, Miranda arc, Pablo arc, player-arc
apartment week variants, concert convergence for all four, and catch-up variants
for the current critical memories. Remaining:

1. Jean arc (fig tree / spoken-word piece) — day 17 aft. Follow the Bob/Miranda/Pablo pattern
   exactly: recurring variant ladder (library/writing circle), key memory
   (jean_festival_days, see kit), Crossroads with observer base + Warm-gated
   pressure point, concert pair in data-concert.js (insert after Pablo's pair
   in ALL THREE branches), ending lines + resident notes in engine.js, flag
   names to the validator engine-read list, and a simulated run in validate.js.
2. Al arc (dance night) — day 19 eve. Same checklist.
3. Duets: Jean+Al and Rhonda+Bob beats (data-duets.js)
4. Grapevine system: separate journal section for second-hand hints. It should
   point toward routines/places, never unlock pressure-point choices by itself.
5. Week-4 consequence scenes for every Crossroads (short; kits have specs for
   Bob and suggestions for others)
6. Rhonda week-2 gap: one small bespoke scene (kit has the spec)
7. Concert scene texture: with 6 arcs converging, re-read the full concert in
   each branch for rhythm — the conditional blocks must read as one room, not
   a checklist
8. Art: the art panel is a placeholder gradient; real art slots in via the
   existing `art` field when it exists
