/**
 * BLANKA — INDIE GAMER PORTFOLIO
 * Main JavaScript Controller
 * Clean, modular Vanilla JavaScript.
 */

'use strict';

/* ==========================================================================
   CONFIGURABLE PORTFOLIO DATA
   Blanka can edit this section directly to customize projects and links!
   ========================================================================== */

const PROFILE_CONFIG = {
  name: 'BLANKA',
  role: 'Indie Gamer & Creative Enthusiast',
  status: 'CURRENT STATUS: EXPLORING NEW WORLDS',
  email: 'blanka.creative@example.com',
  socials: [
    {
      name: 'itch.io',
      url: 'https://itch.io', // Replace with real itch.io profile
      ariaLabel: 'Blanka on itch.io'
    },
    {
      name: 'Steam',
      url: 'https://store.steampowered.com', // Replace with real Steam community profile
      ariaLabel: 'Blanka on Steam'
    },
    {
      name: 'GitHub',
      url: 'https://github.com', // Replace with real GitHub profile
      ariaLabel: 'Blanka on GitHub'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com', // Replace with real LinkedIn profile
      ariaLabel: 'Blanka on LinkedIn'
    }
  ]
};

/**
 * Projects Array
 * To add a new project, simply copy an object block and modify values!
 */
const PROJECTS_DATA = [
  {
    id: 1,
    number: '01',
    title: 'Game Discovery',
    category: 'Gaming / Exploration',
    badge: 'CONCEPT ARCHIVE',
    image: 'assets/images/project-1.jpg',
    description: 'Exploring imaginative game worlds, mechanics, and the experiences that make players want to keep discovering.',
    extendedDescription: 'An exploratory study focusing on environmental storytelling, diegetic world design, and how hidden routes foster authentic curiosity. This project maps recurring motifs across contemporary indie titles and examines player autonomy.',
    tags: ['World Exploration', 'Level Analysis', 'Environmental Storytelling'],
    projectUrl: '#' // Replace with real project URL or playable demo link
  },
  {
    id: 2,
    number: '02',
    title: 'Interactive Experiments',
    category: 'Creative Experiments',
    badge: 'CONCEPT ARCHIVE',
    image: 'assets/images/project-2.jpg',
    description: 'Small creative explorations inspired by interactive storytelling, game interfaces, and playful digital experiences.',
    extendedDescription: 'A series of creative coding experiments blending audio waveforms with wireframe physics simulations. Built to examine how tactile feedback and minimalist gaming UI elements evoke digital nostalgia.',
    tags: ['Shader Art', 'Soundwave Physics', 'Creative Code'],
    projectUrl: '#' // Replace with real project URL or playable demo link
  },
  {
    id: 3,
    number: '03',
    title: 'My Gaming Universe',
    category: 'Personal Project',
    badge: 'CONCEPT ARCHIVE',
    image: 'assets/images/project-3.jpg',
    description: 'A collection of gaming interests, visual inspirations, and experiments that reflect my evolving creative journey.',
    extendedDescription: 'A curated visual archive capturing the evolution of indie game aesthetics — spanning pixel art, low-poly landscapes, and atmospheric soundtracks that have shaped my creative outlook.',
    tags: ['Indie Curation', 'Visual Diary', 'Archive'],
    projectUrl: '#' // Replace with real project URL or playable demo link
  }
];

/* ==========================================================================
   APP INITIALIZATION & CONTROLLERS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initDynamicYear();
  initProjects();
  initNavigation();
  initScrollSpy();
  initScrollReveals();
  initHeroParallax();
  initContactActions();
  initProjectModal();
});

/**
 * Dynamically updates current year in footer
 */
function initDynamicYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/**
 * Renders the projects list into the grid
 */
function initProjects() {
  const grid = document.getElementById('project-grid');
  if (!grid) return;

  // Clear fallback and inject cleanly
  grid.innerHTML = '';

  PROJECTS_DATA.forEach((project, index) => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.setAttribute('data-project-id', project.id);
    card.setAttribute('data-reveal', '');
    card.setAttribute('data-reveal-delay', (index * 100).toString());

    const tagsHtml = project.tags
      .map(tag => `<span class="tag">${escapeHtml(tag)}</span>`)
      .join('');

    card.innerHTML = `
      <div class="project-thumb-wrap">
        <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)} — ${escapeHtml(project.category)}" class="project-thumb" loading="lazy">
        <div class="project-thumb-tag">${escapeHtml(project.badge)}</div>
      </div>
      <div class="project-body">
        <div class="project-meta">
          <span class="project-category">${escapeHtml(project.category)}</span>
          <span class="project-number">${escapeHtml(project.number)}</span>
        </div>
        <h3 class="project-title">${escapeHtml(project.title)}</h3>
        <p class="project-desc">${escapeHtml(project.description)}</p>
        <div class="project-tags">
          ${tagsHtml}
        </div>
        <button type="button" class="btn btn-outline btn-project-view" data-action="view-project" data-index="${index}" aria-label="View details for ${escapeHtml(project.title)}">
          <span>View Project</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </button>
      </div>
    `;

    grid.appendChild(card);
  });
}

/**
 * Navigation Bar, Mobile Drawer, and Smooth Scrolling
 */
function initNavigation() {
  const header = document.getElementById('header');
  const toggleBtn = document.getElementById('mobile-toggle');
  const closeBtn = document.getElementById('mobile-close');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-cta');

  // Sticky Header Effect on Scroll
  const handleScroll = () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Mobile Menu Drawer Controls
  const openMenu = () => {
    if (!mobileNav || !toggleBtn) return;
    mobileNav.hidden = false;
    // Timeout to allow display change before transition
    requestAnimationFrame(() => {
      mobileNav.classList.add('open');
      toggleBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      closeBtn?.focus();
    });
  };

  const closeMenu = () => {
    if (!mobileNav || !toggleBtn) return;
    mobileNav.classList.remove('open');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    setTimeout(() => {
      mobileNav.hidden = true;
    }, 300);
    toggleBtn.focus();
  };

  toggleBtn?.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  closeBtn?.addEventListener('click', closeMenu);

  // Close when clicking mobile nav links
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav && !mobileNav.hidden) {
      closeMenu();
    }
  });
}

/**
 * Scrollspy to highlight active nav link as user scrolls
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/**
 * Scroll Reveal Animations using IntersectionObserver
 */
function initScrollReveals() {
  // Check if reduced motion is preferred
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealElements = document.querySelectorAll('[data-reveal]');

  if (prefersReducedMotion) {
    revealElements.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  });

  revealElements.forEach(el => observer.observe(el));
}

/**
 * Subtle interactive mouse parallax tilt for Hero HUD frame on Desktop
 */
function initHeroParallax() {
  const hudFrame = document.getElementById('hero-hud-frame');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!hudFrame || prefersReducedMotion || window.innerWidth < 1024) return;

  let ticking = false;

  const onMouseMove = (e) => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const rect = hudFrame.getBoundingClientRect();
        const frameX = rect.left + rect.width / 2;
        const frameY = rect.top + rect.height / 2;
        
        const deltaX = (e.clientX - frameX) / (window.innerWidth / 2);
        const deltaY = (e.clientY - frameY) / (window.innerHeight / 2);

        // Constrained subtle tilt
        const rotateX = (-deltaY * 5).toFixed(2);
        const rotateY = (deltaX * 5).toFixed(2);

        hudFrame.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        ticking = false;
      });
      ticking = true;
    }
  };

  const onMouseLeave = () => {
    hudFrame.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

  window.addEventListener('mousemove', onMouseMove, { passive: true });
  document.addEventListener('mouseleave', onMouseLeave);
}

/**
 * Contact Actions: Copy Email to clipboard with toast notification
 */
function initContactActions() {
  const copyBtn = document.getElementById('copy-email-btn');
  const toast = document.getElementById('toast-notification');
  const toastMsg = document.getElementById('toast-message');

  if (!copyBtn) return;

  copyBtn.addEventListener('click', async () => {
    const emailToCopy = PROFILE_CONFIG.email;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(emailToCopy);
      } else {
        // Fallback for non-https or unsupported environments
        const textArea = document.createElement('textarea');
        textArea.value = emailToCopy;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }

      showToast(`Copied to clipboard: ${emailToCopy}`);
    } catch (err) {
      console.warn('Clipboard write error:', err);
      showToast(`Email: ${emailToCopy}`);
    }
  });

  let toastTimer = null;
  function showToast(message) {
    if (!toast) return;
    if (toastMsg) toastMsg.textContent = message;
    toast.classList.add('active');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('active');
    }, 3400);
  }
}

/**
 * Interactive Project Preview Modal
 */
function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const closeAltBtn = document.getElementById('modal-close-alt');
  const modalImg = document.getElementById('modal-project-img');
  const modalTitle = document.getElementById('modal-project-title');
  const modalDesc = document.getElementById('modal-project-desc');
  const modalCategory = document.getElementById('modal-category');
  const modalBadge = document.getElementById('modal-badge');
  const modalTagsContainer = document.getElementById('modal-tags-container');
  const modalActionBtn = document.getElementById('modal-action-btn');

  let lastActiveElement = null;

  const openProjectModal = (index) => {
    const project = PROJECTS_DATA[index];
    if (!project || !modal) return;

    lastActiveElement = document.activeElement;

    // Fill modal content
    if (modalImg) {
      modalImg.src = project.image;
      modalImg.alt = `${project.title} detailed visual`;
    }
    if (modalTitle) modalTitle.textContent = project.title;
    if (modalDesc) modalDesc.textContent = project.extendedDescription || project.description;
    if (modalCategory) modalCategory.textContent = `${project.category} // ${project.number}`;
    if (modalBadge) modalBadge.textContent = project.badge;

    if (modalTagsContainer) {
      modalTagsContainer.innerHTML = project.tags
        .map(tag => `<span class="tag">${escapeHtml(tag)}</span>`)
        .join('');
    }

    if (modalActionBtn) {
      modalActionBtn.href = project.projectUrl;
      modalActionBtn.setAttribute('aria-label', `Visit ${project.title} external link`);
    }

    modal.hidden = false;
    requestAnimationFrame(() => {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      closeBtn?.focus();
    });
  };

  const closeProjectModal = () => {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => {
      modal.hidden = true;
    }, 280);

    if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
      lastActiveElement.focus();
    }
  };

  // Delegate click for 'View Project' buttons
  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-action="view-project"]');
    if (target) {
      const index = parseInt(target.getAttribute('data-index'), 10);
      if (!isNaN(index)) {
        openProjectModal(index);
      }
    }
  });

  closeBtn?.addEventListener('click', closeProjectModal);
  closeAltBtn?.addEventListener('click', closeProjectModal);

  // Close when clicking on backdrop outside modal window
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeProjectModal();
    }
  });

  // Close on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.hidden) {
      closeProjectModal();
    }
  });
}

/**
 * Escapes HTML characters to prevent XSS
 */
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
