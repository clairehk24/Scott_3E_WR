/* Chapter 7 -- Change, Turnaround, and Crisis Leadership */
window.SCENARIO_DATA = [
  {
    kicker: "STARTING THE TURNAROUND",
    vignette: "You are the new executive director of a prominent sport and fitness club after its worst financial performance in 20 years. Membership is falling, facilities and equipment are poorly maintained, programs are outdated, and members report unprofessional staff behavior. The board expects visible progress within one year and gives you broad authority to make changes.",
    vitals: ["Timeline: One year", "Problems: Revenue, membership, facilities, programs, and service", "Advisers: Alex, a consultant, and Stephanie, the assistant manager"],
    prompt: "How should you respond to competing calls for urgency and staff input?",
    choices: [
      {
        text: "Limit input so the turnaround can move quickly",
        sub: "Establish direction, goals, and accountability from the top.",
        tier: "caution",
        feedback: "You are accountable for rapid progress, but you cannot achieve it alone. Moving without staff input makes diagnosis weaker and buy-in harder."
      },
      {
        text: "Meet with staff to understand the problems",
        sub: "Use direct conversation to build trust and open communication before prescribing change.",
        tier: "good",
        feedback: "Good choice. Early listening helps diagnose the existing culture and shows employees that their knowledge and participation matter."
      },
      {
        text: "Focus only on establishing urgency",
        sub: "Emphasize that major changes and new performance expectations are coming immediately.",
        tier: "caution",
        feedback: "Urgency matters, but declaring change before understanding the organization can repeat the communication failures of the previous director."
      }
    ]
  },
  {
    kicker: "GATHERING STAFF INPUT",
    vignette: "The club has more than 20 employees. The board expects speed, but staff members possess important knowledge about the organization's history, culture, members, and operations.",
    vitals: ["Staff: 20+", "Need: Honest input", "Risk: An impersonal process"],
    prompt: "How should you gather their perspectives?",
    choices: [
      {
        text: "Avoid extensive consultation because the board expects action",
        sub: "Gather only the information needed to begin making changes.",
        tier: "caution",
        feedback: "This may look fast, but excluding key constituents weakens the diagnosis and reduces support for the turnaround."
      },
      {
        text: "Schedule small meetings organized by work area",
        sub: "Listen directly to groups such as marketing, maintenance, and program management.",
        tier: "good",
        feedback: "This is an optimal path. Small-group meetings reveal distinct subcultures while creating trust and open communication."
      },
      {
        text: "Use only a brief anonymous questionnaire",
        sub: "Save time by collecting written concerns instead of meeting with employees.",
        tier: "caution",
        feedback: "An anonymous survey can surface honest views, but relying on it alone may feel impersonal. It works better as preparation for direct conversation."
      }
    ]
  },
  {
    kicker: "UNDERSTANDING SUBCULTURES",
    vignette: "Stephanie explains that each work area has its own subculture and sometimes loses sight of the club's overall mission. Alex believes leadership should establish a new mission and vision before asking the groups for input.",
    vitals: ["Work areas: Marketing, facilities, and programs", "Issue: Distinct subcultures", "Goal: Informed change"],
    prompt: "What is the best next step?",
    choices: [
      {
        text: "Skip studying subcultures because it takes too long",
        sub: "Move immediately to visible operational changes.",
        tier: "caution",
        feedback: "Skipping this work sacrifices information needed to understand the current culture and identify potential supporters of change."
      },
      {
        text: "Write a new vision and mission first",
        sub: "Present leadership's direction to employees before examining the existing culture.",
        tier: "caution",
        feedback: "Leadership must guide the turnaround, but establishing direction without understanding the current culture or involving staff is premature."
      },
      {
        text: "Meet with each work area to understand its culture",
        sub: "Learn how employees view problems, practices, and the club's overall mission.",
        tier: "good",
        feedback: "Good choice. Work-area discussions provide practical insight into both organizational problems and the subcultures that will influence change."
      }
    ]
  },
  {
    kicker: "DIAGNOSING THE DECLINE",
    vignette: "Initial conversations suggest that the club's difficulties may involve leadership, communication, marketing, costs, programs, facilities, staff relationships, and declining member trust—not simply one dysfunctional group.",
    vitals: ["Need: Root-cause diagnosis", "Assets: Staff knowledge and organizational history", "Risk: Premature conclusions"],
    prompt: "How should you frame the problem?",
    choices: [
      {
        text: "Assume the culture is dysfunctional and replace much of the staff",
        sub: "Use personnel changes to signal a decisive break with the past.",
        tier: "caution",
        feedback: "Replacement may eventually be necessary, but it is premature, expensive, and can destroy valuable organizational knowledge."
      },
      {
        text: "Set new expectations for senior staff immediately",
        sub: "Tell leaders which behaviors must change and how they will be evaluated.",
        tier: "caution",
        feedback: "Clear expectations matter, but this assumes that senior staff are the core problem before the broader organization has been assessed."
      },
      {
        text: "Investigate why members became dissatisfied",
        sub: "Ask staff about past marketing, communication, operational problems, and their access to decision-making.",
        tier: "good",
        feedback: "Excellent. This gathers evidence about the causes of decline instead of merely assuming the previous culture or staff were dysfunctional."
      }
    ]
  },
  {
    kicker: "CHOOSING A TURNAROUND STRATEGY",
    vignette: "You learn that declining membership strained the budget, while the former director pursued few new marketing or cost-containment strategies, resisted innovative lower-cost programs, and maintained weak relationships with staff and members.",
    vitals: ["Findings: Financial and leadership problems", "Need: Culture and strategy", "Assets: Employees who can carry change"],
    prompt: "Which response offers the strongest foundation for turnaround?",
    choices: [
      {
        text: "Treat the problem primarily as financial",
        sub: "Bring in accounting and marketing consultants, conduct a SWOT analysis, and focus on business performance.",
        tier: "caution",
        feedback: "Consultants and analysis may help, but a financial-only response does not address the existing culture or engage employees and members in the turnaround."
      },
      {
        text: "Combine transformational leadership with a recovery plan",
        sub: "Assess costs and opportunities, embrace change, and enlist staff members who can carry the new culture.",
        tier: "good",
        feedback: "Congratulations. This approach connects culture, leadership, strategy, and employee participation—the strongest foundation for sustained turnaround."
      }
    ]
  }
];
