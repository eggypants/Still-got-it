// NPC-to-NPC relationship scenes. Currently Pablo+Miranda. Jean+Al and Rhonda+Bob to come.
export const DUET_SCENES = {
  "pablo_miranda_tea": {
    "title": "Morning tea",
    "location": "Village Café",
    "art": "Village Café",
    "content": [
      {
        "text": "The café is busy enough that nobody can pretend they came only for the scones."
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
            "text": "You sit on the bench and watch them negotiate three crates, one trolley, and Miranda’s standards."
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
            "text": "Behind you, Miranda tells Pablo his tea is too hot. He says that is because time exists."
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
  }
};
