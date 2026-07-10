// Generated from the approved Still Got It script for Chunk 2.
export const GENERIC_SCENES = {
  "generic_walking": {
    "title": "Walking group",
    "location": "Reception",
    "art": "Reception",
    "variantId": "generic_walking.v1",
    "oneShot": true,
    "content": [
      {
        "text": "The walking group gathers by reception and decides the park would be nice today."
      },
      {
        "text": "The group passes the big fig tree, whose leaves are becoming more numerous."
      },
      {
        "speaker": "MIRANDA",
        "text": "She’s about ready to fruit."
      },
      {
        "text": "A man in a cap sidles up to you."
      },
      {
        "speaker": "AL",
        "text": "Now, what brings a young, sprightly soul like you out with a bunch of old codgers like us?"
      }
    ],
    "choices": [
      {
        "text": "I’m not young and sprightly.",
        "outcome": [
          {
            "text": "The man laughs and offers his hand."
          },
          {
            "speaker": "AL",
            "text": "Al. Pleasure. Now, Bob here’s not young, but sprightly? Look at him go!"
          },
          {
            "text": "Bob gives him a grumpy look as he powers ahead. At the reserve, a colossal mountain ash shades the benches."
          },
          {
            "speaker": "AL",
            "text": "Whopper, isn’t it?"
          }
        ],
        "effects": {
          "flags": {
            "met_al": true,
            "met_bob": true,
            "met_miranda": true
          }
        },
        "nextSceneId": "generic_walking_intro_bob_al"
      },
      {
        "text": "Let’s just say I like it slow.",
        "outcome": [
          {
            "text": "The man laughs and offers his hand."
          },
          {
            "speaker": "AL",
            "text": "Al. Pleasure."
          },
          {
            "text": "At the reserve, a colossal mountain ash shades the benches."
          },
          {
            "speaker": "MIRANDA",
            "text": "Tallest flowering plant in the world."
          }
        ],
        "effects": {
          "flags": {
            "met_al": true,
            "met_bob": true,
            "met_miranda": true
          }
        },
        "nextSceneId": "generic_walking_intro_al_miranda"
      }
    ],
    "variants": [
      {
        "id": "generic_walking.alt_intro",
        "oneShot": true,
        "when": {
          "flag": "met_al",
          "notSeenVariant": "generic_walking.v1"
        },
        "content": [
          {
            "text": "Al sidles up to you."
          },
          {
            "speaker": "AL",
            "text": "Settle this for me. Who’s more handsome — me or Bob?"
          },
          {
            "text": "Bob looks embarrassed. Al looks delighted."
          }
        ],
        "choices": [
          {
            "text": "Al.",
            "outcome": [
              {
                "text": "Al laughs and slaps Bob on the shoulder, then admits Bob is his best buddy and too much fun to tease."
              }
            ],
            "effects": {
              "flags": {
                "met_al": true,
                "met_bob": true,
                "met_miranda": true
              }
            },
            "nextSceneId": "generic_walking_alt_followup"
          },
          {
            "text": "Bob.",
            "outcome": [
              {
                "text": "Al laughs and tells Bob he must have broken his share of hearts. Bob powers ahead to Miranda while Al watches, amused and apologetic."
              }
            ],
            "effects": {
              "flags": {
                "met_al": true,
                "met_bob": true,
                "met_miranda": true
              }
            },
            "nextSceneId": "generic_walking_alt_followup"
          }
        ]
      },
      {
        "id": "generic_walking.v2",
        "oneShot": true,
        "when": {
          "anySeenVariant": [
            "generic_walking.v1",
            "generic_walking.alt_intro"
          ]
        },
        "content": [
          {
            "text": "The group assembles by reception. Bob falls into step with you while Miranda and Pablo lead through the side streets."
          },
          {
            "text": "At a neglected garden, Bob says Miranda should be allowed at it. Miranda objects to the borage spreading everywhere; Pablo observes that the mess, not the herb, is the problem."
          },
          {
            "text": "Near home, a young woman with short pink hair drives away in a dirty red hatchback."
          },
          {
            "speaker": "PABLO",
            "text": "Rae was here. I would have liked to say hello."
          },
          {
            "speaker": "MIRANDA",
            "text": "Lovely girl."
          }
        ],
        "choices": [
          {
            "text": "Finish the loop with them.",
            "outcome": [
              {
                "text": "The group turns back toward Summer Hills together."
              }
            ],
            "effects": {
              "friendship": {
                "miranda": 1,
                "pablo": 1,
                "bob": 1
              },
              "flags": {
                "met_miranda": true,
                "met_pablo": true,
                "met_bob": true
              }
            }
          }
        ]
      },
      {
        "id": "generic_walking.v3",
        "oneShot": true,
        "when": {
          "seenVariant": "generic_walking.v2"
        },
        "content": [
          {
            "text": "Bob and Al lead the walk. Al says about ten words for each of Bob’s, but the conversation still flows."
          },
          {
            "text": "Jean walks with Miranda at the back and waves you over."
          },
          {
            "speaker": "JEAN",
            "text": "—so I told her, tell them they can take their three percent and shove it."
          },
          {
            "speaker": "MIRANDA",
            "text": "Right. Less than inflation."
          },
          {
            "text": "Jean explains that Rae is on her workplace bargaining team, with the pride some parents reserve for surgeons."
          },
          {
            "text": "A grey cat watches the group pass through the laneway as though you are trespassing."
          }
        ],
        "choices": [
          {
            "text": "Walk back with Jean and Miranda.",
            "outcome": [
              {
                "text": "The argument about enterprise bargaining carries you all the way home."
              }
            ],
            "effects": {
              "friendship": {
                "jean": 1,
                "miranda": 1
              },
              "flags": {
                "met_jean": true,
                "met_miranda": true,
                "met_al": true,
                "met_bob": true
              }
            }
          }
        ]
      },
      {
        "id": "generic_walking.v4",
        "oneShot": true,
        "when": {
          "seenVariant": "generic_walking.v3"
        },
        "content": [
          {
            "text": "The usual group walks to the reserve. You chat with Al and Miranda and share a few words with Bob."
          },
          {
            "text": "A currawong hops lightly between branches. A honeyeater works much harder at the banksias. The grey cat in the laneway remains unimpressed by everyone."
          }
        ],
        "choices": [
          {
            "text": "Finish the walk.",
            "outcome": [
              {
                "text": "You return to Summer Hills at the group’s slow, familiar pace."
              }
            ],
            "effects": {
              "friendship": {
                "al": 1,
                "miranda": 1,
                "bob": 1
              },
              "flags": {
                "met_al": true,
                "met_miranda": true,
                "met_bob": true
              }
            }
          }
        ]
      }
    ],
    "when": {
      "notFlag": "met_al"
    }
  },
  "generic_tv_room": {
    "title": "Television room",
    "location": "TV Room",
    "art": "TV Room",
    "variantId": "generic_tv_room.default",
    "oneShot": true,
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
  "generic_pre_show_breakfast": {
    "title": "Breakfast",
    "location": "Village Café",
    "art": "Village Café",
    "variantId": "generic_pre_show_breakfast.v1",
    "oneShot": true,
    "content": [
      {
        "text": "The concert is tonight. The café has the feeling of a place pretending to be normal. Pablo says the food will be ready. Al says there better be enough room for his fans. Bob straightens up the rows of chairs."
      }
    ],
    "choices": [
      {
        "text": "Continue.",
        "outcome": [
          {
            "text": "The moment passes."
          }
        ],
        "effects": {
          "flags": {
            "met_al": true,
            "met_bob": true,
            "met_pablo": true
          },
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
    "variantId": "generic_hall_setup.v1",
    "oneShot": true,
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
            "helped_hall_setup": true,
            "met_al": true,
            "met_jean": true,
            "met_pablo": true
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
        "text": "Continue.",
        "outcome": [
          {
            "text": "The moment passes."
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
        "text": "Continue.",
        "outcome": [
          {
            "text": "The moment passes."
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
            "text": "You stay in while the light moves across the carpet. You hear voices outside, and then birds, and then silence."
          }
        ],
        "choices": [
          {
            "text": "Continue.",
            "outcome": [
              {
                "text": "The moment passes."
              }
            ],
            "effects": {
              "flags": {
                "spent_time_alone": true
              }
            }
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
        "text": "You make tea and stay in your apartment. Outside, the village carries on."
      }
    ],
    "choices": [
      {
        "text": "Continue.",
        "outcome": [
          {
            "text": "The moment passes."
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
            "text": "You make tea and stay in. Laughter comes through the wall. Twice."
          },
          {
            "text": "The second time, you almost recognise it."
          }
        ],
        "choices": [
          {
            "text": "Continue.",
            "outcome": [
              {
                "text": "The moment passes."
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
      {
        "when": {
          "week": 2
        },
        "content": [
          {
            "text": "You make tea and stay in your apartment. The quiet is the same as last week."
          }
        ],
        "choices": [
          {
            "text": "Continue.",
            "outcome": [
              {
                "text": "The moment passes."
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
    ]
  },
  "apartment_pre_show": {
    "title": "Rest before the concert",
    "location": "Your Apartment",
    "art": "Your Apartment",
    "content": [
      {
        "text": "You spend the afternoon in your apartment. Through the wall, faintly, you hear chairs scraping in the hall."
      },
      {
        "text": "Later, the light has changed."
      }
    ],
    "choices": [
      {
        "text": "Continue.",
        "outcome": [
          {
            "text": "The moment passes."
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
  "generic_movie": {
    "title": "Movie night",
    "location": "Cinema Room",
    "art": "Cinema Room",
    "variantId": "generic_movie.default",
    "oneShot": true,
    "content": [
      {
        "text": "The cinema room is dark except for the projector glow. Someone has brought wrapped peppermints. The wrappers take longer than the peppermints."
      },
      {
        "text": "Tonight’s film is older than most of the audience, which everyone finds reassuring."
      },
      {
        "text": "The film is good in the way old films are good: everyone talks fast and sounds extraordinarily cool, and also like your parents. The men all wear hats and the women are all too glamorous."
      },
      {
        "text": "People drift out slowly afterwards, still talking about the ending."
      }
    ],
    "choices": [
      {
        "text": "Stay for the film.",
        "outcome": [
          {
            "text": "You stay until the lights come up."
          }
        ],
        "effects": {}
      }
    ],
    "variants": [
      {
        "id": "generic_movie.rhonda_hat",
        "oneShot": true,
        "when": {
          "minFriendship": {
            "rhonda": 2
          }
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
                "rhonda_told_hat_story": true,
                "met_rhonda": true
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
                "rhonda_told_hat_story": true,
                "met_rhonda": true
              }
            }
          }
        ]
      }
    ]
  },
  "generic_walking_intro_bob_al": {
    "title": "Walking group",
    "location": "Reception",
    "art": "Reception",
    "hidden": true,
    "content": [],
    "choices": [
      {
        "text": "Walk around with Bob.",
        "outcome": [
          {
            "text": "You join Bob for two brisk laps and ask about his veteran’s cap."
          },
          {
            "speaker": "BOB",
            "text": "Vietnam. Army."
          },
          {
            "text": "He does not elaborate. At the end he stops abruptly."
          },
          {
            "speaker": "BOB",
            "text": "Ah, good to get the heart going. Nice walking with you."
          },
          {
            "text": "You and Al return at a more reasonable pace."
          }
        ],
        "effects": {
          "friendship": {
            "al": 1,
            "bob": 2
          },
          "flags": {
            "met_al": true,
            "met_bob": true
          }
        }
      },
      {
        "text": "Sit with Al.",
        "outcome": [
          {
            "text": "Al points out a handsome robin and asks you superficial questions. You return them."
          },
          {
            "text": "He says he kept his money in stocks and moved into Summer Hills when he decided to retire from cleaning rented houses."
          }
        ],
        "effects": {
          "friendship": {
            "al": 2,
            "bob": 1
          },
          "flags": {
            "met_al": true,
            "met_bob": true
          }
        }
      }
    ]
  },
  "generic_walking_intro_al_miranda": {
    "title": "Walking group",
    "location": "Reception",
    "art": "Reception",
    "hidden": true,
    "content": [],
    "choices": [
      {
        "text": "Walk around with Al.",
        "outcome": [
          {
            "text": "Al points out a robin and chats about his two years at Summer Hills, rented houses and his retirement from cleaning."
          }
        ],
        "effects": {
          "friendship": {
            "al": 2,
            "miranda": 1
          },
          "flags": {
            "met_al": true,
            "met_miranda": true
          }
        }
      },
      {
        "text": "Sit with Miranda.",
        "outcome": [
          {
            "text": "Miranda sits in companionable silence before pointing to the grass."
          },
          {
            "speaker": "MIRANDA",
            "text": "Dandelions."
          },
          {
            "text": "She explains how they used to gather them for salads and pies, blanching away the bitterness. You mention that bees like them. She nods approvingly."
          }
        ],
        "effects": {
          "friendship": {
            "miranda": 2,
            "al": 1
          },
          "flags": {
            "met_al": true,
            "met_miranda": true
          }
        }
      }
    ]
  },
  "generic_walking_alt_followup": {
    "title": "Walking group",
    "location": "Reception",
    "art": "Reception",
    "hidden": true,
    "content": [],
    "choices": [
      {
        "text": "Walk around with Bob and Miranda.",
        "outcome": [
          {
            "text": "You take two brisk laps with Bob and Miranda. Their conversation consists mostly of plants, ducks and short agreements."
          },
          {
            "speaker": "BOB",
            "text": "Ah, good to get the heart going. Nice walking with you both."
          }
        ],
        "effects": {
          "friendship": {
            "al": 1,
            "bob": 1,
            "miranda": 1
          },
          "flags": {
            "met_al": true,
            "met_bob": true,
            "met_miranda": true
          }
        }
      },
      {
        "text": "Sit with Al.",
        "outcome": [
          {
            "text": "Al points out a robin, chats about Summer Hills, and tells you he retired from cleaning when his last lease ended."
          }
        ],
        "effects": {
          "friendship": {
            "al": 2,
            "bob": 1,
            "miranda": 1
          },
          "flags": {
            "met_al": true,
            "met_bob": true,
            "met_miranda": true
          }
        }
      }
    ]
  }
};
