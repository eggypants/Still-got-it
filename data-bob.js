// Bob — arc owner file. Belief: 'Strength means carrying everything yourself.'
// Crossroads: the veterans’ reunion (week 3, Sunday afternoon).
// He can talk about Vietnam. He cannot talk about June.
// This file is the EXEMPLAR arc pattern: recurring scene → banded variant →
// memory → Crossroads with observer base + gated pressure point → convergence
// lines in the concert scene (data-rhonda.js) + ending lines (engine.js).
export const BOB_SCENES = {
  "generic_workshop_bob": {
    "title": "Workshop",
    "location": "Workshop",
    "art": "Workshop",
    "content": [
      {
        "text": "Bob is fixing a shelf with the focus of someone defusing a bomb. He nods when you come in. After a while, he hands you a screwdriver without asking."
      },
      {
        "speaker": "BOB",
        "text": "Hold that there, would you?"
      }
    ],
    "choices": [
      {
        "text": "Take the screwdriver.",
        "outcome": [
          {
            "text": "You hold the bracket while Bob tightens the shelf. He does not explain what you are doing. Somehow, you do it correctly."
          },
          {
            "speaker": "BOB",
            "text": "Good."
          },
          {
            "text": "From Bob, this appears to be a speech."
          }
        ],
        "effects": {
          "friendship": {
            "bob": 1
          }
        }
      },
      {
        "text": "Ask what he’s fixing.",
        "outcome": [
          {
            "speaker": "BOB",
            "text": "Shelf."
          },
          {
            "text": "He tests it with one hand. It does not move."
          },
          {
            "speaker": "BOB",
            "text": "Wasn’t broken. Loose is different."
          },
          {
            "text": "He hands you the screwdriver anyway. Apparently you have been recruited."
          }
        ],
        "effects": {
          "friendship": {
            "bob": 1
          }
        }
      }
    ],
    "variants": [
      {
        "when": {
          "minFriendship": {
            "bob": 2
          },
          "notFlag": "bob_photo_seen"
        },
        "content": [
          {
            "text": "Bob has the toolbox open, looking for a smaller screwdriver."
          },
          {
            "text": "There is a photograph taped inside the lid. A woman stands in front of a rose bed, squinting at the camera, mid-laugh."
          },
          {
            "text": "Bob sees you seeing it."
          },
          {
            "text": "He does not close the lid. He does not explain it either."
          },
          {
            "speaker": "BOB",
            "text": "June."
          },
          {
            "text": "He finds the screwdriver."
          },
          {
            "speaker": "BOB",
            "text": "Grew those from cuttings. Whole bed. People said it couldn’t be done in that soil."
          },
          {
            "text": "He tightens something that does not need tightening."
          },
          {
            "speaker": "BOB",
            "text": "Pass us that clamp."
          }
        ],
        "choices": [
          {
            "text": "Pass him the clamp.",
            "outcome": [
              {
                "text": "You pass him the clamp. The two of you work until the light goes."
              },
              {
                "text": "He closes the toolbox lid gently, the way you’d close a door on someone sleeping."
              }
            ],
            "effects": {
              "friendship": {
                "bob": 2
              },
              "memories": [
                "bob_june_roses"
              ],
              "flags": {
                "bob_photo_seen": true
              }
            }
          },
          {
            "text": "“She has a great smile.”",
            "outcome": [
              {
                "text": "Bob looks at the photograph for a moment."
              },
              {
                "speaker": "BOB",
                "text": "She did."
              },
              {
                "text": "He picks up the clamp himself."
              },
              {
                "text": "You stay anyway. He seems to prefer it."
              }
            ],
            "effects": {
              "friendship": {
                "bob": 1
              },
              "memories": [
                "bob_june_roses"
              ],
              "flags": {
                "bob_photo_seen": true
              }
            }
          }
        ]
      },
      {
        "when": {
          "seenScene": "generic_workshop_bob"
        },
        "content": [
          {
            "text": "Bob is at the bench. He slides a screwdriver toward you before you ask."
          },
          {
            "text": "The two of you work on whatever is broken this week. Not much gets said. Nothing needs to be."
          }
        ],
        "choices": [
          {
            "text": "Work beside him.",
            "outcome": [
              {
                "text": "The job is small and fiddly. Bob handles the fiddly part. You handle the small part."
              },
              {
                "speaker": "BOB",
                "text": "That’ll do."
              }
            ],
            "effects": {
              "friendship": {
                "bob": 1
              }
            }
          }
        ]
      }
    ]
  },
  "bob_reunion": {
    "title": "The bus at two",
    "location": "Reception",
    "art": "Reception",
    "content": [
      {
        "text": "A small bus idles outside reception. A cardboard sign in the window reads 7 RAR — ANNUAL."
      },
      {
        "text": "Three men in pressed shirts are already aboard, arguing about the route."
      },
      {
        "text": "Bob stands near the door in his good jacket, holding his hat."
      },
      {
        "text": "He checks his watch. He does not board."
      },
      {
        "text": "At two exactly, the driver looks at him. Bob shakes his head, once."
      },
      {
        "text": "The bus pulls out. Bob watches it to the end of the drive, then goes inside."
      }
    ],
    "choices": [
      {
        "text": "Let him be.",
        "outcome": [
          {
            "text": "He passes you in the corridor later and nods, the same as any other day."
          },
          {
            "text": "The jacket is back in the wardrobe by teatime."
          }
        ],
        "effects": {
          "flags": {
            "bob_reunion_missed": true
          }
        }
      }
    ],
    "variants": [
      {
        "when": {
          "minFriendship": {
            "bob": 5
          }
        },
        "content": [
          {
            "text": "A small bus idles outside reception. A cardboard sign in the window reads 7 RAR — ANNUAL."
          },
          {
            "text": "Bob is sitting on the bench by the door in his good jacket, hat on his knee. His shoes are polished."
          },
          {
            "text": "He nods at the seat next to him. You sit."
          },
          {
            "speaker": "BOB",
            "text": "Went every year, when June was here. She’d iron the shirt twice. Said the first time was for the shirt and the second was for the man in it."
          },
          {
            "text": "The driver toots the horn, friendly."
          },
          {
            "speaker": "BOB",
            "text": "Haven’t been since."
          },
          {
            "text": "He turns the hat over in his hands."
          },
          {
            "speaker": "BOB",
            "text": "Blokes’ll ask where she is. And I’ll have to say it out loud."
          }
        ],
        "choices": [
          {
            "text": "“June ironed that shirt twice so you could go. Not so you could sit on a bench.”",
            "requiresMemory": "bob_june_roses",
            "outcome": [
              {
                "text": "Bob looks at you."
              },
              {
                "text": "It is a long look, and you hold it."
              },
              {
                "speaker": "BOB",
                "text": "That’s a low blow."
              },
              {
                "text": "He stands up and puts his hat on."
              },
              {
                "speaker": "BOB",
                "text": "She’d have liked you."
              },
              {
                "text": "He boards the bus. The men in pressed shirts make room without making a fuss."
              },
              {
                "text": "The bus pulls out. Someone inside is already laughing."
              }
            ],
            "effects": {
              "friendship": {
                "bob": 3
              },
              "flags": {
                "bob_went_reunion": true
              }
            }
          },
          {
            "text": "“Your mates will be glad to see you, whatever you say.”",
            "outcome": [
              {
                "speaker": "BOB",
                "text": "They would."
              },
              {
                "text": "He nods slowly, agreeing with you the way people agree with weather forecasts."
              },
              {
                "text": "The driver toots again. Bob raises a hand: go on."
              },
              {
                "text": "The bus pulls out."
              },
              {
                "speaker": "BOB",
                "text": "Maybe next year."
              },
              {
                "text": "He says it like a man closing a gate."
              }
            ],
            "effects": {
              "friendship": {
                "bob": 1
              },
              "flags": {
                "bob_reunion_missed": true
              }
            }
          },
          {
            "text": "“Want a hand in the workshop instead?”",
            "outcome": [
              {
                "text": "Bob looks at the bus, then at you."
              },
              {
                "speaker": "BOB",
                "text": "Yeah. Righto."
              },
              {
                "text": "The two of you fix a chair that did not need fixing."
              },
              {
                "text": "He is quiet company. Quieter than usual."
              },
              {
                "text": "The good jacket stays on all afternoon."
              }
            ],
            "effects": {
              "friendship": {
                "bob": 1
              },
              "flags": {
                "bob_reunion_missed": true
              }
            }
          }
        ]
      }
    ]
  },
  "bob_reunion_consequence": {
    "title": "The good jacket",
    "location": "Workshop",
    "art": "Workshop",
    "content": [
      {
        "text": "The workshop smells of oil and cut timber. A paper op-shop bag sits beside Bob's bench."
      },
      {
        "text": "His good jacket is folded on top. One sleeve has slipped over the side."
      },
      {
        "speaker": "BOB",
        "text": "Still good. Someone’ll use it."
      },
      {
        "text": "He repairs a cupboard hinge with more care than the cupboard deserves."
      },
      {
        "text": "When he takes the rubbish out, the jacket is not in the bag."
      },
      {
        "text": "It is hanging on the back of his chair."
      }
    ],
    "choices": [
      {
        "text": "Hand him the screws.",
        "outcome": [
          {
            "text": "You pass the screws one by one. Bob fits the hinge, opens the cupboard, closes it, and nods."
          },
          {
            "speaker": "BOB",
            "text": "That'll hold."
          }
        ],
        "effects": {
          "friendship": {
            "bob": 1
          }
        }
      }
    ],
    "variants": [
      {
        "when": {
          "flag": "bob_went_reunion"
        },
        "content": [
          {
            "text": "Bob is at the workshop bench with a folded sheet of paper and a stubby pencil."
          },
          {
            "text": "The good jacket is on the chair behind him. There is dust on the cuffs from the trip."
          },
          {
            "speaker": "BOB",
            "text": "Need you to check something."
          },
          {
            "text": "He pushes the paper over with two fingers."
          },
          {
            "speaker": "BOB",
            "text": "Spelling."
          },
          {
            "text": "The poem is in block letters. June's name is at the top. There are no spelling mistakes you can see."
          }
        ],
        "choices": [
          {
            "text": "Hand him the pencil.",
            "outcome": [
              {
                "text": "You mark one comma you are not sure about. Bob studies it as if it matters."
              },
              {
                "speaker": "BOB",
                "text": "Right. Good."
              },
              {
                "text": "He folds the poem once and puts it in the jacket pocket."
              }
            ],
            "effects": {
              "friendship": {
                "bob": 1
              }
            }
          }
        ]
      }
    ]
  }

};
