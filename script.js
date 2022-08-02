const scoreDisplay = document.getElementById("score-display");
const questionDisplay = document.getElementById("question-display");

const questions = [
  {
    quiz: ["value", "estimate", "evaluate"],
    options: ["jury", "assess"],
    correct: 2,
  },
  {
    quiz: ["create", "sculpture", "paint"],
    options: ["art", "biology"],
    correct: 1,
  },
  {
    quiz: ["path", "route", "journey"],
    options: ["travel", "house"],
    correct: 1,
  },
  {
    quiz: ["spine", "muscle", "organ"],
    options: ["anatomy", "gastronomy"],
    correct: 1,
  },
  {
    quiz: ["close", "near", "next"],
    options: ["trace", "adjacent"],
    correct: 2,
  },
  {
    quiz: ["fast", "quick", "prompt"],
    options: ["rapid", "charity"],
    correct: 1,
  },
  {
    quiz: ["assume", "insight", "weather"],
    options: ["sustainable", "forecast"],
    correct: 2,
  },
  {
    quiz: ["country", "border", "continent"],
    options: ["economy", "geography"],
    correct: 2,
  },
  {
    quiz: ["wheel", "bumper", "windscreen"],
    options: ["ferry", "car"],
    correct: 2,
  },
  {
    quiz: ["trial", "clock", "stopwatch"],
    options: ["movement", "time"],
    correct: 2,
  },
];

let clicked = [];

let score = 0;
scoreDisplay.textContent = score;

function populateQuestions() {
  questions.forEach((question) => {
    // create a div for each of the questions
    const questionBox = document.createElement("div");
    // add class 'question-box' to divs just created
    questionBox.classList.add("question-box");

    const logoDisplay = document.createElement("h2");
    logoDisplay.textContent = "💬";
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
    question.options.forEach((option, optionIndex) => {
      const questionButton = document.createElement("button");
      questionButton.classList.add("question-button");
      questionButton.textContent = option;

      // add event listener to button to check for results
      questionButton.addEventListener("click", () =>
        checkAnswer(
          questionBox,
          questionButton,
          option,
          optionIndex + 1,
          question.correct
        )
      );

      //append questionButton to questionButtons
      questionButtons.append(questionButton);
    });

    const answerDisplay = document.createElement("div");
    answerDisplay.classList.add("answer-display");

    // put the answerDisplay into the questionBox
    questionBox.append(answerDisplay);
    // put the questionBox into the questionDisplay
    questionDisplay.append(questionBox);
  });
}

populateQuestions();

function checkAnswer(
  questionBox,
  questionButton,
  option,
  optionIndex,
  correctAnswer
) {
  if (optionIndex === correctAnswer) {
    score++;
    scoreDisplay.textContent = score;
    addResult(questionBox, "Correct! You score a point 🏆", "correct");
    questionButton.disabled = true;
  } else {
    score--;
    scoreDisplay.textContent = score;
    addResult(questionBox, "Wrong! You lose a point 👎", "wrong");
    questionButton.disabled = true;
  }
  // clicked.push(option);
  // questionButton.disabled = clicked.includes(option);
}

function addResult(questionBox, answer, className) {
  const answerDisplay = questionBox.querySelector(".answer-display");
  answerDisplay.classList.remove("wrong");
  answerDisplay.classList.remove("correct");
  answerDisplay.classList.add(className);
  answerDisplay.textContent = answer;
}

// function disable() {
//   let elems = document.getElementsByClassName("question-button");
//   for (let i = 0; i < elems.length; i++) {
//     elems[i].disabled = true;
//   }
// }

// disable();
