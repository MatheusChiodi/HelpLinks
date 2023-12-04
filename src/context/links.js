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
    resources: [],
  },
  {
    id: 7,
    category: 'Desenvolvimento Mobile',
    bgColor: '#AFEEEE',
    textColor: '#282A36',
    img: 'DesenvolvimentoMobile.png',
    resources: [],
  },
  {
    id: 8,
    category: 'Desing',
    bgColor: '#FFA07A',
    textColor: '#282A36',
    img: 'Desing.png',
    resources: [],
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
        ],
      },
      {
        idTheme: 17,
        name: 'Nuxt.js',
        text: 'Um framework baseado em Vue.js para criar aplicações universais ou de página única, com renderização do lado do servidor ou geração de site estático.',
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
        ],
      },
      {
        idTheme: 18,
        name: 'Gatsby',
        text: 'Um gerador de site estático moderno baseado em React. Permite a construção de websites e aplicações web que são rápidos e otimizados.',
        links: [
          {
            idLink: 1,
            name: 'Gatsby - Official Documentation',
            url: 'https://www.gatsbyjs.com/docs/',
          },
          {
            idLink: 2,
            name: 'FreeCodeCamp - Gatsby Tutorial',
            url: 'https://www.freecodecamp.org/news/tag/gatsby/',
          },
          {
            idLink: 3,
            name: 'Udemy Gatsby Courses',
            url: 'https://www.udemy.com/topic/gatsbyjs/',
          },
          {
            idLink: 4,
            name: 'Egghead.io - Gatsby Courses',
            url: 'https://egghead.io/q?q=gatsby',
          },
          {
            idLink: 5,
            name: 'Codecademy - Learn Gatsby',
            url: 'https://www.codecademy.com/learn/paths/build-a-website-with-react',
          },
        ],
      },
      {
        idTheme: 19,
        name: 'Ember.js',
        text: 'Um framework ambicioso para aplicações web que elimina muita da redundância e fornece uma estrutura padrão para aplicações web.',
        links: [
          {
            idLink: 1,
            name: 'Ember.js - Official Documentation',
            url: 'https://guides.emberjs.com/',
          },
          {
            idLink: 2,
            name: 'FreeCodeCamp - Ember.js Guide',
            url: 'https://www.freecodecamp.org/news/what-is-ember-js-a-tutorial-and-guide/',
          },
          {
            idLink: 3,
            name: 'Udemy Ember.js Courses',
            url: 'https://www.udemy.com/topic/emberjs/',
          },
          {
            idLink: 4,
            name: 'EmberCast - Ember.js Screencasts',
            url: 'https://www.embercasts.com/',
          },
          {
            idLink: 5,
            name: 'Egghead.io - Ember.js Courses',
            url: 'https://egghead.io/q?q=ember.js',
          },
        ],
      },
      {
        idTheme: 20,
        name: 'Backbone.js',
        text: 'Um framework JavaScript que fornece modelos com chave-valor e vinculação de eventos para estruturar aplicações web.',
        links: [
          {
            idLink: 1,
            name: 'Backbone.js - Official Documentation',
            url: 'http://backbonejs.org/',
          },
          {
            idLink: 2,
            name: 'FreeCodeCamp - Backbone.js Tutorial',
            url: 'https://www.freecodecamp.org/news/backbone-js-tutorial-learn-backbone-js-from-scratch/',
          },
          {
            idLink: 3,
            name: 'Udemy Backbone.js Courses',
            url: 'https://www.udemy.com/topic/backbonejs/',
          },
          {
            idLink: 4,
            name: 'Code School - Anatomy of Backbone.js',
            url: 'https://www.pluralsight.com/courses/anatomy-of-backbonejs',
          },
          {
            idLink: 5,
            name: 'Egghead.io - Backbone.js Courses',
            url: 'https://egghead.io/courses/building-applications-with-react-and-backbone',
          },
        ],
      },
      {
        idTheme: 21,
        name: 'Foundation',
        text: 'Um framework front-end responsivo e de código aberto para desenvolvimento de sites.',
        links: [
          {
            idLink: 1,
            name: 'Foundation - Official Documentation',
            url: 'https://get.foundation/sites/docs/',
          },
          {
            idLink: 2,
            name: 'W3Schools - Foundation Framework Tutorial',
            url: 'https://www.w3schools.com/w3css/w3css_templates.asp',
          },
          {
            idLink: 3,
            name: 'Udemy Foundation Courses',
            url: 'https://www.udemy.com/topic/foundation-framework/',
          },
          {
            idLink: 4,
            name: 'Codecademy - Learn Foundation',
            url: 'https://www.codecademy.com/catalog/subject/web-development',
          },
          {
            idLink: 5,
            name: 'Scrimba - Foundation Tutorial',
            url: 'https://scrimba.com/learn/foundation',
          },
        ],
      },
      {
        idTheme: 22,
        name: 'JAMstack',
        text: 'Uma arquitetura moderna para construção de aplicações web que oferece melhor desempenho, maior segurança e menor custo de escalabilidade.',
        links: [
          {
            idLink: 1,
            name: 'JAMstack.org - Official Resources',
            url: 'https://jamstack.org/resources/',
          },
          {
            idLink: 2,
            name: 'Netlify - JAMstack Tutorials',
            url: 'https://www.netlify.com/tags/jamstack/',
          },
          {
            idLink: 3,
            name: 'FreeCodeCamp - Introduction to JAMstack',
            url: 'https://www.freecodecamp.org/news/what-is-jamstack-a-complete-guide/',
          },
          {
            idLink: 4,
            name: 'Udemy JAMstack Courses',
            url: 'https://www.udemy.com/topic/jamstack/',
          },
          {
            idLink: 5,
            name: 'Bejamas - JAMstack Blog',
            url: 'https://bejamas.io/blog/jamstack/',
          },
        ],
      },
      {
        idTheme: 23,
        name: 'Blazor',
        text: 'Um framework de código aberto para construir aplicações web interativas usando C# e HTML.',
        links: [
          {
            idLink: 1,
            name: 'Blazor - Official Documentation',
            url: 'https://docs.microsoft.com/en-us/aspnet/core/blazor/',
          },
          {
            idLink: 2,
            name: 'FreeCodeCamp - Introduction to Blazor',
            url: 'https://www.freecodecamp.org/news/what-is-blazor-a-tutorial-on-building-web-apps-with-authentication/',
          },
          {
            idLink: 3,
            name: 'Udemy Blazor Courses',
            url: 'https://www.udemy.com/topic/blazor/',
          },
          {
            idLink: 4,
            name: 'Pluralsight - Blazor Courses',
            url: 'https://www.pluralsight.com/search?q=blazor',
          },
          {
            idLink: 5,
            name: 'Codecademy - Learn Blazor',
            url: 'https://www.codecademy.com/catalog/subject/all',
          },
        ],
      },
      {
        idTheme: 24,
        name: 'Svelte',
        text: 'Um framework front-end moderno que compila suas aplicações para JavaScript puro no momento da construção.',
        links: [
          {
            idLink: 1,
            name: 'Svelte - Official Documentation',
            url: 'https://svelte.dev/docs',
          },
          {
            idLink: 2,
            name: 'FreeCodeCamp - Full Svelte Tutorial',
            url: 'https://www.freecodecamp.org/news/the-complete-guide-to-svelte/',
          },
          {
            idLink: 3,
            name: 'Udemy Svelte Courses',
            url: 'https://www.udemy.com/topic/svelte/',
          },
          {
            idLink: 4,
            name: 'Frontend Masters - Svelte Courses',
            url: 'https://frontendmasters.com/courses/svelte/',
          },
          {
            idLink: 5,
            name: 'Svelte Tutorial - Rethinking Reactivity',
            url: 'https://svelte.dev/tutorial/basics',
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
        ],
      },
      {
        idTheme: 5,
        name: 'AdonisJS',
        text: 'É um framework back-end para Node.js que permite que os desenvolvedores escrevam aplicativos web robustos e funcionais com facilidade e velocidade.',
        links: [
          {
            idLink: 1,
            name: 'AdonisJS - Official Documentation',
            url: 'https://docs.adonisjs.com/',
          },
          {
            idLink: 2,
            name: 'FreeCodeCamp - Introduction to AdonisJS',
            url: 'https://www.freecodecamp.org/news/what-is-adonisjs/',
          },
          {
            idLink: 3,
            name: 'Udemy AdonisJS Courses',
            url: 'https://www.udemy.com/topic/adonisjs/',
          },
          {
            idLink: 4,
            name: 'Codecademy - Learn AdonisJS',
            url: 'https://www.codecademy.com/learn/learn-adonisjs',
          },
          {
            idLink: 5,
            name: 'Coursera AdonisJS Courses',
            url: 'https://www.coursera.org/courses?query=adonisjs',
          },
        ],
      },
      {
        idTheme: 6,
        name: 'Meteor',
        text: 'É uma plataforma JavaScript de código aberto para criar aplicações web e móveis. O Meteor torna o desenvolvimento de software mais fácil com uma pilha de tecnologia simples, uma linguagem de programação unificada e uma comunidade de desenvolvedores ativa.',
        links: [
          {
            idLink: 1,
            name: 'Meteor - Official Documentation',
            url: 'https://docs.meteor.com/',
          },
          {
            idLink: 2,
            name: 'FreeCodeCamp - Introduction to Meteor',
            url: 'https://www.freecodecamp.org/news/what-is-meteor-js-and-why-is-it-so-awesome/',
          },
          {
            idLink: 3,
            name: 'Udemy Meteor Courses',
            url: 'https://www.udemy.com/topic/meteor/',
          },
          {
            idLink: 4,
            name: 'Codecademy - Learn Meteor',
            url: 'https://www.codecademy.com/learn/learn-meteor',
          },
          {
            idLink: 5,
            name: 'Coursera Meteor Courses',
            url: 'https://www.coursera.org/courses?query=meteor',
          },
        ],
      },
      {
        idTheme: 7,
        name: 'FeathersJS',
        text: 'É um framework back-end para a construção de aplicações web e APIs em tempo real. Ele funciona com qualquer banco de dados e é agnóstico de cliente, o que significa que funciona com qualquer cliente de front-end (React, Vue.js, Angular, etc.) e qualquer dispositivo (iOS, Android, TVs, etc.)',
        links: [
          {
            idLink: 1,
            name: 'FeathersJS - Official Documentation',
            url: 'https://docs.feathersjs.com/',
          },
          {
            idLink: 2,
            name: 'FreeCodeCamp - Introduction to FeathersJS',
            url: 'https://www.freecodecamp.org/news/what-is-feathers-js/',
          },
          {
            idLink: 3,
            name: 'Udemy FeathersJS Courses',
            url: 'https://www.udemy.com/topic/feathersjs/',
          },
          {
            idLink: 4,
            name: 'Codecademy - Learn FeathersJS',
            url: 'https://www.codecademy.com/learn/learn-feathersjs',
          },
          {
            idLink: 5,
            name: 'Coursera FeathersJS Courses',
            url: 'https://www.coursera.org/courses?query=feathersjs',
          },
        ],
      },
      {
        idTheme: 8,
        name: 'LoopBack',
        text: 'É um framework Node.js altamente extensível para criar APIs e microsserviços.',
        links: [
          {
            idLink: 1,
            name: 'LoopBack - Official Documentation',
            url: 'https://loopback.io/doc/en/lb4/index.html',
          },
          {
            idLink: 2,
            name: 'FreeCodeCamp - Introduction to LoopBack',
            url: 'https://www.freecodecamp.org/news/what-is-loopback-js/',
          },
          {
            idLink: 3,
            name: 'Udemy LoopBack Courses',
            url: 'https://www.udemy.com/topic/loopback-framework/',
          },
          {
            idLink: 4,
            name: 'Codecademy - Learn LoopBack',
            url: 'https://www.codecademy.com/learn/learn-loopback',
          },
          {
            idLink: 5,
            name: 'Coursera LoopBack Courses',
            url: 'https://www.coursera.org/courses?query=loopback',
          },
        ],
      },
      {
        idTheme: 9,
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
        ],
      },
      {
        idTheme: 10,
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
        ],
      },
      {
        idTheme: 11,
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
        ],
      },
      {
        idTheme: 12,
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
        ],
      },
      {
        idTheme: 13,
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
        ],
      },
      {
        idTheme: 14,
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
        ],
      },
      {
        idTheme: 15,
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
        idTheme: 16,
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
        ],
      },
      {
        idTheme: 17,
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
    resources: [],
  },
  {
    id: 12,
    category: 'Ferramentas',
    bgColor: '#FFFDD0',
    textColor: '#282A36',
    img: 'Ferramentas.png',
    resources: [],
  },
  {
    id: 13,
    category: 'Achar Trabalho',
    bgColor: '#89CFF0',
    textColor: '#282A36',
    img: 'AcharTrabalho.png',
    resources: [],
  },
  {
    id: 14,
    category: 'Comunidade',
    bgColor: '#FDBCB4',
    textColor: '#282A36',
    img: 'Comunidade.png',
    resources: [],
  },
  {
    id: 15,
    category: 'Mais Projetos Meus',
    bgColor: '#44475A',
    textColor: '#F8F8F2',
    img: 'logo.png',
    resources: [],
  },
];

export default links;
