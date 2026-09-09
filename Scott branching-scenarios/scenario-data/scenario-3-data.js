/* Chapter 3 -- Emotional Intelligence and Leadership */
window.SCENARIO_DATA = [
  {
    kicker: "AN UNEXPECTED INTERRUPTION",
    vignette: "You are the new general manager of Blue Sky Golf and Tennis Club. While working on the projected budget, an obviously angry woman you have never met appears at your office door.",
    vitals: ["Role: General manager", "Organization: Blue Sky Golf and Tennis Club", "Challenge: An angry member"],
    prompt: "How do you respond?",
    choices: [
      {
        text: "Ask calmly whether she has an appointment",
        sub: "Stand up, acknowledge that she appears angry, and ask about her appointment.",
        tier: "caution",
        feedback: "This remains controlled, but it focuses on access to your schedule before demonstrating genuine interest in her concern."
      },
      {
        text: "Ask from your desk whether you can help",
        sub: "Remain seated and invite her to state the problem.",
        tier: "caution",
        feedback: "The words are courteous, but remaining seated may communicate limited engagement when the member is already upset."
      },
      {
        text: "Greet her and offer a few minutes now",
        sub: "Invite her to sit and offer to schedule more time if the issue requires it.",
        tier: "good",
        feedback: "This response combines composure, empathy, and practical time management. It begins de-escalating the encounter without abandoning your other responsibilities."
      }
    ]
  },
  {
    kicker: "THE MEMBER'S COMPLAINT",
    vignette: "The woman enters, slams the door, and says she has been a member for 20 years and has always played at 8:00 a.m. on Friday. She angrily insults the front-desk employee who scheduled someone else at that time.",
    vitals: ["Member tenure: 20 years", "Issue: Friday tee time", "Emotional state: Angry"],
    prompt: "What do you do?",
    choices: [
      {
        text: "Tell her sternly to calm down and make an appointment",
        sub: "Remain seated and decline to reason with her while she is angry.",
        tier: "caution",
        feedback: "Matching her emotional tone does not reduce the anxiety of the situation and may cause her to leave even angrier."
      },
      {
        text: "Introduce yourself and acknowledge her frustration",
        sub: "Ask her name, offer her a seat, and say that perhaps you can help.",
        tier: "good",
        feedback: "Good choice. This demonstrates self-control, respect, and empathy while creating an opening to understand the underlying problem."
      },
      {
        text: "Call security immediately",
        sub: "Treat the angry interruption as a security problem.",
        tier: "caution",
        feedback: "Security may be necessary in extreme circumstances, but it is disproportionate here and would probably intensify the long-time member's anger."
      }
    ]
  },
  {
    kicker: "LISTENING FOR THE REAL ISSUE",
    vignette: "The woman refuses to sit but says she has a problem and wants to know what you will do about it.",
    vitals: ["Need: Active listening", "Goal: De-escalation", "Constraint: Limited time"],
    prompt: "What do you say?",
    choices: [
      {
        text: "Invite her to explain what has made her unhappy",
        sub: "Say you need to understand more before knowing how you can help.",
        tier: "good",
        feedback: "This shows genuine interest and keeps your own emotional response under control, allowing the conversation to move toward the real concern."
      },
      {
        text: "Tell her to sit while you get a notepad",
        sub: "Insist that she explain the problem on your terms.",
        tier: "caution",
        feedback: "The tone does not demonstrate genuine interest and is unlikely to resolve the issue; the member may become more upset and leave."
      }
    ]
  },
  {
    kicker: "RESPONDING WITH EMPATHY",
    vignette: "Her voice softens and she reveals that her best friend died a few weeks ago. They played every Friday morning, and she has been angry at the world since the loss. She says she does not want to keep you from your work.",
    vitals: ["Underlying issue: Grief", "Need: Empathy", "Goal: Support with boundaries"],
    prompt: "How do you respond?",
    choices: [
      {
        text: "Offer condolences and schedule a follow-up",
        sub: "Suggest meeting next week to discuss ways the club might honor her friend.",
        tier: "good",
        feedback: "Excellent. You maintain self-control, address the member's emotions, respect her long relationship with the club, and offer a constructive next step."
      },
      {
        text: "Leave work now to continue the conversation over coffee",
        sub: "Apologize and offer to spend additional time with her immediately.",
        tier: "caution",
        feedback: "This continues on an empathetic path, but it unnecessarily delays your work and increases your own anxiety. A scheduled follow-up is more balanced."
      }
    ]
  }
];
