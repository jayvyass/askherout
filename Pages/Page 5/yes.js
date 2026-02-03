// 3 Gifts: Letter, Date postcard, Promise
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

var modal = document.getElementById('giftModal');
var modalInner = document.getElementById('giftModalInner');
var modalContent = document.getElementById('giftModalContent');

document.querySelectorAll('.gift-box').forEach(function (box) {
  box.addEventListener('click', function () {
    var id = this.getAttribute('data-gift');
    if (!id || !giftContents[id]) return;
    this.classList.add('open');
    modalInner.innerHTML = giftContents[id];
    modal.classList.add('show');
  });
});

function closeGift() {
  modal.classList.remove('show');
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeGift();
});

// Hearts animation (existing)
var container = document.querySelector(".container");
if (container) {
  for (var i = 1; i <= 100; i++) {
    var hearts = document.createElement("div");
    hearts.classList.add("heart");
    container.appendChild(hearts);
  }
}
