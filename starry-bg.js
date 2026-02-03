(function() {
  var starsEl = document.querySelector('.starry-stars');
  if (!starsEl) return;
  var count = 70;
  for (var i = 0; i < count; i++) {
    var star = document.createElement('div');
    star.className = 'starry-star' + (Math.random() > 0.72 ? ' starry-star--big' : '');
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 3 + 's';
    starsEl.appendChild(star);
  }
})();
