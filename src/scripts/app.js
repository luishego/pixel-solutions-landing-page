import { copy, servicesByLang, projectsByLang } from '../data/content.js';

const root = document.documentElement;

function detectLang() {
  const nav = (navigator.language || 'es').toLowerCase();
  return nav.indexOf('en') === 0 ? 'en' : 'es';
}

function applyMode() {
  const h = new Date().getHours();
  const mode = (h >= 6 && h < 18) ? 'light' : 'dark';
  root.setAttribute('data-theme', mode);
}

function esc(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function render() {
  const lang = detectLang();
  const t = copy[lang];
  const services = servicesByLang[lang];
  const projects = projectsByLang[lang];

  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    if (t[key] != null) el.textContent = t[key];
  });
  document.title = t.heroTitle + ' — pixelSolutions';

  const servicesGrid = document.getElementById('services-grid');
  servicesGrid.innerHTML = services.map(s => `
    <div>
      <div class="dot" style="background:var(--\${s.color})"></div>
      <h3 class="service-title">\${esc(s.title)}</h3>
      <p class="service-desc">\${esc(s.desc)}</p>
    </div>
  `).join('');

  const list = document.getElementById('projects-list');
  list.innerHTML = projects.map(p => `
    <div class="project-row" data-id="\${p.id}" tabindex="0" role="button">
      <div class="project-img" style="background-image:url('/images/\${p.img}')">
        <span class="project-img-fallback">\${esc(p.imgPlaceholder)}</span>
      </div>
      <div class="project-body">
        <span class="tag">\${esc(p.tag)}</span>
        <h3 class="project-name">\${esc(p.name)}</h3>
        <p class="project-summary">\${esc(p.summary)}</p>
        <span class="view-more">\${esc(t.viewMore)} →</span>
      </div>
    </div>
  `).join('');

  list.querySelectorAll('.project-row').forEach(row => {
    row.addEventListener('click', () => openModal(row.dataset.id, lang));
    row.addEventListener('keydown', e => { if (e.key === 'Enter') openModal(row.dataset.id, lang); });
  });

  function openModal(id, lang) {
    const p = projectsByLang[lang].find(x => x.id === id);
    if (!p) return;
    const modal = document.getElementById('project-modal');
    modal.querySelector('.modal-img').style.backgroundImage = `url('/images/\${p.img}')`;
    modal.querySelector('.modal-img-fallback').textContent = p.imgPlaceholder;
    modal.querySelector('.modal-tag').textContent = p.tag;
    modal.querySelector('.modal-name').textContent = p.name;
    modal.querySelector('.modal-role').textContent = p.role;
    modal.querySelector('.modal-detail').textContent = p.detail;
    modal.querySelector('.modal-stack').innerHTML = p.stack.map(s => `<span class="stack-chip">\${esc(s)}</span>`).join('');
    const link = modal.querySelector('.modal-link');
    link.href = p.link;
    link.textContent = p.linkLabel + ' →';
    modal.classList.add('open');
  }

  document.getElementById('modal-backdrop').addEventListener('click', closeModal);
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.querySelector('.modal-card').addEventListener('click', e => e.stopPropagation());

  function closeModal() {
    document.getElementById('project-modal').classList.remove('open');
  }
}

applyMode();
setInterval(applyMode, 60000);
render();