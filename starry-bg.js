(function() {
  var starsEl = document.querySelector('.starry-stars');
  if (!starsEl) return;

  var total = 120;
  for (var i = 0; i < total; i++) {
    var r = Math.random();
    var sizeClass = 'starry-star--small';
    if (r < 0.45) sizeClass = 'starry-star--tiny';
    else if (r < 0.75) sizeClass = 'starry-star--small';
    else if (r < 0.90) sizeClass = 'starry-star--medium';
    else if (r < 0.97) sizeClass = 'starry-star--large';
    else sizeClass = 'starry-star--bright';

    var star = document.createElement('div');
    star.className = 'starry-star ' + sizeClass;
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = (Math.random() * 4) + 's';
    star.style.animationDuration = (2.5 + Math.random() * 2.5) + 's';
    starsEl.appendChild(star);
  }
})();
