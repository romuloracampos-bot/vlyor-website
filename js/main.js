/* VLYOR Science — main.js v3.0 */
'use strict';

// NAV scroll
const nav = document.getElementById('mainnav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, {passive:true});

// Mobile menu
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');
if (burger && navLinks) {
  burger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('nav-open');
    if (open) {
      Object.assign(navLinks.style, {
        display:'flex', flexDirection:'column', position:'fixed',
        top:'60px', left:'0', right:'0', background:'rgba(13,13,13,.97)',
        padding:'2rem', gap:'1.5rem', backdropFilter:'blur(12px)',
        borderBottom:'1px solid rgba(255,255,255,.08)', zIndex:'99'
      });
    } else {
      navLinks.style.display = '';
    }
  });
}

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, {threshold:0.12, rootMargin:'0px 0px -60px 0px'});

document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));

// Add reveal to cards and stats on load
document.querySelectorAll('.card, .stat, .std').forEach((el, i) => {
  el.setAttribute('data-reveal', '');
  el.setAttribute('data-delay', String(i % 4));
  observer.observe(el);
});

// Contact form
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type=submit]');
    const original = btn.textContent;
    btn.textContent = 'Inquiry Sent ✓';
    btn.style.cssText = 'background:#065F46;color:#fff;width:100%;justify-content:center;';
    setTimeout(() => {
      btn.textContent = original;
      btn.style.cssText = '';
      form.reset();
    }, 4000);
  });
}

// Smooth scroll anchors
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});
