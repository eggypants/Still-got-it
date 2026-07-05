const hasFlag = (state, flag) => Boolean(state.flags[flag]);
const getTrust = (state, id) => state.relationships[id]?.trust ?? 0;

export const crossroadsEvents = {
  rhonda_musical: {
    id: 'rhonda_musical',
    characterId: 'rhonda',
    title: 'The Community Musical',
    subtitle: 'Rhonda discovers the annual variety night and immediately mistakes it for Broadway.',
    intro: () => `By day six, Rhonda has transformed the annual variety night into a musical revue with blocking, costumes, and one deeply frightened tambourine.\n\nThen, an hour before rehearsal, you find her alone in the activity room. Her costume hangs untouched.\n\n"I have reconsidered," she says. "There is dignity in knowing when to exit."\n\nFor once, she looks less like a diva and more like someone afraid the spotlight will prove she has disappeared.`,
    choices: [
      {
        id: 'rhonda_laughter_reminder',
        text: 'Remind her she once said making people laugh was the part she loved most.',
        meta: 'Succeeds if you learned about the tiny comedy role.',
        resolve: state => {
          const success = hasFlag(state, 'rhondaMentionedTinyComedyRole') || hasFlag(state, 'rhondaUnderstandsNotFame');
          return success
            ? {
                outcome: 'success', trustDelta: 22, romanceDelta: 4, maxTrust: 100,
                flags: { rhondaPerforms: true },
                text: 'Rhonda goes very still. Then she laughs once, not dramatically, not for anyone else. “Yes,” she says. “That was the good bit.” She performs that night and brings the room down. The next morning, there is already a sign-up sheet for next year.'
              }
            : {
                outcome: 'failure', trustDelta: -3, romanceDelta: 0, maxTrust: 80,
                flags: { rhondaPackedCostumes: true },
                text: 'It is a beautiful thing to say, but you are guessing. Rhonda hears the kindness and misses the anchor. She withdraws from the show with perfect manners. Later, her costume rack is gone.'
              };
        }
      },
      {
        id: 'rhonda_standing_ovation',
        text: 'Tell her she deserves a standing ovation after all these years.',
        meta: 'Kind, but it makes the night about proof and applause.',
        resolve: () => ({
          outcome: 'failure', trustDelta: -2, romanceDelta: 0, maxTrust: 80,
          flags: { rhondaPackedCostumes: true },
          text: 'Rhonda smiles like she is posing for a publicity still. “How generous.” She does not go onstage. She still enjoys your company afterwards, but some door has closed softly.'
        })
      },
      {
        id: 'rhonda_smaller_role',
        text: 'Suggest she take a smaller role tonight and let that be enough.',
        meta: 'A practical middle path. Better if you helped with the costume earlier.',
        resolve: state => {
          const success = hasFlag(state, 'rhondaCostumeHelp') && getTrust(state, 'rhonda') >= 22;
          return success
            ? {
                outcome: 'success', trustDelta: 16, romanceDelta: 3, maxTrust: 100,
                flags: { rhondaPerforms: true },
                text: 'Rhonda looks at the costume you helped rescue. “A smaller role,” she says, tasting the phrase like medicine. That night, she takes the stage for one song and steals the entire show.'
              }
            : {
                outcome: 'failure', trustDelta: -1, romanceDelta: 0, maxTrust: 85,
                flags: { rhondaPackedCostumes: true },
                text: 'The suggestion is sensible, but Rhonda hears “be smaller” and folds herself away. She helps from backstage. No one else notices what it cost her.'
              };
        }
      }
    ]
  },

  pablo_harvest_feast: {
    id: 'pablo_harvest_feast',
    characterId: 'pablo',
    title: 'The Harvest Feast',
    subtitle: 'Pablo wants everyone to bring a family recipe. One recipe matters more than the others.',
    intro: () => `Pablo’s harvest feast has taken over the community kitchen. There are lemons, tomatoes, onions, arguments about parsley, and a folding table that has seen too much.\n\nBut one dish is missing. His wife’s dish. The one on the old recipe card.\n\nHe stands with the card in his hand and says, “Maybe another time.”`,
    choices: [
      {
        id: 'pablo_love_big_table',
        text: 'Tell him cooking it can be a hello, not a goodbye.',
        meta: 'Succeeds if you understood the recipe was about honouring love, not replacing it.',
        resolve: state => {
          const success = hasFlag(state, 'pabloUnderstandsHonouringWife') || (hasFlag(state, 'pabloTalkedAboutWifeRecipe') && hasFlag(state, 'pabloCuriosityAboutFood'));
          return success
            ? {
                outcome: 'success', trustDelta: 22, romanceDelta: 4, maxTrust: 100,
                flags: { pabloCookedWifeDish: true },
                text: 'Pablo presses the recipe card to his chest for one second, then starts chopping. The dish is imperfect. He says his wife would have complained about the salt. Then he laughs so hard he has to sit down.'
              }
            : {
                outcome: 'failure', trustDelta: -2, romanceDelta: 0, maxTrust: 82,
                flags: { pabloRecipeWaited: true },
                text: 'He hears you trying to help, but the words arrive without enough history behind them. The feast is wonderful. The recipe card goes back under the fruit bowl.'
              };
        }
      },
      {
        id: 'pablo_move_on_push',
        text: 'Tell him he deserves to move on and leave the past behind.',
        meta: 'Too clean. Grief is messier than that.',
        resolve: () => ({
          outcome: 'failure', trustDelta: -4, romanceDelta: 0, maxTrust: 80,
          flags: { pabloRecipeWaited: true },
          text: 'Pablo nods politely. The feast continues. Later, you notice he has cooked everything except the one dish that would have mattered most.'
        })
      },
      {
        id: 'pablo_cook_alongside',
        text: 'Ask if you can stand beside him while he decides.',
        meta: 'A quiet answer. Succeeds with enough trust.',
        resolve: state => {
          const success = getTrust(state, 'pablo') >= 25 && hasFlag(state, 'pabloTalkedAboutWifeRecipe');
          return success
            ? {
                outcome: 'success', trustDelta: 16, romanceDelta: 3, maxTrust: 100,
                flags: { pabloCookedWifeDish: true },
                text: 'You stand beside him. You do not hurry him. Eventually he nods and says, “Pass me the garlic.” The whole room changes when the smell hits the pan.'
              }
            : {
                outcome: 'failure', trustDelta: 0, romanceDelta: 0, maxTrust: 86,
                flags: { pabloRecipeWaited: true },
                text: 'He appreciates the offer. He still folds the card away. Some doors open only when they are ready.'
              };
        }
      }
    ]
  },

  miranda_garden_competition: {
    id: 'miranda_garden_competition',
    characterId: 'miranda',
    title: 'The Garden Competition',
    subtitle: 'Miranda prepares for battle against the neighbouring retirement village.',
    intro: () => `The neighbouring village has challenged yours to a garden competition. Miranda has responded with a clipboard, a watering roster, and the thousand-yard stare of a general.\n\nBy afternoon she is doing everything herself. Beds weeded, labels straightened, mulch measured.\n\nEveryone wants to help. Miranda does not know how to let them.`,
    choices: [
      {
        id: 'miranda_delegate_clearly',
        text: 'Help her delegate clear jobs, then stay and do your own without fuss.',
        meta: 'Succeeds if you have shown her reliability matters more than speeches.',
        resolve: state => {
          const success = hasFlag(state, 'mirandaKeptPromise') || (hasFlag(state, 'mirandaPracticalHelp') && getTrust(state, 'miranda') >= 24);
          return success
            ? {
                outcome: 'success', trustDelta: 22, romanceDelta: 4, maxTrust: 100,
                flags: { mirandaDelegatedGarden: true },
                text: 'Miranda resists for eleven full seconds. Then she hands out jobs so specific they sound like court orders. The garden becomes everyone’s. She pretends not to be moved when someone adds a hideous gnome.'
              }
            : {
                outcome: 'failure', trustDelta: -2, romanceDelta: 0, maxTrust: 82,
                flags: { mirandaDidItAlone: true },
                text: 'It is the right idea, but she does not yet trust you enough to believe it. The garden looks immaculate. Miranda looks hollowed out.'
              };
        }
      },
      {
        id: 'miranda_big_teamwork_speech',
        text: 'Give a moving speech about teamwork and community spirit.',
        meta: 'A beautiful speech. Wrong language.',
        resolve: () => ({
          outcome: 'failure', trustDelta: -3, romanceDelta: 0, maxTrust: 80,
          flags: { mirandaDidItAlone: true },
          text: 'Miranda listens with the haunted patience of a woman losing planting time. Then she goes back to doing everything herself.'
        })
      },
      {
        id: 'miranda_take_one_job',
        text: 'Take one job off her hands and do it exactly right.',
        meta: 'Not a full breakthrough, but a respectful offer.',
        resolve: state => {
          const success = hasFlag(state, 'mirandaPracticalHelp') && getTrust(state, 'miranda') >= 20;
          return success
            ? {
                outcome: 'success', trustDelta: 15, romanceDelta: 3, maxTrust: 100,
                flags: { mirandaDelegatedGarden: true },
                text: 'You do one job properly. Then another resident does the same. Miranda notices the pattern before she notices the relief. By evening, she has stopped holding the clipboard like a shield.'
              }
            : {
                outcome: 'failure', trustDelta: 1, romanceDelta: 0, maxTrust: 86,
                flags: { mirandaDidItAlone: true },
                text: 'She lets you help with one job. Only one. It is not nothing, but it is not enough to change the day.'
              };
        }
      }
    ]
  },

  village_mishap: {
    id: 'village_mishap',
    characterId: null,
    title: 'The Noticeboard Incident',
    subtitle: 'You spread yourself thin, so the month belongs to the village rather than one close bond.',
    intro: () => `By day six, you know everyone a little and no one deeply. This is pleasant, but it means no one quite thinks to ask you into the centre of their crisis.\n\nInstead, the village noticeboard becomes the crisis. Someone has rearranged every announcement into an accidental ransom note.\n\nNobody is harmed. Several people are offended by the font choices.`,
    choices: [
      {
        id: 'generic_help_fix_board',
        text: 'Help restore order to the noticeboard.',
        meta: 'A modest community contribution.',
        resolve: () => ({
          outcome: 'neutral', trustDelta: 0, romanceDelta: 0, maxTrust: null,
          flags: { fixedNoticeboard: true },
          text: 'You spend the afternoon re-pinning yoga times, bus trip details, and a very aggressive lemon theft warning. Everyone appreciates you, in a vague but genuine way.'
        })
      }
    ]
  }
};
