// Village-wide shared and apartment scenes.
export const GENERIC_SCENES = {
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
          "notFlag": "walking_intro_seen",
          "anyFlag": [
            "met_al",
            "jean_carried_it_alone"
          ]
        },
        "content": [
          {
            "text": "The walking group gathers by reception, and a brief discussion leads to a decision that the park would be nice today."
          },
          {
            "text": "The group sets off, past the spot where big fig tree used to stand."
          },
          {
            "text": "Al sidles up to you."
          },
          {
            "speaker": "AL",
            "text": "Now, settle this for me. I'm trying to figure it out. Who's more handsome? Me, or Bob?"
          },
          {
            "text": "Bob looks embarrassed. Al looks delighted by this."
          }
        ],
        "choices": [
          {
            "text": "Al.",
            "outcome": [
              {
                "text": "Al laughs heartily, then slaps Bob on the shoulder."
              },
              {
                "speaker": "AL",
                "text": "Now, Bob, I still think you're a looker. Bet you broke your fair share of hearts back in the day."
              },
              {
                "text": "Bob gives Al grumpy look as he power-walks ahead, catching up to Miranda. Al looks at you, both amused and apologetic. AL. I can't help myself. The man's too much fun to tease. I'd feel worse, but he keeps coming back for more. Best buddy I ever had, the old codger."
              },
              {
                "text": "The group arrives at a small nature reserve. A colossal mountain ash shades a few benches and picnic tables. It's so tall that you worry about your balance for a moment as you look up at it."
              },
              {
                "speaker": "MIRANDA",
                "text": "Tallest flowering plant in the world."
              }
            ],
            "nextSceneId": "generic_walking__v1_c1",
            "flow": true,
            "effects": {
              "flags": {
                "walking_intro_seen": true
              }
            }
          },
          {
            "text": "\"\"Bob\"\" >Al laughs heartily, then slaps Bob on the shoulder.",
            "outcome": [
              {
                "speaker": "AL",
                "text": "He sure is a looker. Bet you broke your fair share of hearts back in the day."
              },
              {
                "text": "Bob gives Al grumpy look as he power-walks ahead, catching up to Miranda. Al looks at you, both amused and apologetic. AL. I can't help myself. The man's too much fun to tease. I'd feel worse, but he keeps coming back for more. Best buddy I ever had, the old codger."
              },
              {
                "text": "The group arrives at a small nature reserve. A colossal mountain ash shades a few benches and picnic tables. It's so tall that you worry about your balance for a moment as you look up at it."
              },
              {
                "speaker": "MIRANDA",
                "text": "Tallest flowering plant in the world."
              }
            ],
            "nextSceneId": "generic_walking__v1_c2",
            "flow": true,
            "effects": {
              "flags": {
                "walking_intro_seen": true
              }
            }
          }
        ]
      },
      {
        "when": {
          "flag": "walking_intro_seen",
          "notFlag": "walking_v2_seen"
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
            "text": "Outside the village, you see a woman with short, pink hair. Not young, but too young to live here. She gets in a dirty red hatchback with too many bumper stickers and drives away."
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
          },
          {
            "text": "- effects: Miranda friendship +1, Pablo friendship +1, Bob friendship +1."
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
          "flag": "walking_v2_seen",
          "notFlag": "walking_v3_seen"
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
          },
          {
            "text": "- effects: Jean friendship +1, Miranda friendship +1"
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
          "flag": "walking_v3_seen"
        },
        "content": [
          {
            "text": "The usual suspects set off on a walk to the nature reserve. You chat with Al, and then with Miranda, and you share a few words with Bob. You see a currawong hopping weightlessly between branches and a honeyeater effortfully hovering at the banksias. Walking back through the alley, the grey cat has become no less displeased with your presence."
          },
          {
            "text": "DUETS - two residents; the player only watches"
          }
        ],
        "choices": []
      }
    ]
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
            "text": "After two laps, Bob stops abruptly. BOB. Ah, good to get the heart going. Nice walking with you."
          },
          {
            "text": "He turns and begins power-walking back to the retirement village. You and Al walk back together at a more reasonable pace. - effects Al friendship +1, Bob friendship +2."
          }
        ]
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
            "text": "You don't tell him why you moved in. - effects Al friendship +2, Bob friendship +1."
          }
        ]
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
            "text": "You don't tell him why you moved in. - effects Al friendship +2, Miranda friendship +1."
          }
        ]
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
            "text": "She sees your confusion. MIRANDA. For salads, pies, anything. They can be bitter if you don't blanch them first."
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
            "text": "After two laps, the walk stops abruptly. BOB. Ah, good to get the heart going. Nice walking with you both."
          },
          {
            "text": "He turns and begins power-walking back to the retirement village. You, Miranda and Al walk back together at a more reasonable pace. - effects Al friendship +1, Bob friendship +1, Miranda friendship +1."
          }
        ]
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
            "text": "You don't tell him why you moved in. - effects Al friendship +2, Bob friendship +1, Miranda friendship +1."
          }
        ]
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
            "text": "After two laps, the walk stops abruptly. BOB. Ah, good to get the heart going. Nice walking with you both."
          },
          {
            "text": "He turns and begins power-walking back to the retirement village. You, Miranda and Al walk back together at a more reasonable pace. - effects Al friendship +1, Bob friendship +1, Miranda friendship +1."
          }
        ]
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
            "text": "You don't tell him why you moved in. - effects Al friendship +2, Bob friendship +1, Miranda friendship +1."
          }
        ]
      }
    ]
  },
  "generic_pre_show_breakfast": {
    "title": "Breakfast",
    "location": "Village Café",
    "art": "Village Café",
    "content": [
      {
        "text": "The concert is tonight. The café has the feeling of a place pretending to be normal. Pablo says the food will be ready. Al says there better be enough room for his fans. Bob straightens up the rows of chairs. - effect: Pablo friendship +1; Al friendship +1; Bob friendship +1"
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
        "text": "Later, the light has changed. - effect: marks: spent_time_alone"
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
  "apartment_miss_concert": {
    "title": "apartment_miss_concert",
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
          },
          "counters": {
            "spent_time_alone": 1
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
      },
      {
        "text": "- effect: marks: spent_time_alone"
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
  "apartment_afternoon": {
    "title": "A quiet afternoon",
    "location": "Your Apartment",
    "art": "Your Apartment",
    "content": [
      {
        "text": "You stay in your apartment while the light moves across the carpet. A mower starts, stops, then starts again."
      },
      {
        "text": "- effect: marks: spent_time_alone"
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
