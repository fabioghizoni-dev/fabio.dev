import { calculateAge } from "../scripts/about-me";

export const zh = {
  name: "中文",
  ascii: {
    sequences: [
      { keyword: "我们", word: "CHAT?" },
      { keyword: "来吧", word: "BUILD!" },
      { keyword: "请随意", word: "RELAX!" },
    ],
  },
  actions: {
    email: {
      max: "电子邮件过长",
      email: "电子邮件地址无效",
    },
    name: {
      max: "姓名过长",
      min: "姓名至少需要2个字符",
    },
    message: {
      max: "消息过长",
      min: "消息至少需要10个字符",
    },
  },
  components: {
    aboutMe: {
      me: "me",
      about: "About",
      text: `Hello!! My name is Fábio, I'm ${calculateAge("2005-05-30")} years old, and I live in Manoel Ribas, Paraná - Brazil. I'm a very curious guy who enjoys learning how everything works. That's why I'm passionate about technology, which is a very broad and interesting field. I'm a full-stack developer, creating intuitive and dynamic interfaces with interactivity and accessibility. My main experience is in the web, but I've also developed desktop and mobile applications. I graduated with a degree in Systems Analysis and Development and am now seeking to learn more about various technologies, such as Python, Kotlin, Swift, React Native, and more.`,
    },
    header: {
      home: "首页",
      about: "关于我",
      contact: "联系",
      returnHome: "返回首页",
      changeLanguage: "切换语言",
      changeTheme: "切换主题",
    },
    hero: {
      greeting: "我是",
      badge: "全栈开发者",
      cvDownload: "下载简历",
    },
    projects: {
      title: "项目",
      seeProject: "查看项目",
      viewCode: "查看代码",
      items: {
        renext: { title: "Renext", description: "Renext - 打造现代网站、吸引人的内容以及促进转化策略的数字代理机构。" },
        jvmPortfolio: { title: "JVM Portfolio", description: "使用 React 构建的现代响应式开发者作品集，包含动画和深色主题。" },
        qrGenerator: { title: "二维码生成器", description: "支持颜色、形状、尺寸以及 SVG 或 canvas 下载的可定制二维码工具。" },
        gradientGenerator: { title: "渐变生成器", description: "支持噪点、多色标、实时预览和导出的交互式工具。" },
        fabioDev: { title: "Fabio Dev", description: "使用 Astro 和 React 构建，支持十种语言、深色主题和 SSR 的个人作品集。" },
        restApi: { title: "REST API", description: "基于 Node.js 和 Express，支持 JWT、CRUD、PostgreSQL 和错误处理的 API。" },
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
      title: "联系我", subtitle: "我一直欢迎新的机会与合作。欢迎通过以下任一渠道联系我。",
      form: { name: "你的姓名", namePlaceholder: "请输入姓名", email: "你的邮箱", emailPlaceholder: "your.email@example.com", message: "你的消息", messagePlaceholder: "请在这里写下消息...", submit: "发送消息" },
      social: { whatsapp: "Whatsapp", instagram: "Instagram", github: "Github", linkedin: "LinkedIn" },
      successTitle: "邮件发送成功！", successMessage: "感谢你的联系，我会尽快回复。", ok: "好的",
    },
    footer: {
      copyright: "© 2025 Fábio Ghizoni. All rights reserved.",
      rights: "版权所有。使用以下技术制作：",
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
