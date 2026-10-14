/**
 * Main application entry point for Help Pendaki
 */

import { router } from './router.js';
import { getMountains } from './data.js';

// Initialize router
const container = document.getElementById('app-container');
router.setContainer(container);

// Define routes
router.on('/', async () => {
  return renderHome();
});

router.on('/mountain/:id', async (params) => {
  return renderMountain(params.id);
});

// Initial route handling
router.handleRoute();

/**
 * Render the homepage
 */
async function renderHome() {
  const mountains = await getMountains();
  
  return `
    <!-- Hero Section -->
    <section class="hero">
      <h1>Plan Your Next Summit</h1>
      <p>Discover Indonesia's most beautiful mountains. Get route info, calculate supplies, and track your hike.</p>
    </section>

    <!-- Search -->
    <div class="search-container">
      <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.3-4.3"></path>
      </svg>
      <input 
        type="text" 
        class="search-input" 
        id="mountain-search"
        placeholder="Search mountains by name or region..."
        autocomplete="off"
      >
    </div>

    <!-- Panels -->
    <div class="panels">
      <button class="panel-btn" data-panel="about">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 16v-4"></path>
          <path d="M12 8h.01"></path>
        </svg>
        About
      </button>
      <button class="panel-btn" data-panel="rate">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
        Rate the App
      </button>
      <button class="panel-btn" data-panel="help">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 20V10"></path>
          <path d="M12 20V4"></path>
          <path d="M6 20v-6"></path>
        </svg>
        Help Center
      </button>
    </div>

    <!-- Panel Contents -->
    <div class="panel-content" id="panel-about">
      <h2>About Help Pendaki</h2>
      <p>Help Pendaki is a web application designed to help hikers plan and prepare for mountain trips in Indonesia. We provide:</p>
      <ul style="margin: 1rem 0; padding-left: 1.5rem;">
        <li>Detailed mountain information and routes</li>
        <li>GPX file analysis with distance, elevation, and time estimates</li>
        <li>Supply calculators for food, water, and equipment</li>
        <li>Interactive packing checklists</li>
        <li>Live GPS tracking during your hike</li>
      </ul>
      <p>All data is sourced from official park authorities and verified by the hiking community.</p>
    </div>

    <div class="panel-content" id="panel-rate">
      <h2>Rate the App</h2>
      <p>How would you rate your experience with Help Pendaki?</p>
      <div class="rating-stars" style="margin: 1rem 0;">
        ${[1, 2, 3, 4, 5].map(star => `
          <button class="star-btn" data-rating="${star}" style="
            background: none;
            border: none;
            font-size: 2rem;
            cursor: pointer;
            color: ${getStoredRating() >= star ? '#F59E0B' : '#D1D5DB'};
          ">★</button>
        `).join('')}
      </div>
      <p id="rating-message" style="color: var(--color-muted-foreground); font-size: 0.9rem;">
        ${getStoredRating() > 0 ? `Thanks for rating us ${getStoredRating()} stars!` : 'Click a star to rate'}
      </p>
    </div>

    <div class="panel-content" id="panel-help">
      <h2>Help Center</h2>
      <h3 style="margin-top: 1rem; color: var(--color-primary);">Getting Started</h3>
      <p>Browse the mountain list and click on any mountain to view detailed information, routes, and logistics.</p>
      
      <h3 style="margin-top: 1rem; color: var(--color-primary);">GPX Files</h3>
      <p>On the Routes tab, you can upload a GPX file to see the track on a map and elevation profile. We calculate distance, ascent, descent, and estimated hiking time.</p>
      
      <h3 style="margin-top: 1rem; color: var(--color-primary);">Supplies Calculator</h3>
      <p>The Logistics tab helps you calculate food, water, and equipment needs based on group size and trip duration.</p>
      
      <h3 style="margin-top: 1rem; color: var(--color-primary);">GPS Tracking</h3>
      <p>Allow location access to see your current position on the route map during your hike.</p>
    </div>

    <!-- Mountain List -->
    <section class="mountains-section">
      <div class="section-header">
        <h2>Mountains</h2>
        <span class="mountain-count" id="mountain-count">${mountains.length} mountains</span>
      </div>
      <div class="mountain-grid" id="mountain-list">
        ${mountains.map(mountain => renderMountainCard(mountain)).join('')}
      </div>
    </section>
  `;
}

/**
 * Render a mountain card
 */
function renderMountainCard(mountain) {
  const difficulty = getDifficulty(mountain.heightM.value);
  const difficultyClass = `tag-difficulty-${difficulty}`;
  
  return `
    <article class="mountain-card" onclick="window.location.hash='#/mountain/${mountain.id}'">
      <h3>${mountain.name}</h3>
      <div class="mountain-meta">
        <span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          ${mountain.region.value}
        </span>
        <span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
          </svg>
          ${mountain.heightM.value} m
        </span>
      </div>
      <p class="mountain-description">${mountain.description.value}</p>
      <div class="mountain-tags">
        <span class="tag ${difficultyClass}">${difficulty}</span>
        <span class="tag">${mountain.defaultDays.value} days</span>
        <span class="tag">${mountain.routes.length} route${mountain.routes.length > 1 ? 's' : ''}</span>
      </div>
    </article>
  `;
}

/**
 * Determine difficulty based on height
 */
function getDifficulty(heightStr) {
  const height = parseInt(heightStr.replace(/,/g, ''));
  if (height < 2000) return 'easy';
  if (height < 3000) return 'moderate';
  return 'hard';
}

/**
 * Get stored rating from localStorage
 */
function getStoredRating() {
  try {
    return parseInt(localStorage.getItem('app-rating')) || 0;
  } catch {
    return 0;
  }
}

/**
 * Store rating in localStorage
 */
function storeRating(rating) {
  try {
    localStorage.setItem('app-rating', rating.toString());
  } catch (e) {
    console.warn('Could not store rating:', e);
  }
}

/**
 * Render mountain detail page (placeholder)
 */
async function renderMountain(id) {
  const { getMountain } = await import('./data.js');
  const mountain = await getMountain(id);
  
  if (!mountain) {
    return `
      <div class="error">
        <h2>Mountain Not Found</h2>
        <p>The mountain you're looking for doesn't exist.</p>
        <a href="#/" class="btn-primary">Go Home</a>
      </div>
    `;
  }
  
  return `
    <div style="padding: 2rem 0;">
      <a href="#/" class="btn-ghost" style="margin-bottom: 1rem; display: inline-flex;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 4px;">
          <path d="m15 18-6-6 6-6"></path>
        </svg>
        Back to Mountains
      </a>
      <h1 style="font-size: 2rem; margin-bottom: 0.5rem;">${mountain.name}</h1>
      <p style="color: var(--color-muted-foreground); margin-bottom: 2rem;">
        ${mountain.region.value} • ${mountain.heightM.value} m
      </p>
      
      <div style="background: var(--color-card); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 2rem;">
        <h2 style="color: var(--color-primary); margin-bottom: 1rem;">Coming Soon</h2>
        <p>The detailed mountain page with Info, Routes, and Logistics tabs is under development.</p>
        <p style="margin-top: 1rem; color: var(--color-muted-foreground);">
          Check back soon for GPX upload, route visualization, supply calculator, and more!
        </p>
      </div>
    </div>
  `;
}

// Initialize view scripts after route changes
window.addEventListener('view-loaded', (e) => {
  if (e.detail.route === '/') {
    initHomePage();
  }
});

/**
 * Initialize homepage interactivity
 */
function initHomePage() {
  // Search functionality
  const searchInput = document.getElementById('mountain-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      filterMountains(e.target.value);
    });
  }

  // Panel toggles
  document.querySelectorAll('.panel-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const panelId = btn.dataset.panel;
      togglePanel(panelId, btn);
    });
  });

  // Rating stars
  document.querySelectorAll('.star-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const rating = parseInt(btn.dataset.rating);
      storeRating(rating);
      updateStarDisplay(rating);
      
      const message = document.getElementById('rating-message');
      if (message) {
        message.textContent = `Thanks for rating us ${rating} stars!`;
      }
    });
  });
}

/**
 * Filter mountains based on search query
 */
function filterMountains(query) {
  const cards = document.querySelectorAll('.mountain-card');
  const countEl = document.getElementById('mountain-count');
  let visible = 0;
  
  const lowerQuery = query.toLowerCase();
  
  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    if (text.includes(lowerQuery)) {
      card.style.display = '';
      visible++;
    } else {
      card.style.display = 'none';
    }
  });
  
  if (countEl) {
    countEl.textContent = `${visible} mountain${visible !== 1 ? 's' : ''}`;
  }
}

/**
 * Toggle panel visibility
 */
function togglePanel(panelId, btn) {
  const panel = document.getElementById(`panel-${panelId}`);
  if (!panel) return;

  // Close all panels
  document.querySelectorAll('.panel-content').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.panel-btn').forEach(b => b.classList.remove('active'));

  // Open clicked panel if it wasn't already open
  if (!panel.classList.contains('active')) {
    panel.classList.add('active');
    btn.classList.add('active');
  }
}

/**
 * Update star display
 */
function updateStarDisplay(rating) {
  document.querySelectorAll('.star-btn').forEach(btn => {
    const starRating = parseInt(btn.dataset.rating);
    btn.style.color = starRating <= rating ? '#F59E0B' : '#D1D5DB';
  });
}
