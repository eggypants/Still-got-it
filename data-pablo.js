// Pablo — arc owner file. Belief: 'Love means providing until there is nothing left to give.'
// Crossroads: the harvest feast (week 3, day 20 evening).
// Key image: Carmen’s rice — seasoned by taste, never exactly the same, never once wrong.
export const PABLO_SCENES = {
  "generic_cafe_pablo": {
    "title": "Tea in the café",
    "location": "Village Café",
    "art": "Village Café",
    "content": [
      {
        "text": "Pablo is in the café explaining that a biscuit can be dry without being bad. He seems to consider this an important distinction."
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
            "pablo": 1
          }
        }
      }
    ],
    "variants": [
      {
        "when": {
          "minFriendship": {
            "pablo": 2
          },
          "notFlag": "pablo_recipe_seen"
        },
        "content": [
          {
            "text": "The café is quiet, the mid-morning lull. Pablo is at the corner table, copying something onto a fresh card."
          },
          {
            "text": "The old card has gone soft at the folds. The handwriting on it is not his."
          },
          {
            "speaker": "PABLO",
            "text": "My wife's. Carmen. Twenty-nine years in the kitchen beside me, and she never once wrote a recipe down until I made her."
          },
          {
            "text": "He smooths the old card flat with two fingers."
          },
          {
            "speaker": "PABLO",
            "text": "Carmen's rice."
          },
          {
            "text": "He does not look up."
          },
          {
            "speaker": "PABLO",
            "text": "She never measured. She tasted, frowned, added a little more, tasted again. Forty years, never the same twice, never once wrong."
          },
          {
            "text": "He finishes the copy, checks it against the original, and then keeps the original."
          }
        ],
        "choices": [
          {
            "text": "“Do you ever make it?”",
            "outcome": [
              {
                "speaker": "PABLO",
                "text": "No."
              },
              {
                "text": "He puts both cards in his wallet, behind the photographs."
              },
              {
                "speaker": "PABLO",
                "text": "I make everything else."
              },
              {
                "text": "He stands, and by the time he reaches the counter he is himself again, asking if you have eaten, deciding you have not."
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
            "text": "Say nothing and let him finish.",
            "outcome": [
              {
                "text": "He finishes the copy in silence. You drink your tea."
              },
              {
                "speaker": "PABLO",
                "text": "You are good company."
              },
              {
                "text": "He says it as a verdict, the way he says a soup needs lemon."
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
      },
      {
        "when": {
          "seenScene": "generic_cafe_pablo"
        },
        "content": [
          {
            "text": "Pablo sees you come in and starts your order before you sit down. He has decided what you like."
          },
          {
            "text": "He is right, which is the annoying part."
          }
        ]
      }
    ]
  },
  "pablo_feast": {
    "title": "The harvest feast",
    "location": "Village Café",
    "art": "Village Café",
    "content": [
      {
        "text": "The café tables have been pushed together and covered. The whole village is here, and the food keeps coming."
      },
      {
        "text": "Pablo cooks, serves, refills, and laughs at everything from a standing position."
      },
      {
        "text": "It is a wonderful night. Everyone says so."
      },
      {
        "text": "He eats afterwards, alone in the kitchen, off the corner of the bench."
      },
      {
        "text": "Whatever is on his plate, it is not what was on the menu, and it is not Carmen’s rice either."
      }
    ],
    "choices": [
      {
        "text": "Stay to help stack plates.",
        "outcome": [
          {
            "text": "You stack plates. Pablo washes. He hums something Spanish and slightly sad, and if you asked him about it he would say it is a song about a donkey."
          },
          {
            "text": "The recipe card stays in his wallet."
          }
        ],
        "effects": {
          "friendship": {
            "pablo": 1
          },
          "flags": {
            "pablo_substituted": true
          }
        }
      }
    ],
    "variants": [
      {
        "when": {
          "minFriendship": {
            "pablo": 5
          }
        },
        "content": [
          {
            "text": "Three hours before the feast, the kitchen is under control, because it is Pablo’s kitchen."
          },
          {
            "text": "Six pans, two ovens, a list in his head and nowhere else."
          },
          {
            "text": "On the bench, propped against the salt, is the soft-folded card. He has not touched it."
          },
          {
            "text": "He is cooking something else. It is going to be excellent."
          },
          {
            "speaker": "PABLO",
            "text": "You can stir, if you keep the elbow moving. My kitchen, my rules."
          },
          {
            "text": "He says it warmly. He means it completely."
          }
        ],
        "choices": [
          {
            "text": "Make Carmen’s rice.",
            "requiresMemory": "pablo_carmen_rice",
            "outcome": [
              {
                "text": "Pablo looks at the card for a long time."
              },
              {
                "speaker": "PABLO",
                "text": "If it is wrong, it is on you."
              },
              {
                "text": "It is not a joke, and then it is."
              },
              {
                "text": "He talks you through it. Jean stirs. You watch the rice. When the moment comes, he tastes the pot, frowns, and adds a careful pinch of salt."
              },
              {
                "text": "At the feast, it goes in the centre of the table. He tells nobody what it is."
              },
              {
                "text": "Everybody has seconds."
              },
              {
                "text": "Late in the evening, somebody puts a full plate in front of Pablo and tells him to sit down."
              },
              {
                "text": "He sits down."
              }
            ],
            "effects": {
              "friendship": {
                "pablo": 3
              },
              "flags": {
                "pablo_cooked_carmens": true
              }
            }
          },
          {
            "text": "“Smells incredible. What can I carry?”",
            "outcome": [
              {
                "text": "He loads your arms with bread baskets, delighted."
              },
              {
                "text": "The feast is faultless. The card stays propped against the salt, untouched, and goes back into the wallet at midnight."
              }
            ],
            "effects": {
              "friendship": {
                "pablo": 1
              },
              "flags": {
                "pablo_substituted": true
              }
            }
          },
          {
            "text": "“You should sit down. You’ve done enough.”",
            "outcome": [
              {
                "speaker": "PABLO",
                "text": "A cook sits when the kitchen burns."
              },
              {
                "text": "He grins and hands you a spoon to lick, which is how he ends conversations."
              },
              {
                "text": "He is on his feet until midnight. The feast is a triumph. He eats standing up."
              }
            ],
            "effects": {
              "flags": {
                "pablo_substituted": true
              }
            }
          }
        ]
      }
    ]
  },
  "pablo_feast_consequence": {
    "title": "Soup for supper",
    "location": "Village Café",
    "art": "Village Café",
    "content": [
      {
        "text": "The café is between meals, which means Pablo has made soup."
      },
      {
        "text": "A pot simmers on the stove. The recipe card is tucked in his wallet, visible when he reaches for a cloth."
      },
      {
        "text": "He tops up two bowls before anyone asks."
      },
      {
        "speaker": "PABLO",
        "text": "People say they are not hungry. This is a temporary condition."
      },
      {
        "text": "He eats a spoonful standing at the pass, then wipes the bench and checks the bread."
      },
      {
        "text": "The card stays where it is."
      }
    ],
    "choices": [
      {
        "text": "Carry two bowls.",
        "outcome": [
          {
            "text": "You carry two bowls to the nearest table. Pablo follows with bread, butter, pepper, and opinions about pepper."
          },
          {
            "speaker": "PABLO",
            "text": "Good. Sit before someone gives you a job."
          }
        ],
        "effects": {
          "friendship": {
            "pablo": 1
          }
        }
      }
    ],
    "variants": [
      {
        "when": {
          "flag": "pablo_cooked_carmens"
        },
        "content": [
          {
            "text": "At the small table by the window, Pablo has a plate in front of him."
          },
          {
            "text": "Someone else made it. The rice is not his, and the peas have been added with confidence he would not have approved in the kitchen."
          },
          {
            "text": "He is sitting down."
          },
          {
            "speaker": "PABLO",
            "text": "Too much paprika."
          },
          {
            "text": "He takes another forkful."
          },
          {
            "speaker": "PABLO",
            "text": "Also, very good."
          },
          {
            "text": "His wallet is on the table. The recipe card is not out."
          }
        ],
        "choices": [
          {
            "text": "Sit with him.",
            "outcome": [
              {
                "text": "You sit. He cuts a piece of omelette with the side of his fork and leaves it on your plate without quite looking."
              },
              {
                "speaker": "PABLO",
                "text": "You are too thin. Or maybe I am retired badly."
              }
            ],
            "effects": {
              "friendship": {
                "pablo": 1
              }
            }
          }
        ]
      }
    ]
  }

};
