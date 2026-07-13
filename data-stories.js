export const STORY_QUEUES = {
  "Community Lounge": [
    {
      "sceneId": "rhonda_first_meeting",
      "maxDay": 5,
      "when": {
        "notFlag": "met_rhonda"
      }
    },
    {
      "sceneId": "rhonda_old_box",
      "minDay": 2,
      "when": {
        "seenScene": "rhonda_pottery"
      }
    },
    {
      "sceneId": "rhonda_recruitment",
      "minDay": 9,
      "when": {
        "seenScene": "rhonda_concert_notice",
        "minFriendship": {
          "rhonda": 5
        }
      }
    },
    {
      "sceneId": "rhonda_lounge_before_show",
      "minDay": 16,
      "when": {
        "anyFlag": [
          "rhonda_rehearsal_seen",
          "rhonda_recruitment_seen"
        ]
      }
    },
    {
      "sceneId": "generic_cards_al",
      "when": {
        "minFriendship": {
          "al": 2
        },
        "notFlag": "al_driver_seen"
      }
    }
  ],
  "Craft Room": [
    {
      "sceneId": "rhonda_pottery",
      "minDay": 1,
      "notice": {
        "id": "story-rhonda-pottery",
        "title": "Pottery",
        "location": "Craft Room",
        "note": "The craft room is calm. People are chatting, laughing, and making uneven bowls and plenty of mess."
      }
    }
  ],
  "Noticeboard": [
    {
      "sceneId": "rhonda_concert_notice",
      "minDay": 8,
      "when": {
        "seenScene": "rhonda_old_box"
      },
      "notice": {
        "id": "story-rhonda-concert-notice",
        "title": "The notice",
        "location": "Noticeboard",
        "note": "Pinned crookedly over the usual notices is a fresh sheet of paper."
      }
    }
  ],
  "Cinema Room": [
    {
      "sceneId": "rhonda_movie_night",
      "minDay": 4
    }
  ],
  "Village Café": [
    {
      "sceneId": "pablo_miranda_tea",
      "minDay": 1
    },
    {
      "sceneId": "generic_cafe_pablo",
      "when": {
        "minFriendship": {
          "pablo": 2
        },
        "notFlag": "pablo_recipe_seen"
      }
    },
    {
      "sceneId": "pablo_miranda_corner_table",
      "minDay": 11
    },
    {
      "sceneId": "pablo_feast_consequence",
      "minDay": 16,
      "when": {
        "anyFlag": [
          "pablo_cooked_carmens",
          "pablo_substituted"
        ]
      }
    }
  ],
  "Gardens": [
    {
      "sceneId": "pablo_miranda_seedlings",
      "minDay": 6
    },
    {
      "sceneId": "generic_garden_miranda",
      "when": {
        "minFriendship": {
          "miranda": 2
        },
        "notFlag": "miranda_tablecloth_seen"
      }
    },
    {
      "sceneId": "miranda_competition_consequence",
      "minDay": 16,
      "when": {
        "anyFlag": [
          "miranda_delegated",
          "miranda_did_it_alone"
        ]
      }
    }
  ],
  "Library": [
    {
      "sceneId": "generic_library_jean",
      "when": {
        "minFriendship": {
          "jean": 2
        },
        "notFlag": "jean_festival_seen"
      }
    },
    {
      "sceneId": "generic_writing_jean"
    },
    {
      "sceneId": "jean_figtree_consequence",
      "minDay": 16,
      "when": {
        "anyFlag": [
          "jean_let_go",
          "jean_carried_it_alone"
        ]
      }
    }
  ],
  "Workshop": [
    {
      "sceneId": "generic_workshop_bob",
      "when": {
        "minFriendship": {
          "bob": 2
        },
        "notFlag": "bob_photo_seen"
      }
    },
    {
      "sceneId": "bob_reunion_consequence",
      "minDay": 16,
      "when": {
        "anyFlag": [
          "bob_went_reunion",
          "bob_reunion_missed"
        ]
      }
    }
  ]
};
