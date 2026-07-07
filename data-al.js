// Al — arc owner file. Belief: 'If I stop being charming, nobody will choose to spend time with me.'
// Crossroads: dance night (week 3). The act never fully drops.


export const AL_SCENES = {
  "generic_cards_al": {
    "title": "Cards",
    "location": "Community Lounge",
    "art": "Community Lounge",
    "content": [
      {
        "text": "Al deals cards with the confidence of a man who has been forgiven for worse things than bad shuffling. He loses one hand, wins two, and claims the scorekeeper is holding a grudge."
      },
      {
        "speaker": "AL",
        "text": "I am being persecuted by arithmetic. Very ugly to see."
      }
    ],
    "choices": [
      {
        "text": "Stay for a while.",
        "outcome": [
          {
            "text": "You stay for three hands. Al wins one of them by luck and takes credit for courage."
          },
          {
            "speaker": "AL",
            "text": "Write that down. History likes a handsome winner."
          }
        ],
        "effects": {
          "friendship": {
            "al": 1
          }
        }
      },
      {
        "text": "Ask if he always talks this much.",
        "outcome": [
          {
            "speaker": "AL",
            "text": "No. Sometimes I sing."
          },
          {
            "text": "He deals you in before you can decide whether that is a warning."
          }
        ],
        "effects": {
          "friendship": {
            "al": 1
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
            "text": "Cards are late starting. Al has an old photograph on the table, keeping the score sheet flat."
          },
          {
            "text": "In the photo he is young, shirt open at the throat, one hand on the roof of a station wagon. A keyboard case is strapped across the back seat with a fraying belt."
          },
          {
            "text": "A man sleeps in the passenger seat with a drumstick still in his hand. Al is holding the car keys and grinning at whoever took the picture."
          },
          {
            "speaker": "AL",
            "text": "The band. After the Heidelberg RSL, unless I am lying for colour."
          },
          {
            "text": "He taps the sleeping man in the photograph."
          },
          {
            "speaker": "AL",
            "text": "Denny. Could play a six-minute solo and then forget his own address."
          },
          {
            "text": "He turns the photo square with the edge of the table."
          },
          {
            "speaker": "AL",
            "text": "I drove them home. Sober as a nun. Adored at ten, needed at three. Three was better."
          },
          {
            "text": "He picks up the deck and the grin comes back on."
          },
          {
            "speaker": "AL",
            "text": "Right. Who is ready to lose money in a social and legally meaningless way?"
          }
        ],
        "choices": [
          {
            "text": "“Three in the morning suits you.”",
            "outcome": [
              {
                "speaker": "AL",
                "text": "Dangerous thing to say to a former musician."
              },
              {
                "text": "He slips the photograph into his shirt pocket instead of putting it away."
              },
              {
                "speaker": "AL",
                "text": "Deal. Before I start singing."
              }
            ],
            "effects": {
              "friendship": {
                "al": 2
              },
              "memories": [
                "al_designated_driver"
              ],
              "flags": {
                "al_driver_seen": true
              }
            }
          },
          {
            "text": "Look at the photo and say nothing.",
            "outcome": [
              {
                "text": "You let the photograph sit between you. Al shuffles the deck with neat, quick hands."
              },
              {
                "speaker": "AL",
                "text": "Excellent. A respectful silence. I have heard of those."
              },
              {
                "text": "He deals you in. The photo stays on the table until the first hand is over."
              }
            ],
            "effects": {
              "friendship": {
                "al": 1
              },
              "memories": [
                "al_designated_driver"
              ],
              "flags": {
                "al_driver_seen": true
              }
            }
          }
        ]
      },
      {
        "when": {
          "seenScene": "generic_cards_al"
        },
        "content": [
          {
            "text": "Al has already dealt you in. Your cards are face down beside a cup of tea he insists belongs to you."
          },
          {
            "speaker": "AL",
            "text": "Late again. I covered beautifully. Nobody suspected a thing except everyone."
          }
        ],
        "choices": [
          {
            "text": "Play a hand.",
            "outcome": [
              {
                "text": "You play one hand. Al praises your nerve, questions your judgement, and loses by two points."
              },
              {
                "speaker": "AL",
                "text": "Robbery with witnesses. My favourite kind."
              }
            ],
            "effects": {
              "friendship": {
                "al": 1
              }
            }
          }
        ]
      }
    ]
  },
  "generic_lounge_al_news": {
    "title": "Lounge gossip",
    "location": "Community Lounge",
    "art": "Community Lounge",
    "content": [
      {
        "text": "Al has news about the concert, the café, and someone’s grandson. It is difficult to tell which parts are verified. It is also difficult not to listen."
      }
    ],
    "choices": [
      {
        "text": "Stay for a while.",
        "outcome": [
          {
            "text": "The time passes more quickly than you expected. Al gives three versions of the same story and makes each one sound legally distinct."
          }
        ],
        "effects": {
          "friendship": {
            "al": 1
          }
        }
      }
    ]
  },
  "al_dance": {
    "title": "Dance night",
    "location": "Hall",
    "art": "Hall",
    "content": [
      {
        "text": "The hall has been cleared for dance night. Someone has found coloured lights, and someone else has decided not to ask where they came from."
      },
      {
        "text": "Al is in a blue shirt with a collar wide enough to have its own postcode. He works the room before the first song has properly started."
      },
      {
        "speaker": "AL",
        "text": "Ladies, gentlemen, undecided voters. Try to remain calm."
      },
      {
        "text": "He dances with Jean, then Rhonda, then a woman from the next village who appears to have brought her own shoes for exactly this purpose."
      },
      {
        "text": "He bows after every song. People laugh because he gives them permission to."
      },
      {
        "text": "When the last record ends, he helps coil the extension cord and tells three people he could have gone professional if not for his tragic commitment to humility."
      },
      {
        "text": "He leaves alone, whistling the chorus on the way out."
      }
    ],
    "choices": [
      {
        "text": "“You had the room.”",
        "outcome": [
          {
            "speaker": "AL",
            "text": "Had it? I owned it briefly and returned it in excellent condition."
          },
          {
            "text": "He flicks the collar of his shirt and heads for the door, still whistling."
          }
        ],
        "effects": {
          "friendship": {
            "al": 1
          },
          "flags": {
            "al_kept_the_act": true
          }
        }
      },
      {
        "text": "Help stack the last chairs.",
        "outcome": [
          {
            "text": "You stack chairs while Al provides commentary from a safe distance."
          },
          {
            "speaker": "AL",
            "text": "I supervise because my back is a protected historical site."
          },
          {
            "text": "He carries two chairs anyway, then complains about heroism."
          }
        ],
        "effects": {
          "friendship": {
            "al": 1
          },
          "flags": {
            "al_kept_the_act": true
          }
        }
      }
    ],
    "variants": [
      {
        "when": {
          "minFriendship": {
            "al": 5
          }
        },
        "content": [
          {
            "text": "Dance night is running hot. The hall windows are open, the coloured lights are misbehaving, and Jean has already heckled the playlist twice."
          },
          {
            "text": "Al has the blue shirt on again. He is charming the room in small circuits: compliment, spin, bow, joke, repeat."
          },
          {
            "text": "Halfway through a fast song, his step catches. He covers it with a flourish so large it almost becomes furniture."
          },
          {
            "speaker": "JEAN",
            "text": "Careful, Valentino. Some of us need these floors tomorrow."
          },
          {
            "speaker": "AL",
            "text": "Jealousy is unbecoming, Jean, but on you it has possibilities."
          },
          {
            "text": "The song ends. People clap. Al bows, one hand on the back of a chair."
          },
          {
            "text": "The next song starts too fast. He looks at the floor, then at the room."
          },
          {
            "speaker": "AL",
            "text": "The room gets quiet when I stop moving, which is rude after all these years of public service."
          }
        ],
        "choices": [
          {
            "text": "“At three in the morning, you were the one who stayed useful. Sit one out.”",
            "requiresMemory": "al_designated_driver",
            "outcome": [
              {
                "text": "Al looks at you, then at the dancers."
              },
              {
                "speaker": "AL",
                "text": "Using my own mythology against me. Very poor manners."
              },
              {
                "text": "He sits. Not heavily. Not dramatically. Just in the chair beside the speakers, one foot still marking the beat."
              },
              {
                "speaker": "AL",
                "text": "Fine. I shall be decorative from a seated position. History will cope."
              },
              {
                "text": "Jean dances past and salutes him with two fingers. He salutes back, smaller than usual."
              },
              {
                "text": "By the end of the song, three people have pulled chairs into a row beside him. Al tells them they have excellent taste in furniture."
              }
            ],
            "effects": {
              "friendship": {
                "al": 3
              },
              "flags": {
                "al_dropped_the_act": true
              }
            }
          },
          {
            "text": "“They love you. Give them one more.”",
            "outcome": [
              {
                "speaker": "AL",
                "text": "Cruel, but accurate."
              },
              {
                "text": "He steps back onto the floor. The flourish covers the stiffness if you are not looking for it."
              },
              {
                "text": "The room cheers. Al bows too low and has to straighten carefully."
              }
            ],
            "effects": {
              "friendship": {
                "al": 1
              },
              "flags": {
                "al_kept_the_act": true
              }
            }
          },
          {
            "text": "“Want me to get you some water?”",
            "outcome": [
              {
                "speaker": "AL",
                "text": "Water? In front of witnesses? I have a reputation to protect."
              },
              {
                "text": "You bring it anyway. He drinks half, calls it medicinal, and returns to the edge of the dance floor when the next song begins."
              }
            ],
            "effects": {
              "friendship": {
                "al": 1
              },
              "flags": {
                "al_kept_the_act": true
              }
            }
          }
        ]
      }
    ]
  },
  "al_dance_consequence": {
    "title": "The song list",
    "location": "Hall",
    "art": "Hall",
    "content": [
      {
        "text": "Al is in the hall with the concert song list and a pencil behind his ear."
      },
      {
        "text": "Beside the title of his song, he has written three possible jokes and crossed out none of them."
      },
      {
        "text": "He sings the first line, stops, and adds a fourth note in the margin."
      },
      {
        "speaker": "AL",
        "text": "You cannot leave a room defenceless. It needs easing in."
      },
      {
        "text": "He tests a bow toward the empty chairs."
      },
      {
        "text": "The empty chairs survive."
      }
    ],
    "choices": [
      {
        "text": "Hold the list still.",
        "outcome": [
          {
            "text": "You hold the page while he writes one more line in the margin."
          },
          {
            "speaker": "AL",
            "text": "There. Tasteful excess."
          }
        ],
        "effects": {
          "friendship": {
            "al": 1
          }
        }
      }
    ],
    "variants": [
      {
        "when": {
          "flag": "al_dropped_the_act"
        },
        "content": [
          {
            "text": "Al is alone in the hall with the song list flat on the piano."
          },
          {
            "text": "A pencil line runs through the jokes in the margin."
          },
          {
            "text": "He sings the first line, stops, and starts again without the wink."
          },
          {
            "text": "It sounds less polished. It lands better."
          },
          {
            "speaker": "AL",
            "text": "Don't spread that around. I have a brand to damage slowly."
          },
          {
            "text": "He writes nothing beside the title."
          }
        ],
        "choices": [
          {
            "text": "Keep time with one finger.",
            "outcome": [
              {
                "text": "You tap the piano edge. Al follows it for one verse, then nods at the empty chairs."
              },
              {
                "speaker": "AL",
                "text": "Good. No dedication. Let them panic."
              }
            ],
            "effects": {
              "friendship": {
                "al": 1
              }
            }
          }
        ]
      }
    ]
  }

};
