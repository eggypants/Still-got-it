import { characters } from './characters.js';

export function determineEnding(state) {
  const romance = findRomanceEnding(state);
  const bestFriend = findBestFriend(state, romance?.id);
  const legacy = determineLegacy(state);

  return {
    romance,
    bestFriend,
    legacy,
    closingLine: buildClosingLine(state, romance, bestFriend, legacy)
  };
}

function findRomanceEnding(state) {
  const candidates = Object.entries(state.relationships)
    .map(([id, rel]) => ({ id, ...rel }))
    .filter(rel => rel.playerFlirted && rel.romance >= 18 && rel.trust >= 45)
    .sort((a, b) => (b.romance - a.romance) || (b.trust - a.trust));

  const chosen = candidates[0];
  if (!chosen) {
    return {
      id: null,
      title: 'Single, booked, and unbothered',
      text: 'You do not leave the month with a romance. That is not failure. You arrived, joined in, learned the coffee machine’s moods, and became part of the place at your own speed.'
    };
  }

  const character = characters[chosen.id];
  const outcome = chosen.crossroadsOutcome;
  const maxed = chosen.trust >= 70 && outcome === 'success';

  if (maxed) {
    return {
      id: chosen.id,
      title: `${character.name}: Still got it`,
      text: romanceSuccessText(chosen.id)
    };
  }

  if (outcome === 'failure') {
    return {
      id: chosen.id,
      title: `${character.name}: A real thing, imperfectly timed`,
      text: romanceFailureText(chosen.id)
    };
  }

  return {
    id: chosen.id,
    title: `${character.name}: Something beginning`,
    text: `You and ${character.name} choose each other carefully. It is not fireworks. It is better: two chairs angled toward the same view, and the sense that tomorrow has become more interesting.`
  };
}

function findBestFriend(state, romanceId) {
  const candidates = Object.entries(state.relationships)
    .map(([id, rel]) => ({ id, ...rel }))
    .filter(rel => rel.id !== romanceId && rel.trust >= 42)
    .sort((a, b) => b.trust - a.trust);

  const chosen = candidates[0];
  if (!chosen) {
    return {
      id: null,
      title: 'Many pleasant almosts',
      text: 'You have friendly faces around the village, but no one person becomes your close confidant this month. You spread yourself around. The village likes you, vaguely but sincerely.'
    };
  }

  return {
    id: chosen.id,
    title: `${characters[chosen.id].name}: Your closest friend`,
    text: friendshipText(chosen.id, chosen.crossroadsOutcome)
  };
}

function determineLegacy(state) {
  if (state.flags.rhondaPerforms) {
    return {
      title: 'Legacy: Assistant menace of the arts',
      text: 'By the festival, everyone knows you as the person who helped revive the village show. This comes with power, responsibility, and access to Rhonda’s terrifying costume notes.'
    };
  }

  if (state.flags.pabloCookedWifeDish) {
    return {
      title: 'Legacy: Keeper of the good olive oil',
      text: 'You helped turn one dinner into a village memory. People now ask your opinion about tomatoes with unreasonable seriousness.'
    };
  }

  if (state.flags.mirandaDelegatedGarden) {
    return {
      title: 'Legacy: Defender of the hideous gnome',
      text: 'You helped the garden become a shared project. The gnome remains. Miranda claims this is temporary. Nobody believes her.'
    };
  }

  if (state.flags.fixedNoticeboard) {
    return {
      title: 'Legacy: Noticeboard restoration specialist',
      text: 'You may not have changed a life dramatically, but you did restore the bus timetable, the yoga roster, and three separate lemon-related threats.'
    };
  }

  return {
    title: 'Legacy: The pleasant enigma',
    text: 'You are known as kind, interesting, and slightly hard to pin down. In a retirement village, this is enough to generate a full committee discussion.'
  };
}

function romanceSuccessText(id) {
  const lines = {
    rhonda: 'Rhonda does not become less dramatic. She becomes more honest about why the drama matters. She saves you a front-row seat, then complains about your posture from the stage. You are, somehow, deeply loved.',
    pablo: 'Pablo cooks for you without making every meal prove anything. Some nights he talks about his wife. Some nights he talks about tomorrow. You learn there is room at the table for both.',
    miranda: 'Miranda never becomes effusive. Instead, she puts your preferred tea beside her own, complains when you are late by four minutes, and lets the hideous gnome stay because you laughed at it. This is practically a sonnet.'
  };
  return lines[id];
}

function romanceFailureText(id) {
  const lines = {
    rhonda: 'You and Rhonda still find each other. She still sparkles. But the costumes stay packed away, and sometimes you feel the shape of the performance she might have reclaimed.',
    pablo: 'You and Pablo build something tender, but one recipe remains untouched. He is not closed to joy. He is simply slower with it than you hoped.',
    miranda: 'You and Miranda become close, but she still reaches for the whole burden before she reaches for your hand. Love is there. Trust is still learning its route.'
  };
  return lines[id];
}

function friendshipText(id, outcome) {
  if (id === 'rhonda') {
    return outcome === 'success'
      ? 'Rhonda makes you read lines with her and insults your projection until you improve. This is friendship, apparently.'
      : 'Rhonda keeps you close enough for gossip and far enough from the old costumes. She trusts you with company, if not the whole ache.';
  }
  if (id === 'pablo') {
    return outcome === 'success'
      ? 'Pablo teaches you three sauces and one family argument. You become the person he waves over when the good bread arrives.'
      : 'Pablo packs leftovers for you with care. He does not say everything. He does not need to.';
  }
  return outcome === 'success'
    ? 'Miranda lets you help without redoing it afterwards. This is not merely friendship. This is accreditation.'
    : 'Miranda trusts you enough to sit in silence with you. It is a small thing, except it is not small at all.';
}

function buildClosingLine(state, romance, bestFriend, legacy) {
  const name = state.player.name;
  return `${name}'s first month at Sunset Pines ends with the festival lights coming on, someone stealing the last decent biscuit, and the strange comfort of realising life has not finished surprising anyone.`;
}
