(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();const d=[{name:"Leah",role:"Protagonista",desc:"A 'menina do cabelo de uva'. Luta contra neblinas mentais e traumas fragmentados.",sprite:"/images/game/leah.png",status:"active"},{name:"Maya",role:"A Luz",desc:"Melhor amiga de infância. Representa a alegria e a inocência do passado.",sprite:"/images/game/maya.png",status:"active"},{name:"Madalena",role:"O Pilar",desc:"Mãe de Leah. Rígida e autoritária, protege segredos sob uma fachada de cuidado.",sprite:"/images/game/madalena.png",status:"active"},{name:"Demetrius",role:"O Silêncio",desc:"Pai de Leah. Rude e indiferente, sua presença é um fardo constante na família.",sprite:"/images/game/demetrius.png",status:"active"},{name:"Crystal",role:"A Inveja",desc:"Líder das bullies. Usa o poder para calar suas próprias inseguranças.",sprite:"",status:"placeholder"},{name:"Amélie",role:"A Sombra",desc:"Fiel a Crystal. Cruel e oportunista, encontra prazer em diminuir os outros.",sprite:"",status:"placeholder"},{name:"Anne",role:"A Dúvida",desc:"Seguidora do trio, mas com lampejos de empatia que não ousa expressar.",sprite:"",status:"placeholder"}],l=[{title:"Sistema de Sanidade",desc:"A sanidade de Leah flutua conforme o ambiente e eventos. Quedas drásticas alteram a percepção visual do jogo.",icon:"🧠"},{title:"Nível de Felicidade",desc:"Interações positivas e cuidados pessoais (como arrumar o quarto) restauram esse pilar essencial.",icon:"✨"},{title:"Ciclo de Rotina",desc:"Gerencie o tempo entre Manhã, Tarde e Noite. Suas escolhas diárias impactam o progresso da história.",icon:"⏰"},{title:"Eventos Aleatórios",desc:"A cada transição de área, eventos únicos testam sua ética e podem mudar seus recursos financeiros.",icon:"🎭"}],m=[{category:"Engine",value:"Ren'Py 8.1.3 (Python 3.9)"},{category:"Framework Web",value:"Vite + TypeScript"},{category:"Sistemas Custom",value:"Advanced Event Engine & Inventory"},{category:"Inovação",value:"UX Narrativa Baseada em Estados Emocionais"}],p=[{phase:"Prólogo",status:"Concluído",desc:"A introdução ao vazio mental de Leah."},{phase:"Capítulo 1",status:"Em Revisão",desc:"Primeiras interações na Escola e no Quarto."},{phase:"Capítulo 2",status:"Em Desenvolvimento",desc:"Aprofundamento dos conflitos familiares."},{phase:"Efeitos sonoros e músicas",status:"Em Planejamento",desc:"Desenvolvimento da trilha sonora e efeitos ambientais."}],v=[{id:"casa",name:"Casa da Leah",desc:"Onde o silêncio de Demetrius e o controle de Madalena se encontram.",icon:"🏠",top:"75%",left:"55%"},{id:"escola",name:"Escola",desc:"O campo de batalha social onde Crystal domina.",icon:"🏫",top:"25%",left:"40%"},{id:"hospital",name:"Hospital",desc:"Lugar de memórias traumáticas e cheiros de éter.",icon:"🏥",top:"15%",left:"65%"},{id:"loja",name:"Loja",desc:"Um breve refúgio para adquirir itens que acalmam a mente.",icon:"🛒",top:"60%",left:"70%"}],u=[{name:"Café Quente",effect:"+10 Felicidade",cost:"$5",desc:"Um pequeno conforto em manhãs frias."},{name:"Diário",effect:"+15 Sanidade",cost:"Inicial",desc:"O único lugar onde Leah pode ser ela mesma."},{name:"Remédios",effect:"+30 Sanidade",cost:"$20",desc:"Silenciam as vozes, mas nublam a visão."}],h=[{src:"/images/game/park.jpg",title:"O Parque"},{src:"/images/game/dark_park.jpg",title:"O Parque (Caótico)"},{src:"/images/game/cozinha.png",title:"Cozinha da Família"},{src:"/images/game/main_menu_bg.png",title:"Menu Principal"}],g=[{name:"Carlos Silva",role:"Fundador & Lead Developer",bio:"Gerencia a visão estratégica, planos de inovação e documentação técnica. Responsável pelo desenvolvimento do motor de jogo, arquitetura do site e integração de sistemas essenciais.",specialty:"Gestão, Full-stack Dev & Game Logic"},{name:"Giovana Leite",role:"Diretora Criativa & Roteirista",bio:"Lidera a alma artística de Dead in Live. Desenvolve a narrativa psicológica, roteiros detalhados, direção de arte e ambientação sonora, transformando ideias em experiências imersivas.",specialty:"Narrativa, Audio Design & Ilustração"}],f=s=>{const e=document.querySelector("#app"),t=`
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
          <a href="#home" class="${s==="home"?"active":""}">Início</a>
          <a href="#gameplay" class="${s==="gameplay"?"active":""}">Gameplay</a>
          <a href="#map" class="${s==="map"?"active":""}">Mapa</a>
          <a href="#gallery" class="${s==="gallery"?"active":""}">Atmosfera</a>
          <a href="#technical" class="${s==="technical"?"active":""}">Técnico</a>
          <a href="#team" class="${s==="team"?"active":""}">Equipe</a>
        </div>
      </nav>
      <div id="content-mount"></div>
    </main>
  `;e.innerHTML.includes("site-container")||(e.innerHTML=t,y(),$());const n=document.getElementById("content-mount");n.innerHTML=b(s),setTimeout(()=>{document.querySelectorAll("section").forEach(a=>{a.classList.add("visible")})},100)},b=s=>{switch(s){case"gameplay":return`
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
            ${u.map(e=>`
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
                ${m.map(e=>`<li><strong>${e.category}:</strong> ${e.value}</li>`).join("")}
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
            ${g.map(e=>`
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
            ${v.map(e=>`
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
            ${h.map(e=>`
              <div class="gallery-item glass-card">
                <img src="${e.src}" alt="${e.title}">
                <div class="gallery-overlay">
                  <span>${e.title}</span>
                </div>
              </div>
            `).join("")}
          </div>
        </section>
      `;default:return`
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
            ${p.map(e=>`
              <div class="roadmap-item glass-card">
                <h3>${e.phase}</h3>
                <span class="status-tag ${e.status.toLowerCase().replace(" ","-")}">${e.status}</span>
                <p>${e.desc}</p>
              </div>
            `).join("")}
          </div>
        </section>
        
        <section id="personagens">
          <div class="section-header">
            <h2 class="section-title">O Elenco</h2>
            <div class="title-underline"></div>
          </div>
          <div class="character-grid">
            ${d.map(e=>`
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
        </section>

        <section id="safety" class="safety-section glass-card">
          <div class="safety-header">
            <span class="warning-icon">⚠️</span>
            <h3>Aviso de Conteúdo Sensível</h3>
          </div>
          <p>Este projeto aborda temas de depressão, bullying e traumas psicológicos. Se você estiver passando por momentos difíceis, procure ajuda profissional. No Brasil, o <strong>CVV (188)</strong> oferece apoio gratuito 24/7.</p>
        </section>
      `}},y=()=>{const s=document.getElementById("shards-container");if(s)for(let e=0;e<4;e++){const t=document.createElement("div");t.className="shard";const n=Math.random()*300+100,a=Math.random()*300+100;t.style.width=`${n}px`,t.style.height=`${a}px`,t.style.left=`${Math.random()*100}%`,t.style.top=`${Math.random()*100}%`,t.style.opacity=`${Math.random()*.1+.05}`,t.dataset.depth=(Math.random()*.1+.05).toString(),s.appendChild(t)}},$=()=>{let s=!1;window.addEventListener("scroll",()=>{s||(window.requestAnimationFrame(()=>{const e=window.scrollY,t=document.querySelector(".navbar");t&&(e>50?t.style.background="rgba(5, 5, 8, 0.9)":t.style.background="rgba(5, 5, 8, 0.4)"),document.querySelectorAll(".shard").forEach(i=>{const o=i,c=parseFloat(o.dataset.depth||"0.1");o.style.transform=`translate3d(0, ${e*c}px, 0) rotate(45deg)`}),document.querySelectorAll(".nebula-blob").forEach((i,o)=>{const c=i;c.style.transform=`translate3d(0, ${e*(.05+o*.03)}px, 0)`}),s=!1}),s=!0)})},r=()=>{const s=window.location.hash.replace("#","")||"home";f(s),window.scrollTo(0,0)};window.addEventListener("hashchange",r);window.addEventListener("load",r);
