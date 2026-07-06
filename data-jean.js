// Jean — arc owner file. Belief: 'If I keep editing everyone else, nobody can judge my own voice.'
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
  "generic_writing_jean": {
    "title": "Writing circle",
    "location": "Library",
    "art": "Library",
    "content": [
      {
        "text": "Jean is at the side table with a notebook open and three pens laid out like surgical tools. She says it is only a draft, which apparently means no one is allowed to breathe near it."
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
