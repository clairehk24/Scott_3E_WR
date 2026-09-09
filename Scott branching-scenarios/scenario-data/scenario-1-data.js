/* ============================================================
   SCENARIO 1 -- Leadership Circle self-assessment activity
   Source: CLSO3E_HKP_chap1_SA.docx
   ============================================================ */
window.SCENARIO_DATA = [
  {
    kicker: "SELF-ASSESSMENT",
    vignette: "Becoming a better leader typically begins with gaining insight into the thoughts and actions that shape your current leadership style. The Leadership Circle Profile (LCP) free self-assessment draws on research and data from more than 100,000 leaders to help you understand how your leadership style compares with leaders globally.",
    vitals: ["Focus: Leadership style", "Tool: Leadership Circle Profile", "Cost: No-cost assessment"],
    prompt: "Begin by reviewing the Leadership Circle information and completing the free self-assessment.",
    choices: [
      {
        text: "Complete the Leadership Circle free self-assessment",
        sub: "Review the general information, take the assessment, and keep your profile available for reflection.",
        tier: "good",
        feedback: "After completing the assessment, use your profile to identify leadership strengths and areas for growth and improvement."
      }
    ]
  },
  {
    kicker: "REFLECTION 1",
    vignette: "Your assessment profile can help you recognize patterns in your current leadership skills and behaviors.",
    vitals: ["Review: Strengths", "Review: Growth areas"],
    prompt: "What did you learn about your strengths as well as areas for growth and improvement from this assessment?",
    choices: [
      {
        text: "Reflect on my assessment results",
        sub: "Identify specific strengths and the areas where you want to grow or improve.",
        tier: "good",
        feedback: "Record the insights you want to revisit as you continue developing your leadership capabilities."
      }
    ]
  },
  {
    kicker: "REFLECTION 2",
    vignette: "Leadership development continues beyond a single assessment or course. Additional feedback, practice, and reflection can deepen your understanding over time.",
    vitals: ["Horizon: Beyond this course", "Goal: Continued development"],
    prompt: "Beyond this course, how might you gain more insight and find ways to build on your current leadership skills and behaviors?",
    choices: [
      {
        text: "Create a continuing leadership-development plan",
        sub: "Identify ways to gather insight, practice new behaviors, and build on your current skills.",
        tier: "good",
        feedback: "Refer back to your Leadership Circle profile over the semester and use it to track strengths, growth areas, and future development priorities."
      }
    ]
  }
];
