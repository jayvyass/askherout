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
