import { calculateAge } from "../scripts/about-me";

export const de = {
  name: "Deutsch",
  ascii: {
    sequences: [
      { keyword: "los geht's", word: "REDEN?" },
      { keyword: "komm", word: "BAUEN!" },
      { keyword: "mach es dir bequem", word: "RELAX!" },
    ],
  },
  actions: {
    email: {
      max: "Die E-Mail ist zu lang",
      email: "Ungültige E-Mail-Adresse",
    },
    name: {
      max: "Der Name ist zu lang",
      min: "Der Name muss mindestens 2 Zeichen enthalten",
    },
    message: {
      max: "Die Nachricht ist zu lang",
      min: "Die Nachricht muss mindestens 10 Zeichen enthalten",
    },
  },
  components: {
    aboutMe: {
      me: "me",
      about: "About",
      text: `Hello!! My name is Fábio, I'm ${calculateAge("2005-05-30")} years old, and I live in Manoel Ribas, Paraná - Brazil. I'm a very curious guy who enjoys learning how everything works. That's why I'm passionate about technology, which is a very broad and interesting field. I'm a full-stack developer, creating intuitive and dynamic interfaces with interactivity and accessibility. My main experience is in the web, but I've also developed desktop and mobile applications. I graduated with a degree in Systems Analysis and Development and am now seeking to learn more about various technologies, such as Python, Kotlin, Swift, React Native, and more.`,
    },
    header: {
      home: "Startseite",
      about: "Über mich",
      contact: "Kontakt",
      returnHome: "Zur Startseite",
      changeLanguage: "Sprache ändern",
      changeTheme: "Design ändern",
    },
    hero: {
      greeting: "Ich bin",
      badge: "Full-Stack-Entwickler",
      cvDownload: "Lebenslauf herunterladen",
    },
    projects: {
      title: "Projekte",
      seeProject: "Projekt ansehen",
      viewCode: "Code ansehen",
      items: {
        renext: { title: "Renext", description: "Renext – Digitalagentur für moderne Websites, überzeugende Inhalte und Strategien, die konvertieren." },
        jvmPortfolio: { title: "JVM Portfolio", description: "Modernes responsives Entwicklerportfolio mit React, Animationen, dunklem Design und klarer Oberfläche." },
        qrGenerator: { title: "QR-Code-Generator", description: "Anpassbares QR-Code-Tool mit Farben, Formen, Größen und SVG- oder Canvas-Downloads." },
        gradientGenerator: { title: "Gradient-Generator", description: "Interaktives Tool mit Rauschen, mehreren Farbstopps, Live-Vorschau und Export." },
        fabioDev: { title: "Fabio Dev", description: "Persönliches Astro- und React-Portfolio mit i18n für zehn Sprachen, Dark Theme und SSR." },
        restApi: { title: "REST API", description: "REST API mit Node.js und Express, JWT, CRUD, PostgreSQL und Fehlerbehandlung." },
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
      title: "Kontakt aufnehmen", subtitle: "Ich bin immer offen für neue Möglichkeiten und Kooperationen. Kontaktiere mich gerne über einen der folgenden Kanäle.",
      form: { name: "Dein Name", namePlaceholder: "Dein Name hier", email: "Deine E-Mail", emailPlaceholder: "deine.email@beispiel.com", message: "Deine Nachricht", messagePlaceholder: "Schreibe deine Nachricht hier...", submit: "Nachricht senden" },
      social: { whatsapp: "Whatsapp", instagram: "Instagram", github: "Github", linkedin: "LinkedIn" },
      successTitle: "E-Mail erfolgreich gesendet!", successMessage: "Danke für deine Nachricht. Ich antworte bald.", ok: "OK",
    },
    footer: {
      copyright: "© 2025 Fábio Ghizoni. All rights reserved.",
      rights: "Alle Rechte vorbehalten. Erstellt mit",
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
