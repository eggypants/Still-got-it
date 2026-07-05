export const TIME_SLOTS = ["Morning", "Afternoon", "Evening"];

export const DAYS = [
  { week: 1, weekday: "Monday" },
  { week: 1, weekday: "Tuesday" },
  { week: 1, weekday: "Wednesday" },
  { week: 1, weekday: "Thursday" },
  { week: 1, weekday: "Friday" },
  { week: 1, weekday: "Saturday" },
  { week: 1, weekday: "Sunday" }
];

export const CHARACTERS = {
  rhonda: {
    name: "Rhonda",
    born: 1944,
    short: "Silk scarf, pearl earrings, theatre stories, trouble.",
    defaultNote: "You haven’t really spoken yet."
  },
  pablo: {
    name: "Pablo",
    born: 1950,
    short: "Former restaurateur. Warm, charming, and very serious about feeding people.",
    defaultNote: "You know him by sight."
  },
  miranda: {
    name: "Miranda",
    born: 1943,
    short: "Practical, sharp, hard to impress, kinder than she looks.",
    defaultNote: "She gives nothing away."
  },
  bob: {
    name: "Bob",
    born: 1940,
    short: "Calm, traditional, shy in unexpected places.",
    defaultNote: "He nods when people pass."
  },
  jean: {
    name: "Jean",
    born: 1947,
    short: "Old hippie, lifelong organiser, Rae’s mum, still impossible to pin down.",
    defaultNote: "She seems to know everyone."
  },
  al: {
    name: "Al",
    born: 1947,
    short: "Ladies’ man, old band stories, sharper than he lets on.",
    defaultNote: "He has already winked at someone today."
  }
};

export const MEMORIES = {
  rhonda_hat_laugh: "Rhonda once said the best laugh she ever got was from a tiny comedy role where she lost a hat.",
  rhonda_children_film: "Rhonda’s three children work in film. She sounds proud, but not only proud.",
  rhonda_miss_performing: "Rhonda misses performing, though not in the way people assume.",
  pablo_miranda_tea: "Pablo noticed Miranda takes her tea strong and with no sugar.",
  miranda_accepts_help: "Miranda let Pablo carry a crate of seedlings, then pretended she hadn’t needed help."
};

export const ACTIVITIES = {
  "0-0": [
    {
      id: "mon_morning_lounge",
      title: "Coffee in the lounge",
      location: "Community Lounge",
      note: "Voices near the window. Someone is telling a story.",
      sceneId: "rhonda_first_meeting"
    },
    {
      id: "mon_morning_walk",
      title: "Walking group",
      location: "Reception",
      note: "A slow loop around the block, weather permitting.",
      sceneId: "generic_walking"
    }
  ],
  "0-1": [
    {
      id: "mon_afternoon_garden",
      title: "Garden volunteers",
      location: "Gardens",
      note: "Bring gloves, or borrow the ones with suspicious stains.",
      sceneId: "generic_garden_miranda"
    },
    {
      id: "mon_afternoon_library",
      title: "Library hour",
      location: "Library",
      note: "Quiet reading, returned books, and Jean arguing with the newspaper.",
      sceneId: "generic_library_jean"
    }
  ],
  "0-2": [
    {
      id: "mon_evening_cards",
      title: "Cards in the lounge",
      location: "Community Lounge",
      note: "Al says the stakes are low. Nobody believes him.",
      sceneId: "generic_cards_al"
    },
    {
      id: "mon_evening_cafe",
      title: "Tea in the café",
      location: "Village Café",
      note: "Pablo has opinions about the biscuits.",
      sceneId: "generic_cafe_pablo"
    }
  ],
  "1-0": [
    {
      id: "tue_morning_cafe",
      title: "Morning tea",
      location: "Village Café",
      note: "Fresh scones. At least three people have opinions.",
      sceneId: "pablo_miranda_tea"
    },
    {
      id: "tue_morning_lounge",
      title: "Newspapers in the lounge",
      location: "Community Lounge",
      note: "Rhonda is reading the entertainment pages with theatrical disgust.",
      sceneId: "rhonda_lounge_short"
    }
  ],
  "1-1": [
    {
      id: "tue_afternoon_pottery",
      title: "Pottery",
      location: "Craft Room",
      note: "Beginners welcome. Rhonda has decided this is a threat.",
      sceneId: "rhonda_pottery"
    },
    {
      id: "tue_afternoon_workshop",
      title: "Workshop tidy-up",
      location: "Workshop",
      note: "Bob is fixing a shelf that nobody remembers breaking.",
      sceneId: "generic_workshop_bob"
    }
  ],
  "1-2": [
    {
      id: "tue_evening_choir",
      title: "Choir rehearsal",
      location: "Hall",
      note: "Jean says every movement needs songs. The choir is unconvinced.",
      sceneId: "generic_choir_jean"
    },
    {
      id: "tue_evening_lounge",
      title: "Lounge after dinner",
      location: "Community Lounge",
      note: "Someone has brought a box of old programmes to sort.",
      sceneId: "rhonda_old_box"
    }
  ],
  "2-0": [
    {
      id: "wed_morning_garden",
      title: "Seedlings in the garden",
      location: "Gardens",
      note: "Miranda is pretending she can move three crates alone.",
      sceneId: "pablo_miranda_seedlings"
    },
    {
      id: "wed_morning_cafe",
      title: "Breakfast in the café",
      location: "Village Café",
      note: "Pablo is talking to the toaster as if it owes him money.",
      sceneId: "generic_cafe_pablo"
    }
  ],
  "2-1": [
    {
      id: "wed_afternoon_lounge",
      title: "Lounge gossip",
      location: "Community Lounge",
      note: "Al has news. Al always has news.",
      sceneId: "generic_lounge_al_news"
    },
    {
      id: "wed_afternoon_walk",
      title: "Walking group",
      location: "Reception",
      note: "A second chance to learn who complains uphill.",
      sceneId: "generic_walking"
    }
  ],
  "2-2": [
    {
      id: "wed_evening_movie",
      title: "Movie night",
      location: "Cinema Room",
      note: "Black-and-white comedy. Rhonda has taken a good seat.",
      sceneId: "rhonda_movie_night"
    },
    {
      id: "wed_evening_cards",
      title: "Cards in the lounge",
      location: "Community Lounge",
      note: "Al says he is unlucky in cards. This is not true.",
      sceneId: "generic_cards_al"
    }
  ],
  "3-0": [
    {
      id: "thu_morning_lounge",
      title: "Coffee in the lounge",
      location: "Community Lounge",
      note: "Rhonda is telling a story to anyone who sits still too long.",
      sceneId: "rhonda_lounge_short"
    },
    {
      id: "thu_morning_library",
      title: "Library hour",
      location: "Library",
      note: "Jean is looking for a book and has found a cause.",
      sceneId: "generic_library_jean"
    }
  ],
  "3-1": [
    {
      id: "thu_afternoon_hall",
      title: "Autumn concert notice",
      location: "Noticeboard",
      note: "A fresh notice has appeared. Rhonda is standing beside it.",
      sceneId: "rhonda_concert_notice"
    },
    {
      id: "thu_afternoon_garden",
      title: "Garden volunteers",
      location: "Gardens",
      note: "Miranda has a list. The list has sub-lists.",
      sceneId: "generic_garden_miranda"
    }
  ],
  "3-2": [
    {
      id: "thu_evening_cafe",
      title: "Tea in the café",
      location: "Village Café",
      note: "Pablo is saving a corner table. Miranda is not admitting it is for her.",
      sceneId: "pablo_miranda_corner_table"
    },
    {
      id: "thu_evening_applause",
      title: "Television room",
      location: "TV Room",
      note: "A quiz show is on. Everyone knows better than the contestants.",
      sceneId: "generic_tv_room"
    }
  ],
  "4-0": [
    {
      id: "fri_morning_recruitment",
      title: "Concert planning",
      location: "Community Lounge",
      note: "Rhonda has a clipboard. This appears to be serious.",
      sceneId: "rhonda_recruitment"
    },
    {
      id: "fri_morning_workshop",
      title: "Workshop",
      location: "Workshop",
      note: "Bob is building something and refusing to say what.",
      sceneId: "generic_workshop_bob"
    }
  ],
  "4-1": [
    {
      id: "fri_afternoon_rehearsal",
      title: "First rehearsal",
      location: "Hall",
      note: "The hall is busy. Not organised. Busy.",
      sceneId: "rhonda_rehearsal"
    },
    {
      id: "fri_afternoon_garden",
      title: "Garden volunteers",
      location: "Gardens",
      note: "Miranda needs stakes for the tomatoes. Pablo has brought string.",
      sceneId: "pablo_miranda_seedlings"
    }
  ],
  "4-2": [
    {
      id: "fri_evening_cafe",
      title: "Café supper",
      location: "Village Café",
      note: "Soup, bread, and a table of people pretending not to eavesdrop.",
      sceneId: "generic_cafe_supper"
    },
    {
      id: "fri_evening_room",
      title: "A quiet evening",
      location: "Your Apartment",
      note: "The village hums outside your door.",
      sceneId: "apartment_evening"
    }
  ],
  "5-0": [
    {
      id: "sat_morning_market",
      title: "Village market table",
      location: "Foyer",
      note: "Books, jams, plants, and one mysterious box labelled 'useful'.",
      sceneId: "generic_market"
    },
    {
      id: "sat_morning_lounge",
      title: "Coffee in the lounge",
      location: "Community Lounge",
      note: "Rhonda is holding court, but keeps glancing toward the hall.",
      sceneId: "rhonda_lounge_before_show"
    }
  ],
  "5-1": [
    {
      id: "sat_afternoon_rehearsal",
      title: "Final rehearsal",
      location: "Hall",
      note: "Chairs, cables, Al’s song, and Rhonda trying not to panic.",
      sceneId: "rhonda_final_rehearsal"
    },
    {
      id: "sat_afternoon_library",
      title: "Library hour",
      location: "Library",
      note: "Jean has found a book with a very suspicious dedication.",
      sceneId: "generic_library_jean"
    }
  ],
  "5-2": [
    {
      id: "sat_evening_hall",
      title: "The night before",
      location: "Hall",
      note: "The hall is empty. Rhonda is on the stage.",
      sceneId: "rhonda_night_before"
    },
    {
      id: "sat_evening_cards",
      title: "Cards in the lounge",
      location: "Community Lounge",
      note: "Al says the show will need glamour. Bob says it will need chairs.",
      sceneId: "generic_cards_al"
    }
  ],
  "6-0": [
    {
      id: "sun_morning_cafe",
      title: "Breakfast",
      location: "Village Café",
      note: "The concert is tonight. Everyone has an opinion.",
      sceneId: "generic_pre_show_breakfast"
    },
    {
      id: "sun_morning_garden",
      title: "Morning in the garden",
      location: "Gardens",
      note: "Quiet soil, magpies, and Miranda inspecting leaves.",
      sceneId: "generic_garden_miranda"
    }
  ],
  "6-1": [
    {
      id: "sun_afternoon_room",
      title: "Rest before the concert",
      location: "Your Apartment",
      note: "A quiet afternoon. You can hear chairs being moved in the hall.",
      sceneId: "apartment_pre_show"
    },
    {
      id: "sun_afternoon_hall",
      title: "Help set up the hall",
      location: "Hall",
      note: "Pablo is arranging food. Al is arranging himself.",
      sceneId: "generic_hall_setup"
    }
  ],
  "6-2": [
    {
      id: "sun_evening_show",
      title: "Autumn concert",
      location: "Hall",
      note: "The chairs are out. The lights are on. People are arriving.",
      sceneId: "rhonda_opening_night"
    },
    {
      id: "sun_evening_room",
      title: "Stay in your apartment",
      location: "Your Apartment",
      note: "The concert goes on down the hall.",
      sceneId: "apartment_miss_concert"
    }
  ]
};

function line(speaker, text) {
  return { speaker, text };
}

function p(text) {
  return { text };
}

export const SCENES = {
  rhonda_first_meeting: {
    title: "First meeting",
    location: "Community Lounge",
    art: "Community Lounge",
    content: [
      p("The lounge smells faintly of instant coffee, furniture polish, and perfume."),
      p("A small audience has gathered near the window. At the centre of it sits a woman in a silk scarf and huge pearl earrings, wearing a devilish grin."),
      line("RHONDA", "And then the director said, ‘Rhonda, darling, could you try looking at him as though you’re in love?’"),
      line("RHONDA", "I said, ‘I am looking at him as though I’m in love. Specifically, I’m looking at him as though I’ve been married to him for seven years and he’s just bought a boat.’"),
      p("A few residents laugh."),
      p("Rhonda notices you near the doorway. She peers down her nose at you."),
      line("RHONDA", "Oh, hello. New face."),
      line("RHONDA", "Don’t hover, darling. Come in and tell me who you are and why I should care.")
    ],
    choices: [
      {
        text: "Sorry. I didn’t want to interrupt.",
        outcome: [
          line("RHONDA", "Interrupt? Please. Interruption is the only thing keeping this place alive."),
          p("She pats the chair beside her."),
          line("RHONDA", "Sit."),
          p("You sit. Al looks over from the armchair beside her."),
          line("AL", "Did you work with anyone famous?"),
          line("RHONDA", "Everybody is famous to somebody."),
          p("She points across the room."),
          line("RHONDA", "Al, weren’t you famous once?"),
          line("AL", "Still am, depending on who you ask."),
          line("RHONDA", "There you are."),
          line("AL", "Mostly women with poor judgment."),
          line("RHONDA", "The best audience.")
        ],
        effects: { friendship: { rhonda: 2, al: 1 }, flags: { met_rhonda: true } }
      },
      {
        text: "Were you really in a film?",
        outcome: [
          p("There is a tiny pause."),
          line("RHONDA", "No."),
          p("Beat."),
          line("RHONDA", "I was in several."),
          p("She gives you a look and seems to decide not to take your ignorance to heart."),
          line("RHONDA", "Sit down before you say something worse."),
          p("You sit.")
        ],
        effects: { friendship: { rhonda: 1 }, flags: { met_rhonda: true } }
      },
      {
        text: "I’ll come back later.",
        outcome: [
          line("RHONDA", "Entirely your loss."),
          p("She turns back to her audience."),
          line("RHONDA", "Now, where was I? Ah yes. The boat."),
          p("You leave. As you walk down the hall, you hear them laughing again.")
        ],
        effects: { flags: { avoided_rhonda_first: true } }
      }
    ]
  },

  rhonda_lounge_short: {
    title: "Coffee in the lounge",
    location: "Community Lounge",
    art: "Community Lounge",
    content: [
      p("Rhonda is reading the entertainment pages with a cup of coffee balanced on one knee."),
      line("RHONDA", "I don’t know who half these people are, but I disapprove of their posture."),
      p("She folds the paper and looks at you."),
      line("RHONDA", "Well? What brings you to the kingdom this morning?")
    ],
    choices: [
      {
        text: "Needed a bit less house and a few more people.",
        outcome: [
          p("Rhonda’s expression softens, briefly."),
          line("RHONDA", "Sensible. Dangerous thing, an empty house."),
          p("Then the smile returns.")
        ],
        effects: { friendship: { rhonda: 1 } }
      },
      {
        text: "My family thought it would be good for me.",
        outcome: [
          line("RHONDA", "Ah. Never a good thing when the family starts thinking."),
          p("She leans closer."),
          line("RHONDA", "Worse when it’s you they’re thinking about.")
        ],
        effects: { friendship: { rhonda: 1 } }
      },
      {
        text: "I suppose I wanted a fresh start.",
        outcome: [
          p("Rhonda considers you."),
          line("RHONDA", "Well. You’ve certainly come to the right place."),
          p("She gestures around the lounge."),
          line("RHONDA", "Everyone here has had at least one. Some of us have had several.")
        ],
        effects: { friendship: { rhonda: 1 } }
      }
    ]
  },

  rhonda_pottery: {
    title: "Pottery",
    location: "Craft Room",
    art: "Craft Room",
    content: [
      p("The noticeboard said Pottery: Beginners Welcome."),
      p("The craft room is calm. People are chatting, laughing, making uneven bowls and pretending they meant to."),
      p("Rhonda is the only person who looks tense."),
      p("She sits at the nearest wheel in a silk scarf, back straight, chin lifted. Her clay has collapsed."),
      p("She looks at it with an expression of betrayal."),
      line("RHONDA", "Don’t look at it.")
    ],
    choices: [
      {
        text: "I wasn’t.",
        outcome: [
          line("RHONDA", "You were."),
          p("She pokes the clay with one finger."),
          line("RHONDA", "It knows what it’s done."),
          p("The clay slumps further."),
          line("RHONDA", "Oh, be like that then.")
        ],
        effects: { friendship: { rhonda: 1 } }
      },
      {
        text: "It has character.",
        outcome: [
          p("Rhonda stares at it."),
          line("RHONDA", "So did my second husband. That wasn’t enough either."),
          p("She tries to lift the clay. It slumps."),
          line("RHONDA", "Oh, forget you.")
        ],
        effects: { friendship: { rhonda: 1 } }
      },
      {
        text: "What is it meant to be?",
        outcome: [
          p("Rhonda looks at you, eyes like daggers."),
          line("RHONDA", "A vase."),
          p("Beat."),
          line("RHONDA", "For cacti. Or rocks."),
          p("The pottery teacher passes behind her and says something encouraging. Rhonda smiles too brightly until she’s gone."),
          line("RHONDA", "I hate classes where everyone is expected to be charmingly terrible."),
          line("PLAYER", "Why?"),
          line("RHONDA", "Because some of us spent a great deal of effort becoming charmingly competent.")
        ],
        effects: { friendship: { rhonda: 1 } }
      },
      {
        text: "Do you want help?",
        outcome: [
          line("RHONDA", "No."),
          p("A pause."),
          line("RHONDA", "Maybe."),
          p("Then:"),
          line("RHONDA", "Don’t make a song about it."),
          p("You sit beside her and steady the wheel while she tries again."),
          p("The second attempt is not beautiful, but it stands up."),
          line("RHONDA", "Well."),
          line("PLAYER", "Better?"),
          line("RHONDA", "Let’s not become emotional. But yes."),
          p("She wipes clay from her wrist."),
          line("RHONDA", "I once wore a sequinned gown under studio lights for fourteen hours, and I was more comfortable than I am in this room."),
          line("PLAYER", "What was that for?"),
          line("RHONDA", "Television. Very glamorous. Very stupid. I had two lines and a migraine."),
          p("She smiles."),
          line("RHONDA", "Still. The camera loved me."),
          p("Then, quieter:"),
          line("RHONDA", "For about twelve seconds.")
        ],
        effects: { friendship: { rhonda: 2 }, flags: { helped_rhonda_pottery: true } }
      }
    ]
  },

  rhonda_movie_night: {
    title: "Movie night",
    location: "Cinema Room",
    art: "Cinema Room",
    content: [
      p("Movie night is showing an old black-and-white comedy."),
      p("Someone has brought wrapped peppermints. Someone else has brought cheese and crackers. The room is dark except for the projector glow."),
      p("Rhonda sits two rows from the back."),
      p("She sees you and lifts a finger to her lips."),
      line("RHONDA", "This part is good."),
      p("On screen, a woman in a feathered hat walks straight into a door."),
      p("The room erupts."),
      p("Rhonda laughs properly. Sudden and delighted."),
      p("When the laughter settles, she leans toward you."),
      line("RHONDA", "That fall is perfect.")
    ],
    choices: [
      {
        text: "Looked painful.",
        outcome: [
          line("RHONDA", "That’s why it’s funny."),
          p("She glances at you."),
          line("RHONDA", "You know. As a bit."),
          p("After the film, people shuffle out slowly, still talking about the ending.")
        ],
        effects: { friendship: { rhonda: 1 } }
      },
      {
        text: "She timed it beautifully.",
        outcome: [
          p("Rhonda looks pleased."),
          line("RHONDA", "Yes. Exactly. Half a second earlier and it’s nothing. Half a second later and the audience has already guessed."),
          line("RHONDA", "There. That pause before she turns around? That’s the whole joke."),
          p("After the film, people shuffle out slowly, still talking about the ending."),
          p("Rhonda remains seated for a moment."),
          line("PLAYER", "You liked that one."),
          line("RHONDA", "I did."),
          p("She folds her hands in her lap."),
          line("RHONDA", "Comedy is harder than drama. People think it’s lighter because they’re not paying attention.")
        ],
        effects: { friendship: { rhonda: 2 } }
      },
      {
        text: "Did you do much comedy?",
        outcome: [
          p("Rhonda smiles."),
          line("RHONDA", "A little. Comedy clubs, tiny theatres, improv places. Rooms where half the audience is usually performing later the same night."),
          p("She looks at the blank screen."),
          line("RHONDA", "There was one little part I loved. I played this ridiculous woman. Came on in the second act, insulted a priest, lost her hat, left again."),
          line("PLAYER", "Sounds memorable."),
          line("RHONDA", "It wasn’t. Not really."),
          p("Beat."),
          line("RHONDA", "But every night, when the hat went, the room lost it."),
          p("She says it softly."),
          line("RHONDA", "That was lovely.")
        ],
        effects: { friendship: { rhonda: 2 }, memories: ["rhonda_hat_laugh"], flags: { rhonda_told_hat_story: true } }
      },
      {
        text: "I didn’t think you’d like slapstick.",
        outcome: [
          line("RHONDA", "Darling, I have been married twice. I understand slapstick."),
          p("She turns back to the screen, still smiling.")
        ],
        effects: { friendship: { rhonda: 1 } }
      }
    ]
  },

  rhonda_old_box: {
    title: "The old box",
    location: "Community Lounge",
    art: "Community Lounge",
    content: [
      p("Someone has left three cardboard boxes beside the piano."),
      p("The labels read: TAX 2002. CHRISTMAS THINGS. DO NOT OPEN UNLESS DEAD."),
      p("Rhonda is holding a feather boa."),
      line("RHONDA", "I appear to have been robbed by my younger self.")
    ],
    choices: [
      {
        text: "Do you need help?",
        outcome: [
          line("RHONDA", "Need? No."),
          p("She looks at the boxes."),
          line("RHONDA", "Want? Possibly."),
          p("Inside are old photographs, folded programmes, newspaper clippings, yellowing scripts, and a pair of shoes that look impossible to walk in."),
          p("Rhonda lifts a photo. A younger Rhonda smiles beside three children in matching jumpers."),
          line("RHONDA", "My eldest made that face for seven straight years. I thought she’d become a critic."),
          line("PLAYER", "Your kids are in film, aren’t they?"),
          line("RHONDA", "All three."),
          p("She says it proudly. Too proudly."),
          line("RHONDA", "Clever things. Very busy. London, Toronto, Los Angeles. I practically need a production schedule to ring them.")
        ],
        effects: { friendship: { rhonda: 1 }, memories: ["rhonda_children_film"] }
      },
      {
        text: "Should I ask about the box?",
        outcome: [
          p("Rhonda looks at the label."),
          line("RHONDA", "Absolutely not."),
          p("She lasts about two seconds."),
          line("RHONDA", "Alright, I’ll tell you."),
          p("She sits on the edge of a box."),
          line("RHONDA", "I had children, and the work slowed."),
          p("She picks up a programme."),
          line("RHONDA", "Then the roles got smaller. Somehow I became too old for ingénues, too young for grandmothers, and I’m too glamorous for mothers, which sounds flattering until you realise it means unemployed."),
          p("She laughs once."),
          line("RHONDA", "So when the children showed interest, I thought, good. There it is. The door is still open, just not for me.")
        ],
        effects: { friendship: { rhonda: 2 }, memories: ["rhonda_children_film"] }
      },
      {
        text: "That boa suits you.",
        outcome: [
          p("She drapes it around her neck immediately."),
          line("RHONDA", "Everything suits me, dear."),
          p("She winks."),
          p("Then she looks down at the programmes in the box."),
          line("PLAYER", "Do you miss performing?"),
          line("RHONDA", "No."),
          p("Then she touches the feather boa."),
          line("RHONDA", "Yes."),
          p("Then:"),
          line("RHONDA", "Not in the way people think."),
          p("She picks up a tiny theatre programme."),
          line("RHONDA", "This one. Awful play. Terrible reviews. We performed for twenty-seven people and a damp patch on the ceiling."),
          p("She smiles despite herself."),
          line("RHONDA", "Best laugh I ever got."),
          p("A long pause."),
          line("RHONDA", "Isn’t that annoying?")
        ],
        effects: { friendship: { rhonda: 2 }, memories: ["rhonda_miss_performing"] }
      }
    ]
  },

  rhonda_concert_notice: {
    title: "The notice",
    location: "Noticeboard",
    art: "Noticeboard",
    content: [
      p("Pinned crookedly over the usual notices is a fresh sheet of paper."),
      p("SUNSET PINES AUTUMN CONCERT. Performers wanted. Singers, readers, musicians, dancers, comedians, magicians, poets, and persons with unclear but enthusiastic talents. See Rhonda. Do not see Al. He has already suggested a costume change."),
      p("Below it, in different handwriting: I STAND BY THE COSTUME CHANGE. — Al"),
      p("Rhonda is standing nearby with a pen, looking pleased with herself."),
      line("RHONDA", "There you are."),
      line("PLAYER", "Me?"),
      line("RHONDA", "Don’t sound so frightened. I haven’t cast you yet.")
    ],
    choices: [
      {
        text: "This is your doing, isn’t it?",
        outcome: [
          line("RHONDA", "Naturally."),
          p("She taps the notice with the pen."),
          line("RHONDA", "This place needs a little noise."),
          p("Behind her, Al reads the note again and nods to himself.")
        ],
        effects: { friendship: { rhonda: 1, al: 1 }, flags: { concert_started: true } }
      },
      {
        text: "Are you performing?",
        outcome: [
          p("Rhonda’s smile holds."),
          line("RHONDA", "We’ll see."),
          p("She writes your name neatly at the bottom of her clipboard."),
          line("RHONDA", "For now, you can help." )
        ],
        effects: { friendship: { rhonda: 1 }, flags: { concert_started: true } }
      },
      {
        text: "Good luck with that.",
        outcome: [
          line("RHONDA", "Luck is what people call preparation when they arrive late."),
          p("She looks pointedly at the sign-up sheet."),
          line("RHONDA", "Don’t arrive late." )
        ],
        effects: { friendship: { rhonda: 0 }, flags: { concert_started: true } }
      }
    ]
  },

  rhonda_recruitment: {
    title: "Recruitment",
    location: "Community Lounge",
    art: "Community Lounge",
    content: [
      p("Rhonda sits upright at a table in the lounge, looking right at home with a clipboard, coloured pens, and a list of names."),
      p("You spot your own name among them."),
      line("RHONDA", "A village concert needs structure."),
      line("AL", "I thought it needed talent."),
      line("RHONDA", "Structure first. Talent second. Enthusiasm third."),
      p("Bob stands near the back, arms folded."),
      line("BOB", "I’m not singing."),
      line("RHONDA", "Nobody asked you to sing."),
      line("BOB", "Good."),
      line("RHONDA", "You’re reading."),
      line("BOB", "Reading what?"),
      line("RHONDA", "Don’t worry. It will be short."),
      p("A pause."),
      line("RHONDA", "But moving."),
      p("Bob turns red."),
      p("Pablo arrives carrying a tray of biscuits."),
      line("PABLO", "I only came to bring these."),
      p("Rhonda takes the tray."),
      line("RHONDA", "And now you’re catering."),
      p("Pablo laughs."),
      line("PABLO", "Ah. That’s how they get you.")
    ],
    choices: [
      {
        text: "You’re enjoying this.",
        outcome: [
          p("Rhonda beams."),
          line("RHONDA", "Immensely."),
          p("She looks around the room. People are arguing, laughing, chatting away."),
          line("RHONDA", "Look at them. Half of them came to complain and now they’re helping.")
        ],
        effects: { friendship: { rhonda: 2 }, flags: { rhonda_recruitment_seen: true } }
      },
      {
        text: "Maybe don’t bully everyone.",
        outcome: [
          line("RHONDA", "I am not bullying. I am inspiring."),
          p("Bob gives you a look that suggests he is not inspired."),
          p("Al puts his name down for one song. Then tries to make it two.")
        ],
        effects: { friendship: { rhonda: 0, bob: 1 }, flags: { rhonda_recruitment_seen: true } }
      },
      {
        text: "What do you want me to do?",
        outcome: [
          p("Rhonda hands you a pen."),
          line("RHONDA", "Find out who secretly wants to perform but is waiting to be discovered."),
          line("PLAYER", "How will I know?"),
          line("RHONDA", "They’ll say, ‘Oh no, not me,’ while standing very close to the sign-up sheet.")
        ],
        effects: { friendship: { rhonda: 2 }, flags: { rhonda_recruitment_seen: true, player_helped_recruit: true } }
      }
    ]
  },

  rhonda_rehearsal: {
    title: "First rehearsal",
    location: "Hall",
    art: "Hall",
    content: [
      p("The hall is busy."),
      p("Jean wants to include a protest song. Al wants to open with something from 1967 and won’t say what. Bob is standing beside the stage holding a poem. Pablo is measuring the trestle tables because, if he is feeding people, he intends to do it properly."),
      p("Rhonda claps twice."),
      line("RHONDA", "From the top."),
      line("AL", "Whose top?"),
      p("Rhonda looks at him."),
      p("Al grins and sits down."),
      p("The rehearsal begins."),
      p("It immediately stops."),
      line("RHONDA", "No, no. Bob, darling, you cannot read a poem like you’re announcing train delays."),
      p("Bob looks mortified."),
      line("BOB", "I told you I shouldn’t do it."),
      p("Rhonda’s face flickers.")
    ],
    choices: [
      {
        text: "Give him a minute.",
        outcome: [
          p("Rhonda exhales."),
          line("RHONDA", "Fine."),
          p("Then, softer:"),
          line("RHONDA", "A minute."),
          p("Bob nods at you once."),
          p("Later, when people drift out, Rhonda remains in the hall, rearranging chairs that do not need rearranging."),
          line("PLAYER", "You all right?"),
          line("RHONDA", "Never ask an actress that. We’re trained to lie."),
          p("Beat."),
          line("RHONDA", "No."),
          p("She looks at the little stage."),
          line("RHONDA", "It’s smaller than I remembered."),
          line("PLAYER", "The stage?"),
          line("RHONDA", "Everything.")
        ],
        effects: { friendship: { rhonda: 2, bob: 1 }, flags: { rhonda_rehearsal_seen: true } }
      },
      {
        text: "Bob’s doing better than Al.",
        outcome: [
          line("AL", "Impossible."),
          line("RHONDA", "Sadly, no."),
          p("Bob almost smiles."),
          p("Rehearsal resumes. It is not good, but it is louder than it was.")
        ],
        effects: { friendship: { rhonda: 1, bob: 1, al: 1 }, flags: { rhonda_rehearsal_seen: true } }
      },
      {
        text: "Rhonda, maybe ease up.",
        outcome: [
          p("Rhonda turns."),
          line("RHONDA", "I beg your pardon?"),
          p("The room goes quiet."),
          line("RHONDA", "This is not a bus tour. I am not here for the scenery."),
          p("Later, you see Bob leave early. Rhonda watches him go and says nothing.")
        ],
        effects: { friendship: { rhonda: -1, bob: 1 }, flags: { rhonda_rehearsal_seen: true, rhonda_pushed_too_hard: true } }
      }
    ]
  },

  rhonda_final_rehearsal: {
    title: "Final rehearsal",
    location: "Hall",
    art: "Hall",
    content: [
      p("Final rehearsal is less organised than Rhonda wants and more organised than anyone else expected."),
      p("Al sings half a song and flirts with the front row, which is currently three empty chairs and Bob."),
      p("Pablo checks the trestle tables again."),
      p("Rhonda keeps her script folded in one hand."),
      line("RHONDA", "Again. From the beginning. And if anyone says ‘whose beginning,’ I shall retire immediately.")
    ],
    choices: [
      {
        text: "Stay and help move chairs.",
        outcome: [
          p("You help move chairs. Then move them back when Rhonda changes her mind."),
          p("She notices. She says nothing. Then she puts your chair in the front row.")
        ],
        effects: { friendship: { rhonda: 1 }, flags: { helped_final_rehearsal: true } }
      },
      {
        text: "Ask Rhonda if she needs anything.",
        outcome: [
          line("RHONDA", "A younger spine, a better curtain, and Al to discover shame."),
          p("She looks at the stage."),
          line("RHONDA", "Failing that, stay where I can see you." )
        ],
        effects: { friendship: { rhonda: 2 }, flags: { helped_final_rehearsal: true } }
      },
      {
        text: "Leave them to it.",
        outcome: [
          p("You slip out while Jean is arguing for one more verse."),
          p("Behind you, Rhonda calls for quiet and gets almost some of it.")
        ],
        effects: { flags: { skipped_final_rehearsal: true } }
      }
    ]
  },

  rhonda_lounge_before_show: {
    title: "Before the show",
    location: "Community Lounge",
    art: "Community Lounge",
    content: [
      p("Rhonda is holding court in the lounge, but she keeps glancing toward the hall."),
      line("AL", "Nervous?"),
      line("RHONDA", "Don’t be absurd."),
      line("AL", "I meant me."),
      line("RHONDA", "Then yes, but only because you keep threatening leather trousers."),
      p("Al looks delighted." )
    ],
    choices: [
      {
        text: "Sit with them for a while.",
        outcome: [
          p("You sit. Rhonda does most of the talking. Al does most of the interrupting."),
          p("It helps, though neither of them would admit it.")
        ],
        effects: { friendship: { rhonda: 1, al: 1 } }
      },
      {
        text: "Wish Rhonda luck.",
        outcome: [
          line("RHONDA", "Luck is for amateurs."),
          p("A beat."),
          line("RHONDA", "Thank you." )
        ],
        effects: { friendship: { rhonda: 1 } }
      }
    ]
  },

  rhonda_night_before: {
    title: "The night before",
    location: "Hall",
    art: "Hall",
    content: [
      p("The hall is empty except for Rhonda."),
      p("She stands on the stage in ordinary clothes, holding a script."),
      p("No scarf. No pearls. No grin."),
      p("For a moment, she looks less like Rhonda and more like someone who has put the armour down."),
      line("RHONDA", "I thought I’d forgotten how to be nervous."),
      p("She laughs quietly.")
    ],
    choices: [
      {
        text: "You’ll be great. Everyone will love you.",
        outcome: [
          p("Rhonda smiles, but it doesn’t reach her eyes."),
          line("RHONDA", "Yes. Well."),
          p("She looks down at the script."),
          line("RHONDA", "That was always the plan, wasn’t it?")
        ],
        effects: { friendship: { rhonda: 0 }, flags: { rhonda_night_before_failed: true } }
      },
      {
        text: "You don’t have to do it if you don’t want to.",
        outcome: [
          p("Rhonda closes her eyes."),
          line("RHONDA", "That is the kindest and most dangerous thing anyone has said to me all week.")
        ],
        effects: { friendship: { rhonda: 0 }, flags: { rhonda_night_before_failed: true } }
      },
      {
        text: "Remember the comedy you told me about? The hat?",
        requiresMemory: "rhonda_hat_laugh",
        outcome: [
          p("Rhonda looks up."),
          line("RHONDA", "The hat?"),
          line("PLAYER", "You said every night, when it went, the room lost it."),
          p("For once, Rhonda says nothing."),
          line("PLAYER", "Maybe tomorrow doesn’t have to prove anything bigger than that."),
          p("Rhonda looks at the empty chairs."),
          p("Then she laughs."),
          line("RHONDA", "The hat."),
          p("She presses the script to her chest."),
          line("RHONDA", "They roared about that hat.")
        ],
        effects: { friendship: { rhonda: 3 }, flags: { rhonda_night_before_success: true } }
      }
    ]
  },

  rhonda_opening_night: {
    title: "Autumn concert",
    location: "Hall",
    art: "Hall",
    dynamic: true
  },

  pablo_miranda_tea: {
    title: "Morning tea",
    location: "Village Café",
    art: "Village Café",
    content: [
      p("The café is busy enough that nobody can pretend they came only for the scones."),
      p("Pablo stands near the counter with a teapot in one hand."),
      line("PABLO", "Strong, no sugar."),
      p("He places a cup in front of Miranda before she asks."),
      p("Miranda looks at it."),
      line("MIRANDA", "You remembered."),
      line("PABLO", "I remember food, drink, birthdays, grudges. In that order."),
      p("Miranda picks up the cup."),
      line("MIRANDA", "Tea isn’t food."),
      line("PABLO", "In England it is a whole personality."),
      p("Miranda almost smiles.")
    ],
    choices: [
      {
        text: "Join them.",
        outcome: [
          p("You sit with them. Pablo asks what you take in your tea. Miranda says nothing, but listens to the answer."),
          p("Ten minutes later, Pablo is telling a story about a restaurant dishwasher that exploded on New Year’s Eve.")
        ],
        effects: { friendship: { pablo: 1, miranda: 1 }, memories: ["pablo_miranda_tea"], flags: { saw_pablo_miranda_tea: true } }
      },
      {
        text: "Leave them to their tea.",
        outcome: [
          p("You take your cup to another table."),
          p("When you glance back, Pablo is talking with his hands. Miranda is correcting him. Neither of them seems to mind.")
        ],
        effects: { memories: ["pablo_miranda_tea"], flags: { saw_pablo_miranda_tea: true } }
      }
    ]
  },

  pablo_miranda_seedlings: {
    title: "Seedlings",
    location: "Gardens",
    art: "Gardens",
    content: [
      p("Miranda is standing beside three crates of seedlings."),
      p("Pablo arrives with a trolley."),
      line("MIRANDA", "I didn’t ask for help."),
      line("PABLO", "No. That is why I brought the trolley, not a marching band."),
      p("She looks at the crates. Then at the trolley."),
      line("MIRANDA", "Fine. But don’t bruise the leaves."),
      line("PABLO", "I have carried wedding cakes through kitchens smaller than this path."),
      p("Miranda steps aside." )
    ],
    choices: [
      {
        text: "Help with the crates.",
        outcome: [
          p("The three of you move the seedlings into the shade."),
          p("Miranda inspects every leaf afterwards. Pablo lets her."),
          line("MIRANDA", "Acceptable."),
          line("PABLO", "From you, I take that as applause." )
        ],
        effects: { friendship: { pablo: 1, miranda: 1 }, memories: ["miranda_accepts_help"], flags: { saw_pablo_miranda_seedlings: true } }
      },
      {
        text: "Watch from the bench.",
        outcome: [
          p("You sit on the bench and watch them negotiate three crates, one trolley, and Miranda’s standards."),
          p("By the end, Pablo is smiling and Miranda is pretending not to.")
        ],
        effects: { memories: ["miranda_accepts_help"], flags: { saw_pablo_miranda_seedlings: true } }
      }
    ]
  },

  pablo_miranda_corner_table: {
    title: "Corner table",
    location: "Village Café",
    art: "Village Café",
    content: [
      p("Pablo is sitting at the corner table with two cups of tea."),
      p("Miranda arrives exactly three minutes later."),
      line("MIRANDA", "You are in my seat."),
      line("PABLO", "I am saving your seat."),
      p("Miranda looks at the second cup."),
      line("MIRANDA", "That is not the same thing."),
      line("PABLO", "No. It is nicer."),
      p("She sits." )
    ],
    choices: [
      {
        text: "Pretend not to notice.",
        outcome: [
          p("You choose another table."),
          p("Behind you, Miranda tells Pablo his tea is too hot. He says that is because time exists." )
        ],
        effects: { flags: { saw_pablo_miranda_corner_table: true } }
      },
      {
        text: "Say hello.",
        outcome: [
          p("You say hello. Pablo waves you over immediately."),
          p("Miranda says, ‘Only if you don’t encourage him.’"),
          p("You sit anyway." )
        ],
        effects: { friendship: { pablo: 1, miranda: 1 }, flags: { saw_pablo_miranda_corner_table: true } }
      }
    ]
  },

  generic_walking: genericScene("Walking group", "Reception", "You join the walking group for a slow loop around the block. Someone points out a jacaranda. Someone else says the council should fix the footpath. By the time you return, you know three new names and one strong opinion about bins."),
  generic_garden_miranda: genericScene("Garden volunteers", "Gardens", "The garden is warm and full of small jobs. Miranda gives instructions without raising her voice. People obey anyway." , { friendship: { miranda: 1 } }),
  generic_library_jean: genericScene("Library hour", "Library", "Jean is in the library with a stack of books and a pencil tucked behind one ear. She says she only came to return a novel. This was clearly several conversations ago.", { friendship: { jean: 1 } }),
  generic_cards_al: genericScene("Cards", "Community Lounge", "Al deals cards with the confidence of a man who has been forgiven for worse things than bad shuffling. He loses one hand, wins two, and claims the score is spiritually even.", { friendship: { al: 1 } }),
  generic_cafe_pablo: genericScene("Tea in the café", "Village Café", "Pablo is in the café explaining that a biscuit can be dry without being bad. He seems to consider this an important distinction.", { friendship: { pablo: 1 } }),
  generic_workshop_bob: genericScene("Workshop", "Workshop", "Bob is fixing a shelf with the focus of someone defusing a bomb. He nods when you come in. After a while, he hands you a screwdriver without asking.", { friendship: { bob: 1 } }),
  generic_choir_jean: genericScene("Choir rehearsal", "Hall", "Jean says the song needs more conviction. The choir says it needs fewer verses. Everyone is partly right.", { friendship: { jean: 1 } }),
  generic_lounge_al_news: genericScene("Lounge gossip", "Community Lounge", "Al has news about the concert, the café, and someone’s grandson. It is difficult to tell which parts are verified. It is also difficult not to listen.", { friendship: { al: 1 } }),
  generic_tv_room: genericScene("Television room", "TV Room", "A quiz show is on. Everyone knows the answer after the contestant gets it wrong. This seems to be the main pleasure of the format."),
  generic_cafe_supper: genericScene("Café supper", "Village Café", "Supper is soup and bread. Pablo says the soup needs lemon. Miranda says it needs salt. Jean says it needs a better funding model." , { friendship: { pablo: 1, miranda: 1, jean: 1 } }),
  generic_market: genericScene("Village market table", "Foyer", "The foyer table has books, jams, plants, and one mysterious box labelled 'useful'. Al buys nothing and compliments everyone. This is apparently his contribution." , { friendship: { al: 1 } }),
  generic_pre_show_breakfast: genericScene("Breakfast", "Village Café", "The concert is tonight. The café has the feeling of a place pretending to be normal. Pablo says the food will be ready. Al says his hair will be ready. Bob says the chairs had better be ready.", { friendship: { pablo: 1, al: 1, bob: 1 } }),
  generic_hall_setup: genericScene("Hall setup", "Hall", "You help set up chairs in the hall. Pablo arranges food with care. Al arranges himself near the entrance. Jean tapes up a sign, takes it down, and tapes it up straighter.", { friendship: { pablo: 1, al: 1, jean: 1 }, flags: { helped_hall_setup: true } }),
  apartment_morning: apartmentScene("A quiet morning", "You stay in your apartment and make toast. Somewhere outside, a trolley squeaks down the hall."),
  apartment_afternoon: apartmentScene("A quiet afternoon", "You stay in your apartment while the light moves across the carpet. A mower starts, stops, then starts again."),
  apartment_evening: apartmentScene("A quiet evening", "You make tea and stay in your apartment. Outside, the village carries on without making a fuss about it."),
  apartment_pre_show: apartmentScene("Rest before the concert", "You spend the afternoon in your apartment. Through the wall, faintly, you hear chairs scraping in the hall."),
  apartment_miss_concert: {
    title: "A quiet concert night",
    location: "Your Apartment",
    art: "Your Apartment",
    content: [p("You stay in your apartment while the concert happens down the hall. Sometimes there is applause. Once, a burst of laughter. Later, footsteps pass your door.")],
    choices: [
      {
        text: "Let the evening pass.",
        outcome: [p("The hall quiets. Tomorrow, people will be talking about things you did not see.")],
        effects: { flags: { missed_concert: true, spent_time_alone: true } }
      }
    ]
  }
};

function genericScene(title, location, text, effects = {}) {
  return {
    title,
    location,
    art: location,
    content: [p(text)],
    choices: [
      {
        text: "Stay for a while.",
        outcome: [p("The time passes more quickly than you expected.")],
        effects
      }
    ]
  };
}

function apartmentScene(title, text) {
  return {
    title,
    location: "Your Apartment",
    art: "Your Apartment",
    content: [p(text)],
    choices: [
      {
        text: "Let the time pass.",
        outcome: [p("Later, the light has changed.")],
        effects: { flags: { spent_time_alone: true } }
      }
    ]
  };
}
