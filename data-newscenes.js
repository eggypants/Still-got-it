// Repeatable evening/morning texture scenes written by the author.
// pickVariant: "random" chooses among eligible variants deterministically per slot.
// Merged into GENERIC_SCENES via data-index.js.

export const NEW_SCENES = {
  // ---------------- CAFÉ SUPPER (evening, repeatable) ----------------
  generic_cafe_supper: {
    title: "Café supper",
    location: "Village Café",
    art: "Village Café",
    pickVariant: "random",
    content: [
      { text: "You enter the cafe. The west-facing windows capture the last of the afternoon sun." },
      { speaker: "PABLO", text: "Ah, welcome back! Tea and cake?" },
      { text: "You nod, and he brings it to you." }
    ],
    choices: [
      {
        text: "Ask Pablo to join you.",
        outcome: [
          { text: "The cafe is quiet, so Pablo has time to sit with you and chat. He tells you about the cake, which is from a recipe he came upon years ago, and has never done him wrong. The conversation drifts around a little. Eventually, you thank him and head out." }
        ],
        effects: { friendship: { pablo: 2 } }
      },
      {
        text: "Have tea and cake by yourself.",
        outcome: [
          { text: "You sip your tea and eat your cake. It's not too sweet and perfectly moist." },
          { text: "Pablo comes over to check on you." },
          { speaker: "PABLO", text: "How was it?" },
          { text: "You tell him it was delicious. He's pleased." }
        ],
        effects: { friendship: { pablo: 1 } }
      }
    ],
    variants: [
      {
        // V2 — very close to Pablo, once only
        when: { minFriendship: { pablo: 6 } },
        once: true,
        content: [
          { text: "You enter the cafe. Pablo greets you with a warm smile." },
          { speaker: "PABLO", text: "Ah, my favourite customer! I have something special for you today." },
          { text: "He disappears for a moment and returns with your usual tea, and a cake you haven't seen before." },
          { speaker: "PABLO", text: "Pastel Vasco. Enjoy!" },
          { text: "He sets down a dense, buttery-looking pastry full of vanilla cream. It's rich, but delicious." }
        ],
        terminalEffects: { friendship: { pablo: 1 } }
      },
      {
        // V3 — very close to Miranda
        when: { minFriendship: { miranda: 6 } },
        content: [
          { text: "The cafe smells positively verdant. You look around for the source, and see Miranda is at the doorway to the kitchen, holding several bundles of fresh herbs." },
          { speaker: "MIRANDA", text: "Hello. Just bringing some bits and pieces from the garden." },
          { text: "You identify basil, sage, thyme, coriander and rosemary." },
          { text: "Pablo pokes his head out and greets you, and says he'll be with you in a moment. Then he turns to Miranda." },
          { speaker: "PABLO", text: "Thank you, my dear. These all smell beautiful." }
        ],
        choices: [
          {
            text: "Ask Miranda to join you for tea",
            outcome: [
              { text: "Miranda sits down with you. In a moment, Pablo returns with three teacups and a teapot on a tray. The three of you sit and chat for a while as the last of the sun fades." }
            ],
            effects: { friendship: { miranda: 2, pablo: 1 } }
          },
          {
            text: "Have a seat.",
            outcome: [
              { text: "You sit down. Miranda says goodbye to you and leaves, looking slightly embarrassed at the warm reception her herbs received." },
              { text: "Without being asked, Pablo brings out your tea and cake." },
              { text: "You sit and relax for a while as the last of the sun fades." }
            ],
            effects: { friendship: { miranda: 1, pablo: 1 } }
          }
        ]
      },
      {
        // V4 — very close to Jean, once only
        when: { minFriendship: { jean: 6 } },
        once: true,
        content: [
          { text: "The moment you walk into the cafe, Jean calls out your name." },
          { speaker: "JEAN", text: "Come and join us!" },
          { text: "She's sitting with Rae, her pink-haired daughter. You join them at the table. Jean introduces you both, and pours you a cup of tea." }
        ],
        choices: [
          {
            text: "\"Rae, I've heard so much about you.\"",
            outcome: [
              { text: "Jean laughs as Rae rolls her eyes, and looks at her mother." },
              { speaker: "RAE", text: "Don't you have anything better to talk about?" },
              { speaker: "JEAN", text: "Oh please." },
              { text: "Rae is in her early fifties, and has her mother's grin, but the eyes aren't Jean's." },
              { text: "You chat with them, and learn that Rae lives with a partner and their two dogs, that she still goes to punk concerts, and that she's as formidable as her mother, only with an even more wry sense of humour." }
            ],
            effects: { friendship: { jean: 1 } }
          },
          {
            text: "Ask what they were talking about.",
            outcome: [
              { text: "Jean giggles and Rae rolls her eyes." },
              { speaker: "RAE", text: "My mother was just telling me that she's a coward." },
              { speaker: "JEAN", text: "Rae!" },
              { speaker: "RAE", text: "You are, mum! It's been so many years since dad and you can't ask a man on a date?" },
              { speaker: "JEAN", text: "RAE!" },
              { text: "Jean mock-slaps the back of Rae's hand." },
              { speaker: "JEAN", text: "Naughty girl." },
              { text: "You look between them, curious, but they don't elaborate. Instead, Jean tells you about Rae - her partner, their dogs, her job. Rae shows you photos of the dogs." },
              { text: "Rae is in her early fifties, and has her mother's grin, but the eyes aren't Jean's." },
              { text: "By the end of your chat you notice that Rae also has her mother's sense of humour." }
            ],
            effects: { friendship: { jean: 1 } }
          }
        ]
      }
    ]
  },

  // ---------------- TV ROOM (evening, repeatable, random) ----------------
  generic_tv_room: {
    title: "Television room",
    location: "TV Room",
    art: "TV Room",
    pickVariant: "random",
    content: [
      { text: "Al and Bob are watching a football game." },
      { text: "Actually, Al is watching. Bob is nodding off." },
      { text: "Periodically, Al cheers at a goal and wakes Bob up. Bob looks at the screen for a moment before his eyes drift closed again." }
    ],
    terminalEffects: {},
    variants: [
      {
        when: {},
        content: [
          { text: "The quiz show is on. A nervous contestant is answering questions about their chosen topic: Australian history." },
          { text: "Al and Jean lean forward in their chairs, ready to beat the contestant to their answers. Rhonda sits further away, pretending not to be interested. Bob is half watching, half falling asleep." },
          { speaker: "TV HOST", text: "Who was Australia's shortest-serving Prime Minister?" },
          { speaker: "CONTESTANT", text: "Uhh..." },
          { speaker: "AL", text: "Oh, what's his name-" },
          { speaker: "JEAN", text: "Yes, when Curtin died. Ah, it's on the tip of my tongue!" },
          { speaker: "AL", text: "Fadden... no..." },
          { speaker: "CONTESTANT", text: "Um... Chris Watson?" },
          { text: "Both the TV host and the viewers in the room with you wince." },
          { speaker: "TV HOST", text: "I'm sorry, that's incorrect. The right answer was Frank Forde, who served as Prime Minister for eight days after the death of John Curtin." },
          { text: "Al and Jean celebrate their almost-correctness, as though they hadn't forgotten the man's name. Bob lets out a mighty snore and wakes himself up." }
        ],
        terminalEffects: {}
      },
      {
        when: {},
        content: [
          { text: "Al, Bob and Rhonda are watching an old film." },
          { speaker: "RHONDA", text: "This scene is brilliant, watch-" },
          { text: "A glamorous young woman enters her apartment, slams the door, throws her purse and hat on the floor, and leaps onto her bed sobbing. Rhonda looks enthralled by her performance." },
          { speaker: "RHONDA", text: "You just believe her, don't you?" },
          { text: "She turns to the two men, and sees Bob's head lolling back, mouth open, and Al's eyes half-shut. She claps loudly twice to wake them. They startle." },
          { speaker: "RHONDA", text: "Pay attention, chaps! You'll miss the whole plot." },
          { speaker: "AL", text: "Hm? Sorry." },
          { speaker: "BOB", text: "Just resting my eyes." },
          { text: "A few minutes later, the two old blokes drift off again. Rhonda rolls her eyes but doesn't wake them. The two of you watch the rest of the film. At the end, she turns to you." },
          { speaker: "RHONDA", text: "Well, at least we two can appreciate fine cinema." }
        ],
        terminalEffects: { friendship: { rhonda: 1 } }
      }
    ]
  },

  // ---------------- LOUNGE EVENING (evening, repeatable, random) ----------------
  generic_lounge_social: {
    title: "The lounge",
    location: "Community Lounge",
    art: "Community Lounge",
    pickVariant: "random",
    content: [
      { text: "You enter the lounge. The card table isn't set up. There's music playing - you recognise it as Pink Floyd. Dark side of the moon. Al and Jean sit silently on the couch, appreciating the music with their eyes closed." }
    ],
    choices: [
      {
        text: "Ask what happened to playing cards with Bob",
        outcome: [
          { text: "Al opens his eyes and looks up at you." },
          { speaker: "AL", text: "Ah, the old man wasn't up for it tonight. We found something better to do. Oh, yeah, now this is a riff!" },
          { text: "Al plays along on his air guitar." },
          { text: "You decide to leave them to it." }
        ],
        effects: {}
      },
      {
        text: "Back away slowly",
        outcome: [
          { text: "You know better than to interrupt two people who made the most of the early seventies when they're listening to Pink Floyd." },
          { text: "You slip out before you have to endure a seminar on how great the bands were back then, and how nobody since has ever rivalled the acid-fuelled creativity of Syd Barrett." }
        ],
        effects: {}
      },
      {
        text: "Join them",
        outcome: [
          { text: "You sit down on the couch. Al and Jean nod at you. You all listen to the album, appreciating the music in silence." },
          { text: "Youthful memories dance before your eyes here and there, interspersed with thoughts of your life since then." }
        ],
        effects: { friendship: { al: 1, jean: 1 } }
      }
    ],
    variants: [
      {
        when: {},
        content: [
          { text: "Al, Bob and Rhonda are at the card table. Rhonda is wearing heavy gold earrings and a fur stole, as though she's at a high-rolling club." },
          { speaker: "RHONDA", text: "Read 'em and weep, boys." },
          { text: "She lays a mediocre hand out on the table. Al gasps. Bob shakes his head in disbelief." },
          { speaker: "AL", text: "The actress was bluffing!" },
          { text: "Rhonda bats her eyelids." },
          { speaker: "RHONDA", text: "Never underestimate a leading lady." },
          { text: "You join them and play a few hands." }
        ],
        terminalEffects: {}
      },
      {
        when: {},
        content: [
          { text: "You play card games with Al and Bob for a while. The three of you chat about all the topics - sport, family, war, gossip. Al says a lot, you say a bit, and Bob says little." }
        ],
        terminalEffects: {}
      }
    ]
  },

  // ---------------- RECEPTION / CARL (evening, late game, once) ----------------
  generic_reception_carl: {
    title: "A light at Reception",
    location: "Foyer",
    art: "Reception",
    content: [
      { text: "There is a part-time nurse, Morgan, and an administrator, Carl, who work at the village. They spend most of their working days chatting - the residents don't need much support, and those who do like to chat while they receive it. Normally Morgan goes home at four, and Carl is gone by five. Tonight, however, you see a light on at the Reception desk, and Carl is doing paperwork." }
    ],
    choices: [
      {
        text: "See what's going on.",
        outcome: [
          { text: "You poke your head in and knock on the wall. Carl spots you. You ask why he's here so late." },
          { speaker: "CARL", text: "I'm trying to figure out whether our insurance policy covers us for all the activities we have going on here." },
          // homebody branch (8+)
          { when: { minCounter: { spent_time_alone: 8 } }, text: "You ask what he means." },
          { when: { minCounter: { spent_time_alone: 8 } }, speaker: "CARL", text: "Most of the residents here are very active. Someone wants to start a new club every week." },
          { when: { minCounter: { spent_time_alone: 8 } }, text: "He eyes you." },
          { when: { minCounter: { spent_time_alone: 8 } }, speaker: "CARL", text: "You should join in sometimes. I've noticed that the people who join in seem to stay longer." },
          { when: { minCounter: { spent_time_alone: 8 } }, text: "You must give him an odd look, because he clarifies." },
          { when: { minCounter: { spent_time_alone: 8 } }, speaker: "CARL", text: "It keeps them younger. They don't need to move somewhere... higher needs." },
          { when: { minCounter: { spent_time_alone: 8 } }, text: "You try to keep your reaction off your face. You wish Carl good luck with the insurance forms." },
          // active branch (<8)
          { when: { maxCounter: { spent_time_alone: 7 } }, text: "You know what he means." },
          { when: { maxCounter: { spent_time_alone: 7 } }, speaker: "CARL", text: "It's good, you know. I've noticed over the years that the ones who get involved do a lot better. Health wise." },
          { when: { maxCounter: { spent_time_alone: 7 } }, text: "You nod in agreement, thinking about all the things you've been up to, and then imagining how much you'd have missed if you'd spent all your time in your apartment. Or back at your house." },
          // shared close
          { text: "Carl bids you good evening, and you leave him to it." }
        ],
        effects: {}
      },
      {
        text: "Leave Carl alone.",
        outcome: [
          { text: "You decide not to worry about it. You go back to your apartment and put your feet up." }
        ],
        effects: {}
      }
    ]
  }
};
