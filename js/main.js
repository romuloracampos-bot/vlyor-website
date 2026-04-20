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

// ── Active nav state ─────────────────────────────────────────────────────────
(function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  // Map each filename (or prefix) to which nav link should be highlighted
  const navMap = {
    'portal.html'      : 'portal',
    'shield.html'      : 'portfolio',
    'vital.html'       : 'portfolio',
    'pure.html'        : 'portfolio',
    'func.html'        : 'portfolio',
    'cond.html'        : 'portfolio',
    'silk.html'        : 'portfolio',
    'form.html'        : 'portfolio',
    'hydra.html'       : 'portfolio',
  };
  // Dossier pages → highlight portal
  if (path.includes('-dossier')) {
    document.querySelector('a[href="portal.html"].nav-portal')?.classList.add('nav-active');
    return;
  }
  const target = navMap[path];
  if (target === 'portal') {
    document.querySelector('a[href="portal.html"].nav-portal')?.classList.add('nav-active');
  } else if (target === 'portfolio') {
    document.querySelector('a[href="index.html#lines"]')?.classList.add('nav-active');
  }
})();

// ── Mobile dossier navigation ─────────────────────────────────────────────────
(function buildMobileDossierNav() {
  const sidebar = document.querySelector('.dos-sidebar');
  const content = document.querySelector('.dos-content, main.dos-content');
  if (!sidebar || !content) return; // not a dossier page

  // Collect all products from sidebar buttons
  const groups = [];
  let currentGroup = '';
  sidebar.querySelectorAll('.dos-sb-grp-hd, .dos-sb-btn').forEach(el => {
    if (el.classList.contains('dos-sb-grp-hd')) {
      currentGroup = el.textContent.trim();
    } else {
      // Get product name (strip tag text)
      const nameEl = el.querySelector('.dos-sb-btn-name, .dos-sb-hlb, .dos-sb-tag');
      const name = nameEl
        ? el.textContent.replace(nameEl.textContent, '').trim()
        : el.textContent.trim();
      // Get the product ID from data-dos or onclick
      const dosId = el.getAttribute('data-dos') ||
        (el.getAttribute('onclick') || '').replace(/.*showDos\('([^']+)'\).*/, '$1');
      if (dosId) groups.push({ group: currentGroup, name, dosId, isActive: el.classList.contains('active') });
    }
  });

  if (groups.length === 0) return;

  // Build the mobile nav bar
  const bar = document.createElement('div');
  bar.id = 'mob-dos-nav';
  bar.innerHTML = `
    <div class="mob-dos-label">Active</div>
    <select class="mob-dos-select" aria-label="Navigate to product">
      ${groups.map(g =>
        `<option value="${g.dosId}" ${g.isActive ? 'selected' : ''}>${g.group ? g.group + ' / ' : ''}${g.name}</option>`
      ).join('')}
    </select>
    <div class="mob-dos-arrow">↓</div>`;

  // Insert before the first panel
  const firstPanel = content.querySelector('.dos-panel');
  if (firstPanel) content.insertBefore(bar, firstPanel);

  // Navigate on change
  bar.querySelector('select').addEventListener('change', function() {
    const id = this.value;
    // Use showDos if available (newer dossiers), else the silk-style approach
    if (typeof showDos === 'function') {
      showDos(id);
    } else {
      document.querySelectorAll('.dos-panel').forEach(p => p.classList.remove('active'));
      document.querySelectorAll('.dos-sb-btn').forEach(b => {
        const bd = b.getAttribute('data-dos');
        if (bd === id) { b.classList.add('active'); }
        else { b.classList.remove('active'); }
      });
      const panel = document.getElementById('dos-' + id);
      if (panel) { panel.classList.add('active'); panel.scrollIntoView({behavior:'smooth', block:'start'}); }
    }
    // Update select to reflect active state
    const opt = bar.querySelector(`option[value="${id}"]`);
    if (opt) opt.selected = true;
  });

  // Keep select in sync when sidebar buttons are clicked on desktop
  document.querySelectorAll('.dos-sb-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-dos') ||
        (btn.getAttribute('onclick') || '').replace(/.*showDos\('([^']+)'\).*/, '$1');
      if (id) {
        const sel = bar.querySelector('select');
        if (sel) sel.value = id;
      }
    });
  });
})();
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

// ── Card image parallax ───────────────────────────────────────────────────────
(function initParallax() {
  const imgs = document.querySelectorAll('.card-img');
  if (!imgs.length) return;

  // Respect reduced-motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let ticking = false;
  function updateParallax() {
    imgs.forEach(img => {
      const rect = img.closest('.card-img-link')?.getBoundingClientRect()
                || img.getBoundingClientRect();
      const vh = window.innerHeight;
      // progress: 0 when card top hits bottom of viewport, 1 when card bottom hits top
      const progress = 1 - (rect.bottom / (vh + rect.height));
      // Shift background-position-y between 35% (card entering) and 65% (card leaving)
      const yPct = 35 + progress * 30;
      img.style.backgroundPositionY = yPct.toFixed(1) + '%';
    });
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, {passive: true});

  // Run once on load
  updateParallax();
})();
