var questions = [
  { text: "Where was our first date?", options: ["Radhika's", "Kovallam", "Vaani"], correct: 0 },
  { text: "Our first kiss was on which date?", options: ["4 Nov", "3 Nov", "5 Nov"], correct: 1 },
  { text: "When did you become my girlfriend?", options: ["27 Dec", "25 Dec", "21 Dec"], correct: 2 }
];

var currentQ = 0;
var progressEl = document.getElementById('progress');
var questionEl = document.getElementById('question');
var optionsEl = document.getElementById('options');
var errorBox = document.getElementById('errorBox');
var errorMsg = document.getElementById('errorMsg');
var quizGif = document.getElementById('quizGif');

var errorMessages = [
  "Nope! That wasn't our first date, baby 🥺 Think again!",
  "Hmm, wrong date, sweetu! Our first kiss was another day 💕",
  "Not quite, dobuu! Remember when you said yes? 🥺"
];

var errorGifs = ["../Assets/depressed.gif", "../Assets/attitude.gif"];

var typewriterDelay = 45;

function typeQuestion(text, done) {
  var i = 0;
  questionEl.innerHTML = '';
  questionEl.classList.add('typewriter-text');

  function typeChar() {
    if (i <= text.length) {
      questionEl.innerHTML = text.slice(0, i) + '<span class="typewriter-cursor"></span>';
      i++;
      setTimeout(typeChar, typewriterDelay);
    } else {
      questionEl.textContent = text;
      if (done) done();
    }
  }
  typeChar();
}

function showOptions() {
  var q = questions[currentQ];
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

function showQuestion() {
  var q = questions[currentQ];
  progressEl.textContent = "Question " + (currentQ + 1) + " of 3";
  optionsEl.innerHTML = "";
  typeQuestion(q.text, showOptions);
}

var successWrap = document.getElementById('successWrap');
var successMsgEl = document.getElementById('successMsg');
var loveWrap = document.getElementById('loveWrap');
var giftsWrap = document.getElementById('giftsWrap');
var riyaAudio = document.getElementById('riyaAudio');
var giftModal = document.getElementById('giftModal');
var giftModalInner = document.getElementById('giftModalInner');
var giftModalBackdrop = document.getElementById('giftModalBackdrop');
var giftModalClose = document.getElementById('giftModalClose');

var successText = "Thanks for choosing me as your valentine. I promise to be your valentine forever, my cutie 💕";

var giftContents = {
  1: '<div class="gift-letter">' +
     '<p class="greet">Dear Riya,</p>' +
     '<p>I wanted to tell you that you matter more than I usually know how to say. Every day with you feels a little brighter.</p>' +
     '<p>Thank you for being you and for choosing us. I love you.</p>' +
     '<p class="gift-sign">Yours only,<br><span class="gift-name">Jay</span></p>' +
     '</div>',
  2: '<div class="gift-postcard">' +
     '<p class="postcard-title">📅 Our Date</p>' +
     '<p class="postcard-detail"><strong>Date:</strong> 21 Feb</p>' +
     '<p class="postcard-detail"><strong>Time:</strong> 2 PM</p>' +
     '<p class="postcard-detail"><strong>Place:</strong> Our favourite spot</p>' +
     '<p class="postcard-place">Can\'t wait to see you there 💕</p>' +
     '</div>',
  3: '<div class="gift-promise">' +
     '<p class="promise-title">💝 My Promise to You</p>' +
     '<p class="promise-text">I promise to stay by your side through everything — the silly moments, the tough ones, and all the adventures we\'ll have together.</p>' +
     '<p class="promise-text">I\'ll be there till the end, Riya. You\'re my person. I love you. 💕</p>' +
     '</div>'
};

function choose(index) {
  var q = questions[currentQ];
  if (index === q.correct) {
    currentQ++;
    if (currentQ >= questions.length) {
      startSuccessFlow();
      return;
    }
    quizGif.src = "../Assets/love.gif";
    setTimeout(function () {
      quizGif.src = "../Assets/smart.gif";
      showQuestion();
    }, 400);
  } else {
    errorMsg.textContent = errorMessages[currentQ];
    var errImg = document.querySelector('.quiz-error-gif');
    if (errImg) errImg.src = errorGifs[Math.floor(Math.random() * errorGifs.length)];
    errorBox.classList.add('show');
  }
}

function hideError() {
  errorBox.classList.remove('show');
}

function startSuccessFlow() {
  document.getElementById('quizWrap').style.display = 'none';
  successWrap.classList.add('show');
  typewriterSuccess(successText, function () {
    setTimeout(function () {
      successWrap.classList.remove('show');
      loveWrap.classList.add('show');
      initLovePlayButton();
      playAudioMovieStyle();
    }, 1600);
  });
}

function typewriterSuccess(text, done) {
  var i = 0;
  var cursor = '<span class="typewriter-cursor"></span>';
  successMsgEl.innerHTML = '';

  function typeChar() {
    if (i <= text.length) {
      successMsgEl.innerHTML = text.slice(0, i) + cursor;
      i++;
      setTimeout(typeChar, 38);
    } else {
      successMsgEl.textContent = text;
      if (done) done();
    }
  }
  typeChar();
}

function playAudioMovieStyle() {
  if (!riyaAudio) return;
  var playBtn = document.getElementById('lovePlayBtn');
  riyaAudio.volume = 0;
  riyaAudio.currentTime = 0;

  var fadeInDuration = 2;
  var fadeOutStart = null;
  var fadeOutDuration = 4;
  var fadeInStart = Date.now();

  function fadeIn() {
    var elapsed = (Date.now() - fadeInStart) / 1000;
    if (elapsed < fadeInDuration) {
      riyaAudio.volume = Math.min(1, elapsed / fadeInDuration);
      requestAnimationFrame(fadeIn);
    } else {
      riyaAudio.volume = 1;
    }
  }

  riyaAudio.addEventListener('timeupdate', function onTimeUpdate() {
    var d = riyaAudio.duration;
    if (!isNaN(d) && d > 0 && riyaAudio.currentTime >= d - 6 && !fadeOutStart) {
      fadeOutStart = Date.now();
      (function fadeOut() {
        var elapsed = (Date.now() - fadeOutStart) / 1000;
        if (elapsed < fadeOutDuration) {
          riyaAudio.volume = Math.max(0, 1 - elapsed / fadeOutDuration);
          requestAnimationFrame(fadeOut);
        } else {
          riyaAudio.volume = 0;
        }
      })();
    }
  }, { passive: true });

  riyaAudio.addEventListener('ended', function onEnded() {
    loveWrap.classList.remove('show');
    giftsWrap.classList.add('show');
    initGiftModal();
  }, { once: true });

  riyaAudio.play().then(function () {
    if (playBtn) playBtn.classList.add('hidden');
    fadeIn();
  }).catch(function () {
    if (playBtn) playBtn.classList.remove('hidden');
  });
}

function initLovePlayButton() {
  var playBtn = document.getElementById('lovePlayBtn');
  if (!playBtn || !riyaAudio) return;
  playBtn.addEventListener('click', function () {
    playBtn.classList.add('hidden');
    riyaAudio.volume = 0;
    riyaAudio.currentTime = 0;
    riyaAudio.play().then(function () {
      var fadeInStart = Date.now();
      function fadeIn() {
        var elapsed = (Date.now() - fadeInStart) / 1000;
        if (elapsed < 2) {
          riyaAudio.volume = Math.min(1, elapsed / 2);
          requestAnimationFrame(fadeIn);
        } else riyaAudio.volume = 1;
      }
      fadeIn();
    });
  }, { once: true });
}

function initGiftModal() {
  if (!giftModal || !giftModalInner) return;
  document.querySelectorAll('#giftsWrap .gift-box').forEach(function (box) {
    box.addEventListener('click', function () {
      var id = this.getAttribute('data-gift');
      if (!id || !giftContents[id]) return;
      this.classList.add('open');
      giftModalInner.innerHTML = giftContents[id];
      giftModal.classList.add('show');
    });
  });
  if (giftModalBackdrop) giftModalBackdrop.onclick = closeGift;
  if (giftModalClose) giftModalClose.onclick = closeGift;
  document.addEventListener('keydown', function esc(e) {
    if (e.key === 'Escape') closeGift();
  });
}

function closeGift() {
  if (giftModal) giftModal.classList.remove('show');
}

showQuestion();
