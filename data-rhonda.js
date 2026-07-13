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
        "text": "And then the director said, ‘Rhonda, darling, could you try looking at him as though you’re in love? You look positively contemptuous.’"
      },
      {
        "speaker": "RHONDA",
        "text": "I said, ‘Mark, darling, at this point in the film I’ve been married to him for eight years. I’m looking at him exactly as I ought.”"
      },
      {
        "text": "A few residents laugh."
      },
      {
        "text": "Rhonda notices you near the doorway. She peers down her nose at you."
      },
      {
        "speaker": "RHONDA",
        "text": "Oh, hello, new face."
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
            "text": "Interrupt? Please. A touch of novelty is never unwanted here."
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
            "speaker": "JEAN",
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
            "text": "Still am, depending on who you ask. Although some might feel “infamous” a better fit."
          },
          {
            "speaker": "RHONDA",
            "text": "There you are."
          },
          {
            "speaker": "AL",
            "text": "Mostly women with questionable judgment."
          },
          {
            "speaker": "RHONDA",
            "text": "Of course. The best audience."
          }
        ],
        "effects": {
          "friendship": {
            "rhonda": 2,
            "al": 1
          },
          "flags": {
            "met_rhonda": true,
            "met_al": true,
            "met_jean": true
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
            "text": "Although theatre was my true love. Now, come and sit down before you say something worse."
          },
          {
            "text": "She smiles. You sit."
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
            "text": "Now, where was I? Ah yes. The authentic portrayal of marriage."
          },
          {
            "text": "You leave. As you walk down the hall, you hear them laughing again."
          }
        ],
        "effects": {
          "flags": {
            "avoided_rhonda_first": true,
            "met_rhonda": true
          }
        }
      }
    ]
  },
  "rhonda_pottery": {
    "title": "Pottery",
    "location": "Craft Room",
    "art": "Craft Room",
    "content": [
      {
        "text": "The craft room is calm. People are chatting, laughing, and making uneven bowls and plenty of mess."
      },
      {
        "text": "Rhonda is the only person who looks tense."
      },
      {
        "text": "She sits at the nearest wheel in an outfit that’s far too nice for the occasion. Her clay has collapsed."
      },
      {
        "text": "She looks at it with an expression of disgust."
      },
      {
        "speaker": "RHONDA",
        "text": "Ugh, it’s a disaster. Don’t look at it."
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
            "text": "I don’t blame you. It’s like a train wreck."
          },
          {
            "text": "The clay slumps further."
          },
          {
            "speaker": "RHONDA",
            "text": "Oh, be like that then, foul lump."
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
        "text": "It has character.",
        "outcome": [
          {
            "text": "Rhonda stares at it."
          },
          {
            "speaker": "RHONDA",
            "text": "So did my second husband. But that didn't save our marriage."
          },
          {
            "text": "She tries to lift the clay. It slumps."
          },
          {
            "speaker": "RHONDA",
            "text": "Character, indeed."
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
            "text": "You suppress a chuckle. Rhonda notices."
          },
          {
            "speaker": "RHONDA",
            "text": "Oh, stop it. It could well be a vase! For particularly wide and flat cacti. Or rocks."
          },
          {
            "text": "The pottery teacher passes behind her and says something encouraging. Rhonda smiles too brightly until she’s gone. She turns to you, rolling her eyes."
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
            "text": "Because some of us have spent a great deal of effort becoming charmingly competent, and don't wish to revert."
          },
          {
            "text": "You both laugh."
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
            "text": "Alright. Hold that silly thing so it doesn't wobble on me."
          },
          {
            "text": "You sit beside her and steady the wheel while she tries again."
          },
          {
            "text": "The second attempt is not beautiful, but it stands up."
          },
          {
            "speaker": "RHONDA",
            "text": "Well. That's something."
          },
          {
            "text": "She wipes clay from her wrist."
          },
          {
            "speaker": "RHONDA",
            "text": "I once had to wear a sequinned gown and full makeup under studio lights for fourteen hours, and I was more comfortable in those conditions than I am in this room."
          },
          {
            "speaker": "PLAYER",
            "text": "What was that for?"
          },
          {
            "speaker": "RHONDA",
            "text": "Television. The Good Friday Appeal. Bert Newton did the talking. I did the smiling and the gesturing at things. I had a sickening migraine by the end of it."
          },
          {
            "text": "She smiles."
          },
          {
            "speaker": "RHONDA",
            "text": "Still. The camera loved me."
          }
        ],
        "effects": {
          "friendship": {
            "rhonda": 2
          },
          "flags": {
            "helped_rhonda_pottery": true,
            "met_rhonda": true
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
        "text": "The labels read: MISCELLANEOUS MEMORIES. DO NOT OPEN UNLESS DEAD."
      },
      {
        "text": "Rhonda is holding a feather boa."
      },
      {
        "speaker": "RHONDA",
        "text": "Hello."
      },
      {
        "text": "She gestures at the boxes."
      },
      {
        "speaker": "RHONDA",
        "text": "Deliveries from the storage unit."
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
        "nextSceneId": "rhonda_old_box_c1",
        "flow": true
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
            "text": "Well, yes."
          },
          {
            "text": "Then:"
          },
          {
            "speaker": "RHONDA",
            "text": "But not in the way people think."
          },
          {
            "text": "She picks up a tiny theatre programme."
          },
          {
            "speaker": "RHONDA",
            "text": "See? Look at this one. Awful play. Terrible reviews. We performed for twenty-seven people and half of them were friends we dragged in to watch us."
          },
          {
            "text": "The memory gets the better of her for a second."
          },
          {
            "speaker": "RHONDA",
            "text": "I played a rich lady with a poodle, and my friend Steve played the poodle. There was one scene where I tripped over him. Best laugh I ever got."
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
      },
      {
        "text": "Good luck with that.",
        "outcome": [
          {
            "text": "Rhonda blinks."
          },
          {
            "speaker": "RHONDA",
            "text": "I don’t need luck, my dear."
          },
          {
            "text": "You leave her to sort through the boxes."
          }
        ],
        "effects": {
          "friendship": {
            "rhonda": -1
          }
        }
      }
    ]
  },
  "rhonda_old_box_c1": {
    "title": "The old box",
    "location": "Community Lounge",
    "art": "Community Lounge",
    "content": [],
    "choices": [
      {
        "text": "Is that what they wanted?",
        "outcome": [
          {
            "text": "She narrows her eyes at you."
          },
          {
            "speaker": "RHONDA",
            "text": "Careful."
          },
          {
            "text": "She sighs."
          },
          {
            "speaker": "RHONDA",
            "text": "Not always. But they’re happy now, I think."
          },
          {
            "text": "She sits on the arm of a couch."
          },
          {
            "speaker": "RHONDA",
            "text": "When I had children, the work slowed."
          },
          {
            "text": "She picks up a programme."
          },
          {
            "speaker": "RHONDA",
            "text": "The roles got smaller. I became too old for ingénues, too young for old matrons, and I was still too glamorous for mothers, which sounds good until you realise it means I was unemployed."
          },
          {
            "text": "She laughs once."
          },
          {
            "speaker": "RHONDA",
            "text": "So when the children showed interest, I thought, good. There it is. The door is still open, just not for me."
          },
          {
            "text": "She pauses."
          },
          {
            "speaker": "RHONDA",
            "text": "They’ve done very well. I'm proud of them."
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
        "text": "You must be very proud.",
        "outcome": [
          {
            "text": "She smiles at you."
          },
          {
            "speaker": "RHONDA",
            "text": "I am."
          },
          {
            "text": "She considers the programme."
          },
          {
            "speaker": "RHONDA",
            "text": "They’ve done well. Successful careers, happy marriages - they've done what I couldn't."
          },
          {
            "text": "She smiles, but her eyes don't."
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
        "text": "She sees you and lifts her hand to wave you over."
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
      }
    ],
    "choices": [
      {
        "text": "It looked painful.",
        "outcome": [
          {
            "speaker": "RHONDA",
            "text": "That’s why it’s funny!"
          },
          {
            "text": "You look at her, mildly concerned."
          },
          {
            "speaker": "RHONDA",
            "text": "You know …As a bit."
          }
        ],
        "effects": {
          "flags": {
            "met_rhonda": true
          }
        }
      },
      {
        "text": "She timed it perfectly.",
        "outcome": [
          {
            "speaker": "RHONDA",
            "text": "Yes! A moment earlier or later and it wouldn't land. Comedy is harder than drama. People think it’s easier, but that’s because they’re not paying attention. The timing is everything."
          }
        ],
        "effects": {
          "flags": {
            "met_rhonda": true
          }
        }
      }
    ],
    "variants": [
      {
        "when": {
          "minFriendship": {
            "rhonda": 4
          }
        },
        "choices": [
          {
            "text": "It looked painful.",
            "outcome": [
              {
                "speaker": "RHONDA",
                "text": "That’s why it’s funny!"
              },
              {
                "text": "You look at her, mildly concerned."
              },
              {
                "speaker": "RHONDA",
                "text": "You know …As a bit."
              }
            ],
            "nextSceneId": "rhonda_movie_night_tail",
            "flow": true
          },
          {
            "text": "She timed it perfectly.",
            "outcome": [
              {
                "speaker": "RHONDA",
                "text": "Yes! A moment earlier or later and it wouldn't land. Comedy is harder than drama. People think it’s easier, but that’s because they’re not paying attention. The timing is everything."
              }
            ],
            "nextSceneId": "rhonda_movie_night_tail",
            "flow": true
          }
        ]
      }
    ]
  },
  "rhonda_movie_night_tail": {
    "title": "Movie night",
    "location": "Cinema Room",
    "art": "Cinema Room",
    "content": [
      {
        "text": "After the film, people shuffle out slowly, still talking about the ending."
      },
      {
        "text": "Rhonda remains seated for a moment."
      },
      {
        "speaker": "RHONDA",
        "text": "You know, I played a bit part in a terrible play once. ‘Bishops and Bombshells’, it was called. Awful writing. I came on in the second act, insulted a priest, lost my hat, left again."
      },
      {
        "speaker": "RHONDA",
        "text": "It wasn’t much. But every night, when the hat went, the room lost it. Once, we had to get the cleaner in because an audience member wet her pants, she was laughing so hard! At least, I hope that's why."
      },
      {
        "text": "She laughs, and then says softly:"
      },
      {
        "speaker": "RHONDA",
        "text": "That was the best role I ever had."
      }
    ],
    "choices": [
      {
        "text": "Poor woman, she must have been embarrassed.",
        "outcome": [
          {
            "text": "She glances at you."
          },
          {
            "speaker": "RHONDA",
            "text": "Yes, well. I've had three children. One becomes desensitised to such things."
          },
          {
            "text": "You both laugh."
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
            "text": "Yes. Exactly. It had to be just right to undercut the character's rage."
          },
          {
            "text": "She mimes it: the slow turn, a hand rising to a hat that is no longer there."
          },
          {
            "speaker": "RHONDA",
            "text": "That moment of righteous satisfaction before she realises - that’s the whole joke."
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
            "text": "I do."
          },
          {
            "text": "She folds her hands in her lap."
          },
          {
            "speaker": "RHONDA",
            "text": "Applause is nice. But a raucous laugh? That goes to the soul."
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
            "text": "Darling, I have had two husbands and three children. I've lived slapstick."
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
    ],
    "when": {
      "minFriendship": {
        "rhonda": 4
      }
    }
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
        "text": "SUMMER HILLS AUTUMN CONCERT. Performers wanted. Singers, readers, musicians, dancers, comedians, magicians, poets, and all manner of persons with talents."
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
            "text": "She grins"
          },
          {
            "speaker": "RHONDA",
            "text": "This place needs a little excitement."
          },
          {
            "text": "Behind her, Al reads the note again and nods to himself."
          },
          {
            "speaker": "AL",
            "text": "Exactly. About time my talent found an outlet here."
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
            "text": "Rhonda’s smile thins a little."
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
        "text": "I'm not interested in shows.",
        "outcome": [
          {
            "speaker": "RHONDA",
            "text": "Nor are shows in you, I would think."
          }
        ],
        "effects": {
          "friendship": {
            "rhonda": -1
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
        "text": "Structure first. Talent second."
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
        "text": "A poem! Don’t worry. It can be short."
      },
      {
        "text": "Bob frowns."
      },
      {
        "speaker": "RHONDA",
        "text": "But moving."
      },
      {
        "text": "He turns red."
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
        "text": "Ah. That's how they get you!"
      },
      {
        "text": "He shakes his head, but his face betrays that he's pleased."
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
          },
          {
            "text": "She leans in and lowers her voice"
          },
          {
            "speaker": "RHONDA",
            "text": "They may complain about helping, but they'll be helping."
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
            "rhonda": -1,
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
        "text": "Nervous."
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
        "text": "Oh. Well, perhaps you should break out the leather slacks."
      },
      {
        "text": "Al looks delighted. You're not sure whether you've just heard an in-joke, or if Al really owns leather slacks. You're afraid to ask."
      }
    ],
    "choices": [
      {
        "text": "Sit with them for a while.",
        "outcome": [
          {
            "text": "You sit. Rhonda does most of the talking. Al nods along and occasionally punctuates her words with a few phrases of song."
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
            "text": "She looks down at her hands, then whispers:"
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
  "rhonda_rehearsal": {
    "title": "First rehearsal",
    "location": "Hall",
    "art": "Hall",
    "content": [
      {
        "text": "The hall is busy."
      },
      {
        "text": "Jean wants to include a protest song. Al wants to open with a Johnny O'Keefe number. Bob is standing beside the stage holding a poem, looking as though he'd quite like to throw it in the bin. Pablo is eyeing the trestle tables."
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
        "text": "What was that? Take off my top?"
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
        "text": "It soon stops."
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
        "text": "Rhonda’s face flickers, and her tone softens considerably."
      },
      {
        "speaker": "RHONDA",
        "text": "Of course you should. You'll be great. Again, come on."
      }
    ],
    "choices": [
      {
        "text": "Give him a minute. We could all use a break.",
        "outcome": [
          {
            "text": "Rhonda exhales."
          },
          {
            "speaker": "RHONDA",
            "text": "Yes. Take a break. Come back in ten, all."
          },
          {
            "text": "Bob nods at you once."
          },
          {
            "text": "As people drift out, Rhonda remains in place."
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
            "text": "It’s smaller than I remembered."
          },
          {
            "speaker": "PLAYER",
            "text": "The stage?"
          },
          {
            "speaker": "RHONDA",
            "text": "I don't know. The stage. Me. Everything."
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
            "text": "Impossible!"
          },
          {
            "text": "Al feigns moral outrage while Rhonda laughs."
          },
          {
            "speaker": "RHONDA",
            "text": "He is. You are, Bob."
          },
          {
            "text": "Bob smiles at his feet."
          },
          {
            "text": "Rehearsal resumes, a little louder this time."
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
            "text": "Pressure makes diamonds. Ease makes failures."
          },
          {
            "text": "She looks around and realises nobody else feels the same way."
          },
          {
            "speaker": "RHONDA",
            "text": "No, sorry, you're right."
          },
          {
            "text": "She turns to Bob."
          },
          {
            "speaker": "RHONDA",
            "text": "Take your time, dear."
          }
        ],
        "effects": {
          "friendship": {
            "rhonda": 0,
            "bob": 1
          },
          "flags": {
            "rhonda_rehearsal_seen": true
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
        "text": "Final rehearsal. Al sings half of his song and flirts with the front row, which is currently three empty chairs and Bob."
      },
      {
        "text": "Pablo checks the trestle tables again."
      },
      {
        "text": "Rhonda keeps her runsheet folded in one hand."
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
            "text": "A younger spine, a cigarette and a shot of vodka."
          },
          {
            "text": "She looks at the stage."
          },
          {
            "speaker": "RHONDA",
            "text": "Failing that, stay where I can see you."
          },
          {
            "text": "She leans in a little."
          },
          {
            "speaker": "RHONDA",
            "text": "And please come and see me the night before. I always get the willies on Opening Night Eve."
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
            "text": "The hall has reached the stage of rehearsal where everyone knows what they are meant to do."
          },
          {
            "text": "Rhonda stands near the front row with her runsheet folded in one hand and a pencil behind one ear."
          },
          {
            "speaker": "RHONDA",
            "text": "Good. You’re here. I need both material and moral support. Possibly more."
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
                "text": "Everything, please."
              },
              {
                "text": "She gives you a list anyway, then leans in."
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
                "text": "You retreat before Rhonda can assign you responsibility for anything."
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
        "text": "It's just a retirement village talent show.",
        "outcome": [
          {
            "text": "Rhonda smiles, but it doesn’t reach her eyes."
          },
          {
            "speaker": "RHONDA",
            "text": "Yes. Well."
          },
          {
            "text": "She looks down at her hands."
          },
          {
            "speaker": "RHONDA",
            "text": "I suppose it's not important, then."
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
            "text": "That is the kindest and the cruellest thing anyone has said to me all week."
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
            "text": "She presses the run sheet to her chest."
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
          "minFriendship": {
            "rhonda": 5
          },
          "seenScene": "rhonda_lounge_short"
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
            "text": "You could star in the remake.",
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
            "text": "There you are. I was beginning to think you’d found more interesting people to talk to."
          },
          {
            "text": "She turns the page."
          },
          {
            "speaker": "RHONDA",
            "text": "Of course, I knew it was unlikely, but one must allow for miracles."
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
                "text": "Page three - outrageous outfit. Have a look and tell me whether I am being unfair. Or better, be unfair with me."
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
                "text": "Proof that nobody with a jawline like that should be trusted. Look!"
              },
              {
                "text": "She shows you an article about a handsome film star caught cheating on his wife. Her coffee goes cold while she explains the whole saga."
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
                "text": "I don't know why I read this filth. Nasty people with beautiful outfits doing selfish things."
              },
              {
                "text": "She looks at you, a glimmer in her eye."
              },
              {
                "speaker": "RHONDA",
                "text": "Now before you say it, I fully reject any suggestion of hypocrisy. For one, I'm only nasty when I need to be."
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
  "rhonda_bob_coaching_1": {
    "title": "Reading practice",
    "location": "Hall",
    "art": "Hall",
    "content": [
      {
        "text": "The hall is empty except for a lectern, two chairs, and a microphone left switched off on the piano."
      },
      {
        "text": "Bob stands behind the lectern with a folded page. Rhonda sits in the front row, hands still in her lap, listening."
      },
      {
        "speaker": "RHONDA",
        "text": "Again, from the first line. Don’t push it. Just let it reach the back."
      },
      {
        "speaker": "BOB",
        "text": "That’s what you said last time."
      },
      {
        "speaker": "RHONDA",
        "text": "And you nearly had it. You're doing well."
      },
      {
        "text": "Bob reads the opening lines. He pauses at the comma this time and looks up once before continuing."
      },
      {
        "speaker": "RHONDA",
        "text": "Good."
      },
      {
        "text": "She says it with a gentleness you would associate with someone else."
      },
      {
        "speaker": "BOB",
        "text": "Felt bad."
      },
      {
        "speaker": "RHONDA",
        "text": "It sounded good. Don't drop your head at the end. Let us see your face."
      }
    ],
    "choices": []
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
        "text": "This one’s harmless enough."
      },
      {
        "speaker": "RHONDA",
        "text": "Good. Let’s hear it then."
      },
      {
        "text": "Bob reads a short bush verse about rain on a tin roof. He keeps his eyes on the paper until the last line."
      },
      {
        "speaker": "RHONDA",
        "text": "Look up at the full stop. You don’t need to smile."
      },
      {
        "speaker": "BOB",
        "text": "Wasn’t likely."
      },
      {
        "speaker": "RHONDA",
        "text": "That’s alright. Just let us see you."
      }
    ],
    "choices": [
      {
        "text": "Let them rehearse.",
        "outcome": [
          {
            "text": "You leave them to it. Rhonda’s next note is quiet enough that only Bob hears it."
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
            "text": "June wrote this. About her rose garden."
          },
          {
            "text": "Bob looks at the page for a while before he begins."
          },
          {
            "text": "He reads the first two lines too quickly, stops, and presses his thumb against the fold."
          },
          {
            "speaker": "RHONDA",
            "text": "There’s no hurry."
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
  }
};
