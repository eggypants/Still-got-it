import { ACTIVITIES, CHARACTERS, DAYS, MEMORIES, SCENES, TIME_SLOTS } from "./data.js";
import { getPronouns } from "./state.js";

export function getCurrentDate(state) {
  const day = DAYS[state.dayIndex];
  const slot = TIME_SLOTS[state.slotIndex];
  return { ...day, slot };
}

export function getCurrentKey(state) {
  return `${state.dayIndex}-${state.slotIndex}`;
}

export function getNoticeboardItems(state) {
  const scheduled = ACTIVITIES[getCurrentKey(state)] || [];
  const apartmentAlreadyListed = scheduled.some(item => item.location === "Your Apartment");
  const apartment = apartmentAlreadyListed
    ? []
    : [{
        id: `apartment-${getCurrentKey(state)}`,
        title: "Stay in your apartment",
        location: "Your Apartment",
        note: "The kettle works. The door can stay closed.",
        sceneId: ["apartment_morning", "apartment_afternoon", "apartment_evening"][state.slotIndex] || "apartment_evening"
      }];

  return [...scheduled, ...apartment];
}

export function getSceneForActivity(state, activityId) {
  const item = getNoticeboardItems(state).find(activity => activity.id === activityId);
  if (!item) return null;

  return resolveScene(state, item.sceneId);
}

export function resolveScene(state, sceneId) {
  if (sceneId === "rhonda_opening_night") {
    return buildOpeningNightScene(state);
  }

  const scene = SCENES[sceneId];
  if (!scene) return null;

  return filterSceneChoices(state, scene);
}

function filterSceneChoices(state, scene) {
  const choices = (scene.choices || []).filter(choice => {
    if (!choice.requiresMemory) return true;
    return state.memories.includes(choice.requiresMemory);
  });

  return { ...scene, choices };
}

function buildOpeningNightScene(state) {
  if (state.flags.rhonda_night_before_success) {
    return {
      title: "Autumn concert",
      location: "Hall",
      art: "Hall",
      content: [
        p("The hall is full."),
        p("Full, in this case, means twenty-five people, including three relatives visiting someone in the audience and one cleaner on her break."),
        p("The show begins."),
        p("Al sings half a song and flirts with the front row."),
        p("Pablo serves food at intermission and pretends not to enjoy the praise."),
        p("Bob reads his poem too quickly, then starts again. Slower this time. People listen."),
        p("Then Rhonda steps onto the stage."),
        p("There is a pause."),
        p("For half a second, you think she might retreat."),
        p("Then someone coughs."),
        p("Rhonda looks out at the audience."),
        line("RHONDA", "If that was a review, I’ll ask you to save it for the interval."),
        p("The room laughs."),
        p("Not politely. Properly."),
        p("Rhonda hears it."),
        p("Something in her settles."),
        p("She performs."),
        p("Not perfectly. Better than that."),
        p("Afterwards, people crowd around her."),
        line("AL", "You were marvellous."),
        line("PABLO", "Next time, dinner and show."),
        p("Rhonda looks at him."),
        line("RHONDA", "Next time?"),
        p("She glances at you."),
        p("Then she grins."),
        line("RHONDA", "Yes. Next time."),
        p("Later, when the hall is almost empty, you find her folding programmes."),
        line("PLAYER", "You were good."),
        p("Rhonda looks at you for a moment."),
        p("Then she smiles."),
        line("RHONDA", "Wasn’t I?")
      ],
      choices: [
        {
          text: "Stay and help stack chairs.",
          outcome: [
            p("You stack chairs until the hall is almost back to normal."),
            p("Rhonda keeps one programme and folds it carefully into her bag."),
            line("RHONDA", "For the archive."),
            p("She smiles."),
            line("RHONDA", "Or evidence. We’ll decide later.")
          ],
          effects: { friendship: { rhonda: 4 }, flags: { rhonda_show_success: true } }
        }
      ]
    };
  }

  if (state.flags.rhonda_recruitment_seen || state.flags.concert_started || state.flags.rhonda_rehearsal_seen || state.flags.rhonda_night_before_failed) {
    return {
      title: "Autumn concert",
      location: "Hall",
      art: "Hall",
      content: [
        p("The hall is full."),
        p("The programme says Rhonda will close the first half."),
        p("But when her turn comes, Jean steps onto the stage instead."),
        line("JEAN", "Rhonda’s asked me to read something on her behalf."),
        p("There is a polite shuffle through the room."),
        p("Jean reads well. Everyone claps."),
        p("Rhonda does not appear."),
        p("Later, you find her in the corridor outside the hall, dressed beautifully, holding her script."),
        line("PLAYER", "Rhonda."),
        p("She smiles before you can say anything."),
        line("RHONDA", "Don’t look tragic. That’s my job.")
      ],
      choices: [
        {
          text: "What happened?",
          outcome: [
            line("RHONDA", "Nothing dramatic. Very disappointing of me."),
            p("She folds the script."),
            line("RHONDA", "I simply discovered I’m done."),
            p("The next time you visit her apartment, the feather boa is gone."),
            p("So are the old programmes.")
          ],
          effects: { friendship: { rhonda: -1 }, flags: { rhonda_show_failed: true } }
        },
        {
          text: "There’s still time.",
          outcome: [
            p("Rhonda shakes her head."),
            line("RHONDA", "No, darling."),
            p("Softly:"),
            line("RHONDA", "There isn’t."),
            p("The next time you visit her apartment, the feather boa is gone."),
            p("So are the old programmes.")
          ],
          effects: { friendship: { rhonda: -1 }, flags: { rhonda_show_failed: true } }
        },
        {
          text: "I’m sorry.",
          outcome: [
            p("Rhonda looks toward the hall."),
            p("Someone inside laughs at Al."),
            line("RHONDA", "Don’t be. They’re having a lovely time."),
            p("A beat."),
            line("RHONDA", "That’s something, isn’t it?"),
            p("The next time you visit her apartment, the feather boa is gone."),
            p("So are the old programmes.")
          ],
          effects: { friendship: { rhonda: 0 }, flags: { rhonda_show_failed: true } }
        }
      ]
    };
  }

  return {
    title: "Autumn concert",
    location: "Hall",
    art: "Hall",
    content: [
      p("You find a seat near the back of the hall."),
      p("The programme is folded crookedly. Someone has corrected Al’s name in pen."),
      p("Al sings half a song and accepts applause as if it was overdue."),
      p("Pablo serves food at intermission and tells three people the napkins are not decorative."),
      p("Bob reads something short. He survives it."),
      p("Then Rhonda steps onto the stage."),
      p("She gets a laugh before the first page is turned."),
      p("By the end, everyone is clapping."),
      p("You clap too. It was a good night." )
    ],
    choices: [
      {
        text: "Clap with everyone else.",
        outcome: [p("Rhonda bows once, pleased with herself. Around you, people are already talking about next year.")],
        effects: { friendship: { rhonda: 1 }, flags: { attended_concert_uninvolved: true } }
      }
    ]
  };
}

export function startGame(state, player) {
  state.player.name = player.name?.trim() || "New Resident";
  state.player.pronouns = player.pronouns || "they/them";
  state.view = "noticeboard";
  state.activeTab = "noticeboard";
  return state;
}

export function openTab(state, tabName) {
  state.activeTab = tabName;
  state.view = "noticeboard";
  state.activeSceneId = null;
  state.pendingOutcome = null;
  return state;
}

export function beginActivity(state, activityId) {
  const item = getNoticeboardItems(state).find(activity => activity.id === activityId);
  if (!item) return state;

  state.activeSceneId = item.sceneId;
  state.view = "scene";
  state.activeTab = "noticeboard";
  return state;
}

export function chooseSceneOption(state, choiceIndex) {
  const scene = resolveScene(state, state.activeSceneId);
  if (!scene) return state;

  const choice = scene.choices[choiceIndex];
  if (!choice) return state;

  applyEffects(state, choice.effects || {});
  markSeen(state, state.activeSceneId);
  state.pendingOutcome = {
    title: scene.title,
    location: scene.location,
    art: scene.art,
    content: substituteLines(choice.outcome || [p("The time passes.")], state)
  };
  state.view = "outcome";
  return state;
}

export function continueAfterOutcome(state) {
  state.pendingOutcome = null;
  state.activeSceneId = null;
  advanceTime(state);
  if (state.dayIndex >= DAYS.length) {
    state.view = "ending";
    state.activeTab = "noticeboard";
  } else {
    state.view = "noticeboard";
    state.activeTab = "noticeboard";
  }
  return state;
}

export function advanceTime(state) {
  state.slotIndex += 1;
  if (state.slotIndex >= TIME_SLOTS.length) {
    state.slotIndex = 0;
    state.dayIndex += 1;
  }
}

export function applyEffects(state, effects) {
  if (effects.friendship) {
    for (const [id, amount] of Object.entries(effects.friendship)) {
      state.friendships[id] = Math.max(0, (state.friendships[id] || 0) + amount);
    }
  }

  if (effects.flags) {
    for (const [key, value] of Object.entries(effects.flags)) {
      state.flags[key] = value;
    }
  }

  if (effects.memories) {
    for (const memoryId of effects.memories) {
      if (!state.memories.includes(memoryId)) {
        state.memories.push(memoryId);
      }
    }
  }
}

export function markSeen(state, sceneId) {
  if (!sceneId) return;
  if (!state.seenScenes.includes(sceneId)) state.seenScenes.push(sceneId);
}

export function getMemoryText(memoryId) {
  return MEMORIES[memoryId] || memoryId;
}

export function getFriendshipLabel(score, id, state) {
  if (id === "rhonda" && state.flags.rhonda_show_success) return "Dear friend";
  if (score >= 8) return "Close";
  if (score >= 5) return "Warm";
  if (score >= 2) return "Friendly";
  if (score >= 1) return "Familiar";
  return "Stranger";
}

export function getResidentNote(id, state) {
  const score = state.friendships[id] || 0;
  const character = CHARACTERS[id];

  if (id === "rhonda") {
    if (state.flags.rhonda_show_success) return "She has started saying ‘next time’ as if next time is already real.";
    if (state.flags.rhonda_show_failed) return "She still makes people laugh, but the old programmes have disappeared.";
    if (score >= 5) return "She saves you a seat and pretends it is an accident.";
    if (score >= 2) return "She has decided not to take your ignorance to heart.";
  }

  if (id === "pablo" && state.flags.saw_pablo_miranda_corner_table) {
    return "He keeps finding reasons to make two cups of tea.";
  }

  if (id === "miranda" && state.flags.saw_pablo_miranda_corner_table) {
    return "She keeps accepting the second cup, under protest.";
  }

  if (score >= 5) return "You know where to find them, and sometimes they know where to find you.";
  if (score >= 2) return "You’ve shared a few ordinary moments.";
  if (score >= 1) return "They recognise you now.";
  return character.defaultNote;
}

export function buildEnding(state) {
  const entries = Object.entries(state.friendships).sort((a, b) => b[1] - a[1]);
  const closest = entries[0];
  const closestName = closest ? CHARACTERS[closest[0]].name : "nobody in particular";
  const closestLabel = closest ? getFriendshipLabel(closest[1], closest[0], state) : "Stranger";

  const lines = [];

  if (state.flags.rhonda_show_success) {
    lines.push("Rhonda performed at the Autumn Concert. Afterwards she started talking about next time with a grin that made people nervous in the best way.");
  } else if (state.flags.rhonda_show_failed) {
    lines.push("The concert went ahead, but Rhonda did not perform. People still laughed. The feather boa vanished from her room afterwards.");
  } else if (state.flags.attended_concert_uninvolved) {
    lines.push("You watched the Autumn Concert from the audience like everyone else. Rhonda was good. People said so all week.");
  } else if (state.flags.missed_concert) {
    lines.push("The Autumn Concert happened down the hall. You heard applause through the door, and later people told stories you had not seen for yourself.");
  } else {
    lines.push("The week ended quietly. The village kept moving, whether or not you moved with it.");
  }

  if (state.flags.saw_pablo_miranda_corner_table || (state.flags.saw_pablo_miranda_tea && state.flags.saw_pablo_miranda_seedlings)) {
    lines.push("Pablo and Miranda kept finding themselves at the same tables, in the same gardens, with the same excuses. Nobody called it anything. Yet.");
  } else if (state.flags.saw_pablo_miranda_tea || state.flags.saw_pablo_miranda_seedlings) {
    lines.push("You noticed Pablo and Miranda orbiting each other once or twice. Maybe something was there. Maybe you missed the rest.");
  } else {
    lines.push("Other stories happened in corners you did not visit. That is how places work.");
  }

  if (closest && closest[1] >= 5) {
    lines.push(`By the end of the week, ${closestName} had become your closest friend here. Not officially. There are no forms for that. But you knew.`);
  } else if (closest && closest[1] >= 2) {
    lines.push(`You were beginning to know ${closestName}. Not deeply yet, but enough to feel the shape of a friendship starting.`);
  } else {
    lines.push("You kept mostly to yourself. Nothing terrible happened. The kettle worked. The days passed.");
  }

  lines.push("Sunset Pines was not a place where life stopped. It was a place where life kept offering invitations. The only question was whether you opened the door.");

  return {
    closestName,
    closestLabel,
    lines
  };
}

export function substituteLines(lines, state) {
  const playerName = state.player.name || "New Resident";
  const pronouns = getPronouns(state.player.pronouns);

  return lines.map(item => {
    const copy = { ...item };
    copy.text = replaceTokens(copy.text, playerName, pronouns);
    return copy;
  });
}

export function substituteScene(scene, state) {
  return {
    ...scene,
    content: substituteLines(scene.content || [], state),
    choices: scene.choices || []
  };
}

function replaceTokens(text, playerName, pronouns) {
  return String(text)
    .replaceAll("{name}", playerName)
    .replaceAll("{they}", pronouns.subject)
    .replaceAll("{them}", pronouns.object)
    .replaceAll("{their}", pronouns.possessive)
    .replaceAll("{themself}", pronouns.reflexive)
    .replaceAll("{are}", pronouns.be)
    .replaceAll("{have}", pronouns.have);
}

function p(text) {
  return { text };
}

function line(speaker, text) {
  return { speaker, text };
}
