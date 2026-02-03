(function() {
  var lastTime = 0;
  var throttle = 40;

  var colors = ['#ff6b9d', '#e84393', '#ff9ecd'];
  function createHeart(x, y) {
    var heart = document.createElement('div');
    heart.className = 'heart-trail';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.background = colors[Math.floor(Math.random() * colors.length)];
    document.body.appendChild(heart);
    setTimeout(function() { heart.remove(); }, 900);
  }

  document.addEventListener('mousemove', function(e) {
    var now = Date.now();
    if (now - lastTime < throttle) return;
    lastTime = now;
    createHeart(e.clientX, e.clientY);
  }, { passive: true });
})();
