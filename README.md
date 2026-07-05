# Still Got It

A tiny, modular browser dating sim prototype set in Sunset Pines retirement village.

This version includes:

- Name and pronoun selection
- Three residents: Rhonda, Pablo, and Miranda
- Separate Trust and Romance values
- Player-initiated romance only
- A Day 6 Crossroads event determined by the resident you are closest to
- Success/failure outcomes that affect each relationship's maximum potential
- Save/load using browser localStorage
- Multiple ending components: romance, closest friendship, and village legacy

## How to play locally

Open `index.html` in a browser. If your browser blocks ES modules from local files, upload it to GitHub Pages instead.

## How to put it on GitHub Pages

1. Create a new GitHub repository, for example `still-got-it`.
2. Upload everything in this folder, keeping the folder structure exactly the same.
3. Make sure `index.html` is in the repository root.
4. Go to **Settings → Pages**.
5. Under **Build and deployment**, choose:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
6. Save.
7. Wait a minute, then open the GitHub Pages URL.

## Adding a character

Add a new entry in `js/characters.js`, then add scenes in `js/scenes.js`, and eventually a Crossroads event in `js/crossroads.js`.

The engine reads character and scene data rather than hard-coding a route, so the village can grow without rewriting the whole game.

## Design notes

The key design idea is scarcity. A single playthrough should not let the player become close to everyone. Trust grows slowly, romance must be initiated by the player, and the Crossroads event rewards paying attention to each character's deeper emotional problem.


## Mobile flat upload option

If GitHub on mobile will not upload folders, use the flat version of this project. Upload every file from this folder directly into the repo root. Do not upload the containing folder itself.

The flat version has `index.html`, `style.css`, and all `.js` files in the same place, so it does not need `css/` or `js/` folders.
