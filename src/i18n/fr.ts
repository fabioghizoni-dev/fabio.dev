import { calculateAge } from "../scripts/about-me";

export const fr = {
  name: "Français",
  ascii: {
    sequences: [
      { keyword: "allons", word: "PARLER?" },
      { keyword: "allez", word: "CREER!" },
      { keyword: "a l'aise", word: "RELAX!" },
    ],
  },
  actions: {
    email: {
      max: "L'e-mail est trop long",
      email: "Adresse e-mail invalide",
    },
    name: {
      max: "Le nom est trop long",
      min: "Le nom doit contenir au moins 2 caractères",
    },
    message: {
      max: "Le message est trop long",
      min: "Le message doit contenir au moins 10 caractères",
    },
  },
  components: {
    aboutMe: {
      me: "me",
      about: "About",
      text: `Hello!! My name is Fábio, I'm ${calculateAge("2005-05-30")} years old, and I live in Manoel Ribas, Paraná - Brazil. I'm a very curious guy who enjoys learning how everything works. That's why I'm passionate about technology, which is a very broad and interesting field. I'm a full-stack developer, creating intuitive and dynamic interfaces with interactivity and accessibility. My main experience is in the web, but I've also developed desktop and mobile applications. I graduated with a degree in Systems Analysis and Development and am now seeking to learn more about various technologies, such as Python, Kotlin, Swift, React Native, and more.`,
    },
    header: {
      home: "Accueil",
      about: "À propos",
      contact: "Contact",
      returnHome: "Retour à l'accueil",
      changeLanguage: "Changer de langue",
      changeTheme: "Changer de thème",
    },
    hero: {
      greeting: "Je suis",
      badge: "Développeur Full-Stack",
      cvDownload: "Télécharger le CV",
    },
    projects: {
      title: "Projets",
      seeProject: "Voir le projet",
      viewCode: "Voir le code",
      items: {
        renext: { title: "Renext", description: "Renext – Agence digitale spécialisée dans la création de sites modernes, de contenus engageants et de stratégies qui convertissent." },
        jvmPortfolio: { title: "Portfolio JVM", description: "Portfolio développeur moderne et responsive créé avec React, animations, thème sombre et interface claire." },
        qrGenerator: { title: "Générateur de QR Code", description: "Outil personnalisable pour QR codes avec couleurs, formes, tailles et téléchargements SVG ou canvas." },
        gradientGenerator: { title: "Générateur de dégradés", description: "Outil interactif avec bruit, plusieurs couleurs, aperçu en temps réel et exportation." },
        fabioDev: { title: "Fabio Dev", description: "Portfolio personnel Astro et React avec i18n en 10 langues, thème sombre et rendu serveur." },
        restApi: { title: "API REST", description: "API REST Node.js et Express avec authentification JWT, CRUD, PostgreSQL et gestion des erreurs." },
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
      title: "Me contacter", subtitle: "Je suis toujours ouvert aux nouvelles opportunités et collaborations. N'hésitez pas à me contacter par l'un des canaux ci-dessous.",
      form: { name: "Votre nom", namePlaceholder: "Votre nom ici", email: "Votre e-mail", emailPlaceholder: "votre.email@exemple.com", message: "Votre message", messagePlaceholder: "Écrivez votre message ici...", submit: "Envoyer le message" },
      social: { whatsapp: "Whatsapp", instagram: "Instagram", github: "Github", linkedin: "LinkedIn" },
      successTitle: "E-mail envoyé !", successMessage: "Merci pour votre message. Je vous répondrai bientôt.", ok: "D'accord",
    },
    footer: {
      copyright: "© 2025 Fábio Ghizoni. All rights reserved.",
      rights: "Tous droits réservés. Réalisé avec",
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
