# Still Got It — Design Document v2

Supersedes the handoff brief where they conflict. The brief's tone rules, character
arcs, and writing rules all still apply; this document resolves its structural
contradictions and fixes the 21-day plan.

## Thesis (unchanged)

The things we spend life chasing are not always what actually make us happy — and
you have to show up to life if you want to experience it. Never stated. Always
structural. Nobody changes because the player fixes them; they change because the
player creates a space where they feel safe enough to become the person they
already could have been.

## Resolved structural decisions

**1. Crossroads in week 3, Concert as convergence at the end of week 3.**
Every character's Crossroads event happens during the three-week game, with the
Autumn Concert on the final evening. The concert is not Rhonda's event alone —
it is where the *results* of every arc appear on stage, in concrete objects and
performances. Bob reads the June poem or something safe. Pablo's table carries
his wife's dish or a substitute. Miranda's flowers decorate the hall or don't.
The concert scene (`rhonda_opening_night` in data-rhonda.js) carries conditional
blocks per arc. The ending montage then echoes what the concert showed.

**2. No "featured route" algorithm.**
All Crossroads events occur in the world every playthrough — they are on the
noticeboard, because the village has a life. Closeness gates the *private
pressure point inside* each event, via scene variants. A stranger at the
veterans' bus sees Bob not board. A friend gets the bench scene and a chance to
change it. No hidden selection, no tie-breaks.

**3. Multiple flat files, no folders.**
data.js is dead. Each character owns a `data-<name>.js` file; the schedule and
calendar live in `data-core.js`; everything merges in `data-index.js`. An editor
working on Jean physically cannot corrupt Rhonda.

## The 21-day shape

Week 1 — Arrival. First meetings, low-stakes activities, the village's weekly
rhythm establishes itself. One early bespoke beat per character maximum.
Week 2 — Deepening. Recurring scenes start playing their friendship-band
variants. Key memories become collectable. NPC-duet beats begin. Concert
preparation starts.
Week 3 — Crossroads, consequences, and concert. Each character's belief is
tested in a public event with a private pressure point. Quieter consequence
beats can surface through the floating story queues before the final evening.
The Autumn Concert closes the schedule.

### Crossroads and concert calendar (current 21-day plan)

| Day index | Slot | Event | Character |
|---|---|---|---|
| 8 (Tue) | Morn | Concert notice appears | Rhonda (setup) |
| 14 (Mon) | Aft | Veterans' reunion — the bus at two | Bob ✅ built |
| 15 (Tue) | Aft | Garden competition judging | Miranda ✅ built |
| 15 (Tue) | Eve | Harvest feast | Pablo ✅ built |
| 16 (Wed) | Aft | Fig tree campaign meeting | Jean ✅ built |
| 17 (Thu) | Aft | First rehearsal — her crisis | Rhonda ✅ built |
| 19 (Sat) | Aft | Final rehearsal | Rhonda ✅ built |
| 19 (Sat) | Eve | The night before | Rhonda ✅ built |
| 20 (Sun) | Eve | Autumn Concert | Full cast ✅ built |

Al's pressure point is now carried through the cards and song chain rather than
a separate dance-night special. Slots should stay inside the 21-day schedule and
SHOULD collide with an attractive alternative (opportunity cost is the design).

### Character routines (template anchors)

These are where each character's recurring scene lives — the routine the player
learns by attending, never from the noticeboard. Catch-up variants are allowed
inside these recurring scenes when a critical memory would otherwise be trapped
behind one missable SPECIAL. The noticeboard must stay neutral; the clicked scene
may reveal who is actually there:

- Rhonda: lounge mornings (Mon/Wed/Thu), movie night (Wed eve)
- Pablo: café mornings (Tue/Fri/Sun), café supper evenings
- Miranda: gardens (Tue/Thu aft, Wed/Sat/Sun morn)
- Bob: workshop (Mon/Wed/Fri aft, Sun aft)
- Jean: library (Tue/Thu morn, Sat aft), writing circle (Tue eve)
- Al: cards (Mon/Wed/Fri/Sat eve), lounge gossip (Mon/Thu/Sat)

## Grapevine / gossip system (planned)

Needed but not built yet: a second-hand information layer that tells the player
something is moving somewhere without giving them the answer. It should live
separately from memories in the journal, likely as "Things you've heard".

Rules:
- Grapevine entries can point toward rooms, routines, moods, or timing.
- Grapevine entries must not unlock the best Crossroads choice by themselves.
- First-hand memories remain the pressure-point key.
- Noticeboard items still do not identify residents unless a resident has
  publicly posted under their own name.

Example: "Someone says Bob has been in the workshop with the radio off" is good.
"Bob misses June and needs help going to the reunion" is not.

## Scene budget per character (target for full game)

- 1 first-meeting or early bespoke scene (week 1)
- 1 recurring-scene variant ladder: repeat variant + Friendly variant + Warm/Close
  variant on their template scene (this is the hidden-stat feedback channel)
- 2–3 bespoke deepening scenes (weeks 2–3) — at least one grants the key memory
- 1 Crossroads scene: observer base + pressure-point variant (gated ~Warm, key
  choice gated on the memory)
- 1 post-Crossroads consequence scene (short, if it fits before the concert)
- Concert conditional blocks (2 lines: success/failure)
- Ending lines (2: success/failure) + resident-note ladder in engine.js

Roughly 10–12 authored units per character. Bob's file is the built exemplar of
the full pattern; Rhonda's is the larger, older route being brought into line.

## The player's arc

The player's belief ("the good days may be over") is expressed through the
apartment, not through dialogue. Built: the apartment scenes
gain week-banded variants (`when: { week: n }`) — identical routine, slowly
changing interiority. Week 1: the quiet is a relief. Week 2: the quiet has a
clock in it. Week 3: names drift through the wall and the player knows them now.
Never stated as growth. The hermit ending stays non-judgmental.

## Systems reference (engine v0.4.3)

- Hidden friendship integer per character, floor 0. Bands: 1 Familiar, 2
  Friendly, 5 Warm, 8 Close. Never shown as numbers.
- `variants: [{ when, ...overrides }]` on any scene — first match wins, replaces
  listed fields. Base scene is the no-conditions fallback and must always be
  playable.
- Conditional content blocks `{ when, text }` — dropped when unmet. Outcome
  blocks are filtered AFTER effects apply, so a choice can set a flag its own
  outcome then reflects. Variant/content `when` supports `flag`, `notFlag`,
  `anyFlag`, `memory`, `notMemory`, `seenScene`, `minFriendship`, `week`, and
  `weeks`.
- Choice gates: `requiresMemory`, `requiresFlag`, `requiresNotFlag`,
  `requiresFriendship`.
- Schedule: WEEKLY_TEMPLATE (rhythm) + SPECIALS (story beats; add / replace /
  exclusive).

## Flag naming conventions

- `<char>_<event>_<outcome>` for arc results: `bob_went_reunion`,
  `rhonda_show_failed`
- `saw_<thing>` for witnessed duet moments: `saw_pablo_miranda_tea`
- `<char>_<detail>_seen` for one-shot reveals: `bob_photo_seen`
- Memories are `<char>_<image>`: `bob_june_roses`, `rhonda_hat_laugh` — named
  for the concrete image, because the image is what the player gives back.

Every flag must be SET by a choice and READ by a variant, block, gate, resident
note, or ending line. `node validate.js` errors on read-but-never-set and warns
on set-but-never-read.

### Conversation chains

Some choices may set `nextSceneId`. The outcome is shown first, then Continue opens
the follow-up scene without advancing time. Use this when the player has obviously
been invited to ask the next question. Do not use it to make every exchange long;
most scenes should still resolve in one choice.

### Ordinary-day story beats

Recurring activities must not feel like dead filler just because the player came
on the “wrong” day. First and second visits to a resident's home activity should
progress that resident's pattern through variants/catch-ups. Exact calendar
specials remain useful for big public moments, but ordinary recurring activities
must be allowed to carry emotional progress.
