// Floating story beats. Personal, one-on-one scenes advance when the player
// VISITS a location, not on an exact calendar day. This is what makes learning
// a character's routine matter, and it removes the "you came on the wrong day"
// dead-ends.
//
// How the engine uses a queue (see getNextStoryBeat in engine.js):
//   For a location, walk its beats in order and return the FIRST beat that is
//   (a) not yet seen, (b) within its minDay/maxDay window if it has one, and
//   (c) whose `when` passes. If no beat qualifies, the location's normal recurring scene plays
//   (the template scene, which may itself have friendship-banded variants).
//
// This means the recurring scene is a location's heartbeat; beats are
// interruptions that must earn their turn. Memory-reveal scenes are included
// here as friendship-gated beats so they slot into the same priority order
// instead of being permanently shadowed by an ungated duet beat.
//
// Public events (Crossroads, the concert, the reunion bus, judging day) stay
// calendar-pinned as SPECIALS in data-core.js — they happen on a day whether
// or not you attend. Only personal scenes float.

export const STORY_QUEUES = {
  "Community Lounge": [
    { sceneId: "rhonda_first_meeting", maxDay: 5 },
    { sceneId: "rhonda_old_box", minDay: 2 },
    { sceneId: "rhonda_recruitment", minDay: 9, when: { seenScene: "rhonda_concert_notice" } },
    { sceneId: "rhonda_lounge_before_show", minDay: 16, when: { anyFlag: ["rhonda_rehearsal_seen", "rhonda_recruitment_seen"] } },
    // Al's memory reveal shares the lounge (cards). Placed LAST so it never
    // shadows Rhonda's arc; it only surfaces once her eligible beats are done
    // and the player is friendly with Al.
    { sceneId: "generic_cards_al", when: { minFriendship: { al: 2 }, notFlag: "al_driver_seen" } }
  ],

  "Craft Room": [
    { sceneId: "rhonda_pottery", minDay: 1 }
  ],

  "Cinema Room": [
    { sceneId: "rhonda_movie_night", minDay: 4 }
  ],

  "Noticeboard": [
    { sceneId: "rhonda_concert_notice", minDay: 8 }
  ],

  "Village Café": [
    { sceneId: "pablo_miranda_tea", minDay: 1 },
    // Pablo's memory reveal: floats in once you're friendly, before the corner-table beat.
    { sceneId: "generic_cafe_pablo", when: { minFriendship: { pablo: 2 }, notFlag: "pablo_recipe_seen" } },
    { sceneId: "pablo_miranda_corner_table", minDay: 11 },
    { sceneId: "pablo_feast_consequence", minDay: 16, when: { anyFlag: ["pablo_cooked_carmens", "pablo_substituted"] } }
  ],

  "Gardens": [
    { sceneId: "pablo_miranda_seedlings", minDay: 6 },
    { sceneId: "generic_garden_miranda", when: { minFriendship: { miranda: 2 }, notFlag: "miranda_tablecloth_seen" } },
    { sceneId: "miranda_competition_consequence", minDay: 16, when: { anyFlag: ["miranda_delegated", "miranda_did_it_alone"] } }
  ],

  "Library": [
    { sceneId: "generic_library_jean", when: { minFriendship: { jean: 2 }, notFlag: "jean_festival_seen" } },
    { sceneId: "jean_figtree_consequence", minDay: 16, when: { anyFlag: ["jean_let_go", "jean_carried_it_alone"] } }
  ],

  "Workshop": [
    { sceneId: "generic_workshop_bob", when: { minFriendship: { bob: 2 }, notFlag: "bob_photo_seen" } },
    { sceneId: "bob_reunion_consequence", minDay: 16, when: { anyFlag: ["bob_went_reunion", "bob_reunion_missed"] } }
  ]
};
