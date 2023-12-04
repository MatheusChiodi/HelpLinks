const links = [
  {
    id: 1,
    category: 'Inteligência Artificial',
    bgColor: '#FFD1DC',
    textColor: '#282A36',
    img: 'InteligenciaArtificial.png',
    resources: [
    ],
  },
  {
    id: 2,
    category: 'Desenvolvimento Web',
    bgColor: '#AEC6CF',
    textColor: '#282A36',
    img: 'DesenvolvimentoWeb.png',
    resources: [],
  },
  {
    id: 3,
    category: 'Desenvolvimento de Jogos',
    bgColor: '#98FB98',
    textColor: '#282A36',
    img: 'DesenvolvimentoDeJogos.png',
    resources: [],
  },
  {
    id: 4,
    category: 'Segurança da Informação',
    bgColor: '#E6E6FA',
    textColor: '#282A36',
    img: 'SegurancaDaInformacao.png',
    resources: [],
  },
  {
    id: 5,
    category: 'Realidade Virtual',
    bgColor: '#FFE5B4',
    textColor: '#282A36',
    img: 'RealidadeVirtual.png',
    resources: [],
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
