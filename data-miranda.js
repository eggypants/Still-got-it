// Miranda — arc owner file. Belief: 'If I do everything right, I will never feel helpless again.'
// Crossroads: the garden competition (week 3, day 15 afternoon).
// Key image: the good tablecloth, mended for thirty years.
export const MIRANDA_SCENES = {
  "generic_garden_miranda": {
    "title": "Garden volunteers",
    "location": "Gardens",
    "art": "Gardens",
    "content": [
      {
        "text": "The garden is warm and full of small jobs. Miranda gives instructions without raising her voice. People obey anyway."
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
            "miranda": 1
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
            "text": "My mother had one good tablecloth. I kept it mended for thirty years. Same stitch as this."
          },
          {
            "text": "She ties off the thread."
          },
          {
            "speaker": "MIRANDA",
            "text": "You can be poor or you can look poor. Only one of those is compulsory."
          },
          {
            "text": "She inspects the repair. It is invisible, which is the point."
          }
        ],
        "choices": [
          {
            "text": "“Who mends the tablecloth now?”",
            "outcome": [
              {
                "text": "Miranda folds the netting kit closed."
              },
              {
                "speaker": "MIRANDA",
                "text": "It does not need mending now. I have time to do things properly."
              },
              {
                "text": "She looks at the garden for a moment longer than the garden requires."
              },
              {
                "speaker": "MIRANDA",
                "text": "That was not the prize I expected it to be."
              },
              {
                "text": "She hands you the watering can. The subject is closed."
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
          "seenScene": "generic_garden_miranda"
        },
        "content": [
          {
            "text": "Miranda hands you the good trowel without comment and points at a bed."
          },
          {
            "text": "You work. She corrects your technique once, briefly, and then leaves you to it, which you understand to be a promotion."
          }
        ]
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
        "text": "The judges take forty minutes. Sunset Pines wins its category."
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
            "text": "The judges arrive at two. It is nine in the morning and Miranda is already behind, which has never happened before."
          },
          {
            "text": "Her left wrist is strapped. She is not discussing it."
          },
          {
            "text": "There are three jobs happening and she is doing all of them: staking the dahlias, sweeping the path, re-labelling the herb bed because the first labels were crooked by a degree only she could see."
          },
          {
            "text": "Jean offered to help earlier. Pablo offered twice."
          },
          {
            "speaker": "MIRANDA",
            "text": "I have a system."
          },
          {
            "text": "She drops the ball of twine. It rolls under the bench."
          },
          {
            "text": "She looks at it."
          },
          {
            "text": "For a moment, she does not move at all."
          }
        ],
        "choices": [
          {
            "text": "“You kept that tablecloth mended for thirty years and nobody ever thought you were poor. Nobody here will think you’re helpless.”",
            "requiresMemory": "miranda_good_tablecloth",
            "outcome": [
              {
                "text": "Miranda looks at you."
              },
              {
                "text": "It is the look she gives crooked labels."
              },
              {
                "speaker": "MIRANDA",
                "text": "That is a misuse of a private conversation."
              },
              {
                "text": "She retrieves the twine herself. Then she stands still, holding it."
              },
              {
                "speaker": "MIRANDA",
                "text": "Jean can sweep. She sweeps adequately."
              },
              {
                "text": "She says it like a court ruling."
              },
              {
                "speaker": "MIRANDA",
                "text": "Pablo may carry. You may label. I will supervise, because none of you can be trusted with the dahlias."
              },
              {
                "text": "By two o’clock the garden is ready. Miranda has been sitting for half an hour, directing traffic with a teacup."
              },
              {
                "text": "The judges take forty minutes. Sunset Pines wins its category."
              },
              {
                "text": "The applause is loud. Some of it is for the garden."
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
            "text": "“Let me do the watering, at least.”",
            "outcome": [
              {
                "speaker": "MIRANDA",
                "text": "The watering is done."
              },
              {
                "text": "It is not done. It gets done, later, by her."
              },
              {
                "text": "The garden wins its category. Miranda accepts the certificate with her good hand."
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
            "text": "“You’ll manage. You always do.”",
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
              },
              {
                "text": "You have never seen anyone look less like a winner."
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
  }
};
