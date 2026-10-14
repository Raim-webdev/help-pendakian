import { getMountains } from './data.js';

async function init() {
  const mountains = await getMountains();
  renderMountainList(mountains);
  initSearch(mountains);
}

function renderMountainList(mountains) {
  const list = document.getElementById('mountain-list');
  if (!list) return;
  
  list.innerHTML = mountains.map(m => {
    const height = parseInt(m.heightM.value.replace(/,/g, ''));
    const diff = height < 2000 ? 'easy' : height < 3000 ? 'moderate' : 'hard';
    const diffLabel = diff.charAt(0).toUpperCase() + diff.slice(1);
    
    return `
      <div class="mountain-item" data-name="${m.name.toLowerCase()}" data-region="${m.region.value.toLowerCase()}">
        <div class="mountain-name">${m.name}</div>
        <div class="mountain-meta">${m.region.value}</div>
        <div class="mountain-elevation">${m.heightM.value} m</div>
        <div class="mountain-meta" title="${diffLabel}">
          <span class="mountain-difficulty difficulty-${diff}"></span>
        </div>
      </div>
    `;
  }).join('');
  
  // Add click handlers
  list.querySelectorAll('.mountain-item').forEach((item, i) => {
    item.addEventListener('click', () => {
      window.location.hash = `#/mountain/${mountains[i].id}`;
    });
  });
}

function initSearch(mountains) {
  const input = document.getElementById('mountain-search');
  if (!input) return;
  
  input.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const items = document.querySelectorAll('.mountain-item');
    let visible = 0;
    
    items.forEach(item => {
      const name = item.dataset.name;
      const region = item.dataset.region;
      const match = name.includes(query) || region.includes(query);
      item.style.display = match ? '' : 'none';
      if (match) visible++;
    });
    
    const countEl = document.querySelector('.mountain-count');
    if (countEl) countEl.textContent = `${visible} peak${visible !== 1 ? 's' : ''}`;
  });
}

window.scrollToSection = function(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

init();
