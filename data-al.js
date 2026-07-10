// Generated from the approved Still Got It script for Chunk 2.
export const AL_SCENES = {
  "generic_cards_al": {
    "title": "Cards",
    "location": "Community Lounge",
    "art": "Community Lounge",
    "variantId": "generic_cards_al.v1",
    "oneShot": true,
    "content": [
      {
        "text": "Al deals the cards with confidence. Bob sits across from him. Al sees you enter."
      },
      {
        "speaker": "AL",
        "text": "Deal you in?"
      }
    ],
    "choices": [
      {
        "text": "Play a hand or two.",
        "outcome": [
          {
            "text": "You sit and Al deals you a hand. You play a round. Al wins."
          },
          {
            "speaker": "AL",
            "text": "History likes a handsome winner."
          },
          {
            "text": "You play again. This time, you win."
          },
          {
            "speaker": "AL",
            "text": "Oh. Shouldn’t have been so cocky."
          },
          {
            "text": "He deals again and asks about you. You give him the brief version, ending with your move into Summer Hills."
          },
          {
            "speaker": "AL",
            "text": "Well, a group of oldies sitting around playing cards isn’t helping the optics."
          },
          {
            "text": "Bob wins the round."
          },
          {
            "speaker": "BOB",
            "text": "You’re out, Al."
          },
          {
            "text": "Al grasps his chest as though mortally wounded."
          },
          {
            "speaker": "AL",
            "text": "No! Not again."
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
      },
      {
        "text": "Say you’d rather watch.",
        "outcome": [
          {
            "speaker": "AL",
            "text": "Suit yourself! Sit over there, though."
          },
          {
            "text": "He motions towards Bob."
          },
          {
            "speaker": "AL",
            "text": "Then you can peek at Bob’s cards and wink at me if they’re any good."
          },
          {
            "text": "Bob grunts. You sit where you cannot see either man’s cards and watch them play."
          }
        ],
        "effects": {
          "friendship": {
            "al": 1,
            "bob": 1
          },
          "flags": {
            "met_al": true,
            "met_bob": true
          }
        }
      }
    ],
    "variants": [
      {
        "id": "generic_cards_al.v2",
        "oneShot": true,
        "when": {
          "minFriendship": {
            "al": 2
          },
          "seenVariant": "generic_cards_al.v1"
        },
        "content": [
          {
            "text": "Al walks in late, singing a song."
          },
          {
            "speaker": "AL",
            "text": "Sorry I’m late — distracted. Who’s playing?"
          }
        ],
        "choices": [
          {
            "text": "I’ll bite. What was distracting you?",
            "outcome": [
              {
                "text": "Al sings the answer."
              },
              {
                "speaker": "AL",
                "text": "Just a guitar-playing man…"
              },
              {
                "text": "Jean looks up from the couch."
              },
              {
                "speaker": "JEAN",
                "text": "What did I say about singing in the lounge?"
              },
              {
                "speaker": "AL",
                "text": "Only if it’s a good song. Yes, ma’am."
              },
              {
                "text": "He shuffles the cards and says he found old band photographs."
              }
            ],
            "effects": {
              "flags": {
                "met_al": true,
                "met_jean": true,
                "met_bob": true
              }
            },
            "nextSceneId": "generic_cards_al_band_choice"
          },
          {
            "text": "Sit down and play.",
            "outcome": [
              {
                "text": "You play some cards. You win some. Al wins more. He sings the whole time, which eventually drives Jean away. Bob wins the most."
              }
            ],
            "effects": {
              "friendship": {
                "al": 1,
                "bob": 1
              },
              "flags": {
                "met_al": true,
                "met_bob": true,
                "met_jean": true
              }
            }
          }
        ]
      },
      {
        "id": "generic_cards_al.v3",
        "oneShot": true,
        "when": {
          "seenScene": "generic_cards_al",
          "seenVariant": "generic_cards_al.v2"
        },
        "content": [
          {
            "text": "Al is sitting on the arm of a couch with an acoustic guitar, staring into the middle distance. Bob reads the newspaper at the other end."
          }
        ],
        "choices": [
          {
            "text": "Are you going to play us a tune, Al?",
            "outcome": [
              {
                "text": "Your voice snaps him back. The distant expression vanishes behind his cheeky grin."
              },
              {
                "speaker": "AL",
                "text": "I’m not much on the guitar. But I make up for it with my devilish handsomeness."
              },
              {
                "text": "He strums a familiar old song. Bob’s ears begin to turn red."
              }
            ],
            "effects": {
              "flags": {
                "met_al": true,
                "met_bob": true
              }
            },
            "nextSceneId": "generic_cards_al_song_choice"
          },
          {
            "text": "Say nothing and hope he doesn’t start singing.",
            "outcome": [
              {
                "text": "Your hopes are quickly dashed. Al begins serenading the bookshelf like an old crooner. Bob silently meets your eyes."
              },
              {
                "text": "Later, Bob passes you in the hall."
              },
              {
                "speaker": "BOB",
                "text": "Just you wait till I find out who got him that guitar."
              }
            ],
            "effects": {
              "friendship": {
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
      {
        "id": "generic_cards_al.v4",
        "oneShot": true,
        "content": [
          {
            "text": "Al, Bob and Jean are playing cards in the lounge. Jean looks up at you with mock pleading."
          },
          {
            "speaker": "JEAN",
            "text": "I stole your spot. Forgive me!"
          },
          {
            "speaker": "AL",
            "text": "There’s room for everyone. More the merrier!"
          },
          {
            "text": "You sit and join the game. Jean wins."
          },
          {
            "speaker": "AL",
            "text": "Beginner’s luck!"
          }
        ],
        "choices": [
          {
            "text": "Stay for the game.",
            "outcome": [
              {
                "text": "You play until the next hand becomes the last one, twice."
              }
            ],
            "effects": {
              "friendship": {
                "al": 1,
                "bob": 1,
                "jean": 1
              },
              "flags": {
                "met_al": true,
                "met_bob": true,
                "met_jean": true
              }
            }
          }
        ],
        "when": {
          "seenVariant": "generic_cards_al.v3"
        }
      }
    ]
  },
  "generic_cards_al_band_choice": {
    "title": "Cards",
    "location": "Community Lounge",
    "art": "Community Lounge",
    "hidden": true,
    "content": [],
    "choices": [
      {
        "text": "Sounds like a plan.",
        "outcome": [
          {
            "text": "You play a few rounds. When Bob leaves, Al returns with an old photo album."
          },
          {
            "text": "The first photograph is unmistakably Al: young, a seventies haircut, an enormous collar, leaning on a brown station wagon."
          },
          {
            "text": "On the next page four men play on a pub stage, sweaty, dirty and happy."
          },
          {
            "speaker": "AL",
            "text": "Don’t remember which pub that was. We played anywhere they’d let us."
          },
          {
            "text": "He points out Darren, Mike and Kev, his best mate. In another photograph Kev has an arm around a blonde woman while he and Al pull faces at the camera."
          }
        ],
        "effects": {
          "friendship": {
            "al": 2
          },
          "memories": [
            "al_band_days"
          ],
          "flags": {
            "met_al": true,
            "met_bob": true
          }
        }
      },
      {
        "text": "I don’t give a shit about your band, old man.",
        "outcome": [
          {
            "text": "The room goes silent until you smile. Al bursts out laughing."
          },
          {
            "speaker": "AL",
            "text": "Sounds about right, but I’m going to show you anyway."
          },
          {
            "text": "After the game he brings out the album: four young men on pub stages, sweaty, untidy and happy. He names Darren, Mike and Kev, his best mate."
          }
        ],
        "effects": {
          "friendship": {
            "al": 3
          },
          "memories": [
            "al_band_days"
          ],
          "flags": {
            "met_al": true,
            "met_bob": true
          }
        }
      }
    ]
  },
  "generic_cards_al_song_choice": {
    "title": "Cards",
    "location": "Community Lounge",
    "art": "Community Lounge",
    "hidden": true,
    "content": [],
    "choices": [
      {
        "text": "Interrupt Al and ask what he was thinking about.",
        "outcome": [
          {
            "text": "The strings twang as Al stops. Bob looks at you with silent thanks."
          },
          {
            "speaker": "AL",
            "text": "Now that’s a personal question. What business do you have in my musings?"
          },
          {
            "text": "The confidence does not quite reach his face. After a silence, he smiles."
          },
          {
            "speaker": "AL",
            "text": "I was just thinking about love songs."
          }
        ],
        "effects": {
          "flags": {
            "met_al": true,
            "met_bob": true
          }
        },
        "nextSceneId": "generic_cards_al_love_question"
      },
      {
        "text": "Join in singing with Al.",
        "outcome": [
          {
            "text": "You know the song and sing along. Al smiles and harmonises on the chorus."
          },
          {
            "text": "Bob folds his newspaper and marches away. At the bridge, Al sings the emotional lines softly with his eyes closed."
          }
        ],
        "effects": {
          "friendship": {
            "al": 2
          },
          "flags": {
            "al_love": true,
            "met_al": true,
            "met_bob": true
          }
        }
      }
    ]
  },
  "generic_cards_al_love_question": {
    "title": "Cards",
    "location": "Community Lounge",
    "art": "Community Lounge",
    "hidden": true,
    "content": [],
    "choices": [
      {
        "text": "Have you ever been in love?",
        "outcome": [
          {
            "text": "Al looks caught. As you hold his gaze, he deflates a little."
          },
          {
            "speaker": "AL",
            "text": "A few times. Not many."
          },
          {
            "text": "He says he never married. He chose money to travel on, and travelled through India, China, Hong Kong and Japan."
          },
          {
            "speaker": "AL",
            "text": "That and music were my loves."
          },
          {
            "text": "He strikes a cheerful chord and starts an upbeat song in French. You tap along."
          }
        ],
        "effects": {
          "friendship": {
            "al": 1,
            "bob": 1
          },
          "flags": {
            "al_love": true,
            "met_al": true,
            "met_bob": true
          }
        }
      },
      {
        "text": "Tell Al your favourite love song.",
        "outcome": [
          {
            "text": "Al’s face lights up. He finds the chords and you sing it together. Bob’s ears become very red before he marches away with his newspaper."
          }
        ],
        "effects": {
          "friendship": {
            "al": 1
          },
          "flags": {
            "met_al": true,
            "met_bob": true
          }
        }
      }
    ]
  }
};
