// Typewriter for title (same font as comet page)
var titleText = "Will you be my Valentine?";
var titleEl = document.getElementById('proposalTitle');
var charDelay = 65;

function typeTitle(i) {
  if (i <= titleText.length) {
    titleEl.innerHTML = titleText.slice(0, i) + '<span class="typewriter-cursor"></span>';
    setTimeout(function() { typeTitle(i + 1); }, charDelay);
  } else {
    titleEl.textContent = titleText;
  }
}

if (titleEl) {
  setTimeout(function() { typeTitle(0); }, 400);
}

// Yes → Quiz page
function yesFunction() {
  window.location.href = "../Quiz/quiz.html";
}

// Runaway No button (can't really select No)
var maxWidth = 650;
var maxHeight = 500;

window.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('no');
  if (!button) return;
  button.addEventListener('mouseover', function() {
    button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
    button.style.bottom = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
  });
});
