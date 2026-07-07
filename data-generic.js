// Village-wide recurring scenes and apartment scenes. No character arcs live here.
// The apartment week-variants ARE the player arc. Keep them plain. Never narrate growth.
// generic_walking floats by friendship: whoever you are closest to (Bob, Miranda,
// or Jean) walks with you. It is a soft, recurring relationship check-in, not an arc beat.
export const GENERIC_SCENES = {
  "generic_walking": {
    "title": "Walking group",
    "location": "Reception",
    "art": "Reception",
    "content": [
      {
        "text": "The walking group gathers by reception in hats chosen for several conflicting forecasts."
      },
      {
        "text": "Somebody with a clipboard proposes the short loop. Somebody else asks whether the shady side counts. Nobody rules on it."
      },
      {
        "text": "The group sets off at a pace that leaves room for two walking frames, one stick, and a full account of last night’s rain."
      },
      {
        "text": "It is pleasant enough. You walk near the back and let the conversation happen without you."
      }
    ],
    "choices": [
      {
        "text": "Enjoy the walk.",
        "outcome": [
          {
            "text": "You do a slow lap of the block. By the end, three people know your name and one has forgotten it again."
          },
          {
            "text": "The jacarandas are, as promised, worth it."
          }
        ],
        "effects": {}
      }
    ],
    "variants": [
      {
        "when": {
          "minFriendship": {
            "bob": 3
          }
        },
        "content": [
          {
            "text": "The group is assembling by reception. Bob is already there, doing a slow circuit of the flat ground while he waits, the way a man does when sitting still is the harder option."
          },
          {
            "text": "He falls into step with you without discussion. He sets a steady pace and holds it."
          },
          {
            "speaker": "BOB",
            "text": "Did this route every morning for forty years. Different block. Same idea."
          },
          {
            "text": "At the corner, he nods at a front garden gone to seed."
          },
          {
            "speaker": "BOB",
            "text": "June would’ve had that fixed by Tuesday. Not a criticism. Just true."
          }
        ],
        "choices": [
          {
            "text": "Keep pace with him.",
            "outcome": [
              {
                "text": "You walk the loop at Bob’s pace, which is unhurried and exact. He does not fill the quiet, and neither do you."
              },
              {
                "text": "When you get back he says the walk was good company. From Bob, that is a paragraph."
              }
            ],
            "effects": {
              "friendship": {
                "bob": 1
              }
            }
          },
          {
            "text": "“Forty years is a lot of mornings.”",
            "outcome": [
              {
                "speaker": "BOB",
                "text": "You do a thing because it holds the day together. Then one day the day holds itself, and you keep doing it anyway."
              },
              {
                "text": "He walks a few steps."
              },
              {
                "speaker": "BOB",
                "text": "Habit’s not the worst company a man’s had."
              }
            ],
            "effects": {
              "friendship": {
                "bob": 1
              }
            }
          }
        ]
      },
      {
        "when": {
          "minFriendship": {
            "miranda": 3
          }
        },
        "content": [
          {
            "text": "Miranda is at the front of the group, having somehow become responsible for the route without volunteering."
          },
          {
            "text": "She walks briskly and expects the pavement to keep up. You match her stride."
          },
          {
            "speaker": "MIRANDA",
            "text": "The clipboard person means well. But if you let a committee choose a route you end up walking to a vote, not a destination."
          },
          {
            "text": "She steers the group around a puddle nobody else had noticed yet."
          }
        ],
        "choices": [
          {
            "text": "Let her set the pace.",
            "outcome": [
              {
                "text": "Miranda sets a good pace and a better line, and the whole group is quietly grateful without quite knowing why."
              },
              {
                "speaker": "MIRANDA",
                "text": "You keep up. That is not nothing. Most people dawdle and call it enjoying themselves."
              }
            ],
            "effects": {
              "friendship": {
                "miranda": 1
              }
            }
          },
          {
            "text": "“You could just let someone else lead.”",
            "outcome": [
              {
                "text": "Miranda considers this as though you have suggested she stop breathing to save air."
              },
              {
                "speaker": "MIRANDA",
                "text": "I could."
              },
              {
                "text": "She does not. But at the next corner she asks the group which way, and looks faintly surprised when the answer is reasonable."
              }
            ],
            "effects": {
              "friendship": {
                "miranda": 1
              }
            }
          }
        ]
      },
      {
        "when": {
          "minFriendship": {
            "jean": 3
          }
        },
        "content": [
          {
            "text": "Jean is holding court at the back of the group, which means the back of the group is now the front of the conversation."
          },
          {
            "text": "She waves you over and picks up a thread as though you had always been in it."
          },
          {
            "speaker": "JEAN",
            "text": "— so I told the council, if you’re going to widen the road you can explain to the possums. Anyway. Walk with me, I’m being outvoted on the route."
          },
          {
            "text": "The group takes the long way. Jean considers this a victory."
          }
        ],
        "choices": [
          {
            "text": "Take the long way with her.",
            "outcome": [
              {
                "text": "The long way passes the fig tree, the community garden, and three houses Jean has opinions about."
              },
              {
                "text": "It takes twice as long and you arrive back in a better mood than the short loop would have allowed."
              }
            ],
            "effects": {
              "friendship": {
                "jean": 1
              }
            }
          },
          {
            "text": "Ask what she’s campaigning about this week.",
            "outcome": [
              {
                "speaker": "JEAN",
                "text": "This week? Nothing. Which is suspicious. When I’ve nothing to fight I start reorganising the library by mood, and nobody wants that."
              },
              {
                "text": "She laughs, then goes quiet for half a block, as though the joke had a true thing in it she hadn’t meant to say."
              }
            ],
            "effects": {
              "friendship": {
                "jean": 1
              }
            }
          }
        ]
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
          "weeks": [
            2,
            3
          ],
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
          "weeks": [
            3,
            4
          ],
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
          "weeks": [
            2,
            3,
            4
          ],
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
