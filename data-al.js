// Al — arc owner file. Belief: 'If I stop being charming, nobody will choose to spend time with me.'
// Crossroads: the dance weekend (week 3). TODO: full arc — see WRITING-KITS.md
export const AL_SCENES = {
  "generic_cards_al": {
    "title": "Cards",
    "location": "Community Lounge",
    "art": "Community Lounge",
    "content": [
      {
        "text": "Al deals cards with the confidence of a man who has been forgiven for worse things than bad shuffling. He loses one hand, wins two, and claims the scorekeeper is holding a grudge."
      }
    ],
    "choices": [
      {
        "text": "Stay for a while.",
        "outcome": [
          {
            "text": "The time passes more quickly than you expected."
          }
        ],
        "effects": {
          "friendship": {
            "al": 1
          }
        }
      }
    ]
  },
  "generic_lounge_al_news": {
    "title": "Lounge gossip",
    "location": "Community Lounge",
    "art": "Community Lounge",
    "content": [
      {
        "text": "Al has news about the concert, the café, and someone’s grandson. It is difficult to tell which parts are verified. It is also difficult not to listen."
      }
    ],
    "choices": [
      {
        "text": "Stay for a while.",
        "outcome": [
          {
            "text": "The time passes more quickly than you expected."
          }
        ],
        "effects": {
          "friendship": {
            "al": 1
          }
        }
      }
    ]
  }
};
