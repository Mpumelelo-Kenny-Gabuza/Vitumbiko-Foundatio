/* Vitumbiko Foundation — minimal vanilla JS. No dependencies. */
(function () {
  'use strict';

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });
  }

  // Mark current page in nav
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav a').forEach(function (a) {
    var href = a.getAttribute('href') || '';
    if (href === path || (path === '' && href === 'index.html')) {
      a.setAttribute('aria-current', 'page');
    }
  });

  // Donation amount buttons (donate.html)
  var amountButtons = document.querySelectorAll('.amount-grid button');
  var amountInput = document.getElementById('donation-amount');
  if (amountButtons.length && amountInput) {
    amountButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        amountButtons.forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
        btn.setAttribute('aria-pressed', 'true');
        amountInput.value = btn.dataset.amount || '';
      });
    });
  }

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();