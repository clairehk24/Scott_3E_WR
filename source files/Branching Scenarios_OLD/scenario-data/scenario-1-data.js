/* ============================================================
   SCENARIO 1 -- Leadership Circle self-assessment activity
   Source: CLSO3E_HKP_chap1_SA.docx
   ============================================================ */
window.SCENARIO_DATA = [
  {
    kicker: "SELF-ASSESSMENT",
    vignette: "Becoming a better leader typically begins with gaining more insight into the thoughts and actions that contribute to your own current leadership style. For this edition of the book, we have chosen the initial no-cost self-assessment tool from the Leadership Circle Profile (LCP), which is widely recognized both in the United States and internationally. As noted on their website,",
    extract: "The Leadership Circle free leadership self-assessment is unlike any leadership style quiz. It was developed through in-depth research and uses data from over 100,000 leaders to help you get a detailed understanding of your leadership style compared to other leaders globally.",
    vitals: ["Focus: Leadership style", "Tool: Leadership Circle Profile", "Cost: No-cost assessment"],
    prompt: "Click on the following link to review general information about the Leadership Circle and complete the free self-assessment. Over the course of the semester, you will be able to refer to your profile and identify areas of strength as well as growth and improvement areas for your future leadership development.",
    requireExternalLinkClick: true,
    externalLink: {
      href: "https://self-assessment.theleadershipcircle.com/?_gl=1*1w3hbuo*_up*MQ..*_ga*NTc3MjM1LjE3ODgzNjUxOTE.*_ga_7BE657G74J*czE3ODgzNjUxOTEkbzEkZzEkdDE3ODgzNjUxOTkkajUyJGwwJGgw",
      label: "The Leadership Circle: Free Self-Assessment"
    },
    choices: [
      {
        text: "Complete the Leadership Circle free self-assessment",
        tooltip: "Complete the Leadership Circle free self-assessment using the external link above before continuing.",
        sub: "Review the general information, take the assessment, and keep your profile available for use throughout the semester.",
        tier: "good",
        feedback: "After completing the assessment, use your profile to identify leadership strengths and areas for growth and improvement."
      }
    ]
  },
  {
    kicker: "REFLECTION 1",
    vignette: "Your assessment profile can help you recognize patterns in your current leadership skills and behaviors.",
    vitals: ["Review: Strengths", "Review: Growth areas"],
    prompt: "From this assessment, what did you learn about your strengths? What areas for growth and improvement did this assessment reveal?",
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
    prompt: "Besides this course, how else might you go about finding ways to build upon your current leadership skills?",
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

window.SCENARIO_REFLECTION = {
  "title": "Final Reflection: Developing Your Leadership",
  "intro": "Congratulations. You completed the leadership self-assessment activity and its reflection steps. Your Leadership Circle profile provides a starting point for considering your current leadership style and planning how you want to develop throughout the semester and beyond.",
  "sections": [
    {
      "title": "1. Build Self-Awareness",
      "body": "Review your profile and consider what it reveals about your thoughts, actions, and leadership habits. Connect those insights with specific experiences to better understand how you lead."
    },
    {
      "title": "2. Identify Strengths and Growth Areas",
      "body": "Record the strengths you want to build upon and the areas where you want to improve. Use your reflection to choose specific behaviors to practice as you work through the course."
    },
    {
      "title": "3. Continue Your Development",
      "body": "Identify opportunities beyond this course to seek feedback, practice leadership, and reflect on what you learn. Revisit your profile throughout the semester to consider your progress and adjust your development priorities."
    }
  ]
};
