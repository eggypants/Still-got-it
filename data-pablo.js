// Built mechanically from sol-scenes.json under the Verbatim Law.
// Authored scenes with content and no choices remain choice-free terminal beats;
// the engine supplies the standard Continue navigation control at runtime.
// The final café repeat requires Carmen’s recipe and the later café duet,
// encoding the source instruction that all preceding café beats have played.
export const PABLO_SCENES = {
  "generic_cafe_pablo": {
    "title": "Tea in the café",
    "location": "Village Café",
    "art": "Village Café",
    "content": [
      {
        "text": "Pablo is in the café explaining that a biscuit can be dry without being bad."
      }
    ],
    "choices": [
      {
        "text": "Stay for a while.",
        "outcome": [
          {
            "text": "Pablo sees you and comes over."
          },
          {
            "speaker": "PABLO",
            "text": "Tea? And a biscuit?"
          },
          {
            "text": "You ask if the biscuit has to be dry. Pablo laughs. PABLO. Cake, then."
          },
          {
            "text": "He brings your tea and a slice of almond cake."
          },
          {
            "speaker": "PABLO",
            "text": "Tarta de Santiago. Not dry."
          },
          {
            "text": "You take a bite. It's delicious."
          }
        ],
        "effects": {
          "friendship": {
            "pablo": 2
          }
        }
      },
      {
        "text": "Leave, preferably before someone talks to you.",
        "outcome": [
          {
            "text": "You leave. Before you do, Pablo catches your eye and smiles."
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
            "pablo": 3
          },
          "notFlag": "pablo_recipe_seen"
        },
        "content": [
          {
            "text": "The café is quiet, the mid-morning lull. Pablo is at the corner table, copying something onto a fresh card."
          },
          {
            "text": "The old card has gone soft at the folds. The handwriting on it is not his. You sit down."
          },
          {
            "speaker": "PABLO",
            "text": "My wife’s. Carmen. Twenty-nine years in the kitchen beside me, and she never once wrote a recipe down until I made her."
          },
          {
            "text": "He smooths the old card flat with two fingers."
          },
          {
            "speaker": "PABLO",
            "text": "Carmen’s rice."
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
          },
          {
            "speaker": "PABLO",
            "text": "I know what you are thinking. If she never measured it, why did I ask her to write it down?"
          },
          {
            "text": "You look at him. He smiles sadly."
          },
          {
            "speaker": "PABLO",
            "text": "It's because I knew I would want it when she was gone."
          }
        ],
        "choices": [
          {
            "text": "Why do you need make a copy of it?",
            "outcome": [
              {
                "text": "Pablo looks at the cards. PABLO. I don't know."
              },
              {
                "text": "He pauses for a while. You hear the clock on the wall ticking quietly. PABLO. I haven't made it since she died."
              },
              {
                "text": "He speaks quietly."
              },
              {
                "speaker": "PABLO",
                "text": "But if I do, I don't want to get a stain on her card."
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
            "text": "Do you ever make the recipe?",
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
                "text": "I make everything else. But not this one, so far."
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
                "text": "He stands up and places the cards into his wallet."
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
          "seenScene": "generic_cafe_pablo",
          "notMemory": "pablo_carmen_rice",
          "notFlag": "pablo_recipe_seen"
        },
        "content": [
          {
            "text": "Pablo sees you come in and starts your order before you sit down. He has decided what you want before you have. He is right."
          },
          {
            "text": "When he brings your tea and cake over, you ask him a question."
          }
        ],
        "choices": [
          {
            "text": "Do they pay you to work here?",
            "outcome": [
              {
                "text": "Pablo laughs."
              },
              {
                "speaker": "PABLO",
                "text": "Do they pay me? I wish!"
              },
              {
                "text": "He sits down at your table."
              },
              {
                "speaker": "PABLO",
                "text": "I started the cafe here because I needed something to do. I don't make a wage but I cover my costs. And I get to do what I love."
              },
              {
                "speaker": "PLAYER",
                "text": "Isn't this supposed to be a retirement village?"
              },
              {
                "text": "Pablo sighs, theatrically."
              },
              {
                "speaker": "PABLO",
                "text": "A chef can never truly retire while there are people to be fed."
              },
              {
                "text": "He winks at you, gets up, and goes back to the kitchen, whistling."
              }
            ],
            "effects": {
              "friendship": {
                "pablo": 1
              }
            }
          },
          {
            "text": "How did you know what I wanted?",
            "outcome": [
              {
                "text": "Pablo grins. PABLO. Experience. I have had many restaurants. I am a chef my whole life. I know what you want from the moment you sit down."
              },
              {
                "speaker": "PLAYER",
                "text": "What gives it away?"
              },
              {
                "text": "Pablo thinks for a moment."
              },
              {
                "speaker": "PABLO",
                "text": "I don't know. But I do know this: I was put on Earth to feed people. It's my passion. It's why I started a cafe in a retirement village. Even though I'm retired!"
              },
              {
                "text": "He laughs at this. So do you."
              },
              {
                "speaker": "PABLO",
                "text": "So maybe I was born with it."
              }
            ],
            "effects": {
              "friendship": {
                "pablo": 1
              }
            }
          }
        ]
      },
      {
        "when": {
          "seenScene": "pablo_miranda_corner_table",
          "memory": "pablo_carmen_rice",
          "flag": "pablo_recipe_seen"
        },
        "content": [
          {
            "text": "You walk into the café. Pablo brings your tea and cake. It is delicious, as ever."
          }
        ],
        "choices": []
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
      }
    ],
    "choices": [
      {
        "text": "Stay to help stack plates.",
        "outcome": [
          {
            "text": "You stack plates. Pablo washes. He hums something slightly sad, and you don't ask about it."
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
      },
      {
        "text": "Leave him be.",
        "outcome": [
          {
            "text": "You leave Pablo to it and head to your apartment."
          }
        ],
        "effects": {
          "friendship": {
            "pablo": 0
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
            "text": "Three hours before the feast, the kitchen is humming. Six pans bubble on burners and two ovens brown both beef and cakes. On the bench, propped against the salt, is the soft-folded card. Carmen's recipe."
          },
          {
            "text": "He is cooking something else. It smells amazing. He looks at you while stirring."
          },
          {
            "speaker": "PABLO",
            "text": "You want to stir? You can take over from me."
          },
          {
            "text": "You do. Pablo pulls some spices from a rack, and sets them on the bench. Miranda emerges from the back of the kitchen carrying freshly washed pots."
          },
          {
            "speaker": "PABLO",
            "text": "Is your arm tired yet? Here, give it to me."
          },
          {
            "text": "You hand the stirring back over to Pablo."
          },
          {
            "text": "You can't help but look over at the recipe card. Pablo notices. He pauses for a moment, looking at the recipe card, then goes back to stirring."
          }
        ],
        "choices": [
          {
            "text": "Why don't we make Carmen’s rice?",
            "requiresMemory": "pablo_carmen_rice",
            "outcome": [
              {
                "text": "Pablo looks at you, then the recipe card for a long time. Miranda has stopped moving pots, and is watching you both."
              },
              {
                "speaker": "PABLO",
                "text": "I don't know."
              },
              {
                "text": "He stirs. Then he stops. He sighs. PABLO. Okay. We will make Carmen's rice."
              },
              {
                "text": "He sounds defeated for a moment. But then he nods, and he gazes at the recipe card with warmth and appreciation. PABLO. Yes. Right!"
              },
              {
                "text": "He claps his hands, and begins directing you and Jean around the kitchen."
              },
              {
                "text": "He talks you through it. Miranda stirs. You watch the rice. When the moment comes, he tastes the pot, frowns, and adds a careful pinch of salt."
              },
              {
                "text": "At the feast, it goes in the centre of the table. Nobody else knows the significance, but everybody has seconds."
              },
              {
                "text": "Late in the evening, somebody puts a full plate in front of Pablo and tells him to sit down."
              },
              {
                "text": "He sits down. He looks, somehow, a tiny bit different. Tired from the day, but a little bit younger, maybe."
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
            "text": "Smells incredible. What is it\"",
            "outcome": [
              {
                "speaker": "PABLO",
                "text": "We have Gazpatcho. Pimientos. Croquetas. Here, take this to the table."
              },
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
            "text": "You should sit down. You’ve done enough.",
            "outcome": [
              {
                "speaker": "PABLO",
                "text": "A cook sits when the kitchen burns."
              },
              {
                "text": "He grins and hands you a spoon to lick, which is how he ends conversations."
              },
              {
                "text": "He is on his feet until midnight. The feast is a triumph. He eats later in the kitchen, standing up at the bench."
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
        "text": "The café is between meals. Pablo is making soup."
      },
      {
        "text": "A pot simmers on the stove."
      },
      {
        "speaker": "PABLO",
        "text": "People say they are not hungry. This is a temporary condition."
      },
      {
        "text": "He eats a spoonful standing at the pass, nods his approval, then wipes the bench and checks the bread."
      },
      {
        "text": "You tell him it looks good."
      },
      {
        "speaker": "PABLO",
        "text": "Then you will have some. Go, sit."
      },
      {
        "text": "You sit in the cafe. Pablo brings you a bowl of soup with crusty bread."
      },
      {
        "text": "You consider asking him about Carmen's recipe, but he goes back to the kitchen before you make up your mind."
      },
      {
        "text": "You finish the soup and head back to your apartment."
      }
    ],
    "choices": [],
    "variants": [
      {
        "when": {
          "flag": "pablo_cooked_carmens"
        },
        "content": [
          {
            "text": "At the small table by the window, Pablo has a plate in front of him. He yells out to the kitchen"
          },
          {
            "speaker": "PABLO",
            "text": "Too much paprika."
          },
          {
            "text": "Miranda's voice calls back."
          },
          {
            "speaker": "MIRANDA",
            "text": "Matter of opinion."
          },
          {
            "text": "He takes another forkful."
          },
          {
            "speaker": "PABLO",
            "text": "Also, very good."
          },
          {
            "text": "There is a pause."
          },
          {
            "speaker": "MIRANDA",
            "text": "Thank you."
          },
          {
            "text": "Pablo turns to you."
          },
          {
            "speaker": "PABLO",
            "text": "Sit."
          },
          {
            "text": "You sit. He cuts a piece of omelette with the side of his fork, puts it on a side plate and hands it to you."
          },
          {
            "speaker": "PABLO",
            "text": "Try - it's good."
          },
          {
            "text": "- effect: Pablo friendship +1"
          }
        ],
        "choices": []
      }
    ]
  }
};
