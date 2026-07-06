// Jean — arc owner file. Belief: 'The next cause matters more than my own happiness.'
// Crossroads: save the fig tree (week 3). TODO: full arc — see WRITING-KITS.md
export const JEAN_SCENES = {
  "generic_library_jean": {
    "title": "Library hour",
    "location": "Library",
    "art": "Library",
    "content": [
      {
        "text": "Jean is in the library with a stack of books and a pencil tucked behind one ear. She says she only came to return a novel. This was clearly several conversations ago."
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
            "jean": 1
          }
        }
      }
    ]
  },
  "generic_choir_jean": {
    "title": "Choir rehearsal",
    "location": "Hall",
    "art": "Hall",
    "content": [
      {
        "text": "Jean says the song needs more conviction. The choir says it needs fewer verses. Everyone is partly right."
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
            "jean": 1
          }
        }
      }
    ]
  }
};
