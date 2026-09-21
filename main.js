// Mobile nav toggle
document.addEventListener('click', function (e) {
  const toggle = e.target.closest('.nav-toggle');
  if (toggle) {
    document.querySelector('.nav-links').classList.toggle('open');
  }

  // Open a modal (e.g. newsletter sign-up)
  const opener = e.target.closest('[data-modal]');
  if (opener) {
    const m = document.getElementById(opener.getAttribute('data-modal'));
    if (m) m.classList.add('open');
  }

  // Close a modal (backdrop or close button)
  if (e.target.closest('[data-close]')) {
    const open = document.querySelector('.modal.open');
    if (open) open.classList.remove('open');
  }

  // Open a photo-strip image in the lightbox
  const stripImg = e.target.closest('.mini-announce-strip img');
  if (stripImg) {
    const lb = document.getElementById('photoLightbox');
    if (lb) {
      const lbImg = lb.querySelector('.lightbox-img');
      lbImg.src = stripImg.src;
      lbImg.alt = stripImg.alt || '';
      lb.classList.add('open');
    }
  }

  // Close the lightbox (backdrop or close button)
  if (e.target.closest('[data-lightbox-close]')) {
    const openLb = document.querySelector('.lightbox.open');
    if (openLb) openLb.classList.remove('open');
  }
});

// Close modal / lightbox on Escape
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    const open = document.querySelector('.modal.open');
    if (open) open.classList.remove('open');
    const openLb = document.querySelector('.lightbox.open');
    if (openLb) openLb.classList.remove('open');
  }
});

// Hero sizzle reel: tap to toggle sound (plays in place, no fullscreen)
(function () {
  var reel = document.querySelector('.hero-reel video');
  if (!reel) return;
  var btn = document.querySelector('.reel-sound');
  var label = btn ? btn.querySelector('span') : null;
  function sync() {
    if (btn) btn.classList.toggle('on', !reel.muted);
    if (label) label.textContent = reel.muted ? 'Tap for sound' : 'Sound on';
  }
  function toggle() {
    reel.muted = !reel.muted;
    if (!reel.muted) { var p = reel.play(); if (p && p.catch) p.catch(function () {}); }
    sync();
  }
  reel.style.cursor = 'pointer';
  reel.addEventListener('click', toggle);
  if (btn) btn.addEventListener('click', function (e) { e.stopPropagation(); toggle(); });
  sync();
})();
