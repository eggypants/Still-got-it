const getTrust = (state, id) => state.relationships[id]?.trust ?? 0;
const hasFlag = (state, flag) => Boolean(state.flags[flag]);
const hasSeen = (state, id) => state.seenScenes.includes(id);

export const scenes = [
  {
    id: 'rhonda_lounge_story',
    characterId: 'rhonda',
    title: 'Rhonda Holds Court',
    location: 'Lounge terrace',
    summary: 'Rhonda tells a story about television, rouge, and a director with no taste.',
    available: state => state.day >= 1 && !hasSeen(state, 'rhonda_lounge_story'),
    text: state => `Rhonda has arranged herself beneath the best light in the lounge terrace. Three residents listen while she describes a television shoot from 1978 with the solemnity of someone recounting a naval battle.\n\n"Of course, darling," she says, "the camera loved me. The director was the problem."`,
    choices: [
      {
        id: 'rhonda_ask_set_reality',
        text: 'Ask what the set was really like, not just the glamorous version.',
        meta: 'You listen for the person behind the performance.',
        effects: { trust: { rhonda: 8 }, flags: { rhondaMentionedTinyComedyRole: true } },
        after: 'Rhonda pauses, then smiles with less polish and more warmth. She tells you her favourite role was a tiny comedy part where she made the crew laugh until the boom mic shook.'
      },
      {
        id: 'rhonda_star_flattery',
        text: 'Tell her she must have been the star of everything she touched.',
        meta: 'Flattering, but not especially attentive.',
        effects: { trust: { rhonda: 4 } },
        after: 'Rhonda accepts the compliment like a queen accepting tribute. She enjoys it. You are not sure she believes it.'
      },
      {
        id: 'rhonda_interrupt_story',
        text: 'Interrupt with your own almost-famous anecdote.',
        meta: 'Bold. Ill-advised.',
        effects: { trust: { rhonda: -2 } },
        after: 'Rhonda laughs. It is not a friendly laugh. Somewhere nearby, a teaspoon becomes nervous.'
      }
    ]
  },

  {
    id: 'rhonda_wardrobe_emergency',
    characterId: 'rhonda',
    title: 'Wardrobe Emergency',
    location: 'Activity room',
    summary: 'A sequinned jacket has betrayed Rhonda at a crucial moment.',
    available: state => state.day >= 2 && getTrust(state, 'rhonda') >= 6 && !hasSeen(state, 'rhonda_wardrobe_emergency'),
    text: () => `Rhonda stands in the activity room, holding a sequinned jacket at arm's length.\n\n"This," she announces, "is not a garment. This is sabotage with sleeves."\n\nThe village variety night is still days away, but Rhonda is already treating the costume rack like an unreliable cast member.`,
    choices: [
      {
        id: 'rhonda_help_costume',
        text: 'Help her fix it while letting her complain theatrically.',
        meta: 'Practical support, zero attempt to dim the drama.',
        effects: { trust: { rhonda: 7 }, flags: { rhondaCostumeHelp: true } },
        after: 'You hold pins and nod at the right moments. Rhonda complains for forty minutes and leaves visibly calmer. The jacket survives.'
      },
      {
        id: 'rhonda_tell_relax',
        text: 'Tell her to relax. It is only a village show.',
        meta: 'Efficient way to become a villain in her memoir.',
        effects: { trust: { rhonda: -3 } },
        after: 'Rhonda looks at you as if you have suggested replacing champagne with room-temperature tap water.'
      },
      {
        id: 'rhonda_take_over',
        text: 'Take over and solve the problem yourself.',
        meta: 'Useful, but you miss what she actually needed.',
        effects: { trust: { rhonda: 2 } },
        after: 'The jacket gets fixed. Rhonda thanks you, but she goes quiet afterwards. Being managed is not the same as being seen.'
      }
    ]
  },

  {
    id: 'rhonda_old_review',
    characterId: 'rhonda',
    title: 'A Review in the Drawer',
    location: 'Rhonda’s apartment doorway',
    summary: 'A scrap of newspaper reveals more than Rhonda intended.',
    available: state => state.day >= 3 && getTrust(state, 'rhonda') >= 14 && !hasSeen(state, 'rhonda_old_review'),
    text: () => `Rhonda asks you to pass her a lipstick from the hall table. When you open the drawer, you see an old clipped review: four lines praising "a sparkling comic turn from Rhonda Vale."\n\nShe sees you see it. For once, she does not fill the silence immediately.`,
    choices: [
      {
        id: 'rhonda_specific_praise',
        text: 'Say the review noticed exactly what she loved doing: making people laugh.',
        meta: 'Specific attention. Dangerous levels of tenderness.',
        effects: { trust: { rhonda: 9 }, flags: { rhondaUnderstandsNotFame: true } },
        after: 'Rhonda touches the paper with one finger. "Yes," she says softly. "That was the good bit, wasn’t it?"'
      },
      {
        id: 'rhonda_big_break',
        text: 'Say it proves she should have been famous.',
        meta: 'Kind, but not quite the wound.',
        effects: { trust: { rhonda: 3 } },
        after: 'She smiles brightly. Too brightly. "Should have been" is a room she knows too well.'
      },
      {
        id: 'rhonda_put_back',
        text: 'Put it back without comment.',
        meta: 'Respectful distance.',
        effects: { trust: { rhonda: 1 } },
        after: 'Rhonda nods once. You have not done wrong. You have simply not stepped closer.'
      }
    ]
  },

  {
    id: 'rhonda_dinner_signal',
    characterId: 'rhonda',
    title: 'A Table for Two-ish',
    location: 'Dining room',
    summary: 'A chance to make your interest clear, or keep things friendly.',
    available: state => state.day >= 4 && getTrust(state, 'rhonda') >= 18 && !hasSeen(state, 'rhonda_dinner_signal'),
    text: () => `Dinner is unusually good, which means the dining room is unusually suspicious. Rhonda sits alone at a table set for four, one eyebrow lifted as if the empty chairs have disappointed her personally.`,
    choices: [
      {
        id: 'rhonda_flirt_dinner',
        text: 'Ask if she would like company — just yours, if she can bear the scandal.',
        meta: 'A clear romantic signal.',
        effects: { trust: { rhonda: 5 }, romance: { rhonda: 14 }, flags: { playerFlirtedWithRhonda: true } },
        after: 'Rhonda laughs low and pleased. "Darling, at my age scandal has to book in advance." She gestures to the chair beside her.'
      },
      {
        id: 'rhonda_friend_dinner',
        text: 'Ask if she wants company and wave over the others too.',
        meta: 'Warm friendship, no romance signal.',
        effects: { trust: { rhonda: 6 } },
        after: 'Rhonda pretends to be offended by the expanding audience. She is, plainly, delighted.'
      },
      {
        id: 'rhonda_leave_space',
        text: 'Leave her to enjoy the peace.',
        meta: 'Polite distance.',
        effects: { trust: { rhonda: 1 } },
        after: 'Rhonda gives you a small nod. The empty chair remains empty.'
      }
    ]
  },

  {
    id: 'rhonda_after_crossroads',
    characterId: 'rhonda',
    title: 'After the Applause',
    location: 'Lounge terrace',
    summary: 'Rhonda processes what happened at the musical.',
    available: state => state.day >= 7 && state.relationships.rhonda.crossroadsOutcome && !hasSeen(state, 'rhonda_after_crossroads'),
    text: state => state.relationships.rhonda.crossroadsOutcome === 'success'
      ? `Rhonda has pinned a new notice to the board: "Next year’s show — interested parties may audition, if they possess timing, diction, and the ability to stand where told."\n\nShe catches you reading it and tries not to smile.`
      : `Rhonda sits with a cup of tea and a scarf tied too perfectly. The variety night is over. Her costume rack has vanished from the activity room.\n\n"No tragedy," she says before you can ask. "Just good sense arriving late."`,
    choices: [
      {
        id: 'rhonda_success_share_future',
        text: 'Tell her you want a front-row seat next year.',
        meta: 'You affirm the version of Rhonda that kept going.',
        requirements: state => state.relationships.rhonda.crossroadsOutcome === 'success',
        effects: { trust: { rhonda: 8 }, romance: { rhonda: 6 } },
        after: 'She points at you with her teaspoon. "Front row is for donors and fools. Fortunately, you may qualify as both."'
      },
      {
        id: 'rhonda_failure_stay_close',
        text: 'Tell her you are sorry it became too much, and you still like her company.',
        meta: 'You cannot fix it, but you can stay.',
        requirements: state => state.relationships.rhonda.crossroadsOutcome === 'failure',
        effects: { trust: { rhonda: 5 }, romance: { rhonda: 3 } },
        after: 'Rhonda looks away for a second. "Well," she says, softer than usual. "That is something."'
      },
      {
        id: 'rhonda_change_subject',
        text: 'Change the subject to village gossip.',
        meta: 'Safe ground.',
        effects: { trust: { rhonda: 2 } },
        after: 'Rhonda accepts the escape route and takes it beautifully.'
      }
    ]
  },

  {
    id: 'pablo_tomatoes_bread',
    characterId: 'pablo',
    title: 'Tomatoes and Bread',
    location: 'Community kitchen',
    summary: 'Pablo explains why lunch should never be treated as a chore.',
    available: state => state.day >= 1 && !hasSeen(state, 'pablo_tomatoes_bread'),
    text: () => `Pablo stands in the community kitchen with tomatoes, bread, oil, and the grave expression of a man about to perform surgery.\n\n"People think simple food is easy," he says. "No. Simple food has nowhere to hide."`,
    choices: [
      {
        id: 'pablo_ask_history',
        text: 'Ask where he learned to make it this way.',
        meta: 'Curiosity opens the door.',
        effects: { trust: { pablo: 8 }, flags: { pabloTalkedAboutWifeRecipe: true } },
        after: 'He tells you about his wife teaching their eldest to rub garlic into toast. He laughs, then goes quiet in a way that asks you not to rush him.'
      },
      {
        id: 'pablo_praise_food',
        text: 'Tell him it already smells incredible.',
        meta: 'True and welcome.',
        effects: { trust: { pablo: 4 } },
        after: 'Pablo beams. Compliments to the food are compliments to several generations of ghosts.'
      },
      {
        id: 'pablo_suggest_shortcut',
        text: 'Suggest using the bottled dressing from the fridge.',
        meta: 'A tiny act of war.',
        effects: { trust: { pablo: -2 } },
        after: 'Pablo stares at you. "I am going to pretend I did not hear this."'
      }
    ]
  },

  {
    id: 'pablo_paella_class',
    characterId: 'pablo',
    title: 'Paella Class',
    location: 'Community kitchen',
    summary: 'Pablo attempts to teach eight residents and one smoke alarm.',
    available: state => state.day >= 2 && getTrust(state, 'pablo') >= 6 && !hasSeen(state, 'pablo_paella_class'),
    text: () => `Pablo’s cooking class has attracted eight residents, one overconfident grandson, and a smoke alarm that seems personally invested in the outcome.\n\n"No stirring after the rice goes in," Pablo says. "If you stir, I see it in my soul."`,
    choices: [
      {
        id: 'pablo_ask_soffritto',
        text: 'Ask why he cooks the onions so slowly.',
        meta: 'A question about method becomes a question about memory.',
        effects: { trust: { pablo: 7 }, flags: { pabloCuriosityAboutFood: true } },
        after: 'Pablo lights up. He explains patience, sweetness, and the difference between cooking dinner and feeding people.'
      },
      {
        id: 'pablo_rescue_smoke_alarm',
        text: 'Quietly fan the smoke alarm with a tea towel.',
        meta: 'Heroism, but domestic.',
        effects: { trust: { pablo: 5 } },
        after: 'Pablo gives you a solemn nod. You have served the rice and the nation.'
      },
      {
        id: 'pablo_overseason',
        text: 'Add extra paprika while he is not looking.',
        meta: 'Bob would approve. Pablo will not.',
        effects: { trust: { pablo: -3 } },
        after: 'Pablo knows. You do not know how he knows, but he knows.'
      }
    ]
  },

  {
    id: 'pablo_recipe_card',
    characterId: 'pablo',
    title: 'The Recipe Card',
    location: 'Pablo’s kitchen table',
    summary: 'An old card carries more weight than its paper should.',
    available: state => state.day >= 3 && getTrust(state, 'pablo') >= 14 && !hasSeen(state, 'pablo_recipe_card'),
    text: () => `Pablo shows you a recipe card so worn the corners have gone soft. The handwriting is not his.\n\n"She wrote this when the children were little," he says. "I know it by heart, but still I keep looking."`,
    choices: [
      {
        id: 'pablo_memory_not_replacement',
        text: 'Say keeping the recipe alive sounds like love, not replacement.',
        meta: 'You name the fear gently.',
        effects: { trust: { pablo: 9 }, flags: { pabloUnderstandsHonouringWife: true } },
        after: 'Pablo folds the card carefully. "Maybe," he says. "Maybe love can sit at a bigger table than I thought."'
      },
      {
        id: 'pablo_time_to_move_on',
        text: 'Say ten years is a long time and he deserves to move on.',
        meta: 'True-ish, but clumsy.',
        effects: { trust: { pablo: 1 } },
        after: 'Pablo does not argue. That is how you know you missed.'
      },
      {
        id: 'pablo_silent_respect',
        text: 'Sit with him in silence while he reads it again.',
        meta: 'A decent answer, even if not the deepest one.',
        effects: { trust: { pablo: 5 } },
        after: 'He nods once, grateful that you do not fill every tender place with words.'
      }
    ]
  },

  {
    id: 'pablo_dinner_signal',
    characterId: 'pablo',
    title: 'The Second Plate',
    location: 'Community kitchen',
    summary: 'A meal can be a gesture if someone chooses to make it one.',
    available: state => state.day >= 4 && getTrust(state, 'pablo') >= 18 && !hasSeen(state, 'pablo_dinner_signal'),
    text: () => `Late in the kitchen, Pablo plates leftovers with more care than leftovers usually receive. There are two plates.\n\n"I cooked too much," he says, which is plainly a lie and somehow also an invitation.`,
    choices: [
      {
        id: 'pablo_flirt_dinner',
        text: 'Ask whether this is dinner, or dinner with a little trouble in it.',
        meta: 'A clear romantic signal.',
        effects: { trust: { pablo: 5 }, romance: { pablo: 14 }, flags: { playerFlirtedWithPablo: true } },
        after: 'Pablo laughs, delighted and slightly embarrassed. "At my age, trouble requires a nap afterwards." He pulls out your chair.'
      },
      {
        id: 'pablo_friend_dinner',
        text: 'Accept the meal and ask about his grandchildren.',
        meta: 'Warm friendship, no romance signal.',
        effects: { trust: { pablo: 6 } },
        after: 'He tells you three stories and insists they are short. None are short. All are worth it.'
      },
      {
        id: 'pablo_pack_for_later',
        text: 'Ask if you can take it back to your apartment for later.',
        meta: 'Practical, but you step away from the moment.',
        effects: { trust: { pablo: 1 } },
        after: 'Pablo packs it beautifully. He has always known how to send love away in containers.'
      }
    ]
  },

  {
    id: 'pablo_after_crossroads',
    characterId: 'pablo',
    title: 'After the Feast',
    location: 'Community kitchen',
    summary: 'Pablo stands among clean plates and old ghosts.',
    available: state => state.day >= 7 && state.relationships.pablo.crossroadsOutcome && !hasSeen(state, 'pablo_after_crossroads'),
    text: state => state.relationships.pablo.crossroadsOutcome === 'success'
      ? `The kitchen smells of garlic, citrus, and victory. Pablo has started a list titled "Next Feast" even though he claims this was definitely a one-time thing.`
      : `The feast was lovely. Everyone said so. Pablo cooked beautifully. He simply did not cook the dish you know he had been thinking about.\n\nThe recipe card remains tucked under the fruit bowl.`,
    choices: [
      {
        id: 'pablo_success_next_feast',
        text: 'Ask what you should help with next time.',
        requirements: state => state.relationships.pablo.crossroadsOutcome === 'success',
        meta: 'You join the future he has allowed himself to imagine.',
        effects: { trust: { pablo: 8 }, romance: { pablo: 6 } },
        after: 'Pablo pretends to think for one second. He already has a list.'
      },
      {
        id: 'pablo_failure_gentle',
        text: 'Tell him the night was still beautiful, even if one recipe waited.',
        requirements: state => state.relationships.pablo.crossroadsOutcome === 'failure',
        meta: 'No pushing. No pity.',
        effects: { trust: { pablo: 5 }, romance: { pablo: 3 } },
        after: 'Pablo rests his hand on the recipe card. "Waited," he says. "Yes. I like that better than failed."'
      },
      {
        id: 'pablo_talk_weather',
        text: 'Ask whether the tomatoes survived the weather.',
        meta: 'Safe ground.',
        effects: { trust: { pablo: 2 } },
        after: 'Pablo gives you a full weather report, including accusations against clouds.'
      }
    ]
  },

  {
    id: 'miranda_library_labels',
    characterId: 'miranda',
    title: 'The Label Maker',
    location: 'Village library',
    summary: 'Miranda is reorganising the library and absolutely did not ask for help.',
    available: state => state.day >= 1 && !hasSeen(state, 'miranda_library_labels'),
    text: () => `Miranda stands in the village library with a label maker, three boxes, and the expression of someone discovering civilisation has failed.\n\n"Mysteries," she says, holding up a romance novel. "Apparently."`,
    choices: [
      {
        id: 'miranda_help_without_fuss',
        text: 'Start sorting quietly and ask where she wants the returns shelf.',
        meta: 'Useful, direct, no performance.',
        effects: { trust: { miranda: 8 }, flags: { mirandaPracticalHelp: true } },
        after: 'Miranda looks almost annoyed by how useful you are. "Second shelf. Spine out. No leaning." That is practically a sonnet.'
      },
      {
        id: 'miranda_make_joke',
        text: 'Make a joke about forbidden library passions.',
        meta: 'She is not in the mood. Yet.',
        effects: { trust: { miranda: 2 } },
        after: 'Miranda looks at you over her glasses. It is unclear whether you have been perceived or assessed for composting.'
      },
      {
        id: 'miranda_praise_generosity',
        text: 'Tell her it is kind of her to do this for everyone.',
        meta: 'Accurate, but she hates being thanked.',
        effects: { trust: { miranda: 1 } },
        after: '"It needed doing," she says. The compliment bounces off like rain from sensible shoes.'
      }
    ]
  },

  {
    id: 'miranda_garden_promise',
    characterId: 'miranda',
    title: 'A Small Promise',
    location: 'Garden plots',
    summary: 'Miranda needs help early tomorrow. She will not ask twice.',
    available: state => state.day >= 2 && getTrust(state, 'miranda') >= 6 && !hasSeen(state, 'miranda_garden_promise'),
    text: () => `Miranda kneels by a tray of seedlings, checking each one with brisk severity.\n\n"If these are not planted before the heat sets in, they will sulk," she says. "Plants are worse than people. At least people occasionally apologise."`,
    choices: [
      {
        id: 'miranda_promise_help',
        text: 'Promise to help first thing tomorrow.',
        meta: 'Reliability matters. This will be remembered.',
        effects: { trust: { miranda: 5 }, flags: { mirandaPromiseMade: true } },
        after: 'Miranda gives you the exact time, the exact gloves, and no visible sign of being pleased. Her shoulders do relax half an inch.'
      },
      {
        id: 'miranda_maybe_later',
        text: 'Say you might drop by if you are free.',
        meta: 'Miranda files this under “no”.',
        effects: { trust: { miranda: 1 } },
        after: '"Then I will make other arrangements," she says. She will not.'
      },
      {
        id: 'miranda_plants_joke',
        text: 'Ask if the seedlings have filed a formal complaint.',
        meta: 'A tiny crack in the armour.',
        effects: { trust: { miranda: 3 } },
        after: 'Miranda almost smiles. Almost. The almost is enormous.'
      }
    ]
  },

  {
    id: 'miranda_seedlings_dawn',
    characterId: 'miranda',
    title: 'Seedlings at Dawn',
    location: 'Garden plots',
    summary: 'A promise comes due earlier than dignity prefers.',
    available: state => state.day >= 3 && hasFlag(state, 'mirandaPromiseMade') && !hasSeen(state, 'miranda_seedlings_dawn'),
    text: () => `The garden is cool and silver in the early light. Miranda is already there, of course. She has two trowels ready and says nothing about whether she expected you to come.\n\nThe second trowel says it for her.`,
    choices: [
      {
        id: 'miranda_keep_promise',
        text: 'Show up, work steadily, and do not make a production of it.',
        meta: 'You keep your word exactly the way she understands love.',
        effects: { trust: { miranda: 10 }, flags: { mirandaKeptPromise: true } },
        after: 'After an hour, Miranda hands you tea from a thermos. "Milk, no sugar," she says. You never told her. She noticed.'
      },
      {
        id: 'miranda_arrive_late_charm',
        text: 'Arrive late but try to charm your way through it.',
        meta: 'A terrible fit.',
        effects: { trust: { miranda: -4 }, flags: { mirandaBrokePromise: true } },
        after: 'Miranda says, "Mm." The seedlings say nothing, but they seem disappointed too.'
      },
      {
        id: 'miranda_bring_pastries',
        text: 'Bring pastries as an apology for being a little late.',
        meta: 'Better than nothing. Not better than punctuality.',
        effects: { trust: { miranda: 2 } },
        after: 'She accepts the pastry and immediately uses the bag to collect weeds. Efficient, at least.'
      }
    ]
  },

  {
    id: 'miranda_tea_signal',
    characterId: 'miranda',
    title: 'Tea Without Fuss',
    location: 'Miranda’s patio',
    summary: 'Miranda invites you to tea by pretending not to.',
    available: state => state.day >= 4 && getTrust(state, 'miranda') >= 18 && !hasSeen(state, 'miranda_tea_signal'),
    text: () => `Miranda stands by her patio door.\n\n"I have made too much tea," she says. There is one extra cup set out. There are also exactly two biscuits on a plate. This woman has never accidentally made too much of anything in her life.`,
    choices: [
      {
        id: 'miranda_flirt_tea',
        text: 'Say you would be honoured to be her completely accidental tea companion.',
        meta: 'A gentle romantic signal, not too loud.',
        effects: { trust: { miranda: 5 }, romance: { miranda: 14 }, flags: { playerFlirtedWithMiranda: true } },
        after: 'Miranda sniffs. "Don’t get theatrical." But she pours your tea first.'
      },
      {
        id: 'miranda_friend_tea',
        text: 'Sit down and ask whether she wants help with the minutes from the garden committee.',
        meta: 'Friendship in her dialect.',
        effects: { trust: { miranda: 6 } },
        after: 'She slides you a pen. It is a very good pen. This is intimacy.'
      },
      {
        id: 'miranda_decline_tea',
        text: 'Thank her, but say you should keep moving.',
        meta: 'Polite distance.',
        effects: { trust: { miranda: 1 } },
        after: 'She nods. The second biscuit remains on the plate.'
      }
    ]
  },

  {
    id: 'miranda_after_crossroads',
    characterId: 'miranda',
    title: 'After the Garden Judging',
    location: 'Garden plots',
    summary: 'Miranda surveys what grew — and what changed.',
    available: state => state.day >= 7 && state.relationships.miranda.crossroadsOutcome && !hasSeen(state, 'miranda_after_crossroads'),
    text: state => state.relationships.miranda.crossroadsOutcome === 'success'
      ? `The garden is not perfect. It is better than perfect: everyone’s fingerprints are on it. Someone has placed a lopsided gnome by the rosemary and Miranda has not removed it. Yet.`
      : `The garden is immaculate. The paths are swept, the labels are straight, and Miranda looks like she could sleep for a week. No one else quite knows where anything is.` ,
    choices: [
      {
        id: 'miranda_success_gnome',
        text: 'Tell her the gnome shows character.',
        requirements: state => state.relationships.miranda.crossroadsOutcome === 'success',
        meta: 'You risk your life for whimsy.',
        effects: { trust: { miranda: 8 }, romance: { miranda: 6 } },
        after: 'Miranda looks at the gnome. "It is hideous." She does not move it.'
      },
      {
        id: 'miranda_failure_rest',
        text: 'Tell her it is beautiful, and ask if she will finally sit down.',
        requirements: state => state.relationships.miranda.crossroadsOutcome === 'failure',
        meta: 'You cannot undo it, but you can notice the cost.',
        effects: { trust: { miranda: 5 }, romance: { miranda: 3 } },
        after: 'She hesitates, then sits beside you on the low wall. For Miranda, this is a speech.'
      },
      {
        id: 'miranda_discuss_mulch',
        text: 'Ask whether the mulch supplier overcharged.',
        meta: 'Safe ground. Sensible ground.',
        effects: { trust: { miranda: 2 } },
        after: 'Miranda produces receipts. You have chosen an afternoon with consequences.'
      }
    ]
  }
];
