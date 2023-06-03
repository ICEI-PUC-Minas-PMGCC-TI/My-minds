// add classe active

let navbar = document.querySelector('.navbar');

  navbar.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
      let links = navbar.querySelectorAll('a');
      links.forEach(function(link) {
        link.classList.remove('active');
      });
      // Adicione a classe 'active' ao link clicado
      event.target.classList.add('active');
    }
  });

  // Dados das notícias em formato JSON
  const Noticia = [
    {
      "title": "60% dos jovens dizem ter sentido ansiedade nos últimos seis meses",
      "description": "Dado é da pesquisa Juventudes e a Pandemia E agora?, que ouviu mais de 16 mil jovens de 15 a 29 anos e também abordou outros tópicos de saúde mental",
      "imagem": "./img/crise_de_ansiedade.jpg",
      "url" : "https://gauchazh.clicrbs.com.br/saude/noticia/2022/09/60-dos-jovens-dizem-ter-sentido-ansiedade-nos-ultimos-seis-meses-cl8ljru3b00cd01ebrramuz10.html",
    },
    {
      "title": "Ansiedade: sintomas físicos e psicológicos vão de taquicardia a insônia.",
      "description": "Saiba reconhecer os sintomas de ansiedade, diagnóstico e tratamentos. Ficar a noite rolando na cama sem conseguir dormir ou sentir que o coração vai sair pela boca.",
      "imagem": "./img/ansiedade_insonia.jpg",
      "url" : "https://www.uol.com.br/vivabem/noticias/redacao/2018/07/17/ansiedade-o-que-e-quais-os-tipos-os-sintomas-e-tratamentos-mais-eficazes.htm?cmpid=copiaecola"
    },
    {
      "title": "Inteligência artificial é usada como modelo para prever ansiedade e depressão",
      "description": "Cientistas adotaram a inteligência artificial e dados de uma das maiores plataformas do mundo, o Twitter, para desenvolver modelos de predição de ansiedade e depressão.",
      "imagem": "./img/ia.jpg",
      "url" : "https://www.cnnbrasil.com.br/saude/inteligencia-artificial-e-usada-como-modelo-para-prever-ansiedade-e-depressao/"
    }
  ];

  // Função para criar os cards de notícia
  function createNewsCards() {
    let newsContainer = document.getElementById('newsContainer');

    // Percorra os dados das notícias
    Noticia.forEach(function(news) {
      let card = document.createElement('div');
      card.className = 'col-md-4 mb-4';

      let cardHtml = `
        <div class="cards">
          <img src="${news.imagem}" class="card-img-top" alt="Imagem da Notícia">
          <div class="card-body">
            <h5 class="card-title">${news.title}</h5>
            <p class="card-text">${news.description}</p>
            <a class="card-link" href="${news.url}">Saiba Mais</a>
          </div>
        </div>
      `;

      card.innerHTML = cardHtml;
      newsContainer.appendChild(card);
    });
  }

  // Chame a função para criar os cards de notícia
  createNewsCards();