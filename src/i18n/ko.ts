import { calculateAge } from "../scripts/about-me";

export const ko = {
  name: "한국어",
  ascii: {
    sequences: [
      { keyword: "대화해요", word: "TALK?" },
      { keyword: "자", word: "BUILD!" },
      { keyword: "편하게", word: "RELAX!" },
    ],
  },
  actions: {
    email: {
      max: "이메일이 너무 깁니다",
      email: "유효하지 않은 이메일 주소입니다",
    },
    name: {
      max: "이름이 너무 깁니다",
      min: "이름은 2자 이상이어야 합니다",
    },
    message: {
      max: "메시지가 너무 깁니다",
      min: "메시지는 10자 이상이어야 합니다",
    },
  },
  components: {
    aboutMe: {
      me: "me",
      about: "About",
      text: `Hello!! My name is Fábio, I'm ${calculateAge("2005-05-30")} years old, and I live in Manoel Ribas, Paraná - Brazil. I'm a very curious guy who enjoys learning how everything works. That's why I'm passionate about technology, which is a very broad and interesting field. I'm a full-stack developer, creating intuitive and dynamic interfaces with interactivity and accessibility. My main experience is in the web, but I've also developed desktop and mobile applications. I graduated with a degree in Systems Analysis and Development and am now seeking to learn more about various technologies, such as Python, Kotlin, Swift, React Native, and more.`,
    },
    header: {
      home: "홈",
      about: "소개",
      contact: "연락처",
      returnHome: "홈으로 돌아가기",
      changeLanguage: "언어 변경",
      changeTheme: "테마 변경",
    },
    hero: {
      greeting: "저는",
      badge: "풀스택 개발자",
      cvDownload: "이력서 다운로드",
    },
    projects: {
      title: "프로젝트",
      seeProject: "프로젝트 보기",
      viewCode: "코드 보기",
      items: {
        renext: { title: "Renext", description: "Renext - 현대적인 웹사이트, 매력적인 콘텐츠, 전환을 이끄는 전략을 만드는 디지털 에이전시입니다." },
        jvmPortfolio: { title: "JVM Portfolio", description: "React, 애니메이션, 다크 테마와 깔끔한 UI를 갖춘 현대적인 개발자 포트폴리오입니다." },
        qrGenerator: { title: "QR 코드 생성기", description: "색상, 모양, 크기를 설정하고 SVG 또는 canvas로 저장하는 QR 도구입니다." },
        gradientGenerator: { title: "그라디언트 생성기", description: "노이즈, 여러 색상 지점, 실시간 미리보기와 내보내기를 지원합니다." },
        fabioDev: { title: "Fabio Dev", description: "10개 언어 i18n, 다크 테마와 SSR을 지원하는 Astro 및 React 포트폴리오입니다." },
        restApi: { title: "REST API", description: "JWT, CRUD, PostgreSQL과 오류 처리를 갖춘 Node.js 및 Express API입니다." },
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
      title: "연락하기", subtitle: "새로운 기회와 협업을 항상 환영합니다. 아래 채널을 통해 편하게 연락해 주세요.",
      form: { name: "이름", namePlaceholder: "이름을 입력하세요", email: "이메일", emailPlaceholder: "your.email@example.com", message: "메시지", messagePlaceholder: "메시지를 입력하세요...", submit: "메시지 보내기" },
      social: { whatsapp: "Whatsapp", instagram: "Instagram", github: "Github", linkedin: "LinkedIn" },
      successTitle: "이메일이 전송되었습니다!", successMessage: "연락해 주셔서 감사합니다. 곧 답변드리겠습니다.", ok: "확인",
    },
    footer: {
      copyright: "© 2025 Fábio Ghizoni. All rights reserved.",
      rights: "모든 권리 보유. 제작:",
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
