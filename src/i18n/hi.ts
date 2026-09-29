import { calculateAge } from "../scripts/about-me";

export const hi = {
  name: "हिन्दी",
  ascii: {
    sequences: [
      { keyword: "चलो बात करें", word: "TALK?" },
      { keyword: "आओ", word: "BUILD!" },
      { keyword: "आराम से", word: "RELAX!" },
    ],
  },
  actions: {
    email: {
      max: "ईमेल बहुत लंबा है",
      email: "अमान्य ईमेल पता",
    },
    name: {
      max: "नाम बहुत लंबा है",
      min: "नाम में कम से कम 2 अक्षर होने चाहिए",
    },
    message: {
      max: "संदेश बहुत लंबा है",
      min: "संदेश में कम से कम 10 अक्षर होने चाहिए",
    },
  },
  components: {
    aboutMe: {
      me: "me",
      about: "About",
      text: `Hello!! My name is Fábio, I'm ${calculateAge("2005-05-30")} years old, and I live in Manoel Ribas, Paraná - Brazil. I'm a very curious guy who enjoys learning how everything works. That's why I'm passionate about technology, which is a very broad and interesting field. I'm a full-stack developer, creating intuitive and dynamic interfaces with interactivity and accessibility. My main experience is in the web, but I've also developed desktop and mobile applications. I graduated with a degree in Systems Analysis and Development and am now seeking to learn more about various technologies, such as Python, Kotlin, Swift, React Native, and more.`,
    },
    header: {
      home: "होम",
      about: "मेरे बारे में",
      contact: "संपर्क",
      returnHome: "होम पेज पर वापस जाएँ",
      changeLanguage: "भाषा बदलें",
      changeTheme: "थीम बदलें",
    },
    hero: {
      greeting: "मैं हूँ",
      badge: "फुल-स्टैक डेवलपर",
      cvDownload: "सीवी डाउनलोड करें",
    },
    projects: {
      title: "प्रोजेक्ट्स",
      seeProject: "प्रोजेक्ट देखें",
      viewCode: "कोड देखें",
      items: {
        renext: { title: "Renext", description: "Renext - आधुनिक वेबसाइट, आकर्षक सामग्री और परिणाम देने वाली रणनीतियाँ बनाने वाली डिजिटल एजेंसी।" },
        jvmPortfolio: { title: "JVM Portfolio", description: "React, एनिमेशन, डार्क थीम और साफ UI वाला आधुनिक डेवलपर पोर्टफोलियो।" },
        qrGenerator: { title: "QR Code Generator", description: "रंग, आकार, आकृतियों और SVG या canvas डाउनलोड वाला अनुकूलन योग्य QR टूल।" },
        gradientGenerator: { title: "Gradient Generator", description: "नॉइज़, कई रंग स्टॉप, लाइव प्रीव्यू और एक्सपोर्ट वाला इंटरैक्टिव टूल।" },
        fabioDev: { title: "Fabio Dev", description: "10 भाषाओं के i18n, डार्क थीम और SSR वाला Astro और React पोर्टफोलियो।" },
        restApi: { title: "REST API", description: "JWT, CRUD, PostgreSQL और त्रुटि प्रबंधन वाली Node.js और Express REST API।" },
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
      title: "संपर्क करें", subtitle: "मैं हमेशा नए अवसरों और सहयोग के लिए तैयार हूँ। नीचे दिए गए किसी भी माध्यम से संपर्क करें।",
      form: { name: "आपका नाम", namePlaceholder: "यहाँ अपना नाम लिखें", email: "आपका ई-मेल", emailPlaceholder: "your.email@example.com", message: "आपका संदेश", messagePlaceholder: "अपना संदेश यहाँ लिखें...", submit: "संदेश भेजें" },
      social: { whatsapp: "Whatsapp", instagram: "Instagram", github: "Github", linkedin: "LinkedIn" },
      successTitle: "ई-मेल सफलतापूर्वक भेजा गया!", successMessage: "संपर्क करने के लिए धन्यवाद। मैं जल्द जवाब दूँगा।", ok: "ठीक है",
    },
    footer: {
      copyright: "© 2025 Fábio Ghizoni. All rights reserved.",
      rights: "सभी अधिकार सुरक्षित। बनाया गया",
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
