// Each option's `key` corresponds directly to a key in every martial art's
// `ratings` object (see data/martialArts.js). Scoring simply averages the
// chosen ratings per discipline, keeping the quiz driven by the same data
// used everywhere else in the app.

export const quizQuestions = [
  {
    id: "range",
    question: "How do you prefer to engage an opponent?",
    options: [
      { label: "Strike from a distance with punches or kicks", key: "striking" },
      { label: "Close the gap and control in the clinch", key: "clinch" },
      { label: "Take the fight to the ground", key: "grappling" },
    ],
  },
  {
    id: "goal",
    question: "What's your main goal in training?",
    options: [
      { label: "Build elite physical conditioning", key: "fitness" },
      { label: "Prepare for real self-defense scenarios", key: "selfDefense" },
      { label: "Compete in tournaments or matches", key: "competition" },
    ],
  },
  {
    id: "style",
    question: "Which sounds more like you?",
    options: [
      { label: "Fast hands and sharp footwork", key: "striking" },
      { label: "Powerful kicks and knees", key: "kicks" },
      { label: "Leverage, control, and technique over strength", key: "grappling" },
    ],
  },
  {
    id: "environment",
    question: "Where would you rather be in a fight?",
    options: [
      { label: "On my feet, dictating distance", key: "striking" },
      { label: "In tight, using elbows and knees", key: "clinch" },
      { label: "On the mat, working for a submission", key: "grappling" },
    ],
  },
  {
    id: "mindset",
    question: "What matters most to you in a discipline?",
    options: [
      { label: "A proven competitive track record", key: "competition" },
      { label: "Practical, reliable self-defense", key: "selfDefense" },
      { label: "A demanding physical challenge", key: "fitness" },
    ],
  },
];
