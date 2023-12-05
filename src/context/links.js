const links = [
  {
    id: 1,
    category: 'Inteligência Artificial',
    bgColor: '#FFD1DC',
    textColor: '#282A36',
    img: 'InteligenciaArtificial.png',
    resources: [
      {
        idTheme: 1,
        name: 'Conversa',
        text: 'Imagine conversar com um robô que entende o que você diz e responde de forma inteligente. Isso é possível com a inteligência artificial. A conversa é uma das áreas mais promissoras da inteligência artificial. Afinal, quem não gostaria de ter um assistente pessoal que entende o que você diz e faz o que você pede?',
        links: [
          {
            idLink: 1,
            name: 'Chat GPT',
            url: 'https://chat.openai.com/',
          },
          {
            idLink: 2,
            name: 'IBM Watson Assistant',
            url: 'https://www.ibm.com/cloud/watson-assistant/',
          },
          {
            idLink: 3,
            name: 'Google AI',
            url: 'https://ai.google/',
          },
          {
            idLink: 4,
            name: 'Microsoft Azure AI',
            url: 'https://azure.microsoft.com/en-us/overview/ai-platform/',
          },
          {
            idLink: 5,
            name: 'Amazon Lex',
            url: 'https://aws.amazon.com/lex/',
          },
          {
            idLink: 6,
            name: 'Replika',
            url: 'https://replika.ai/',
          },
          {
            idLink: 7,
            name: 'Siri',
            url: 'https://www.apple.com/siri/',
          },
          {
            idLink: 8,
            name: 'Google Assistant',
            url: 'https://assistant.google.com/',
          },
        ],
      },
      {
        idTheme: 2,
        name: 'Gerador de Imagens',
        text: 'Imagine um programa que gera imagens a partir de uma descrição. Isso é possível com a inteligência artificial. A inteligência artificial pode ser usada para gerar imagens a partir de um texto. Isso é muito útil para designers que precisam de imagens para seus projetos.',
        links: [
          {
            idLink: 1,
            name: 'DALL·E 2 - OpenAI',
            url: 'https://openai.com/dall-e-2/',
          },
          {
            idLink: 2,
            name: 'Zapier',
            url: 'https://zapier.com/blog/best-ai-image-generator/',
          },
          {
            idLink: 3,
            name: 'Jasper Art',
            url: 'https://www.jasperart.ai/',
          },
          {
            idLink: 4,
            name: 'Midjourney',
            url: 'https://www.midjourney.com/',
          },
          {
            idLink: 5,
            name: 'Starry AI',
            url: 'https://www.starryai.com/',
          },
          {
            idLink: 6,
            name: 'Dream by Wombo',
            url: 'https://www.wombo.ai/dream',
          },
        ],
      },
      {
        idTheme: 3,
        name: 'Leitor de pdf',
        text: 'Imagine um programa que lê um pdf e responde perguntas sobre o conteúdo. Isso é possível com a inteligência artificial. A inteligência artificial pode ser usada para ler um pdf e responder perguntas sobre o conteúdo. Isso é muito útil para estudantes que precisam estudar para uma prova.',
        links: [
          {
            idLink: 1,
            name: 'AI PDF Reader da HiPDF',
            url: 'https://www.hipdf.com/ai-pdf-reader',
          },
          {
            idLink: 2,
            name: 'ChatPDF',
            url: 'https://www.chatpdf.com/',
          },
          {
            idLink: 3,
            name: 'NaturalReader',
            url: 'https://www.naturalreaders.com/',
          },
          {
            idLink: 4,
            name: 'Myreader AI',
            url: 'https://www.myreader.ai/',
          },
        ],
      },
      {
        idTheme: 4,
        name: 'Criador de vídeo',
        text: 'Imagine um programa que cria um vídeo a partir de um texto. Isso é possível com a inteligência artificial. A inteligência artificial pode ser usada para criar vídeos a partir de um texto. Isso é muito útil para criadores de conteúdo que precisam de vídeos para seus canais.',
        links: [
          {
            idLink: 1,
            name: 'Kapwing',
            url: 'https://www.kapwing.com/ai-video-generator',
          },
          {
            idLink: 2,
            name: 'Synthesia',
            url: 'https://www.synthesia.io/',
          },
          {
            idLink: 3,
            name: 'Descript',
            url: 'https://www.descript.com/',
          },
          {
            idLink: 4,
            name: 'Wondershare Filmora',
            url: 'https://filmora.wondershare.com/',
          },
          {
            idLink: 5,
            name: 'Runway',
            url: 'https://runwayml.com/',
          },
          {
            idLink: 6,
            name: 'Fliki',
            url: 'https://fliki.ai/',
          },
        ],
      },
      {
        idTheme: 5,
        name: 'Gerar de posts para redes sociais',
        text: 'Imagine um programa que gera posts para redes sociais a partir de um texto. Isso é possível com a inteligência artificial. A inteligência artificial pode ser usada para gerar posts para redes sociais a partir de um texto. Isso é muito útil para criadores de conteúdo que precisam de posts para suas redes sociais.',
        links: [
          {
            idLink: 1,
            name: 'SocialBee',
            url: 'https://socialbee.io/',
          },
          {
            idLink: 2,
            name: 'SocialBu',
            url: 'https://socialbu.com/',
          },
          {
            idLink: 3,
            name: 'Social Sense AI',
            url: 'https://www.socialsense.ai/',
          },
        ],
      },
      {
        idTheme: 6,
        name: 'Professor',
        text: 'Um programa que ensina um assunto para você. Isso é possível com a inteligência artificial. A inteligência artificial pode ser usada para ensinar um assunto para você. Isso é muito útil para estudantes que precisam estudar para uma prova.',
        links: [
          {
            idLink: 1,
            name: 'Gradescope',
            url: 'https://www.gradescope.com/',
          },
          {
            idLink: 2,
            name: 'Fetchy',
            url: 'https://www.fetchy.io/',
          },
          {
            idLink: 3,
            name: 'Nuance’s Dragon Speech Recognition',
            url: 'https://www.nuance.com/dragon.html',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    category: 'Desenvolvimento Web',
    bgColor: '#AEC6CF',
    textColor: '#282A36',
    img: 'DesenvolvimentoWeb.png',
    resources: [
      {
        idTheme: 1,
        name: 'Desenvolvimento Frontend',
        text: 'Desenvolvimento Frontend é uma parte crucial do desenvolvimento web que lida com a parte do site que o usuário interage diretamente. Envolve a criação de páginas da web e a implementação de todas as interações visuais, de botões e menus a layouts e recursos responsivos.',
        links: [
          {
            idLink: 1,
            name: 'Front-end web developer - Learn web development | MDN',
            url: 'https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer',
          },
          {
            idLink: 2,
            name: 'Frontend Practice | Become a better frontend developer',
            url: 'https://www.frontendpractice.com/',
          },
          {
            idLink: 3,
            name: 'Front-End Developer Handbook 2019 - Learn the entire JavaScript, CSS and HTML development practice!',
            url: 'https://frontendmasters.com/books/front-end-handbook/2019/',
          },
          {
            idLink: 4,
            name: 'HTML - Linguagem de Marcação para a Web',
            url: 'https://en.wikipedia.org/wiki/HTML',
          },
          {
            idLink: 5,
            name: 'CSS - Folhas de Estilo em Cascata',
            url: 'https://en.wikipedia.org/wiki/Cascading_Style_Sheets',
          },
          {
            idLink: 6,
            name: 'JavaScript - Linguagem de Programação Web',
            url: 'https://en.wikipedia.org/wiki/JavaScript',
          },
          {
            idLink: 7,
            name: 'React - Biblioteca JavaScript para Interfaces de Usuário',
            url: 'https://en.wikipedia.org/wiki/React_(JavaScript_library)',
          },
          {
            idLink: 8,
            name: 'Angular - Plataforma e Framework para Aplicações Web',
            url: 'https://en.wikipedia.org/wiki/Angular_(web_framework)',
          },
          {
            idLink: 9,
            name: 'Vue.js - Framework JavaScript Progressivo',
            url: 'https://en.wikipedia.org/wiki/Vue.js',
          },
          {
            idLink: 10,
            name: 'Responsive Web Design',
            url: 'https://en.wikipedia.org/wiki/Responsive_web_design',
          },
          {
            idLink: 11,
            name: 'Acessibilidade Web',
            url: 'https://en.wikipedia.org/wiki/Web_accessibility',
          },
          {
            idLink: 12,
            name: 'Web Performance Optimization',
            url: 'https://en.wikipedia.org/wiki/Web_performance',
          },
          {
            idLink: 13,
            name: 'Ferramentas de Desenvolvimento Frontend',
            url: 'https://en.wikipedia.org/wiki/Web_development_tools',
          },
        ],
      },
      {
        idTheme: 2,
        name: 'Desenvolvimento Backend',
        text: 'Desenvolvimento Backend é a parte do desenvolvimento web que lida com o servidor e o banco de dados. Os desenvolvedores backend escrevem código que ajuda a comunicar o banco de dados com o navegador.',
        links: [
          {
            idLink: 1,
            name: 'Back-end web developer - Learn web development | MDN',
            url: 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction',
          },
          {
            idLink: 2,
            name: 'Back-End Developer Roadmap',
            url: 'https://roadmap.sh/backend',
          },
          {
            idLink: 3,
            name: 'Python - Linguagem de Programação Versátil',
            url: 'https://en.wikipedia.org/wiki/Python_(programming_language)',
          },
          {
            idLink: 4,
            name: 'Node.js - Ambiente de Execução JavaScript do Lado do Servidor',
            url: 'https://en.wikipedia.org/wiki/Node.js',
          },
          {
            idLink: 5,
            name: 'Java - Linguagem de Programação para Aplicações Empresariais',
            url: 'https://en.wikipedia.org/wiki/Java_(programming_language)',
          },
          {
            idLink: 6,
            name: 'PHP - Linguagem de Script do Lado do Servidor',
            url: 'https://en.wikipedia.org/wiki/PHP',
          },
          {
            idLink: 7,
            name: 'Ruby on Rails - Framework para Desenvolvimento Rápido de Aplicações Web',
            url: 'https://en.wikipedia.org/wiki/Ruby_on_Rails',
          },
          {
            idLink: 8,
            name: 'Django - Framework de Alto Nível para Python',
            url: 'https://en.wikipedia.org/wiki/Django_(web_framework)',
          },
          {
            idLink: 9,
            name: 'Express.js - Framework Web para Node.js',
            url: 'https://en.wikipedia.org/wiki/Express.js',
          },
          {
            idLink: 10,
            name: 'ASP.NET - Framework para Aplicações Web',
            url: 'https://en.wikipedia.org/wiki/ASP.NET',
          },
          {
            idLink: 11,
            name: 'Spring Framework - Framework para Java',
            url: 'https://en.wikipedia.org/wiki/Spring_Framework',
          },
          {
            idLink: 12,
            name: 'Bancos de Dados Relacionais e Não Relacionais',
            url: 'https://en.wikipedia.org/wiki/Database',
          },
        ],
      },
      {
        idTheme: 3,
        name: 'Design de interface do usuário e menus de navegação',
        text: 'O design da interface do usuário e os menus de navegação são uma parte importante do desenvolvimento web. Eles ajudam a melhorar a experiência do usuário, tornando o site fácil de navegar.',
        links: [
          {
            idLink: 1,
            name: 'Menus Tutorial | Web Accessibility Initiative (WAI) | W3C',
            url: 'https://www.w3.org/WAI/tutorials/menus/',
          },
          {
            idLink: 2,
            name: 'User Interface Design Basics | Usability.gov',
            url: 'https://www.usability.gov/what-and-why/user-interface-design.html',
          },
          {
            idLink: 3,
            name: 'How to Design a Website: A Step-by-Step Guide for Beginners (2021)',
            url: 'https://www.websitebuilderexpert.com/designing-websites/',
          },
          {
            idLink: 4,
            name: 'Princípios Básicos de Design de Interface do Usuário',
            url: 'https://en.wikipedia.org/wiki/User_interface_design',
          },
          {
            idLink: 5,
            name: 'Design de Menus de Navegação para Usabilidade',
            url: 'https://en.wikipedia.org/wiki/Navigation_bar',
          },
          {
            idLink: 6,
            name: 'Uso de Cores e Tipografia no Design de UI',
            url: 'https://en.wikipedia.org/wiki/Color_theory',
          },
          {
            idLink: 7,
            name: 'Layouts Responsivos em Design de Interface',
            url: 'https://en.wikipedia.org/wiki/Responsive_web_design',
          },
          {
            idLink: 8,
            name: 'Design de UI para Aplicações Móveis',
            url: 'https://en.wikipedia.org/wiki/Mobile_user_interface',
          },
          {
            idLink: 9,
            name: 'Iconografia em UI Design',
            url: 'https://en.wikipedia.org/wiki/Icon_(computing)',
          },
          {
            idLink: 10,
            name: 'Interação e Feedback do Usuário no Design de UI',
            url: 'https://en.wikipedia.org/wiki/Graphical_user_interface',
          },
          {
            idLink: 11,
            name: 'Acessibilidade em Design de UI',
            url: 'https://en.wikipedia.org/wiki/Web_accessibility',
          },
          {
            idLink: 12,
            name: 'Ferramentas e Softwares para Design de UI',
            url: 'https://en.wikipedia.org/wiki/List_of_graphical_user_interface_elements',
          },
          {
            idLink: 13,
            name: 'Tendências Atuais em Design de UI e Menus de Navegação',
            url: 'https://en.wikipedia.org/wiki/Graphical_user_interface',
          },
        ],
      },
      {
        idTheme: 4,
        name: 'Escrevendo e revisando código para sites, normalmente HTML, XML ou JavaScript',
        text: 'Escrever e revisar código para sites é uma habilidade essencial para qualquer desenvolvedor web. Isso geralmente envolve o uso de HTML para estruturar o site, CSS para estilizá-lo e JavaScript para adicionar interatividade.',
        links: [
          {
            idLink: 1,
            name: 'JavaScript Tutorial - W3Schools',
            url: 'https://www.w3schools.com/js/',
          },
          {
            idLink: 2,
            name: 'HTML Tutorial - W3Schools',
            url: 'https://www.w3schools.com/html/',
          },
          {
            idLink: 3,
            name: 'XML Tutorial - W3Schools',
            url: 'https://www.w3schools.com/xml/',
          },
          {
            idLink: 4,
            name: 'HTML - Fundamentos da Estrutura de Páginas Web',
            url: 'https://en.wikipedia.org/wiki/HTML',
          },
          {
            idLink: 5,
            name: 'XML - Usos e Práticas no Desenvolvimento Web',
            url: 'https://en.wikipedia.org/wiki/XML',
          },
          {
            idLink: 6,
            name: 'JavaScript - Programação de Client-Side',
            url: 'https://en.wikipedia.org/wiki/JavaScript',
          },
          {
            idLink: 7,
            name: 'Boas Práticas na Escrita de Código HTML',
            url: 'https://en.wikipedia.org/wiki/HTML#Markup',
          },
          {
            idLink: 8,
            name: 'Utilizando XML para Troca de Dados',
            url: 'https://en.wikipedia.org/wiki/XML#Data_exchange',
          },
          {
            idLink: 9,
            name: 'Frameworks JavaScript para Desenvolvimento Web Moderno',
            url: 'https://en.wikipedia.org/wiki/JavaScript_framework',
          },
          {
            idLink: 10,
            name: 'Validação e Revisão de Código HTML',
            url: 'https://en.wikipedia.org/wiki/HTML#Validation',
          },
          {
            idLink: 11,
            name: 'Otimização de Performance em JavaScript',
            url: 'https://en.wikipedia.org/wiki/JavaScript#Performance',
          },
          {
            idLink: 12,
            name: 'Acessibilidade em HTML e JavaScript',
            url: 'https://en.wikipedia.org/wiki/Web_accessibility',
          },
          {
            idLink: 13,
            name: 'Ferramentas de Desenvolvimento e Debugging para HTML e JavaScript',
            url: 'https://en.wikipedia.org/wiki/Web_development_tools',
          },
        ],
      },
      {
        idTheme: 5,
        name: 'Integrando conteúdo multimídia em um site',
        text: 'A integração de conteúdo multimídia em um site é uma parte importante do desenvolvimento web. Isso pode incluir a adição de imagens, vídeos, áudio e outros tipos de mídia para melhorar a experiência do usuário.',
        links: [
          {
            idLink: 1,
            name: 'Multimedia and embedding - Learn web development | MDN',
            url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding',
          },
          {
            idLink: 2,
            name: 'HTML - Embed Multimedia - Online Tutorials Library',
            url: 'https://www.w3schools.com/html/html5_video.asp',
          },
          {
            idLink: 3,
            name: 'Incorporação de Imagens e Gráficos',
            url: 'https://en.wikipedia.org/wiki/HTML#Images_and_objects',
          },
          {
            idLink: 4,
            name: 'Adicionando Vídeo e Áudio',
            url: 'https://en.wikipedia.org/wiki/HTML5_video',
          },
          {
            idLink: 5,
            name: 'Uso de SVG para Gráficos Vetoriais',
            url: 'https://en.wikipedia.org/wiki/Scalable_Vector_Graphics',
          },
          {
            idLink: 6,
            name: 'Animações e Efeitos em CSS',
            url: 'https://en.wikipedia.org/wiki/CSS_animations',
          },
          {
            idLink: 7,
            name: 'Uso de JavaScript para Interatividade Multimídia',
            url: 'https://en.wikipedia.org/wiki/JavaScript',
          },
          {
            idLink: 8,
            name: 'Técnicas de Streaming de Vídeo',
            url: 'https://en.wikipedia.org/wiki/Streaming_media',
          },
          {
            idLink: 9,
            name: 'Responsive Design para Conteúdo Multimídia',
            url: 'https://en.wikipedia.org/wiki/Responsive_web_design',
          },
          {
            idLink: 10,
            name: 'Acessibilidade em Conteúdo Multimídia',
            url: 'https://en.wikipedia.org/wiki/Web_accessibility',
          },
          {
            idLink: 11,
            name: 'Otimização de Conteúdo Multimídia para Web',
            url: 'https://en.wikipedia.org/wiki/Web_optimization',
          },
          {
            idLink: 12,
            name: 'Ferramentas e Bibliotecas para Manipulação de Multimídia',
            url: 'https://en.wikipedia.org/wiki/HTML#Scripts',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    category: 'Desenvolvimento de Jogos',
    bgColor: '#98FB98',
    textColor: '#282A36',
    img: 'DesenvolvimentoDeJogos.png',
    resources: [
      {
        idTheme: 1,
        name: 'Visão geral do Desenvolvimento de Jogos e introdução às ferramentas de desenvolvimento de jogos',
        text: 'O desenvolvimento de jogos é um campo multidisciplinar que combina gráficos de computador, inteligência artificial, física, áudio, narrativa e muito mais. Existem muitas ferramentas e plataformas disponíveis que podem ajudar você a começar a desenvolver seus próprios jogos, como Unity, Unreal Engine, Godot, GameMaker Studio, etc.',
        links: [
          {
            idLink: 1,
            name: 'Introduction to Game Development | Coursera',
            url: 'https://www.coursera.org/specializations/game-development',
          },
          {
            idLink: 2,
            name: 'Game Development | Codecademy',
            url: 'https://www.codecademy.com/learn/paths/game-development',
          },
          {
            idLink: 3,
            name: 'Game Development Tutorial for Beginners - Full Course',
            url: 'https://www.youtube.com/watch?v=Au8oX5pu5u4',
          },
          {
            idLink: 4,
            name: 'Introdução ao Desenvolvimento de Jogos',
            url: 'https://en.wikipedia.org/wiki/Game_development',
          },
          {
            idLink: 5,
            name: 'Unity - Motor de Jogo Popular',
            url: 'https://en.wikipedia.org/wiki/Unity_(game_engine)',
          },
          {
            idLink: 6,
            name: 'Unreal Engine - Motor de Jogo Avançado',
            url: 'https://en.wikipedia.org/wiki/Unreal_Engine',
          },
          {
            idLink: 7,
            name: 'Godot Engine - Motor de Jogo de Código Aberto',
            url: 'https://en.wikipedia.org/wiki/Godot_(game_engine)',
          },
          {
            idLink: 8,
            name: 'GameMaker Studio - Motor de Jogo para Iniciantes',
            url: 'https://en.wikipedia.org/wiki/GameMaker_Studio',
          },
          {
            idLink: 9,
            name: 'CryEngine - Motor de Jogo para Gráficos de Alta Fidelidade',
            url: 'https://en.wikipedia.org/wiki/CryEngine',
          },
          {
            idLink: 10,
            name: 'Desenvolvimento de Jogos 2D e 3D',
            url: 'https://en.wikipedia.org/wiki/3D_computer_graphics',
          },
          {
            idLink: 11,
            name: 'Desenvolvimento de Jogos para Dispositivos Móveis',
            url: 'https://en.wikipedia.org/wiki/Mobile_game',
          },
          {
            idLink: 12,
            name: 'Desenvolvimento de Jogos Multiplayer e Networking',
            url: 'https://en.wikipedia.org/wiki/Multiplayer_video_game',
          },
          {
            idLink: 13,
            name: 'Realidade Virtual e Aumentada em Jogos',
            url: 'https://en.wikipedia.org/wiki/Virtual_reality',
          },
        ],
      },
      {
        idTheme: 2,
        name: 'Design de Jogos — Criando a estrutura e a mecânica do jogo',
        text: 'O design de jogos é a arte de aplicar design e estética para criar um jogo para entretenimento ou para fins educacionais, de exercício ou experimentais. Muitos aspectos do design de jogos, como a criação de regras e objetivos, a definição de uma narrativa e a criação de um ambiente de jogo, são altamente criativos e requerem habilidades artísticas e técnicas.',
        links: [
          {
            idLink: 1,
            name: 'Game Design | Coursera',
            url: 'https://www.coursera.org/specializations/game-design',
          },
          {
            idLink: 2,
            name: 'Game Design Document Template',
            url: 'https://www.gamasutra.com/view/feature/131632/creating_a_great_design_document.php',
          },
          {
            idLink: 3,
            name: 'Fundamentos do Design de Jogos',
            url: 'https://en.wikipedia.org/wiki/Game_design',
          },
          {
            idLink: 4,
            name: 'Mecânica de Jogos - Regras e Sistemas Interativos',
            url: 'https://en.wikipedia.org/wiki/Game_mechanics',
          },
          {
            idLink: 5,
            name: 'Narrativa em Jogos - Desenvolvendo Histórias e Personagens',
            url: 'https://en.wikipedia.org/wiki/Video_game_narrative',
          },
          {
            idLink: 6,
            name: 'Level Design - Criando Ambientes e Desafios',
            url: 'https://en.wikipedia.org/wiki/Level_design',
          },
          {
            idLink: 7,
            name: 'Balanceamento de Jogos - Ajuste de Dificuldade e Fair Play',
            url: 'https://en.wikipedia.org/wiki/Game_balance',
          },
          {
            idLink: 8,
            name: 'Design de Interface de Usuário em Jogos',
            url: 'https://en.wikipedia.org/wiki/Game_interface_design',
          },
          {
            idLink: 9,
            name: 'Teste de Jogabilidade - Feedback e Iteração',
            url: 'https://en.wikipedia.org/wiki/Playtesting_(game_design)',
          },
          {
            idLink: 10,
            name: 'Economia de Jogos - Criação de Sistemas Econômicos In-Game',
            url: 'https://en.wikipedia.org/wiki/Virtual_economy',
          },
          {
            idLink: 11,
            name: 'Inteligência Artificial em Jogos',
            url: 'https://en.wikipedia.org/wiki/Artificial_intelligence_in_video_games',
          },
          {
            idLink: 12,
            name: 'Design de Som em Jogos',
            url: 'https://en.wikipedia.org/wiki/Sound_design#Video_and_computer_games',
          },
        ],
      },
      {
        idTheme: 3,
        name: 'Desenvolvimento de Personagens — Criando personagens memoráveis e envolventes',
        text: 'O desenvolvimento de personagens é uma parte crucial do design de jogos. Um personagem bem desenvolvido não só melhora a jogabilidade, mas também ajuda a conduzir a narrativa e a envolver os jogadores. Isso pode envolver a criação de backstories detalhados, a definição de habilidades e fraquezas, e até mesmo a concepção de aparências únicas para cada personagem.',
        links: [
          {
            idLink: 1,
            name: 'Character Design Tips for Better Video Game Characters',
            url: 'https://conceptartempire.com/video-game-character-design/',
          },
          {
            idLink: 2,
            name: 'Character Design: 10 Tips to Create Believable Characters',
            url: 'https://www.gamedesigning.org/career/character-design/',
          },
          {
            idLink: 3,
            name: 'Fundamentos do Desenvolvimento de Personagens',
            url: 'https://en.wikipedia.org/wiki/Character_development',
          },
          {
            idLink: 4,
            name: 'Design de Personagens em Jogos',
            url: 'https://en.wikipedia.org/wiki/Character_design',
          },
          {
            idLink: 5,
            name: 'Narrativa e Construção de Personagens',
            url: 'https://en.wikipedia.org/wiki/Character_arc',
          },
          {
            idLink: 6,
            name: 'Psicologia de Personagens e Profundidade Emocional',
            url: 'https://en.wikipedia.org/wiki/Psychology_of_characters',
          },
          {
            idLink: 7,
            name: 'Criação de Diálogos e Personalidade',
            url: 'https://en.wikipedia.org/wiki/Dialogue',
          },
          {
            idLink: 8,
            name: 'Desenvolvimento Visual de Personagens',
            url: 'https://en.wikipedia.org/wiki/Visual_storytelling',
          },
          {
            idLink: 9,
            name: 'Animação de Personagens e Expressões',
            url: 'https://en.wikipedia.org/wiki/Character_animation',
          },
          {
            idLink: 10,
            name: 'Arquétipos e Diversidade de Personagens',
            url: 'https://en.wikipedia.org/wiki/Archetype',
          },
          {
            idLink: 11,
            name: 'Backstory e História do Personagem',
            url: 'https://en.wikipedia.org/wiki/Backstory',
          },
          {
            idLink: 12,
            name: 'Personagens e Interação com o Mundo do Jogo',
            url: 'https://en.wikipedia.org/wiki/Game_world',
          },
        ],
      },
      {
        idTheme: 4,
        name: 'Design de Níveis — Construindo os mundos e ambientes do jogo',
        text: 'O design de níveis é a construção de mundos, ambientes e cenários para jogos. É uma disciplina fundamental no desenvolvimento de jogos que cria a experiência do jogador ao navegar pelo mundo do jogo. O design de níveis requer uma combinação de habilidades técnicas em software de modelagem 3D e habilidades criativas na criação de uma experiência envolvente e divertida para os jogadores.',
        links: [
          {
            idLink: 1,
            name: 'Level Design - The Art of Creating Game Worlds | Udemy',
            url: 'https://www.udemy.com/course/level-design-the-art-of-creating-game-worlds/',
          },
          {
            idLink: 2,
            name: 'Level Design Tutorial for Beginners',
            url: 'https://www.youtube.com/watch?v=HVB6UVcb3f8',
          },
          {
            idLink: 3,
            name: 'Introdução ao Design de Níveis',
            url: 'https://en.wikipedia.org/wiki/Level_design',
          },
          {
            idLink: 4,
            name: 'Princípios de Arquitetura em Design de Níveis',
            url: 'https://en.wikipedia.org/wiki/Level_design#Architecture',
          },
          {
            idLink: 5,
            name: 'Criação de Ambientes Imersivos',
            url: 'https://en.wikipedia.org/wiki/Virtual_world',
          },
          {
            idLink: 6,
            name: 'Design de Níveis para Diferentes Gêneros de Jogos',
            url: 'https://en.wikipedia.org/wiki/Video_game_genre',
          },
          {
            idLink: 7,
            name: 'Equilíbrio e Progressão no Design de Níveis',
            url: 'https://en.wikipedia.org/wiki/Game_balance',
          },
          {
            idLink: 8,
            name: 'Narrativa e Storytelling através do Design de Níveis',
            url: 'https://en.wikipedia.org/wiki/Environmental_storytelling',
          },
          {
            idLink: 9,
            name: 'Desafios e Obstáculos em Design de Níveis',
            url: 'https://en.wikipedia.org/wiki/Obstacle',
          },
          {
            idLink: 10,
            name: 'Uso de Iluminação e Som no Design de Níveis',
            url: 'https://en.wikipedia.org/wiki/Lighting',
          },
          {
            idLink: 11,
            name: 'Técnicas de Mapeamento e Modelagem 3D',
            url: 'https://en.wikipedia.org/wiki/3D_modeling',
          },
          {
            idLink: 12,
            name: 'Ferramentas de Design de Níveis e Software',
            url: 'https://en.wikipedia.org/wiki/Game_editor',
          },
        ],
      },
      {
        idTheme: 5,
        name: 'Inteligência Artificial em Jogos — Criando NPCs (Non-Player Characters) que parecem reais',
        text: 'A inteligência artificial em jogos é usada para gerar comportamentos inteligentes e responsivos em personagens não jogadores (NPCs) e até mesmo para melhorar a jogabilidade com ajustes dinâmicos de dificuldade. A IA em jogos tem visto alguns avanços significativos nos últimos anos, com NPCs cada vez mais capazes de responder de maneira realista aos jogadores e ao ambiente do jogo.',
        links: [
          {
            idLink: 1,
            name: 'Game AI Tutorial for Beginners',
            url: 'https://www.youtube.com/watch?v=Vz5l886eptw',
          },
          {
            idLink: 2,
            name: 'Game AI Pro',
            url: 'https://www.gameaipro.com/',
          },
          {
            idLink: 3,
            name: 'Fundamentos da IA em Jogos',
            url: 'https://en.wikipedia.org/wiki/Artificial_intelligence_in_video_games',
          },
          {
            idLink: 4,
            name: 'Desenvolvimento de NPCs Realistas',
            url: 'https://en.wikipedia.org/wiki/Non-player_character#Artificial_intelligence',
          },
          {
            idLink: 5,
            name: 'Sistemas de Comportamento e Tomada de Decisão para NPCs',
            url: 'https://en.wikipedia.org/wiki/Behavior_tree_(artificial_intelligence,_robotics_and_control)',
          },
          {
            idLink: 6,
            name: 'IA de NPCs em Jogos de Mundo Aberto',
            url: 'https://en.wikipedia.org/wiki/Open_world',
          },
          {
            idLink: 7,
            name: 'Pathfinding e Navegação de NPCs',
            url: 'https://en.wikipedia.org/wiki/Pathfinding',
          },
          {
            idLink: 8,
            name: 'Interação Dinâmica de NPCs com o Ambiente do Jogo',
            url: 'https://en.wikipedia.org/wiki/Game_physics',
          },
          {
            idLink: 9,
            name: 'Simulação de Multidões e Comportamento de Grupo em NPCs',
            url: 'https://en.wikipedia.org/wiki/Crowd_simulation',
          },
          {
            idLink: 10,
            name: 'Aprendizado de Máquina e IA Adaptativa em Jogos',
            url: 'https://en.wikipedia.org/wiki/Machine_learning',
          },
          {
            idLink: 11,
            name: 'Modelagem de Personalidade e Emoções em NPCs',
            url: 'https://en.wikipedia.org/wiki/Artificial_emotion',
          },
          {
            idLink: 12,
            name: 'Desafios e Tendências Futuras da IA em Jogos',
            url: 'https://en.wikipedia.org/wiki/Artificial_intelligence_in_video_games#Challenges_and_future_directions',
          },
        ],
      },
      {
        idTheme: 6,
        name: 'Desenvolvimento Frontend e Backend em Jogos',
        text: 'Assim como no desenvolvimento web, o desenvolvimento de jogos também pode ser dividido em desenvolvimento frontend e backend. O desenvolvimento frontend em jogos geralmente se refere à criação da interface do usuário e à implementação de todos os aspectos visuais do jogo, enquanto o desenvolvimento backend em jogos geralmente envolve trabalhar no servidor do jogo, implementando a lógica do jogo e gerenciando o banco de dados do jogo.',
        links: [
          {
            idLink: 1,
            name: 'Game Development | Codecademy',
            url: 'https://www.codecademy.com/learn/paths/game-development',
          },
          {
            idLink: 2,
            name: 'Game Development Tutorial for Beginners - Full Course',
            url: 'https://www.youtube.com/watch?v=Au8oX5pu5u4',
          },
          {
            idLink: 3,
            name: 'Fundamentos do Desenvolvimento Frontend em Jogos',
            url: 'https://en.wikipedia.org/wiki/Front_and_back_ends#Front-end',
          },
          {
            idLink: 4,
            name: 'Técnicas de Renderização e Gráficos em Jogos',
            url: 'https://en.wikipedia.org/wiki/Rendering_(computer_graphics)',
          },
          {
            idLink: 5,
            name: 'Desenvolvimento de Interface de Usuário em Jogos',
            url: 'https://en.wikipedia.org/wiki/Game_interface_design',
          },
          {
            idLink: 6,
            name: 'Fundamentos do Desenvolvimento Backend em Jogos',
            url: 'https://en.wikipedia.org/wiki/Front_and_back_ends#Back-end',
          },
          {
            idLink: 7,
            name: 'Servidores e Networking em Jogos',
            url: 'https://en.wikipedia.org/wiki/Game_server',
          },
          {
            idLink: 8,
            name: 'Bancos de Dados e Armazenamento de Dados em Jogos',
            url: 'https://en.wikipedia.org/wiki/Database',
          },
          {
            idLink: 9,
            name: 'Integração de Sistemas Multiplayer e Lógica de Jogo',
            url: 'https://en.wikipedia.org/wiki/Multiplayer_video_game',
          },
          {
            idLink: 10,
            name: 'Segurança e Proteção de Dados em Jogos Online',
            url: 'https://en.wikipedia.org/wiki/Computer_security',
          },
          {
            idLink: 11,
            name: 'Desempenho e Otimização em Jogos',
            url: 'https://en.wikipedia.org/wiki/Video_game_optimization',
          },
          {
            idLink: 12,
            name: 'Ferramentas e Frameworks para Desenvolvimento de Jogos',
            url: 'https://en.wikipedia.org/wiki/Game_engine',
          },
        ],
      },
      {
        idTheme: 7,
        name: 'Teste de Jogos — Garantindo que o jogo funcione como esperado',
        text: 'O teste de jogos é uma parte crucial do desenvolvimento de jogos. Envolve a verificação de que cada aspecto do jogo funciona como esperado, que o jogo é divertido de jogar e que não há bugs ou problemas que possam prejudicar a experiência do jogador. O teste de jogos pode envolver uma variedade de técnicas, desde o teste manual por testadores humanos até o uso de ferramentas automatizadas de teste de software.',
        links: [
          {
            idLink: 1,
            name: 'Game Testing Tutorial for Beginners',
            url: 'https://www.youtube.com/watch?v=OW1A4XFRuyc',
          },
          {
            idLink: 2,
            name: 'Visão Geral do Teste de Jogos',
            url: 'https://en.wikipedia.org/wiki/Game_testing',
          },
          {
            idLink: 3,
            name: 'Teste de Funcionalidade em Jogos',
            url: 'https://en.wikipedia.org/wiki/Software_testing#Functional_testing',
          },
          {
            idLink: 4,
            name: 'Teste de Usabilidade em Jogos',
            url: 'https://en.wikipedia.org/wiki/Usability_testing',
          },
          {
            idLink: 5,
            name: 'Teste de Interface e Experiência do Usuário',
            url: 'https://en.wikipedia.org/wiki/User_interface_testing',
          },
          {
            idLink: 6,
            name: 'Teste de Performance e Otimização de Jogos',
            url: 'https://en.wikipedia.org/wiki/Software_performance_testing',
          },
          {
            idLink: 7,
            name: 'Teste de Compatibilidade e Jogos Multiplataforma',
            url: 'https://en.wikipedia.org/wiki/Compatibility_testing',
          },
          {
            idLink: 8,
            name: 'Teste de Segurança em Jogos Online',
            url: 'https://en.wikipedia.org/wiki/Security_testing',
          },
          {
            idLink: 9,
            name: 'Teste de Regressão em Atualizações de Jogos',
            url: 'https://en.wikipedia.org/wiki/Regression_testing',
          },
          {
            idLink: 10,
            name: 'Teste de Inteligência Artificial e NPCs',
            url: 'https://en.wikipedia.org/wiki/AI_testing',
          },
          {
            idLink: 11,
            name: 'Teste de Carga em Ambientes de Jogos Multiplayer',
            url: 'https://en.wikipedia.org/wiki/Load_testing',
          },
          {
            idLink: 12,
            name: 'Ferramentas e Técnicas para Teste de Jogos',
            url: 'https://en.wikipedia.org/wiki/Game_testing#Tools_and_techniques',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    category: 'Segurança da Informação',
    bgColor: '#E6E6FA',
    textColor: '#282A36',
    img: 'SegurancaDaInformacao.png',
    resources: [
      {
        idTheme: 2,
        name: 'Criptografia',
        text: 'A criptografia é uma das principais técnicas de segurança da informação. Ela transforma informações em um formato que só pode ser lido por quem possui a chave de descriptografia. Isso é essencial para proteger dados sensíveis contra acesso não autorizado.',
        links: [
          {
            idLink: 1,
            name: 'Tutorial de Criptografia',
            url: 'https://www.tutorialspoint.com/cryptography/index.htm',
          },
          {
            idLink: 2,
            name: 'Md5 Decrypter',
            url: 'https://www.md5online.org/',
          },
          {
            idLink: 3,
            name: 'Base64 Decode and Encode - Online',
            url: 'https://www.base64decode.org/',
          },
          {
            idLink: 4,
            name: 'AES (Advanced Encryption Standard)',
            url: 'https://en.wikipedia.org/wiki/Advanced_Encryption_Standard',
          },
          {
            idLink: 5,
            name: 'RSA (Rivest–Shamir–Adleman)',
            url: 'https://en.wikipedia.org/wiki/RSA_(cryptosystem)',
          },
          {
            idLink: 6,
            name: 'DES (Data Encryption Standard)',
            url: 'https://en.wikipedia.org/wiki/Data_Encryption_Standard',
          },
          {
            idLink: 7,
            name: '3DES (Triple Data Encryption Algorithm)',
            url: 'https://en.wikipedia.org/wiki/Triple_DES',
          },
          {
            idLink: 8,
            name: 'Blowfish',
            url: 'https://en.wikipedia.org/wiki/Blowfish_(cipher)',
          },
          {
            idLink: 6,
            name: 'Twofish',
            url: 'https://en.wikipedia.org/wiki/Twofish',
          },
          {
            idLink: 9,
            name: 'SHA-256 (Secure Hash Algorithm 256)',
            url: 'https://en.wikipedia.org/wiki/SHA-2',
          },
          {
            idLink: 10,
            name: 'MD5 (Message-Digest Algorithm 5)',
            url: 'https://en.wikipedia.org/wiki/MD5',
          },
          {
            idLink: 11,
            name: 'PGP (Pretty Good Privacy)',
            url: 'https://en.wikipedia.org/wiki/Pretty_Good_Privacy',
          },
          {
            idLink: 12,
            name: 'ECC (Elliptic-Curve Cryptography)',
            url: 'https://en.wikipedia.org/wiki/Elliptic-curve_cryptography',
          },
        ],
      },
      {
        idTheme: 3,
        name: 'Firewall',
        text: 'Um firewall é uma barreira de segurança que monitora e controla o tráfego de rede com base em critérios de segurança predeterminados. Ele é fundamental para bloquear acessos não autorizados enquanto permite comunicações autorizadas.',
        links: [
          {
            idLink: 1,
            name: 'Guia do Firewall',
            url: 'https://www.cisco.com/c/en/us/products/security/firewalls/what-is-a-firewall.html',
          },
          {
            idLink: 2,
            name: 'Packet Filtering Firewall',
            url: 'https://en.wikipedia.org/wiki/Packet_filter',
          },
          {
            idLink: 3,
            name: 'Stateful Inspection Firewall',
            url: 'https://en.wikipedia.org/wiki/Stateful_firewall',
          },
          {
            idLink: 4,
            name: 'Application-Level Gateway (ALG) / Proxy Firewall',
            url: 'https://en.wikipedia.org/wiki/Application-level_gateway',
          },
          {
            idLink: 5,
            name: 'Circuit-Level Gateway',
            url: 'https://en.wikipedia.org/wiki/Circuit-level_gateway',
          },
          {
            idLink: 6,
            name: 'Next-Generation Firewall (NGFW)',
            url: 'https://en.wikipedia.org/wiki/Next-generation_firewall',
          },
          {
            idLink: 7,
            name: 'Web Application Firewall (WAF)',
            url: 'https://en.wikipedia.org/wiki/Web_application_firewall',
          },
          {
            idLink: 8,
            name: 'Database Firewall',
            url: 'https://en.wikipedia.org/wiki/Database_activity_monitoring',
          },
          {
            idLink: 9,
            name: 'Cloud Firewall',
            url: 'https://en.wikipedia.org/wiki/Cloud_firewall',
          },
        ],
      },
      {
        idTheme: 4,
        name: 'Autenticação',
        text: 'A autenticação é o processo de verificar a identidade de um usuário, dispositivo ou sistema. Ela é crucial para garantir que apenas usuários autorizados tenham acesso a recursos ou informações.',
        links: [
          {
            idLink: 1,
            name: 'Princípios de Autenticação',
            url: 'https://www.cisco.com/c/en/us/support/docs/security-vpn/remote-authentication-dial-user-service-radius/12433-32.html',
          },
          {
            idLink: 2,
            name: 'Senha Baseada em Texto',
            url: 'https://en.wikipedia.org/wiki/Password',
          },
          {
            idLink: 3,
            name: 'Autenticação de Dois Fatores (2FA)',
            url: 'https://en.wikipedia.org/wiki/Multi-factor_authentication',
          },
          {
            idLink: 4,
            name: 'Autenticação Biométrica',
            url: 'https://en.wikipedia.org/wiki/Biometrics',
          },
          {
            idLink: 5,
            name: 'Token de Segurança',
            url: 'https://en.wikipedia.org/wiki/Security_token',
          },
          {
            idLink: 6,
            name: 'Certificado Digital',
            url: 'https://en.wikipedia.org/wiki/Digital_certificate',
          },
          {
            idLink: 7,
            name: 'Autenticação Baseada em SMS',
            url: 'https://en.wikipedia.org/wiki/SMS_authentication',
          },
          {
            idLink: 8,
            name: 'Chave de Segurança Física (YubiKey, por exemplo)',
            url: 'https://en.wikipedia.org/wiki/YubiKey',
          },
          {
            idLink: 9,
            name: 'Autenticação por Reconhecimento Facial',
            url: 'https://en.wikipedia.org/wiki/Facial_recognition_system',
          },
          {
            idLink: 10,
            name: 'Autenticação por Impressão Digital',
            url: 'https://en.wikipedia.org/wiki/Fingerprint_recognition',
          },
        ],
      },
      {
        idTheme: 5,
        name: 'Backup',
        text: 'O backup é a cópia de dados que pode ser usada para restaurar e recuperar dados. É uma prática essencial para prevenir a perda de dados em caso de falhas no sistema, exclusões acidentais ou desastres naturais.',
        links: [
          {
            idLink: 1,
            name: 'Importância do Backup',
            url: 'https://www.techlise.com.br/blog/a-importancia-do-backup-para-a-seguranca-da-informacao/',
          },
          {
            idLink: 2,
            name: 'Senha Baseada em Texto',
            url: 'https://en.wikipedia.org/wiki/Password',
          },
          {
            idLink: 3,
            name: 'Autenticação de Dois Fatores (2FA)',
            url: 'https://en.wikipedia.org/wiki/Multi-factor_authentication',
          },
          {
            idLink: 4,
            name: 'Autenticação Biométrica',
            url: 'https://en.wikipedia.org/wiki/Biometrics',
          },
          {
            idLink: 5,
            name: 'Token de Segurança',
            url: 'https://en.wikipedia.org/wiki/Security_token',
          },
          {
            idLink: 6,
            name: 'Certificado Digital',
            url: 'https://en.wikipedia.org/wiki/Digital_certificate',
          },
          {
            idLink: 7,
            name: 'Autenticação Baseada em SMS',
            url: 'https://en.wikipedia.org/wiki/SMS_authentication',
          },
          {
            idLink: 8,
            name: 'Chave de Segurança Física (YubiKey, por exemplo)',
            url: 'https://en.wikipedia.org/wiki/YubiKey',
          },
          {
            idLink: 9,
            name: 'Autenticação por Reconhecimento Facial',
            url: 'https://en.wikipedia.org/wiki/Facial_recognition_system',
          },
          {
            idLink: 10,
            name: 'Autenticação por Impressão Digital',
            url: 'https://en.wikipedia.org/wiki/Fingerprint_recognition',
          },
        ],
      },
    ],
  },
  {
    id: 5,
    category: 'Realidade Virtual',
    bgColor: '#FFE5B4',
    textColor: '#282A36',
    img: 'RealidadeVirtual.png',
    resources: [
      {
        idTheme: 1,
        name: 'Introdução à Realidade Virtual',
        text: 'A Realidade Virtual (VR) é uma experiência imersiva que permite aos usuários interagir com um ambiente simulado. É frequentemente usada em jogos, treinamento e visualização de dados.',
        links: [
          {
            idLink: 1,
            name: 'Guia de Introdução à Realidade Virtual',
            url: 'https://www.vrs.org.uk/virtual-reality/what-is-virtual-reality.html',
          },
          {
            idLink: 2,
            name: 'História da Realidade Virtual',
            url: 'https://en.wikipedia.org/wiki/History_of_virtual_reality',
          },
          {
            idLink: 3,
            name: 'Tecnologias e Dispositivos de VR',
            url: 'https://en.wikipedia.org/wiki/Virtual_reality_headset',
          },
          {
            idLink: 4,
            name: 'Aplicações de VR em Educação',
            url: 'https://en.wikipedia.org/wiki/Educational_technology#Virtual_reality',
          },
          {
            idLink: 5,
            name: 'VR em Entretenimento e Jogos',
            url: 'https://en.wikipedia.org/wiki/Virtual_reality_gaming',
          },
          {
            idLink: 6,
            name: 'VR na Medicina e Saúde',
            url: 'https://en.wikipedia.org/wiki/Virtual_reality_therapy',
          },
          {
            idLink: 7,
            name: 'Desenvolvimento de Conteúdo para VR',
            url: 'https://en.wikipedia.org/wiki/Virtual_reality#Content_development',
          },
          {
            idLink: 8,
            name: 'Impacto Social e Cultural da VR',
            url: 'https://en.wikipedia.org/wiki/Virtual_reality#Society_and_culture',
          },
          {
            idLink: 9,
            name: 'Desafios e Limitações da VR',
            url: 'https://en.wikipedia.org/wiki/Virtual_reality#Challenges_and_concerns',
          },
          {
            idLink: 10,
            name: 'Futuro da Realidade Virtual',
            url: 'https://en.wikipedia.org/wiki/Virtual_reality#Future_potential',
          },
        ],
      },
      {
        idTheme: 2,
        name: 'Hardware de Realidade Virtual',
        text: 'O hardware de Realidade Virtual, como os headsets VR, são dispositivos essenciais para proporcionar experiências imersivas. Eles rastreiam os movimentos do usuário e ajustam a perspectiva visual de acordo.',
        links: [
          {
            idLink: 1,
            name: 'Visão Geral do Hardware de Realidade Virtual',
            url: 'https://www.cnet.com/topics/wearable-tech/best-wearable-tech/best-vr-headsets/',
          },
          {
            idLink: 2,
            name: 'Headsets de Realidade Virtual',
            url: 'https://en.wikipedia.org/wiki/Virtual_reality_headset',
          },
          {
            idLink: 3,
            name: 'Controladores de Movimento para VR',
            url: 'https://en.wikipedia.org/wiki/Motion_controller#Virtual_reality',
          },
          {
            idLink: 4,
            name: 'Luvas de Realidade Virtual',
            url: 'https://en.wikipedia.org/wiki/Haptic_suit#Gloves',
          },
          {
            idLink: 5,
            name: 'Plataformas de Caminhada VR',
            url: 'https://en.wikipedia.org/wiki/Omnidirectional_treadmill',
          },
          {
            idLink: 6,
            name: 'Trajes Hápticos para VR',
            url: 'https://en.wikipedia.org/wiki/Haptic_suit',
          },
          {
            idLink: 7,
            name: 'Adaptadores de Rastreamento de Olhos para VR',
            url: 'https://en.wikipedia.org/wiki/Eye_tracking#Virtual_reality',
          },
          {
            idLink: 8,
            name: 'Sensores de Posicionamento para VR',
            url: 'https://en.wikipedia.org/wiki/Motion_capture#Applications_in_virtual_reality',
          },
          {
            idLink: 9,
            name: 'Câmeras de Rastreamento de Movimento para VR',
            url: 'https://en.wikipedia.org/wiki/Motion_capture',
          },
          {
            idLink: 10,
            name: 'Ambientes Imersivos de Realidade Virtual',
            url: 'https://en.wikipedia.org/wiki/Cave_automatic_virtual_environment',
          },
        ],
      },
      {
        idTheme: 3,
        name: 'Desenvolvimento de Aplicações de Realidade Virtual',
        text: 'O desenvolvimento de aplicações de Realidade Virtual envolve a criação de conteúdo interativo para hardware de VR. As ferramentas de desenvolvimento de VR permitem aos desenvolvedores criar uma variedade de experiências, desde jogos até simulações de treinamento.',
        links: [
          {
            idLink: 1,
            name: 'Tutorial de Desenvolvimento de VR',
            url: 'https://learn.unity.com/course/introduction-to-vr',
          },
          {
            idLink: 2,
            name: 'Realidade Virtual - Visão Geral',
            url: 'https://en.wikipedia.org/wiki/Virtual_reality',
          },
          {
            idLink: 3,
            name: 'Desenvolvimento de Software para VR',
            url: 'https://en.wikipedia.org/wiki/Virtual_reality#Software',
          },
          {
            idLink: 4,
            name: 'Motor de Jogo Unity para VR',
            url: 'https://en.wikipedia.org/wiki/Unity_(game_engine)',
          },
          {
            idLink: 5,
            name: 'Unreal Engine e VR',
            url: 'https://en.wikipedia.org/wiki/Unreal_Engine',
          },
          {
            idLink: 6,
            name: 'Tecnologias de Rastreamento de Movimento para VR',
            url: 'https://en.wikipedia.org/wiki/Motion_capture#In_virtual_reality',
          },
          {
            idLink: 7,
            name: 'Interfaces de Usuário em VR',
            url: 'https://en.wikipedia.org/wiki/Virtual_reality#User_interface',
          },
          {
            idLink: 8,
            name: 'Aplicações de VR na Educação',
            url: 'https://en.wikipedia.org/wiki/Educational_technology#Virtual_reality',
          },
          {
            idLink: 9,
            name: 'Desafios no Desenvolvimento de VR',
            url: 'https://en.wikipedia.org/wiki/Virtual_reality#Challenges',
          },
          {
            idLink: 10,
            name: 'Futuro da Realidade Virtual',
            url: 'https://en.wikipedia.org/wiki/Virtual_reality#Future',
          },
        ],
      },
      {
        idTheme: 4,
        name: 'Futuro da Realidade Virtual',
        text: 'O futuro da Realidade Virtual é promissor, com avanços contínuos em hardware e software. Espera-se que a VR tenha um impacto significativo em várias indústrias, incluindo educação, saúde e entretenimento.',
        links: [
          {
            idLink: 1,
            name: 'Perspectivas Futuras da Realidade Virtual',
            url: 'https://www.forbes.com/sites/solrogers/2019/06/21/2019-the-year-virtual-reality-gets-real/',
          },
          {
            idLink: 2,
            name: 'Avanços Tecnológicos em VR',
            url: 'https://en.wikipedia.org/wiki/Virtual_reality#Technological_advancements',
          },
          {
            idLink: 3,
            name: 'VR em Educação e Treinamento',
            url: 'https://en.wikipedia.org/wiki/Educational_technology#Virtual_reality',
          },
          {
            idLink: 4,
            name: 'Impacto da VR na Medicina',
            url: 'https://en.wikipedia.org/wiki/Virtual_reality_therapy',
          },
          {
            idLink: 5,
            name: 'VR em Entretenimento e Jogos',
            url: 'https://en.wikipedia.org/wiki/Virtual_reality_gaming',
          },
          {
            idLink: 6,
            name: 'Aplicações de VR em Engenharia e Design',
            url: 'https://en.wikipedia.org/wiki/Virtual_reality#Engineering',
          },
          {
            idLink: 7,
            name: 'Integração de VR e Inteligência Artificial',
            url: 'https://en.wikipedia.org/wiki/Virtual_reality#Artificial_intelligence_integration',
          },
          {
            idLink: 8,
            name: 'VR e Realidade Aumentada (RA)',
            url: 'https://en.wikipedia.org/wiki/Augmented_reality',
          },
          {
            idLink: 9,
            name: 'Desafios Éticos e Sociais da VR',
            url: 'https://en.wikipedia.org/wiki/Virtual_reality#Ethical_and_social_challenges',
          },
          {
            idLink: 10,
            name: 'Desenvolvimento Sustentável de VR',
            url: 'https://en.wikipedia.org/wiki/Virtual_reality#Sustainability',
          },
        ],
      },
    ],
  },
  {
    id: 6,
    category: 'Ciência de Dados',
    bgColor: '#FFFACD',
    textColor: '#282A36',
    img: 'CienciaDeDados.png',
    resources: [
      {
        idTheme: 1,
        name: 'O que é Ciência de Dados?',
        text: 'Ciência de Dados é um campo interdisciplinar que utiliza métodos científicos, processos e sistemas para extrair conhecimento ou insights de dados em várias formas, tanto estruturadas quanto não estruturadas.',
        links: [
          {
            idLink: 1,
            name: 'História da Ciência de Dados',
            url: 'https://en.wikipedia.org/wiki/Data_science#History',
          },
          {
            idLink: 2,
            name: 'Importância da Ciência de Dados',
            url: 'https://www.forbes.com/sites/forbestechcouncil/2018/08/13/why-data-science-is-so-important/#12345abcd',
          },
          {
            idLink: 3,
            name: 'Definição de Ciência de Dados',
            url: 'https://en.wikipedia.org/wiki/Data_science',
          },
          {
            idLink: 4,
            name: 'História e Evolução da Ciência de Dados',
            url: 'https://en.wikipedia.org/wiki/Data_science#History',
          },
          {
            idLink: 5,
            name: 'Processo e Ciclo de Vida da Ciência de Dados',
            url: 'https://en.wikipedia.org/wiki/Data_science#Data_science_process',
          },
          {
            idLink: 6,
            name: 'Ferramentas e Tecnologias em Ciência de Dados',
            url: 'https://en.wikipedia.org/wiki/Data_science#Technologies_and_techniques',
          },
          {
            idLink: 7,
            name: 'Estatística e Análise de Dados',
            url: 'https://en.wikipedia.org/wiki/Statistics',
          },
          {
            idLink: 8,
            name: 'Aprendizado de Máquina e Modelagem Preditiva',
            url: 'https://en.wikipedia.org/wiki/Machine_learning',
          },
          {
            idLink: 9,
            name: 'Big Data e Seu Impacto na Ciência de Dados',
            url: 'https://en.wikipedia.org/wiki/Big_data',
          },
          {
            idLink: 10,
            name: 'Visualização de Dados',
            url: 'https://en.wikipedia.org/wiki/Data_visualization',
          },
          {
            idLink: 11,
            name: 'Ciência de Dados em Diferentes Indústrias',
            url: 'https://en.wikipedia.org/wiki/Data_science#In_industry',
          },
          {
            idLink: 12,
            name: 'Desafios e Tendências Futuras na Ciência de Dados',
            url: 'https://en.wikipedia.org/wiki/Data_science#Challenges',
          },
        ],
      },
      {
        idTheme: 2,
        name: 'Estatística Básica para Ciência de Dados',
        text: 'A estatística é um componente central da ciência de dados. É crucial para analisar dados e gerar insights significativos.',
        links: [
          {
            idLink: 1,
            name: 'Fundamentos de Estatística',
            url: 'https://www.khanacademy.org/math/statistics-probability',
          },
          {
            idLink: 2,
            name: 'Estatística Descritiva e Inferencial',
            url: 'https://en.wikipedia.org/wiki/Statistics',
          },
          {
            idLink: 3,
            name: 'Aplicação de Estatística em Ciência de Dados',
            url: 'https://www.springboard.com/blog/data-science/statistics-for-data-science/',
          },
          {
            idLink: 4,
            name: 'Conceitos Fundamentais de Estatística',
            url: 'https://en.wikipedia.org/wiki/Statistics',
          },
          {
            idLink: 5,
            name: 'Probabilidade e Teoria das Probabilidades',
            url: 'https://en.wikipedia.org/wiki/Probability_theory',
          },
          {
            idLink: 6,
            name: 'Variáveis Aleatórias e Distribuições de Probabilidade',
            url: 'https://en.wikipedia.org/wiki/Random_variable',
          },
          {
            idLink: 7,
            name: 'Análise Descritiva e Exploratória de Dados',
            url: 'https://en.wikipedia.org/wiki/Descriptive_statistics',
          },
          {
            idLink: 8,
            name: 'Inferência Estatística',
            url: 'https://en.wikipedia.org/wiki/Statistical_inference',
          },
          {
            idLink: 9,
            name: 'Testes de Hipóteses',
            url: 'https://en.wikipedia.org/wiki/Statistical_hypothesis_testing',
          },
          {
            idLink: 10,
            name: 'Correlação e Regressão',
            url: 'https://en.wikipedia.org/wiki/Correlation_and_dependence',
          },
          {
            idLink: 11,
            name: 'Análise de Variância (ANOVA)',
            url: 'https://en.wikipedia.org/wiki/Analysis_of_variance',
          },
          {
            idLink: 12,
            name: 'Estatística Não Paramétrica',
            url: 'https://en.wikipedia.org/wiki/Nonparametric_statistics',
          },
          {
            idLink: 13,
            name: 'Uso de Software Estatístico na Ciência de Dados',
            url: 'https://en.wikipedia.org/wiki/List_of_statistical_software',
          },
        ],
      },
      {
        idTheme: 3,
        name: 'Programação para Ciência de Dados',
        text: 'Aprender linguagens de programação como Python e R é essencial para realizar análises de dados, visualizações e modelagem preditiva.',
        links: [
          {
            idLink: 1,
            name: 'Python para Ciência de Dados',
            url: 'https://www.datacamp.com/courses/intro-to-python-for-data-science',
          },
          {
            idLink: 2,
            name: 'R para Ciência de Dados',
            url: 'https://www.r-project.org/about.html',
          },
          {
            idLink: 3,
            name: 'Bibliotecas de Análise de Dados',
            url: 'https://pandas.pydata.org/',
          },
          {
            idLink: 4,
            name: 'Python - Linguagem de Programação para Ciência de Dados',
            url: 'https://en.wikipedia.org/wiki/Python_(programming_language)#Use_in_data_science',
          },
          {
            idLink: 5,
            name: 'R - Linguagem de Programação para Estatística e Análise de Dados',
            url: 'https://en.wikipedia.org/wiki/R_(programming_language)',
          },
          {
            idLink: 6,
            name: 'SQL para Gerenciamento de Dados',
            url: 'https://en.wikipedia.org/wiki/SQL',
          },
          {
            idLink: 7,
            name: 'Utilizando Julia em Ciência de Dados',
            url: 'https://en.wikipedia.org/wiki/Julia_(programming_language)',
          },
          {
            idLink: 8,
            name: 'Bibliotecas Python para Ciência de Dados: Pandas, NumPy, SciPy',
            url: 'https://en.wikipedia.org/wiki/List_of_Python_software#Science_and_data_analysis',
          },
          {
            idLink: 9,
            name: 'Visualização de Dados com Matplotlib e Seaborn em Python',
            url: 'https://en.wikipedia.org/wiki/Matplotlib',
          },
          {
            idLink: 10,
            name: 'Aprendizado de Máquina com scikit-learn',
            url: 'https://en.wikipedia.org/wiki/Scikit-learn',
          },
          {
            idLink: 11,
            name: 'Processamento de Linguagem Natural com Python',
            url: 'https://en.wikipedia.org/wiki/Natural_language_processing',
          },
          {
            idLink: 12,
            name: 'Big Data: Hadoop e Spark',
            url: 'https://en.wikipedia.org/wiki/Apache_Hadoop',
          },
          {
            idLink: 13,
            name: 'Técnicas de Programação Eficiente para Ciência de Dados',
            url: 'https://en.wikipedia.org/wiki/Computer_programming#Programming_language',
          },
        ],
      },
      {
        idTheme: 4,
        name: 'Machine Learning',
        text: 'Machine Learning é uma parte fundamental da ciência de dados, permitindo que computadores aprendam a partir de dados.',
        links: [
          {
            idLink: 1,
            name: 'Introdução ao Machine Learning',
            url: 'https://www.coursera.org/learn/machine-learning',
          },
          {
            idLink: 2,
            name: 'Algoritmos de Machine Learning',
            url: 'https://en.wikipedia.org/wiki/Machine_learning#Algorithms',
          },
          {
            idLink: 3,
            name: 'Machine Learning em Python',
            url: 'https://scikit-learn.org/stable/',
          },
          {
            idLink: 4,
            name: 'Introdução ao Machine Learning',
            url: 'https://en.wikipedia.org/wiki/Machine_learning',
          },
          {
            idLink: 5,
            name: 'Tipos de Aprendizado de Máquina: Supervisionado, Não Supervisionado e por Reforço',
            url: 'https://en.wikipedia.org/wiki/Machine_learning#Types_of_learning_algorithms',
          },
          {
            idLink: 6,
            name: 'Algoritmos de Machine Learning',
            url: 'https://en.wikipedia.org/wiki/List_of_machine_learning_algorithms',
          },
          {
            idLink: 7,
            name: 'Redes Neurais e Deep Learning',
            url: 'https://en.wikipedia.org/wiki/Deep_learning',
          },
          {
            idLink: 8,
            name: 'Processamento de Linguagem Natural (PLN)',
            url: 'https://en.wikipedia.org/wiki/Natural_language_processing',
          },
          {
            idLink: 9,
            name: 'Visão Computacional',
            url: 'https://en.wikipedia.org/wiki/Computer_vision',
          },
          {
            idLink: 10,
            name: 'Machine Learning em Big Data',
            url: 'https://en.wikipedia.org/wiki/Big_data',
          },
          {
            idLink: 11,
            name: 'Ética e Machine Learning',
            url: 'https://en.wikipedia.org/wiki/Ethics_of_artificial_intelligence#Machine_learning_ethics',
          },
          {
            idLink: 12,
            name: 'Ferramentas e Frameworks de Machine Learning',
            url: 'https://en.wikipedia.org/wiki/Machine_learning#Software',
          },
          {
            idLink: 13,
            name: 'Desafios e Tendências Futuras em Machine Learning',
            url: 'https://en.wikipedia.org/wiki/Machine_learning#Challenges_and_future_directions',
          },
        ],
      },
    ],
  },
  {
    id: 7,
    category: 'Desenvolvimento Mobile',
    bgColor: '#AFEEEE',
    textColor: '#282A36',
    img: 'DesenvolvimentoMobile.png',
    resources: [
      {
        idTheme: 1,
        name: 'Introdução ao Desenvolvimento Mobile',
        text: 'O desenvolvimento mobile envolve a criação de software para dispositivos móveis. Isso inclui entender os diferentes sistemas operacionais, linguagens de programação e frameworks.',
        links: [
          {
            idLink: 1,
            name: 'Começando com Desenvolvimento Mobile',
            url: 'https://www.androidauthority.com/developing-for-android-vs-ios-697304/',
          },
          {
            idLink: 2,
            name: 'Plataformas de Desenvolvimento Mobile',
            url: 'https://en.wikipedia.org/wiki/Mobile_app_development',
          },
          {
            idLink: 3,
            name: 'Ferramentas e Ambientes de Desenvolvimento',
            url: 'https://developer.apple.com/library/archive/documentation/ToolsLanguages/Conceptual/Xcode_Overview/',
          },
          {
            idLink: 4,
            name: 'Visão Geral do Desenvolvimento de Aplicações Móveis',
            url: 'https://en.wikipedia.org/wiki/Mobile_app_development',
          },
          {
            idLink: 5,
            name: 'Plataformas de Desenvolvimento Mobile: Android e iOS',
            url: 'https://en.wikipedia.org/wiki/Mobile_operating_system',
          },
          {
            idLink: 6,
            name: 'Linguagens de Programação para Mobile: Java, Swift, Kotlin',
            url: 'https://en.wikipedia.org/wiki/Mobile_app_development#Programming_languages',
          },
          {
            idLink: 7,
            name: 'Desenvolvimento Cross-Platform: React Native, Flutter',
            url: 'https://en.wikipedia.org/wiki/Mobile_app_development#Cross-platform_development',
          },
          {
            idLink: 8,
            name: 'Design de Interface de Usuário para Aplicações Móveis',
            url: 'https://en.wikipedia.org/wiki/User_interface_design#Mobile_interface_design',
          },
          {
            idLink: 9,
            name: 'Gestão de Dados e Armazenamento em Dispositivos Móveis',
            url: 'https://en.wikipedia.org/wiki/Mobile_database',
          },
          {
            idLink: 10,
            name: 'Integração com APIs e Serviços Web',
            url: 'https://en.wikipedia.org/wiki/Web_API',
          },
          {
            idLink: 11,
            name: 'Segurança em Aplicações Móveis',
            url: 'https://en.wikipedia.org/wiki/Mobile_security',
          },
          {
            idLink: 12,
            name: 'Teste e Depuração de Aplicações Móveis',
            url: 'https://en.wikipedia.org/wiki/Mobile_application_testing',
          },
          {
            idLink: 13,
            name: 'Distribuição e Monetização de Aplicações Móveis',
            url: 'https://en.wikipedia.org/wiki/Mobile_app#Distribution',
          },
        ],
      },
      {
        idTheme: 2,
        name: 'Android Development',
        text: 'Desenvolvimento para Android envolve usar linguagens como Java ou Kotlin. Compreende a criação de aplicativos para o sistema operacional Android, usando ferramentas como Android Studio.',
        links: [
          {
            idLink: 1,
            name: 'Guia Oficial de Desenvolvimento Android',
            url: 'https://developer.android.com/guide',
          },
          {
            idLink: 2,
            name: 'Kotlin para Android',
            url: 'https://kotlinlang.org/docs/android-overview.html',
          },
          {
            idLink: 3,
            name: 'Android Studio e Ferramentas',
            url: 'https://developer.android.com/studio',
          },
          {
            idLink: 4,
            name: 'Introdução ao Desenvolvimento Android',
            url: 'https://en.wikipedia.org/wiki/Android_software_development',
          },
          {
            idLink: 5,
            name: 'Android Studio e SDK Android',
            url: 'https://en.wikipedia.org/wiki/Android_Studio',
          },
          {
            idLink: 6,
            name: 'Linguagens de Programação para Android: Java e Kotlin',
            url: 'https://en.wikipedia.org/wiki/Android_software_development#Programming_languages',
          },
          {
            idLink: 7,
            name: 'Componentes da Interface de Usuário no Android',
            url: 'https://en.wikipedia.org/wiki/Android_(operating_system)#User_interface',
          },
          {
            idLink: 8,
            name: 'Gestão de Dados e Armazenamento no Android',
            url: 'https://en.wikipedia.org/wiki/Android_(operating_system)#Storage',
          },
          {
            idLink: 9,
            name: 'Integração com APIs e Serviços Google',
            url: 'https://en.wikipedia.org/wiki/Google_APIs',
          },
          {
            idLink: 10,
            name: 'Segurança e Permissões no Android',
            url: 'https://en.wikipedia.org/wiki/Android_(operating_system)#Security_and_privacy',
          },
          {
            idLink: 11,
            name: 'Otimização de Performance e Teste de Aplicações Android',
            url: 'https://en.wikipedia.org/wiki/Android_(operating_system)#Performance',
          },
          {
            idLink: 12,
            name: 'Publicação e Distribuição de Aplicações no Google Play',
            url: 'https://en.wikipedia.org/wiki/Google_Play',
          },
          {
            idLink: 13,
            name: 'Tendências e Inovações no Desenvolvimento Android',
            url: 'https://en.wikipedia.org/wiki/Android_(operating_system)#History',
          },
        ],
      },
      {
        idTheme: 3,
        name: 'iOS Development',
        text: 'Desenvolvimento para iOS envolve o uso de Swift ou Objective-C. Inclui a criação de aplicativos para iPhones e iPads, utilizando ferramentas como Xcode.',
        links: [
          {
            idLink: 1,
            name: 'Introdução ao Desenvolvimento iOS',
            url: 'https://developer.apple.com/develop/',
          },
          {
            idLink: 2,
            name: 'Swift para Desenvolvedores iOS',
            url: 'https://www.apple.com/swift/',
          },
          {
            idLink: 3,
            name: 'Xcode para Desenvolvedores iOS',
            url: 'https://developer.apple.com/xcode/',
          },
          {
            idLink: 4,
            name: 'Introdução ao Desenvolvimento iOS',
            url: 'https://en.wikipedia.org/wiki/IOS_app_development',
          },
          {
            idLink: 5,
            name: 'Xcode e Ambiente de Desenvolvimento iOS',
            url: 'https://en.wikipedia.org/wiki/Xcode',
          },
          {
            idLink: 6,
            name: 'Swift - Linguagem de Programação para iOS',
            url: 'https://en.wikipedia.org/wiki/Swift_(programming_language)',
          },
          {
            idLink: 7,
            name: 'Objective-C em Desenvolvimento iOS',
            url: 'https://en.wikipedia.org/wiki/Objective-C',
          },
          {
            idLink: 8,
            name: 'Design de Interface e Experiência do Usuário no iOS',
            url: 'https://en.wikipedia.org/wiki/User_interface_design',
          },
          {
            idLink: 9,
            name: 'Gerenciamento de Dados e Armazenamento no iOS',
            url: 'https://en.wikipedia.org/wiki/IOS#Storage_and_file_system',
          },
          {
            idLink: 10,
            name: 'Integração com APIs e Serviços Apple',
            url: 'https://en.wikipedia.org/wiki/API',
          },
          {
            idLink: 11,
            name: 'Segurança e Privacidade em Aplicações iOS',
            url: 'https://en.wikipedia.org/wiki/IOS_security',
          },
          {
            idLink: 12,
            name: 'Teste e Depuração de Aplicações iOS',
            url: 'https://en.wikipedia.org/wiki/Xcode#Features',
          },
          {
            idLink: 13,
            name: 'Distribuição e Monetização de Aplicações na App Store',
            url: 'https://en.wikipedia.org/wiki/App_Store_(iOS/iPadOS)',
          },
        ],
      },
      {
        idTheme: 4,
        name: 'Desenvolvimento Cross-Platform',
        text: 'Desenvolvimento Cross-Platform permite criar aplicativos que funcionam tanto em Android quanto em iOS. Ferramentas como React Native e Flutter são usadas para este propósito.',
        links: [
          {
            idLink: 1,
            name: 'React Native para Desenvolvimento Móvel',
            url: 'https://reactnative.dev/',
          },
          {
            idLink: 2,
            name: 'Introdução ao Flutter',
            url: 'https://flutter.dev/',
          },
          {
            idLink: 3,
            name: 'Comparativo entre React Native e Flutter',
            url: 'https://www.mindinventory.com/blog/flutter-vs-react-native/',
          },
          {
            idLink: 4,
            name: 'Visão Geral do Desenvolvimento Cross-Platform',
            url: 'https://en.wikipedia.org/wiki/Cross-platform_software',
          },
          {
            idLink: 5,
            name: 'React Native para Desenvolvimento Multiplataforma',
            url: 'https://en.wikipedia.org/wiki/React_Native',
          },
          {
            idLink: 6,
            name: 'Flutter - Framework da Google para Interfaces Nativas',
            url: 'https://en.wikipedia.org/wiki/Flutter_(software)',
          },
          {
            idLink: 7,
            name: 'Xamarin para Desenvolvimento de Aplicações Móveis',
            url: 'https://en.wikipedia.org/wiki/Xamarin',
          },
          {
            idLink: 8,
            name: 'Apache Cordova para Aplicações Web Mobile',
            url: 'https://en.wikipedia.org/wiki/Apache_Cordova',
          },
          {
            idLink: 9,
            name: 'Unity para Jogos Multiplataforma',
            url: 'https://en.wikipedia.org/wiki/Unity_(game_engine)',
          },
          {
            idLink: 10,
            name: 'Desafios e Considerações no Desenvolvimento Cross-Platform',
            url: 'https://en.wikipedia.org/wiki/Cross-platform_software#Challenges',
          },
          {
            idLink: 11,
            name: 'Teste e Otimização para Diversas Plataformas',
            url: 'https://en.wikipedia.org/wiki/Software_testing',
          },
          {
            idLink: 12,
            name: 'Gestão de Dependências e Pacotes em Projetos Multiplataforma',
            url: 'https://en.wikipedia.org/wiki/Package_manager',
          },
          {
            idLink: 13,
            name: 'Tendências Futuras em Desenvolvimento Cross-Platform',
            url: 'https://en.wikipedia.org/wiki/Cross-platform_software#Future',
          },
        ],
      },
    ],
  },
  {
    id: 8,
    category: 'Desing',
    bgColor: '#FFA07A',
    textColor: '#282A36',
    img: 'Desing.png',
    resources: [
      {
        idTheme: 1,
        name: 'Behance',
        text: 'Behance é uma plataforma de exposição de trabalhos criativos, onde designers compartilham seus portfolios e encontram inspiração.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Behance',
            url: 'https://www.behance.net/',
          },
          {
            idLink: 2,
            name: 'Explorar Projetos no Behance',
            url: 'https://www.behance.net/search/projects',
          },
        ],
      },
      {
        idTheme: 2,
        name: 'Dribbble',
        text: 'Dribbble é uma comunidade de designers e criativos que compartilham pequenos fragmentos de seu trabalho, processos e projetos atuais.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Dribbble',
            url: 'https://dribbble.com/',
          },
          {
            idLink: 2,
            name: 'Explorar Designs no Dribbble',
            url: 'https://dribbble.com/shots',
          },
        ],
      },
      {
        idTheme: 3,
        name: 'Remove.bg',
        text: 'Remove.bg é uma ferramenta online para remoção automática de fundo de imagens, útil para designers que trabalham com composição e montagem.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Remove.bg',
            url: 'https://www.remove.bg/',
          },
          {
            idLink: 2,
            name: 'Usar Remove.bg para Remover Fundos',
            url: 'https://www.remove.bg/upload',
          },
        ],
      },
      {
        idTheme: 4,
        name: 'Unsplash',
        text: 'Unsplash oferece fotografias de alta resolução gratuitas, fornecidas por uma comunidade generosa de fotógrafos, ideais para designs e composições.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Unsplash',
            url: 'https://unsplash.com/',
          },
          {
            idLink: 2,
            name: 'Explorar Fotos no Unsplash',
            url: 'https://unsplash.com/s/photos',
          },
        ],
      },
      {
        idTheme: 5,
        name: 'Canva',
        text: 'Canva é uma ferramenta de design gráfico online, fácil de usar, que oferece acesso a uma vasta gama de modelos, imagens e ícones.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Canva',
            url: 'https://www.canva.com/',
          },
          {
            idLink: 2,
            name: 'Criar Designs no Canva',
            url: 'https://www.canva.com/create',
          },
        ],
      },
      {
        idTheme: 6,
        name: 'Adobe Color',
        text: 'Adobe Color é uma ferramenta online para criação e compartilhamento de paletas de cores, ajudando designers a escolher combinações de cores harmoniosas para seus projetos.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Adobe Color',
            url: 'https://color.adobe.com/',
          },
          {
            idLink: 2,
            name: 'Criar Paletas de Cores com Adobe Color',
            url: 'https://color.adobe.com/create/color-wheel',
          },
        ],
      },
      {
        idTheme: 7,
        name: 'Font Squirrel',
        text: 'Font Squirrel é um recurso para encontrar fontes gratuitas e de alta qualidade, com uma ferramenta de identificação de fontes e uma seleção de fontes licenciadas para uso comercial.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Font Squirrel',
            url: 'https://www.fontsquirrel.com/',
          },
          {
            idLink: 2,
            name: 'Encontrar Fontes no Font Squirrel',
            url: 'https://www.fontsquirrel.com/fonts',
          },
        ],
      },
      {
        idTheme: 8,
        name: 'Pixlr',
        text: 'Pixlr oferece um conjunto de ferramentas de edição de imagem online, incluindo um editor de imagem avançado e um editor expresso para ajustes rápidos.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Pixlr',
            url: 'https://pixlr.com/',
          },
          {
            idLink: 2,
            name: 'Editar Imagens no Pixlr',
            url: 'https://pixlr.com/editor/',
          },
        ],
      },
      {
        idTheme: 9,
        name: 'Coolors',
        text: 'Coolors é uma ferramenta rápida para geração de paletas de cores, permitindo que designers criem, salvem e compartilhem paletas de cores com facilidade.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Coolors',
            url: 'https://coolors.co/',
          },
          {
            idLink: 2,
            name: 'Gerador de Paletas de Cores Coolors',
            url: 'https://coolors.co/generate',
          },
        ],
      },
      {
        idTheme: 10,
        name: 'Creative Market',
        text: 'Creative Market é um mercado online para comprar gráficos, fontes, temas, fotos e outros conteúdos digitais criados por designers independentes.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Creative Market',
            url: 'https://creativemarket.com/',
          },
          {
            idLink: 2,
            name: 'Explorar Produtos no Creative Market',
            url: 'https://creativemarket.com/search',
          },
        ],
      },
      {
        idTheme: 11,
        name: 'Flaticon',
        text: 'Flaticon oferece uma vasta coleção de ícones em diversos formatos, útil para designers gráficos e web designers na criação de interfaces e materiais gráficos.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Flaticon',
            url: 'https://www.flaticon.com/',
          },
          {
            idLink: 2,
            name: 'Explorar Ícones no Flaticon',
            url: 'https://www.flaticon.com/search',
          },
        ],
      },
      {
        idTheme: 12,
        name: 'InVision',
        text: 'InVision é uma ferramenta de design de interface e prototipagem, que permite aos designers criar interações realistas e gerenciar o processo de design.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do InVision',
            url: 'https://www.invisionapp.com/',
          },
          {
            idLink: 2,
            name: 'Iniciar um Projeto no InVision',
            url: 'https://www.invisionapp.com/inside-design/design-resources/',
          },
        ],
      },
      {
        idTheme: 13,
        name: 'Sketch',
        text: 'Sketch é uma ferramenta de design digital focada em design de interface e prototipagem, popular entre designers de UI/UX.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Sketch',
            url: 'https://www.sketch.com/',
          },
          {
            idLink: 2,
            name: 'Explorar Recursos do Sketch',
            url: 'https://www.sketch.com/extensions/',
          },
        ],
      },
      {
        idTheme: 14,
        name: 'Figma',
        text: 'Figma é uma ferramenta de design de interface baseada em navegador, que facilita a colaboração em tempo real entre equipes de design.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Figma',
            url: 'https://www.figma.com/',
          },
          {
            idLink: 2,
            name: 'Começar a Usar o Figma',
            url: 'https://www.figma.com/best-practices/',
          },
        ],
      },
      {
        idTheme: 15,
        name: 'Gravit Designer',
        text: 'Gravit Designer é uma ferramenta de design gráfico avançada e completa, oferecendo capacidades de vetor, layout, foto e mais.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Gravit Designer',
            url: 'https://www.designer.io/en/',
          },
          {
            idLink: 2,
            name: 'Explorar Recursos do Gravit Designer',
            url: 'https://www.designer.io/en/learn/',
          },
        ],
      },
      {
        idTheme: 16,
        name: '99designs',
        text: '99designs é uma plataforma onde designers podem participar de concursos de design e se conectar com clientes, ideal para encontrar inspiração e oportunidades de trabalho.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do 99designs',
            url: 'https://99designs.com/',
          },
          {
            idLink: 2,
            name: 'Explorar Concursos de Design no 99designs',
            url: 'https://99designs.com/contests',
          },
        ],
      },
      {
        idTheme: 17,
        name: 'Color Hunt',
        text: 'Color Hunt é uma ferramenta gratuita e de fácil uso para encontrar combinações de cores, oferecendo uma grande variedade de paletas de cores inspiradoras.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Color Hunt',
            url: 'https://colorhunt.co/',
          },
          {
            idLink: 2,
            name: 'Explorar Paletas de Cores no Color Hunt',
            url: 'https://colorhunt.co/palettes/popular',
          },
        ],
      },
      {
        idTheme: 18,
        name: 'Designspiration',
        text: 'Designspiration é um recurso para descobrir e compartilhar ideias de design visual, semelhante a uma versão focada em design do Pinterest.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Designspiration',
            url: 'https://www.designspiration.com/',
          },
          {
            idLink: 2,
            name: 'Explorar Inspirações no Designspiration',
            url: 'https://www.designspiration.com/save/',
          },
        ],
      },
      {
        idTheme: 19,
        name: 'Envato Elements',
        text: 'Envato Elements oferece uma vasta biblioteca de templates de design gráfico, vídeo, áudio, e muito mais, sob uma assinatura única.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Envato Elements',
            url: 'https://elements.envato.com/',
          },
          {
            idLink: 2,
            name: 'Explorar Recursos no Envato Elements',
            url: 'https://elements.envato.com/graphic-templates',
          },
        ],
      },
      {
        idTheme: 20,
        name: 'Typography.com',
        text: 'Typography.com é um recurso para encontrar fontes de alta qualidade e únicas, com foco em tipografia para projetos de design.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Typography.com',
            url: 'https://www.typography.com/',
          },
          {
            idLink: 2,
            name: 'Explorar Fontes no Typography.com',
            url: 'https://www.typography.com/fonts/',
          },
        ],
      },
      {
        idTheme: 21,
        name: 'UI Movement',
        text: 'UI Movement é um site dedicado a inspiração de design de interface, com foco em animações e interações de UI.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do UI Movement',
            url: 'https://uimovement.com/',
          },
          {
            idLink: 2,
            name: 'Explorar Designs de UI no UI Movement',
            url: 'https://uimovement.com/ui-tags/',
          },
        ],
      },
      {
        idTheme: 22,
        name: 'Pexels',
        text: 'Pexels oferece fotos e vídeos gratuitos de alta qualidade compartilhados por uma comunidade talentosa, ideal para projetos de design que necessitam de imagens visuais.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Pexels',
            url: 'https://www.pexels.com/',
          },
          {
            idLink: 2,
            name: 'Explorar Fotos e Vídeos no Pexels',
            url: 'https://www.pexels.com/search/',
          },
        ],
      },
      {
        idTheme: 23,
        name: 'Awwwards',
        text: 'Awwwards reconhece os melhores talentos e esforços dos designers, desenvolvedores e agências web do mundo, servindo como fonte de inspiração e tendências em design web.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Awwwards',
            url: 'https://www.awwwards.com/',
          },
          {
            idLink: 2,
            name: 'Explorar Projetos Premiados no Awwwards',
            url: 'https://www.awwwards.com/websites/',
          },
        ],
      },
      {
        idTheme: 24,
        name: 'Freepik',
        text: 'Freepik oferece uma grande variedade de recursos gráficos gratuitos, incluindo vetores, ícones, fotos e PSDs, úteis para designers gráficos e web designers.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Freepik',
            url: 'https://www.freepik.com/',
          },
          {
            idLink: 2,
            name: 'Explorar Recursos no Freepik',
            url: 'https://www.freepik.com/popular-photos',
          },
        ],
      },
      {
        idTheme: 25,
        name: 'Mockup World',
        text: 'Mockup World oferece uma extensa coleção de mockups de produtos gratuitos para apresentar projetos de design de maneira realista e profissional.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Mockup World',
            url: 'https://www.mockupworld.co/',
          },
          {
            idLink: 2,
            name: 'Explorar Mockups no Mockup World',
            url: 'https://www.mockupworld.co/all-mockups/',
          },
        ],
      },
      {
        idTheme: 26,
        name: 'Vecteezy',
        text: 'Vecteezy é um recurso para encontrar vetores, clipart e ilustrações gratuitas, úteis para uma variedade de projetos de design.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Vecteezy',
            url: 'https://www.vecteezy.com/',
          },
          {
            idLink: 2,
            name: 'Explorar Vetores no Vecteezy',
            url: 'https://www.vecteezy.com/free-vector',
          },
        ],
      },
      {
        idTheme: 27,
        name: 'Material Design',
        text: 'Material Design é um sistema de design desenvolvido pelo Google, oferecendo diretrizes, componentes e ferramentas para criar experiências de usuário intuitivas e coerentes.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Material Design',
            url: 'https://material.io/',
          },
          {
            idLink: 2,
            name: 'Recursos do Material Design',
            url: 'https://material.io/resources',
          },
        ],
      },
      {
        idTheme: 28,
        name: 'Blush',
        text: 'Blush oferece coleções de ilustrações personalizáveis para designers, permitindo criar imagens únicas para projetos digitais e impressos.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Blush',
            url: 'https://blush.design/',
          },
          {
            idLink: 2,
            name: 'Criar Ilustrações com Blush',
            url: 'https://blush.design/collections',
          },
        ],
      },
      {
        idTheme: 29,
        name: 'Font Awesome',
        text: 'Font Awesome é uma biblioteca de ícones e ferramentas associadas, popular entre desenvolvedores web e designers para incorporar ícones em projetos digitais.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Font Awesome',
            url: 'https://fontawesome.com/',
          },
          {
            idLink: 2,
            name: 'Explorar Ícones no Font Awesome',
            url: 'https://fontawesome.com/icons',
          },
        ],
      },
      {
        idTheme: 30,
        name: 'Designmodo',
        text: 'Designmodo oferece artigos, tutoriais e recursos para web design e desenvolvimento, além de ferramentas úteis como geradores de email e website templates.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Designmodo',
            url: 'https://designmodo.com/',
          },
          {
            idLink: 2,
            name: 'Recursos e Tutoriais do Designmodo',
            url: 'https://designmodo.com/blog/',
          },
        ],
      },
      {
        idTheme: 31,
        name: 'Creative Bloq',
        text: 'Creative Bloq oferece notícias diárias, dicas, tutoriais, avaliações e recursos inspiradores para o mundo do design gráfico, web design e 3D.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Creative Bloq',
            url: 'https://www.creativebloq.com/',
          },
          {
            idLink: 2,
            name: 'Artigos e Tutoriais do Creative Bloq',
            url: 'https://www.creativebloq.com/how-to',
          },
        ],
      },
      {
        idTheme: 32,
        name: 'GraphicBurger',
        text: 'GraphicBurger oferece mockups, UI kits, ícones, texturas e outros recursos gráficos de alta qualidade para designers.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do GraphicBurger',
            url: 'https://graphicburger.com/',
          },
          {
            idLink: 2,
            name: 'Explorar Recursos no GraphicBurger',
            url: 'https://graphicburger.com/mock-ups/',
          },
        ],
      },
      {
        idTheme: 33,
        name: 'LogoLounge',
        text: 'LogoLounge é um site dedicado a logotipos e identidade de marca, oferecendo inspiração, recursos e uma comunidade para designers de logotipos.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do LogoLounge',
            url: 'https://www.logolounge.com/',
          },
          {
            idLink: 2,
            name: 'Galeria de Logotipos do LogoLounge',
            url: 'https://www.logolounge.com/logo-inspiration',
          },
        ],
      },
      {
        idTheme: 34,
        name: 'Niice',
        text: 'Niice é uma ferramenta de brainstorm e moodboarding, que ajuda equipes criativas a coletar e compartilhar ideias visuais.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Niice',
            url: 'https://niice.co/',
          },
          {
            idLink: 2,
            name: 'Criar Moodboards com Niice',
            url: 'https://niice.co/moodboards',
          },
        ],
      },
      {
        idTheme: 35,
        name: 'Smashing Magazine',
        text: 'Smashing Magazine é uma revista online para designers e desenvolvedores web, com artigos sobre técnicas, tendências e melhores práticas em web design e desenvolvimento.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Smashing Magazine',
            url: 'https://www.smashingmagazine.com/',
          },
          {
            idLink: 2,
            name: 'Artigos e Tutoriais do Smashing Magazine',
            url: 'https://www.smashingmagazine.com/articles/',
          },
        ],
      },
      {
        idTheme: 36,
        name: 'Design Hill',
        text: 'Design Hill é uma plataforma criativa que oferece serviços como criação de logotipos, design gráfico, design de embalagens e concursos de design.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Design Hill',
            url: 'https://www.designhill.com/',
          },
          {
            idLink: 2,
            name: 'Serviços e Concursos no Design Hill',
            url: 'https://www.designhill.com/design-services',
          },
        ],
      },
      {
        idTheme: 37,
        name: 'Logo Maker by Ucraft',
        text: 'Logo Maker by Ucraft é uma ferramenta online gratuita para criar logotipos rapidamente, ideal para startups e pequenos negócios.',
        links: [
          {
            idLink: 1,
            name: 'Criar Logotipo com Ucraft',
            url: 'https://www.ucraft.com/free-logo-maker',
          },
        ],
      },
      {
        idTheme: 38,
        name: 'Pattern Library',
        text: 'Pattern Library é uma coleção online de padrões de design, oferecendo inspiração para fundos, texturas e elementos gráficos.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Pattern Library',
            url: 'http://thepatternlibrary.com/',
          },
        ],
      },
      {
        idTheme: 39,
        name: 'The Noun Project',
        text: 'The Noun Project reúne uma enorme coleção de ícones de diversos designers do mundo todo, proporcionando uma vasta biblioteca de ícones para todos os fins.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do The Noun Project',
            url: 'https://thenounproject.com/',
          },
          {
            idLink: 2,
            name: 'Explorar Ícones no The Noun Project',
            url: 'https://thenounproject.com/icons/',
          },
        ],
      },
      {
        idTheme: 40,
        name: 'Webdesigner Depot',
        text: 'Webdesigner Depot é um blog popular que oferece as últimas notícias, tendências e tutoriais em design web e UX.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Webdesigner Depot',
            url: 'https://www.webdesignerdepot.com/',
          },
          {
            idLink: 2,
            name: 'Artigos e Recursos no Webdesigner Depot',
            url: 'https://www.webdesignerdepot.com/category/resources/',
          },
        ],
      },
    ],
  },
  {
    id: 9,
    category: 'Front-end',
    bgColor: '#F88379',
    textColor: '#282A36',
    img: 'FrontEnd.png',
    resources: [
      {
        idTheme: 1,
        name: 'Html',
        text: 'É a base de qualquer página da web. É usada para estruturar o conteúdo e elementos na página da web.',
        links: [
          {
            idLink: 1,
            name: 'W3Schools',
            url: 'https://www.w3schools.com/html/',
          },
          {
            idLink: 2,
            name: 'Mozilla Developer Network (MDN)',
            url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
          },
          {
            idLink: 3,
            name: 'Codecademy',
            url: 'https://www.codecademy.com/learn/learn-html',
          },
          {
            idLink: 4,
            name: 'HTML.com',
            url: 'https://html.com/',
          },
          {
            idLink: 5,
            name: 'Coursera',
            url: 'https://www.coursera.org/courses?query=html',
          },
          {
            idLink: 6,
            name: 'HTML: HyperText Markup Language | MDN',
            url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
          },
          {
            idLink: 7,
            name: 'HTML Tutorial - W3Schools',
            url: 'https://www.w3schools.com/html/',
          },
          {
            idLink: 8,
            name: 'HTML basics - Learn web development | MDN',
            url: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics',
          },
          {
            idLink: 9,
            name: 'Getting started with HTML - Learn web development | MDN',
            url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started',
          },
          {
            idLink: 10,
            name: 'HTML Basic - W3Schools',
            url: 'https://www.w3schools.com/html/html_basic.asp',
          },
        ],
      },
      {
        idTheme: 2,
        name: 'Css',
        text: 'Usada para controlar a apresentação, formatação e layout das páginas web. Trabalha em conjunto com o HTML para melhorar a aparência das páginas.',
        links: [
          {
            idLink: 1,
            name: 'W3Schools CSS Tutorial',
            url: 'https://www.w3schools.com/css/',
          },
          {
            idLink: 2,
            name: 'Mozilla Developer Network (MDN) CSS',
            url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
          },
          {
            idLink: 3,
            name: 'CSS Tricks',
            url: 'https://css-tricks.com/',
          },
          {
            idLink: 4,
            name: 'FreeCodeCamp',
            url: 'https://www.freecodecamp.org/learn/responsive-web-design/',
          },
          {
            idLink: 5,
            name: 'Codecademy',
            url: 'https://www.codecademy.com/learn/learn-css',
          },
          {
            idLink: 6,
            name: 'CSS Tutorial - W3Schools',
            url: 'https://www.w3schools.com/css/',
          },
          {
            idLink: 7,
            name: 'CSS Tutorials - CSS: Cascading Style Sheets | MDN',
            url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS',
          },
          {
            idLink: 8,
            name: 'Getting started with CSS - Learn web development | MDN',
            url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps',
          },
          {
            idLink: 9,
            name: 'CSS basics - Learn web development | MDN',
            url: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics',
          },
          {
            idLink: 10,
            name: 'CSS Tutorial',
            url: 'https://www.tutorialspoint.com/css/index.htm',
          },
        ],
      },
      {
        idTheme: 3,
        name: 'Javascript',
        text: 'É uma linguagem de programação que permite que você implemente itens complexos em páginas da web - toda vez que uma página da web faz mais do que apenas mostrar informações estáticas para você - mostrando conteúdo que se atualiza em um intervalo de tempo, mapas interativos ou gráficos 2D / 3D animados, etc.',
        links: [
          {
            idLink: 1,
            name: 'Mozilla Developer Network (MDN) - JavaScript',
            url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          },
          {
            idLink: 2,
            name: 'W3Schools JavaScript Tutorial',
            url: 'https://www.w3schools.com/js/',
          },
          {
            idLink: 3,
            name: 'JavaScript.info',
            url: 'https://javascript.info/',
          },
          {
            idLink: 4,
            name: 'Eloquent JavaScript - Online Book',
            url: 'https://eloquentjavascript.net/',
          },
          {
            idLink: 5,
            name: 'FreeCodeCamp',
            url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/',
          },
          {
            idLink: 6,
            name: 'JavaScript Tutorial - W3Schools',
            url: 'https://www.w3schools.com/js/',
          },
          {
            idLink: 7,
            name: 'The Modern JavaScript Tutorial',
            url: 'https://javascript.info/',
          },
          {
            idLink: 8,
            name: 'JavaScript basics - Learn web development | MDN',
            url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript',
          },
          {
            idLink: 9,
            name: 'What is JavaScript? - Learn web development | MDN',
            url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript',
          },
          {
            idLink: 10,
            name: 'Introduction - JavaScript | MDN',
            url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction',
          },
        ],
      },
      {
        idTheme: 4,
        name: 'TypeScript',
        text: 'É uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.',
        links: [
          {
            idLink: 1,
            name: 'Official TypeScript Documentation',
            url: 'https://www.typescriptlang.org/docs/',
          },
          {
            idLink: 2,
            name: 'TypeScript Deep Dive - GitBook',
            url: 'https://basarat.gitbook.io/typescript/',
          },
          {
            idLink: 3,
            name: 'FreeCodeCamp TypeScript Tutorial',
            url: 'https://www.freecodecamp.org/news/learn-typescript-beginners-guide/',
          },
          {
            idLink: 4,
            name: 'Udemy TypeScript Courses',
            url: 'https://www.udemy.com/topic/typescript/',
          },
          {
            idLink: 5,
            name: 'Coursera TypeScript Courses',
            url: 'https://www.coursera.org/courses?query=typescript',
          },
          {
            idLink: 6,
            name: 'TypeScript: The starting point for learning TypeScript',
            url: 'https://www.typescriptlang.org/docs/',
          },
          {
            idLink: 7,
            name: 'TypeScript Tutorial - W3Schools',
            url: 'https://www.w3schools.com/typescript/',
          },
          {
            idLink: 8,
            name: 'TypeScript tutorial with Visual Studio Code',
            url: 'https://code.visualstudio.com/docs/typescript/typescript-tutorial',
          },
          {
            idLink: 9,
            name: 'Documentation - TypeScript for JavaScript Programmers',
            url: 'https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html',
          },
          {
            idLink: 10,
            name: 'Get started with TypeScript - Training | Microsoft Learn',
            url: 'https://learn.microsoft.com/en-us/training/modules/typescript-get-started/',
          },
        ],
      },
      {
        idTheme: 5,
        name: 'React',
        text: 'É uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.',
        links: [
          {
            idLink: 1,
            name: 'React - Official Documentation',
            url: 'https://reactjs.org/docs/getting-started.html',
          },
          {
            idLink: 2,
            name: 'FreeCodeCamp - React Tutorial',
            url: 'https://www.freecodecamp.org/news/tag/react/',
          },
          {
            idLink: 3,
            name: 'Codecademy - Learn React',
            url: 'https://www.codecademy.com/learn/react-101',
          },
          {
            idLink: 4,
            name: 'Udemy React Courses',
            url: 'https://www.udemy.com/topic/react/',
          },
          {
            idLink: 5,
            name: 'Scrimba - Learn React for Free',
            url: 'https://scrimba.com/learn/learnreact',
          },
          {
            idLink: 6,
            name: 'Quick Start – React',
            url: 'https://reactjs.org/docs/getting-started.html',
          },
          {
            idLink: 7,
            name: 'React Tutorial - W3Schools',
            url: 'https://www.w3schools.com/react/',
          },
          {
            idLink: 8,
            name: 'Getting started with React - Learn web development | MDN',
            url: 'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started',
          },
          {
            idLink: 9,
            name: 'React Tutorial',
            url: 'https://react-tutorial.app/',
          },
          {
            idLink: 10,
            name: 'The Complete React Tutorial for 2021 – Learn Major React Concepts by...',
            url: 'https://www.freecodecamp.org/news/the-complete-react-tutorial-for-2021/',
          },
        ],
      },
      {
        idTheme: 6,
        name: 'React Native',
        text: 'É uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e IOS de forma nativa.',
        links: [
          {
            idLink: 1,
            name: 'React Native - Official Documentation',
            url: 'https://reactnative.dev/docs/getting-started',
          },
          {
            idLink: 2,
            name: 'FreeCodeCamp - Introduction to React Native',
            url: 'https://www.freecodecamp.org/news/tag/react-native/',
          },
          {
            idLink: 3,
            name: 'Udemy React Native Courses',
            url: 'https://www.udemy.com/topic/react-native/',
          },
          {
            idLink: 4,
            name: 'Codecademy - Learn React Native',
            url: 'https://www.codecademy.com/learn/learn-react-native',
          },
          {
            idLink: 5,
            name: 'Coursera React Native Courses',
            url: 'https://www.coursera.org/courses?query=react%20native',
          },
          {
            idLink: 6,
            name: 'Learn the Basics · React Native',
            url: 'https://reactnative.dev/docs/getting-started',
          },
          {
            idLink: 7,
            name: 'Introduction · React Native',
            url: 'https://reactnative.dev/docs/introduction',
          },
          {
            idLink: 8,
            name: 'React Fundamentals · React Native',
            url: 'https://reactnative.dev/docs/fundamentals',
          },
          {
            idLink: 9,
            name: 'Learn React Native | Codecademy',
            url: 'https://www.codecademy.com/learn/learn-react-native',
          },
          {
            idLink: 10,
            name: 'React Native · Learn once, write anywhere',
            url: 'https://reactnative.dev/',
          },
        ],
      },
      {
        idTheme: 7,
        name: 'Vue.js',
        text: 'É uma estrutura JavaScript de código aberto para criar interfaces de usuário e aplicativos de página única.',
        links: [
          {
            idLink: 1,
            name: 'Vue.js - Official Documentation',
            url: 'https://vuejs.org/v2/guide/',
          },
          {
            idLink: 2,
            name: 'Scrimba - Vue.js Course for Beginners',
            url: 'https://scrimba.com/learn/vuejs',
          },
          {
            idLink: 3,
            name: 'Vue Mastery',
            url: 'https://www.vuemastery.com/',
          },
          {
            idLink: 4,
            name: 'Udemy Vue.js Courses',
            url: 'https://www.udemy.com/topic/vue-js/',
          },
          {
            idLink: 5,
            name: 'FreeCodeCamp - Full Course on Vue.js',
            url: 'https://www.freecodecamp.org/news/vue-js-full-course/',
          },
          {
            idLink: 6,
            name: 'Tutorial | Vue.js',
            url: 'https://vuejs.org/v2/guide/',
          },
          {
            idLink: 7,
            name: 'Vue Tutorial - W3Schools',
            url: 'https://www.w3schools.com/vue/',
          },
          {
            idLink: 8,
            name: 'Getting started with Vue - Learn web development | MDN',
            url: 'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started',
          },
          {
            idLink: 9,
            name: 'Introduction | Vue.js',
            url: 'https://vuejs.org/v2/guide/introduction.html',
          },
          {
            idLink: 10,
            name: 'Quick Start | Vue.js',
            url: 'https://vuejs.org/v2/guide/index.html',
          },
        ],
      },
      {
        idTheme: 8,
        name: 'Angular',
        text: 'É uma plataforma de aplicações web de código-fonte aberto baseado em TypeScript liderado pela equipe do Angular na Google e por uma comunidade de indivíduos e corporações.',
        links: [
          {
            idLink: 1,
            name: 'Angular - Official Documentation',
            url: 'https://angular.io/docs',
          },
          {
            idLink: 2,
            name: 'Codecademy - Learn Angular',
            url: 'https://www.codecademy.com/learn/learn-angularjs',
          },
          {
            idLink: 3,
            name: 'Coursera Angular Courses',
            url: 'https://www.coursera.org/courses?query=angular',
          },
          {
            idLink: 4,
            name: 'Udemy Angular Courses',
            url: 'https://www.udemy.com/topic/angular/',
          },
          {
            idLink: 5,
            name: 'FreeCodeCamp - Full Angular Course',
            url: 'https://www.freecodecamp.org/news/beaucarnes/angular-tutorial-course--H1jgKo9jE',
          },
          {
            idLink: 6,
            name: 'Angular - Angular tutorials',
            url: 'https://angular.io/tutorial',
          },
          {
            idLink: 7,
            name: 'Complete Angular Tutorial For Beginners - TekTutorialsHub',
            url: 'https://www.tektutorialshub.com/angular-tutorial/',
          },
          {
            idLink: 8,
            name: 'Angular',
            url: 'https://angular.io/start',
          },
          {
            idLink: 9,
            name: 'Getting started with Angular - Learn web development | MDN',
            url: 'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started',
          },
          {
            idLink: 10,
            name: 'Angular 11 Tutorials - TutorialsTeacher.com',
            url: 'https://www.tutorialsteacher.com/angular',
          },
        ],
      },
      {
        idTheme: 9,
        name: 'Sass',
        text: 'É uma linguagem de script que é interpretada ou compilada em Cascading Style Sheets (CSS). SassScript é a linguagem em si. Sass consiste em duas sintaxes. A sintaxe original, chamada de sintaxe indentada, usa uma sintaxe semelhante a Haml.',
        links: [
          {
            idLink: 1,
            name: 'Sass - Official Documentation',
            url: 'https://sass-lang.com/guide',
          },
          {
            idLink: 2,
            name: 'Codecademy - Learn Sass',
            url: 'https://www.codecademy.com/learn/learn-sass',
          },
          {
            idLink: 3,
            name: 'FreeCodeCamp - Sass Tutorial',
            url: 'https://www.freecodecamp.org/news/the-sass-way/',
          },
          {
            idLink: 4,
            name: 'Udemy Sass Courses',
            url: 'https://www.udemy.com/topic/sass/',
          },
          {
            idLink: 5,
            name: 'Scrimba - Learn Sass',
            url: 'https://scrimba.com/learn/sass',
          },
          {
            idLink: 6,
            name: 'Sass: Sass Basics',
            url: 'https://sass-lang.com/guide',
          },
          {
            idLink: 7,
            name: 'Sass Tutorial - W3Schools',
            url: 'https://www.w3schools.com/sass/',
          },
          {
            idLink: 8,
            name: 'Sass: Documentation',
            url: 'https://sass-lang.com/documentation',
          },
          {
            idLink: 9,
            name: 'The Beginners Guide to Sass - freeCodeCamp.org',
            url: 'https://www.freecodecamp.org/news/the-beginners-guide-to-sass/',
          },
          {
            idLink: 10,
            name: 'Learn Sass | Codecademy',
            url: 'https://www.codecademy.com/learn/learn-sass',
          },
        ],
      },
      {
        idTheme: 10,
        name: 'Bootstrap',
        text: 'É uma estrutura de código aberto para desenvolvimento de componentes de interface front-end para sites e aplicativos da web usando HTML, CSS e JavaScript, com suporte a HTML e CSS baseados em modelos de design para tipografia, formas, botões, navegação e outros componentes da interface.',
        links: [
          {
            idLink: 1,
            name: 'Bootstrap - Official Documentation',
            url: 'https://getbootstrap.com/docs/',
          },
          {
            idLink: 2,
            name: 'W3Schools - Bootstrap Tutorial',
            url: 'https://www.w3schools.com/bootstrap/',
          },
          {
            idLink: 3,
            name: 'Udemy Bootstrap Courses',
            url: 'https://www.udemy.com/topic/bootstrap/',
          },
          {
            idLink: 4,
            name: 'FreeCodeCamp - Bootstrap',
            url: 'https://www.freecodecamp.org/news/tag/bootstrap/',
          },
          {
            idLink: 5,
            name: 'Codecademy - Learn Bootstrap',
            url: 'https://www.codecademy.com/learn/learn-bootstrap',
          },
          {
            idLink: 6,
            name: 'Bootstrap 3 Tutorial - W3Schools',
            url: 'https://www.w3schools.com/bootstrap/',
          },
          {
            idLink: 7,
            name: 'Introduction · Bootstrap v5.0',
            url: 'https://getbootstrap.com/docs/5.0/getting-started/introduction/',
          },
          {
            idLink: 8,
            name: 'Bootstrap 5 Tutorial - An Ultimate Guide for Beginners',
            url: 'https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/',
          },
          {
            idLink: 9,
            name: 'Bootstrap 4 Tutorial - W3Schools',
            url: 'https://www.w3schools.com/bootstrap4/',
          },
          {
            idLink: 10,
            name: 'Get started with Bootstrap · Bootstrap v5.2',
            url: 'https://getbootstrap.com/docs/5.2/getting-started/introduction/',
          },
        ],
      },
      {
        idTheme: 11,
        name: 'Tailwind CSS',
        text: 'É uma estrutura CSS de código aberto que permite criar rapidamente designs personalizados e responsivos para sites e aplicativos da web.',
        links: [
          {
            idLink: 1,
            name: 'Tailwind CSS - Official Documentation',
            url: 'https://tailwindcss.com/docs',
          },
          {
            idLink: 2,
            name: 'Tailwind CSS: From Zero to Production',
            url: 'https://www.youtube.com/watch?v=qYgogv4R8zg',
          },
          {
            idLink: 3,
            name: 'Scrimba - Learn Tailwind CSS for Free',
            url: 'https://scrimba.com/learn/tailwind',
          },
          {
            idLink: 4,
            name: 'Udemy Tailwind CSS Courses',
            url: 'https://www.udemy.com/topic/tailwind-css/',
          },
          {
            idLink: 5,
            name: 'Codecademy - Learn Tailwind CSS',
            url: 'https://www.codecademy.com/learn/learn-tailwind-css',
          },
          {
            idLink: 6,
            name: 'Documentation - Tailwind CSS',
            url: 'https://tailwindcss.com/docs',
          },
          {
            idLink: 7,
            name: 'Tailwind CSS Tutorial for Beginners: A Guide to Get Started in 2023',
            url: 'https://www.codeinwp.com/blog/tailwind-css-tutorial/',
          },
          {
            idLink: 8,
            name: 'Tailwind CSS - GeeksforGeeks',
            url: 'https://www.geeksforgeeks.org/tailwind-css/',
          },
          {
            idLink: 9,
            name: 'Designing with Tailwind CSS',
            url: 'https://tailwindcss.com/course',
          },
        ],
      },
      {
        idTheme: 12,
        name: 'jQuery',
        text: 'É uma biblioteca de funções JavaScript que interage com o HTML, desenvolvida para simplificar os scripts interpretados no navegador do cliente.',
        links: [
          {
            idLink: 1,
            name: 'jQuery - Official Documentation',
            url: 'https://api.jquery.com/',
          },
          {
            idLink: 2,
            name: 'W3Schools - jQuery Tutorial',
            url: 'https://www.w3schools.com/jquery/',
          },
          {
            idLink: 3,
            name: 'FreeCodeCamp - jQuery',
            url: 'https://www.freecodecamp.org/news/tag/jquery/',
          },
          {
            idLink: 4,
            name: 'Codecademy - Learn jQuery',
            url: 'https://www.codecademy.com/learn/learn-jquery',
          },
          {
            idLink: 5,
            name: 'Udemy jQuery Courses',
            url: 'https://www.udemy.com/topic/jquery/',
          },
          {
            idLink: 6,
            name: 'jQuery Tutorial - W3Schools',
            url: 'https://www.w3schools.com/jquery/',
          },
          {
            idLink: 7,
            name: 'jQuery Learning Center',
            url: 'https://learn.jquery.com/',
          },
          {
            idLink: 8,
            name: 'How jQuery Works | jQuery Learning Center',
            url: 'https://learn.jquery.com/about-jquery/how-jquery-works/',
          },
          {
            idLink: 9,
            name: 'Learn jQuery using Step-by-Step Tutorials - TutorialsTeacher.com',
            url: 'https://www.tutorialsteacher.com/jquery',
          },
          {
            idLink: 10,
            name: 'jQuery Syntax - W3Schools',
            url: 'https://www.w3schools.com/jquery/jquery_syntax.asp',
          },
        ],
      },
      {
        idTheme: 13,
        name: 'Webpack',
        text: 'É um empacotador de módulos estáticos para aplicativos JavaScript modernos. Quando o webpack processa seu aplicativo, ele constrói internamente um gráfico de dependência que mapeia todos os módulos de que seu projeto precisa e gera um ou mais pacotes.',
        links: [
          {
            idLink: 1,
            name: 'Webpack - Official Documentation',
            url: 'https://webpack.js.org/concepts/',
          },
          {
            idLink: 2,
            name: 'Webpack Academy',
            url: 'https://webpack.academy/',
          },
          {
            idLink: 3,
            name: 'FreeCodeCamp - Introduction to Webpack',
            url: 'https://www.freecodecamp.org/news/what-is-webpack-how-does-it-work/',
          },
          {
            idLink: 4,
            name: 'Udemy Webpack Courses',
            url: 'https://www.udemy.com/topic/webpack/',
          },
          {
            idLink: 5,
            name: 'Coursera Webpack Courses',
            url: 'https://www.coursera.org/courses?query=webpack',
          },
          {
            idLink: 6,
            name: 'Getting Started | webpack',
            url: 'https://webpack.js.org/guides/getting-started/',
          },
          {
            idLink: 7,
            name: 'A Beginner’s Guide to Webpack — SitePoint',
            url: 'https://www.sitepoint.com/webpack-beginner-guide/',
          },
          {
            idLink: 8,
            name: 'Guides | webpack',
            url: 'https://webpack.js.org/guides/',
          },
          {
            idLink: 9,
            name: 'Development | webpack',
            url: 'https://webpack.js.org/guides/development/',
          },
        ],
      },
      {
        idTheme: 14,
        name: 'Babel',
        text: 'Um transcompilador JavaScript usado principalmente para converter código ECMAScript 2015+ (ES6+) em uma versão compatível com navegadores mais antigos.',
        links: [
          {
            idLink: 1,
            name: 'Babel - Official Documentation',
            url: 'https://babeljs.io/docs/en/',
          },
          {
            idLink: 2,
            name: 'FreeCodeCamp - Introduction to Babel',
            url: 'https://www.freecodecamp.org/news/learn-babel/',
          },
          {
            idLink: 3,
            name: 'JavaScript.Info - An Introduction to Babel',
            url: 'https://javascript.info/polyfills#babel',
          },
          {
            idLink: 4,
            name: 'Udemy Babel Courses',
            url: 'https://www.udemy.com/topic/babel/',
          },
          {
            idLink: 5,
            name: 'Coursera Babel Courses',
            url: 'https://www.coursera.org/courses?query=babel',
          },
          {
            idLink: 6,
            name: 'What is Babel? · Babel',
            url: 'https://babeljs.io/docs/',
          },
          {
            idLink: 7,
            name: 'Babel · Babel',
            url: 'https://babeljs.io/',
          },
          {
            idLink: 8,
            name: 'Usage Guide · Babel',
            url: 'https://babeljs.io/docs/usage',
          },
          {
            idLink: 9,
            name: 'Babel Tutorial: How to Set Up and Configure Babel 7',
            url: 'https://www.taniarascia.com/es6-syntax-and-feature-overview/',
          },
        ],
      },
      {
        idTheme: 15,
        name: 'Nuxt.js',
        text: 'É um framework de aplicativos da web de código aberto baseado em Vue.js, Node.js, Webpack e Babel.js.',
        links: [
          {
            idLink: 1,
            name: 'Nuxt.js - Official Documentation',
            url: 'https://nuxtjs.org/docs/get-started/installation',
          },
          {
            idLink: 2,
            name: 'Vue School - Nuxt.js Courses',
            url: 'https://vueschool.io/topics/nuxt',
          },
          {
            idLink: 3,
            name: 'FreeCodeCamp - Introduction to Nuxt.js',
            url: 'https://www.freecodecamp.org/news/tag/nuxt/',
          },
          {
            idLink: 4,
            name: 'Udemy Nuxt.js Courses',
            url: 'https://www.udemy.com/topic/nuxtjs/',
          },
          {
            idLink: 5,
            name: 'Codecademy - Learn Nuxt.js',
            url: 'https://www.codecademy.com/learn/learn-nuxt-js',
          },
          {
            idLink: 6,
            name: 'Introduction · Get Started with Nuxt',
            url: 'https://nuxtjs.org/guide',
          },
          {
            idLink: 7,
            name: 'Installation · Get Started with Nuxt',
            url: 'https://nuxtjs.org/docs/2.x/get-started/installation',
          },
          {
            idLink: 8,
            name: 'Nuxt 2 - Tutorials',
            url: 'https://id.nuxtjs.org/tutorials',
          },
          {
            idLink: 9,
            name: 'Nuxt JS Crash Course - YouTube',
            url: 'https://www.youtube.com/watch?v=ltzlhAxJr74',
          },
          {
            idLink: 10,
            name: 'Getting Started with Nuxt 3 | A Beginners Guide - YouTube',
            url: 'https://www.youtube.com/watch?v=ntyXvLnxyXk',
          },
        ],
      },
      {
        idTheme: 16,
        name: 'Redux',
        text: 'Uma biblioteca JavaScript para gerenciar o estado da aplicação. Muito usada em combinação com React, mas pode ser usada com qualquer outra biblioteca ou framework JavaScript.',
        links: [
          {
            idLink: 1,
            name: 'Redux - Official Documentation',
            url: 'https://redux.js.org/introduction/getting-started',
          },
          {
            idLink: 2,
            name: 'FreeCodeCamp - Full Course on Redux',
            url: 'https://www.freecodecamp.org/news/tag/redux/',
          },
          {
            idLink: 3,
            name: 'Codecademy - Learn Redux',
            url: 'https://www.codecademy.com/learn/learn-redux',
          },
          {
            idLink: 4,
            name: 'Udemy Redux Courses',
            url: 'https://www.udemy.com/topic/redux-framework/',
          },
          {
            idLink: 5,
            name: 'Egghead.io - Redux Courses',
            url: 'https://egghead.io/courses/getting-started-with-redux',
          },
          {
            idLink: 6,
            name: 'Redux Fundamentals, Part 1: Redux Overview',
            url: 'https://redux.js.org/tutorials/fundamentals/part-1-overview',
          },
          {
            idLink: 7,
            name: 'Getting Started with Redux',
            url: 'https://redux.js.org/introduction/getting-started',
          },
          {
            idLink: 8,
            name: 'Redux Essentials, Part 1: Redux Overview and Concepts',
            url: 'https://redux.js.org/tutorials/essentials/part-1-overview-concepts',
          },
          {
            idLink: 9,
            name: 'Understanding Redux: A tutorial with examples - LogRocket Blog',
            url: 'https://blog.logrocket.com/understanding-redux-tutorial-examples/',
          },
          {
            idLink: 10,
            name: 'Quick Start | React Redux - JS.ORG',
            url: 'https://react-redux.js.org/introduction/quick-start',
          },
        ],
      },
    ],
  },
  {
    id: 10,
    category: 'Back-end',
    bgColor: '#B2DFDB',
    textColor: '#282A36',
    img: 'BackEnd.png',
    resources: [
      {
        idTheme: 1,
        name: 'Node.js',
        text: 'É uma plataforma construída sobre o motor JavaScript do Google Chrome para facilmente construir aplicações de rede rápidas e escaláveis. Node.js usa um modelo de I/O direcionada a evento não bloqueante que o torna leve e eficiente, ideal para aplicações em tempo real com troca intensa de dados através de dispositivos distribuídos.',
        links: [
          {
            idLink: 1,
            name: 'Node.js - Official Documentation',
            url: 'https://nodejs.org/en/docs/',
          },
          {
            idLink: 2,
            name: 'FreeCodeCamp - Introduction to Node.js',
            url: 'https://www.freecodecamp.org/news/what-exactly-is-node-js-ae36e97449f5/',
          },
          {
            idLink: 3,
            name: 'Udemy Node.js Courses',
            url: 'https://www.udemy.com/topic/nodejs/',
          },
          {
            idLink: 4,
            name: 'Codecademy - Learn Node.js',
            url: 'https://www.codecademy.com/learn/learn-node-js',
          },
          {
            idLink: 5,
            name: 'Coursera Node.js Courses',
            url: 'https://www.coursera.org/courses?query=node.js',
          },
          {
            idLink: 6,
            name: 'Node.js Tutorial - W3Schools',
            url: 'https://www.w3schools.com/nodejs/',
          },
          {
            idLink: 7,
            name: 'Learn Node.js | Node.js',
            url: 'https://nodejs.org/en/learn',
          },
          {
            idLink: 8,
            name: 'Introduction to Node.js | Node.js',
            url: 'https://nodejs.org/en/learn',
          },
          {
            idLink: 9,
            name: 'NodeJS Tutorial | Learn NodeJS - GeeksforGeeks',
            url: 'https://www.geeksforgeeks.org/nodejs-tutorials/',
          },
          {
            idLink: 10,
            name: 'Build Node.js Apps with Visual Studio Code',
            url: 'https://code.visualstudio.com/docs/nodejs/nodejs-tutorial',
          },
        ],
      },
      {
        idTheme: 2,
        name: 'Express.js',
        text: 'É um framework de aplicação web para Node.js. Ele foi projetado para criar aplicativos da web e APIs. Ele foi chamado de framework de servidor padrão de fato para Node.js.',
        links: [
          {
            idLink: 1,
            name: 'Express.js - Official Documentation',
            url: 'https://expressjs.com/en/4x/api.html',
          },
          {
            idLink: 2,
            name: 'FreeCodeCamp - Introduction to Express.js',
            url: 'https://www.freecodecamp.org/news/what-is-express-js/',
          },
          {
            idLink: 3,
            name: 'Udemy Express.js Courses',
            url: 'https://www.udemy.com/topic/express-js/',
          },
          {
            idLink: 4,
            name: 'Codecademy - Learn Express.js',
            url: 'https://www.codecademy.com/learn/learn-express',
          },
          {
            idLink: 5,
            name: 'Coursera Express.js Courses',
            url: 'https://www.coursera.org/courses?query=express.js',
          },
          {
            idLink: 6,
            name: 'ExpressJS Tutorial - Online Tutorials Library',
            url: 'https://www.tutorialspoint.com/expressjs/index.htm',
          },
          {
            idLink: 7,
            name: 'Express web framework (Node.js/JavaScript) - MDN',
            url: 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs',
          },
          {
            idLink: 8,
            name: 'Express/Node introduction - MDN',
            url: 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction',
          },
          {
            idLink: 9,
            name: 'Express - Node.js web application framework',
            url: 'http://expressjs.com/',
          },
          {
            idLink: 10,
            name: 'How To Get Started with Node.js and Express - DigitalOcean',
            url: 'https://www.digitalocean.com/community/tutorials/how-to-use-node-js-modules-with-npm-and-package-json',
          },
        ],
      },
      {
        idTheme: 3,
        name: 'Deno',
        text: 'É um tempo de execução JavaScript e TypeScript seguro para o back-end. Ele é construído com o mecanismo V8 do Google Chrome, Rust e Tokio.',
        links: [
          {
            idLink: 1,
            name: 'Deno - Official Documentation',
            url: 'https://deno.land/manual',
          },
          {
            idLink: 2,
            name: 'FreeCodeCamp - Introduction to Deno',
            url: 'https://www.freecodecamp.org/news/what-is-deno/',
          },
          {
            idLink: 3,
            name: 'Udemy Deno Courses',
            url: 'https://www.udemy.com/topic/deno/',
          },
          {
            idLink: 4,
            name: 'Codecademy - Learn Deno',
            url: 'https://www.codecademy.com/learn/learn-deno',
          },
          {
            idLink: 5,
            name: 'Coursera Deno Courses',
            url: 'https://www.coursera.org/courses?query=deno',
          },
          {
            idLink: 6,
            name: 'The Deno Handbook – A TypeScript Runtime Tutorial with Code Examples',
            url: 'https://www.freecodecamp.org/news/the-deno-handbook/',
          },
          {
            idLink: 7,
            name: 'How to get started with Deno Tutorial - Robin Wieruch',
            url: 'https://www.robinwieruch.de/deno-tutorial',
          },
          {
            idLink: 8,
            name: 'Deno, The next-generation JavaScript runtime',
            url: 'https://deno.com/',
          },
          {
            idLink: 9,
            name: 'The Deno Handbook: a concise introduction to Deno',
            url: 'https://flaviocopes.com/deno/',
          },
          {
            idLink: 10,
            name: 'Deno in 100 Seconds - YouTube',
            url: 'https://www.youtube.com/watch?v=DZyWNS4fVE0',
          },
          {
            idLink: 11,
            name: 'Deno Manual',
            url: 'https://docs.deno.com/runtime/manual',
          },
        ],
      },
      {
        idTheme: 4,
        name: 'NestJS',
        text: 'É um framework back-end para a construção de aplicações web eficientes, confiáveis e escaláveis. Ele usa JavaScript e TypeScript e combina elementos de OOP (Programação Orientada a Objetos), FP (Programação Funcional) e FRP (Programação Reativa Funcional).',
        links: [
          {
            idLink: 1,
            name: 'NestJS - Official Documentation',
            url: 'https://docs.nestjs.com/',
          },
          {
            idLink: 2,
            name: 'FreeCodeCamp - Introduction to NestJS',
            url: 'https://www.freecodecamp.org/news/what-is-nestjs-why-should-i-use-it/',
          },
          {
            idLink: 3,
            name: 'Udemy NestJS Courses',
            url: 'https://www.udemy.com/topic/nestjs/',
          },
          {
            idLink: 4,
            name: 'Codecademy - Learn NestJS',
            url: 'https://www.codecademy.com/learn/learn-nestjs',
          },
          {
            idLink: 5,
            name: 'Coursera NestJS Courses',
            url: 'https://www.coursera.org/courses?query=nestjs',
          },
          {
            idLink: 6,
            name: 'NestJS - GitHub Repository',
            url: 'https://github.com/nestjs/nest',
          },
          {
            idLink: 7,
            name: 'NestJS - YouTube Channel',
            url: 'https://www.youtube.com/c/NestJS',
          },
          {
            idLink: 8,
            name: 'NestJS - A progressive Node.js framework',
            url: 'https://nestjs.com/',
          },
        ],
      },
      {
        idTheme: 5,
        name: 'Php',
        text: 'É uma linguagem de script open source de uso geral, especialmente adequada para o desenvolvimento web e que pode ser embutida dentro do HTML.',
        links: [
          {
            idLink: 1,
            name: 'PHP - Official Documentation',
            url: 'https://www.php.net/manual/en/index.php',
          },
          {
            idLink: 2,
            name: 'FreeCodeCamp - Introduction to PHP',
            url: 'https://www.freecodecamp.org/news/what-is-php-used-for/',
          },
          {
            idLink: 3,
            name: 'Udemy PHP Courses',
            url: 'https://www.udemy.com/topic/php/',
          },
          {
            idLink: 4,
            name: 'Codecademy - Learn PHP',
            url: 'https://www.codecademy.com/learn/learn-php',
          },
          {
            idLink: 5,
            name: 'Coursera PHP Courses',
            url: 'https://www.coursera.org/courses?query=php',
          },
          {
            idLink: 6,
            name: 'PHP Tutorial - W3Schools',
            url: 'https://www.w3schools.com/php/',
          },
          {
            idLink: 7,
            name: 'PHP: Documentation',
            url: 'https://www.php.net/docs.php',
          },
          {
            idLink: 8,
            name: 'PHP: Getting Started',
            url: 'https://www.php.net/manual/en/getting-started.php',
          },
          {
            idLink: 9,
            name: 'PHP Tutorial - Tutorialspoint',
            url: 'https://www.tutorialspoint.com/php/index.htm',
          },
          {
            idLink: 10,
            name: 'PHP Tutorial - Tutorial Republic',
            url: 'https://www.tutorialrepublic.com/php-tutorial/',
          },
        ],
      },
      {
        idTheme: 6,
        name: 'Laravel',
        text: 'É um framework PHP livre e open-source criado por Taylor B. Otwell para o desenvolvimento de sistemas web que utilizam o padrão MVC (model, view, controller).',
        links: [
          {
            idLink: 1,
            name: 'Laravel - Official Documentation',
            url: 'https://laravel.com/docs/8.x',
          },
          {
            idLink: 2,
            name: 'FreeCodeCamp - Introduction to Laravel',
            url: 'https://www.freecodecamp.org/news/what-is-laravel-used-for/',
          },
          {
            idLink: 3,
            name: 'Udemy Laravel Courses',
            url: 'https://www.udemy.com/topic/laravel/',
          },
          {
            idLink: 4,
            name: 'Codecademy - Learn Laravel',
            url: 'https://www.codecademy.com/learn/learn-laravel',
          },
          {
            idLink: 5,
            name: 'Coursera Laravel Courses',
            url: 'https://www.coursera.org/courses?query=laravel',
          },
          {
            idLink: 6,
            name: 'Laravel Tutorial - W3Schools',
            url: 'https://www.w3schools.com/laravel/',
          },
          {
            idLink: 7,
            name: 'Laravel - The PHP Framework For Web Artisans',
            url: 'https://laravel.com/',
          },
          {
            idLink: 8,
            name: 'Laravel Tutorial - Tutorialspoint',
            url: 'https://www.tutorialspoint.com/laravel/index.htm',
          },
          {
            idLink: 9,
            name: 'Laravel Tutorial - Tutorial Republic',
            url: 'https://www.tutorialrepublic.com/laravel-tutorial/',
          },
          {
            idLink: 10,
            name: 'Laravel Tutorial - GeeksforGeeks',
            url: 'https://www.geeksforgeeks.org/laravel-tutorial/',
          },
        ],
      },
      {
        idTheme: 7,
        name: 'Symfony',
        text: 'É um conjunto de componentes PHP reutilizáveis e um framework web para PHP. Ele foi publicado como software livre sob a licença MIT.',
        links: [
          {
            idLink: 1,
            name: 'Symfony - Official Documentation',
            url: 'https://symfony.com/doc/current/index.html',
          },
          {
            idLink: 2,
            name: 'FreeCodeCamp - Introduction to Symfony',
            url: 'https://www.freecodecamp.org/news/what-is-symfony-used-for/',
          },
          {
            idLink: 3,
            name: 'Udemy Symfony Courses',
            url: 'https://www.udemy.com/topic/symfony/',
          },
          {
            idLink: 4,
            name: 'Codecademy - Learn Symfony',
            url: 'https://www.codecademy.com/learn/learn-symfony',
          },
          {
            idLink: 5,
            name: 'Coursera Symfony Courses',
            url: 'https://www.coursera.org/courses?query=symfony',
          },
          {
            idLink: 6,
            name: 'Symfony, High Performance PHP Framework for Web Development',
            url: 'https://symfony.com/',
          },
          {
            idLink: 7,
            name: 'Symfony Tutorial - Tutorialspoint',
            url: 'https://www.tutorialspoint.com/symfony/index.htm',
          },
          {
            idLink: 8,
            name: 'Symfony Tutorial - Tutorial Republic',
            url: 'https://www.tutorialrepublic.com/symfony-tutorial/',
          },
          {
            idLink: 9,
            name: 'Symfony Tutorial - GeeksforGeeks',
            url: 'https://www.geeksforgeeks.org/symfony-tutorial/',
          },
        ],
      },
      {
        idTheme: 8,
        name: 'CakePHP',
        text: 'É um framework de aplicação web de código aberto. Ele segue o padrão de projeto Model-View-Controller (MVC) e é escrito na linguagem de programação PHP.',
        links: [
          {
            idLink: 1,
            name: 'CakePHP - Official Documentation',
            url: 'https://book.cakephp.org/4/en/index.html',
          },
          {
            idLink: 2,
            name: 'FreeCodeCamp - Introduction to CakePHP',
            url: 'https://www.freecodecamp.org/news/what-is-cakephp-used-for/',
          },
          {
            idLink: 3,
            name: 'Udemy CakePHP Courses',
            url: 'https://www.udemy.com/topic/cakephp/',
          },
          {
            idLink: 4,
            name: 'Codecademy - Learn CakePHP',
            url: 'https://www.codecademy.com/learn/learn-cakephp',
          },
          {
            idLink: 5,
            name: 'Coursera CakePHP Courses',
            url: 'https://www.coursera.org/courses?query=cakephp',
          },
          {
            idLink: 6,
            name: 'CakePHP - Build fast, grow solid | PHP Framework | Home',
            url: 'https://cakephp.org/',
          },
          {
            idLink: 7,
            name: 'CakePHP Tutorial - Tutorialspoint',
            url: 'https://www.tutorialspoint.com/cakephp/index.htm',
          },
        ],
      },
      {
        idTheme: 9,
        name: 'Ruby',
        text: 'É uma linguagem de programação interpretada multiparadigma, de tipagem dinâmica e forte, com gerenciamento de memória automático, originalmente planejada e desenvolvida no Japão em 1995, por Yukihiro "Matz" Matsumoto, para ser usada como linguagem de script.',
        links: [
          {
            idLink: 1,
            name: 'Ruby - Official Documentation',
            url: 'https://www.ruby-lang.org/en/documentation/',
          },
          {
            idLink: 2,
            name: 'FreeCodeCamp - Introduction to Ruby',
            url: 'https://www.freecodecamp.org/news/what-is-ruby-used-for/',
          },
          {
            idLink: 3,
            name: 'Udemy Ruby Courses',
            url: 'https://www.udemy.com/topic/ruby/',
          },
          {
            idLink: 4,
            name: 'Codecademy - Learn Ruby',
            url: 'https://www.codecademy.com/learn/learn-ruby',
          },
          {
            idLink: 5,
            name: 'Coursera Ruby Courses',
            url: 'https://www.coursera.org/courses?query=ruby',
          },
          {
            idLink: 6,
            name: 'Ruby Programming Language',
            url: 'https://www.ruby-lang.org/en/',
          },
          {
            idLink: 7,
            name: 'Ruby Tutorial - Tutorialspoint',
            url: 'https://www.tutorialspoint.com/ruby/index.htm',
          },

          {
            idLink: 8,
            name: 'Ruby Tutorial - GeeksforGeeks',
            url: 'https://www.geeksforgeeks.org/ruby-programming-language/',
          },
        ],
      },
      {
        idTheme: 10,
        name: 'Ruby on Rails',
        text: 'É um framework web escrito em Ruby que segue o padrão MVC (model, view, controller). Ele provê estruturas para um banco de dados, um web service e páginas web.',
        links: [
          {
            idLink: 1,
            name: 'Ruby on Rails - Official Documentation',
            url: 'https://guides.rubyonrails.org/',
          },
          {
            idLink: 2,
            name: 'FreeCodeCamp - Introduction to Ruby on Rails',
            url: 'https://www.freecodecamp.org/news/what-is-ruby-on-rails/',
          },
          {
            idLink: 3,
            name: 'Udemy Ruby on Rails Courses',
            url: 'https://www.udemy.com/topic/ruby-on-rails/',
          },
          {
            idLink: 4,
            name: 'Codecademy - Learn Ruby on Rails',
            url: 'https://www.codecademy.com/learn/learn-rails',
          },
          {
            idLink: 5,
            name: 'Coursera Ruby on Rails Courses',
            url: 'https://www.coursera.org/courses?query=ruby%20on%20rails',
          },
          {
            idLink: 6,
            name: 'Ruby on Rails | A web-application framework that includes everything needed to create database-backed web applications according to the Model-View-Controller (MVC) pattern.',
            url: 'https://rubyonrails.org/',
          },
          {
            idLink: 7,
            name: 'Ruby on Rails Tutorial (Rails 6) | Learn Web Development with Rails',
            url: 'https://www.railstutorial.org/',
          },
          {
            idLink: 8,
            name: 'Ruby on Rails Tutorial: Learn Web Development with Rails (4th Edition) (Addison-Wesley Professional Ruby Series): Hartl, Michael: 9780134598628: Amazon.com: Books',
            url: 'https://www.amazon.com/Ruby-Rails-Tutorial-Addison-Wesley-Professional/dp/0134598628',
          },
          {
            idLink: 9,
            name: 'Ruby on Rails Tutorial (Rails 5) | Learn Web Development with Rails',
            url: 'https://www.railstutorial.org/book',
          },
          {
            idLink: 10,
            name: 'Ruby on Rails Tutorial (Rails 3) | Learn Web Development with Rails',
            url: 'https://www.railstutorial.org/book',
          },
        ],
      },
      {
        idTheme: 11,
        name: 'Sinatra',
        text: 'É uma biblioteca de software escrita em Ruby que fornece um domínio específico de linguagem para configurar aplicações web Rack.',
        links: [
          {
            idLink: 1,
            name: 'Sinatra - Official Documentation',
            url: 'http://sinatrarb.com/documentation.html',
          },
          {
            idLink: 2,
            name: 'FreeCodeCamp - Introduction to Sinatra',
            url: 'https://www.freecodecamp.org/news/what-is-sinatra/',
          },
          {
            idLink: 3,
            name: 'Udemy Sinatra Courses',
            url: 'https://www.udemy.com/topic/sinatra/',
          },
          {
            idLink: 4,
            name: 'Codecademy - Learn Sinatra',
            url: 'https://www.codecademy.com/learn/learn-sinatra',
          },
          {
            idLink: 5,
            name: 'Coursera Sinatra Courses',
            url: 'https://www.coursera.org/courses?query=sinatra',
          },
        ],
      },
      {
        idTheme: 12,
        name: 'Phoenix',
        text: 'É um framework web escrito em Elixir que implementa o padrão de arquitetura Model-View-Controller (MVC).',
        links: [
          {
            idLink: 1,
            name: 'Phoenix - Official Documentation',
            url: 'https://hexdocs.pm/phoenix/overview.html',
          },
          {
            idLink: 2,
            name: 'FreeCodeCamp - Introduction to Phoenix',
            url: 'https://www.freecodecamp.org/news/what-is-phoenix-framework/',
          },
          {
            idLink: 3,
            name: 'Udemy Phoenix Courses',
            url: 'https://www.udemy.com/topic/phoenix-framework/',
          },
          {
            idLink: 4,
            name: 'Codecademy - Learn Phoenix',
            url: 'https://www.codecademy.com/learn/learn-phoenix',
          },
          {
            idLink: 5,
            name: 'Coursera Phoenix Courses',
            url: 'https://www.coursera.org/courses?query=phoenix',
          },
          {
            idLink: 6,
            name: 'Phoenix Framework - A productive web framework that does not compromise speed and maintainability.',
            url: 'https://www.phoenixframework.org/',
          },
        ],
      },
      {
        idTheme: 13,
        name: 'Django',
        text: 'É um framework web Python de alto nível que incentiva o desenvolvimento rápido e um design limpo e pragmático.',
        links: [
          {
            idLink: 1,
            name: 'Django - Official Documentation',
            url: 'https://docs.djangoproject.com/en/3.1/',
          },
          {
            idLink: 2,
            name: 'FreeCodeCamp - Introduction to Django',
            url: 'https://www.freecodecamp.org/news/what-is-django-and-why-is-it-so-popular/',
          },
          {
            idLink: 3,
            name: 'Udemy Django Courses',
            url: 'https://www.udemy.com/topic/django/',
          },
          {
            idLink: 4,
            name: 'Codecademy - Learn Django',
            url: 'https://www.codecademy.com/learn/learn-django',
          },
          {
            idLink: 5,
            name: 'Coursera Django Courses',
            url: 'https://www.coursera.org/courses?query=django',
          },
          {
            idLink: 6,
            name: 'Django - The Web framework for perfectionists with deadlines',
            url: 'https://www.djangoproject.com/',
          },
          {
            idLink: 7,
            name: 'Django Tutorial - W3Schools',
            url: 'https://www.w3schools.com/django/',
          },
          {
            idLink: 8,
            name: 'Django Tutorial - Tutorialspoint',
            url: 'https://www.tutorialspoint.com/django/index.htm',
          },
          {
            idLink: 9,
            name: 'Django Tutorial - GeeksforGeeks',
            url: 'https://www.geeksforgeeks.org/django-tutorial/',
          },
        ],
      },
    ],
  },
  {
    id: 11,
    category: 'Banco de Dados',
    bgColor: '#C8A2C8',
    textColor: '#282A36',
    img: 'BancoDeDados.png',
    resources: [
      {
        idTheme: 1,
        name: 'Fundamentos de Bancos de Dados',
        text: 'Os fundamentos de bancos de dados abrangem a compreensão de conceitos básicos como modelos de dados, esquemas de bancos de dados, e linguagens de consulta.',
        links: [
          {
            idLink: 1,
            name: 'Introdução aos Bancos de Dados',
            url: 'https://www.w3schools.com/sql/',
          },
          {
            idLink: 2,
            name: 'Modelos de Bancos de Dados',
            url: 'https://en.wikipedia.org/wiki/Database_model',
          },
          {
            idLink: 3,
            name: 'Projeto de Banco de Dados',
            url: 'https://en.wikipedia.org/wiki/Database_design',
          },
        ],
      },
      {
        idTheme: 2,
        name: 'SQL e Bancos de Dados Relacionais',
        text: 'SQL é a linguagem padrão para gerenciar e consultar bancos de dados relacionais. Aprender SQL é essencial para trabalhar com esses tipos de bancos de dados.',
        links: [
          {
            idLink: 1,
            name: 'Tutorial de SQL',
            url: 'https://www.codecademy.com/learn/learn-sql',
          },
          {
            idLink: 2,
            name: 'Conceitos Avançados de SQL',
            url: 'https://sqlzoo.net/',
          },
          {
            idLink: 3,
            name: 'Otimização de Consultas SQL',
            url: 'https://use-the-index-luke.com/',
          },
        ],
      },
      {
        idTheme: 3,
        name: 'NoSQL e Bancos de Dados Não Relacionais',
        text: 'Bancos de dados NoSQL, como MongoDB e Cassandra, são importantes para casos de uso que exigem escalabilidade e flexibilidade, comuns em big data e aplicações web em tempo real.',
        links: [
          {
            idLink: 1,
            name: 'Introdução ao NoSQL',
            url: 'https://www.mongodb.com/nosql-explained',
          },
          {
            idLink: 2,
            name: 'Tipos de Bancos de Dados NoSQL',
            url: 'https://en.wikipedia.org/wiki/NoSQL#Types',
          },
          {
            idLink: 3,
            name: 'MongoDB para Iniciantes',
            url: 'https://university.mongodb.com/',
          },
        ],
      },
      {
        idTheme: 4,
        name: 'Data Warehousing e Business Intelligence',
        text: 'Data warehousing envolve o armazenamento e análise de grandes quantidades de dados para suportar decisões de negócios. Ferramentas de business intelligence são usadas para processar esses dados.',
        links: [
          {
            idLink: 1,
            name: 'Fundamentos de Data Warehousing',
            url: 'https://www.snowflake.com/data-warehouse-guide/',
          },
          {
            idLink: 2,
            name: 'Introdução à Business Intelligence',
            url: 'https://www.ibm.com/cloud/learn/business-intelligence',
          },
          {
            idLink: 3,
            name: 'Técnicas de Business Analytics',
            url: 'https://www.tableau.com/learn/articles/business-intelligence',
          },
        ],
      },
    ],
  },
  {
    id: 12,
    category: 'Ferramentas',
    bgColor: '#FFFDD0',
    textColor: '#282A36',
    img: 'Ferramentas.png',
    resources: [
      {
        idTheme: 1,
        name: 'Visual Studio Code (VSCode)',
        text: 'O Visual Studio Code é um editor de código-fonte desenvolvido pela Microsoft, amplamente utilizado por programadores. Oferece suporte a várias linguagens de programação e ferramentas de desenvolvimento.',
        links: [
          {
            idLink: 1,
            name: 'Introdução ao Visual Studio Code',
            url: 'https://code.visualstudio.com/docs',
          },
          {
            idLink: 2,
            name: 'Extensões e Personalizações do VSCode',
            url: 'https://marketplace.visualstudio.com/VSCode',
          },
          {
            idLink: 3,
            name: 'Dicas e Truques do VSCode',
            url: 'https://code.visualstudio.com/docs/getstarted/tips-and-tricks',
          },
        ],
      },
      {
        idTheme: 2,
        name: 'Git e GitHub',
        text: 'Git é um sistema de controle de versão distribuído, e o GitHub é uma plataforma de hospedagem de código-fonte e colaboração. Eles são fundamentais para o gerenciamento de código e colaboração em projetos de TI.',
        links: [
          {
            idLink: 1,
            name: 'Começando com Git',
            url: 'https://git-scm.com/book/en/v2/Getting-Started-Git-Basics',
          },
          {
            idLink: 2,
            name: 'Tutorial de GitHub',
            url: 'https://guides.github.com/activities/hello-world/',
          },
          {
            idLink: 3,
            name: 'Melhores Práticas de Git',
            url: 'https://opensource.com/article/18/1/10-tips-new-github-projects',
          },
        ],
      },
      {
        idTheme: 3,
        name: 'Docker',
        text: 'Docker é uma plataforma de software que permite a criação, teste e implantação de aplicações rapidamente através de containers. Os containers permitem que os aplicativos sejam executados de maneira confiável quando transferidos de um ambiente de computação para outro.',
        links: [
          {
            idLink: 1,
            name: 'Introdução ao Docker',
            url: 'https://www.docker.com/get-started',
          },
          {
            idLink: 2,
            name: 'Conceitos Básicos de Containers',
            url: 'https://www.docker.com/resources/what-container',
          },
          {
            idLink: 3,
            name: 'Docker Hub e Repositórios',
            url: 'https://hub.docker.com/',
          },
        ],
      },
      {
        idTheme: 4,
        name: 'Ferramentas de Monitoramento e Análise',
        text: 'Ferramentas de monitoramento e análise, como Grafana e Prometheus, são usadas para monitorar a infraestrutura de TI e analisar o desempenho dos sistemas.',
        links: [
          {
            idLink: 1,
            name: 'Introdução à Grafana',
            url: 'https://grafana.com/docs/grafana/latest/getting-started/',
          },
          {
            idLink: 2,
            name: 'Começando com Prometheus',
            url: 'https://prometheus.io/docs/introduction/overview/',
          },
          {
            idLink: 3,
            name: 'Melhores Práticas de Monitoramento',
            url: 'https://www.redhat.com/en/topics/monitoring',
          },
        ],
      },
      {
        idTheme: 5,
        name: 'Jenkins para Integração Contínua',
        text: 'Jenkins é uma ferramenta de automação de código aberto usada principalmente para integração contínua e entrega contínua.',
        links: [
          {
            idLink: 1,
            name: 'Introdução ao Jenkins',
            url: 'https://www.jenkins.io/doc/',
          },
          {
            idLink: 2,
            name: 'Guia de Uso do Jenkins',
            url: 'https://www.jenkins.io/doc/book/using/',
          },
          {
            idLink: 3,
            name: 'Melhores Práticas com Jenkins',
            url: 'https://www.jenkins.io/doc/book/best-practices/',
          },
        ],
      },
      {
        idTheme: 6,
        name: 'Ansible para Automação de TI',
        text: 'Ansible é uma ferramenta para automação de TI, que facilita tarefas como configuração de sistemas, implantação de software e orquestração de tarefas.',
        links: [
          {
            idLink: 1,
            name: 'Introdução ao Ansible',
            url: 'https://www.ansible.com/resources/get-started',
          },
          {
            idLink: 2,
            name: 'Documentação Oficial do Ansible',
            url: 'https://docs.ansible.com/',
          },
          {
            idLink: 3,
            name: 'Melhores Práticas no Ansible',
            url: 'https://www.ansible.com/blog/ansible-best-practices-essentials',
          },
        ],
      },
      {
        idTheme: 7,
        name: 'Terraform para Infraestrutura como Código',
        text: 'Terraform é uma ferramenta de código aberto que permite a criação, modificação e versão de infraestrutura de forma segura e eficiente.',
        links: [
          {
            idLink: 1,
            name: 'Introdução ao Terraform',
            url: 'https://learn.hashicorp.com/terraform',
          },
          {
            idLink: 2,
            name: 'Guia de Início Rápido do Terraform',
            url: 'https://www.terraform.io/intro/index.html',
          },
          {
            idLink: 3,
            name: 'Melhores Práticas com Terraform',
            url: 'https://www.hashicorp.com/resources/terraform-best-practices-a-practitioners-guide',
          },
        ],
      },
      {
        idTheme: 8,
        name: 'Kubernetes para Orquestração de Containers',
        text: 'Kubernetes é uma plataforma de código aberto para automação de implantação, escalonamento e operações de aplicações em clusters de hosts.',
        links: [
          {
            idLink: 1,
            name: 'Começando com Kubernetes',
            url: 'https://kubernetes.io/docs/tutorials/kubernetes-basics/',
          },
          {
            idLink: 2,
            name: 'Documentação Oficial do Kubernetes',
            url: 'https://kubernetes.io/docs/home/',
          },
          {
            idLink: 3,
            name: 'Melhores Práticas no Uso de Kubernetes',
            url: 'https://www.cncf.io/reports/kubernetes-best-practices-white-paper/',
          },
        ],
      },
    ],
  },
  {
    id: 13,
    category: 'Achar Trabalho',
    bgColor: '#89CFF0',
    textColor: '#282A36',
    img: 'AcharTrabalho.png',
    resources: [
      {
        idTheme: 1,
        name: 'LinkedIn',
        text: 'LinkedIn é uma rede social profissional que conecta profissionais de todo o mundo e oferece uma plataforma para a busca de oportunidades de emprego em diversas áreas, incluindo TI.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do LinkedIn',
            url: 'https://www.linkedin.com/',
          },
          {
            idLink: 2,
            name: 'Dicas para Buscar Emprego no LinkedIn',
            url: 'https://www.linkedin.com/help/linkedin/answer/a507688',
          },
          {
            idLink: 3,
            name: 'LinkedIn Learning',
            url: 'https://www.linkedin.com/learning/',
          },
        ],
      },
      {
        idTheme: 2,
        name: 'Indeed',
        text: 'Indeed é um dos maiores sites de busca de empregos do mundo, agregando listas de várias fontes e oferecendo ferramentas para encontrar vagas em TI.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Indeed',
            url: 'https://www.indeed.com/',
          },
          {
            idLink: 2,
            name: 'Dicas de Busca de Emprego no Indeed',
            url: 'https://www.indeed.com/career-advice/finding-a-job',
          },
        ],
      },
      {
        idTheme: 3,
        name: 'Stack Overflow Jobs',
        text: 'Stack Overflow Jobs é uma seção do famoso fórum de programação Stack Overflow, focada em oportunidades de emprego no setor de tecnologia, especialmente em programação e desenvolvimento de software.',
        links: [
          {
            idLink: 1,
            name: 'Página de Empregos do Stack Overflow',
            url: 'https://stackoverflow.com/jobs',
          },
          {
            idLink: 2,
            name: 'Dicas para Utilizar Stack Overflow Jobs',
            url: 'https://stackoverflow.blog/2017/04/13/stack-overflow-jobs-guide/',
          },
        ],
      },
      {
        idTheme: 4,
        name: 'Glassdoor',
        text: 'Glassdoor é um site onde funcionários e ex-funcionários avaliam anonimamente empresas e seus gerentes, além de oferecer listagens de empregos e salários.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Glassdoor',
            url: 'https://www.glassdoor.com/index.htm',
          },
          {
            idLink: 2,
            name: 'Dicas para Procurar Emprego no Glassdoor',
            url: 'https://www.glassdoor.com/blog/tag/job-search-tips/',
          },
        ],
      },
      {
        idTheme: 5,
        name: 'AngelList',
        text: 'AngelList é uma plataforma para startups, que também oferece um serviço para conectar profissionais de tecnologia com startups que estão contratando.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do AngelList',
            url: 'https://angel.co/',
          },
          {
            idLink: 2,
            name: 'Procurando Emprego em Startups',
            url: 'https://angel.co/blog/how-to-get-a-job-at-a-startup',
          },
        ],
      },
      {
        idTheme: 6,
        name: 'Monster',
        text: 'Monster é um dos maiores e mais antigos sites de busca de emprego, oferecendo uma vasta gama de oportunidades de trabalho em várias áreas, incluindo TI.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Monster',
            url: 'https://www.monster.com/',
          },
          {
            idLink: 2,
            name: 'Dicas para Procurar Emprego no Monster',
            url: 'https://www.monster.com/career-advice/',
          },
        ],
      },
      {
        idTheme: 7,
        name: 'Dice',
        text: 'Dice é um site de carreiras especializado em oportunidades de emprego para profissionais de tecnologia e engenharia.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Dice',
            url: 'https://www.dice.com/',
          },
          {
            idLink: 2,
            name: 'Como Usar o Dice para Encontrar Empregos em TI',
            url: 'https://www.dice.com/jobs/search',
          },
        ],
      },
      {
        idTheme: 8,
        name: 'CareerBuilder',
        text: 'CareerBuilder é um site de emprego global que oferece listagens de emprego, ferramentas de busca de emprego e recursos para carreiras em diversas áreas, incluindo TI.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do CareerBuilder',
            url: 'https://www.careerbuilder.com/',
          },
          {
            idLink: 2,
            name: 'Dicas de Carreira no CareerBuilder',
            url: 'https://www.careerbuilder.com/advice',
          },
        ],
      },
      {
        idTheme: 9,
        name: 'SimplyHired',
        text: 'SimplyHired é um motor de busca de emprego que agrega listagens de emprego de toda a web, incluindo listagens em TI.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do SimplyHired',
            url: 'https://www.simplyhired.com/',
          },
          {
            idLink: 2,
            name: 'Como Procurar Empregos no SimplyHired',
            url: 'https://www.simplyhired.com/search',
          },
        ],
      },
      {
        idTheme: 10,
        name: 'TechCareers',
        text: 'TechCareers é um site dedicado a oportunidades de carreira em tecnologia, oferecendo listagens de emprego, informações sobre empresas e conselhos de carreira para profissionais de TI.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do TechCareers',
            url: 'https://www.techcareers.com/',
          },
          {
            idLink: 2,
            name: 'Conselhos de Carreira em TI no TechCareers',
            url: 'https://www.techcareers.com/articles',
          },
        ],
      },
      {
        idTheme: 11,
        name: 'Hired',
        text: 'Hired é uma plataforma de recrutamento que conecta profissionais de tecnologia com empresas inovadoras, oferecendo uma abordagem única e personalizada para a busca de emprego.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Hired',
            url: 'https://hired.com/',
          },
          {
            idLink: 2,
            name: 'Como Funciona o Hired',
            url: 'https://hired.com/how-it-works',
          },
        ],
      },
      {
        idTheme: 12,
        name: 'Freelancer',
        text: 'Freelancer é um mercado online que conecta freelancers com projetos e empregos, especialmente adequado para profissionais de TI que procuram trabalhos autônomos ou projetos específicos.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Freelancer',
            url: 'https://www.freelancer.com/',
          },
          {
            idLink: 2,
            name: 'Dicas para Encontrar Trabalhos Freelance em TI',
            url: 'https://www.freelancer.com/community/articles',
          },
        ],
      },
      {
        idTheme: 13,
        name: 'Remote.co',
        text: 'Remote.co é um recurso dedicado a empregos remotos, incluindo muitas oportunidades na área de tecnologia da informação.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Remote.co',
            url: 'https://remote.co/',
          },
          {
            idLink: 2,
            name: 'Como Encontrar Trabalho Remoto em TI',
            url: 'https://remote.co/remote-jobs/technology/',
          },
        ],
      },
      {
        idTheme: 14,
        name: 'TechFetch',
        text: 'TechFetch é um portal de empregos que se especializa em empregos de TI, conectando profissionais de tecnologia com empregadores em todo os Estados Unidos.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do TechFetch',
            url: 'https://www.techfetch.com/',
          },
          {
            idLink: 2,
            name: 'Buscar Empregos de TI no TechFetch',
            url: 'https://www.techfetch.com/it-jobs',
          },
        ],
      },
      {
        idTheme: 15,
        name: 'Upwork',
        text: 'Upwork é uma das maiores plataformas de freelancers do mundo, oferecendo uma ampla gama de projetos e trabalhos autônomos em várias áreas de TI.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Upwork',
            url: 'https://www.upwork.com/',
          },
          {
            idLink: 2,
            name: 'Como Começar a Trabalhar no Upwork',
            url: 'https://www.upwork.com/i/how-it-works/freelancer/',
          },
        ],
      },
      {
        idTheme: 16,
        name: 'Toptal',
        text: 'Toptal é uma rede exclusiva de freelancers de alto nível em áreas como desenvolvimento de software, design, finanças e gerenciamento de projetos.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Toptal',
            url: 'https://www.toptal.com/',
          },
          {
            idLink: 2,
            name: 'Como se Tornar um Freelancer no Toptal',
            url: 'https://www.toptal.com/talent/apply',
          },
        ],
      },
      {
        idTheme: 17,
        name: 'FlexJobs',
        text: 'FlexJobs é especializado em trabalhos flexíveis e remotos, incluindo uma grande variedade de oportunidades na área de TI.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do FlexJobs',
            url: 'https://www.flexjobs.com/',
          },
          {
            idLink: 2,
            name: 'Buscar Empregos de TI no FlexJobs',
            url: 'https://www.flexjobs.com/jobs/technology',
          },
        ],
      },
      {
        idTheme: 18,
        name: 'CyberCoders',
        text: 'CyberCoders é uma plataforma de recrutamento líder que conecta profissionais de TI altamente qualificados com empresas inovadoras.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do CyberCoders',
            url: 'https://www.cybercoders.com/',
          },
          {
            idLink: 2,
            name: 'Explorar Oportunidades de TI no CyberCoders',
            url: 'https://www.cybercoders.com/search/?searchterms=IT',
          },
        ],
      },
      {
        idTheme: 19,
        name: 'Fiverr',
        text: 'Fiverr é uma plataforma de serviços freelance, onde profissionais de TI podem oferecer seus serviços em diversas categorias, desde desenvolvimento de software até suporte de TI.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Fiverr',
            url: 'https://www.fiverr.com/',
          },
          {
            idLink: 2,
            name: 'Como Vender Serviços de TI no Fiverr',
            url: 'https://www.fiverr.com/start_selling',
          },
        ],
      },
      {
        idTheme: 20,
        name: 'Jobspresso',
        text: 'Jobspresso é um site de empregos especializado em trabalhos remotos de alta qualidade, oferecendo várias vagas em tecnologia da informação.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Jobspresso',
            url: 'https://jobspresso.co/',
          },
          {
            idLink: 2,
            name: 'Buscar Empregos de TI no Jobspresso',
            url: 'https://jobspresso.co/job-category/tech/',
          },
        ],
      },
    ],
  },
  {
    id: 14,
    category: 'Comunidade',
    bgColor: '#FDBCB4',
    textColor: '#282A36',
    img: 'Comunidade.png',
    resources: [
      {
        idTheme: 1,
        name: 'Stack Overflow',
        text: 'Stack Overflow é uma comunidade onde programadores de todos os níveis podem fazer perguntas e compartilhar suas experiências e conhecimentos.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Stack Overflow',
            url: 'https://stackoverflow.com/',
          },
          {
            idLink: 2,
            name: 'Como Usar o Stack Overflow',
            url: 'https://stackoverflow.com/tour',
          },
        ],
      },
      {
        idTheme: 2,
        name: 'GitHub',
        text: 'GitHub não é apenas uma plataforma de hospedagem de código, mas também uma comunidade vibrante de desenvolvedores colaborando em projetos de todos os tipos.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do GitHub',
            url: 'https://github.com/',
          },
          {
            idLink: 2,
            name: 'Explorar Projetos no GitHub',
            url: 'https://github.com/explore',
          },
        ],
      },
      {
        idTheme: 3,
        name: 'Reddit - Subreddits de Tecnologia',
        text: 'Reddit possui vários subreddits dedicados à tecnologia e à programação, onde membros compartilham notícias, dicas e discutem sobre diversos tópicos de TI.',
        links: [
          {
            idLink: 1,
            name: 'r/programming',
            url: 'https://www.reddit.com/r/programming/',
          },
          {
            idLink: 2,
            name: 'r/learnprogramming',
            url: 'https://www.reddit.com/r/learnprogramming/',
          },
        ],
      },
      {
        idTheme: 4,
        name: 'Dev.to',
        text: 'Dev.to é uma comunidade onde programadores compartilham artigos, tutoriais e ideias. É um espaço excelente para aprender e interagir com outros desenvolvedores.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Dev.to',
            url: 'https://dev.to/',
          },
          {
            idLink: 2,
            name: 'Explorar Conteúdos no Dev.to',
            url: 'https://dev.to/trending',
          },
        ],
      },
      {
        idTheme: 5,
        name: 'Hacker News',
        text: 'Hacker News é uma comunidade social de notícias focada em tecnologia e empreendedorismo, onde os usuários podem postar histórias e discutir sobre os mais recentes desenvolvimentos em TI.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Hacker News',
            url: 'https://news.ycombinator.com/',
          },
          {
            idLink: 2,
            name: 'Novas Submissões no Hacker News',
            url: 'https://news.ycombinator.com/newest',
          },
        ],
      },
      {
        idTheme: 6,
        name: 'Meetup - Grupos de Tecnologia',
        text: 'Meetup é uma plataforma que permite encontrar e criar grupos locais de interesse, incluindo muitos grupos focados em tecnologia e programação.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Meetup',
            url: 'https://www.meetup.com/',
          },
          {
            idLink: 2,
            name: 'Explorar Grupos de Tecnologia no Meetup',
            url: 'https://www.meetup.com/topics/tech/',
          },
        ],
      },
      {
        idTheme: 7,
        name: 'Women Who Code',
        text: 'Women Who Code é uma organização global dedicada a inspirar mulheres a terem sucesso em carreiras de tecnologia, oferecendo recursos, eventos e uma comunidade de apoio.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Women Who Code',
            url: 'https://www.womenwhocode.com/',
          },
          {
            idLink: 2,
            name: 'Eventos e Network do Women Who Code',
            url: 'https://www.womenwhocode.com/networks',
          },
        ],
      },
      {
        idTheme: 8,
        name: 'CodePen',
        text: 'CodePen é uma comunidade de desenvolvedores front-end e designers que compartilham e discutem seus projetos de HTML, CSS e JavaScript.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do CodePen',
            url: 'https://codepen.io/',
          },
          {
            idLink: 2,
            name: 'Explorar Projetos no CodePen',
            url: 'https://codepen.io/picks',
          },
        ],
      },
      {
        idTheme: 9,
        name: 'DigitalOcean Community',
        text: 'A comunidade da DigitalOcean oferece tutoriais, perguntas e respostas e discussões sobre desenvolvimento web, administração de sistemas e infraestrutura em nuvem.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial da Comunidade DigitalOcean',
            url: 'https://www.digitalocean.com/community',
          },
          {
            idLink: 2,
            name: 'Tutoriais da DigitalOcean',
            url: 'https://www.digitalocean.com/community/tutorials',
          },
        ],
      },
      {
        idTheme: 10,
        name: 'The Odin Project',
        text: 'The Odin Project é uma comunidade e plataforma educacional gratuita que oferece um currículo completo para aprender desenvolvimento web.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do The Odin Project',
            url: 'https://www.theodinproject.com/',
          },
          {
            idLink: 2,
            name: 'Currículo do The Odin Project',
            url: 'https://www.theodinproject.com/paths',
          },
        ],
      },
      {
        idTheme: 11,
        name: 'DZone',
        text: 'DZone é uma comunidade online para programadores e profissionais de TI, oferecendo artigos, tutoriais e guias sobre uma ampla gama de tópicos de tecnologia.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do DZone',
            url: 'https://dzone.com/',
          },
          {
            idLink: 2,
            name: 'Guias e Artigos do DZone',
            url: 'https://dzone.com/guides',
          },
        ],
      },
      {
        idTheme: 12,
        name: 'Hashnode',
        text: 'Hashnode é uma plataforma de blogs para desenvolvedores, proporcionando um lugar para compartilhar conhecimentos, conectar-se com outros desenvolvedores e crescer na carreira.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Hashnode',
            url: 'https://hashnode.com/',
          },
          {
            idLink: 2,
            name: 'Explorar Blogs no Hashnode',
            url: 'https://hashnode.com/explore',
          },
        ],
      },
      {
        idTheme: 13,
        name: 'GitLab Community',
        text: 'A comunidade GitLab oferece um espaço para usuários do GitLab compartilharem experiências, colaborarem em projetos e discutirem práticas de DevOps e desenvolvimento de software.',
        links: [
          {
            idLink: 1,
            name: 'Página da Comunidade GitLab',
            url: 'https://about.gitlab.com/community/',
          },
          {
            idLink: 2,
            name: 'Fóruns da Comunidade GitLab',
            url: 'https://forum.gitlab.com/',
          },
        ],
      },
      {
        idTheme: 14,
        name: 'LeetCode',
        text: 'LeetCode é uma plataforma para melhorar suas habilidades de codificação e preparação para entrevistas de programação, com uma comunidade ativa de solução de problemas.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do LeetCode',
            url: 'https://leetcode.com/',
          },
          {
            idLink: 2,
            name: 'Discussões no LeetCode',
            url: 'https://leetcode.com/discuss/',
          },
        ],
      },
      {
        idTheme: 15,
        name: 'SitePoint',
        text: 'SitePoint é uma comunidade online para desenvolvedores web, designers e criadores de conteúdo, com fóruns, livros, cursos e artigos sobre desenvolvimento web e design.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do SitePoint',
            url: 'https://www.sitepoint.com/',
          },
          {
            idLink: 2,
            name: 'Fóruns do SitePoint',
            url: 'https://www.sitepoint.com/community/',
          },
        ],
      },
      {
        idTheme: 16,
        name: 'CodersRank',
        text: 'CodersRank é uma comunidade e plataforma que oferece um perfil de desenvolvimento abrangente para seus membros, ajudando-os a mostrar suas habilidades e conectar-se com oportunidades de carreira.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do CodersRank',
            url: 'https://codersrank.io/',
          },
          {
            idLink: 2,
            name: 'Como Maximizar seu Perfil no CodersRank',
            url: 'https://blog.codersrank.io/post/maximize-your-codersrank-profile/',
          },
        ],
      },
      {
        idTheme: 17,
        name: 'Frontend Mentor',
        text: 'Frontend Mentor desafia os desenvolvedores a melhorar suas habilidades de codificação front-end, reconstruindo designs reais e recebendo feedback da comunidade.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Frontend Mentor',
            url: 'https://www.frontendmentor.io/',
          },
          {
            idLink: 2,
            name: 'Desafios do Frontend Mentor',
            url: 'https://www.frontendmentor.io/challenges',
          },
        ],
      },
      {
        idTheme: 18,
        name: 'FreeCodeCamp',
        text: 'FreeCodeCamp é uma organização sem fins lucrativos que oferece um currículo gratuito para aprender a programar, com uma comunidade de milhões de aprendizes e desenvolvedores.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do FreeCodeCamp',
            url: 'https://www.freecodecamp.org/',
          },
          {
            idLink: 2,
            name: 'Fórum do FreeCodeCamp',
            url: 'https://forum.freecodecamp.org/',
          },
        ],
      },
      {
        idTheme: 19,
        name: 'Exercism',
        text: 'Exercism é uma plataforma de aprendizado de codificação com uma comunidade ativa, oferecendo exercícios práticos em mais de 50 linguagens de programação.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Exercism',
            url: 'https://exercism.io/',
          },
          {
            idLink: 2,
            name: 'Explorar Trilhas de Aprendizagem no Exercism',
            url: 'https://exercism.io/tracks',
          },
        ],
      },
      {
        idTheme: 20,
        name: 'Women in Technology',
        text: 'Women in Technology é uma comunidade dedicada a promover mulheres na área de TI, oferecendo suporte, recursos e oportunidades para crescimento profissional.',
        links: [
          {
            idLink: 1,
            name: 'Página Inicial do Women in Technology',
            url: 'https://www.womenintechnology.org/',
          },
          {
            idLink: 2,
            name: 'Eventos e Programas do Women in Technology',
            url: 'https://www.womenintechnology.org/events-programs',
          },
        ],
      },
    ],
  },
  {
    id: 15,
    category: 'Mais Projetos Meus',
    bgColor: '#44475A',
    textColor: '#F8F8F2',
    img: 'logo.png',
    resources: [
      {
        idTheme: 1,
        name: 'React Native',
        text: 'É uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e IOS de forma nativa.',
        links: [
          {
            idLink: 1,
            name: 'Futuro Garantido',
            url: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.FuturoGarantido',
          },
          {
            idLink: 2,
            name: 'Diversão em Dupla: Jogos para Dois',
            url: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.dualgame',
          },
          {
            idLink: 3,
            name: 'Pomodoro Prime Timer',
            url: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.PomodoroPrimeTimer',
          },
          {
            idLink: 4,
            name: 'Training Record',
            url: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.TrainingRecord',
          },
          {
            idLink: 5,
            name: 'Gerenciador de cartões',
            url: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.Invest',
          },
        ],
      },
      {
        idTheme: 2,
        name: 'React Js',
        text: 'É uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicações de página única ou mobile.',
        links: [
          {
            idLink: 1,
            name: 'Projeto Windows',
            url: 'https://matheuschiodi.github.io/windows/',
          },
          {
            idLink: 2,
            name: 'Projeto Loja',
            url: 'https://matheuschiodi.github.io/Project-Shop/',
          },
          {
            idLink: 3,
            name: 'Projeto Jogo da Velha',
            url: 'https://matheuschiodi.github.io/tic-tac-toe/',
          },
          {
            idLink: 4,
            name: 'NLW Spacetime',
            url: 'https://matheuschiodi.github.io/NLW-Spacetime-not-Prisma/',
          },
          {
            idLink: 5,
            name: 'Training Record versão web',
            url: 'https://matheuschiodi.github.io/Training/',
          },
          {
            idLink: 6,
            name: 'Novo Spotify beta',
            url: 'https://matheuschiodi.github.io/spotify/',
          },
        ],
      },
      {
        idTheme: 2,
        name: 'Html, Css e Javascript',
        text: 'São as três linguagens que todo desenvolvedor web precisa conhecer.',
        links: [
          {
            idLink: 1,
            name: 'TCC Parque Vivo',
            url: 'https://github.com/MatheusChiodi/TccParqueVivoV1',
          },
        ],
      },
    ],
  },
];

export default links;
