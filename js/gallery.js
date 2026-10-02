/* ============================================
   PataAmiga — gallery.js
   Gallery filter + lightbox
   ============================================ */

(function () {
  'use strict';

  const GALLERY = [
    {
      src: 'https://images.unsplash.com/photo-1587300003388-59208cc962cd?w=600&h=600&fit=crop&q=80',
      cap: 'Banho relaxante',
      cat: 'caes'
    },
    {
      src: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=600&fit=crop&q=80',
      cap: 'Soneca na caminha',
      cat: 'gatos'
    },
    {
      src: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=600&h=600&fit=crop&q=80',
      cap: 'Papagaio conversador',
      cat: 'exoticos'
    },
    {
      src: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=600&fit=crop&q=80',
      cap: 'Dia de creche',
      cat: 'caes'
    },
    {
      src: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=600&fit=crop&q=80',
      cap: 'Recepção acolhedora',
      cat: 'espaco'
    },
    {
      src: 'https://images.unsplash.com/photo-1504450874802-0ba2bcd2b809?w=600&h=600&fit=crop&q=80',
      cap: 'Iguana na consulta',
      cat: 'exoticos'
    },
    {
      src: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=600&fit=crop&q=80',
      cap: 'Visita ao veterinário',
      cat: 'gatos'
    },
    {
      src: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&h=600&fit=crop&q=80',
      cap: 'Petiscos e mimos',
      cat: 'espaco'
    },
    {
      src: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=600&h=600&fit=crop&q=80',
      cap: 'Tosa pronta',
      cat: 'caes'
    },
    {
      src: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=600&h=600&fit=crop&q=80',
      cap: 'Check-up preventivo',
      cat: 'exoticos'
    },
    {
      src: 'https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=600&h=600&fit=crop&q=80',
      cap: 'Passeio no parque',
      cat: 'caes'
    },
    {
      src: 'https://images.unsplash.com/photo-1544568100-847a948585b9?w=600&h=600&fit=crop&q=80',
      cap: 'Espaço de banho',
      cat: 'espaco'
    }
  ];

  const gal = document.getElementById('gal');
  const lb = document.getElementById('lb');
  const lbBig = document.getElementById('lbBig');
  const lbCap = document.getElementById('lbCap');

  if (!gal) return;

  function draw(filter) {
    gal.innerHTML = '';
    GALLERY
      .filter((g) => filter === 'todos' || g.cat === filter)
      .forEach((g) => {
        const btn = document.createElement('button');
        btn.className = 'tile';
        btn.setAttribute('aria-label', g.cap + ', ampliar');
        btn.style.backgroundImage = `url(${g.src})`;
        btn.innerHTML = `<span>${g.cap}</span>`;
        btn.onclick = () => {
          if (lbBig) lbBig.style.backgroundImage = `url(${g.src})`;
          if (lbCap) lbCap.textContent = g.cap;
          if (lb) lb.showModal();
        };
        gal.appendChild(btn);
      });
  }

  document.querySelectorAll('.chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.chip').forEach((c) => {
        c.setAttribute('aria-pressed', c === chip ? 'true' : 'false');
      });
      draw(chip.dataset.f);
    });
  });

  if (lb) {
    lb.addEventListener('click', (e) => {
      if (e.target === lb) lb.close();
    });
  }

  draw('todos');
})();
