/* ============================================
   PataAmiga — main.js
   Theme, mobile menu, FAQ, form
   ============================================ */

(function () {
  'use strict';

  /* ---------- Theme ---------- */
  const themeBtn = document.getElementById('themeBtn');
  const root = document.documentElement;

  function applyTheme(t) {
    if (t === 'dark') {
      root.setAttribute('data-theme', 'dark');
      if (themeBtn) themeBtn.textContent = '☀️';
    } else {
      root.setAttribute('data-theme', 'light');
      if (themeBtn) themeBtn.textContent = '🌙';
    }
    localStorage.setItem('pata-theme', t);
  }

  const saved = localStorage.getItem('pata-theme');
  if (saved) {
    applyTheme(saved);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme('dark');
  } else {
    applyTheme('light');
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  }

  /* ---------- Mobile menu ---------- */
  const menuBtn = document.getElementById('menuBtn');
  const mobileNav = document.getElementById('mobileNav');

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open);
      menuBtn.textContent = open ? '✕' : '☰';
      document.body.style.overflow = open ? 'hidden' : '';
    });

    mobileNav.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.textContent = '☰';
        document.body.style.overflow = '';
      });
    });
  }

  /* ---------- Active nav link ---------- */
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a:not(.btn), .mobile-nav a:not(.btn)').forEach((a) => {
    const href = a.getAttribute('href');
    if (!href) return;
    const page = href.split('/').pop();
    if (page === path || (path === '' && page === 'index.html')) {
      a.classList.add('cur');
    }
  });

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll('.faq-item button').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const isOpen = item.hasAttribute('open');
      document.querySelectorAll('.faq-item').forEach((i) => {
        i.removeAttribute('open');
        i.querySelector('button').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.setAttribute('open', '');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ---------- Contact form ---------- */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const nome = this.nome.value.trim();
      if (!nome) {
        this.nome.focus();
        return;
      }
      this.reset();
      const ok = document.getElementById('ok');
      if (ok) {
        ok.classList.add('show');
        setTimeout(() => ok.classList.remove('show'), 5000);
      }
    });
  }
})();
