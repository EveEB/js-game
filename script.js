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

let score = 0;
scoreDisplay.textContent = score;

function populateQuestions() {
  questions.forEach((question) => {
    // create div for questions
    const questionBox = document.createElement("div");
    // add class 'question-box' to div just created
    questionBox.classList.add("question-box");

    const logoDisplay = document.createElement("h1");
    logoDisplay.textContent = "✏️";
    questionBox.append(logoDisplay);

    question.quiz.forEach((tip) => {
      const tipText = document.createElement("p");
      tipText.innerHTML = tip;
      questionBox.append(tipText);
    });

    // create div to store 2 buttons together
    const questionButtons = document.createElement("div");
    // add class 'question-buttons' to it
    questionButtons.classList.add("question-buttons");
    // append questionButtons to questionBox
    questionBox.append(questionButtons);

    // add buttons to questionButtons
    question.quiz.forEach((option) => {
      const questionButton = document.createElement("button");
      questionButton.classList.add("question-button");
      questionButton.textContent = option;

      //append questionButton to questionButtons
      questionButtons.append(questionButton);
    });

    // put the questionBox into the questionDisplay
    questionDisplay.append(questionBox);
  });
}

populateQuestions();
