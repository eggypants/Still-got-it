// NPC-to-NPC relationship scenes.
export const DUET_SCENES = {
  "pablo_miranda_tea": {
    "title": "Morning tea",
    "location": "Village Café",
    "art": "Village Café",
    "content": [
      {
        "text": "The café is busy, with every small table taken except the one by the window."
      },
      {
        "text": "Pablo stands near the counter with a teapot in one hand."
      },
      {
        "speaker": "PABLO",
        "text": "Strong, no sugar."
      },
      {
        "text": "He places a cup in front of Miranda before she asks."
      },
      {
        "text": "Miranda looks at it."
      },
      {
        "speaker": "MIRANDA",
        "text": "You remembered."
      },
      {
        "speaker": "PABLO",
        "text": "People tell you things all day. It is polite to keep one or two."
      },
      {
        "text": "Miranda holds the cup a moment before drinking."
      },
      {
        "speaker": "MIRANDA",
        "text": "Most people don’t."
      },
      {
        "speaker": "PABLO",
        "text": "Most people are busy being interesting."
      }
    ],
    "choices": [
      {
        "text": "Join them.",
        "outcome": [
          {
            "text": "You sit with them. Pablo asks what you take in your tea. Miranda says nothing, but listens to the answer."
          },
          {
            "text": "Ten minutes later, Pablo is telling a story about a restaurant dishwasher that exploded on New Year’s Eve."
          }
        ],
        "effects": {
          "friendship": {
            "pablo": 1,
            "miranda": 1
          },
          "memories": [
            "pablo_miranda_tea"
          ],
          "flags": {
            "saw_pablo_miranda_tea": true
          }
        }
      },
      {
        "text": "Leave them to their tea.",
        "outcome": [
          {
            "text": "You take your cup to another table."
          },
          {
            "text": "When you glance back, Pablo is talking with his hands. Miranda is correcting him. Neither of them seems to mind."
          }
        ],
        "effects": {
          "memories": [
            "pablo_miranda_tea"
          ],
          "flags": {
            "saw_pablo_miranda_tea": true
          }
        }
      }
    ]
  },
  "pablo_miranda_seedlings": {
    "title": "Seedlings",
    "location": "Gardens",
    "art": "Gardens",
    "content": [
      {
        "text": "Miranda is standing beside three crates of seedlings."
      },
      {
        "text": "Pablo arrives with a trolley."
      },
      {
        "speaker": "MIRANDA",
        "text": "I didn’t ask for help."
      },
      {
        "speaker": "PABLO",
        "text": "No. That is why I brought the trolley, not a marching band."
      },
      {
        "text": "She looks at the crates. Then at the trolley."
      },
      {
        "speaker": "MIRANDA",
        "text": "Fine. But don’t bruise the leaves."
      },
      {
        "speaker": "PABLO",
        "text": "I have carried wedding cakes through kitchens smaller than this path."
      },
      {
        "text": "Miranda steps aside."
      }
    ],
    "choices": [
      {
        "text": "Help with the crates.",
        "outcome": [
          {
            "text": "The three of you move the seedlings into the shade."
          },
          {
            "text": "Miranda inspects every leaf afterwards. Pablo lets her."
          },
          {
            "speaker": "MIRANDA",
            "text": "Acceptable."
          },
          {
            "speaker": "PABLO",
            "text": "From you, I take that as applause."
          }
        ],
        "effects": {
          "friendship": {
            "pablo": 1,
            "miranda": 1
          },
          "memories": [
            "miranda_accepts_help"
          ],
          "flags": {
            "saw_pablo_miranda_seedlings": true
          }
        }
      },
      {
        "text": "Watch from the bench.",
        "outcome": [
          {
            "text": "You sit on the bench and watch them move the crates one at a time, with Miranda stopping twice to check the leaves."
          },
          {
            "text": "By the end, Pablo is smiling and Miranda is pretending not to."
          }
        ],
        "effects": {
          "memories": [
            "miranda_accepts_help"
          ],
          "flags": {
            "saw_pablo_miranda_seedlings": true
          }
        }
      }
    ]
  },
  "pablo_miranda_corner_table": {
    "title": "Corner table",
    "location": "Village Café",
    "art": "Village Café",
    "content": [
      {
        "text": "Pablo is sitting at the corner table with two cups of tea."
      },
      {
        "text": "Miranda arrives exactly three minutes later."
      },
      {
        "speaker": "MIRANDA",
        "text": "You are in my seat."
      },
      {
        "speaker": "PABLO",
        "text": "I am saving your seat."
      },
      {
        "text": "Miranda looks at the second cup."
      },
      {
        "speaker": "MIRANDA",
        "text": "That is not the same thing."
      },
      {
        "speaker": "PABLO",
        "text": "No. It is nicer."
      },
      {
        "text": "She sits."
      }
    ],
    "choices": [
      {
        "text": "Pretend not to notice.",
        "outcome": [
          {
            "text": "You choose another table."
          },
          {
            "text": "Behind you, Miranda tells Pablo he has used the good cups. He says some occasions call for them."
          }
        ],
        "effects": {
          "flags": {
            "saw_pablo_miranda_corner_table": true
          }
        }
      },
      {
        "text": "Say hello.",
        "outcome": [
          {
            "text": "You say hello. Pablo waves you over immediately."
          },
          {
            "text": "Miranda says, ‘Only if you don’t encourage him.’"
          },
          {
            "text": "You sit anyway."
          }
        ],
        "effects": {
          "friendship": {
            "pablo": 1,
            "miranda": 1
          },
          "flags": {
            "saw_pablo_miranda_corner_table": true
          }
        }
      }
    ]
  },
  "jean_al_heckle_1": {
    "title": "Writing circle",
    "location": "Library",
    "art": "Library",
    "content": [
      {
        "text": "The writing circle has three notebooks open and one plate of biscuits already reduced to crumbs."
      },
      {
        "text": "Al is standing near the returns trolley with a page in his hand. Jean sits at the table with her pencil ready."
      },
      {
        "speaker": "AL",
        "text": "I have prepared something brief, devastating, and available for publication at reasonable rates."
      },
      {
        "text": "Jean eyes him skeptically."
      },
      {
        "speaker": "JEAN",
        "text": "Go on, then."
      },
      {
        "text": "Al puts one hand to his chest and reads two lines about moonlight, youth, and a very busy heart."
      },
      {
        "speaker": "JEAN",
        "text": "I like it. It's veering on a cologne advertisement with that imagery, but I'd say it's suitable for a student newspaper."
      },
      {
        "speaker": "AL",
        "text": "Ah, I'll take it as high praise from a former student activist."
      },
      {
        "text": "Al starts singing a cheesy rendition of Solidarity Forever, prompting Jean to swat him with her notebook."
      }
    ],
    "choices": [
      {
        "text": "Stay until the biscuits run out.",
        "outcome": [
          {
            "text": "You stay while Jean makes him read the middle line twice, then crosses out one adjective without asking."
          },
          {
            "speaker": "JEAN",
            "text": "Leave that bit alone. It’s doing enough."
          },
          {
            "speaker": "AL",
            "text": "Cruel woman. Correct, but cruel."
          }
        ],
        "effects": {
          "friendship": {
            "jean": 1,
            "al": 1
          },
          "flags": {
            "saw_jean_al_1": true
          }
        }
      }
    ]
  },
  "jean_al_heckle_2": {
    "title": "Request list",
    "location": "Community Lounge",
    "art": "Community Lounge",
    "content": [
      {
        "text": "Al is in the lounge with a library book open on his knee. Jean watches from the armchair opposite, shoes off, one foot tucked under her."
      },
      {
        "text": "Al puts the book down and sighs."
      },
      {
        "speaker": "JEAN",
        "text": "Bad?"
      },
      {
        "speaker": "AL",
        "text": "Dull. Nobody swoons. Nobody even threatens to swoon."
      },
      {
        "speaker": "JEAN",
        "text": "Not every love story needs swooning."
      },
      {
        "text": "Al makes a vague dissatisfied sound."
      },
      {
        "text": "Jean reaches for the concert request list on the low table. Several songs have been crossed out, then written back in smaller handwriting."
      },
      {
        "speaker": "JEAN",
        "text": "This one is sweet."
      },
      {
        "speaker": "AL",
        "text": "That's my song!"
      },
      {
        "text": "He starts singing it out loud, one hand pressed to his chest."
      },
      {
        "speaker": "JEAN",
        "text": "Stop! I don't like it anymore."
      },
      {
        "text": "Jean is laughing when she pulls the list back toward herself."
      }
    ],
    "choices": [
      {
        "text": "Peer over and look at the list.",
        "outcome": [
          {
            "text": "You peer over while Jean taps one of the quieter titles with her pencil."
          },
          {
            "speaker": "AL",
            "text": "I can do that one. But it's not as lively."
          },
          {
            "speaker": "JEAN",
            "text": "Good. A proper love song would suit you better, anyway."
          }
        ],
        "effects": {
          "friendship": {
            "jean": 1,
            "al": 1
          },
          "flags": {
            "saw_jean_al_2": true
          }
        }
      }
    ]
  },
  "jean_al_heckle_3": {
    "title": "Folded chairs",
    "location": "Hall",
    "art": "Hall",
    "content": [
      {
        "text": "The hall smells faintly of floor polish. You are helping Jean set out folding chairs near the stage."
      },
      {
        "text": "Jean is checking the space at the end of a row when Al arrives with a red rose wrapped in damp paper towel."
      },
      {
        "speaker": "AL",
        "text": "For your morale."
      },
      {
        "text": "Jean looks at the rose, then at him. Her expression softens."
      },
      {
        "speaker": "JEAN",
        "text": "Thank you. It's lovely. Put it in the vase by the stage, then come and help with the chairs."
      },
      {
        "speaker": "AL",
        "text": "You drive a hard bargain. That's what I always admired about you."
      },
      {
        "text": "He puts the rose in a chipped vase by the stage and comes back to the chair stack."
      }
    ],
    "choices": [
      {
        "text": "Carry on with the chairs.",
        "outcome": [
          {
            "text": "You, Jean, and Al work along the row, opening the chairs and nudging them into place."
          },
          {
            "text": "When the last row is straight, Jean picks up the vase and smells the rose."
          },
          {
            "speaker": "JEAN",
            "text": "Thank you. It’s beautiful."
          },
          {
            "text": "Al tips his hat to her."
          }
        ],
        "effects": {
          "friendship": {
            "jean": 1,
            "al": 1
          },
          "flags": {
            "saw_jean_al_3": true
          }
        }
      }
    ]
  },
  "rhonda_bob_coaching_1": {
    "title": "Reading practice",
    "location": "Hall",
    "art": "Hall",
    "content": [
      {
        "text": "The hall is empty except for a lectern, two chairs, and a microphone left switched off on the piano."
      },
      {
        "text": "Bob stands behind the lectern with a folded page. Rhonda sits in the front row, hands still in her lap, listening rather than holding court."
      },
      {
        "speaker": "RHONDA",
        "text": "Again from the first line. Don't push it. Just let it reach the back."
      },
      {
        "speaker": "BOB",
        "text": "That's what you said last time."
      },
      {
        "speaker": "RHONDA",
        "text": "And last time you nearly did it. I am trying to be consistent."
      },
      {
        "text": "Bob reads the opening lines. He pauses at the comma this time and looks up once before continuing."
      },
      {
        "speaker": "RHONDA",
        "text": "There. That was better. You looked at us for half a second."
      },
      {
        "speaker": "BOB",
        "text": "Felt longer."
      },
      {
        "speaker": "RHONDA",
        "text": "It always does. Again, and don’t drop your head at the end. Let us see your face."
      }
    ],
    "choices": [
      {
        "text": "Stay by the door.",
        "outcome": [
          {
            "text": "You stay by the door while Bob reads it once more. Rhonda gives no story, no flourish, only two quiet notes about breath and pace."
          },
          {
            "speaker": "BOB",
            "text": "That enough?"
          },
          {
            "speaker": "RHONDA",
            "text": "For today. We'll do it again tomorrow."
          }
        ],
        "effects": {
          "friendship": {
            "rhonda": 1,
            "bob": 1
          },
          "flags": {
            "saw_rhonda_bob_1": true
          }
        }
      }
    ]
  },
  "rhonda_bob_coaching_2": {
    "title": "Quiet rehearsal",
    "location": "Hall",
    "art": "Hall",
    "content": [
      {
        "text": "The hall is set for rehearsal, but the back corner is quiet. A lectern has been turned toward the wall."
      },
      {
        "text": "Bob holds a printed page. Rhonda stands beside him with a pencil in one hand."
      },
      {
        "speaker": "BOB",
        "text": "This one's harmless enough."
      },
      {
        "speaker": "RHONDA",
        "text": "Good. Let's hear it then."
      },
      {
        "text": "Bob reads a short bush verse about rain on a tin roof. He keeps his eyes on the paper until the last line."
      },
      {
        "speaker": "RHONDA",
        "text": "Look up at the full stop. You don't need to smile."
      },
      {
        "speaker": "BOB",
        "text": "Wasn't likely."
      },
      {
        "speaker": "RHONDA",
        "text": "That's alright. Just let us see you."
      }
    ],
    "choices": [
      {
        "text": "Let them rehearse.",
        "outcome": [
          {
            "text": "You leave them to it. Rhonda's next note is quiet enough that only Bob hears it."
          },
          {
            "text": "Bob reads the last line again and waits half a second longer before folding the page."
          }
        ],
        "effects": {
          "friendship": {
            "rhonda": 1,
            "bob": 1
          },
          "flags": {
            "saw_rhonda_bob_2": true
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
            "text": "The hall is set for rehearsal, but the back corner is quiet. A lectern has been turned toward the wall."
          },
          {
            "text": "Bob holds a folded sheet of paper. Rhonda moves one chair aside so he has room to stand."
          },
          {
            "speaker": "BOB",
            "text": "June wrote this for the roses. Feels strange taking it out of the garden."
          },
          {
            "speaker": "RHONDA",
            "text": "Then don’t take it far."
          },
          {
            "text": "Bob looks at the page for a while before he begins."
          },
          {
            "text": "He reads the first two lines too quickly, stops, and presses his thumb against the fold."
          },
          {
            "speaker": "RHONDA",
            "text": "Start again. There’s no hurry."
          },
          {
            "text": "He starts again. This time he lets the first line finish before moving on."
          },
          {
            "speaker": "RHONDA",
            "text": "That’s it."
          },
          {
            "text": "Near the end, his voice catches. Rhonda waits. Bob keeps his eyes on the paper and finishes the last line."
          },
          {
            "speaker": "BOB",
            "text": "Again?"
          },
          {
            "speaker": "RHONDA",
            "text": "If you want."
          },
          {
            "speaker": "BOB",
            "text": "Yeah."
          }
        ],
        "choices": [
          {
            "text": "Leave them to it.",
            "outcome": [
              {
                "text": "You step back before Bob begins again. Rhonda stays beside him, one hand resting on the back of the chair."
              }
            ],
            "effects": {
              "friendship": {
                "rhonda": 1,
                "bob": 1
              },
              "flags": {
                "saw_rhonda_bob_2": true
              }
            }
          }
        ]
      }
    ]
  },
  "pablo_miranda_gift": {
    "title": "Red gold",
    "location": "Village Café",
    "art": "Village Café",
    "content": [
      {
        "text": "The café is between rushes. Pablo is wiping the counter when Miranda comes in holding a small, neatly wrapped package."
      },
      {
        "text": "She speaks almost gruffly as she hands it to him."
      },
      {
        "speaker": "MIRANDA",
        "text": "For you."
      },
      {
        "speaker": "PABLO",
        "text": "What is this?"
      },
      {
        "speaker": "MIRANDA",
        "text": "Don't make a song and dance. Just open it."
      },
      {
        "text": "Miranda turns to leave, but Pablo, now smiling bemusedly, tells her to wait. He peels the paper from the package, revealing a glass jar of saffron."
      },
      {
        "speaker": "PABLO",
        "text": "Azafrán! You're an angel."
      },
      {
        "text": "Pablo pulls her into an embrace. Miranda looks uncomfortable, but allows it."
      },
      {
        "speaker": "MIRANDA",
        "text": "Remembered you used it for the paella last month. I had some on hand, it's nothing special."
      },
      {
        "speaker": "PABLO",
        "text": "Nothing special! It's a treasure. Oro rojo — red gold! Thank you, my dear."
      }
    ],
    "choices": [
      {
        "text": "Give them the room.",
        "outcome": [
          {
            "text": "You look away politely while Miranda straightens her cardigan and Pablo holds the jar up to the light."
          }
        ],
        "effects": {
          "friendship": {
            "pablo": 1,
            "miranda": 1
          },
          "flags": {
            "saw_pablo_miranda_gift": true
          }
        }
      }
    ]
  }
};
