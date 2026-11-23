import { calculateAge } from "../scripts/about-me";

export const es = {
  name: "Español",
  actions: {
    email: {
      max: "El correo electrónico es demasiado largo",
      email: "Dirección de correo electrónico no válida",
    },
    name: {
      max: "El nombre es demasiado largo",
      min: "El nombre debe tener al menos 2 caracteres",
    },
    message: {
      max: "El mensaje es demasiado largo",
      min: "El mensaje debe tener al menos 10 caracteres",
    },
  },
  components: {
    aboutMe: {
      me: "me",
      about: "About",
      text: `Hello!! My name is Fábio, I'm ${calculateAge("2005-05-30")} years old, and I live in Manoel Ribas, Paraná - Brazil. I'm a very curious guy who enjoys learning how everything works. That's why I'm passionate about technology, which is a very broad and interesting field. I'm a full-stack developer, creating intuitive and dynamic interfaces with interactivity and accessibility. My main experience is in the web, but I've also developed desktop and mobile applications. I graduated with a degree in Systems Analysis and Development and am now seeking to learn more about various technologies, such as Python, Kotlin, Swift, React Native, and more.`,
    },
    header: {
      openMenu: "Abrir menú",
      navigation: "Navegación principal",
      closeMenu: "Cerrar menú",
      home: "Inicio",
      about: "Sobre mí",
      contact: "Contacto",
      returnHome: "Volver al inicio",
      changeLanguage: "Cambiar idioma",
      changeTheme: "Cambiar tema",
    },
    hero: {
      greeting: "Soy",
      badge: "Desarrollador Full-Stack",
      available: "Disponible",
      cvDownload: "Descargar CV",
    },
    projects: {
      title: "Proyectos",
      seeProject: "Ver proyecto",
      viewCode: "Ver código",
      items: {
        renext: {
          title: "Renext",
          description:
            "Renext - Agencia digital para crear sitios web modernos, contenido que conecta y estrategias que convierten.",
        },
        jvmPortfolio: {
          title: "Portafolio JVM",
          description:
            "Portafolio moderno y responsivo para desarrolladores, creado con React, animaciones, tema oscuro y una UI limpia.",
        },
        qrGenerator: {
          title: "Generador de QR Code",
          description:
            "Herramienta personalizable para códigos QR con colores, formas, tamaños y descargas SVG o canvas.",
        },
        gradientGenerator: {
          title: "Generador de Gradientes",
          description:
            "Herramienta interactiva con ruido, paradas de color, vista previa en tiempo real y exportación.",
        },
        fabioDev: {
          title: "Fabio Dev",
          description:
            "Portafolio personal en Astro y React con i18n para 10 idiomas, tema oscuro y renderizado del servidor.",
        },
        restApi: {
          title: "Tião Carreiro API",
          description:
            "RESTful Laravel API for a music ranking platform, with Sanctum auth, YouTube integration, moderation and Docker.",
        },
        dailyRoutines: {
          title: "Daily Routines",
          description:
            "Personal routines, tasks and study app for desktop, web/PWA and Android, with offline support and account sync.",
        },
        brava: {
          title: "BRAVA",
          description:
            "Digital store for sports culture with catalog, cart, checkout and an admin dashboard for products, orders and stock.",
        },
        astroSauce: {
          title: "astro-sauce",
          description:
            "Open-source CSS-in-JS runtime for Astro: write CSS inside JavaScript, without an SSR dependency.",
        },
      },
    },
    contactMeActive: {
      title: "Contacta conmigo",
      subtitle:
        "Siempre estoy abierto a nuevas oportunidades y colaboraciones. No dudes en contactarme por cualquiera de los canales siguientes.",
      form: {
        name: "Tu nombre",
        namePlaceholder: "Escribe tu nombre",
        email: "Tu correo",
        emailPlaceholder: "tu.correo@ejemplo.com",
        message: "Tu mensaje",
        messagePlaceholder: "Escribe tu mensaje aquí...",
        submit: "Enviar mensaje",
      },
      social: {
        whatsapp: "Whatsapp",
        instagram: "Instagram",
        github: "Github",
        linkedin: "LinkedIn",
      },
      successTitle: "¡Correo enviado!",
      successMessage: "Gracias por contactarme. Responderé pronto.",
      ok: "Aceptar",
    },
    footer: {
      copyright: "© 2025 Fábio Ghizoni. All rights reserved.",
      rights: "Todos los derechos reservados. Hecho con",
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
    skipToContent: "Saltar al contenido",
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
