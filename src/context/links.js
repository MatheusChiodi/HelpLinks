const links = [
  {
    id: 1,
    category: 'Inteligência Artificial',
    bgColor: '#FFD1DC',
    textColor: '#282A36',
    img: 'InteligenciaArtificial.png',
    resources: [],
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
      {
        idTheme: 25,
        name: 'Stencil',
        text: 'Um compilador de componentes web que gera componentes web padrão.',
        links: [
          {
            idLink: 1,
            name: 'Stencil - Official Documentation',
            url: 'https://stenciljs.com/docs/introduction',
          },
          {
            idLink: 2,
            name: 'Udemy Stencil Courses',
            url: 'https://www.udemy.com/topic/stenciljs/',
          },
          {
            idLink: 3,
            name: 'FreeCodeCamp - Introduction to Stencil',
            url: 'https://www.freecodecamp.org/news/what-is-stenciljs-a-tutorial-on-building-web-components-with-stencil/',
          },
          {
            idLink: 4,
            name: 'Scrimba - Learn Stencil',
            url: 'https://scrimba.com/learn/stencil',
          },
          {
            idLink: 5,
            name: 'Pluralsight - Stencil Courses',
            url: 'https://www.pluralsight.com/search?q=stencil',
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
    resources: [],
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
