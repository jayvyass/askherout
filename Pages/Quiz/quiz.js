var questions = [
  {
    text: "Where was our first date?",
    options: ["Radhika's", "Kovallam", "Vaani"],
    correct: 0
  },
  {
    text: "Our first kiss was on which date?",
    options: ["3 Nov", "4 Nov", "5 Nov"],
    correct: 0
  },
  {
    text: "When did you become my girlfriend?",
    options: ["21 Dec", "27 Dec", "25 Dec"],
    correct: 0
  }
];

var currentQ = 0;
var progressEl = document.getElementById('progress');
var questionEl = document.getElementById('question');
var optionsEl = document.getElementById('options');
var errorBox = document.getElementById('errorBox');
var errorMsg = document.getElementById('errorMsg');
var quizGif = document.getElementById('quizGif');

var errorMessages = [
  "Nope! That wasn’t our first date, baby 🥺 Think again!",
  "Hmm, wrong date, sweetu! Our first kiss was another day 💕",
  "Not quite, dobuu! Remember when you said yes? 🥺"
];

var errorGifs = ["../Assets/depressed.gif", "../Assets/attitude.gif"];

function showQuestion() {
  var q = questions[currentQ];
  progressEl.textContent = "Question " + (currentQ + 1) + " of 3";
  questionEl.textContent = q.text;
  optionsEl.innerHTML = "";
  q.options.forEach(function (opt, i) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'quiz-option';
    btn.textContent = opt;
    btn.onclick = function () { choose(i); };
    optionsEl.appendChild(btn);
  });
}

function choose(index) {
  var q = questions[currentQ];
  if (index === q.correct) {
    currentQ++;
    if (currentQ >= questions.length) {
      window.location.href = "../Page 5/yes.html";
      return;
    }
    quizGif.src = "../Assets/love.gif";
    setTimeout(function () {
      quizGif.src = "../Assets/smart.gif";
      showQuestion();
    }, 400);
  } else {
    errorMsg.textContent = errorMessages[currentQ];
    document.querySelector('.quiz-error-gif').src = errorGifs[Math.floor(Math.random() * errorGifs.length)];
    errorBox.classList.add('show');
  }
}

function hideError() {
  errorBox.classList.remove('show');
}

showQuestion();
