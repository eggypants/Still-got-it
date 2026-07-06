// Jean — arc owner file. Belief: 'The next cause matters more than my own happiness.'
// Crossroads: save the fig tree (week 3). TODO: concert consequence — see WRITING-KITS.md
export const JEAN_SCENES = {
  "generic_library_jean": {
    "title": "Library hour",
    "location": "Library",
    "art": "Library",
    "content": [
      {
        "text": "Jean is in the library with a stack of books and a pencil tucked behind one ear. She says she only came to return a novel, but you suspect that was several hours ago."
      }
    ],
    "choices": [
      {
        "text": "Stay for a while.",
        "outcome": [
          {
            "text": "You stay for a while, reading together."
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
            "text": "Three hot days in 1971. Music, dust, terrible plumbing, one bloke on LSD trying to explain revolution through interpretive dance. And a cute tambourine player, if you believe it."
          },
          {
            "text": "Jean smiles at the mention of the tambourine player, as if there's more to that one."
          },
          {
            "speaker": "JEAN",
            "text": "We had fun, maybe too much fun, and we thought we solved all the world's problems out there. The only problem we really solved was how to get rid of a small mountain of marijuana. Best three days, though."
          }
        ],
        "choices": [
          {
            "text": "\"I never liked that hippie nonsense.\"",
            "outcome": [
              {
                "speaker": "JEAN",
                "text": "Fair enough. Not everyone's cup of tea."
              },
              {
                "text": "She sets the photograph back in the box, but she doesn't put the lid on."
              }
            ],
            "effects": {}
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
                "text": "Jean slides the photos around in the box, and pulls out another one. This one is her, with long, brown hair, heavily pregnant in a pair of bell-bottom jeans and a crochet bikini top, smiling widely at a long-haired man who's smiling back. You look at the picture, then back to the woman. She's smiling at the memory."
              },
              {
                "speaker": "JEAN",
                "text": "Rae loves these old photos. But she always tells me off for not saving those old outfits for her. She's very bossy like that!"
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
            "text": "You're just in time. I've just got these new biographies in, and I could use your help to put them away."
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
                "text": "You help Jean take the new books to the biographies section. While you're there, Jean spots a rogue copy of Lazarus Rising, the autobiography of John Howard. She picks it up and hides it behind the Whitlam book."
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
            "text": "Say you're busy.",
            "outcome": [
              {
                "speaker": "JEAN",
                "text": "Of course. People with lives. Very inconvenient."
              },
              {
                "text": "She lifts the first stack, discovers it is heavier than expected, and sets it down again with dignity."
              }
            ],
            "effects": {
              "flags": {
                "jean_biographies_seen": true
              }
            }
          }
        ]
      }
    ]
  },
  "generic_writing_jean": {
    "title": "Writing circle",
    "location": "Library",
    "art": "Library",
    "content": [
      {
        "text": "Jean is at the side table with a notebook open and three pens laid out in a row. She's rewriting the opening paragraph of something for what you suspect is the fourth time this week."
      },
      {
        "speaker": "JEAN",
        "text": "Don't read over my shoulder. It puts me right off."
      }
    ],
    "choices": [
      {
        "text": "Stay for a while.",
        "outcome": [
          {
            "text": "You sit across from her instead, out of shoulder-reading range, and get through half a crossword before she looks up again."
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
        "text": "Jean has a folding table set up in front of the tree. Petition sheets, spare pens, envelopes, a folder thick with printouts. She's mid-conversation with a slightly frightened-looking resident."
      },
      {
        "speaker": "JEAN",
        "text": "... No, we are not anti-development. But we expect to have our voices heard when the council tries to cut down the only fruit-bearing tree in the neighbourhood. The council's process is undemocratic!"
      },
      {
        "text": "The frightened-looking resident hurriedly signs the petition and walks away."
      },
      {
        "text": "By afternoon the petition sheet has grown by several pages."
      },
      {
        "speaker": "JEAN",
        "text": "Right. Well done us. Now, I've got to figure out how to get these submitted to the council. I knew I should have learned to use the internet. Don't tell Rae, she'll say I told you so."
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
        "text": "\"Well, good luck, I guess.\"",
        "outcome": [
          {
            "text": "Jean nods. She carefully puts the papers into a Manila folder and walks off in the direction of the library."
          },
          {
            "text": "The fig tree's leaves cast dappled shadows over the concrete footpath."
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
            "text": "The old fig tree by the east fence has a council notice tied to it with orange tape. Jean is standing in front of the trestle table with her petition, and some hand-painted picket signs resting against the table legs."
          },
          {
            "text": "A young council officer stands on the path, holding a folder to his chest. He is trying to explain the appeals process. Jean is trying not to interrupt, but struggling."
          },
          {
            "speaker": "JEAN",
            "text": "So what I'm hearing is, we can save the tree by completing fourteen forms, submitting thirty to forty objections, attending a meeting we're not invited to, and possibly sacrificing a goat."
          },
          {
            "speaker": "OFFICER",
            "text": "Look, let me be real with you. I agree with you. I don't want to see this tree go either. But my hands are tied."
          },
          {
            "text": "The officer shifts uncomfortably."
          },
          {
            "speaker": "OFFICER",
            "text": "Listen, I probably shouldn't say this but the primary school kids love that tree. Give me your petition, I'll drop it off at the school. Maybe some kids and parents will sign it. Give it a bit more weight than just some old-"
          },
          {
            "text": "He catches himself."
          },
          {
            "speaker": "OFFICER",
            "text": "Um, retired... residents."
          },
          {
            "text": "You look at the papers in Jean's hand. The top sheet has Rae's name on it, signed in thick black marker. Jean turns to you, and whispers loudly enough that the council officer definitely hears it."
          },
          {
            "speaker": "JEAN",
            "text": "Can we trust him? What if the school kids don't care?"
          }
        ],
        "choices": [
          {
            "text": "\"You've let go before. Maybe that's what needs to happen now?\"",
            "requiresMemory": "jean_festival_days",
            "outcome": [
              {
                "text": "Jean raises an eyebrow."
              },
              {
                "speaker": "JEAN",
                "text": "That's... not untrue."
              },
              {
                "text": "She looks at Rae's signature, then at the council officer."
              },
              {
                "speaker": "JEAN",
                "text": "All right. Take it. Let the kiddies have their turn."
              },
              {
                "text": "The officer takes the papers carefully. Jean lets go before he has to tug."
              },
              {
                "text": "The orange tape snaps against the bark. Jean stands there for a moment, then gives you a look that you've learned means that it's tea and books time. You walk to the library together."
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
            "text": "\"I wouldn't let a bunch of kids handle this.\"",
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
                "text": "I guess you're right. We handle this ourselves."
              },
              {
                "text": "The petition stays on Jean's side of the table. The officer walks away."
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
            "text": "\"Rae will be proud of you either way.\"",
            "outcome": [
              {
                "text": "Jean looks at Rae's signature."
              },
              {
                "speaker": "JEAN",
                "text": "She is. But not as proud as I am of her."
              },
              {
                "text": "She smiles at the officer and tells him she'll file the forms he requested before she went off on the goat-sacrifice rant. Then she turns to you."
              },
              {
                "speaker": "JEAN",
                "text": "Did I tell you? She's just become the union rep at her work!"
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
        "text": "Jean has the petition folder open at the library desk. New tabs stick out of it in five colours."
      },
      {
        "text": "A novel lies beside her, face down and not getting read."
      },
      {
        "speaker": "JEAN",
        "text": "Good news. The council has invented another form. Keeps the blood moving."
      },
      {
        "text": "She signs one page, clips another, and puts a note for Rae under the stapler so she will remember to call."
      },
      {
        "text": "The orange tape from the fig tree is wound around a pencil."
      },
      {
        "text": "She tucks the novel into the side pocket of the folder before she leaves."
      }
    ],
    "choices": [
      {
        "text": "Stamp the envelopes.",
        "outcome": [
          {
            "text": "You stamp while Jean checks the addresses. She thanks you by giving you the least smudged pen."
          },
          {
            "speaker": "JEAN",
            "text": "Treasure it. Bureaucracy eats stationery."
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
          "flag": "jean_let_go"
        },
        "content": [
          {
            "text": "Jean is in the library with a novel open in both hands."
          },
          {
            "text": "There is no petition folder on the desk. No envelopes. No orange tape."
          },
          {
            "text": "A council officer has left a neat update on the noticeboard. Jean has corrected one apostrophe in pencil."
          },
          {
            "speaker": "JEAN",
            "text": "I'm not made of stone."
          },
          {
            "text": "She reads half a page, then turns it back and reads it again."
          },
          {
            "text": "Her phone buzzes. Rae's name lights up. Jean lets it ring twice before answering with the book still open."
          }
        ],
        "choices": [
          {
            "text": "Read nearby.",
            "outcome": [
              {
                "text": "You choose a chair by the shelves. Jean talks to Rae for a minute, mostly listening, then goes back to her page."
              },
              {
                "speaker": "JEAN",
                "text": "Don't look so shocked. Some of us contain multitudes and a library card."
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
    ]
  }

};
