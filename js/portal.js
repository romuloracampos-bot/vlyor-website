/* VLYOR Portal JS v3.0 */
'use strict';

// Nav scroll (already scrolled on portal)
const nav = document.getElementById('mainnav');
if (nav) nav.classList.add('scrolled');

// Sidebar active link on scroll
const sections = document.querySelectorAll('.p-section[id]');
const links = document.querySelectorAll('.sb-link[href^="#"]');

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      links.forEach(l => l.classList.remove('active'));
      const link = document.querySelector(`.sb-link[href="#${e.target.id}"]`);
      if (link) link.classList.add('active');
    }
  });
}, {threshold:0.3});

sections.forEach(s => io.observe(s));

// Request buttons — link to contact
document.querySelectorAll('.p-req').forEach(btn => {
  btn.addEventListener('click', () => {
    window.location.href = 'index.html#contact';
  });
});
