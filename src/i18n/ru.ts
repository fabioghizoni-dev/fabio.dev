import { calculateAge } from "../scripts/about-me";

export const ru = {
  name: "Русский",
  ascii: {
    sequences: [
      { keyword: "давайте", word: "TALK?" },
      { keyword: "вперёд", word: "BUILD!" },
      { keyword: "располагайтесь", word: "RELAX!" },
    ],
  },
  actions: {
    email: {
      max: "Электронная почта слишком длинная",
      email: "Неверный адрес электронной почты",
    },
    name: {
      max: "Имя слишком длинное",
      min: "Имя должно содержать минимум 2 символа",
    },
    message: {
      max: "Сообщение слишком длинное",
      min: "Сообщение должно содержать минимум 10 символов",
    },
  },
  components: {
    aboutMe: {
      me: "me",
      about: "About",
      text: `Hello!! My name is Fábio, I'm ${calculateAge("2005-05-30")} years old, and I live in Manoel Ribas, Paraná - Brazil. I'm a very curious guy who enjoys learning how everything works. That's why I'm passionate about technology, which is a very broad and interesting field. I'm a full-stack developer, creating intuitive and dynamic interfaces with interactivity and accessibility. My main experience is in the web, but I've also developed desktop and mobile applications. I graduated with a degree in Systems Analysis and Development and am now seeking to learn more about various technologies, such as Python, Kotlin, Swift, React Native, and more.`,
    },
    header: {
      home: "Главная",
      about: "Обо мне",
      contact: "Контакты",
      returnHome: "Вернуться на главную",
      changeLanguage: "Изменить язык",
      changeTheme: "Изменить тему",
    },
    hero: {
      greeting: "Я",
      badge: "Full-Stack разработчик",
      cvDownload: "Скачать резюме",
    },
    projects: {
      title: "Проекты",
      seeProject: "Открыть проект",
      viewCode: "Посмотреть код",
      items: {
        renext: { title: "Renext", description: "Renext — цифровое агентство, создающее современные сайты, вовлекающий контент и стратегии, которые конвертируют." },
        jvmPortfolio: { title: "JVM Portfolio", description: "Современное адаптивное портфолио разработчика на React с анимациями и тёмной темой." },
        qrGenerator: { title: "Генератор QR-кодов", description: "Настраиваемый инструмент QR-кодов с цветами, формами, размерами и экспортом SVG или canvas." },
        gradientGenerator: { title: "Генератор градиентов", description: "Интерактивный инструмент с шумом, цветовыми точками, предпросмотром и экспортом." },
        fabioDev: { title: "Fabio Dev", description: "Портфолио на Astro и React с i18n на 10 языков, тёмной темой и SSR." },
        restApi: { title: "REST API", description: "REST API на Node.js и Express с JWT, CRUD, PostgreSQL и обработкой ошибок." },
      },
    },
    contactMe: {
      title: "Get in touch",
      subtitle:
        "I'm always open to new opportunities and collaborations. Feel free to contact me through any of the channels below.",
      form: {
        name: "Your name",
        namePlaceholder: "Your name here",
        email: "Your e-mail",
        emailPlaceholder: "your.email@example.com",
        message: "Your message",
        messagePlaceholder: "Write your message here...",
        submit: "Send message",
      },
      social: {
        whatsapp: "Whatsapp",
        instagram: "Instagram",
        github: "Github",
        linkedin: "LinkedIn",
      },
    },
    contactMeActive: {
      title: "Связаться со мной", subtitle: "Я всегда открыт новым возможностям и сотрудничеству. Напишите мне одним из удобных способов ниже.",
      form: { name: "Ваше имя", namePlaceholder: "Введите ваше имя", email: "Ваш e-mail", emailPlaceholder: "your.email@example.com", message: "Ваше сообщение", messagePlaceholder: "Напишите сообщение здесь...", submit: "Отправить сообщение" },
      social: { whatsapp: "Whatsapp", instagram: "Instagram", github: "Github", linkedin: "LinkedIn" },
      successTitle: "Письмо успешно отправлено!", successMessage: "Спасибо за сообщение. Я скоро отвечу.", ok: "Хорошо",
    },
    footer: {
      copyright: "© 2025 Fábio Ghizoni. All rights reserved.",
      rights: "Все права защищены. Сделано с",
    },
  },
  pages: {
    components: {
      title: "Site Components",
      subtitle: "Page still in development",
      description:
        "Page listing the components that were used on this website and in some other projects.",
    },
    curriculum: {
      title: "Curriculum",
      description:
        "Resume page containing all professional and academic information of Fábio Ghizoni",
    },
    gradients: {
      title: "Gradients",
      description:
        "Page for generating custom gradients with various colors and even a noise effect.",
    },
    qr: {
      title: "QR Code Generator",
      description: "Description / Values",
      question: "Are you unsure how it works?",
      clickHere: "Click here",
      howWorksTitle: "How it works",
      howWorksDescription:
        "Generate personalized QR Codes based on parameters provided via URL. You can set data, colors, shapes and even download the result automatically.",
      exampleTitle: "Usage example",
      resultTitle: "Result",
      resultDescription:
        "The QR Code will be generated with the defined parameters and the file meu-qr.png will be downloaded automatically.",
      aboutTitle: "About",
      aboutDescription:
        "This application uses the qr-code-styling library to generate QR Codes with high customization.",
      parametersTitle: "Available parameters",
      parameter: "Parameter",
      type: "Type",
      data: "Text or encoded URL",
      size: "Equal width and height",
      width: "Custom width",
      height: "Custom height",
      margin: "External margin (default: 10)",
      shape: "square, rounded",
      typeFormat: "svg or canvas",
    },
    routes: {
      title: "Routes",
      description:
        "Page listing all routes available on the website for easy navigation.",
    },
    home: {},
  },
  ui: {
    modal: {
      title: "Welcome to my website",
      description:
        "This website is still under development, so there may be incomplete information. I thank you for your understanding!",
      animations: "Do you want animations on the site?",
      yes: "Yes",
      no: "No",
      continue: "Continue",
    },
    scrollTop: {
      title: "Scroll to top of page",
    },
    switchLang: {},
    switchTheme: {},
  },
};
