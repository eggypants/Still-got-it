// Built mechanically from sol-scenes.json under the Verbatim Law.
// The source's four card-room versions are merged in variant_index order.
// Internal progression flags implement the source when_text without adding story text.
// Authored scenes with content and no choices remain choice-free terminal beats;
// the engine supplies the standard Continue navigation control at runtime.
export const AL_SCENES = {
  "generic_cards_al": {
    "title": "Cards",
    "location": "Community Lounge",
    "art": "Community Lounge",
    "content": [
      {
        "text": "Al deals the cards with the confidence. Bob sits across from him. Al sees you enter."
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
            "text": "You play again. This time, you win. AL. Oh. Shouldn't have been so cocky."
          },
          {
            "text": "He deals the cards again."
          },
          {
            "speaker": "AL",
            "text": "So, what makes you think it's okay to beat an old man?"
          },
          {
            "text": "You look at him. You're the same age."
          },
          {
            "text": "He laughs. AL. Alright. Tell me about yourself."
          },
          {
            "text": "You give him the spiel. It's brief, and it ends with moving into a retirement village. Where people go to die. AL. Oof. That's grim. Well, a group of oldies sitting around playing cards isn't helping the optics."
          },
          {
            "text": "Bob wins the round."
          },
          {
            "speaker": "BOB",
            "text": "You're out, Al."
          },
          {
            "text": "Al grasps his chest as though mortally wounded. AL. No! Not again."
          },
          {
            "text": "He turns to you."
          },
          {
            "speaker": "AL",
            "text": "You were right. Put me out of my misery."
          }
        ],
        "effects": {
          "friendship": {
            "al": 2,
            "bob": 1
          }
        }
      },
      {
        "text": "Say you'd rather watch.",
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
            "text": "Then you can peek at Bob's cards and wink at me if they're any good."
          },
          {
            "text": "Bob grunts disapprovingly. You sit where you can't see either man's cards and watch them play."
          }
        ],
        "effects": {
          "friendship": {
            "al": 1,
            "bob": 1
          }
        }
      }
    ],
    "variants": [
      {
        "when": {
          "minFriendship": {
            "al": 2
          },
          "notFlag": "al_driver_seen"
        },
        "content": [
          {
            "text": "Al walks in late, singing a song."
          },
          {
            "speaker": "AL",
            "text": "Sorry I'm late - distracted. Who's playing?"
          }
        ],
        "choices": [
          {
            "text": "I'll bite. What was distracting you?",
            "outcome": [
              {
                "text": "Al sings the answer."
              },
              {
                "speaker": "AL",
                "text": "Just a guitar-playing man.."
              },
              {
                "text": "Jean, who is sitting on the couch, reading, looks up. JEAN. What did I say about singing in the lounge? AL. Only if it's a good song. Yes ma'am."
              },
              {
                "text": "He shuffles the cards and speaks the rest of his answer. AL. A trip down memory lane. I played in a band back in the ancient times. Rock 'n' roll."
              },
              {
                "text": "Bob looks impatiently at the cards. Al starts to deal."
              },
              {
                "speaker": "AL",
                "text": "Tell you what. Let's play this game, then I'll show you some old photos I dug out today."
              }
            ],
            "nextSceneId": "generic_cards_al__v1_c1",
            "flow": true
          },
          {
            "text": "Sit down and play.",
            "outcome": [
              {
                "text": "You sit down and play some cards."
              },
              {
                "text": "You win some. Al wins more. He sings the whole time, which drives Jean to go read in her apartment."
              },
              {
                "text": "In the end, Bob wins the most."
              }
            ],
            "effects": {
              "friendship": {
                "al": 1,
                "bob": 1
              },
              "flags": {
                "al_driver_seen": true
              }
            }
          }
        ]
      },
      {
        "when": {
          "seenScene": "generic_cards_al",
          "notFlag": "al_guitar_seen"
        },
        "content": [
          {
            "text": "Al isn't playing cards today. He's sitting on the arm of one of the couches, holding an acoustic guitar. He's not playing it, he's staring into the middle distance, daydreaming about something. Bob sits on the other end of the couch, reading the newspaper."
          }
        ],
        "choices": [
          {
            "text": "Are you gonna play us a tune, Al?",
            "outcome": [
              {
                "text": "Your words seem to snap Al back to reality. The distant expression vanishes and he flashes you his cheeky grin."
              },
              {
                "speaker": "AL",
                "text": "I'm not much on the guitar. But I make up for it with my devilish handsomeness."
              },
              {
                "text": "He strums some simple chords and starts singing an old classic. You notice Bob's ears turning red."
              }
            ],
            "nextSceneId": "generic_cards_al__v2_c1",
            "flow": true
          },
          {
            "text": "Say nothing and hope he doesn't start singing.",
            "outcome": [
              {
                "text": "Your hopes are quickly dashed as Al snaps out of his daydream and begins thumbing a chord and starts serenading the bookshelf like an old crooner. Bob silently meets your eyes. You share a look of mild disgust."
              },
              {
                "text": "Later, you pass Bob in the hallway."
              },
              {
                "speaker": "BOB",
                "text": "Just you wait till I find out who got him that guitar."
              },
              {
                "text": "You laugh, but Bob doesn't."
              }
            ],
            "effects": {
              "friendship": {
                "bob": 1
              },
              "flags": {
                "al_guitar_seen": true
              }
            }
          }
        ]
      },
      {
        "when": {
          "seenScene": "generic_cards_al",
          "flag": "al_guitar_seen"
        },
        "content": [
          {
            "text": "Al, Bob and Jean are playing cards in the lounge. As you come in, Jean looks up at you with mock-pleading."
          },
          {
            "speaker": "JEAN",
            "text": "I stole your spot. Forgive me!"
          },
          {
            "speaker": "AL",
            "text": "There's room for everyone. More the merrier!"
          },
          {
            "text": "You sit and join the card game. Jean wins."
          },
          {
            "speaker": "AL",
            "text": "Beginner's luck!"
          }
        ],
        "choices": []
      }
    ]
  },
  "generic_cards_al__v1_c1": {
    "title": "Cards",
    "location": "Community Lounge",
    "art": "Community Lounge",
    "content": [],
    "choices": [
      {
        "text": "Sounds like a plan.",
        "outcome": [
          {
            "text": "You play a few rounds, then Bob calls it a night. Al disappears for a moment and returns with an old photo album. He opens it."
          },
          {
            "text": "The first photo is unmistakeable Al. He's young, with a seventies haircut, a shirt with a huge collar that's unbuttoned a little too far. He's leaning on a brown station wagon, grinning."
          },
          {
            "text": "He turns the page. You see a photo of four men on a stage - guitarist, bassist, drummer, and Al, the frontman. They look sweaty, dirty and happy."
          },
          {
            "speaker": "AL",
            "text": "Don't remember which pub that was - we played anywhere they'd let us."
          },
          {
            "text": "He points at the guitarist. AL. Darren. Would play a seven-minute solo if you let him. And Mike on the drums. He ended up in an outback religious cult in the 80s. I think he's got nine kids. Probably a hundred grandkids by now."
          },
          {
            "text": "He points at the bassist."
          },
          {
            "speaker": "AL",
            "text": "And Kev. My best mate. Never drank a drop in his life. Still the wildest out of the four of us."
          },
          {
            "text": "You ask if he misses it. He looks at you."
          },
          {
            "speaker": "AL",
            "text": "The groupies were fun."
          },
          {
            "text": "He raises an eyebrow suggestively."
          },
          {
            "speaker": "AL",
            "text": "But no, I don't miss it. Good memories though."
          },
          {
            "text": "He turns the page. It's a photo of Al and Kev, pulling ugly faces for the camera. Kev's arm is around a cute blonde girl with a cigarette dangling from her lip."
          }
        ],
        "effects": {
          "friendship": {
            "al": 2
          },
          "memories": [
            "als_band"
          ],
          "flags": {
            "al_driver_seen": true
          }
        }
      },
      {
        "text": "I don't give a shit about your band, old man.",
        "outcome": [
          {
            "text": "The room goes silent. Everyone looks at you, not sure if you're serious. Then you crack a smile. Al bursts out laughing."
          },
          {
            "speaker": "AL",
            "text": "Sounds about right, but I'm gonna show you anyway."
          },
          {
            "text": "You play a few rounds, then Bob calls it a night. Al disappears for a moment and returns with an old photo album. He opens it."
          },
          {
            "text": "The first photo is unmistakeable Al. He's young, with a seventies haircut, a shirt with a huge collar that's unbuttoned a little too far. He's leaning on a brown station wagon, grinning."
          },
          {
            "text": "He turns the page. You see a photo of four men on a stage - guitarist, bassist, drummer, and Al, the frontman. They look sweaty, dirty and happy."
          },
          {
            "speaker": "AL",
            "text": "Don't remember which pub that was - we played anywhere they'd let us."
          },
          {
            "text": "He points at the guitarist. AL. Darren. Would play a seven-minute solo if you let him. And Mike on the drums. He ended up in an outback religious cult in the 80s. I think he's got nine kids. Probably a hundred grandkids by now."
          },
          {
            "text": "He points at the bassist."
          },
          {
            "speaker": "AL",
            "text": "And Kev. My best mate. Never drank a drop in his life. Still the wildest out of the four of us."
          },
          {
            "text": "You ask if he misses it. He looks at you."
          },
          {
            "speaker": "AL",
            "text": "The groupies were fun."
          },
          {
            "text": "He raises an eyebrow suggestively."
          },
          {
            "speaker": "AL",
            "text": "But no, I don't miss it. Good memories though."
          },
          {
            "text": "He turns the page. It's a photo of Al and Kev, pulling ugly faces for the camera. Kev's arm is around a a cute blonde girl with a cigarette dangling from her lip."
          }
        ],
        "effects": {
          "friendship": {
            "al": 3
          },
          "memories": [
            "als_band"
          ],
          "flags": {
            "al_driver_seen": true
          }
        }
      }
    ]
  },
  "generic_cards_al__v2_c1": {
    "title": "Cards",
    "location": "Community Lounge",
    "art": "Community Lounge",
    "content": [],
    "choices": [
      {
        "text": "Interrupt Al and ask him what he was thinking about.",
        "outcome": [
          {
            "text": "The strings twang suddenly as Al stops mid-phrase. Bob looks at you with silent thanks."
          },
          {
            "text": "Al looks around the room for a second, as though weighing his audience."
          },
          {
            "speaker": "AL",
            "text": "Now that's a personal question. What business do you have in my musings?"
          },
          {
            "text": "His face doesn't sell the confidence in his voice. The silence hangs for a moment before Al summons a smile and a wink."
          },
          {
            "speaker": "AL",
            "text": "I was just thinking about love songs."
          }
        ],
        "nextSceneId": "generic_cards_al__v2_c1_c1",
        "flow": true
      },
      {
        "text": "Join in singing with Al.",
        "outcome": [
          {
            "text": "You know the song. You sing along with Al. He smiles widely at this and even harmonises with you on the chorus. In the corner, Bob's ears turn a deep crimson, and as you reach the second chorus, he folds his newspaper, puts it under one arm, and marches away without saying a word."
          },
          {
            "text": "As you come to the bridge, Al does an exaggerated decrescendo, and sings the emotional parts of the song softly with his eyes closed."
          },
          {
            "text": "You know it's just a performance to entertain you, but it makes you wonder."
          }
        ],
        "effects": {
          "friendship": {
            "al": 2
          },
          "flags": {
            "al_guitar_seen": true,
            "Al_love": true
          }
        }
      }
    ]
  },
  "generic_cards_al__v2_c1_c1": {
    "title": "Cards",
    "location": "Community Lounge",
    "art": "Community Lounge",
    "content": [],
    "choices": [
      {
        "text": "Have you ever been in love?",
        "outcome": [
          {
            "text": "You ask the question. Al looks at you like a deer in the headlights. And as your gaze holds his, he seems to deflate a little."
          },
          {
            "speaker": "AL",
            "text": "A few times. Not many."
          },
          {
            "text": "You wonder why this charming, flirtatious man is so struck by the question. You notice Bob has looked up from his newspaper."
          },
          {
            "speaker": "AL",
            "text": "I never married or settled down, if that's what you're asking. Thought I could either have a wife and kids or have money to burn. Retire young and spend savings travelling. So that's what I did."
          },
          {
            "text": "The charming grin creeps back onto his sun-spotted face."
          },
          {
            "speaker": "AL",
            "text": "Let me tell you. I met plenty of women travelling the world. India, China, Hong Kong, Japan. That and music were my loves."
          },
          {
            "text": "He strikes a major seventh chord - a cheeky, cheerful sound - and starts singing an upbeat song in French. You don't know what it means, but you tap along."
          }
        ],
        "effects": {
          "friendship": {
            "al": 1,
            "bob": 1
          },
          "flags": {
            "al_guitar_seen": true,
            "Al_love": true
          }
        }
      },
      {
        "text": "Tell Al your favourite love song",
        "outcome": [
          {
            "text": "Al's face lights up in recognition. He strums a chord and launches in. You sing it together. Bob's ears become very red, and as you reach the second chorus, he folds his newspaper, puts it under one arm, and marches away without saying a word."
          }
        ],
        "effects": {
          "friendship": {
            "al": 1
          },
          "flags": {
            "al_guitar_seen": true
          }
        }
      }
    ]
  }
};
