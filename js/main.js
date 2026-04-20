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

// ── Scroll reveal ────────────────────────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, {threshold:0.10, rootMargin:'0px 0px -50px 0px'});

document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));

// Auto-reveal: homepage elements
document.querySelectorAll('.card, .stat, .std').forEach((el, i) => {
  el.setAttribute('data-reveal', '');
  el.setAttribute('data-delay', String(i % 4));
  observer.observe(el);
});

// Auto-reveal: line pages (sh-* elements) and dossier elements
document.querySelectorAll([
  '.sh-in',          // intro stat blocks
  '.sh-comm-body',   // editorial body paragraphs
  '.sh-quote',       // pull quotes
  '.sh-form-card',   // formulation system cards
  '.sh-reg-card',    // regulatory cards
  '.sh-perf-card',   // performance cards (inside active panel only)
  '.bar-row',        // chart bar rows
  '.proc-step',      // process steps
  '.manif-p',        // manifesto paragraphs
  '.dos-metric',     // dossier metric blocks
  '.dos-mech',       // mechanism blocks
  '.dos-perf-card',  // dossier performance cards
].join(',')).forEach((el, i) => {
  if (!el.hasAttribute('data-reveal')) {
    el.setAttribute('data-reveal', '');
    el.setAttribute('data-delay', String(i % 4));
    observer.observe(el);
  }
});

// ── Animated number counter ──────────────────────────────────────────────────
function animateCounter(el) {
  const raw   = el.textContent.trim();
  // Match: optional prefix, a number (int or decimal), optional suffix
  const match = raw.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
  if (!match) return;
  const prefix = match[1];
  const target = parseFloat(match[2]);
  const suffix = match[3];
  const isDecimal = match[2].includes('.');
  const decimals  = isDecimal ? match[2].split('.')[1].length : 0;
  const duration  = 1200; // ms
  const start     = performance.now();

  function tick(now) {
    const elapsed  = Math.min(now - start, duration);
    const progress = 1 - Math.pow(1 - elapsed / duration, 3); // ease-out cubic
    const current  = target * progress;
    el.textContent = prefix + current.toFixed(decimals) + suffix;
    if (elapsed < duration) requestAnimationFrame(tick);
    else el.textContent = prefix + target.toFixed(decimals) + suffix;
  }
  requestAnimationFrame(tick);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounter(e.target);
      counterObserver.unobserve(e.target);
    }
  });
}, {threshold:0.5});

// Apply to: sh-stat-n (line page big numbers), sh-in-n (intro block numbers),
// dos-metric-val (dossier metric values)
document.querySelectorAll('.sh-stat-n, .sh-in-n, .dos-metric-val').forEach(el => {
  // Only animate if it starts with a digit or common numeric prefix
  if (/^[0-9<>~]/.test(el.textContent.trim())) {
    counterObserver.observe(el);
  }
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
