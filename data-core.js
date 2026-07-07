// Core data: calendar, characters, memories, and the village schedule.
// The schedule has two layers:
//   WEEKLY_TEMPLATE — recurring activities keyed "Weekday-slotIndex". The village's rhythm.
//   SPECIALS       — story beats keyed "dayIndex-slotIndex". Can add to, replace, or
//                    exclusively own a slot. This is where arcs live on the calendar.
// Noticeboard notes must never identify a resident. Activities, objects, atmosphere only.

export const TIME_SLOTS = ["Morning", "Afternoon", "Evening"];

const WEEKDAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export const DAYS = Array.from({ length: 21 }, (_, i) => ({
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
  rhonda_hat_laugh: "Rhonda once said the best laugh she ever got was from a tiny comedy role where she lost a hat.",
  rhonda_children_film: "Rhonda’s three children work in film. She sounds proud, but not only proud.",
  rhonda_miss_performing: "Rhonda misses performing, though not in the way people assume.",
  pablo_miranda_tea: "Pablo noticed Miranda takes her tea strong and with no sugar.",
  miranda_accepts_help: "Miranda let Pablo carry a crate of seedlings, then pretended she hadn’t needed help.",
  bob_june_roses: "Bob keeps a photograph in his toolbox: his wife June, standing in front of roses she grew from cuttings.",
  miranda_good_tablecloth: "Miranda kept her family’s one good tablecloth mended for thirty years. You can be poor or you can look poor, she says. Only one of those is compulsory.",
  pablo_carmen_rice: "Pablo carries Carmen’s rice recipe in his wallet, behind the photographs. Carmen seasoned by taste, frowned at the pot, added a little more, and was always right.",
  jean_festival_days: "Jean showed you the festival photos: herself barefoot in dry grass, then pregnant beside Rae’s father, the lovely tambourine player she had to let go.",
  al_designated_driver: "Al used to drive the band home after gigs, sober, the drummer asleep in the passenger seat and the keyboard strapped in with a seatbelt."
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
    { id: "tpl-gossip", title: "Lounge gossip", location: "Community Lounge", note: "News, rumours, and the thin line between them.", sceneId: "generic_lounge_al_news" }
  ],
  "Monday-2": [
    { id: "tpl-cards", title: "Cards in the lounge", location: "Community Lounge", note: "Low stakes, old grudges, and a deck of cards that has seen things.", sceneId: "generic_cards_al" },
    { id: "tpl-supper", title: "Café supper", location: "Village Café", note: "Soup, bread, and a table of people pretending not to eavesdrop.", sceneId: "generic_cafe_supper" }
  ],

  "Tuesday-0": [
    { id: "tpl-cafe-am", title: "Morning tea", location: "Village Café", note: "Fresh scones. At least three people have opinions.", sceneId: "generic_cafe_pablo" },
    { id: "tpl-library", title: "Library hour", location: "Library", note: "Quiet reading, returned books, and a newspaper folded with disapproval.", sceneId: "generic_library_jean" }
  ],
  "Tuesday-1": [
    { id: "tpl-pottery", title: "Pottery", location: "Craft Room", note: "Beginners welcome. The clay has no respect for anyone.", sceneId: "generic_pottery" },
    { id: "tpl-garden-pm", title: "Garden volunteers", location: "Gardens", note: "Bring gloves, or borrow the ones with suspicious stains.", sceneId: "generic_garden_miranda" }
  ],
  "Tuesday-2": [
    { id: "tpl-writing", title: "Writing circle", location: "Library", note: "Notebooks, pens, and crossed-out paragraphs.", sceneId: "generic_writing_jean" },
    { id: "tpl-lounge-pm", title: "Lounge after dinner", location: "Community Lounge", note: "Armchairs, biscuits, tea and conversation.", sceneId: "generic_lounge_evening" }
  ],

  "Wednesday-0": [
    { id: "tpl-garden-am", title: "Garden volunteers", location: "Gardens", note: "Quiet soil, magpies, and leaves under inspection.", sceneId: "generic_garden_miranda" },
    { id: "tpl-lounge-am", title: "Coffee in the lounge", location: "Community Lounge", note: "Newspapers, coffee, and opinions about both.", sceneId: "rhonda_lounge_short" }
  ],
  "Wednesday-1": [
    { id: "tpl-workshop", title: "Workshop hours", location: "Workshop", note: "Tools out, sawdust down, and a queue of small repairs.", sceneId: "generic_workshop_bob" },
    { id: "tpl-walk", title: "Walking group", location: "Reception", note: "A second chance to learn who complains uphill.", sceneId: "generic_walking" }
  ],
  "Wednesday-2": [
    { id: "tpl-movie", title: "Movie night", location: "Cinema Room", note: "Black-and-white comedy. The good seats go early.", sceneId: "generic_movie" },
    { id: "tpl-cards", title: "Cards in the lounge", location: "Community Lounge", note: "Bad shuffling, worse bluffing, and one person who is lying about luck.", sceneId: "generic_cards_al" }
  ],

  "Thursday-0": [
    { id: "tpl-lounge-am", title: "Coffee in the lounge", location: "Community Lounge", note: "Newspapers, coffee, and opinions about both.", sceneId: "rhonda_lounge_short" },
    { id: "tpl-library", title: "Library hour", location: "Library", note: "Returned books, missing bookmarks, and a notice no one remembers approving.", sceneId: "generic_library_jean" }
  ],
  "Thursday-1": [
    { id: "tpl-garden-pm", title: "Garden volunteers", location: "Gardens", note: "A list has appeared. The list has sub-lists.", sceneId: "generic_garden_miranda" },
    { id: "tpl-gossip", title: "Lounge gossip", location: "Community Lounge", note: "News, rumours, and the thin line between them.", sceneId: "generic_lounge_al_news" }
  ],
  "Thursday-2": [
    { id: "tpl-supper", title: "Café supper", location: "Village Café", note: "Soup, bread, and a table of people pretending not to eavesdrop.", sceneId: "generic_cafe_supper" },
    { id: "tpl-tv", title: "Television room", location: "TV Room", note: "A quiz show is on. Everyone knows better than the contestants.", sceneId: "generic_tv_room" }
  ],

  "Friday-0": [
    { id: "tpl-walk", title: "Walking group", location: "Reception", note: "A slow loop around the block, weather permitting.", sceneId: "generic_walking" },
    { id: "tpl-cafe-am", title: "Morning tea", location: "Village Café", note: "Fresh scones. At least three people have opinions.", sceneId: "generic_cafe_pablo" }
  ],
  "Friday-1": [
    { id: "tpl-pottery", title: "Pottery", location: "Craft Room", note: "Beginners welcome. The clay has no respect for anyone.", sceneId: "generic_pottery" },
    { id: "tpl-workshop", title: "Workshop hours", location: "Workshop", note: "Tools out, sawdust down, and a queue of small repairs.", sceneId: "generic_workshop_bob" }
  ],
  "Friday-2": [
    { id: "tpl-cards", title: "Cards in the lounge", location: "Community Lounge", note: "Low stakes, old grudges, and a deck of cards that has seen things.", sceneId: "generic_cards_al" },
    { id: "tpl-tv", title: "Television room", location: "TV Room", note: "A quiz show is on. Everyone knows better than the contestants.", sceneId: "generic_tv_room" }
  ],

  "Saturday-0": [
    { id: "tpl-market", title: "Village market table", location: "Foyer", note: "Books, jams, plants, and one mysterious box labelled 'useful'.", sceneId: "generic_market" },
    { id: "tpl-garden-am", title: "Garden volunteers", location: "Gardens", note: "Quiet soil, magpies, and leaves under inspection.", sceneId: "generic_garden_miranda" }
  ],
  "Saturday-1": [
    { id: "tpl-library", title: "Library hour", location: "Library", note: "Quiet reading, returned books, and a newspaper folded with disapproval.", sceneId: "generic_library_jean" },
    { id: "tpl-gossip", title: "Lounge gossip", location: "Community Lounge", note: "News, rumours, and the thin line between them.", sceneId: "generic_lounge_al_news" }
  ],
  "Saturday-2": [
    { id: "tpl-cards", title: "Cards in the lounge", location: "Community Lounge", note: "Bad shuffling, worse bluffing, and one person who is lying about luck.", sceneId: "generic_cards_al" },
    { id: "tpl-lounge-pm", title: "Lounge after dinner", location: "Community Lounge", note: "Armchairs, biscuits, tea and conversation.", sceneId: "generic_lounge_evening" }
  ],

  "Sunday-0": [
    { id: "tpl-cafe-am", title: "Breakfast in the café", location: "Village Café", note: "Toast, tea, and the slow version of the morning.", sceneId: "generic_cafe_pablo" },
    { id: "tpl-garden-am", title: "Morning in the garden", location: "Gardens", note: "Quiet soil, magpies, and leaves under inspection.", sceneId: "generic_garden_miranda" }
  ],
  "Sunday-1": [
    { id: "tpl-tv", title: "Television room", location: "TV Room", note: "An old film is on. Half the room has seen it. All of the room has opinions.", sceneId: "generic_tv_room" },
    { id: "tpl-workshop", title: "Workshop hours", location: "Workshop", note: "Tools out, sawdust down, and a queue of small repairs.", sceneId: "generic_workshop_bob" }
  ],
  "Sunday-2": [
    { id: "tpl-supper", title: "Café supper", location: "Village Café", note: "Soup, bread, and a table of people pretending not to eavesdrop.", sceneId: "generic_cafe_supper" },
    { id: "tpl-lounge-pm", title: "Lounge after dinner", location: "Community Lounge", note: "Armchairs, biscuits, tea and conversation.", sceneId: "generic_lounge_evening" }
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
  "8-2": {
    items: [
      { id: "sp-jean-al-1", replaces: "tpl-writing", title: "Writing circle", location: "Library", note: "Notebooks, pens, and biscuits.", sceneId: "jean_al_heckle_1" }
    ]
  },
  "11-2": {
    items: [
      { id: "sp-jean-al-2", replaces: "tpl-cards", title: "Cards in the lounge", location: "Community Lounge", note: "A request list sits on the low table.", sceneId: "jean_al_heckle_2" }
    ]
  },
  "13-2": {
    items: [
      { id: "sp-jean-al-3", replaces: "tpl-gossip", title: "Folded chairs", location: "Hall", note: "Folding chairs, loose cables, and a water jug.", sceneId: "jean_al_heckle_3" }
    ]
  },
  "14-1": {
    items: [
      { id: "sp-reunion", title: "Veterans’ reunion", location: "Reception", note: "A bus leaves at two. Pressed shirts optional but likely.", sceneId: "bob_reunion" }
    ]
  },
  "15-1": {
    items: [
      { id: "sp-garden-comp", replaces: "tpl-garden-pm", title: "Garden competition — judging day", location: "Gardens", note: "Regional judges arrive at two. The paths have never been this swept.", sceneId: "miranda_competition" }
    ]
  },
  "15-2": {
    items: [
      { id: "sp-harvest-feast", replaces: "tpl-supper", title: "Harvest feast", location: "Village Café", note: "The tables are pushed together. Whatever is in those ovens, there is a lot of it.", sceneId: "pablo_feast" }
    ]
  },
  "16-0": {
    items: [
      { id: "sp-rhonda-bob-1", title: "Reading practice", location: "Hall", note: "A lectern sits in a quiet corner.", sceneId: "rhonda_bob_coaching_1" }
    ]
  },
  "16-1": {
    items: [
      { id: "sp-figtree", replaces: "tpl-garden-pm", title: "Fig tree campaign meeting", location: "Gardens", note: "A council notice is tied to the old fig tree with orange tape.", sceneId: "jean_figtree" }
    ]
  },
  "16-2": {
    items: [
      { id: "sp-pablo-miranda-gift", replaces: "tpl-cafe-am", title: "Morning tea", location: "Village Café", note: "A small parcel waits by the counter.", sceneId: "pablo_miranda_gift" }
    ]
  },
  "17-1": {
    items: [
      { id: "sp-rehearsal", replaces: "tpl-pottery", title: "First rehearsal", location: "Hall", note: "The hall is busy. Not organised. Busy.", sceneId: "rhonda_rehearsal" }
    ]
  },
  "17-2": {
    items: [
      { id: "sp-dance-night", replaces: "tpl-cards", title: "Dance night", location: "Hall", note: "The good speakers are out. Someone has taped a request list to the wall.", sceneId: "al_dance" }
    ]
  },
  "18-1": {
    items: [
      { id: "sp-rhonda-bob-2", replaces: "tpl-pottery", title: "Quiet rehearsal", location: "Hall", note: "A lectern faces the back wall.", sceneId: "rhonda_bob_coaching_2" }
    ]
  },
  "19-1": {
    items: [
      { id: "sp-final-rehearsal", replaces: "tpl-library", title: "Final rehearsal", location: "Hall", note: "Chairs, cables, one microphone, and more opinions than required.", sceneId: "rhonda_final_rehearsal" }
    ]
  },
  "19-2": {
    items: [
      { id: "sp-night-before", replaces: "tpl-lounge-pm", title: "The night before", location: "Hall", note: "The hall is empty. The chairs face the stage.", sceneId: "rhonda_night_before" }
    ]
  },
  "20-0": {
    items: [
      { id: "sp-pre-show-breakfast", replaces: "tpl-cafe-am", title: "Breakfast", location: "Village Café", note: "The concert is tonight. Everyone has an opinion.", sceneId: "generic_pre_show_breakfast" }
    ]
  },
  "20-1": {
    exclusive: true,
    items: [
      { id: "sp-hall-setup", title: "Help set up the hall", location: "Hall", note: "Food tables, folding chairs, and a stage waiting for the evening.", sceneId: "generic_hall_setup" },
      { id: "sp-pre-show-rest", title: "Rest before the concert", location: "Your Apartment", note: "A quiet afternoon. You can hear chairs being moved in the hall.", sceneId: "apartment_pre_show" }
    ]
  },
  "20-2": {
    exclusive: true,
    items: [
      { id: "sp-concert", title: "Autumn concert", location: "Hall", note: "The chairs are out. The lights are on. People are arriving.", sceneId: "rhonda_opening_night" },
      { id: "sp-miss-concert", title: "Stay in your apartment", location: "Your Apartment", note: "The concert goes on down the hall.", sceneId: "apartment_miss_concert" }
    ]
  }
};
