/* Chapter 6 -- Complexity and Problem Solving */
window.SCENARIO_DATA = [
  {
    kicker: "NFL DRAFT COMPLEXITY",
    vignette: "The 2021 NFL Draft followed a disrupted college season: some athletes opted out, scouts could not travel normally, and the scouting combine was canceled. General managers had to build draft boards with far less information than even experienced decision-makers usually possess.",
    vitals: ["Framework: Cynefin", "Event: 2021 NFL Draft", "Constraint: Incomplete and disrupted information"],
    prompt: "Which Cynefin domain best describes this problem?",
    choices: [
      {
        text: "Simple",
        sub: "Apply an obvious best practice.",
        tier: "caution",
        feedback: "This is not a simple problem. There is no obvious solution or straightforward best practice."
      },
      {
        text: "Complex",
        sub: "Experiment and look for emerging patterns.",
        tier: "caution",
        feedback: "The situation has complex elements because results are difficult to predict, but expert analysis and good practice still make complicated the stronger primary classification."
      },
      {
        text: "Complicated",
        sub: "Use expertise, analysis, and good practices to make a calculated decision.",
        tier: "good",
        feedback: "Good choice. There is no single right answer, but careful analysis, experience, and good judgment provide a sound path through the uncertainty."
      },
      {
        text: "Chaotic",
        sub: "Act immediately to restore order during severe turbulence.",
        tier: "caution",
        feedback: "The draft is challenging, but it does not involve the severe turbulence or crisis that defines a chaotic problem."
      }
    ]
  },
  {
    kicker: "FRAMING THE NFL DRAFT PROBLEM",
    vignette: "Having classified the draft challenge, choose the Bolman and Deal leadership frame that offers the best starting point for resolving it. More than one frame can contribute, but one is most directly aligned with the immediate task.",
    vitals: ["Framework: Bolman and Deal", "Task: Prospect evaluation", "Goal: Accountable draft decisions"],
    prompt: "Which leadership frame should guide the initial response?",
    choices: [
      {
        text: "Human resource",
        sub: "Focus on individual needs, relationships, and development.",
        tier: "caution",
        feedback: "This frame becomes especially useful after players are drafted and sign contracts, but it is not the best starting point for prospect evaluation."
      },
      {
        text: "Structural",
        sub: "Emphasize goals, roles, accountability, analysis, and outcomes.",
        tier: "good",
        feedback: "Good choice. The structural frame supports disciplined decision-making and accountability in a complicated, uncertain environment."
      },
      {
        text: "Political",
        sub: "Focus on power, interests, negotiation, and scarce resources.",
        tier: "caution",
        feedback: "Negotiation will matter later, but it is less applicable to the initial challenge of evaluating prospects."
      },
      {
        text: "Symbolic",
        sub: "Focus on culture, values, meaning, and inspiration.",
        tier: "caution",
        feedback: "Shared meaning and culture matter, but they are not the most applicable starting point for this evaluation problem."
      }
    ]
  },
  {
    kicker: "CRYPTOCURRENCY IN SPORT",
    vignette: "Cryptocurrency is expanding beyond online sports betting. Team owners may pay athletes partly in crypto, and athletes may tokenize themselves to fund career growth. Technology is moving faster than legal and regulatory processes and faster than some clubs' ability to manage fluctuating player and contract values.",
    vitals: ["Framework: Cynefin", "Issue: Cryptocurrency", "Uncertainty: Technology, regulation, and valuation"],
    prompt: "Which Cynefin domain best describes this issue?",
    choices: [
      {
        text: "Simple",
        sub: "Use an established best practice.",
        tier: "caution",
        feedback: "The issue is not simple to resolve or predict."
      },
      {
        text: "Complex",
        sub: "Experiment, learn, and adapt as patterns emerge.",
        tier: "good",
        feedback: "Good choice. The opportunities and risks are multifaceted and difficult to predict, so experimental strategies and negotiations may be necessary."
      },
      {
        text: "Complicated",
        sub: "Rely primarily on expert analysis and established good practice.",
        tier: "caution",
        feedback: "The issue is complicated, but the number of unknowns and unpredictable interactions make it better understood as complex."
      },
      {
        text: "Chaotic",
        sub: "Take immediate action to restore stability.",
        tier: "caution",
        feedback: "This is challenging, but it does not currently meet the Cynefin definition of a chaotic problem."
      }
    ]
  },
  {
    kicker: "FRAMING CRYPTOCURRENCY",
    vignette: "The use of cryptocurrency in sport involves experimentation and change, along with questions about what leagues and teams value and what they expect from players.",
    vitals: ["Framework: Bolman and Deal", "Need: Shared meaning", "Context: Emerging technology"],
    prompt: "Which leadership frame offers the best overall response?",
    choices: [
      {
        text: "Structural",
        sub: "Clarify rules, roles, and formal processes.",
        tier: "caution",
        feedback: "Structural elements may help, but this frame alone does not best address the broader challenge."
      },
      {
        text: "Human resource",
        sub: "Focus on how financial arrangements support individual athletes.",
        tier: "caution",
        feedback: "The human resource perspective is relevant to athlete support, but another frame better addresses the overall issue."
      },
      {
        text: "Political",
        sub: "Emphasize competing interests and negotiation.",
        tier: "caution",
        feedback: "Political considerations may appear, but this is not the most applicable overall frame."
      },
      {
        text: "Symbolic",
        sub: "Communicate values, shared meaning, professionalism, and team commitment.",
        tier: "good",
        feedback: "Great choice. During complexity, experimentation, and change, leaders can use values and shared meaning to communicate expectations for performance, professionalism, and commitment."
      }
    ]
  }
];
