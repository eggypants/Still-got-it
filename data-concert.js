// The Autumn Concert — the convergence scene. Owned by the GAME, not by any
// character. Every arc adds its conditional blocks here (success/failure pair)
// after the previous arc's pair, in ALL branches: base + both variants.
export const CONCERT_SCENES = {
  "rhonda_opening_night": {
    "title": "Autumn concert",
    "location": "Hall",
    "art": "Hall",
    "content": [
      {
        "text": "You find a seat near the back of the hall."
      },
      {
        "text": "The programme is folded crookedly. Someone has corrected Al’s name in pen."
      },
      {
        "text": "Al sings half a song and accepts applause as if it was overdue."
      },
      {
        "text": "Pablo serves food at intermission and tells three people the napkins are not decorative."
      },
      {
        "when": {
          "flag": "bob_went_reunion"
        },
        "text": "Bob stands with a folded page and reads a short poem about June and her roses. He does not rush it. When he sits down, nobody says anything, which is what he wanted."
      },
      {
        "when": {
          "notFlag": "bob_went_reunion"
        },
        "text": "Bob reads something short and safe. He survives it."
      },
      {
        "when": {
          "flag": "miranda_delegated"
        },
        "text": "The hall is full of flowers. Miranda grew almost none of them. She directed all of them, from a chair, and somebody has made her a cup of tea without being asked."
      },
      {
        "when": {
          "flag": "miranda_did_it_alone"
        },
        "text": "There are flowers on the stage from Miranda’s garden. She arranged them herself this morning. She watches from the end of a row and is asleep before Al’s second verse."
      },
      {
        "when": {
          "flag": "pablo_cooked_carmens"
        },
        "text": "Pablo’s intermission table has a rice dish at the centre. He tells nobody what it is. Everybody has seconds, and he watches them have seconds, sitting down."
      },
      {
        "when": {
          "flag": "pablo_substituted"
        },
        "text": "Pablo’s intermission table is generous and faultless. He eats standing up, topping up other people’s plates."
      },
      {
        "when": {
          "flag": "jean_let_go"
        },
        "text": "Jean sits three rows from the front with a programme folded in her lap and no clipboard anywhere near her. When Al misses a note, she laughs into her paper cup."
      },
      {
        "when": {
          "flag": "jean_carried_it_alone"
        },
        "text": "Jean runs the raffle from a card table by the door, one hand on the biscuit tin and the other tearing tickets from the roll."
      },
      {
        "text": "Then Rhonda steps onto the stage."
      },
      {
        "text": "She gets a laugh before the first page is turned."
      },
      {
        "text": "By the end, everyone is clapping."
      },
      {
        "text": "You clap too. It was a good night."
      }
    ],
    "choices": [
      {
        "text": "Clap with everyone else.",
        "outcome": [
          {
            "text": "Rhonda bows once, pleased with herself. Around you, people are already talking about next year."
          }
        ],
        "effects": {
          "friendship": {
            "rhonda": 1
          },
          "flags": {
            "attended_concert_uninvolved": true
          }
        }
      }
    ],
    "variants": [
      {
        "when": {
          "flag": "rhonda_night_before_success"
        },
        "content": [
          {
            "text": "The hall is full."
          },
          {
            "text": "Full, in this case, means twenty-five people, including three relatives visiting someone in the audience and one cleaner on her break."
          },
          {
            "text": "The show begins."
          },
          {
            "text": "Al sings half a song and flirts with the front row."
          },
          {
            "text": "Pablo serves food at intermission and pretends not to enjoy the praise."
          },
          {
            "when": {
              "flag": "bob_went_reunion"
            },
            "text": "Bob stands with a folded page and reads a short poem about June and her roses. He does not rush it. When he sits down, nobody says anything, which is what he wanted."
          },
          {
            "when": {
              "notFlag": "bob_went_reunion"
            },
            "text": "Bob reads something short and safe. He survives it."
          },
          {
            "when": {
              "flag": "miranda_delegated"
            },
            "text": "The hall is full of flowers. Miranda grew almost none of them. She directed all of them, from a chair, and somebody has made her a cup of tea without being asked."
          },
          {
            "when": {
              "flag": "miranda_did_it_alone"
            },
            "text": "There are flowers on the stage from Miranda’s garden. She arranged them herself this morning. She watches from the end of a row and is asleep before Al’s second verse."
          },
          {
            "when": {
              "flag": "pablo_cooked_carmens"
            },
            "text": "Pablo’s intermission table has a rice dish at the centre. He tells nobody what it is. Everybody has seconds, and he watches them have seconds, sitting down."
          },
          {
            "when": {
              "flag": "pablo_substituted"
            },
            "text": "Pablo’s intermission table is generous and faultless. He eats standing up, topping up other people’s plates."
          },
          {
            "when": {
              "flag": "jean_let_go"
            },
            "text": "Jean sits three rows from the front with a programme folded in her lap and no clipboard anywhere near her. When Al misses a note, she laughs into her paper cup."
          },
          {
            "when": {
              "flag": "jean_carried_it_alone"
            },
            "text": "Jean runs the raffle from a card table by the door, one hand on the biscuit tin and the other tearing tickets from the roll."
          },
          {
            "text": "Then Rhonda steps onto the stage."
          },
          {
            "text": "The room waits."
          },
          {
            "text": "For half a second, you think she might retreat."
          },
          {
            "text": "Then someone coughs."
          },
          {
            "text": "Rhonda looks out at the audience."
          },
          {
            "speaker": "RHONDA",
            "text": "If that was a review, I’ll ask you to save it for the interval."
          },
          {
            "text": "The room laughs."
          },
          {
            "text": "Not politely. Properly."
          },
          {
            "text": "She performs."
          },
          {
            "text": "She is alive up there."
          },
          {
            "text": "Afterwards, people crowd around her."
          },
          {
            "speaker": "AL",
            "text": "You were marvellous."
          },
          {
            "speaker": "PABLO",
            "text": "Next time, dinner and show."
          },
          {
            "text": "Rhonda looks at him."
          },
          {
            "speaker": "RHONDA",
            "text": "Next time?"
          },
          {
            "text": "She glances at you."
          },
          {
            "text": "Then she grins."
          },
          {
            "speaker": "RHONDA",
            "text": "Yes. Next time."
          },
          {
            "text": "Later, when the hall is almost empty, you find her folding programmes."
          },
          {
            "speaker": "PLAYER",
            "text": "You were good."
          },
          {
            "text": "Rhonda looks at you for a moment."
          },
          {
            "text": "Then she smiles."
          },
          {
            "speaker": "RHONDA",
            "text": "Wasn’t I?"
          }
        ],
        "choices": [
          {
            "text": "Stay and help stack chairs.",
            "outcome": [
              {
                "text": "You stack chairs until the hall is almost back to normal."
              },
              {
                "text": "Rhonda keeps one programme and folds it carefully into her bag."
              },
              {
                "speaker": "RHONDA",
                "text": "For the archive."
              },
              {
                "text": "She smiles."
              },
              {
                "speaker": "RHONDA",
                "text": "Or evidence. We’ll decide later."
              }
            ],
            "effects": {
              "friendship": {
                "rhonda": 4
              },
              "flags": {
                "rhonda_show_success": true
              }
            }
          }
        ]
      },
      {
        "when": {
          "anyFlag": [
            "rhonda_recruitment_seen",
            "concert_started",
            "rhonda_rehearsal_seen",
            "rhonda_night_before_failed"
          ]
        },
        "content": [
          {
            "text": "The hall is full."
          },
          {
            "text": "The programme says Rhonda will close the first half."
          },
          {
            "when": {
              "flag": "bob_went_reunion"
            },
            "text": "Bob stands with a folded page and reads a short poem about June and her roses. He does not rush it. When he sits down, nobody says anything, which is what he wanted."
          },
          {
            "when": {
              "notFlag": "bob_went_reunion"
            },
            "text": "Bob reads something short and safe. He survives it."
          },
          {
            "when": {
              "flag": "miranda_delegated"
            },
            "text": "The hall is full of flowers. Miranda grew almost none of them. She directed all of them, from a chair, and somebody has made her a cup of tea without being asked."
          },
          {
            "when": {
              "flag": "miranda_did_it_alone"
            },
            "text": "There are flowers on the stage from Miranda’s garden. She arranged them herself this morning. She watches from the end of a row and is asleep before Al’s second verse."
          },
          {
            "when": {
              "flag": "pablo_cooked_carmens"
            },
            "text": "Pablo’s intermission table has a rice dish at the centre. He tells nobody what it is. Everybody has seconds, and he watches them have seconds, sitting down."
          },
          {
            "when": {
              "flag": "pablo_substituted"
            },
            "text": "Pablo’s intermission table is generous and faultless. He eats standing up, topping up other people’s plates."
          },
          {
            "when": {
              "flag": "jean_let_go"
            },
            "text": "Jean sits three rows from the front with a programme folded in her lap and no clipboard anywhere near her. When Al misses a note, she laughs into her paper cup."
          },
          {
            "when": {
              "flag": "jean_carried_it_alone"
            },
            "text": "Jean runs the raffle from a card table by the door, one hand on the biscuit tin and the other tearing tickets from the roll."
          },
          {
            "text": "But when her turn comes, Jean steps onto the stage instead."
          },
          {
            "speaker": "JEAN",
            "text": "Rhonda’s asked me to read something on her behalf."
          },
          {
            "text": "There is a polite shuffle through the room."
          },
          {
            "text": "Jean reads well. Everyone claps."
          },
          {
            "text": "Rhonda does not appear."
          },
          {
            "text": "Later, you find her in the corridor outside the hall, dressed beautifully, holding her script."
          },
          {
            "speaker": "PLAYER",
            "text": "Rhonda."
          },
          {
            "text": "She smiles before you can say anything."
          },
          {
            "speaker": "RHONDA",
            "text": "Don’t look tragic. That’s my job."
          }
        ],
        "choices": [
          {
            "text": "What happened?",
            "outcome": [
              {
                "speaker": "RHONDA",
                "text": "Nothing dramatic. Very disappointing of me."
              },
              {
                "text": "She folds the script."
              },
              {
                "speaker": "RHONDA",
                "text": "I simply discovered I’m done."
              },
              {
                "text": "The next time you visit her apartment, the feather boa is gone."
              },
              {
                "text": "So are the old programmes."
              }
            ],
            "effects": {
              "friendship": {
                "rhonda": -1
              },
              "flags": {
                "rhonda_show_failed": true
              }
            }
          },
          {
            "text": "There’s still time.",
            "outcome": [
              {
                "text": "Rhonda shakes her head."
              },
              {
                "speaker": "RHONDA",
                "text": "No, darling."
              },
              {
                "text": "Softly:"
              },
              {
                "speaker": "RHONDA",
                "text": "There isn’t."
              },
              {
                "text": "The next time you visit her apartment, the feather boa is gone."
              },
              {
                "text": "So are the old programmes."
              }
            ],
            "effects": {
              "friendship": {
                "rhonda": -1
              },
              "flags": {
                "rhonda_show_failed": true
              }
            }
          },
          {
            "text": "I’m sorry.",
            "outcome": [
              {
                "text": "Rhonda looks toward the hall."
              },
              {
                "text": "Someone inside laughs at Al."
              },
              {
                "speaker": "RHONDA",
                "text": "Don’t be. They’re having a lovely time."
              },
              {
                "text": "She looks back at you."
              },
              {
                "speaker": "RHONDA",
                "text": "That’s something, isn’t it?"
              },
              {
                "text": "The next time you visit her apartment, the feather boa is gone."
              },
              {
                "text": "So are the old programmes."
              }
            ],
            "effects": {
              "friendship": {
                "rhonda": 0
              },
              "flags": {
                "rhonda_show_failed": true
              }
            }
          }
        ]
      }
    ]
  }
};
