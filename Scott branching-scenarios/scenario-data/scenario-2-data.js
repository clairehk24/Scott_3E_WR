/* Chapter 2 -- Professional and Ethical Responsibility: Concussions in Sports */
window.SCENARIO_DATA = [
  {
    kicker: "CONCUSSION SYMPTOMS",
    vignette: "You are the athletic director at a successful suburban high school. Parents report that two senior football starters have repeatedly returned from practice with headaches, light sensitivity, and dizziness. The athletes, both Division I recruits, have hidden their symptoms because they fear missing games and losing scholarship opportunities. State law requires athletes showing concussion symptoms to be removed immediately, sit out at least seven days, and obtain a licensed medical professional's written authorization before returning.",
    vitals: ["Role: High school athletic director", "Athletes: Two senior starters", "Requirement: Immediate removal and medical clearance"],
    prompt: "The parents have just left your office. What do you do next?",
    choices: [
      {
        text: "Meet with the players and coach and suspend contact drills temporarily",
        sub: "Discuss the parents' concerns as soon as feasible.",
        tier: "caution",
        feedback: "Meeting together and avoiding contact drills may seem responsible, but this does not satisfy the requirement for medical evaluation and approval."
      },
      {
        text: "Observe the players at the next practice",
        sub: "Watch for possible concussion symptoms before acting.",
        tier: "caution",
        feedback: "Observation delays the immediate removal required when signs of concussion have been reported and could expose the athletes to further harm."
      },
      {
        text: "Remove the players until they receive medical clearance",
        sub: "Notify the head coach immediately and require evaluation and a signed release before return.",
        tier: "good",
        feedback: "Good decision. This complies with state law and is the most ethically and professionally responsible choice."
      }
    ]
  },
  {
    kicker: "A CULTURE OF SILENCE",
    vignette: "The two athletes have been evaluated and barred from contact activity for at least seven days. Later, a player confidentially tells you that other team members have vowed not to disclose concussion symptoms.",
    vitals: ["Issue: Hidden concussion symptoms", "Source: Confidential player report", "Accountability: Coaches and athletic trainers"],
    prompt: "What do you do now?",
    choices: [
      {
        text: "Hold a concussion-awareness meeting for the entire program",
        sub: "Include players, coaches, athletic trainers, and parents.",
        tier: "caution",
        feedback: "This is a reasonable step, but it does not immediately address the coaches and athletic trainers who are most directly accountable for player safety."
      },
      {
        text: "Meet with the football coaching staff immediately",
        sub: "Determine what they know and reinforce their professional, ethical, and legal responsibilities.",
        tier: "good",
        feedback: "This is the best choice. Oversight responsibility requires addressing the issue with those most influential and accountable for team culture and player behavior."
      },
      {
        text: "Attend practice and look for evidence",
        sub: "Observe whether athletes appear to be hiding symptoms.",
        tier: "caution",
        feedback: "Observation cannot establish whether an athlete is experiencing a concussion without an evaluation, and it postpones direct action."
      }
    ]
  },
  {
    kicker: "PROTECTING CONFIDENTIALITY",
    vignette: "The coaches ask who told you that players have been keeping concussion symptoms secret.",
    vitals: ["Issue: Confidentiality", "Priority: Athlete safety", "Leadership values: Trust and responsibility"],
    prompt: "How do you respond?",
    choices: [
      {
        text: "Identify the sources but require confidentiality",
        sub: "Trust the coaches not to reveal their names.",
        tier: "caution",
        feedback: "You have still disclosed who informed you, potentially putting those individuals in a difficult position."
      },
      {
        text: "Do not disclose who spoke with you",
        sub: "Emphasize that athlete safety is the foremost responsibility of you and the coaches.",
        tier: "good",
        feedback: "This maintains confidentiality and appropriately places responsibility on leadership to address the issue with the team."
      },
      {
        text: "Identify the sources and say their identity does not matter",
        sub: "Focus instead on stopping behavior that puts athletes at risk.",
        tier: "caution",
        feedback: "Disclosing the sources is unnecessary here and would undermine trust and respect."
      }
    ]
  },
  {
    kicker: "LIMITED MEDICAL RESOURCES",
    vignette: "You are the athletic director in a small rural school district. Parents are concerned that no certified athletic trainer is available and a physician is seldom present at events with high concussion risk. The school board says it cannot afford a full-time trainer.",
    vitals: ["Setting: Rural school district", "Constraint: Limited funding", "Need: Qualified medical coverage"],
    prompt: "What is the best way to pursue a solution?",
    choices: [
      {
        text: "Ask legal counsel to explain the district's potential liability",
        sub: "Compare possible litigation costs with the cost of an athletic trainer.",
        tier: "good",
        feedback: "Given these choices, this is the best option. Legal expertise can show that the district's financial risk may outweigh the cost of providing qualified coverage."
      },
      {
        text: "Ask parents and the board to fund a trainer only for football",
        sub: "Pool resources for part-time sideline coverage at football games.",
        tier: "caution",
        feedback: "Although well intentioned, unequal medical services across school athletic programs could expose the district to Title IX discrimination claims."
      },
      {
        text: "Encourage parents to pressure the school board",
        sub: "Build a coalition demanding funding for an athletic trainer.",
        tier: "caution",
        feedback: "This may attract attention, but the school is unlikely to view pressure tactics as an acceptable way to build support and obtain resources."
      }
    ]
  },
  {
    kicker: "COMMUNICATING AFTER A SERIOUS INJURY",
    vignette: "You direct a city youth sports association whose participation has grown 20 percent in two years. Regina, a 12-year-old soccer player, is hospitalized after a severe concussion. You must address parents about the risks and benefits of contact and collision sports, and Regina's parents will attend.",
    vitals: ["Audience: Youth-sport parents", "Incident: Severe concussion", "Responsibility: Informed participation"],
    prompt: "How should you begin your remarks?",
    choices: [
      {
        text: "Lead with statistics showing serious concussions are uncommon",
        sub: "Offer support to Regina, then emphasize the low rate of serious injuries.",
        tier: "caution",
        feedback: "Even if the statistics are accurate, this opening does not demonstrate the expected concern for an individual participant's well-being."
      },
      {
        text: "Address risks, prevention, and benefits candidly",
        sub: "Acknowledge Regina, explain concussion dangers and safeguards, and help parents make informed choices.",
        tier: "good",
        feedback: "Good choice. This balances the benefits of participation with the professional, ethical, and legal responsibility to explain its risks."
      },
      {
        text: "Review the existing concussion handout and policies",
        sub: "Reassure parents that participant safety is the program's primary concern.",
        tier: "caution",
        feedback: "This reinforces important responsibilities, but it does not explain injury-prevention work or acknowledge the benefits parents must weigh."
      }
    ]
  },
  {
    kicker: "COACH-TRAINER TENSION",
    vignette: "You are the senior athletic director at an NCAA Division I institution. The head athletic trainer reports tension between training staff and assistant football coaches after trainers withheld athletes from practices or games because of concussion symptoms.",
    vitals: ["Setting: NCAA Division I", "Conflict: Coaches and athletic trainers", "Risk: Safety, policy, and litigation"],
    prompt: "What do you do?",
    choices: [
      {
        text: "Meet with athletic leadership and the coaching staff",
        sub: "Determine whether the trainer's report is accurate.",
        tier: "caution",
        feedback: "This excludes athletic trainers from the conversation and may suggest that only the coaches' perspective matters, undermining trust and respect."
      },
      {
        text: "Delegate separate fact-finding meetings",
        sub: "Ask the associate athletic director to interview coaches and trainers and recommend next steps.",
        tier: "caution",
        feedback: "This participative approach is reasonable, but separate meetings may slow resolution and keep key parties from developing shared expectations."
      },
      {
        text: "Bring all accountable leaders together",
        sub: "Include the head coach, head trainer, associate athletic director, and team physician to review policy and establish accountability.",
        tier: "good",
        feedback: "Good choice. This structured and legally sound approach brings together the key leaders needed to review concussion guidelines, clarify policy, and create an accountability plan."
      }
    ]
  }
];
