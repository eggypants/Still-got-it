export const CONCERT_SCENES = {
  "rhonda_opening_night": {
    "title": "Autumn concert",
    "location": "Hall",
    "art": "Hall",
    "content": [
      {
        "text": "You find a seat near the back."
      },
      {
        "text": "The hall does not quite look like the hall. Fairy lights along the front of the stage, flower arrangements line the rows, trestle tables in white cloths, and more chairs out than anyone thought the village owned."
      },
      {
        "text": "There is a chair in the front row with a programme laid on the seat. Rhonda’s doing. You sit where she can see you.",
        "when": {
          "flag": "helped_final_rehearsal"
        }
      },
      {
        "text": "Jean is in the third row with Rae, who has pink hair and her mother’s grin. When the lights go down, Jean leans over and whispers something that makes Rae snort.",
        "when": {
          "flag": "jean_let_go"
        }
      },
      {
        "text": "Jean runs the raffle from a card table by the door — biscuit tin for the coins, tickets torn two at a time.",
        "when": {
          "notFlag": "jean_let_go"
        }
      },
      {
        "text": "Al takes the stage without a word. No bit. No bow.",
        "when": {
          "flag": "Al_love"
        }
      },
      {
        "text": "He plays the quiet one — the song Jean picked off the request list — and he sings it plainly, the way it was written. The chipped vase is beside the piano, the rose in it a few days past its best.",
        "when": {
          "flag": "Al_love"
        }
      },
      {
        "text": "He dedicates it to nobody, but sings the last verse to Jean.",
        "when": {
          "flag": "Al_love"
        }
      },
      {
        "text": "Al opens with a lively number and works every row of the hall. He winks at the ladies, forgets a verse, invents a better one, and comes back for an encore.",
        "when": {
          "notFlag": "Al_love"
        }
      },
      {
        "text": "Bob walks to the lectern with a folded page.",
        "when": {
          "flag": "bob_went_reunion"
        }
      },
      {
        "text": "This is a poem my wife wrote. About her roses.",
        "speaker": "BOB",
        "when": {
          "flag": "bob_went_reunion"
        }
      },
      {
        "text": "He reads it slowly, the way Rhonda taught him. His voice catches near the end. At the full stop, he looks up, waits a moment, and then walks off the stage to resounding applause.",
        "when": {
          "flag": "bob_went_reunion"
        }
      },
      {
        "text": "Bob reads a short bush verse about rain on a tin roof, eyes on the paper, and sits down before the applause makes his ears turn red.",
        "when": {
          "notFlag": "bob_went_reunion"
        }
      },
      {
        "text": "Miranda's flowers - grown by her friends under her steady guidance - look beautiful. Two of the growers keep glancing at her for approval. They get it. At the interval, somebody puts a cup of tea in Miranda's hand without being asked, and she lets them.",
        "when": {
          "flag": "miranda_delegated"
        }
      },
      {
        "text": "Two women from Silver Springs are at the back, studying the arrangements and sharing silent but meaningful looks.",
        "when": {
          "flag": "miranda_delegated"
        }
      },
      {
        "text": "the flowers from Miranda’s garden - grown by Miranda, cut by Miranda arranged by Miranda - are beautiful. She looks at them proudly, watches the start of the show from the end of a row, and is asleep before Al’s second verse.",
        "when": {
          "notFlag": "miranda_delegated"
        }
      },
      {
        "text": "Pablo’s supper table has the rice on it again - by request, this time. There is a small handwritten card in front of the dish: CARMEN’S RICE.",
        "when": {
          "flag": "pablo_cooked_carmens"
        }
      },
      {
        "text": "He watches people read it. When they ask, he tells them.",
        "when": {
          "flag": "pablo_cooked_carmens"
        }
      },
      {
        "text": "Pablo’s table is generous and faultless — gazpacho, croquetas, three kinds of cake. He eats in the kitchen, standing at the bench, and is back out front before anyone notices he was gone.",
        "when": {
          "notFlag": "pablo_cooked_carmens"
        }
      },
      {
        "text": "Then, to close the end, Rhonda is due to take the stage. She doesn't. Al comes out again instead, and makes a few jokes about the show. Everyone laughs. By the end, everyone is clapping."
      }
    ],
    "choices": [
      {
        "text": "Clap with everyone else.",
        "outcome": [
          {
            "text": "The performers bow. Rhonda's absence is not explained. At least, not to you. You head home for a cup of tea and go to bed."
          }
        ],
        "effects": {
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
            "text": "By seven, the hall is fuller than anyone had expected. Relatives. Grandchildren. Rae. A cleaner on her break. And, unaccountably, two women from Silver Springs Retirement Village. You wonder how they heard about it."
          },
          {
            "text": "The hall does not quite look like the hall. Fairy lights along the front of the stage, flower arrangements line the rows, trestle tables in white cloths, and more chairs out than anyone thought the village owned."
          },
          {
            "text": "There is a chair in the front row with a programme laid on the seat. Rhonda’s doing. You sit where she can see you.",
            "when": {
              "flag": "helped_final_rehearsal"
            }
          },
          {
            "text": "Jean is in the third row with Rae, who has pink hair and her mother’s grin. When the lights go down, Jean leans over and whispers something that makes Rae snort.",
            "when": {
              "flag": "jean_let_go"
            }
          },
          {
            "text": "Jean runs the raffle from a card table by the door — biscuit tin for the coins, tickets torn two at a time.",
            "when": {
              "notFlag": "jean_let_go"
            }
          },
          {
            "text": "Al takes the stage without a word. No bit. No bow.",
            "when": {
              "flag": "Al_love"
            }
          },
          {
            "text": "He plays the quiet one — the song Jean picked off the request list — and he sings it plainly, the way it was written. The chipped vase is beside the piano, the rose in it a few days past its best.",
            "when": {
              "flag": "Al_love"
            }
          },
          {
            "text": "He dedicates it to nobody, but sings the last verse to Jean.",
            "when": {
              "flag": "Al_love"
            }
          },
          {
            "text": "Al opens with a lively number and works every row of the hall. He winks at the ladies, forgets a verse, invents a better one, and comes back for an encore.",
            "when": {
              "notFlag": "Al_love"
            }
          },
          {
            "text": "Bob walks to the lectern with a folded page.",
            "when": {
              "flag": "bob_went_reunion"
            }
          },
          {
            "text": "This is a poem my wife wrote. About her roses.",
            "speaker": "BOB",
            "when": {
              "flag": "bob_went_reunion"
            }
          },
          {
            "text": "He reads it slowly, the way Rhonda taught him. His voice catches near the end. At the full stop, he looks up, waits a moment, and then walks off the stage to resounding applause.",
            "when": {
              "flag": "bob_went_reunion"
            }
          },
          {
            "text": "Bob reads a short bush verse about rain on a tin roof, eyes on the paper, and sits down before the applause makes his ears turn red.",
            "when": {
              "notFlag": "bob_went_reunion"
            }
          },
          {
            "text": "Miranda's flowers - grown by her friends under her steady guidance - look beautiful. Two of the growers keep glancing at her for approval. They get it. At the interval, somebody puts a cup of tea in Miranda's hand without being asked, and she lets them.",
            "when": {
              "flag": "miranda_delegated"
            }
          },
          {
            "text": "Two women from Silver Springs are at the back, studying the arrangements and sharing silent but meaningful looks.",
            "when": {
              "flag": "miranda_delegated"
            }
          },
          {
            "text": "the flowers from Miranda’s garden - grown by Miranda, cut by Miranda arranged by Miranda - are beautiful. She looks at them proudly, watches the start of the show from the end of a row, and is asleep before Al’s second verse.",
            "when": {
              "notFlag": "miranda_delegated"
            }
          },
          {
            "text": "Pablo’s supper table has the rice on it again - by request, this time. There is a small handwritten card in front of the dish: CARMEN’S RICE.",
            "when": {
              "flag": "pablo_cooked_carmens"
            }
          },
          {
            "text": "He watches people read it. When they ask, he tells them.",
            "when": {
              "flag": "pablo_cooked_carmens"
            }
          },
          {
            "text": "Pablo’s table is generous and faultless — gazpacho, croquetas, three kinds of cake. He eats in the kitchen, standing at the bench, and is back out front before anyone notices he was gone.",
            "when": {
              "notFlag": "pablo_cooked_carmens"
            }
          },
          {
            "text": "Then it is Rhonda’s turn to close the first half."
          },
          {
            "text": "She walks out in the feather boa, looking tall. You see a glimpse of the younger woman she was - the aspiring actress, the TV starlet, the young mother and wife."
          },
          {
            "text": "The room quiets. For half a second, you think she might turn around and walk straight back off."
          },
          {
            "text": "Then somebody coughs. She looks in the cough's direction, disapprovingly."
          },
          {
            "text": "Save your reviews for after the show, please.",
            "speaker": "RHONDA"
          },
          {
            "text": "The room laughs."
          },
          {
            "text": "Rhonda performs. An awful, wonderful comic piece of her own devising. It's acerbic, self-deprecating, clever and low-brow all at once. Like Carol Burnett and Lucille Ball and Charlie Chaplin and Rowan Atkinson all got together to write the nastiest, silliest five minutes they could, and the timing is exactly right, and the room loses it."
          },
          {
            "text": "You watch her stand in the middle of it with her eyes closed for one second, taking delivery."
          },
          {
            "text": "Afterwards, people crowd her."
          },
          {
            "text": "You had me crying, Rhonda. Nearly needed a second set of slacks!",
            "speaker": "AL"
          },
          {
            "text": "We were dying laughing!",
            "speaker": "JEAN"
          },
          {
            "text": "Rae nods."
          },
          {
            "text": "Next time I'll bring my girlfriend, she'd love this!",
            "speaker": "RAE"
          },
          {
            "text": "Next time, we double the food.",
            "speaker": "PABLO"
          },
          {
            "text": "Next time?",
            "speaker": "RHONDA"
          },
          {
            "text": "She glances at you. Then she grins."
          },
          {
            "text": "Yes. Next time.",
            "speaker": "RHONDA"
          },
          {
            "text": "Much later, when the hall is nearly empty, you find her folding programmes into a neat stack."
          },
          {
            "text": "You were good.",
            "speaker": "PLAYER"
          },
          {
            "text": "Rhonda looks at you for a moment. Then she smiles."
          },
          {
            "text": "Wasn’t I?",
            "speaker": "RHONDA"
          }
        ],
        "choices": [
          {
            "text": "Stay and help stack chairs.",
            "outcome": [
              {
                "text": "You stack chairs until the hall is almost the hall again."
              },
              {
                "text": "Rhonda keeps one programme and folds it carefully into her handbag."
              },
              {
                "text": "For the archive.",
                "speaker": "RHONDA"
              },
              {
                "text": "She snaps the bag shut."
              },
              {
                "text": "Or evidence.",
                "speaker": "RHONDA"
              },
              {
                "text": "She grins."
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
            "text": "The hall is full. The programme says Rhonda will close the first half."
          },
          {
            "text": "The hall does not quite look like the hall. Fairy lights along the front of the stage, flower arrangements line the rows, trestle tables in white cloths, and more chairs out than anyone thought the village owned."
          },
          {
            "text": "There is a chair in the front row with a programme laid on the seat. Rhonda’s doing. You sit where she can see you.",
            "when": {
              "flag": "helped_final_rehearsal"
            }
          },
          {
            "text": "Jean is in the third row with Rae, who has pink hair and her mother’s grin. When the lights go down, Jean leans over and whispers something that makes Rae snort.",
            "when": {
              "flag": "jean_let_go"
            }
          },
          {
            "text": "Jean runs the raffle from a card table by the door — biscuit tin for the coins, tickets torn two at a time.",
            "when": {
              "notFlag": "jean_let_go"
            }
          },
          {
            "text": "Al takes the stage without a word. No bit. No bow.",
            "when": {
              "flag": "Al_love"
            }
          },
          {
            "text": "He plays the quiet one — the song Jean picked off the request list — and he sings it plainly, the way it was written. The chipped vase is beside the piano, the rose in it a few days past its best.",
            "when": {
              "flag": "Al_love"
            }
          },
          {
            "text": "He dedicates it to nobody, but sings the last verse to Jean.",
            "when": {
              "flag": "Al_love"
            }
          },
          {
            "text": "Al opens with a lively number and works every row of the hall. He winks at the ladies, forgets a verse, invents a better one, and comes back for an encore.",
            "when": {
              "notFlag": "Al_love"
            }
          },
          {
            "text": "Bob walks to the lectern with a folded page.",
            "when": {
              "flag": "bob_went_reunion"
            }
          },
          {
            "text": "This is a poem my wife wrote. About her roses.",
            "speaker": "BOB",
            "when": {
              "flag": "bob_went_reunion"
            }
          },
          {
            "text": "He reads it slowly, the way Rhonda taught him. His voice catches near the end. At the full stop, he looks up, waits a moment, and then walks off the stage to resounding applause.",
            "when": {
              "flag": "bob_went_reunion"
            }
          },
          {
            "text": "Bob reads a short bush verse about rain on a tin roof, eyes on the paper, and sits down before the applause makes his ears turn red.",
            "when": {
              "notFlag": "bob_went_reunion"
            }
          },
          {
            "text": "Miranda's flowers - grown by her friends under her steady guidance - look beautiful. Two of the growers keep glancing at her for approval. They get it. At the interval, somebody puts a cup of tea in Miranda's hand without being asked, and she lets them.",
            "when": {
              "flag": "miranda_delegated"
            }
          },
          {
            "text": "Two women from Silver Springs are at the back, studying the arrangements and sharing silent but meaningful looks.",
            "when": {
              "flag": "miranda_delegated"
            }
          },
          {
            "text": "the flowers from Miranda’s garden - grown by Miranda, cut by Miranda arranged by Miranda - are beautiful. She looks at them proudly, watches the start of the show from the end of a row, and is asleep before Al’s second verse.",
            "when": {
              "notFlag": "miranda_delegated"
            }
          },
          {
            "text": "Pablo’s supper table has the rice on it again - by request, this time. There is a small handwritten card in front of the dish: CARMEN’S RICE.",
            "when": {
              "flag": "pablo_cooked_carmens"
            }
          },
          {
            "text": "He watches people read it. When they ask, he tells them.",
            "when": {
              "flag": "pablo_cooked_carmens"
            }
          },
          {
            "text": "Pablo’s table is generous and faultless — gazpacho, croquetas, three kinds of cake. He eats in the kitchen, standing at the bench, and is back out front before anyone notices he was gone.",
            "when": {
              "notFlag": "pablo_cooked_carmens"
            }
          },
          {
            "text": "But when her turn comes, it is Al who walks to the microphone."
          },
          {
            "text": "Rhonda’s asked me to read something on her behalf.",
            "speaker": "AL"
          },
          {
            "text": "A polite shuffle moves through the room."
          },
          {
            "text": "Al reads it well, adds a few jokes, and everyone claps. Rhonda does not appear."
          },
          {
            "text": "Later, you find her in the corridor outside the hall, dressed beautifully, holding a programme."
          },
          {
            "text": "Rhonda.",
            "speaker": "PLAYER"
          },
          {
            "text": "She smiles before you can say anything else."
          },
          {
            "text": "Don’t look tragic. That’s my job.",
            "speaker": "RHONDA"
          }
        ],
        "choices": [
          {
            "text": "What happened?",
            "outcome": [
              {
                "text": "Nothing dramatic. Very disappointing of me.",
                "speaker": "RHONDA"
              },
              {
                "text": "She folds the programme in half, and then in half again, until it is small."
              },
              {
                "text": "I simply discovered I’m done.",
                "speaker": "RHONDA"
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
            "text": "There’s still time. They’d love you.",
            "outcome": [
              {
                "text": "Rhonda shakes her head."
              },
              {
                "text": "No, darling.",
                "speaker": "RHONDA"
              },
              {
                "text": "Softly:"
              },
              {
                "text": "There isn’t.",
                "speaker": "RHONDA"
              },
              {
                "text": "Inside, somebody laughs at Al."
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
                "text": "Rhonda looks toward the hall doors. Applause comes through them, warm and muffled."
              },
              {
                "text": "Don’t be. They’re having a lovely time.",
                "speaker": "RHONDA"
              },
              {
                "text": "The next time you visit her apartment, the feather boa is gone."
              },
              {
                "text": "So are the old programmes."
              }
            ],
            "effects": {
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
