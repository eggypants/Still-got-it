// Core data: calendar, characters, memories, and the village schedule.
// The schedule has two layers:
//   WEEKLY_TEMPLATE — recurring activities keyed "Weekday-slotIndex". The village's rhythm.
//   SPECIALS       — story beats keyed "dayIndex-slotIndex". Can add to, replace, or
//                    exclusively own a slot. This is where arcs live on the calendar.
// Noticeboard notes must never identify a resident. Activities, objects, atmosphere only.

export const TIME_SLOTS = ["Morning", "Evening"];

const WEEKDAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export const DAYS = Array.from({ length: 28 }, (_, i) => ({
  week: Math.floor(i / 7) + 1,
  weekday: WEEKDAYS[i % 7]
}));

export const CHARACTERS = {
  rhonda: {
    name: "Rhonda",
    born: 1944,
    short: "Silk scarf, pearl earrings, theatre stories, trouble.",
    defaultNote: "You haven’t really spoken yet."
  },
  pablo: {
    name: "Pablo",
    born: 1950,
    short: "Former restaurateur. Warm, charming, and very serious about feeding people.",
    defaultNote: "You know him by sight."
  },
  miranda: {
    name: "Miranda",
    born: 1943,
    short: "Practical, sharp, hard to impress, kinder than she looks.",
    defaultNote: "She gives nothing away."
  },
  bob: {
    name: "Bob",
    born: 1940,
    short: "Calm, traditional, shy in unexpected places.",
    defaultNote: "He nods when people pass."
  },
  jean: {
    name: "Jean",
    born: 1947,
    short: "Retired librarian, freelance writer, old organiser, still impossible to pin down.",
    defaultNote: "She seems to know everyone."
  },
  al: {
    name: "Al",
    born: 1947,
    short: "Ladies’ man, old band stories, sharper than he lets on.",
    defaultNote: "He has already winked at someone today."
  }
};

export const MEMORIES = {
  "rhonda_hat_laugh": "A terrible play called Bishops and Bombshells. Rhonda came on in the second act, insulted a priest, lost her hat, left. Every night, when the hat went, the room lost it. The best role she ever had.",
  "rhonda_children_film": "All three of Rhonda’s children work in film - London, Toronto, Los Angeles. When her own roles dried up, she thought: the door is still open. Just not for me.",
  "rhonda_miss_performing": "Rhonda misses performing, but not the way people think. Twenty-seven people in a tiny theatre, a rich lady with a poodle, her friend Steve as the poodle - and the best laugh she ever got.",
  "pablo_miranda_tea": "Pablo had Miranda’s tea ready before she asked. Strong, no sugar.",
  "miranda_accepts_help": "Miranda let Pablo move the seedlings. She inspected every leaf afterwards and said “acceptable” - which, from Miranda, is applause.",
  "bob_june_roses": "Two photographs inside the lid of Bob’s toolbox: his section in Vietnam, and his wife June, in front of the roses she grew from cuttings.",
  "miranda_good_tablecloth": "One good tablecloth, kept mended for years in a house with six siblings. “You can be poor, and you can look poor,” Miranda says. “Only one of those is beyond your control.”",
  "pablo_carmen_rice": "Carmen never measured. She tasted, frowned, added a little more. Her recipes were never the same twice, and never once wrong. Pablo made her write the recipe down because he knew he would want it when she was gone. He hasn’t cooked it since.",
  "jean_festival_days": "Three hot days in 1971. Young and free in a yellow scarf, Jean met the tambourine player, and soon they had Rae on the way. He was a lovely man, but he couldn't stay sober and Jean had to let him go. “The hardest thing I’d ever done. But once I did, our new life began.”",
  "als_band": "Al’s band: Darren on guitar, who’d solo for seven minutes if you let him. Mike on drums, last seen joining an outback cult. And Kev - Al’s best mate, never drank a drop, wildest of the four.",
  "al_love": "You asked Al if he’d ever been in love. “A few times. Not many.” He chose money and travel over a wife and kids, then picked up the guitar and changed the subject with a song."
};

// ---------------------------------------------------------------------------
// WEEKLY TEMPLATE
// Recurring village activities. `weeks` limits an entry to certain weeks; omit for all.
// ---------------------------------------------------------------------------

export const WEEKLY_TEMPLATE = {
  "Monday-0": [
    { id: "tpl-lounge-am", title: "Coffee in the lounge", location: "Community Lounge", note: "Newspapers, coffee, and opinions about both.", sceneId: "rhonda_lounge_short" },
    { id: "tpl-walk", title: "Walking group", location: "Reception", note: "A slow loop around the block, weather permitting.", sceneId: "generic_walking" }
  ],
  "Monday-1": [
    { id: "tpl-workshop", title: "Workshop hours", location: "Workshop", note: "Tools out, sawdust down, and a queue of small repairs.", sceneId: "generic_workshop_bob" },
    { id: "tpl-cards", title: "Cards in the lounge", location: "Community Lounge", note: "Low stakes, old grudges, and a deck of cards that has seen things.", sceneId: "generic_cards_al" }
  ],

  "Tuesday-0": [
    { id: "tpl-cafe-am", title: "Morning tea", location: "Village Café", note: "Fresh scones. At least three people have opinions.", sceneId: "generic_cafe_pablo" },
    { id: "tpl-library", title: "Library hour", location: "Library", note: "Quiet reading, returned books, and a newspaper folded with disapproval.", sceneId: "generic_library_jean" }
  ],
  "Tuesday-1": [
    { id: "tpl-garden-pm", title: "Garden volunteers", location: "Gardens", note: "Bring gloves, or borrow the ones with suspicious stains.", sceneId: "generic_garden_miranda" },
      { id: "tpl-cafe-supper", title: "Café supper", location: "Village Café", note: "Soup, bread, and the last of the light.", sceneId: "generic_cafe_supper" },
      { id: "tpl-lounge-social", title: "Evening in the lounge", location: "Community Lounge", note: "Someone has put a record on.", sceneId: "generic_lounge_social" }
  ],

  "Wednesday-0": [
    { id: "tpl-garden-am", title: "Garden volunteers", location: "Gardens", note: "Quiet soil, magpies, and leaves under inspection.", sceneId: "generic_garden_miranda" },
    { id: "tpl-lounge-am", title: "Coffee in the lounge", location: "Community Lounge", note: "Newspapers, coffee, and opinions about both.", sceneId: "rhonda_lounge_short" }
  ],
  "Wednesday-1": [
    { id: "tpl-workshop", title: "Workshop hours", location: "Workshop", note: "Tools out, sawdust down, and a queue of small repairs.", sceneId: "generic_workshop_bob" },
    { id: "tpl-movie", title: "Movie night", location: "Cinema Room", note: "Black-and-white comedy. The good seats go early.", sceneId: "generic_movie" },
      { id: "tpl-lounge-social", title: "Evening in the lounge", location: "Community Lounge", note: "Someone has put a record on.", sceneId: "generic_lounge_social" }
  ],

  "Thursday-0": [
    { id: "tpl-lounge-am", title: "Coffee in the lounge", location: "Community Lounge", note: "Newspapers, coffee, and opinions about both.", sceneId: "rhonda_lounge_short" },
    { id: "tpl-library", title: "Library hour", location: "Library", note: "Returned books, missing bookmarks, and a notice no one remembers approving.", sceneId: "generic_library_jean" }
  ],
  "Thursday-1": [
    { id: "tpl-tv", title: "Television room", location: "TV Room", note: "A quiz show is on. Everyone knows better than the contestants.", sceneId: "generic_tv_room" },
      { id: "tpl-cafe-supper", title: "Café supper", location: "Village Café", note: "Soup, bread, and the last of the light.", sceneId: "generic_cafe_supper" },
      { id: "tpl-carl", title: "A light at Reception", location: "Foyer", note: "The desk lamp is still on, long after hours.", sceneId: "generic_reception_carl", once: true, when: { week: 4 } }
  ],

  "Friday-0": [
    { id: "tpl-walk", title: "Walking group", location: "Reception", note: "A slow loop around the block, weather permitting.", sceneId: "generic_walking" },
    { id: "tpl-cafe-am", title: "Morning tea", location: "Village Café", note: "Fresh scones. At least three people have opinions.", sceneId: "generic_cafe_pablo" }
  ],
  "Friday-1": [
    { id: "tpl-workshop", title: "Workshop hours", location: "Workshop", note: "Tools out, sawdust down, and a queue of small repairs.", sceneId: "generic_workshop_bob" },
    { id: "tpl-cards", title: "Cards in the lounge", location: "Community Lounge", note: "Low stakes, old grudges, and a deck of cards that has seen things.", sceneId: "generic_cards_al" }
  ],

  "Saturday-0": [
    { id: "tpl-garden-am", title: "Garden volunteers", location: "Gardens", note: "Quiet soil, magpies, and leaves under inspection.", sceneId: "generic_garden_miranda" },
      { id: "tpl-walk-sat", title: "Walking group", location: "Reception", note: "A slow loop around the block, weather permitting.", sceneId: "generic_walking" }
  ],
  "Saturday-1": [
    { id: "tpl-library", title: "Library hour", location: "Library", note: "Quiet reading, returned books, and a newspaper folded with disapproval.", sceneId: "generic_library_jean" },
    { id: "tpl-cards", title: "Cards in the lounge", location: "Community Lounge", note: "Bad shuffling, worse bluffing, and one person who is lying about luck.", sceneId: "generic_cards_al" }
  ],

  "Sunday-0": [
    { id: "tpl-cafe-am", title: "Breakfast in the café", location: "Village Café", note: "Toast, tea, and the slow version of the morning.", sceneId: "generic_cafe_pablo" },
    { id: "tpl-garden-am", title: "Morning in the garden", location: "Gardens", note: "Quiet soil, magpies, and leaves under inspection.", sceneId: "generic_garden_miranda" }
  ],
  "Sunday-1": [
    { id: "tpl-workshop", title: "Workshop hours", location: "Workshop", note: "Tools out, sawdust down, and a queue of small repairs.", sceneId: "generic_workshop_bob" },
      { id: "tpl-cafe-supper", title: "Café supper", location: "Village Café", note: "Soup, bread, and the last of the light.", sceneId: "generic_cafe_supper" },
      { id: "tpl-lounge-social", title: "Evening in the lounge", location: "Community Lounge", note: "Someone has put a record on.", sceneId: "generic_lounge_social" }
  ]
};

// ---------------------------------------------------------------------------
// SPECIALS — story beats on the 28-day calendar. Key: "dayIndex-slotIndex".
//   { items: [...] }                    → items are ADDED to the template slot.
//   items with replaces: "tpl-id"       → that template entry is removed first.
//   { exclusive: true, items: [...] }   → the slot shows ONLY these items.
// Day index: 0–6 week 1, 7–13 week 2, 14–20 week 3, 21–27 week 4. Day 27 is the concert.
// ---------------------------------------------------------------------------

export const SPECIALS = {
  "8-1": {
    items: [
      { id: "sp-jean-al-1", title: "Writing circle", location: "Library", note: "Notebooks, pens, and biscuits.", sceneId: "jean_al_heckle_1" }
    ]
  },
  "11-1": {
    items: [
      { id: "sp-jean-al-2", replaces: "tpl-cards", title: "Cards in the lounge", location: "Community Lounge", note: "A request list sits on the low table.", sceneId: "jean_al_heckle_2" }
    ]
  },
  "13-1": {
    items: [
      { id: "sp-jean-al-3", title: "Folded chairs", location: "Hall", note: "Folding chairs, loose cables, and a water jug.", sceneId: "jean_al_heckle_3" }
    ]
  },
  "14-0": {
    items: [
      { id: "sp-reunion", title: "Veterans’ reunion", location: "Reception", note: "A bus leaves at ten. Pressed shirts optional but likely.", sceneId: "bob_reunion" }
    ]
  },
  "15-0": {
    items: [
      { id: "sp-garden-comp", title: "Garden competition — judging day", location: "Gardens", note: "Regional judges arrive at ten. The paths have never been this swept.", sceneId: "miranda_competition" }
    ]
  },
  "15-1": {
    items: [
      { id: "sp-harvest-feast", replaces: "tpl-cafe-supper", title: "Harvest feast", location: "Village Café", note: "The tables are pushed together. Whatever is in those ovens, there is a lot of it.", sceneId: "pablo_feast" }
    ]
  },
  "16-0": {
    items: [
      { id: "sp-rhonda-bob-1", title: "Reading practice", location: "Hall", note: "A lectern sits in a quiet corner.", sceneId: "rhonda_bob_coaching_1" }
    ]
  },
  "16-1": {
    items: [
      { id: "sp-figtree", title: "Fig tree campaign meeting", location: "Gardens", note: "A council notice is tied to the old fig tree with orange tape.", sceneId: "jean_figtree" },
      { id: "sp-pablo-miranda-gift", title: "Morning tea", location: "Village Café", note: "A small parcel waits by the counter.", sceneId: "pablo_miranda_gift" }
    ]
  },
  "17-1": {
    items: [
      { id: "sp-rehearsal", title: "First rehearsal", location: "Hall", note: "The hall is busy. Not organised. Busy.", sceneId: "rhonda_rehearsal" }
    ]
  },
  "18-1": {
    items: [
      { id: "sp-rhonda-bob-2", title: "Quiet rehearsal", location: "Hall", note: "A lectern faces the back wall.", sceneId: "rhonda_bob_coaching_2" }
    ]
  },
  "26-0": {
    items: [
      { id: "sp-final-rehearsal", title: "Final rehearsal", location: "Hall", note: "Chairs, cables, one microphone, and more opinions than required.", sceneId: "rhonda_final_rehearsal" }
    ]
  },
  "26-1": {
    items: [
      { id: "sp-night-before", title: "The night before", location: "Hall", note: "The hall is empty. The chairs face the stage.", sceneId: "rhonda_night_before" }
    ]
  },
  "27-0": {
    exclusive: true,
    items: [
      { id: "sp-pre-show-breakfast", title: "Breakfast", location: "Village Café", note: "The concert is tonight. Everyone has an opinion.", sceneId: "generic_pre_show_breakfast" },
      { id: "sp-hall-setup", title: "Help set up the hall", location: "Hall", note: "Food tables, folding chairs, and a stage waiting for the evening.", sceneId: "generic_hall_setup" },
      { id: "sp-pre-show-rest", title: "Rest before the concert", location: "Your Apartment", note: "A quiet afternoon. You can hear chairs being moved in the hall.", sceneId: "apartment_pre_show" }
    ]
  },
  "27-1": {
    exclusive: true,
    items: [
      { id: "sp-concert", title: "Autumn concert", location: "Hall", note: "The chairs are out. The lights are on. People are arriving.", sceneId: "rhonda_opening_night" }
    ]
  }
};
