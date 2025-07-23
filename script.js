const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "High Transfer Machine Language"
    ],
    answer: 0
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: 2
  },
  {
    question: "Which is not a JavaScript Framework?",
    options: ["React", "Angular", "Vue", "Django"],
    answer: 3
  },
  {
    question: "Which keyword is used to declare a constant in JS?",
    options: ["let", "const", "var", "static"],
    answer: 1
  },
];

let currentQuestion = 0;
let score = 0;

const quiz = document.getElementById("quiz");
const questionText = document.getElementById("question");
const options = document.querySelectorAll(".option-btn");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionText.textContent = q.question;
  options.forEach((btn, index) => {
    btn.textContent = q.options[index];
    btn.className = "option-btn";
    btn.disabled = false;
  });
  nextBtn.style.display = "none";
}

function selectAnswer(index) {
  const correct = questions[currentQuestion].answer;
  options.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correct) btn.classList.add("correct");
    else if (i === index) btn.classList.add("wrong");
  });

  if (index === correct) score++;
  nextBtn.style.display = "inline-block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  quiz.innerHTML = `
    <h2>🎉 You scored ${score} out of ${questions.length}!</h2>
    <button onclick="location.reload()">Try Again</button>
  `;
}

loadQuestion();
