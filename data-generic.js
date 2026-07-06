// Village-wide recurring scenes and apartment scenes. No character arcs live here.
// The apartment week-variants ARE the player arc. Keep them plain. Never narrate growth.
export const GENERIC_SCENES = {
  "generic_walking": {
    "title": "Walking group",
    "location": "Reception",
    "art": "Reception",
    "content": [
      {
        "text": "You join the walking group for a slow loop around the block. Someone points out a jacaranda. Someone else says the council should fix the footpath. By the time you return, you know three new names and one strong opinion about bins."
      }
    ],
    "choices": [
      {
        "text": "Stay for a while.",
        "outcome": [
          {
            "text": "The time passes more quickly than you expected."
          }
        ],
        "effects": {}
      }
    ]
  },
  "generic_tv_room": {
    "title": "Television room",
    "location": "TV Room",
    "art": "TV Room",
    "content": [
      {
        "text": "A quiz show is on. Everyone knows the answer after the contestant gets it wrong. This seems to be the main pleasure of the format."
      }
    ],
    "choices": [
      {
        "text": "Stay for a while.",
        "outcome": [
          {
            "text": "The time passes more quickly than you expected."
          }
        ],
        "effects": {}
      }
    ]
  },
  "generic_cafe_supper": {
    "title": "Café supper",
    "location": "Village Café",
    "art": "Village Café",
    "content": [
      {
        "text": "Supper is soup and bread. Pablo says the soup needs lemon. Miranda says it needs salt. Jean says it needs a better funding model."
      }
    ],
    "choices": [
      {
        "text": "Stay for a while.",
        "outcome": [
          {
            "text": "The time passes more quickly than you expected."
          }
        ],
        "effects": {
          "friendship": {
            "pablo": 1,
            "miranda": 1,
            "jean": 1
          }
        }
      }
    ],
    "variants": [
      {
        "when": {
          "weeks": [2, 3],
          "minFriendship": {
            "pablo": 2
          },
          "notMemory": "pablo_carmen_rice"
        },
        "content": [
          {
            "text": "Supper is almost over when Pablo brings out one last bowl for the table to try. He says it is only rice, which makes everyone suspicious."
          },
          {
            "text": "He stands behind his chair while people eat. In his hand is a folded recipe card, soft at the edges."
          },
          {
            "speaker": "PABLO",
            "text": "Carmen never wrote it properly. She tasted, frowned, added a little more, and then it was right. This is not that. But it is close enough for supper."
          }
        ],
        "choices": [
          {
            "text": "Tell him people want seconds.",
            "outcome": [
              {
                "text": "Pablo looks toward the table. Jean is already scraping the serving spoon around the bowl."
              },
              {
                "speaker": "PABLO",
                "text": "Then perhaps it is close enough to survive."
              },
              {
                "text": "He folds the card and returns it to his wallet, behind the photographs."
              }
            ],
            "effects": {
              "friendship": {
                "pablo": 2
              },
              "memories": [
                "pablo_carmen_rice"
              ],
              "flags": {
                "pablo_recipe_seen": true
              }
            }
          },
          {
            "text": "Stay quiet and let the table answer.",
            "outcome": [
              {
                "text": "The table answers by emptying the bowl. Pablo pretends not to watch."
              },
              {
                "text": "When he clears it away, the serving spoon is clean. He looks annoyed by how much this matters."
              }
            ],
            "effects": {
              "friendship": {
                "pablo": 1
              },
              "memories": [
                "pablo_carmen_rice"
              ],
              "flags": {
                "pablo_recipe_seen": true
              }
            }
          }
        ]
      }
    ]
  },
  "generic_market": {
    "title": "Village market table",
    "location": "Foyer",
    "art": "Foyer",
    "content": [
      {
        "text": "The foyer table has books, jams, plants, and one mysterious box labelled 'useful'. Al buys nothing and compliments everyone. This is apparently his contribution."
      }
    ],
    "choices": [
      {
        "text": "Stay for a while.",
        "outcome": [
          {
            "text": "The time passes more quickly than you expected."
          }
        ],
        "effects": {
          "friendship": {
            "al": 1
          }
        }
      }
    ]
  },
  "generic_pre_show_breakfast": {
    "title": "Breakfast",
    "location": "Village Café",
    "art": "Village Café",
    "content": [
      {
        "text": "The concert is tonight. The café has the feeling of a place pretending to be normal. Pablo says the food will be ready. Al says his hair will be ready. Bob says the chairs had better be ready."
      }
    ],
    "choices": [
      {
        "text": "Stay for a while.",
        "outcome": [
          {
            "text": "The time passes more quickly than you expected."
          }
        ],
        "effects": {
          "friendship": {
            "pablo": 1,
            "al": 1,
            "bob": 1
          }
        }
      }
    ]
  },
  "generic_hall_setup": {
    "title": "Hall setup",
    "location": "Hall",
    "art": "Hall",
    "content": [
      {
        "text": "You help set up chairs in the hall. Pablo arranges food with care. Al arranges himself near the entrance. Jean tapes up a sign, takes it down, and tapes it up straighter."
      }
    ],
    "choices": [
      {
        "text": "Stay for a while.",
        "outcome": [
          {
            "text": "The time passes more quickly than you expected."
          }
        ],
        "effects": {
          "friendship": {
            "pablo": 1,
            "al": 1,
            "jean": 1
          },
          "flags": {
            "helped_hall_setup": true
          }
        }
      }
    ]
  },
  "apartment_morning": {
    "title": "A quiet morning",
    "location": "Your Apartment",
    "art": "Your Apartment",
    "content": [
      {
        "text": "You stay in your apartment and make toast. Somewhere outside, a trolley squeaks down the hall."
      }
    ],
    "choices": [
      {
        "text": "Let the time pass.",
        "outcome": [
          {
            "text": "Later, the light has changed."
          }
        ],
        "effects": {
          "flags": {
            "spent_time_alone": true
          }
        }
      }
    ],
    "variants": [
      {
        "when": {
          "week": 4
        },
        "content": [
          {
            "text": "You stay in and make toast. The trolley squeaks past, on time."
          },
          {
            "text": "You know now that it is the library trolley, and that it is always five minutes early, and that knowing this is what living somewhere means."
          }
        ]
      }
    ]
  },
  "apartment_afternoon": {
    "title": "A quiet afternoon",
    "location": "Your Apartment",
    "art": "Your Apartment",
    "content": [
      {
        "text": "You stay in your apartment while the light moves across the carpet. A mower starts, stops, then starts again."
      }
    ],
    "choices": [
      {
        "text": "Let the time pass.",
        "outcome": [
          {
            "text": "Later, the light has changed."
          }
        ],
        "effects": {
          "flags": {
            "spent_time_alone": true
          }
        }
      }
    ],
    "variants": [
      {
        "when": {
          "week": 3
        },
        "content": [
          {
            "text": "You stay in while the light moves across the carpet. Down in the garden, someone is being instructed."
          },
          {
            "text": "You could name the instructor from the rhythm alone."
          }
        ]
      }
    ]
  },
  "apartment_evening": {
    "title": "A quiet evening",
    "location": "Your Apartment",
    "art": "Your Apartment",
    "content": [
      {
        "text": "You make tea and stay in your apartment. Outside, the village carries on without making a fuss about it."
      }
    ],
    "choices": [
      {
        "text": "Let the time pass.",
        "outcome": [
          {
            "text": "Later, the light has changed."
          }
        ],
        "effects": {
          "flags": {
            "spent_time_alone": true
          }
        }
      }
    ],
    "variants": [
      {
        "when": {
          "week": 4
        },
        "content": [
          {
            "text": "You make tea. The kettle works. The door can stay closed."
          },
          {
            "text": "You notice, tonight, that closing it is something you do."
          }
        ]
      },
      {
        "when": {
          "week": 3
        },
        "content": [
          {
            "text": "You make tea and stay in. Laughter comes through the wall. Twice."
          },
          {
            "text": "The second time, you almost recognise it."
          }
        ]
      },
      {
        "when": {
          "week": 2
        },
        "content": [
          {
            "text": "You make tea and stay in your apartment. The quiet is the same as last week."
          },
          {
            "text": "It has a clock in it now."
          }
        ]
      }
    ]
  },
  "apartment_pre_show": {
    "title": "Rest before the concert",
    "location": "Your Apartment",
    "art": "Your Apartment",
    "content": [
      {
        "text": "You spend the afternoon in your apartment. Through the wall, faintly, you hear chairs scraping in the hall."
      }
    ],
    "choices": [
      {
        "text": "Let the time pass.",
        "outcome": [
          {
            "text": "Later, the light has changed."
          }
        ],
        "effects": {
          "flags": {
            "spent_time_alone": true
          }
        }
      }
    ]
  },
  "apartment_miss_concert": {
    "title": "A quiet concert night",
    "location": "Your Apartment",
    "art": "Your Apartment",
    "content": [
      {
        "text": "You stay in your apartment while the concert happens down the hall. Sometimes there is applause. Once, a burst of laughter. Later, footsteps pass your door."
      }
    ],
    "choices": [
      {
        "text": "Let the evening pass.",
        "outcome": [
          {
            "text": "The hall quiets. Tomorrow, people will be talking about things you did not see."
          }
        ],
        "effects": {
          "flags": {
            "missed_concert": true,
            "spent_time_alone": true
          }
        }
      }
    ]
  },
  "generic_pottery": {
    "title": "Pottery",
    "location": "Craft Room",
    "art": "Craft Room",
    "content": [
      {
        "text": "The craft room smells of wet clay and optimism."
      },
      {
        "text": "People are making uneven bowls and pretending they meant to. The teacher says ‘lovely’ at regular intervals, to everyone, about everything."
      },
      {
        "text": "A wheel is free."
      }
    ],
    "choices": [
      {
        "text": "Have a go.",
        "outcome": [
          {
            "text": "Your bowl begins as a vase, becomes a plate, and settles on being an ashtray for a household that does not smoke."
          },
          {
            "text": "The teacher says it is lovely. You suspect a pattern."
          }
        ],
        "effects": {}
      }
    ]
  },
  "generic_movie": {
    "title": "Movie night",
    "location": "Cinema Room",
    "art": "Cinema Room",
    "content": [
      {
        "text": "The cinema room is dark except for the projector glow. Someone has brought wrapped peppermints. The wrappers take longer than the peppermints."
      },
      {
        "text": "Tonight’s film is older than most of the audience, which everyone finds reassuring."
      }
    ],
    "choices": [
      {
        "text": "Stay for the film.",
        "outcome": [
          {
            "text": "The film is good in the way old films are good: everyone talks fast and nobody explains their feelings."
          },
          {
            "text": "People drift out slowly afterwards, still talking about the ending."
          }
        ],
        "effects": {}
      }
    ],
    "variants": [
      {
        "when": {
          "weeks": [3, 4],
          "minFriendship": {
            "rhonda": 2
          },
          "notMemory": "rhonda_hat_laugh"
        },
        "content": [
          {
            "text": "The cinema room is dark except for the projector glow. The film is an old comedy with fast doors, faster exits, and one woman in a feathered hat."
          },
          {
            "text": "Rhonda laughs before the rest of the room, exactly half a second before the joke lands."
          },
          {
            "text": "Afterwards she stays in her seat while the lights come up."
          },
          {
            "speaker": "RHONDA",
            "text": "I had a part once where I lost a hat. Ridiculous little thing. Every night, when the hat went, the room lost it."
          }
        ],
        "choices": [
          {
            "text": "Ask about the timing.",
            "outcome": [
              {
                "text": "Rhonda turns to you, pleased that you noticed."
              },
              {
                "speaker": "RHONDA",
                "text": "Exactly. Half a second early and they see it coming. Half a second late and it is dead. Comedy is a knife edge in silly shoes."
              }
            ],
            "effects": {
              "friendship": {
                "rhonda": 2
              },
              "memories": [
                "rhonda_hat_laugh"
              ],
              "flags": {
                "rhonda_told_hat_story": true
              }
            }
          },
          {
            "text": "Say the laugh must have stayed with her.",
            "outcome": [
              {
                "text": "Rhonda looks at the blank screen."
              },
              {
                "speaker": "RHONDA",
                "text": "It did. Applause fades politely. A laugh like that gets into the walls."
              }
            ],
            "effects": {
              "friendship": {
                "rhonda": 2
              },
              "memories": [
                "rhonda_hat_laugh"
              ],
              "flags": {
                "rhonda_told_hat_story": true
              }
            }
          }
        ]
      }
    ]
  },
  "generic_lounge_evening": {
    "title": "Lounge after dinner",
    "location": "Community Lounge",
    "art": "Community Lounge",
    "content": [
      {
        "text": "The lounge after dinner runs on tea and settled opinions."
      },
      {
        "text": "Somebody’s grandson has done something either wonderful or alarming; the room is divided. The biscuits are not, and go quickly."
      }
    ],
    "choices": [
      {
        "text": "Stay for a while.",
        "outcome": [
          {
            "text": "You stay until the tea goes cold and the argument resolves itself into agreement that young people are, on balance, a mixed bag."
          }
        ],
        "effects": {}
      }
    ],
    "variants": [
      {
        "when": {
          "weeks": [2, 3, 4],
          "minFriendship": {
            "rhonda": 3
          },
          "notMemory": "rhonda_miss_performing"
        },
        "content": [
          {
            "text": "The lounge after dinner is busy enough that no one notices the old programme on Rhonda’s lap until she closes it."
          },
          {
            "speaker": "RHONDA",
            "text": "Tiny theatre. Terrible seats. Twenty-seven people and a damp patch on the ceiling."
          },
          {
            "text": "She taps the programme once with her finger."
          },
          {
            "speaker": "RHONDA",
            "text": "Best laugh I ever got. Not glamorous. Just alive."
          }
        ],
        "choices": [
          {
            "text": "Ask if she misses it.",
            "outcome": [
              {
                "speaker": "RHONDA",
                "text": "No."
              },
              {
                "text": "She says it too quickly."
              },
              {
                "speaker": "RHONDA",
                "text": "Yes. Not in the way people think."
              }
            ],
            "effects": {
              "friendship": {
                "rhonda": 2
              },
              "memories": [
                "rhonda_miss_performing"
              ]
            }
          },
          {
            "text": "Let the programme stay closed.",
            "outcome": [
              {
                "text": "You do not ask. Rhonda keeps one hand on the programme while Al tells a story from across the room."
              },
              {
                "text": "When someone laughs, Rhonda looks toward the sound before she remembers not to."
              }
            ],
            "effects": {
              "friendship": {
                "rhonda": 1
              },
              "memories": [
                "rhonda_miss_performing"
              ]
            }
          }
        ]
      }
    ]
  }
};
