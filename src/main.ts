import './style.css'

// Character Data
const characters = [
  { name: "Leah", role: "Protagonista", desc: "A 'menina do cabelo de uva'. Luta contra neblinas mentais e traumas fragmentados.", sprite: "images/game/leah.png", status: "active" },
  { name: "Maya", role: "A Luz", desc: "Melhor amiga de infância. Representa a alegria e a inocência do passado.", sprite: "images/game/maya.png", status: "active" },
  { name: "Madalena", role: "O Pilar", desc: "Mãe de Leah. Rígida e autoritária, protege segredos sob uma fachada de cuidado.", sprite: "images/game/madalena.png", status: "active" },
  { name: "Demetrius", role: "O Silêncio", desc: "Pai de Leah. Rude e indiferente, sua presença é um fardo constante na família.", sprite: "images/game/demetrius.png", status: "active" },
  { name: "Crystal", role: "A Inveja", desc: "Líder das bullies. Usa o poder para calar suas próprias inseguranças.", sprite: "", status: "placeholder" },
  { name: "Amélie", role: "A Sombra", desc: "Fiel a Crystal. Cruel e oportunista, encontra prazer em diminuir os outros.", sprite: "", status: "placeholder" },
  { name: "Anne", role: "A Dúvida", desc: "Seguidora do trio, mas com lampejos de empatia que não ousa expressar.", sprite: "", status: "placeholder" }
];

// Gameplay Mechanics Data
const mechanics = [
  { title: "Sistema de Sanidade", desc: "A sanidade de Leah flutua conforme o ambiente e eventos. Quedas drásticas alteram a percepção visual do jogo.", icon: "🧠" },
  { title: "Nível de Felicidade", desc: "Interações positivas e cuidados pessoais (como arrumar o quarto) restauram esse pilar essencial.", icon: "✨" },
  { title: "Ciclo de Rotina", desc: "Gerencie o tempo entre Manhã, Tarde e Noite. Suas escolhas diárias impactam o progresso da história.", icon: "⏰" },
  { title: "Eventos Aleatórios", desc: "A cada transição de área, eventos únicos testam sua ética e podem mudar seus recursos financeiros.", icon: "🎭" }
];

// Technical Specs Data
const techSpecs = [
  { category: "Engine", value: "Ren'Py 8.1.3 (Python 3.9)" },
  { category: "Framework Web", value: "Vite + TypeScript" },
  { category: "Sistemas Custom", value: "Advanced Event Engine & Inventory" },
  { category: "Inovação", value: "UX Narrativa Baseada em Estados Emocionais" }
];

// Roadmap Data
const roadmap = [
  { phase: "Prólogo", status: "Concluído", desc: "A introdução ao vazio mental de Leah." },
  { phase: "Capítulo 1", status: "Em Revisão", desc: "Primeiras interações na Escola e no Quarto." },
  { phase: "Capítulo 2", status: "Em Desenvolvimento", desc: "Aprofundamento dos conflitos familiares." },
  { phase: "Efeitos sonoros e músicas", status: "Em Planejamento", desc: "Desenvolvimento da trilha sonora e efeitos ambientais." }
];

// World Map Data
const locations = [
  { id: "casa", name: "Casa da Leah", desc: "Onde o silêncio de Demetrius e o controle de Madalena se encontram.", icon: "🏠", top: "75%", left: "55%" },
  { id: "escola", name: "Escola", desc: "O campo de batalha social onde Crystal domina.", icon: "🏫", top: "25%", left: "40%" },
  { id: "hospital", name: "Hospital", desc: "Lugar de memórias traumáticas e cheiros de éter.", icon: "🏥", top: "15%", left: "65%" },
  { id: "loja", name: "Loja", desc: "Um breve refúgio para adquirir itens que acalmam a mente.", icon: "🛒", top: "60%", left: "70%" }
];

// Inventory / Emotions Data
const items = [
  { name: "Café Quente", effect: "+10 Felicidade", cost: "$5", desc: "Um pequeno conforto em manhãs frias." },
  { name: "Diário", effect: "+15 Sanidade", cost: "Inicial", desc: "O único lugar onde Leah pode ser ela mesma." },
  { name: "Remédios", effect: "+30 Sanidade", cost: "$20", desc: "Silenciam as vozes, mas nublam a visão." }
];

// Gallery Data
const gallery = [
  { src: "images/game/park.jpg", title: "O Parque" },
  { src: "images/game/dark_park.jpg", title: "O Parque (Caótico)" },
  { src: "images/game/cozinha.png", title: "Cozinha da Família" },
  { src: "images/game/main_menu_bg.png", title: "Menu Principal" }
];

/**
 * Team Data
 * Professional profiles for the core contributors.
 */
const team = [
  {
    name: "Carlos Silva",
    role: "Fundador & Lead Developer",
    bio: "Gerencia a visão estratégica, planos de inovação e documentação técnica. Responsável pelo desenvolvimento do motor de jogo, arquitetura do site e integração de sistemas essenciais.",
    specialty: "Gestão, Full-stack Dev & Game Logic"
  },
  {
    name: "Giovana Leite",
    role: "Diretora Criativa & Roteirista",
    bio: "Lidera a alma artística de Dead in Live. Desenvolve a narrativa psicológica, roteiros detalhados, direção de arte e ambientação sonora, transformando ideias em experiências imersivas.",
    specialty: "Narrativa, Audio Design & Ilustração"
  }
];

// Rendering Logic
const renderView = (viewId: string) => {
  const app = document.querySelector<HTMLDivElement>('#app')!;

  // Base Layout (Shared)
  const baseLayout = `
    <div class="void-container">
      <div class="nebula-blob blob-1"></div>
      <div class="nebula-blob blob-2"></div>
      <div class="nebula-blob blob-3"></div>
      <div id="shards-container"></div>
    </div>
    
    <main class="site-container">
      <nav class="navbar">
        <div class="nav-logo" onclick="window.location.hash='#home'">Dead in Live</div>
        <div class="nav-links">
          <a href="#home" class="${viewId === 'home' ? 'active' : ''}">Início</a>
          <a href="#gameplay" class="${viewId === 'gameplay' ? 'active' : ''}">Gameplay</a>
          <a href="#map" class="${viewId === 'map' ? 'active' : ''}">Mapa</a>
          <a href="#gallery" class="${viewId === 'gallery' ? 'active' : ''}">Atmosfera</a>
          <a href="#technical" class="${viewId === 'technical' ? 'active' : ''}">Técnico</a>
          <a href="#team" class="${viewId === 'team' ? 'active' : ''}">Equipe</a>
        </div>
      </nav>
      <div id="content-mount"></div>
    </main>
  `;

  if (!app.innerHTML.includes('site-container')) {
    app.innerHTML = baseLayout;
    initShards();
    initScrollLogic();
  }

  const mount = document.getElementById('content-mount')!;
  mount.innerHTML = getViewContent(viewId);

  // Re-trigger visual states
  setTimeout(() => {
    document.querySelectorAll('section').forEach(section => {
      section.classList.add('visible');
    });
  }, 100);
};

const getViewContent = (id: string) => {
  switch (id) {
    case 'gameplay':
      return `
        <section class="sub-page">
          <div class="section-header">
            <h1 class="section-title">Gameplay Detalhada</h1>
            <div class="title-underline"></div>
          </div>
          <div class="gameplay-grid">
            ${mechanics.map(m => `
              <div class="mechanic-card glass-card">
                <div class="mech-icon">${m.icon}</div>
                <h3>${m.title}</h3>
                <p>${m.desc}</p>
              </div>
            `).join('')}
          </div>
          <div class="gameplay-analysis glass-card">
            <h2>Gestão de Estados</h2>
            <p>Em <em>Dead in Live</em>, a narrativa não é estática. O motor de jogo monitora constantemente o equilíbrio entre a <strong>Sanidade</strong> (estabilidade mental) e a <strong>Felicidade</strong> (satisfação momentânea). Decisões como comer com a família ou estudar na biblioteca não são apenas 'flavor text'; elas recalibram o destino de Leah.</p>
          </div>
          
          <div class="section-header" style="margin-top: 80px;">
            <h2 class="section-title" style="font-size: 3rem;">Inventário de Emoções</h2>
          </div>
          <div class="inventory-grid">
            ${items.map(item => `
              <div class="item-card glass-card">
                <h3>${item.name}</h3>
                <span class="item-effect">${item.effect}</span>
                <p>${item.desc}</p>
                <div class="item-footer">
                  <span>Custo: ${item.cost}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </section>
      `;
    case 'technical':
      return `
        <section class="sub-page">
          <div class="section-header">
            <h1 class="section-title">Ficha Técnica</h1>
            <div class="title-underline"></div>
          </div>
          <div class="tech-grid">
            <div class="tech-dashboard glass-card">
              <h3>Stack de Desenvolvimento</h3>
              <ul class="tech-list">
                ${techSpecs.map(t => `<li><strong>${t.category}:</strong> ${t.value}</li>`).join('')}
              </ul>
            </div>
            <div class="tech-docs glass-card">
              <h3>Documentação Oficial</h3>
              <p>O projeto segue rigorosos padrões de documentação de GDD (Game Design Document).</p>
              <div class="doc-links">
                <a href="https://1drv.ms/w/c/8093b679412b1a72/IQAJIMROrP2rSLKruo7cdL0_Afucs_4oI71bEKRyElAmtbw?e=4aBy6Q" target="_blank" class="btn-primary small">Ver GDD (Cloud)</a>
                <a href="#documents" class="btn-secondary small">Arquivos de Dev</a>
              </div>
            </div>
          </div>
        </section>
      `;
    case 'team':
      return `
        <section class="sub-page">
          <div class="section-header">
            <h1 class="section-title">Nossa Equipe</h1>
            <div class="title-underline"></div>
            <p class="section-subtitle-center">As mentes por trás da reconstrução de Leah.</p>
          </div>
          <div class="team-showcase">
            ${team.map(member => `
              <div class="team-card-premium glass-card">
                <div class="member-symbol">${member.name.charAt(0)}</div>
                <div class="member-content">
                  <h2 class="member-name">${member.name}</h2>
                  <span class="member-role">${member.role}</span>
                  <div class="role-divider"></div>
                  <p class="member-bio">${member.bio}</p>
                  <div class="member-footer">
                    <span class="specialty-tag">${member.specialty}</span>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </section>
      `;
    case 'map':
      return `
        <section class="sub-page">
          <div class="section-header">
            <h1 class="section-title">Mapa do Mundo</h1>
            <div class="title-underline"></div>
          </div>
          <div class="map-container glass-card">
            <div class="map-bg"></div>
            ${locations.map(loc => `
              <div class="map-point" style="top: ${loc.top}; left: ${loc.left};" data-tooltip="${loc.desc}">
                <span class="point-icon">${loc.icon}</span>
                <span class="point-name">${loc.name}</span>
              </div>
            `).join('')}
          </div>
        </section>
      `;
    case 'gallery':
      return `
        <section class="sub-page">
          <div class="section-header">
            <h1 class="section-title">Atmosfera</h1>
            <div class="title-underline"></div>
          </div>
          <div class="gallery-grid">
            ${gallery.map(img => `
              <div class="gallery-item glass-card">
                <img src="${img.src}" alt="${img.title}">
                <div class="gallery-overlay">
                  <span>${img.title}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </section>
      `;
    default:
      return `
        <section id="home" class="hero-section">
          <div class="hero-content">
            <h1 class="hero-title">A Reconstrução de uma <br><span class="highlight">Mente Fragmentada.</span></h1>
            <p class="hero-subtitle">Um projeto de Inovação Narrativa onde o trauma molda a realidade. Descubra os fragmentos da alma de Leah.</p>
            <div class="cta-group">
              <button class="btn-primary" onclick="window.open('./game-WEB/index.html', '_blank')">Iniciar Experiência</button>
              <button class="btn-secondary" onclick="window.location.hash='#map'">Explorar o Mundo</button>
            </div>
          </div>
        </section>

        <section id="roadmap">
          <div class="section-header">
            <h2 class="section-title">Roadmap do Projeto</h2>
            <div class="title-underline"></div>
          </div>
          <div class="roadmap-timeline">
            ${roadmap.map(r => `
              <div class="roadmap-item glass-card">
                <h3>${r.phase}</h3>
                <span class="status-tag ${r.status.toLowerCase().replace(' ', '-')}">${r.status}</span>
                <p>${r.desc}</p>
              </div>
            `).join('')}
          </div>
        </section>
        
        <section id="personagens">
          <div class="section-header">
            <h2 class="section-title">O Elenco</h2>
            <div class="title-underline"></div>
          </div>
          <div class="character-grid">
            ${characters.map(char => `
              <div class="character-card">
                <div class="char-img-wrap">
                  ${char.status === 'placeholder' ? '<div class="coming-soon">Visual em breve</div>' : ''}
                  ${char.sprite ? `<img src="${char.sprite}" alt="${char.name}" class="char-sprite">` : '<div style="width:100%; height:100%; background: #0a0a0c;"></div>'}
                </div>
                <div class="char-info">
                  <h3>${char.name}</h3>
                  <span>${char.role}</span>
                  <p>${char.desc}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <section id="safety" class="safety-section glass-card">
          <div class="safety-header">
            <span class="warning-icon">⚠️</span>
            <h3>Aviso de Conteúdo Sensível</h3>
          </div>
          <p>Este projeto aborda temas de depressão, bullying e traumas psicológicos. Se você estiver passando por momentos difíceis, procure ajuda profissional. No Brasil, o <strong>CVV (188)</strong> oferece apoio gratuito 24/7.</p>
        </section>
      `;
  }
};

// Shard Logic
const initShards = () => {
  const container = document.getElementById('shards-container');
  if (!container) return;
  for (let i = 0; i < 4; i++) {
    const shard = document.createElement('div');
    shard.className = 'shard';
    const w = Math.random() * 300 + 100;
    const h = Math.random() * 300 + 100;
    shard.style.width = `${w}px`;
    shard.style.height = `${h}px`;
    shard.style.left = `${Math.random() * 100}%`;
    shard.style.top = `${Math.random() * 100}%`;
    shard.style.opacity = `${Math.random() * 0.1 + 0.05}`;
    shard.dataset.depth = (Math.random() * 0.1 + 0.05).toString();
    container.appendChild(shard);
  }
};

// Scroll Parallax Interaction (Optimized with requestAnimationFrame)
const initScrollLogic = () => {
  let tick = false;

  window.addEventListener('scroll', () => {
    if (!tick) {
      window.requestAnimationFrame(() => {
        const scrolled = window.scrollY;

        // Optimize Nav Background
        const nav = document.querySelector('.navbar') as HTMLElement;
        if (nav) {
          if (scrolled > 50) {
            nav.style.background = 'rgba(5, 5, 8, 0.9)';
          } else {
            nav.style.background = 'rgba(5, 5, 8, 0.4)';
          }
        }

        // Parallax Elements
        const shards = document.querySelectorAll('.shard');
        shards.forEach(s => {
          const shard = s as HTMLElement;
          const depth = parseFloat(shard.dataset.depth || "0.1");
          shard.style.transform = `translate3d(0, ${scrolled * depth}px, 0) rotate(45deg)`;
        });

        const blobs = document.querySelectorAll('.nebula-blob');
        blobs.forEach((b, i) => {
          const blob = b as HTMLElement;
          blob.style.transform = `translate3d(0, ${scrolled * (0.05 + i * 0.03)}px, 0)`;
        });

        tick = false;
      });
      tick = true;
    }
  });
};

// Router
const router = () => {
  const hash = window.location.hash.replace('#', '') || 'home';
  renderView(hash);
  window.scrollTo(0, 0);
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
