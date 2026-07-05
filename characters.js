export const characters = {
  rhonda: {
    id: 'rhonda',
    name: 'Rhonda',
    born: 1944,
    icon: 'R',
    tagline: 'Former theatre actress, glamorous menace, allergic to being ignored.',
    location: 'Lounge terrace',
    traits: ['glamorous', 'quick-witted', 'histrionic', 'dangerous with a scarf'],
    wants: 'To feel like the curtain has not already come down.',
    likes: ['specific compliments', 'old films', 'dramatic entrances'],
    route: {
      thresholds: { acquaintance: 8, friend: 28, closeFriend: 55, romance: 62 },
      crossroadsId: 'rhonda_musical'
    }
  },

  pablo: {
    id: 'pablo',
    name: 'Pablo',
    born: 1950,
    icon: 'P',
    tagline: 'Spanish immigrant, retired restaurateur, charismatic but never careless.',
    location: 'Community kitchen',
    traits: ['warm', 'loyal', 'proud', 'excellent knife skills'],
    wants: 'To enjoy life again without feeling like he is betraying the one he lost.',
    likes: ['curiosity', 'family stories', 'good olive oil'],
    route: {
      thresholds: { acquaintance: 8, friend: 28, closeFriend: 55, romance: 62 },
      crossroadsId: 'pablo_harvest_feast'
    }
  },

  miranda: {
    id: 'miranda',
    name: 'Miranda',
    born: 1943,
    icon: 'M',
    tagline: 'Practical, sharp, unsentimental — until you notice the quiet kindness.',
    location: 'Garden plots',
    traits: ['practical', 'loyal', 'blunt', 'secretly soft-centred'],
    wants: 'To trust that she does not have to carry everything alone.',
    likes: ['reliability', 'plain speech', 'not wasting perfectly good jars'],
    route: {
      thresholds: { acquaintance: 8, friend: 28, closeFriend: 55, romance: 62 },
      crossroadsId: 'miranda_garden_competition'
    }
  }
};
