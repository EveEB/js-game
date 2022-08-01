const scoreDisplay = document.getElementById("score-display");
const questionDisplay = document.getElementById("question-display");

const questions = [
  {
    quiz: ["value", "estimate", "evaluate"],
    options: ["jury", "assess"],
    correct: [1],
  },
  {
    quiz: ["create", "sculpture", "paint"],
    options: ["art", "biology"],
    correct: [0],
  },
  {
    quiz: ["path", "route", "journey"],
    options: ["travel", "house"],
    correct: [0],
  },
  {
    quiz: ["spine", "muscle", "organ"],
    options: ["anatomy", "gastronomy"],
    correct: [0],
  },
  {
    quiz: ["close", "near", "next"],
    options: ["trace", "adjacent"],
    correct: [1],
  },
  {
    quiz: ["fast", "quick", "prompt"],
    options: ["rapid", "charity"],
    correct: [0],
  },
  {
    quiz: ["assume", "insight", "weather"],
    options: ["sustainable", "forecast"],
    correct: [1],
  },
  {
    quiz: ["country", "border", "continent"],
    options: ["economy", "geography"],
    correct: [1],
  },
  {
    quiz: ["wheel", "bumper", "windscreen"],
    options: ["ferry", "car"],
    correct: [1],
  },
  {
    quiz: ["trial", "clock", "stopwatch"],
    options: ["movement", "time"],
    correct: [1],
  },
];
