// Built mechanically from sol-scenes.json under the Verbatim Law.
// Binding instruction: the dismissive garden choice sets miranda_dismissed.
// Authored scenes with content and no choices remain choice-free terminal beats;
// the engine supplies the standard Continue navigation control at runtime.
export const MIRANDA_SCENES = {
  "generic_garden_miranda": {
    "title": "Garden volunteers",
    "location": "Gardens",
    "art": "Gardens",
    "content": [
      {
        "text": "The garden is warm and full of small jobs. Miranda gives instructions without raising her voice. Nobody selected her to be in charge, but they follow her lead anyway."
      },
      {
        "text": "She looks at the garden beds, then at you, then at a tray of seedlings that clearly has plans for your morning."
      },
      {
        "speaker": "MIRANDA",
        "text": "Can you follow instructions?"
      },
      {
        "text": "A few people remain milling around the garden. Miranda looks at you."
      },
      {
        "speaker": "MIRANDA",
        "text": "There's a garden competition. A few of the villages are entering. Silver Springs Retirement Community always wins."
      },
      {
        "text": "Jean's ears prick up."
      },
      {
        "speaker": "JEAN",
        "text": "Silver Springs only win because they're a bunch of rich people from Hawthorn and Toorak who pay for professional landscaping. We're the ones getting our creaky old knees dirty."
      },
      {
        "text": "Miranda's mouth corner quivers towards a smirk, but she is stern in her response."
      },
      {
        "speaker": "MIRANDA",
        "text": "They win because they have the best garden."
      },
      {
        "text": "Jean raises an eyebrow, and then seems to think the better of arguing."
      },
      {
        "speaker": "MIRANDA",
        "text": "I intend to have the best garden this year."
      }
    ],
    "choices": [
      {
        "text": "Ask where you’re needed.",
        "outcome": [
          {
            "speaker": "MIRANDA",
            "text": "Good. A useful one."
          },
          {
            "text": "She points you toward the seedlings and gives instructions in the order she expects them obeyed. You obey most of them."
          },
          {
            "text": "At the end she inspects the row, nods, and says nothing. Somehow, it feels like praise."
          }
        ],
        "effects": {
          "friendship": {
            "miranda": 1
          }
        }
      },
      {
        "text": "Say you can try.",
        "outcome": [
          {
            "text": "Miranda's face doesn't move. MIRANDA. That is not what I asked."
          },
          {
            "text": "But she hands you gloves anyway. You learn quickly, and Miranda doesn't seem too annoyed. This feels like success."
          }
        ],
        "effects": {
          "friendship": {
            "miranda": 1
          }
        }
      },
      {
        "text": "\"Oh! I have a vision for a garden. Listen.",
        "outcome": [
          {
            "text": "Miranda holds her hand up, stopping you."
          },
          {
            "speaker": "MIRANDA",
            "text": "I've already planned everything. But you can help - if you can follow instructions."
          }
        ],
        "effects": {
          "friendship": {
            "miranda": 2
          }
        }
      },
      {
        "text": "Ask if she wants your help.",
        "outcome": [
          {
            "text": "Miranda smiles a little. >MIRANDA. Yes. Be here on time and follow instructions."
          }
        ],
        "effects": {
          "friendship": {
            "miranda": 2
          }
        }
      },
      {
        "text": "Sounds like a waste of time.",
        "outcome": [
          {
            "text": "Miranda looks at you blankly. MIRANDA. Then you needn't be involved."
          }
        ],
        "effects": {
          "friendship": {
            "miranda": -1
          },
          "flags": {
            "miranda_dismissed": true
          }
        }
      }
    ],
    "variants": [
      {
        "when": {
          "minFriendship": {
            "miranda": 2
          },
          "notFlag": "miranda_tablecloth_seen"
        },
        "content": [
          {
            "text": "Miranda is mending the netting over the brassicas. The stitches are small and even, the kind you would need to look for to find."
          },
          {
            "text": "She hands you a pair of gloves. They are your size. She does not explain them."
          },
          {
            "speaker": "MIRANDA",
            "text": "Hold the net taut. Not tight. Taut."
          },
          {
            "text": "You hold the net taut. She sews."
          },
          {
            "speaker": "MIRANDA",
            "text": "My mother had one good tablecloth. I kept it mended for years in a house with six siblings. Same stitch as this."
          },
          {
            "text": "She ties off the thread."
          },
          {
            "speaker": "MIRANDA",
            "text": "See, I discovered that you can be poor, and you can look poor. Only one of those is beyond your control."
          },
          {
            "text": "She inspects the repair. It is invisible."
          }
        ],
        "choices": [
          {
            "text": "Who mends the tablecloth now?",
            "outcome": [
              {
                "text": "Miranda folds the netting kit closed."
              },
              {
                "speaker": "MIRANDA",
                "text": "Nobody. It sits in a drawer. I have a few good ones now, and I still only use one."
              },
              {
                "text": "She checks a stake, wobbling it gently to test its sturdiness."
              },
              {
                "speaker": "MIRANDA",
                "text": "You spend the first half of your life wanting enough, and the second half not knowing what to do with it when it comes."
              },
              {
                "text": "She hands you the watering can."
              },
              {
                "speaker": "MIRANDA",
                "text": "Don't drown the seedlings, please."
              }
            ],
            "effects": {
              "friendship": {
                "miranda": 2
              },
              "memories": [
                "miranda_good_tablecloth"
              ],
              "flags": {
                "miranda_tablecloth_seen": true
              }
            }
          },
          {
            "text": "Hold the net and say nothing.",
            "outcome": [
              {
                "text": "You hold the net. She finishes the row of stitches."
              },
              {
                "speaker": "MIRANDA",
                "text": "Acceptable."
              },
              {
                "text": "From Miranda, you have learned, that is applause."
              }
            ],
            "effects": {
              "friendship": {
                "miranda": 1
              },
              "memories": [
                "miranda_good_tablecloth"
              ],
              "flags": {
                "miranda_tablecloth_seen": true
              }
            }
          }
        ]
      },
      {
        "when": {
          "seenScene": "generic_garden_miranda",
          "notFlag": "miranda_dismissed"
        },
        "content": [
          {
            "text": "Miranda hands you the good trowel without comment and points at a bed."
          },
          {
            "text": "You work. She corrects your technique once, briefly, and then leaves you to it, which you understand to be a promotion."
          }
        ],
        "choices": [
          {
            "text": "Get on with it.",
            "outcome": [
              {
                "text": "You get on with it. Miranda corrects one row after you leave, but only one."
              },
              {
                "speaker": "MIRANDA",
                "text": "Improving."
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
          "flag": "miranda_dismissed"
        },
        "content": [
          {
            "text": "You walk into the garden. Miranda is elsewhere, but you can see the work she's been putting in."
          },
          {
            "text": "You pick up the watering can and tend to the seedlings you planted."
          }
        ],
        "choices": []
      }
    ]
  },
  "miranda_competition": {
    "title": "Judging day",
    "location": "Gardens",
    "art": "Gardens",
    "content": [
      {
        "text": "The regional garden judges arrive at two. Clipboards, hats, sensible shoes."
      },
      {
        "text": "Miranda has been in the garden since six. The beds are immaculate. The paths are swept. There is a smear of dirt on her cheek that she would be furious about."
      },
      {
        "text": "Twice, people offer to help carry things. Twice, she says she has a system."
      },
      {
        "text": "The judges take forty minutes. Summer Hills wins its category."
      },
      {
        "text": "There is scattered applause. Miranda accepts a certificate and a handshake."
      },
      {
        "text": "Then she sits down on the edge of a raised bed, just for a moment, the way people sit when the sitting is not optional."
      }
    ],
    "choices": [
      {
        "text": "Congratulate her with everyone else.",
        "outcome": [
          {
            "speaker": "MIRANDA",
            "text": "Thank you."
          },
          {
            "text": "She says it to the group, once, efficiently."
          },
          {
            "text": "She is back in her apartment before the tea urn is empty."
          }
        ],
        "effects": {
          "friendship": {
            "miranda": 1
          },
          "flags": {
            "miranda_did_it_alone": true
          }
        }
      }
    ],
    "variants": [
      {
        "when": {
          "minFriendship": {
            "miranda": 5
          }
        },
        "content": [
          {
            "text": "The judges arrive at two. It is nine in the morning and Miranda is already behind."
          },
          {
            "text": "Her left wrist is strapped. She is not discussing it. Jean offered to help earlier. Pablo offered twice. She drops the ball of twine. It rolls under the bench."
          },
          {
            "text": "She looks exhausted."
          },
          {
            "text": "For a moment, she does not move at all."
          },
          {
            "speaker": "PLAYER",
            "text": "Are you doing this all yourself?"
          },
          {
            "speaker": "MIRANDA",
            "text": "Nobody else will do it right."
          },
          {
            "text": "She looks at you and sighs."
          },
          {
            "speaker": "MIRANDA",
            "text": "Sorry. That came out sideways. I'm just tired. But it'll be worth it."
          },
          {
            "text": "Suddenly you realise how small she is. 5'2\" with gardening boots on. Her presence always made her seem taller."
          },
          {
            "speaker": "PLAYER",
            "text": "You need to let people help, Miranda."
          },
          {
            "text": "You bite your lip as she looks at you - but she's not angry. She looks afraid."
          },
          {
            "speaker": "MIRANDA",
            "text": "I need to take care of things. I'm not helpless."
          }
        ],
        "choices": [
          {
            "text": "You kept that tablecloth mended for thirty years and nobody ever thought you were poor. Nobody here will think you’re helpless.",
            "requiresMemory": "miranda_good_tablecloth",
            "outcome": [
              {
                "text": "Miranda looks at you."
              },
              {
                "text": "Now, she does look angry. But it fades almost instantly."
              },
              {
                "text": "She retrieves the twine herself. Then she stands still for a moment."
              },
              {
                "speaker": "MIRANDA",
                "text": "Jean can sweep. Pablo can water. You may pick up leaves. I will look for anything I've missed."
              },
              {
                "text": "By two o’clock the garden is ready. Miranda has been sitting for half an hour, directing traffic with a teacup."
              },
              {
                "text": "The judges take forty minutes."
              },
              {
                "text": "Summer Hills wins best garden."
              },
              {
                "text": "The residents cheer, and Miranda looks around at them, smiling."
              }
            ],
            "effects": {
              "friendship": {
                "miranda": 3
              },
              "flags": {
                "miranda_delegated": true
              }
            }
          },
          {
            "text": "Let me do the watering, at least.",
            "outcome": [
              {
                "speaker": "MIRANDA",
                "text": "The watering is done."
              },
              {
                "text": "It isn't. She does it later, herself."
              },
              {
                "text": "The garden wins first place. Miranda accepts the certificate with her good hand."
              },
              {
                "text": "She does not stay for the tea."
              }
            ],
            "effects": {
              "friendship": {
                "miranda": 1
              },
              "flags": {
                "miranda_did_it_alone": true
              }
            }
          },
          {
            "text": "You’ll manage. You always do.",
            "outcome": [
              {
                "speaker": "MIRANDA",
                "text": "Yes."
              },
              {
                "text": "She picks up the twine and goes back to the dahlias."
              },
              {
                "text": "The garden wins. She manages. She always does."
              }
            ],
            "effects": {
              "flags": {
                "miranda_did_it_alone": true
              }
            }
          }
        ]
      }
    ]
  },
  "miranda_competition_consequence": {
    "title": "Plant labels",
    "location": "Gardens",
    "art": "Gardens",
    "content": [
      {
        "text": "The Best Garden certificate is up in the garden shed."
      },
      {
        "text": "Miranda’s wrist is still strapped. She is writing new labels in a straight line."
      },
      {
        "text": "A resident leaves a bunch of parsley at the door. Miranda nods her thanks at it and keeps working."
      }
    ],
    "choices": [
      {
        "text": "Put the parsley in water.",
        "outcome": [
          {
            "text": "You find a jar for the parsley."
          },
          {
            "speaker": "MIRANDA",
            "text": "Thank you."
          }
        ],
        "effects": {
          "friendship": {
            "miranda": 1
          }
        }
      },
      {
        "text": "Leave her to it.",
        "outcome": [
          {
            "text": "You walk away. The light in the shed is on for a while longer."
          }
        ]
      }
    ],
    "variants": [
      {
        "when": {
          "flag": "miranda_delegated"
        },
        "content": [
          {
            "text": "The garden shed has acquired new toys: twine, clean gloves, a packet of labels, seeds, secateurs - all new in their packaging. Miranda is writing herb labels with a chalk pen while Jean sips tea beside her, chatting away."
          },
          {
            "text": "When they see you, they both smile warmly. Miranda beckons you."
          },
          {
            "speaker": "MIRANDA",
            "text": "Ah, good. Come and help with the new things."
          },
          {
            "text": "You pick up the secateurs and test the spring. It feels fancy."
          },
          {
            "speaker": "MIRANDA",
            "text": "Thought we deserved some rewards."
          },
          {
            "text": "Outside, three residents are deadheading flowers and pruning bushes. Inside, you three stay and chat for a while. - effect: Miranda friendship +1"
          }
        ],
        "choices": []
      }
    ]
  }
};
