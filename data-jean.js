export const JEAN_SCENES = {
  "generic_library_jean": {
    "title": "Library hour",
    "location": "Library",
    "art": "Library",
    "content": [
      {
        "text": "Jean is in the library with a stack of books beside her, one open in front of her, and a pencil tucked behind one ear."
      }
    ],
    "choices": [
      {
        "text": "Ask what she's reading.",
        "outcome": [
          {
            "text": "You ask Jean what she's reading."
          },
          {
            "speaker": "JEAN",
            "text": "An old classic. Not as radical as I remember it."
          },
          {
            "text": "She holds up the book so you can read the cover. It's Simone de Beauvoir, The Second Sex."
          }
        ],
        "nextSceneId": "generic_library_jean__v0_c1",
        "flow": true
      },
      {
        "text": "Sit down and read with her.",
        "outcome": [
          {
            "text": "You sit down and read with Jean. She seems to move through the pages impossibly fast. You read your novel at a more reasonable pace."
          },
          {
            "text": "After a while, Jean makes a cup of tea for both of you, then resumes reading."
          }
        ],
        "effects": {
          "friendship": {
            "jean": 1
          }
        }
      }
    ],
    "variants": [
      {
        "when": {
          "minFriendship": {
            "jean": 2
          },
          "flag": "jean_deflected_festival",
          "notFlag": "jean_festival_seen"
        },
        "content": [
          {
            "speaker": "JEAN",
            "text": "Back again. There is a returns trolley, if you are at a loose end."
          }
        ],
        "choices": [
          {
            "text": "Ask about the tambourine player.",
            "outcome": [
              {
                "text": "Jean looks up properly for the first time."
              },
              {
                "speaker": "JEAN",
                "text": "Oh. I thought that was all hippie nonsense to you."
              },
              {
                "text": "She holds the look a moment. Then she laughs, and reaches for the lid."
              },
              {
                "speaker": "JEAN",
                "text": "Come on, then."
              },
              {
                "text": "She lifts out the photograph and holds it by the corners: herself, young, barefoot in dry grass, a dove painted on the van behind her."
              },
              {
                "speaker": "JEAN",
                "text": "Three hot days in 1971. He had lovely hair and terrible rhythm, and I had never been happier before."
              },
              {
                "text": "She slides out a second photo without being asked: herself, pregnant, laughing at a long-haired man who is laughing back."
              },
              {
                "speaker": "JEAN",
                "text": "Rae still tells me off for not keeping the outfits."
              },
              {
                "text": "You get the sense there's more to the story."
              },
              {
                "speaker": "JEAN",
                "text": "Lovely man. Rae's dad, as you've probably guessed. A great father. But he found worse things than pot and LSD. I tried, for a few years, but eventually I had to let go."
              },
              {
                "text": "She smiles at the image, - not sadly, as you expected - but lovingly. Then she turns to you."
              }
            ],
            "effects": {
              "friendship": {
                "jean": 2
              },
              "memories": [
                "jean_festival_days"
              ],
              "flags": {
                "jean_festival_seen": true
              }
            }
          },
          {
            "text": "Offer to help with the returns.",
            "outcome": [
              {
                "text": "You wheel the trolley along the aisles while Jean reads out titles."
              },
              {
                "text": "The shoebox stays shut, for another time."
              }
            ],
            "effects": {
              "friendship": {
                "jean": 1
              }
            }
          }
        ]
      },
      {
        "when": {
          "minFriendship": {
            "jean": 2
          },
          "notFlag": "jean_festival_seen"
        },
        "content": [
          {
            "text": "Jean is sitting behind the library desk with the returns trolley beside her and a shoebox open on her lap."
          },
          {
            "text": "Inside are old photographs with white borders. Most are labelled. The photo resting on top is of a young woman. Jean sees you notice it and lifts it out by the corners."
          },
          {
            "text": "The photograph is faded. The woman is Jean - young, barefoot in dry grass, wearing a yellow scarf around her hair. Behind her, canvas tents lean in the heat and someone has painted a dove and flowers on the side of a van."
          },
          {
            "speaker": "JEAN",
            "text": "Three hot days in 1971. Music, dust, no plumbing, one bloke on LSD trying to explain revolution through interpretive dance. And a cute tambourine player, if you believe it."
          },
          {
            "text": "Jean smiles at the mention of the tambourine player, as if there’s more to that one."
          },
          {
            "speaker": "JEAN",
            "text": "We had fun, maybe too much fun, and we thought we solved all the world’s problems out there. The only problem we really solved was how to get rid of a small mountain of marijuana. Best three days, though. And I got the best thing in my life from it."
          },
          {
            "text": "You ask what she means."
          },
          {
            "speaker": "JEAN",
            "text": "My daughter, Rae."
          }
        ],
        "choices": [
          {
            "text": "I never liked that hippie nonsense.",
            "outcome": [
              {
                "speaker": "JEAN",
                "text": "Fair enough. Not everyone’s cup of tea."
              },
              {
                "text": "She sets the photograph back in the box, but she doesn’t put the lid on."
              }
            ],
            "effects": {
              "flags": {
                "jean_deflected_festival": true
              }
            }
          },
          {
            "text": "Ask about the tambourine player.",
            "outcome": [
              {
                "speaker": "JEAN",
                "text": "Well, he had lovely hair but no rhythm. The band kicked him out after that. History is full of tragedies."
              },
              {
                "text": "She laughs, looking off to the distance, and continues, more seriously."
              },
              {
                "speaker": "JEAN",
                "text": "He was a lovely man. We had good times together, then, and after. But we had some tough times too. He found something worse than smoking pot and tripping on mushrooms, you see. I loved him, but I had to let go."
              },
              {
                "text": "Jean slides the photos around in the box, and pulls out another one. This one is her, with long, brown hair, heavily pregnant in a pair of bell-bottom jeans and a crochet bikini top, smiling widely at a long-haired man who’s smiling back. You look at the picture, then back to the woman. She’s smiling at the memory."
              },
              {
                "speaker": "JEAN",
                "text": "Rae's dad, as you've probably guessed. A great father, before the drugs got him. Letting go of him was the hardest thing I'd ever done. But once I did, our new life began."
              },
              {
                "text": "She laughs softly."
              },
              {
                "speaker": "JEAN",
                "text": "Rae loves these old photos. But she always tells me off for not saving those old outfits for her. She’s very bossy like that!"
              }
            ],
            "effects": {
              "friendship": {
                "jean": 3
              },
              "memories": [
                "jean_festival_days"
              ],
              "flags": {
                "jean_festival_seen": true
              }
            }
          }
        ]
      },
      {
        "when": {
          "seenScene": "generic_library_jean",
          "notFlag": "jean_biographies_seen"
        },
        "content": [
          {
            "text": "Jean is back at the library desk with a pile of returns and a cup of tea that you suspect has probably gone cold from neglect."
          },
          {
            "speaker": "JEAN",
            "text": "You’re just in time. I’ve just got these new biographies in, and I could use your help to put them away."
          },
          {
            "text": "You look down at the pile of books and see biographies of Gough Whitlam, Ben Chifley, Joan Kirner, and Jack Lang, among others."
          },
          {
            "speaker": "JEAN",
            "text": "I only stock the good ones."
          }
        ],
        "choices": [
          {
            "text": "Help with the shelf.",
            "outcome": [
              {
                "text": "You help Jean take the new books to the biographies section. While you’re there, Jean spots a rogue copy of Lazarus Rising, the autobiography of John Howard. She picks it up and hides it behind the Whitlam book."
              },
              {
                "speaker": "JEAN",
                "text": "Much better."
              }
            ],
            "effects": {
              "friendship": {
                "jean": 1
              },
              "flags": {
                "jean_biographies_seen": true
              }
            }
          },
          {
            "text": "Say you’re busy.",
            "outcome": [
              {
                "speaker": "JEAN",
                "text": "Of course, do your thing."
              },
              {
                "text": "She lifts the first stack, discovers it is heavier than expected, and sets it down again with dignity. She takes a smaller stack to the shelves."
              }
            ],
            "effects": {
              "flags": {
                "jean_biographies_seen": true
              }
            }
          }
        ]
      },
      {
        "when": {
          "seenScene": "generic_library_jean",
          "memory": "jean_festival_days",
          "flag": "jean_biographies_seen"
        },
        "content": [
          {
            "text": "You enter the library. Jean is on a computer, looking very frustrated."
          },
          {
            "speaker": "JEAN",
            "text": "Bastard of a thing!"
          },
          {
            "text": "You offer to help, but she's decided to abandon whatever she was doing. She disappears among the shelves."
          },
          {
            "text": "You sit down with a new magazine. Eventually, Jean returns, back in good spirits, and reads with you for a while."
          }
        ],
        "choices": []
      }
    ]
  },
  "generic_library_jean__v0_c1": {
    "title": "Library hour",
    "location": "Library",
    "art": "Library",
    "content": [],
    "choices": [
      {
        "text": "Way better than Sartre, though",
        "outcome": [
          {
            "text": "Jean grins at you."
          },
          {
            "speaker": "JEAN",
            "text": "No comparison."
          },
          {
            "text": "You eye the stack of books. It contains women writers from the Brontës to bell hooks. {note for AI - DO NOT capitalise 'bell hooks\")"
          },
          {
            "text": "You sit down and read with Jean for a while."
          }
        ],
        "effects": {
          "friendship": {
            "jean": 2
          }
        }
      },
      {
        "text": "Never heard of it.",
        "outcome": [
          {
            "speaker": "JEAN",
            "text": "Well, that suggests we had very different experiences of higher education."
          },
          {
            "text": "You're not quite sure what she means by that, but the tone is friendly."
          },
          {
            "text": "You sit down and read with Jean for a while."
          }
        ],
        "effects": {
          "friendship": {
            "jean": 1
          }
        }
      },
      {
        "text": "I prefer fiction.",
        "outcome": [
          {
            "text": "Jean looks unbothered."
          },
          {
            "speaker": "JEAN",
            "text": "So do I. Have you had a look around the library yet?"
          },
          {
            "text": "Jean walks you through the library, pointing out some of her favourite fiction works. You pick a few up, and thank her as you head off to do some reading."
          }
        ],
        "effects": {
          "friendship": {
            "jean": 1
          }
        }
      }
    ]
  },
  "jean_figtree": {
    "title": "The fig tree petition",
    "location": "Gardens",
    "art": "Gardens",
    "content": [
      {
        "text": "The old fig tree by the east fence has a council notice tied to it with orange tape. A loose end of the tape flaps and snaps in the wind."
      },
      {
        "text": "Jean has a folding table set up in front of the tree. Petition sheets, spare pens, envelopes, a folder thick with printouts. She’s mid-conversation with a slightly frightened-looking resident."
      },
      {
        "speaker": "JEAN",
        "text": "… No, we are not anti-development. But we expect to have our voices heard when the council tries to cut down the only fruit-bearing tree in the neighbourhood. The council’s process is undemocratic!"
      },
      {
        "text": "The frightened-looking resident hurriedly signs the petition and walks away."
      },
      {
        "text": "By afternoon the petition sheet has grown by several pages."
      },
      {
        "speaker": "JEAN",
        "text": "Right. Well done us. Now, I’ve got to figure out how to get these submitted to the council. I knew I should have learned to use the internet. Don’t tell Rae, she’ll say I told you so."
      },
      {
        "text": "She gathers the papers into a neat stack and sits with her hand flat on top of them."
      }
    ],
    "choices": [
      {
        "text": "Help her file the forms.",
        "outcome": [
          {
            "text": "You sit beside Jean and sort pages into the scanner and show her how to attach them to the email."
          },
          {
            "speaker": "JEAN",
            "text": "Thank you. I know how to type, at least. But I never did much more than write on the computer."
          },
          {
            "text": "You check the email and attachments one last time, and hit send. Jean smiles at you."
          },
          {
            "speaker": "JEAN",
            "text": "Now the real fun begins."
          }
        ],
        "effects": {
          "friendship": {
            "jean": 2
          },
          "flags": {
            "jean_carried_it_alone": true
          }
        }
      },
      {
        "text": "Well, good luck, I guess.",
        "outcome": [
          {
            "text": "Jean nods. She carefully puts the papers into a Manila folder and walks off in the direction of the library."
          },
          {
            "text": "The fig tree’s leaves cast dappled shadows over the concrete footpath."
          }
        ],
        "effects": {
          "friendship": {
            "jean": 1
          },
          "flags": {
            "jean_carried_it_alone": true
          }
        }
      }
    ],
    "variants": [
      {
        "when": {
          "minFriendship": {
            "jean": 5
          }
        },
        "content": [
          {
            "text": "the tape flaps and snaps in the wind."
          },
          {
            "text": "Jean has a folding table set up in front of the tree. Petition sheets, spare pens, envelopes, a folder thick with printouts. She’s mid-conversation with a slightly frightened-looking resident."
          },
          {
            "speaker": "JEAN",
            "text": "… No, we are not anti-development. But we expect to have our voices heard when the council tries to cut down the only fruit-bearing tree in the neighbourhood. The council’s process is undemocratic!"
          },
          {
            "text": "The frightened-looking resident hurriedly signs the petition and walks away."
          },
          {
            "text": "A young council officer approaches, holding a folder to his chest."
          },
          {
            "speaker": "OFFICER",
            "text": "Jean?"
          },
          {
            "speaker": "JEAN",
            "text": "The same."
          },
          {
            "speaker": "OFFICER",
            "text": "You've been calling us."
          },
          {
            "text": "He begins trying to explain the appeals process. Jean tries not to interrupt, but eventually fails."
          },
          {
            "speaker": "JEAN",
            "text": "So what I’m hearing is, we can save the tree by completing fourteen forms, submitting thirty to forty objections, attending a meeting we’re not invited to, and possibly sacrificing a goat."
          },
          {
            "speaker": "OFFICER",
            "text": "Look, let me be real with you. I agree with you. I don’t want to see this tree go either. But my hands are tied."
          },
          {
            "text": "The officer shifts uncomfortably."
          },
          {
            "speaker": "OFFICER",
            "text": "Listen, I probably shouldn’t say this, but the primary school kids love that tree. Give me your petition, I’ll drop it off at the school. Maybe some kids and parents will sign it. Give it a bit more weight than just some old-"
          },
          {
            "text": "He catches himself."
          },
          {
            "speaker": "OFFICER",
            "text": "Um, retired… residents."
          },
          {
            "text": "You look at the papers in Jean’s hand. The top sheet has Rae’s name on it, signed in thick black marker. Jean turns to you, and whispers loudly enough that the council officer definitely hears it."
          },
          {
            "speaker": "JEAN",
            "text": "Can we trust him? What if the school kids don’t care?"
          }
        ],
        "choices": [
          {
            "text": "You’ve let go before. Maybe that’s what needs to happen now?",
            "requiresMemory": "jean_festival_days",
            "outcome": [
              {
                "text": "Jean raises an eyebrow."
              },
              {
                "speaker": "JEAN",
                "text": "That’s… not untrue."
              },
              {
                "text": "She looks at Rae’s signature, then at the council officer."
              },
              {
                "speaker": "JEAN",
                "text": "All right. Take it. Let the kiddies have their turn."
              },
              {
                "text": "The officer takes the papers carefully. Jean lets go before he has to tug."
              },
              {
                "text": "The orange tape snaps against the bark. Jean stands there for a moment, then gives you a look that you’ve learned means that it’s tea and books time. You walk to the library together."
              }
            ],
            "effects": {
              "friendship": {
                "jean": 3
              },
              "flags": {
                "jean_let_go": true
              }
            }
          },
          {
            "text": "I wouldn’t let a bunch of kids handle this.",
            "outcome": [
              {
                "speaker": "JEAN",
                "text": "No?"
              },
              {
                "text": "She pauses for a moment, and looks at the officer as if wanting to trust him. But then she turns back to sit behind the table."
              },
              {
                "speaker": "JEAN",
                "text": "I guess you’re right. We handle this ourselves."
              },
              {
                "text": "The petition stays on Jean’s side of the table. The officer walks away."
              }
            ],
            "effects": {
              "friendship": {
                "jean": 1
              },
              "flags": {
                "jean_carried_it_alone": true
              }
            }
          },
          {
            "text": "Rae will be proud of you either way.",
            "outcome": [
              {
                "text": "Jean looks at Rae’s signature."
              },
              {
                "speaker": "JEAN",
                "text": "She is. But not as proud as I am of her."
              },
              {
                "text": "She smiles at the officer and tells him she’ll file the forms - the ones he requested before she went off on the goat-sacrifice rant - and that she doesn't need his help. Then she turns to you."
              },
              {
                "speaker": "JEAN",
                "text": "Did I tell you? She’s just become the union rep at her work!"
              },
              {
                "text": "She beams at nothing in particular, admiring the thought. You head back inside."
              }
            ],
            "effects": {
              "friendship": {
                "jean": 1
              },
              "flags": {
                "jean_carried_it_alone": true
              }
            }
          }
        ]
      }
    ]
  },
  "jean_figtree_consequence": {
    "title": "The petition folder",
    "location": "Library",
    "art": "Library",
    "content": [
      {
        "text": "Jean has a stack of papers at a desk, and a pile of books on planning law."
      },
      {
        "text": "You give her your condolences about the fig tree."
      },
      {
        "speaker": "JEAN",
        "text": "Never mind that. There's public housing being knocked down on Strathmore Street. Come and help me with this."
      },
      {
        "text": "She holds out a petition sheet."
      }
    ],
    "choices": [
      {
        "text": "Offer to help her get signatures.",
        "outcome": [
          {
            "text": "You offer to take the petition sheet around to residents. She smiles at you gratefully."
          },
          {
            "speaker": "JEAN",
            "text": "Thank you - you're a trooper."
          },
          {
            "text": "She looks tired."
          }
        ],
        "effects": {
          "friendship": {
            "jean": 1
          }
        }
      },
      {
        "text": "Don't get involved.",
        "outcome": [
          {
            "text": "You make an excuse and leave her to it."
          }
        ]
      }
    ],
    "variants": [
      {
        "when": {
          "flag": "jean_let_go"
        },
        "content": [
          {
            "text": "Jean is in the library with a novel and a cup of tea."
          },
          {
            "text": "She reads half a page, then turns it back and reads it again."
          },
          {
            "text": "Her phone buzzes. Rae’s name lights up. Jean tucks a bookmark into the novel and answers. She talks to Rae for a minute, mostly listening and affirming."
          },
          {
            "speaker": "JEAN",
            "text": "Absolutely."
          },
          {
            "speaker": "JEAN",
            "text": "Typical!"
          },
          {
            "speaker": "JEAN",
            "text": "Tory bastards."
          },
          {
            "text": "Then, it seems Rae is done with her story. Jean begins talking. She tells Rae about the school kids, and the council man, and the fig tree."
          },
          {
            "speaker": "JEAN",
            "text": "They were wonderful. Real heroes."
          },
          {
            "speaker": "JEAN",
            "text": "No, there's no next thing. I'm kicking my feet up for a while."
          },
          {
            "speaker": "JEAN",
            "text": "Well, don't be so surprised. I contain multitudes."
          },
          {
            "speaker": "JEAN",
            "text": "Thank you, darling. I'm so proud of you too. Now give the bosses hell."
          },
          {
            "text": "She hangs up and turns to you."
          },
          {
            "speaker": "JEAN",
            "text": "She's in bargaining talks. My little union rep."
          },
          {
            "text": "She beams with pride and goes back to reading."
          }
        ],
        "choices": [],
        "terminalEffects": {
          "friendship": {
            "jean": 1
          }
        }
      }
    ]
  },
  "generic_writing_jean": {
    "title": "Writing circle",
    "location": "Library",
    "art": "Library",
    "content": [
      {
        "text": "Jean is at a long table with a notebook open and three pens laid out in a row. Al sits at the end of the table, daydreaming. Jean's rewriting the opening paragraph of something. You peer over her shoulder."
      },
      {
        "speaker": "JEAN",
        "text": "Don’t read over my shoulder. It puts me right off."
      },
      {
        "text": "You sit down across from her instead."
      }
    ],
    "choices": [
      {
        "text": "Ask what she's writing.",
        "outcome": [
          {
            "text": "She looks at you with intensity, like she was waiting for you to ask. She says it like it's a new scientific discovery."
          },
          {
            "speaker": "JEAN",
            "text": "Slam. Poetry."
          },
          {
            "text": "You look at her, not sure how to react. Jean turns to Al."
          },
          {
            "speaker": "JEAN",
            "text": "Show her, Al."
          },
          {
            "text": "Al snaps back to reality."
          },
          {
            "speaker": "AL",
            "text": "Show her what, now?"
          },
          {
            "speaker": "JEAN",
            "text": "The one Rae showed us. On the YouTube. Come on, you know I don't know how to do it."
          },
          {
            "speaker": "AL",
            "text": "Ah."
          },
          {
            "text": "He pulls out his phone and navigates the menus. It takes him a while, but eventually he's playing a video, a bit too loudly."
          },
          {
            "text": "The video is a young woman, wearing a black hijab and white sneakers. She passionately delivers a poem about injustice. When it finishes, you look over at Jean. She is looking at the phone, enraptured."
          },
          {
            "speaker": "JEAN",
            "text": "It's brilliant."
          },
          {
            "text": "She looks at you, determined."
          },
          {
            "speaker": "JEAN",
            "text": "I'm going to do that."
          },
          {
            "text": "Al nods approvingly."
          },
          {
            "speaker": "AL",
            "text": "Rock on, sister."
          },
          {
            "text": "They laugh."
          }
        ],
        "effects": {
          "friendship": {
            "jean": 2,
            "al": 1
          }
        }
      },
      {
        "text": "Write quietly by yourself.",
        "outcome": [
          {
            "text": "You pull out a notebook and start writing a journal. You jot down a few memories, but then you run out of ideas."
          },
          {
            "text": "You pick up a nearby newspaper instead and fill in the crossword."
          }
        ],
        "effects": {
          "friendship": {
            "jean": 1
          }
        }
      }
    ]
  }
};
