const scoreDisplay = document.getElementById("score-display");
const questionDisplay = document.getElementById("question-display");

const questions = [
  {
    quiz: ["value", "estimate", "evaluate"],
    options: ["jury", "assess"],
    correct: 2,
    class: "active",
  },
  {
    quiz: ["create", "sculpture", "paint"],
    options: ["art", "biology"],
    correct: 1,
    class: "notActive",
  },
  {
    quiz: ["path", "route", "journey"],
    options: ["travel", "house"],
    correct: 1,
    class: "notActive",
  },
  {
    quiz: ["spine", "muscle", "organ"],
    options: ["anatomy", "gastronomy"],
    correct: 1,
    class: "notActive",
  },
  {
    quiz: ["close", "near", "next"],
    options: ["trace", "adjacent"],
    correct: 2,
    class: "notActive",
  },
  {
    quiz: ["fast", "quick", "prompt"],
    options: ["rapid", "charity"],
    correct: 1,
    class: "notActive",
  },
  {
    quiz: ["assume", "insight", "weather"],
    options: ["sustainable", "forecast"],
    correct: 2,
    class: "notActive",
  },
  {
    quiz: ["country", "border", "continent"],
    options: ["economy", "geography"],
    correct: 2,
    class: "notActive",
  },
  {
    quiz: ["wheel", "bumper", "windscreen"],
    options: ["ferry", "car"],
    correct: 2,
    class: "notActive",
  },
  {
    quiz: ["trial", "clock", "stopwatch"],
    options: ["movement", "time"],
    correct: 2,
    class: "notActive",
  },
];

let clicked = [];

let score = 0;
scoreDisplay.textContent = score;

function populateQuestions() {
  console.log("populateQuestions");
  let questionBoxId = 1;
  questions.forEach((question) => {
    // create a div for each of the questions
    const questionBox = document.createElement("div");

    // add class 'question-box' to divs just created
    questionBox.classList.add("question-box");
    questionBox.classList.add(question.class);
    questionBox.id = questionBoxId++;

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
    questionButtons.id = "questionButton";
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
      questionButton.addEventListener("click", (e) =>
        checkAnswer(
          questionBox,
          questionButton,
          option,
          optionIndex + 1,
          question.correct,
          e
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
  correctAnswer,
  e
) {
  console.log("checkAnswer");
  if (optionIndex === correctAnswer) {
    score++;
    scoreDisplay.textContent = score;
    addResult(questionBox, "Correct! You score a point 🏆", "correct");
    changeClass(e);
  } else {
    score--;
    scoreDisplay.textContent = score;
    addResult(questionBox, "Wrong! You lose a point 👎", "wrong");
    changeClass(e);
  }
}

function addResult(questionBox, answer, className) {
  console.log("addResult");
  const answerDisplay = questionBox.querySelector(".answer-display");
  answerDisplay.classList.add(className);
  answerDisplay.textContent = answer;
  console.log(className);
}

function deactivateFunction(e) {
  console.log("deactivateFunction");
  const questionButtons = document.getElementById("questionButton");
  let id = e.target.parentElement.parentElement.id;
  const questionBox = document.getElementById(id);
  console.log(questionButtons);
  console.log(questionBox);
  if (e.target.parentElement === "questionButton") {
    if (questionBox.classList === "notActive") {
      questionButtons.disabled = true;
    } else {
      questionButtons.disabled = false;
    }
  } else if (e.target.parentElement.parentElement === "questionButton") {
    if (questionBox.classList === "notActive") {
      questionButtons.disabled = true;
    } else {
      questionButtons.disabled = false;
    }
  }
}

function changeClass(e) {
  console.log("changeClass");
  if (e.target.parentElement.id === "questionButton") {
    console.log(e.target.parentElement);
    e.target.parentElement.classList.remove("active");
    e.target.parentElement.classList.add("notActive");
    console.log(e);
    e.target.parentElement.nextSibling.classList.remove("notActive");
    e.target.parentElement.nextSibling.classList.add("active");
  } else {
    e.target.parentElement.parentElement.classList.remove("active");
    e.target.parentElement.parentElement.classList.add("notActive");
    e.target.parentElement.parentElement.nextSibling.classList.remove(
      "notActive"
    );
    e.target.parentElement.parentElement.nextSibling.classList.add("active");
  }
  deactivateFunction(e);
}
