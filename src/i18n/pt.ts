export const pt = {
  name: "Português",
  actions: {
    email: {
      max: "E-mail muito longo",
      email: "Endereço de e-mail inválido",
    },
    name: {
      max: "Nome muito longo",
      min: "O nome deve ter pelo menos 2 caracteres",
    },
    message: {
      max: "Mensagem muito longa",
      min: "A mensagem deve ter pelo menos 10 caracteres",
    },
  },
  components: {
    aboutMe: {
      me: "mim",
      about: "Sobre",
      text: "Olá!! Meu nome é Fábio, tenho {AGE} anos e moro em Manoel Ribas, Paraná – Brasil. Sou uma pessoa muito curiosa e adoro aprender como as coisas funcionam. Por isso sou apaixonado por tecnologia, uma área muito ampla e fascinante. Sou um desenvolvedor full-stack, criando interfaces intuitivas e dinâmicas com interatividade e acessibilidade. Minha principal experiência é no desenvolvimento web, mas também já construí aplicações desktop e mobile. Sou graduado em Análise e Desenvolvimento de Sistemas e agora estou buscando aprender mais sobre diversas tecnologias como Python, Kotlin, Swift, React Native e outras.",
    },
    header: {
      home: "Início",
      about: "Sobre",
      contact: "Contato",
      returnHome: "Voltar para página inicial",
      changeLanguage: "Mudar idioma",
      changeTheme: "Mudar tema",
    },
    hero: {
      badge: "Desenvolvedor Full-Stack",
      cvDownload: "Baixar CV",
    },
    projects: {
      title: "Projetos",
      seeProject: "Ver projeto",
    },
    contactMe: {
      title: "Entre em contato",
      subtitle:
        "Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato comigo através de qualquer um dos canais abaixo.",
      form: {
        name: "Seu nome",
        namePlaceholder: "Seu nome aqui",
        email: "Seu e-mail",
        emailPlaceholder: "seu.email@exemplo.com",
        message: "Sua mensagem",
        messagePlaceholder: "Escreva sua mensagem aqui...",
        submit: "Enviar mensagem",
      },
      social: {
        whatsapp: "Whatsapp",
        instagram: "Instagram",
        github: "Github",
        linkedin: "LinkedIn",
      },
    },
    footer: {
      copyright: "© 2025 Fábio Ghizoni. Todos os direitos reservados.",
    },
  },
  pages: {
    components: {
      title: "Componentes do Site",
      subtitle: "Página ainda em desenvolvimento",
      description:
        "Página listando os componentes que foram usados neste site e em alguns outros projetos.",
    },
    curriculum: {
      title: "Currículo",
      description:
        "Página de currículo contendo todas as informações profissionais e acadêmicas de Fábio Ghizoni",
    },
    gradients: {
      title: "Gradientes",
      description:
        "Página para gerar gradientes personalizados com várias cores e até efeito de ruído.",
    },
    qr: {
      title: "Gerador de QR Code",
      description: "Descrição / Valores",
      question: "Está em dúvida de como funciona?",
      clickHere: "Clique aqui",
      howWorksTitle: "Como funciona",
      howWorksDescription:
        "Gere QR Codes personalizados com base nos parâmetros fornecidos via URL. Você pode definir dados, cores, formas e até baixar o resultado automaticamente.",
      exampleTitle: "Exemplo de uso",
      resultTitle: "Resultado",
      resultDescription:
        "O QR Code será gerado com os parâmetros definidos e o arquivo meu-qr.png será baixado automaticamente.",
      aboutTitle: "Sobre",
      aboutDescription:
        "Esta aplicação usa a biblioteca qr-code-styling para gerar QR Codes com alta personalização.",
      parametersTitle: "Parâmetros disponíveis",
      parameter: "Parâmetro",
      type: "Tipo",
      data: "Texto ou URL codificada",
      size: "Largura e altura iguais",
      width: "Largura personalizada",
      height: "Altura personalizada",
      margin: "Margem externa (padrão: 10)",
      shape: "quadrado (square), arredondado (rounded)",
      typeFormat: "svg ou canvas",
    },
    routes: {
      title: "Rotas",
      description:
        "Página listando todas as rotas disponíveis no site para fácil navegação.",
    },
    home: {},
  },
  ui: {
    modal: {
      title: "Bem-vindo ao meu site",
      description:
        "Este site ainda está em desenvolvimento, então pode haver informações incompletas. Agradeço sua compreensão!",
      animations: "Você quer animações no site?",
      yes: "Sim",
      no: "Não",
      continue: "Continuar",
    },
    scrollTop: {
      title: "Rolar para o topo da página",
    },
    switchLang: {},
    switchTheme: {},
  },
};
