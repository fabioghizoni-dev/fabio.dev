import { calculateAge } from "../scripts/about-me";

export const en = {
  name: "English",
  ascii: {
    sequences: [
      { keyword: "let's", word: "TALK?" },
      { keyword: "come on", word: "CREATE!" },
      { keyword: "make yourself", word: "RELAX!" },
    ],
  },
  actions: {
    email: {
      max: "Email is too long",
      email: "Invalid email address",
    },
    name: {
      max: "Name is too long",
      min: "Name must have at least 2 characters",
    },
    message: {
      max: "Message is too long",
      min: "Message must have at least 10 characters",
    },
  },
  components: {
    aboutMe: {
      me: "me",
      about: "About",
      text: `Hello!! My name is Fábio, I'm ${calculateAge("2005-05-30")} years old, and I live in Manoel Ribas, Paraná - Brazil. I'm a very curious guy who enjoys learning how everything works. That's why I'm passionate about technology, which is a very broad and interesting field. I'm a full-stack developer, creating intuitive and dynamic interfaces with interactivity and accessibility. My main experience is in the web, but I've also developed desktop and mobile applications. I graduated with a degree in Systems Analysis and Development and am now seeking to learn more about various technologies, such as Python, Kotlin, Swift, React Native, and more.`,
    },
    header: {
      home: "Home",
      about: "About",
      contact: "Contact",
      returnHome: "Return to home page",
      changeLanguage: "Change language",
      changeTheme: "Change theme",
    },
    hero: {
      greeting: "I'm",
      badge: "Full-Stack Developer",
      cvDownload: "Download CV",
    },
    projects: {
      title: "Projects",
      seeProject: "See project",
      viewCode: "View code",
      items: {
        renext: { title: "Renext", description: "Renext - Digital agency creating modern websites, engaging content, and strategies that convert." },
        jvmPortfolio: { title: "JVM Portfolio", description: "Modern responsive developer portfolio built with React, animations, dark theme and clean UI." },
        qrGenerator: { title: "QR Code Generator", description: "Customizable QR code tool with colors, shapes, sizes and automatic SVG or canvas downloads." },
        gradientGenerator: { title: "Gradient Generator", description: "Interactive gradient tool with noise, multiple color stops, live preview and export." },
        fabioDev: { title: "Fabio Dev", description: "Personal Astro and React portfolio with 10-language i18n, dark theme and server-side rendering." },
        restApi: { title: "REST API", description: "Node.js and Express REST API with JWT authentication, CRUD, PostgreSQL and error handling." },
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
      title: "Get in touch", subtitle: "I'm always open to new opportunities and collaborations. Feel free to contact me through any of the channels below.",
      form: { name: "Your name", namePlaceholder: "Your name here", email: "Your e-mail", emailPlaceholder: "your.email@example.com", message: "Your message", messagePlaceholder: "Write your message here...", submit: "Send message" },
      social: { whatsapp: "Whatsapp", instagram: "Instagram", github: "Github", linkedin: "LinkedIn" },
      successTitle: "Email sent successfully!", successMessage: "Thank you for contacting me. I will reply shortly.", ok: "Okay",
    },
    footer: {
      copyright: "© 2025 Fábio Ghizoni. All rights reserved.",
      rights: "All rights reserved. Made with",
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
    home: {
      // Index specific if any separate from components
    },
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
    switchLang: {
      // ...
    },
    switchTheme: {
      // ...
    },
  },
};
