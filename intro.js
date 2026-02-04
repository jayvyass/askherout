(function() {
  var lines = [
    "Riya,",
    "my cutie, my favourite person 💕",
    "I didn't just want to say I love you.",
    "I wanted to build you something only you get to see.",
    "Because you're not like everyone else — and what we have isn't either.",
    "So take your time. This is just for you.",
    "Whenever you're ready."
  ];

  var lineDelay = 800;
  var charDelay = 55;
  var afterLinePause = 2200;

  var wrap = document.getElementById('introTextWrap');
  var continueBtn = document.getElementById('introContinue');

  if (!wrap) return;

  function typeWriter(index) {
    if (index >= lines.length) {
      if (continueBtn) {
        continueBtn.classList.add('visible');
      }
      return;
    }

    var lineEl = document.createElement('div');
    lineEl.className = 'intro-line';
    wrap.appendChild(lineEl);

    var text = lines[index];
    var i = 0;

    function typeChar() {
      if (i <= text.length) {
        lineEl.innerHTML = text.slice(0, i) + '<span class="cursor"></span>';
        i++;
        setTimeout(typeChar, charDelay);
      } else {
        lineEl.innerHTML = text;
        setTimeout(function() {
          typeWriter(index + 1);
        }, afterLinePause);
      }
    }

    setTimeout(typeChar, index === 0 ? 600 : 0);
  }

  function createStars() {
    var starsEl = document.querySelector('.stars');
    if (!starsEl) return;
    var sizes = ['tiny', 'small', 'medium', 'large', 'bright'];
    var total = 120;
    for (var i = 0; i < total; i++) {
      var r = Math.random();
      var sizeClass = 'star--small';
      if (r < 0.45) sizeClass = 'star--tiny';
      else if (r < 0.75) sizeClass = 'star--small';
      else if (r < 0.90) sizeClass = 'star--medium';
      else if (r < 0.97) sizeClass = 'star--large';
      else sizeClass = 'star--bright';
      var star = document.createElement('div');
      star.className = 'star ' + sizeClass;
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.animationDelay = (Math.random() * 4) + 's';
      star.style.animationDuration = (2.5 + Math.random() * 2.5) + 's';
      starsEl.appendChild(star);
    }
  }

  createStars();
  typeWriter(0);

  if (continueBtn) {
    continueBtn.addEventListener('click', function() {
      window.location.href = 'Pages/Page 3/forthPage.html';
    });
  }

  document.body.classList.add('intro-active');
})();
