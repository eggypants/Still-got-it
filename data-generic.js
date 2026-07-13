export const GENERIC_SCENES = {
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
  "generic_walking": {
    "title": "Walking group",
    "location": "Reception",
    "art": "Reception",
    "content": [
      {
        "text": "The walking group gathers by reception, and a brief discussion leads to a decision that the park would be nice today."
      },
      {
        "text": "The group sets off, past the big fig tree, whose leaves are becoming more numerous every day."
      },
      {
        "speaker": "MIRANDA",
        "text": "She's about ready to fruit."
      },
      {
        "text": "You've never heard someone call a tree \"she\" before."
      },
      {
        "text": "A man in a cap sidles up to you and starts to chat."
      },
      {
        "speaker": "AL",
        "text": "Now, what brings a young, spritely soul like you out on a walk with a bunch of old codgers like us?"
      }
    ],
    "choices": [
      {
        "text": "I'm not young and spritely.",
        "outcome": [
          {
            "text": "The man laughs heartily, then holds out his hand for you to shake."
          },
          {
            "speaker": "AL",
            "text": "Al. Pleasure. Now, Bob here's not young, but spritely? Look at him go!"
          },
          {
            "text": "The older man in a veteran's cap gives a grumpy look as he power-walks ahead. The group arrives at a small nature reserve. A colossal mountain ash shades a few benches and picnic tables. It's so tall that you worry about your balance for a moment as you look up at it."
          },
          {
            "speaker": "AL",
            "text": "Whopper, isn't it?"
          }
        ],
        "nextSceneId": "generic_walking__v0_c1",
        "flow": true,
        "effects": {
          "flags": {
            "walking_intro_seen": true
          }
        }
      },
      {
        "text": "Let's just say I like it slow",
        "outcome": [
          {
            "text": "The man laughs heartily, then holds out his hand for you to shake."
          },
          {
            "speaker": "AL",
            "text": "Al. Pleasure."
          },
          {
            "text": "You share a firm handshake. The group arrives at a small nature reserve. A colossal mountain ash shades a few benches and picnic tables. It's so tall that you worry about your balance for a moment as you look up at it."
          },
          {
            "speaker": "MIRANDA",
            "text": "Tallest flowering plant in the world."
          }
        ],
        "nextSceneId": "generic_walking__v0_c2",
        "flow": true,
        "effects": {
          "flags": {
            "walking_intro_seen": true
          }
        }
      }
    ],
    "variants": [
      {
        "when": {
          "flag": "walking_intro_seen"
        },
        "content": [
          {
            "text": "The group is assembling by reception. Bob is already there, doing a slow circuit of the flat ground while he waits."
          },
          {
            "text": "He falls into step with you without discussion. He sets a steady pace and holds it. In front of you, Miranda and Pablo are leading, turning up and down side streets."
          },
          {
            "text": "At the corner, Bob nods at a front garden gone to seed."
          },
          {
            "speaker": "BOB",
            "text": "Shame. Should let Miranda at it."
          },
          {
            "text": "Miranda hears this. She turns around."
          },
          {
            "speaker": "MIRANDA",
            "text": "I would pull out that borage. Spreads everywhere."
          },
          {
            "speaker": "PABLO",
            "text": "I never thought I would see the day where Miranda doesn't like a herb."
          },
          {
            "speaker": "MIRANDA",
            "text": "I like it fine when it's contained."
          },
          {
            "speaker": "PABLO",
            "text": "Ah. So the mess is the problem, not the herb. That makes more sense."
          },
          {
            "text": "The walk meanders around for a while and loops back towards the retirement village."
          },
          {
            "text": "Outside the village, you see a young woman with short, pink hair get in a dirty red hatchback and drive away."
          },
          {
            "speaker": "PABLO",
            "text": "Rae was here. Ah, I would have liked to say hello."
          },
          {
            "text": "Miranda nods approval."
          },
          {
            "speaker": "MIRANDA",
            "text": "Lovely girl."
          }
        ],
        "terminalEffects": {
          "flags": {
            "walking_v2_seen": true
          }
        },
        "choices": []
      },
      {
        "when": {
          "flag": "walking_intro_seen"
        },
        "content": [
          {
            "text": "Bob and Al lead the walk this time. Al says about ten words for every one of Bob's, but their conversation still seems to flow."
          },
          {
            "text": "Jean is with Miranda at the back of the group. She waves you over and picks up a thread as though you had always been in it."
          },
          {
            "speaker": "JEAN",
            "text": "-so I told her, tell them they can take their three percent and shove it."
          },
          {
            "speaker": "MIRANDA",
            "text": "Right. Less than inflation."
          },
          {
            "speaker": "JEAN",
            "text": "Exactly. It's effectively a pay cut. It isn't right."
          },
          {
            "text": "She turns to you."
          },
          {
            "speaker": "JEAN",
            "text": "Rae, my daughter. They're in EA negotiations."
          },
          {
            "text": "She senses you're unfamiliar."
          },
          {
            "speaker": "JEAN",
            "text": "The union. Rae's part of the bargaining team for her workplace."
          },
          {
            "text": "She says this with the sort of tone that some parents would employ when telling you their child was a brain surgeon or a magistrate. The group turns down a tree-lined street, and amble down the shady footpath. A laneway, enclosed in back fences, leads you back towards the retirement village. On one fence, a grey cat with yellow eyes stares you down, as though he thinks you a trespasser."
          }
        ],
        "terminalEffects": {
          "flags": {
            "walking_v3_seen": true
          }
        },
        "choices": []
      },
      {
        "when": {
          "flag": "walking_intro_seen"
        },
        "content": [
          {
            "text": "The usual suspects set off on a walk to the nature reserve. You chat with Al, and then with Miranda, and you share a few words with Bob. You see a currawong hopping weightlessly between branches and a honeyeater effortfully hovering at the banksias. Walking back through the alley, the grey cat has become no less displeased with your presence."
          }
        ],
        "choices": []
      },
      {
        "when": {
          "flag": "walking_intro_seen"
        },
        "content": [
          {
            "text": "Today it's just you and Bob in the walking group. Miranda is busy weeding, Jean is out for coffee with Rae, Pablo decided to sleep in, Al didn't like the weather and Rhonda never goes for a walk."
          },
          {
            "text": "You look at each other a little awkwardly."
          },
          {
            "speaker": "BOB",
            "text": "Park?"
          },
          {
            "text": "You nod. Bob sets off toward the nature reserve at his usual brisk pace and you keep up. The walk is silent, except for when Bob points out an old Kingswood with club plates parked on the side of the road, just like one he had in the 80s. On the way back from the park, the Kingswood is gone."
          }
        ],
        "terminalEffects": {}
      },
      {
        "when": {
          "flag": "walking_intro_seen"
        },
        "content": [
          {
            "text": "As you reach Reception, you hear a deep crack, followed by the heavens opening like a dam gate over the village."
          },
          {
            "speaker": "PABLO",
            "text": "Oh dear. That is not what the weather was supposed to do today. I am not walking in this."
          },
          {
            "speaker": "JEAN",
            "text": "Well, I'm out too. Coffee, anyone?"
          },
          {
            "speaker": "BOB",
            "text": "It's just a bit of rain. Never killed anyone."
          },
          {
            "text": "Jean looks at him sceptically."
          },
          {
            "speaker": "JEAN",
            "text": "People have absolutely been killed by rain. Flooding? Monsoons?"
          },
          {
            "text": "Bob shrugs."
          }
        ],
        "choices": [
          {
            "text": "Walk in the rain with Bob.",
            "outcome": [
              {
                "text": "You agree with Bob. It's just a bit of rain. The pair of you pull your jacket hoods up and step outside."
              },
              {
                "text": "It's pelting down. You suggest a shorter route around the side streets rather than the park, and Bob agrees."
              },
              {
                "text": "The heavy rain forces you to squint, and gusts of wind drive the rain almost horizontal. It's too loud to talk."
              },
              {
                "text": "Water creeps into your shoes, then through your socks, then up your pant legs."
              },
              {
                "text": "As you round the last corner home, you gratefully contemplate the hot shower and cup of tea you'll be having soon."
              },
              {
                "text": "You arrive back at Reception, shoes squelching. Bob nods his thanks to you and walks back to his apartment. You squelch back to yours."
              }
            ],
            "effects": {
              "friendship": {
                "bob": 1
              }
            }
          },
          {
            "text": "Go to the cafe with Jean and Pablo.",
            "outcome": [
              {
                "text": "The three of you go to the cafe. Pablo pulls a jar of biscuits from the shelf. Jean insists on making coffee, dusting off a plunger that Pablo never uses. The three of you chat for a while as rain pelts the window. After twenty minutes, you see Bob, drenched, marching briskly past the window, looking totally unbothered."
              }
            ],
            "effects": {}
          }
        ]
      }
    ],
    "pickVariant": "random",
    "baseWhen": {
      "notFlag": "walking_intro_seen"
    }
  },
  "generic_walking__v0_c1": {
    "title": "Walking group",
    "location": "Reception",
    "art": "Reception",
    "content": [],
    "choices": [
      {
        "text": "Walk around with Bob",
        "outcome": [
          {
            "text": "You join Bob, walking briskly around the park. He really is fast, for an old guy. You ask him about his hat."
          },
          {
            "speaker": "BOB",
            "text": "Vietnam. Army."
          },
          {
            "text": "He doesn't elaborate. You take two laps around the reserve, and you try to keep up while suppressing the urge to pant."
          },
          {
            "text": "After two laps, Bob stops abruptly."
          },
          {
            "speaker": "BOB",
            "text": "Ah, good to get the heart going. Nice walking with you."
          },
          {
            "text": "He turns and begins power-walking back to the retirement village. You and Al walk back together at a more reasonable pace."
          }
        ],
        "effects": {
          "friendship": {
            "al": 1,
            "bob": 2
          }
        }
      },
      {
        "text": "Sit with Al",
        "outcome": [
          {
            "text": "You sit next to Al, who chats away. He points out a handsome robin, though he's not sure which species it is - pink or rose."
          },
          {
            "speaker": "AL",
            "text": "Now there's a good looking young fellow. Set of pipes on him, too!"
          },
          {
            "text": "As if listening, the robin lets of a whistling tittle. You don't think tittle is a word, but that's the best you can describe it."
          },
          {
            "text": "Al asks you superficial questions and you return them."
          },
          {
            "text": "You learn that Al has lived in Summer Hills for the last two years."
          },
          {
            "speaker": "AL",
            "text": "Never owned a house - kept my money in stocks. So when the last lease ended, I took a look in the kitchen and the shed and decided to retire from cleaning."
          },
          {
            "text": "You don't tell him why you moved in."
          }
        ],
        "effects": {
          "friendship": {
            "al": 2,
            "bob": 1
          }
        }
      }
    ]
  },
  "generic_walking__v0_c2": {
    "title": "Walking group",
    "location": "Reception",
    "art": "Reception",
    "content": [],
    "choices": [
      {
        "text": "Walk around with Al",
        "outcome": [
          {
            "text": "You join Al, taking a turn around the park. He points out a handsome robin, though he's not sure which species it is - pink or rose."
          },
          {
            "speaker": "AL",
            "text": "Now there's a good looking young fellow. Set of pipes on him, too!"
          },
          {
            "text": "As if listening, the robin lets of a whistling tittle. You don't think tittle is a word, but that's the best you can describe it."
          },
          {
            "text": "Al asks you superficial questions and you return them."
          },
          {
            "text": "You learn that Al has lived in Summer Hills for the last two years."
          },
          {
            "speaker": "AL",
            "text": "Never owned a house - kept my money in stocks. So when the last lease ended, I took a look in the kitchen and the shed and decided to retire from cleaning."
          },
          {
            "text": "You don't tell him why you moved in."
          }
        ],
        "effects": {
          "friendship": {
            "al": 2,
            "miranda": 1
          }
        }
      },
      {
        "text": "Sit with Miranda",
        "outcome": [
          {
            "text": "You sit with Miranda on a bench. She's silent, but not awkwardly so. You get the sense that she doesn't feel the need to fill the space with words. Eventually though, she does speak."
          },
          {
            "speaker": "MIRANDA",
            "text": "Dandelions."
          },
          {
            "text": "You're not sure what to say to that, but yep - there are dandelions in the grass."
          },
          {
            "speaker": "MIRANDA",
            "text": "People don't use them nowadays. We used to go out in the backyard and pick them. We'd gather them off the nature strip."
          },
          {
            "text": "She sees your confusion."
          },
          {
            "speaker": "MIRANDA",
            "text": "For salads, pies, anything. They can be bitter if you don't blanch them first."
          },
          {
            "text": "You nod, thinking of something to say."
          },
          {
            "speaker": "PLAYER",
            "text": "The bees like them."
          },
          {
            "text": "Miranda nods appreciatively at this. You sit in pleasant silence for the rest of the visit."
          }
        ],
        "effects": {
          "friendship": {
            "miranda": 2,
            "al": 1
          }
        }
      }
    ]
  },
  "generic_walking__v1_c1": {
    "title": "Walking group",
    "location": "Reception",
    "art": "Reception",
    "content": [],
    "choices": [
      {
        "text": "Walk around with Bob and Miranda",
        "outcome": [
          {
            "text": "You join Bob and Miranda, walking briskly around the park. They really are fast, for a pair of oldies. You feel a little out of place as they talk to each other in brusque sentences."
          },
          {
            "speaker": "BOB",
            "text": "No ducks today."
          },
          {
            "speaker": "MIRANDA",
            "text": "Mm."
          },
          {
            "speaker": "MIRANDA",
            "text": "Banksias are out."
          },
          {
            "speaker": "BOB",
            "text": "Yep."
          },
          {
            "text": "You take two laps around the reserve, and you try to keep up while suppressing the urge to pant."
          },
          {
            "text": "After two laps, the walk stops abruptly."
          },
          {
            "speaker": "BOB",
            "text": "Ah, good to get the heart going. Nice walking with you both."
          },
          {
            "text": "He turns and begins power-walking back to the retirement village. You, Miranda and Al walk back together at a more reasonable pace."
          }
        ],
        "effects": {
          "friendship": {
            "al": 1,
            "bob": 2
          }
        }
      },
      {
        "text": "Sit with Al",
        "outcome": [
          {
            "text": "You sit next to Al, who chats away. He points out a handsome robin, though he's not sure which species it is - pink or rose."
          },
          {
            "speaker": "AL",
            "text": "Now there's a good looking young fellow. Set of pipes on him, too!"
          },
          {
            "text": "As if listening, the robin lets of a whistling tittle. You don't think tittle is a word, but that's the best you can describe it."
          },
          {
            "text": "Al asks you superficial questions and you return them."
          },
          {
            "text": "You learn that Al has lived in Summer Hills for the last two years."
          },
          {
            "speaker": "AL",
            "text": "Never owned a house - kept my money in stocks. So when the last lease ended, I took a look in the kitchen and the shed and decided to retire from cleaning."
          },
          {
            "text": "You don't tell him why you moved in."
          }
        ],
        "effects": {
          "friendship": {
            "al": 2,
            "bob": 1,
            "miranda": 1
          }
        }
      }
    ]
  },
  "generic_walking__v1_c2": {
    "title": "Walking group",
    "location": "Reception",
    "art": "Reception",
    "content": [],
    "choices": [
      {
        "text": "Walk around with Bob and Miranda",
        "outcome": [
          {
            "text": "You join Bob and Miranda, walking briskly around the park. They really are fast, for a pair of oldies. You feel a little out of place as they talk to each other in brusque sentences."
          },
          {
            "speaker": "BOB",
            "text": "No ducks today."
          },
          {
            "speaker": "MIRANDA",
            "text": "Mm."
          },
          {
            "speaker": "MIRANDA",
            "text": "Banksias are out."
          },
          {
            "speaker": "BOB",
            "text": "Yep."
          },
          {
            "text": "You take two laps around the reserve, and you try to keep up while suppressing the urge to pant."
          },
          {
            "text": "After two laps, the walk stops abruptly."
          },
          {
            "speaker": "BOB",
            "text": "Ah, good to get the heart going. Nice walking with you both."
          },
          {
            "text": "He turns and begins power-walking back to the retirement village. You, Miranda and Al walk back together at a more reasonable pace."
          }
        ],
        "effects": {
          "friendship": {
            "al": 1,
            "bob": 1,
            "miranda": 1
          }
        }
      },
      {
        "text": "Sit with Al",
        "outcome": [
          {
            "text": "You sit next to Al, who chats away. He points out a handsome robin, though he's not sure which species it is - pink or rose."
          },
          {
            "speaker": "AL",
            "text": "Now there's a good looking young fellow. Set of pipes on him, too!"
          },
          {
            "text": "As if listening, the robin lets of a whistling tittle. You don't think tittle is a word, but that's the best you can describe it."
          },
          {
            "text": "Al asks you superficial questions and you return them."
          },
          {
            "text": "You learn that Al has lived in Summer Hills for the last two years."
          },
          {
            "speaker": "AL",
            "text": "Never owned a house - kept my money in stocks. So when the last lease ended, I took a look in the kitchen and the shed and decided to retire from cleaning."
          },
          {
            "text": "You don't tell him why you moved in."
          }
        ],
        "effects": {
          "friendship": {
            "al": 2,
            "bob": 1,
            "miranda": 1
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
        "text": "The concert is tonight. The café has the feeling of a place pretending to be normal. Pablo says the food will be ready. Al says there better be enough room for his fans. Bob straightens up the rows of chairs."
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
      },
      {
        "text": "Later, the light has changed."
      },
      {
        "text": "A quiet concert night - delete, the player has to attend concert. It's the only one they have to attend."
      }
    ],
    "terminalEffects": {
      "counters": {
        "spent_time_alone": 1
      }
    }
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
    "variants": [
      {
        "when": {
          "week": 4
        },
        "content": [
          {
            "text": "You stay in and make toast. The trolley squeaks past, on time."
          }
        ],
        "choices": [],
        "terminalEffects": {
          "counters": {
            "spent_time_alone": 1
          }
        }
      }
    ],
    "terminalEffects": {
      "counters": {
        "spent_time_alone": 1
      }
    }
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
    "variants": [
      {
        "when": {
          "minCounter": {
            "spent_time_alone": 8
          }
        },
        "content": [
          {
            "text": "You make tea. The kettle works. The door can stay closed."
          },
          {
            "text": "You notice, tonight, that closing it is something you do a lot."
          }
        ],
        "choices": [],
        "terminalEffects": {
          "counters": {
            "spent_time_alone": 1
          }
        }
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
        ],
        "choices": [],
        "terminalEffects": {
          "counters": {
            "spent_time_alone": 1
          }
        }
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
        "choices": [],
        "terminalEffects": {
          "counters": {
            "spent_time_alone": 1
          }
        }
      },
      {
        "when": {
          "week": 4
        },
        "content": [
          {
            "text": "You read a magazine in your apartment."
          }
        ],
        "choices": [],
        "terminalEffects": {
          "counters": {
            "spent_time_alone": 1
          }
        }
      }
    ],
    "terminalEffects": {
      "counters": {
        "spent_time_alone": 1
      }
    }
  }
};
