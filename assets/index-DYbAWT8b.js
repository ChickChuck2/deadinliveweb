(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const t of i)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(i){const t={};return i.integrity&&(t.integrity=i.integrity),i.referrerPolicy&&(t.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?t.credentials="include":i.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(i){if(i.ep)return;i.ep=!0;const t=a(i);fetch(i.href,t)}})();const m=[{name:"Leah",role:"Protagonista",desc:"A 'menina do cabelo de uva'. Luta contra neblinas mentais e traumas fragmentados.",sprite:"images/game/leah.png",status:"active"},{name:"Maya",role:"A Luz",desc:"Melhor amiga de infância. Representa a alegria e a inocência do passado.",sprite:"images/game/maya.png",status:"active"},{name:"Madalena",role:"O Pilar",desc:"Mãe de Leah. Rígida e autoritária, protege segredos sob uma fachada de cuidado.",sprite:"images/game/madalena.png",status:"active"},{name:"Demetrius",role:"O Silêncio",desc:"Pai de Leah. Rude e indiferente, sua presença é um fardo constante na família.",sprite:"images/game/demetrius.png",status:"active"},{name:"Crystal",role:"A Inveja",desc:"Líder das bullies. Usa o poder para calar suas próprias inseguranças.",sprite:"",status:"placeholder"},{name:"Amélie",role:"A Sombra",desc:"Fiel a Crystal. Cruel e oportunista, encontra prazer em diminuir os outros.",sprite:"",status:"placeholder"},{name:"Anne",role:"A Dúvida",desc:"Seguidora do trio, mas com lampejos de empatia que não ousa expressar.",sprite:"",status:"placeholder"}],l=[{title:"Sistema de Sanidade",desc:"A sanidade de Leah flutua conforme o ambiente. Escolhas ruins aumentam a chance de eventos sombrios. Não deixe ser tarde demais.",icon:"🧠"},{title:"Nível de Felicidade",desc:"Manter a felicidade alta proporciona uma gameplay mais suave. O objetivo final é alcançar a paz, se possível.",icon:"✨"},{title:"Gestão Financeira",desc:"O dinheiro é vital para tratamentos periódicos e remédios controlados. Encontre recursos em bicos ou eventos.",icon:"💰"},{title:"Consequências Reais",desc:"Suas escolhas moldam o caminho. Um erro fatal pode significar o fim da jornada de Leah.",icon:"🎭"}],d={objective:"Seguir a história de Leah, moldando seu caminho através de escolhas que impactam sua mente e o desfecho de sua vida.",challenge:"Enfrentar traumas familiares e transtornos mentais que dificultam a jogabilidade e testam sua resiliência.",uniqueness:"Baseado em experiências reais, aplica uma jogabilidade delicada onde cada ação grotesca ou trauma exige uma reação consciente."},p=[{category:"Engine",value:"Ren'Py 8.1.3 (Python 3.9)"},{category:"Framework Web",value:"Vite + TypeScript"},{category:"Sistemas Custom",value:"Advanced Event Engine & Inventory"},{category:"Inovação",value:"UX Narrativa Baseada em Estados Emocionais"}],v=[{id:"v0.1",title:"A Origem",items:["[Adicionado] Cena jogável inicial","[Adicionado] Sistema de Sanidade & Felicidade","[Adicionado] Sistema de Dinheiro & Eventos"]},{id:"v0.2",title:"Capítulo 2 & Expansão",items:["[Adicionado] Capítulo 2 completo","[Adicionado] Sistema de Mini-Mapa","[Adicionado] Menu do Quarto (Base)","[Modificado] Cursor customizado"]}],u=[{phase:"Capítulo 2",status:"Concluído",desc:"Aprofundamento dos conflitos e exploração do mapa."},{phase:"Sistemas Sonoros",status:"Em Desenvolvimento",desc:"Implementação de trilha de piano e efeitos ambientais."},{phase:"Capítulo 3",status:"Em Planejamento",desc:"O clímax da jornada de superação de Leah."}],h=[{id:"casa",name:"Casa da Leah",desc:"Onde o silêncio de Demetrius e o controle de Madalena se encontram.",icon:"🏠",top:"75%",left:"55%"},{id:"escola",name:"Escola",desc:"O campo de batalha social onde Crystal domina.",icon:"🏫",top:"25%",left:"40%"},{id:"hospital",name:"Hospital",desc:"Lugar de memórias traumáticas e cheiros de éter.",icon:"🏥",top:"15%",left:"65%"},{id:"loja",name:"Loja",desc:"Um breve refúgio para adquirir itens que acalmam a mente.",icon:"🛒",top:"60%",left:"70%"}],g=[{name:"Café Quente",effect:"+10 Felicidade",cost:"$5",desc:"Um pequeno conforto em manhãs frias."},{name:"Diário",effect:"+15 Sanidade",cost:"Inicial",desc:"O único lugar onde Leah pode ser ela mesma."},{name:"Remédios",effect:"+30 Sanidade",cost:"$20",desc:"Silenciam as vozes, mas nublam a visão."}],f=[{id:"shopping",title:"Centro Comercial",desc:"Explore lojas de cosméticos e restaurantes. Onde o consumo e a saúde mental se cruzam.",status:"Em Planejamento",icon:"🛍️"},{id:"jobs",title:"Sistema de Trabalho",desc:"Comece servindo café e construa sua independência financeira para sobreviver ao vazio.",status:"Em Planejamento",icon:"☕"},{id:"personality",title:"Personalidade & Hobbies",desc:"Defina os gostos e hábitos de Leah. Cada escolha molda quem ela se tornará.",status:"Em Planejamento",icon:"🧠"},{id:"wardrobe",title:"Guarda-Roupa",desc:"Lojas de roupas e customização visual. A aparência como reflexo da alma.",status:"Em Planejamento",icon:"👗"}],b=[{src:"images/game/park.jpg",title:"O Parque"},{src:"images/game/dark_park.jpg",title:"O Parque (Caótico)"},{src:"images/game/cozinha.png",title:"Cozinha da Família"},{src:"images/game/main_menu_bg.png",title:"Menu Principal"}],y=[{name:"Carlos Silva",role:"Fundador & Lead Developer",bio:"Gerencia a visão estratégica, planos de inovação e documentação técnica. Responsável pelo desenvolvimento do motor de jogo, arquitetura do site e integração de sistemas essenciais.",specialty:"Gestão, Full-stack Dev & Game Logic"},{name:"Giovana Leite",role:"Diretora Criativa & Roteirista",bio:"Lidera a alma artística de Dead in Live. Desenvolve a narrativa psicológica, roteiros detalhados, direção de arte e ambientação sonora, transformando ideias em experiências imersivas.",specialty:"Narrativa, Audio Design & Ilustração"}],$=s=>{const e=document.querySelector("#app"),a=`
    <div class="void-container">
      <div class="nebula-blob blob-1"></div>
      <div class="nebula-blob blob-2"></div>
      <div class="nebula-blob blob-3"></div>
      <div id="shards-container"></div>
      <div id="petal-rain"></div>
    </div>
    
    <main class="site-container">
      <nav class="navbar">
        <div class="nav-logo" onclick="window.location.hash='#home'">Dead in Live</div>
        <button class="mobile-menu-toggle" id="menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div class="nav-links" id="nav-links">
          <a href="#home" class="${s==="home"?"active":""}">Início</a>
          <a href="#projeto" class="${s==="projeto"?"active":""}">O Projeto</a>
          <a href="#gameplay" class="${s==="gameplay"?"active":""}">Gameplay</a>
          <a href="#map" class="${s==="map"?"active":""}">Mapa</a>
          <a href="#gallery" class="${s==="gallery"?"active":""}">Atmosfera</a>
          <a href="#technical" class="${s==="technical"?"active":""}">Técnico</a>
          <a href="#team" class="${s==="team"?"active":""}">Equipe</a>
        </div>
      </nav>
      <div id="content-mount"></div>
    </main>
  `;e.innerHTML.includes("site-container")||(e.innerHTML=a,j(),S(),A(),E());const o=document.getElementById("content-mount");o.innerHTML=L(s),setTimeout(()=>{document.querySelectorAll("section").forEach(i=>{i.classList.add("visible")})},100)},L=s=>{switch(s){case"gameplay":return`
        <section class="sub-page">
          <div class="section-header">
            <h1 class="section-title">Gameplay Detalhada</h1>
            <div class="title-underline"></div>
          </div>
          <div class="gameplay-grid">
            ${l.map(e=>`
              <div class="mechanic-card glass-card">
                <div class="mech-icon">${e.icon}</div>
                <h3>${e.title}</h3>
                <p>${e.desc}</p>
              </div>
            `).join("")}
          </div>
          <div class="gameplay-analysis glass-card">
            <h2>Gestão de Estados</h2>
            <p>Em <em>Dead in Live</em>, a narrativa não é estática. O motor de jogo monitora constantemente o equilíbrio entre a <strong>Sanidade</strong> (estabilidade mental) e a <strong>Felicidade</strong> (satisfação momentânea). Decisões como comer com a família ou estudar na biblioteca não são apenas 'flavor text'; elas recalibram o destino de Leah.</p>
          </div>
          
          <div class="section-header" style="margin-top: 80px;">
            <h2 class="section-title" style="font-size: 3rem;">Inventário de Emoções</h2>
          </div>
          <div class="inventory-grid">
            ${g.map(e=>`
              <div class="item-card glass-card">
                <h3>${e.name}</h3>
                <span class="item-effect">${e.effect}</span>
                <p>${e.desc}</p>
                <div class="item-footer">
                  <span>Custo: ${e.cost}</span>
                </div>
              </div>
            `).join("")}
          </div>
        </section>
      `;case"technical":return`
        <section class="sub-page">
          <div class="section-header">
            <h1 class="section-title">Ficha Técnica</h1>
            <div class="title-underline"></div>
          </div>
          <div class="tech-grid">
            <div class="tech-dashboard glass-card">
              <h3>Stack de Desenvolvimento</h3>
              <ul class="tech-list">
                ${p.map(e=>`<li><strong>${e.category}:</strong> ${e.value}</li>`).join("")}
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
      `;case"team":return`
        <section class="sub-page">
          <div class="section-header">
            <h1 class="section-title">Nossa Equipe</h1>
            <div class="title-underline"></div>
            <p class="section-subtitle-center">As mentes por trás da reconstrução de Leah.</p>
          </div>
          <div class="team-showcase">
            ${y.map(e=>`
              <div class="team-card-premium glass-card">
                <div class="member-symbol">${e.name.charAt(0)}</div>
                <div class="member-content">
                  <h2 class="member-name">${e.name}</h2>
                  <span class="member-role">${e.role}</span>
                  <div class="role-divider"></div>
                  <p class="member-bio">${e.bio}</p>
                  <div class="member-footer">
                    <span class="specialty-tag">${e.specialty}</span>
                  </div>
                </div>
              </div>
            `).join("")}
          </div>
        </section>
      `;case"map":return`
        <section class="sub-page">
          <div class="section-header">
            <h1 class="section-title">Mapa do Mundo</h1>
            <div class="title-underline"></div>
          </div>
          <div class="map-container glass-card">
            <div class="map-bg"></div>
            ${h.map(e=>`
              <div class="map-point" style="top: ${e.top}; left: ${e.left};" data-tooltip="${e.desc}">
                <span class="point-icon">${e.icon}</span>
                <span class="point-name">${e.name}</span>
              </div>
            `).join("")}
          </div>
        </section>
      `;case"gallery":return`
        <section class="sub-page">
          <div class="section-header">
            <h1 class="section-title">Atmosfera</h1>
            <div class="title-underline"></div>
          </div>
          <div class="gallery-grid">
            ${b.map(e=>`
              <div class="gallery-item glass-card">
                <img src="${e.src}" alt="${e.title}">
                <div class="gallery-overlay">
                  <span>${e.title}</span>
                </div>
              </div>
            `).join("")}
          </div>
        </section>
      `;case"projeto":return`
        <section class="sub-page">
          <div class="section-header">
            <h1 class="section-title">O Projeto</h1>
            <div class="title-underline"></div>
            <p class="section-subtitle-center">Descubra os pilares e a evolução de Dead in Live.</p>
          </div>

          <div id="roadmap">
            <div class="section-header">
              <h2 class="section-title">Roadmap</h2>
            </div>
            <div class="roadmap-timeline">
              ${u.map(e=>`
                <div class="roadmap-item glass-card">
                  <h3>${e.phase}</h3>
                  <span class="status-tag ${e.status.toLowerCase().replace(" ","-")}">${e.status}</span>
                  <p>${e.desc}</p>
                </div>
              `).join("")}
            </div>
          </div>

          <div id="visions" style="margin-top: 80px;">
            <div class="section-header">
              <h2 class="section-title">Visões do Futuro</h2>
            </div>
            <div class="visions-grid">
              ${f.map(e=>`
                <div class="vision-card glass-card">
                  <div class="vision-status">${e.status}</div>
                  <div class="vision-icon">${e.icon}</div>
                  <h3>${e.title}</h3>
                  <p>${e.desc}</p>
                </div>
              `).join("")}
            </div>
          </div>

          <div id="personagens" style="margin-top: 80px;">
            <div class="section-header">
              <h2 class="section-title">O Elenco</h2>
            </div>
            <div class="character-grid">
              ${m.map(e=>`
                <div class="character-card">
                  <div class="char-img-wrap">
                    ${e.status==="placeholder"?'<div class="coming-soon">Visual em breve</div>':""}
                    ${e.sprite?`<img src="${e.sprite}" alt="${e.name}" class="char-sprite">`:'<div style="width:100%; height:100%; background: #0a0a0c;"></div>'}
                  </div>
                  <div class="char-info">
                    <h3>${e.name}</h3>
                    <span>${e.role}</span>
                    <p>${e.desc}</p>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>

          <div id="safety" class="safety-section glass-card" style="margin-top: 80px;">
            <div class="safety-header">
              <span class="warning-icon">⚠️</span>
              <h3>Aviso de Conteúdo Sensível</h3>
            </div>
            <p>Este projeto aborda temas de depressão, bullying e traumas psicológicos. Se você estiver passando por momentos difíceis, procure ajuda profissional. No Brasil, o <strong>CVV (188)</strong> oferece apoio gratuito 24/7.</p>
          </div>
        </section>
      `;default:return`
        <section id="home" class="landing-section">
          <div class="landing-content">
            <h1 class="landing-title">
              <span class="fade-in-up">Dead In</span>
              <span class="highlight-text fade-in-up delay-1">Live</span>
            </h1>
            <p class="landing-subtitle fade-in-up delay-2">
              Um projeto de inovação narrativa onde o trauma molda o mundo.<br>
              Vivencie o horror psicológico através dos olhos de Leah.
            </p>
            <div class="landing-cta fade-in-up delay-3">
              <button class="btn-premium" onclick="window.open('game-WEB/index.html', '_blank')">Iniciar Experiência Agora</button>
              <button class="btn-outline" onclick="window.location.hash='#projeto'">Explorar Projeto</button>
            </div>
            
            <div class="platform-targets fade-in-up delay-4">
              <span class="platform-label">Plataformas Alvo:</span>
              <div class="platform-icons">
                <span class="platform-tag">🎮 PC (Steam/Epic)</span>
                <span class="platform-tag">📱 Android</span>
              </div>
            </div>

            <div class="social-community fade-in-up delay-4">
              <a href="#" class="social-link">Discord</a>
              <a href="#" class="social-link">Instagram</a>
              <a href="#" class="social-link">Twitter (X)</a>
            </div>
          </div>
          <div class="scroll-hint fade-in-up delay-4">
            <span>Role para mergulhar</span>
            <div class="scroll-arrow"></div>
          </div>
        </section>

        <!-- NOVO CONTEÚDO GDD -->
        <section id="concept" class="gdd-section">
          <div class="section-header">
            <h2 class="section-title">O Conceito</h2>
            <div class="title-underline"></div>
            <p class="section-subtitle-center"></p>
          </div>
          <div class="concept-grid">
            <div class="concept-card glass-card">
              <h3>High Concept</h3>
              <p>Dead in Live é uma jornada de superação em um ambiente hostil, explorando como o trauma afeta a psique de uma criança e as consequências permanentes de cada decisão.</p>
            </div>
            <div class="concept-card glass-card">
              <h3>Diferencial Único</h3>
              <p>${d.uniqueness}</p>
            </div>
          </div>
        </section>

        <section id="story" class="gdd-section story-highlight">
          <div class="section-header">
            <h2 class="section-title">A Jornada de Leah</h2>
            <div class="title-underline"></div>
          </div>
          <div class="story-content glass-card">
            <p>Leah vive entre brigas e silêncios. Sua casa, um ambiente tóxico dominado pelo conflito entre Madalena e Demetrius, é o palco de sua fragmentação emocional. <strong>Morta em Vida</strong> é o sentimento de quem respira, mas se sente vazio por dentro. Sua missão? Sobreviver, proteger sua mãe e encontrar um lampejo de felicidade em meio ao caos.</p>
          </div>
        </section>

        <section id="survival" class="gdd-section">
          <div class="section-header">
            <h2 class="section-title">Mecânicas de Sobrevivência</h2>
            <div class="title-underline"></div>
          </div>
          <div class="experience-pillars">
            ${l.map(e=>`
              <div class="pillar">
                <span class="pillar-icon">${e.icon}</span>
                <h3>${e.title}</h3>
                <p style="font-size: 0.9rem; color: var(--text-dim); margin-top: 10px;">${e.desc}</p>
              </div>
            `).join("")}
          </div>
          <div class="survival-details">
            <div class="detail-card glass-card">
              <h4>Objetivo</h4>
              <p>${d.objective}</p>
            </div>
            <div class="detail-card glass-card">
              <h4>Desafio</h4>
              <p>${d.challenge}</p>
            </div>
          </div>
        </section>

        <section id="production" class="gdd-section">
          <div class="section-header">
            <h2 class="section-title">Produção & Versões</h2>
            <div class="title-underline"></div>
          </div>
          <div class="versions-timeline">
            ${v.map(e=>`
              <div class="version-block glass-card">
                <div class="version-id">${e.id}</div>
                <h3>${e.title}</h3>
                <ul>
                  ${e.items.map(a=>`<li>${a}</li>`).join("")}
                </ul>
              </div>
            `).join("")}
          </div>
        </section>

        <section id="teaser-gate" class="gdd-section">
           <div class="section-header">
            <h2 class="section-title">Trailer & Estética</h2>
            <div class="title-underline"></div>
            <p class="section-subtitle-center">Inspiração Anime dos anos 90 com trilha sonora melancólica de piano.</p>
          </div>
          <div class="landing-teaser" style="margin: 0 auto;">
            <div class="teaser-placeholder">
              <span class="teaser-label">Teaser Oficial</span>
              <span class="teaser-status">Em Breve</span>
            </div>
          </div>
        </section>
      `}},E=()=>{const s=document.getElementById("petal-rain");if(!s)return;const e=()=>{const a=document.createElement("div");a.className="petal";const o=Math.random()*8+4+"px",i=Math.random()*100+"vw",t=Math.random()*7+6+"s",n=Math.random()*5+"s";a.style.width=o,a.style.height=o,a.style.left=i,a.style.top="-10%",a.style.animationDuration=t,a.style.animationDelay=n,s.appendChild(a),setTimeout(()=>{a.remove()},1e4)};for(let a=0;a<20;a++)e();setInterval(e,400)},j=()=>{const s=document.getElementById("shards-container");if(s)for(let e=0;e<4;e++){const a=document.createElement("div");a.className="shard";const o=Math.random()*300+100,i=Math.random()*300+100;a.style.width=`${o}px`,a.style.height=`${i}px`,a.style.left=`${Math.random()*100}%`,a.style.top=`${Math.random()*100}%`,a.style.opacity=`${Math.random()*.1+.05}`,a.dataset.depth=(Math.random()*.1+.05).toString(),s.appendChild(a)}},S=()=>{let s=!1;window.addEventListener("scroll",()=>{s||(window.requestAnimationFrame(()=>{const e=window.scrollY,a=document.querySelector(".navbar");a&&(e>50?a.style.background="rgba(5, 5, 8, 0.9)":a.style.background="rgba(5, 5, 8, 0.4)"),document.querySelectorAll(".shard").forEach(t=>{const n=t,c=parseFloat(n.dataset.depth||"0.1");n.style.transform=`translate3d(0, ${e*c}px, 0) rotate(45deg)`}),document.querySelectorAll(".nebula-blob").forEach((t,n)=>{const c=t;c.style.transform=`translate3d(0, ${e*(.05+n*.03)}px, 0)`}),s=!1}),s=!0)})},A=()=>{const s=document.getElementById("menu-toggle"),e=document.getElementById("nav-links");!s||!e||(s.addEventListener("click",()=>{s.classList.toggle("active"),e.classList.toggle("active")}),e.querySelectorAll("a").forEach(a=>{a.addEventListener("click",()=>{s.classList.remove("active"),e.classList.remove("active")})}))},r=()=>{const s=window.location.hash.replace("#","")||"home";$(s),window.scrollTo(0,0);const e=document.getElementById("menu-toggle"),a=document.getElementById("nav-links");e&&a&&(e.classList.remove("active"),a.classList.remove("active"))};window.addEventListener("hashchange",r);window.addEventListener("load",r);
