// Rhonda — arc owner file. Belief: 'If I am admired, I will be loved.'
// Crossroads: the Autumn Concert (empty-hall thread, weeks 3–4).
// The concert scene itself lives in data-concert.js — it belongs to the game.
export const RHONDA_SCENES = {
  "rhonda_first_meeting": {
    "title": "First meeting",
    "location": "Community Lounge",
    "art": "Community Lounge",
    "content": [
      {
        "text": "The lounge smells faintly of instant coffee, furniture polish, and perfume."
      },
      {
        "text": "A small audience has gathered near the window. At the centre of it sits a woman in a silk scarf and huge pearl earrings, wearing a devilish grin."
      },
      {
        "speaker": "RHONDA",
        "text": "And then the director said, ‘Rhonda, darling, could you try looking at him as though you’re in love?’"
      },
      {
        "speaker": "RHONDA",
        "text": "I said, ‘I am looking at him as though I’m in love. Specifically, I’m looking at him as though I’ve been married to him for seven years and he’s just bought a boat.’"
      },
      {
        "text": "A few residents laugh."
      },
      {
        "text": "Rhonda notices you near the doorway. She peers down her nose at you."
      },
      {
        "speaker": "RHONDA",
        "text": "Oh, hello. New face."
      },
      {
        "speaker": "RHONDA",
        "text": "Don’t hover, darling. Come in and tell me who you are and why I should care."
      }
    ],
    "choices": [
      {
        "text": "Sorry. I didn’t want to interrupt.",
        "outcome": [
          {
            "speaker": "RHONDA",
            "text": "Interrupt? Please. Interruption is the only thing keeping this place alive."
          },
          {
            "text": "She pats the chair beside her."
          },
          {
            "speaker": "RHONDA",
            "text": "Sit."
          },
          {
            "text": "You sit. Al looks over from the armchair beside her."
          },
          {
            "speaker": "AL",
            "text": "Did you work with anyone famous?"
          },
          {
            "speaker": "RHONDA",
            "text": "Everybody is famous to somebody."
          },
          {
            "text": "She points across the room."
          },
          {
            "speaker": "RHONDA",
            "text": "Al, weren’t you famous once?"
          },
          {
            "speaker": "AL",
            "text": "Still am, depending on who you ask."
          },
          {
            "speaker": "RHONDA",
            "text": "There you are."
          },
          {
            "speaker": "AL",
            "text": "Mostly women with poor judgment."
          },
          {
            "speaker": "RHONDA",
            "text": "The best audience."
          }
        ],
        "effects": {
          "friendship": {
            "rhonda": 2,
            "al": 1
          },
          "flags": {
            "met_rhonda": true
          }
        }
      },
      {
        "text": "Were you really in a film?",
        "outcome": [
          {
            "text": "Rhonda looks at you."
          },
          {
            "speaker": "RHONDA",
            "text": "No."
          },
          {
            "speaker": "RHONDA",
            "text": "I was in several."
          },
          {
            "text": "She gives you a look and seems to decide not to take your ignorance to heart."
          },
          {
            "speaker": "RHONDA",
            "text": "Sit down before you say something worse."
          },
          {
            "text": "You sit."
          }
        ],
        "effects": {
          "friendship": {
            "rhonda": 1
          },
          "flags": {
            "met_rhonda": true
          }
        }
      },
      {
        "text": "I’ll come back later.",
        "outcome": [
          {
            "speaker": "RHONDA",
            "text": "Entirely your loss."
          },
          {
            "text": "She turns back to her audience."
          },
          {
            "speaker": "RHONDA",
            "text": "Now, where was I? Ah yes. The boat."
          },
          {
            "text": "You leave. As you walk down the hall, you hear them laughing again."
          }
        ],
        "effects": {
          "flags": {
            "avoided_rhonda_first": true
          }
        }
      }
    ]
  },
  "rhonda_lounge_short": {
    "title": "Coffee in the lounge",
    "location": "Community Lounge",
    "art": "Community Lounge",
    "content": [
      {
        "text": "Rhonda is reading the entertainment pages with a cup of coffee balanced on one knee."
      },
      {
        "speaker": "RHONDA",
        "text": "I don’t know who half these people are, but I disapprove of their posture."
      },
      {
        "text": "She folds the paper and looks at you."
      },
      {
        "speaker": "RHONDA",
        "text": "Well? What brings you to retirement living?"
      }
    ],
    "choices": [
      {
        "text": "Needed a bit less house and a few more people.",
        "outcome": [
          {
            "text": "Rhonda’s expression softens, briefly."
          },
          {
            "speaker": "RHONDA",
            "text": "Sensible. Dangerous thing, an empty house."
          },
          {
            "text": "Then the smile returns."
          }
        ],
        "effects": {
          "friendship": {
            "rhonda": 1
          }
        }
      },
      {
        "text": "My family thought it would be good for me.",
        "outcome": [
          {
            "speaker": "RHONDA",
            "text": "Ah. Never a good thing when the family starts thinking."
          },
          {
            "text": "She leans closer."
          },
          {
            "speaker": "RHONDA",
            "text": "Worse when it’s you they’re thinking about."
          }
        ],
        "effects": {
          "friendship": {
            "rhonda": 1
          }
        }
      },
      {
        "text": "I suppose I wanted a fresh start.",
        "outcome": [
          {
            "text": "Rhonda considers you."
          },
          {
            "speaker": "RHONDA",
            "text": "Well. You’ve certainly come to the right place."
          },
          {
            "text": "She gestures around the lounge."
          },
          {
            "speaker": "RHONDA",
            "text": "Everyone here has had at least one. Some of us have had several."
          }
        ],
        "effects": {
          "friendship": {
            "rhonda": 1
          }
        }
      }
    ],
    "variants": [
      {
        "when": {
          "seenScene": "rhonda_lounge_short",
          "minFriendship": {
            "rhonda": 5
          }
        },
        "content": [
          {
            "text": "Your chair is empty. Rhonda’s handbag is on it."
          },
          {
            "text": "She moves the handbag before you ask."
          },
          {
            "speaker": "RHONDA",
            "text": "It was holding your place. It does excellent work."
          },
          {
            "text": "She pours you a coffee from the pot without being asked, and gets it right."
          },
          {
            "speaker": "RHONDA",
            "text": "Now. The paper says a studio is remaking a perfectly good old comedy. I require someone to be appalled with."
          }
        ],
        "choices": [
          {
            "text": "Be appalled with her.",
            "outcome": [
              {
                "text": "You are appalled together for the better part of an hour."
              },
              {
                "text": "It is, by any honest measure, a wonderful morning."
              }
            ],
            "effects": {
              "friendship": {
                "rhonda": 1
              }
            }
          },
          {
            "text": "“You could star in the remake.”",
            "outcome": [
              {
                "speaker": "RHONDA",
                "text": "Darling, I could open an envelope and draw a crowd."
              },
              {
                "text": "She sips her coffee."
              },
              {
                "speaker": "RHONDA",
                "text": "A small crowd. Discerning."
              }
            ],
            "effects": {
              "friendship": {
                "rhonda": 1
              }
            }
          }
        ]
      },
      {
        "when": {
          "seenScene": "rhonda_lounge_short"
        },
        "content": [
          {
            "text": "Rhonda is in the lounge again, reading the entertainment pages with her coffee cooling beside her."
          },
          {
            "text": "She pats the chair next to her without looking up."
          },
          {
            "speaker": "RHONDA",
            "text": "There you are. I was beginning to think you’d found more interesting people."
          },
          {
            "text": "She turns the page."
          },
          {
            "speaker": "RHONDA",
            "text": "Unlikely, but one must allow for miracles."
          }
        ],
        "choices": [
          {
            "text": "Sit with her.",
            "outcome": [
              {
                "text": "You sit. Rhonda pretends to keep reading, then slides the entertainment pages toward you."
              },
              {
                "speaker": "RHONDA",
                "text": "Page three. Tell me whether I am being unfair. I dislike being unfair by myself."
              }
            ],
            "effects": {
              "friendship": {
                "rhonda": 1
              }
            }
          },
          {
            "text": "Ask what she’s reading.",
            "outcome": [
              {
                "speaker": "RHONDA",
                "text": "Proof that nobody with cheekbones should be trusted before lunch."
              },
              {
                "text": "She shows you the article anyway. Her coffee goes cold while she explains the entire thing."
              }
            ],
            "effects": {
              "friendship": {
                "rhonda": 1
              }
            }
          },
          {
            "text": "Let her complain first.",
            "outcome": [
              {
                "text": "You wait. Rhonda turns one more page, sighs, and begins exactly where she intended to."
              },
              {
                "speaker": "RHONDA",
                "text": "You are learning. Slowly, but it counts."
              }
            ],
            "effects": {
              "friendship": {
                "rhonda": 1
              }
            }
          }
        ]
      }
    ]
  },
  "rhonda_pottery": {
    "title": "Pottery",
    "location": "Craft Room",
    "art": "Craft Room",
    "content": [
      {
        "text": "The noticeboard said Pottery: Beginners Welcome."
      },
      {
        "text": "The craft room is calm. People are chatting, laughing, making uneven bowls and pretending they meant to."
      },
      {
        "text": "Rhonda is the only person who looks tense."
      },
      {
        "text": "She sits at the nearest wheel in a silk scarf, back straight, chin lifted. Her clay has collapsed."
      },
      {
        "text": "She looks at it with an expression of betrayal."
      },
      {
        "speaker": "RHONDA",
        "text": "Don’t look at it."
      }
    ],
    "choices": [
      {
        "text": "I wasn’t.",
        "outcome": [
          {
            "speaker": "RHONDA",
            "text": "You were."
          },
          {
            "text": "She pokes the clay with one finger."
          },
          {
            "speaker": "RHONDA",
            "text": "It knows what it’s done."
          },
          {
            "text": "The clay slumps further."
          },
          {
            "speaker": "RHONDA",
            "text": "Oh, be like that then."
          }
        ],
        "effects": {
          "friendship": {
            "rhonda": 1
          }
        }
      },
      {
        "text": "It has character.",
        "outcome": [
          {
            "text": "Rhonda stares at it."
          },
          {
            "speaker": "RHONDA",
            "text": "So did my second husband. That wasn’t enough either."
          },
          {
            "text": "She tries to lift the clay. It slumps."
          },
          {
            "speaker": "RHONDA",
            "text": "Oh, forget you."
          }
        ],
        "effects": {
          "friendship": {
            "rhonda": 1
          }
        }
      },
      {
        "text": "What is it meant to be?",
        "outcome": [
          {
            "text": "Rhonda looks at you, eyes like daggers."
          },
          {
            "speaker": "RHONDA",
            "text": "A vase."
          },
          {
            "text": "Rhonda lets that sit for a moment."
          },
          {
            "speaker": "RHONDA",
            "text": "For cacti. Or rocks."
          },
          {
            "text": "The pottery teacher passes behind her and says something encouraging. Rhonda smiles too brightly until she’s gone."
          },
          {
            "speaker": "RHONDA",
            "text": "I hate classes where everyone is expected to be charmingly terrible."
          },
          {
            "speaker": "PLAYER",
            "text": "Why?"
          },
          {
            "speaker": "RHONDA",
            "text": "Because some of us spent a great deal of effort becoming charmingly competent."
          }
        ],
        "effects": {
          "friendship": {
            "rhonda": 1
          }
        }
      },
      {
        "text": "Do you want help?",
        "outcome": [
          {
            "speaker": "RHONDA",
            "text": "No."
          },
          {
            "text": "She looks at the clay."
          },
          {
            "speaker": "RHONDA",
            "text": "Maybe."
          },
          {
            "speaker": "RHONDA",
            "text": "Don’t make a song about it."
          },
          {
            "text": "You sit beside her and steady the wheel while she tries again."
          },
          {
            "text": "The second attempt is not beautiful, but it stands up."
          },
          {
            "speaker": "RHONDA",
            "text": "Well."
          },
          {
            "speaker": "PLAYER",
            "text": "Better?"
          },
          {
            "speaker": "RHONDA",
            "text": "Let’s not become emotional. But yes."
          },
          {
            "text": "She wipes clay from her wrist."
          },
          {
            "speaker": "RHONDA",
            "text": "I once wore a sequinned gown under studio lights for fourteen hours, and I was more comfortable than I am in this room."
          },
          {
            "speaker": "PLAYER",
            "text": "What was that for?"
          },
          {
            "speaker": "RHONDA",
            "text": "Television. Very glamorous. Very stupid. I had two lines and a migraine."
          },
          {
            "text": "She smiles."
          },
          {
            "speaker": "RHONDA",
            "text": "Still. The camera loved me."
          },
          {
            "text": "Then, quieter:"
          },
          {
            "speaker": "RHONDA",
            "text": "For about twelve seconds."
          }
        ],
        "effects": {
          "friendship": {
            "rhonda": 2
          },
          "flags": {
            "helped_rhonda_pottery": true
          }
        }
      }
    ]
  },
  "rhonda_movie_night": {
    "title": "Movie night",
    "location": "Cinema Room",
    "art": "Cinema Room",
    "content": [
      {
        "text": "Movie night is showing an old black-and-white comedy."
      },
      {
        "text": "Someone has brought wrapped peppermints. Someone else has brought cheese and crackers. The room is dark except for the projector glow."
      },
      {
        "text": "Rhonda sits two rows from the back."
      },
      {
        "text": "She sees you and lifts a finger to her lips."
      },
      {
        "speaker": "RHONDA",
        "text": "This part is good."
      },
      {
        "text": "On screen, a woman in a feathered hat walks straight into a door."
      },
      {
        "text": "The room erupts."
      },
      {
        "text": "Rhonda laughs properly. Sudden and delighted."
      },
      {
        "text": "When the laughter settles, she leans toward you."
      },
      {
        "speaker": "RHONDA",
        "text": "That fall is perfect."
      },
      {
        "text": "After the film, people shuffle out slowly, still talking about the ending."
      },
      {
        "text": "Rhonda remains seated for a moment."
      },
      {
        "speaker": "RHONDA",
        "text": "Comedy is harder than drama. People think it’s lighter because they’re not paying attention."
      },
      {
        "speaker": "RHONDA",
        "text": "There was one little part I loved. I played this ridiculous woman. Came on in the second act, insulted a priest, lost her hat, left again."
      },
      {
        "speaker": "RHONDA",
        "text": "It wasn’t much. Not really."
      },
      {
        "speaker": "RHONDA",
        "text": "But every night, when the hat went, the room lost it."
      },
      {
        "text": "She says it softly."
      },
      {
        "speaker": "RHONDA",
        "text": "That was lovely."
      }
    ],
    "choices": [
      {
        "text": "Poor hat.",
        "outcome": [
          {
            "speaker": "RHONDA",
            "text": "That’s why it’s funny."
          },
          {
            "text": "She glances at you."
          },
          {
            "speaker": "RHONDA",
            "text": "You know. As a bit."
          }
        ],
        "effects": {
          "friendship": {
            "rhonda": 1
          },
          "memories": [
            "rhonda_hat_laugh"
          ],
          "flags": {
            "rhonda_told_hat_story": true
          }
        }
      },
      {
        "text": "Timing the hat must have been tricky.",
        "outcome": [
          {
            "text": "Rhonda looks pleased."
          },
          {
            "speaker": "RHONDA",
            "text": "Yes. Exactly. Half a second earlier and it’s nothing. Half a second later and the audience has already guessed."
          },
          {
            "speaker": "RHONDA",
            "text": "There. That pause before she turns around? That’s the whole joke."
          }
        ],
        "effects": {
          "friendship": {
            "rhonda": 2
          },
          "memories": [
            "rhonda_hat_laugh"
          ],
          "flags": {
            "rhonda_told_hat_story": true
          }
        }
      },
      {
        "text": "You still remember the laugh.",
        "outcome": [
          {
            "text": "Rhonda looks at the blank screen."
          },
          {
            "speaker": "RHONDA",
            "text": "Of course I do."
          },
          {
            "text": "She folds her hands in her lap."
          },
          {
            "speaker": "RHONDA",
            "text": "Applause is nice. A laugh like that stays in the bones."
          }
        ],
        "effects": {
          "friendship": {
            "rhonda": 2
          },
          "memories": [
            "rhonda_hat_laugh"
          ],
          "flags": {
            "rhonda_told_hat_story": true
          }
        }
      },
      {
        "text": "I didn’t think you’d like slapstick.",
        "outcome": [
          {
            "speaker": "RHONDA",
            "text": "Darling, I have been married twice. I understand slapstick."
          },
          {
            "text": "She turns back to the blank screen, still smiling."
          }
        ],
        "effects": {
          "friendship": {
            "rhonda": 1
          },
          "memories": [
            "rhonda_hat_laugh"
          ],
          "flags": {
            "rhonda_told_hat_story": true
          }
        }
      }
    ]
  },
  "rhonda_old_box": {
    "title": "The old box",
    "location": "Community Lounge",
    "art": "Community Lounge",
    "content": [
      {
        "text": "Someone has left three cardboard boxes beside the piano."
      },
      {
        "text": "The labels read: TAX 2002. CHRISTMAS THINGS. DO NOT OPEN UNLESS DEAD."
      },
      {
        "text": "Rhonda is holding a feather boa."
      },
      {
        "speaker": "RHONDA",
        "text": "I appear to have been robbed by my younger self."
      }
    ],
    "choices": [
      {
        "text": "Do you need help?",
        "outcome": [
          {
            "speaker": "RHONDA",
            "text": "Need? No."
          },
          {
            "text": "She looks at the boxes."
          },
          {
            "speaker": "RHONDA",
            "text": "Want? Possibly."
          },
          {
            "text": "Inside are old photographs, folded programmes, newspaper clippings, yellowing scripts, and a pair of shoes that look impossible to walk in."
          },
          {
            "text": "Rhonda lifts a photo. A younger Rhonda smiles beside three children in matching jumpers."
          },
          {
            "speaker": "RHONDA",
            "text": "My eldest made that face for seven straight years. I thought she’d become a critic."
          },
          {
            "speaker": "PLAYER",
            "text": "Your kids are in film, aren’t they?"
          },
          {
            "speaker": "RHONDA",
            "text": "All three."
          },
          {
            "text": "She says it proudly. Too proudly."
          },
          {
            "speaker": "RHONDA",
            "text": "Clever things. Very busy. London, Toronto, Los Angeles. I practically need a production schedule to ring them."
          }
        ],
        "effects": {
          "friendship": {
            "rhonda": 1
          },
          "memories": [
            "rhonda_children_film"
          ]
        }
      },
      {
        "text": "Should I ask about the box?",
        "outcome": [
          {
            "text": "Rhonda looks at the label."
          },
          {
            "speaker": "RHONDA",
            "text": "Absolutely not."
          },
          {
            "text": "She lasts about two seconds."
          },
          {
            "speaker": "RHONDA",
            "text": "Alright, I’ll tell you."
          },
          {
            "text": "She sits on the edge of a box."
          },
          {
            "speaker": "RHONDA",
            "text": "I had children, and the work slowed."
          },
          {
            "text": "She picks up a programme."
          },
          {
            "speaker": "RHONDA",
            "text": "Then the roles got smaller. Somehow I became too old for ingénues, too young for grandmothers, and I’m too glamorous for mothers, which sounds flattering until you realise it means unemployed."
          },
          {
            "text": "She laughs once."
          },
          {
            "speaker": "RHONDA",
            "text": "So when the children showed interest, I thought, good. There it is. The door is still open, just not for me."
          }
        ],
        "effects": {
          "friendship": {
            "rhonda": 2
          },
          "memories": [
            "rhonda_children_film"
          ]
        }
      },
      {
        "text": "That boa suits you.",
        "outcome": [
          {
            "text": "She drapes it around her neck immediately."
          },
          {
            "speaker": "RHONDA",
            "text": "Everything suits me, dear."
          },
          {
            "text": "She winks."
          },
          {
            "text": "Then she looks down at the programmes in the box."
          },
          {
            "speaker": "PLAYER",
            "text": "Do you miss performing?"
          },
          {
            "speaker": "RHONDA",
            "text": "No."
          },
          {
            "text": "Then she touches the feather boa."
          },
          {
            "speaker": "RHONDA",
            "text": "Yes."
          },
          {
            "text": "Then:"
          },
          {
            "speaker": "RHONDA",
            "text": "Not in the way people think."
          },
          {
            "text": "She picks up a tiny theatre programme."
          },
          {
            "speaker": "RHONDA",
            "text": "This one. Awful play. Terrible reviews. We performed for twenty-seven people and a damp patch on the ceiling."
          },
          {
            "text": "The memory gets the better of her for a second."
          },
          {
            "speaker": "RHONDA",
            "text": "Best laugh I ever got."
          },
          {
            "text": "She looks at the programme."
          },
          {
            "speaker": "RHONDA",
            "text": "Isn’t that annoying?"
          }
        ],
        "effects": {
          "friendship": {
            "rhonda": 2
          },
          "memories": [
            "rhonda_miss_performing"
          ]
        }
      }
    ]
  },
  "rhonda_concert_notice": {
    "title": "The notice",
    "location": "Noticeboard",
    "art": "Noticeboard",
    "content": [
      {
        "text": "Pinned crookedly over the usual notices is a fresh sheet of paper."
      },
      {
        "text": "SUMMER HILLS AUTUMN CONCERT. Performers wanted. Singers, readers, musicians, dancers, comedians, magicians, poets, and persons with unclear but enthusiastic talents. See Rhonda. Do not see Al. He has already suggested a costume change."
      },
      {
        "text": "Below it, in different handwriting: I STAND BY THE COSTUME CHANGE. — Al"
      },
      {
        "text": "Rhonda is standing nearby with a pen, looking pleased with herself."
      },
      {
        "speaker": "RHONDA",
        "text": "There you are."
      },
      {
        "speaker": "PLAYER",
        "text": "Me?"
      },
      {
        "speaker": "RHONDA",
        "text": "Don’t sound so frightened. I haven’t cast you yet."
      }
    ],
    "choices": [
      {
        "text": "This is your doing, isn’t it?",
        "outcome": [
          {
            "speaker": "RHONDA",
            "text": "Naturally."
          },
          {
            "text": "She taps the notice with the pen."
          },
          {
            "speaker": "RHONDA",
            "text": "This place needs a little noise."
          },
          {
            "text": "Behind her, Al reads the note again and nods to himself."
          }
        ],
        "effects": {
          "friendship": {
            "rhonda": 1,
            "al": 1
          },
          "flags": {
            "concert_started": true
          }
        }
      },
      {
        "text": "Are you performing?",
        "outcome": [
          {
            "text": "Rhonda’s smile holds."
          },
          {
            "speaker": "RHONDA",
            "text": "We’ll see."
          },
          {
            "text": "She writes your name neatly at the bottom of her clipboard."
          },
          {
            "speaker": "RHONDA",
            "text": "For now, you can help."
          }
        ],
        "effects": {
          "friendship": {
            "rhonda": 1
          },
          "flags": {
            "concert_started": true
          }
        }
      },
      {
        "text": "Good luck with that.",
        "outcome": [
          {
            "speaker": "RHONDA",
            "text": "Luck is what people call preparation when they arrive late."
          },
          {
            "text": "She looks pointedly at the sign-up sheet."
          },
          {
            "speaker": "RHONDA",
            "text": "Don’t arrive late."
          }
        ],
        "effects": {
          "friendship": {
            "rhonda": 0
          },
          "flags": {
            "concert_started": true
          }
        }
      }
    ]
  },
  "rhonda_recruitment": {
    "title": "Recruitment",
    "location": "Community Lounge",
    "art": "Community Lounge",
    "content": [
      {
        "text": "Rhonda sits upright at a table in the lounge, looking right at home with a clipboard, coloured pens, and a list of names."
      },
      {
        "text": "You spot your own name among them."
      },
      {
        "speaker": "RHONDA",
        "text": "A village concert needs structure."
      },
      {
        "speaker": "AL",
        "text": "I thought it needed talent."
      },
      {
        "speaker": "RHONDA",
        "text": "Structure first. Talent second. Enthusiasm third."
      },
      {
        "text": "Bob stands near the back, arms folded."
      },
      {
        "speaker": "BOB",
        "text": "I’m not singing."
      },
      {
        "speaker": "RHONDA",
        "text": "Nobody asked you to sing."
      },
      {
        "speaker": "BOB",
        "text": "Good."
      },
      {
        "speaker": "RHONDA",
        "text": "You’re reading."
      },
      {
        "speaker": "BOB",
        "text": "Reading what?"
      },
      {
        "speaker": "RHONDA",
        "text": "Don’t worry. It will be short."
      },
      {
        "text": "Bob relaxes half an inch."
      },
      {
        "speaker": "RHONDA",
        "text": "But moving."
      },
      {
        "text": "Bob turns red."
      },
      {
        "text": "Pablo arrives carrying a tray of biscuits."
      },
      {
        "speaker": "PABLO",
        "text": "I only came to bring these."
      },
      {
        "text": "Rhonda takes the tray."
      },
      {
        "speaker": "RHONDA",
        "text": "And now you’re catering."
      },
      {
        "text": "Pablo laughs."
      },
      {
        "speaker": "PABLO",
        "text": "Ah. That’s how they get you."
      }
    ],
    "choices": [
      {
        "text": "You’re enjoying this.",
        "outcome": [
          {
            "text": "Rhonda beams."
          },
          {
            "speaker": "RHONDA",
            "text": "Immensely."
          },
          {
            "text": "She looks around the room. People are arguing, laughing, chatting away."
          },
          {
            "speaker": "RHONDA",
            "text": "Look at them. Half of them came to complain and now they’re helping."
          }
        ],
        "effects": {
          "friendship": {
            "rhonda": 2
          },
          "flags": {
            "rhonda_recruitment_seen": true
          }
        }
      },
      {
        "text": "Maybe don’t bully everyone.",
        "outcome": [
          {
            "speaker": "RHONDA",
            "text": "I am not bullying. I am inspiring."
          },
          {
            "text": "Bob gives you a look that suggests he is not inspired."
          },
          {
            "text": "Al puts his name down for one song. Then tries to make it two."
          }
        ],
        "effects": {
          "friendship": {
            "rhonda": 0,
            "bob": 1
          },
          "flags": {
            "rhonda_recruitment_seen": true
          }
        }
      },
      {
        "text": "What do you want me to do?",
        "outcome": [
          {
            "text": "Rhonda hands you a pen."
          },
          {
            "speaker": "RHONDA",
            "text": "Find out who secretly wants to perform but is waiting to be discovered."
          },
          {
            "speaker": "PLAYER",
            "text": "How will I know?"
          },
          {
            "speaker": "RHONDA",
            "text": "They’ll say, ‘Oh no, not me,’ while standing very close to the sign-up sheet."
          }
        ],
        "effects": {
          "friendship": {
            "rhonda": 2
          },
          "flags": {
            "rhonda_recruitment_seen": true,
            "player_helped_recruit": true
          }
        }
      }
    ]
  },
  "rhonda_rehearsal": {
    "title": "First rehearsal",
    "location": "Hall",
    "art": "Hall",
    "content": [
      {
        "text": "The hall is busy."
      },
      {
        "text": "Jean wants to include a protest song. Al wants to open with something from 1967 and won’t say what. Bob is standing beside the stage holding a poem. Pablo is measuring the trestle tables because, if he is feeding people, he intends to do it properly."
      },
      {
        "text": "Rhonda claps twice."
      },
      {
        "speaker": "RHONDA",
        "text": "From the top."
      },
      {
        "speaker": "AL",
        "text": "Whose top?"
      },
      {
        "text": "Rhonda looks at him."
      },
      {
        "text": "Al grins and sits down."
      },
      {
        "text": "The rehearsal begins."
      },
      {
        "text": "It immediately stops."
      },
      {
        "speaker": "RHONDA",
        "text": "No, no. Bob, darling, you cannot read a poem like you’re announcing train delays."
      },
      {
        "text": "Bob looks mortified."
      },
      {
        "speaker": "BOB",
        "text": "I told you I shouldn’t do it."
      },
      {
        "text": "Rhonda’s face flickers."
      }
    ],
    "choices": [
      {
        "text": "Give him a minute.",
        "outcome": [
          {
            "text": "Rhonda exhales."
          },
          {
            "speaker": "RHONDA",
            "text": "Fine."
          },
          {
            "text": "Then, softer:"
          },
          {
            "speaker": "RHONDA",
            "text": "A minute."
          },
          {
            "text": "Bob nods at you once."
          },
          {
            "text": "Later, when people drift out, Rhonda remains in the hall, rearranging chairs that do not need rearranging."
          },
          {
            "speaker": "PLAYER",
            "text": "You all right?"
          },
          {
            "speaker": "RHONDA",
            "text": "Never ask an actress that. We’re trained to lie."
          },
          {
            "text": "She looks at the little stage."
          },
          {
            "speaker": "RHONDA",
            "text": "No."
          },
          {
            "text": "She looks at the little stage."
          },
          {
            "speaker": "RHONDA",
            "text": "It’s smaller than I remembered."
          },
          {
            "speaker": "PLAYER",
            "text": "The stage?"
          },
          {
            "speaker": "RHONDA",
            "text": "Everything."
          }
        ],
        "effects": {
          "friendship": {
            "rhonda": 2,
            "bob": 1
          },
          "flags": {
            "rhonda_rehearsal_seen": true
          }
        }
      },
      {
        "text": "Bob’s doing better than Al.",
        "outcome": [
          {
            "speaker": "AL",
            "text": "Impossible."
          },
          {
            "speaker": "RHONDA",
            "text": "Sadly, no."
          },
          {
            "text": "Bob looks down at his clipboard."
          },
          {
            "text": "Rehearsal resumes. It is not good, but it is louder than it was."
          }
        ],
        "effects": {
          "friendship": {
            "rhonda": 1,
            "bob": 1,
            "al": 1
          },
          "flags": {
            "rhonda_rehearsal_seen": true
          }
        }
      },
      {
        "text": "Rhonda, maybe ease up.",
        "outcome": [
          {
            "text": "Rhonda turns."
          },
          {
            "speaker": "RHONDA",
            "text": "I beg your pardon?"
          },
          {
            "text": "The room goes quiet."
          },
          {
            "speaker": "RHONDA",
            "text": "This is not a bus tour. I am not here for the scenery."
          },
          {
            "text": "Later, you see Bob leave early. Rhonda watches him go and says nothing."
          }
        ],
        "effects": {
          "friendship": {
            "rhonda": -1,
            "bob": 1
          },
          "flags": {
            "rhonda_rehearsal_seen": true,
            "rhonda_pushed_too_hard": true
          }
        }
      }
    ]
  },
  "rhonda_final_rehearsal": {
    "title": "Final rehearsal",
    "location": "Hall",
    "art": "Hall",
    "content": [
      {
        "text": "Final rehearsal is less organised than Rhonda wants and more organised than anyone else expected."
      },
      {
        "text": "Al sings half a song and flirts with the front row, which is currently three empty chairs and Bob."
      },
      {
        "text": "Pablo checks the trestle tables again."
      },
      {
        "text": "Rhonda keeps her script folded in one hand."
      },
      {
        "speaker": "RHONDA",
        "text": "Again. From the beginning. And if anyone says ‘whose beginning,’ I shall retire immediately."
      }
    ],
    "choices": [
      {
        "text": "Stay and help move chairs.",
        "outcome": [
          {
            "text": "You help move chairs. Then move them back when Rhonda changes her mind."
          },
          {
            "text": "She notices. She says nothing. Then she puts your chair in the front row."
          }
        ],
        "effects": {
          "friendship": {
            "rhonda": 1
          },
          "flags": {
            "helped_final_rehearsal": true
          }
        }
      },
      {
        "text": "Ask Rhonda if she needs anything.",
        "outcome": [
          {
            "speaker": "RHONDA",
            "text": "A younger spine, a better curtain, and Al to discover shame."
          },
          {
            "text": "She looks at the stage."
          },
          {
            "speaker": "RHONDA",
            "text": "Failing that, stay where I can see you."
          }
        ],
        "effects": {
          "friendship": {
            "rhonda": 2
          },
          "flags": {
            "helped_final_rehearsal": true
          }
        }
      },
      {
        "text": "Leave them to it.",
        "outcome": [
          {
            "text": "You slip out while Jean is arguing for one more verse."
          },
          {
            "text": "Behind you, Rhonda calls for quiet and gets almost some of it."
          }
        ],
        "effects": {
          "flags": {
            "skipped_final_rehearsal": true
          }
        }
      }
    ],
    "variants": [
      {
        "when": {
          "seenScene": "rhonda_final_rehearsal"
        },
        "content": [
          {
            "text": "The hall has reached the stage of rehearsal where everyone knows what they are meant to do and several people are doing something else."
          },
          {
            "text": "Rhonda stands near the front row with her script folded in one hand and a pencil behind one ear."
          },
          {
            "speaker": "RHONDA",
            "text": "Good. You’re here. I need either assistance or a witness. Possibly both."
          }
        ],
        "choices": [
          {
            "text": "Take a seat where she can see you.",
            "outcome": [
              {
                "text": "You sit in the front row. Rhonda looks over twice during Al’s song and once during Bob’s reading."
              },
              {
                "text": "By the end, the pencil has migrated from behind her ear to her hand to the table, but the script is still folded closed."
              }
            ],
            "effects": {
              "friendship": {
                "rhonda": 1
              },
              "flags": {
                "helped_final_rehearsal": true
              }
            }
          },
          {
            "text": "Ask what still needs doing.",
            "outcome": [
              {
                "speaker": "RHONDA",
                "text": "Everything, briefly. Then nothing, abruptly. That is theatre."
              },
              {
                "text": "She gives you a list anyway. Most of it is chairs. Some of it is diplomacy."
              }
            ],
            "effects": {
              "friendship": {
                "rhonda": 2
              },
              "flags": {
                "helped_final_rehearsal": true
              }
            }
          },
          {
            "text": "Leave before you are given a clipboard.",
            "outcome": [
              {
                "text": "You retreat before Rhonda can assign you responsibility for curtains, morale, or Al."
              },
              {
                "text": "Behind you, she calls for quiet and nearly gets it."
              }
            ],
            "effects": {
              "flags": {
                "skipped_final_rehearsal": true
              }
            }
          }
        ]
      }
    ]
  },
  "rhonda_lounge_before_show": {
    "title": "Before the show",
    "location": "Community Lounge",
    "art": "Community Lounge",
    "content": [
      {
        "text": "Rhonda is holding court in the lounge, but she keeps glancing toward the hall."
      },
      {
        "speaker": "AL",
        "text": "Nervous?"
      },
      {
        "speaker": "RHONDA",
        "text": "Don’t be absurd."
      },
      {
        "speaker": "AL",
        "text": "I meant me."
      },
      {
        "speaker": "RHONDA",
        "text": "Then yes, but only because you keep threatening leather trousers."
      },
      {
        "text": "Al looks delighted."
      }
    ],
    "choices": [
      {
        "text": "Sit with them for a while.",
        "outcome": [
          {
            "text": "You sit. Rhonda does most of the talking. Al does most of the interrupting."
          },
          {
            "text": "It helps, though neither of them would admit it."
          }
        ],
        "effects": {
          "friendship": {
            "rhonda": 1,
            "al": 1
          }
        }
      },
      {
        "text": "Wish Rhonda luck.",
        "outcome": [
          {
            "speaker": "RHONDA",
            "text": "Luck is for amateurs."
          },
          {
            "text": "She looks down at her hands."
          },
          {
            "speaker": "RHONDA",
            "text": "Thank you."
          }
        ],
        "effects": {
          "friendship": {
            "rhonda": 1
          }
        }
      }
    ]
  },
  "rhonda_night_before": {
    "title": "The night before",
    "location": "Hall",
    "art": "Hall",
    "content": [
      {
        "text": "The hall is empty except for Rhonda."
      },
      {
        "text": "She stands on the stage in ordinary clothes, holding a script."
      },
      {
        "text": "No scarf. No pearls. No grin."
      },
      {
        "text": "For a moment, she looks less like Rhonda and more like someone who has put the armour down."
      },
      {
        "speaker": "RHONDA",
        "text": "I thought I’d forgotten how to be nervous."
      },
      {
        "text": "She laughs quietly."
      }
    ],
    "choices": [
      {
        "text": "You’ll be great. Everyone will love you.",
        "outcome": [
          {
            "text": "Rhonda smiles, but it doesn’t reach her eyes."
          },
          {
            "speaker": "RHONDA",
            "text": "Yes. Well."
          },
          {
            "text": "She looks down at the script."
          },
          {
            "speaker": "RHONDA",
            "text": "That was always the plan, wasn’t it?"
          }
        ],
        "effects": {
          "friendship": {
            "rhonda": 0
          },
          "flags": {
            "rhonda_night_before_failed": true
          }
        }
      },
      {
        "text": "You don’t have to do it if you don’t want to.",
        "outcome": [
          {
            "text": "Rhonda closes her eyes."
          },
          {
            "speaker": "RHONDA",
            "text": "That is the kindest and most dangerous thing anyone has said to me all week."
          }
        ],
        "effects": {
          "friendship": {
            "rhonda": 0
          },
          "flags": {
            "rhonda_night_before_failed": true
          }
        }
      },
      {
        "text": "Remember the comedy you told me about? The hat?",
        "requiresMemory": "rhonda_hat_laugh",
        "outcome": [
          {
            "text": "Rhonda looks up."
          },
          {
            "speaker": "RHONDA",
            "text": "The hat?"
          },
          {
            "speaker": "PLAYER",
            "text": "You said every night, when it went, the room lost it."
          },
          {
            "text": "For once, Rhonda says nothing."
          },
          {
            "speaker": "PLAYER",
            "text": "Maybe tomorrow doesn’t have to prove anything bigger than that."
          },
          {
            "text": "Rhonda looks at the empty chairs."
          },
          {
            "text": "Then she laughs."
          },
          {
            "speaker": "RHONDA",
            "text": "The hat."
          },
          {
            "text": "She presses the script to her chest."
          },
          {
            "speaker": "RHONDA",
            "text": "They roared about that hat."
          }
        ],
        "effects": {
          "friendship": {
            "rhonda": 3
          },
          "flags": {
            "rhonda_night_before_success": true
          }
        }
      },
      {
        "text": "You said you didn’t miss performing the way people think.",
        "requiresMemory": "rhonda_miss_performing",
        "outcome": [
          {
            "text": "Rhonda looks down at the script."
          },
          {
            "speaker": "PLAYER",
            "text": "You said the best laugh you ever got was in a tiny theatre."
          },
          {
            "speaker": "PLAYER",
            "text": "Maybe you don’t miss the spotlight."
          },
          {
            "speaker": "PLAYER",
            "text": "Maybe you miss the room laughing with you."
          },
          {
            "text": "Rhonda presses the script against her chest."
          },
          {
            "speaker": "RHONDA",
            "text": "I said that, did I?"
          },
          {
            "text": "She looks out over the empty chairs."
          },
          {
            "speaker": "RHONDA",
            "text": "How inconvenient of you to listen."
          }
        ],
        "effects": {
          "friendship": {
            "rhonda": 3
          },
          "flags": {
            "rhonda_night_before_success": true
          }
        }
      }
    ]
  }
};
