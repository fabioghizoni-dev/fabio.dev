import { removeSpaces } from "../utils";

const name = "Fábio Henrique";

export default {
  country: "Brasil",
  location: "Paraná",
  name,
  position: "Full-Stack Developer",
  completeName: `${name} Oderdenge Ghizoni`,
  socials: {
    x: "@FGhizoni28539",
    number: "+55 (43) 999828-0078",
    whatsapp: "https://wa.me/5543998280078",
    github: "https://github.com/fabioghizoni-dev",
    insta: "https://www.instagram.com/fabio.ghizoni_",
    linkedin: "https://br.linkedin.com/in/fábioghizoni",
  },
  email: {
    main: "dev6solucoes@gmail.com",
    alternative: "fabiohenriqueghizoni10@gmail.com",
  },
  siteUrl: "https://portfolio-fabio-main.vercel.app",
  skills: {
    soft: [
      "Comunicação",
      "Gestão de tempo",
      "Raciocínio lógico",
      "Trabalho em equipe",
      "Apreendizado rápido",
      "Resolução de problemas",
      "Paciência e persistência",
    ],
    hard: [
      "Debugging",
      "Algoritimos",
      "Git e GitHub",
      "Testes automatizados",
      "Lógica de programação",
      "Programação orientada a objetos (POO)",
      "Estruturas de dados (listas, pilhas, filas, árvores)",
      "Banco de dados(PostgreSQL, MySQL, MongoDB, SQLite)",
      "Frameworks(NextJS, Astro, Laravel, ExpressJS, Spring Boot)",
    ],
  },
  professionalSummary: removeSpaces(
    `Sou um Desenvolvedor Full Stack proativo e comunicativo. Concluí a faculdade de Análise e Desenvolvimento de Sistemas 
    em julho de 2025, mas desde sempre venho adquirindo mais conhecimento e aprimorando ainda mais minhas habilidades. Sempre 
    que possível, desenvolvo projetos pessoais e pequenas soluções que crio para melhorar meu dia a dia.`,
  ),
  professionalHistory: [
    {
      date: "Março de 2020 - Setembro de 2022",
      name: "MECÂNICA AUTOMOTIVA – OFICINA DO RUD.",
      summary:
        "CONSERTOS ELÉTRICOS EM GERAL, FECHADURAS, MOTORES ELÉTRICOS, TROCA DE VIDROS E ACABAMENTOS.",
    },
    {
      date: "Outubro de 2022 - Novembro de 2022",
      name: "PREFEITURA MUNICIPAL DE MANOEL RIBAS – ARRASTÃO DA DENGUE.",
      summary:
        removeSpaces(`VISITAS NAS CASAS DOS MORADORES DOS BAIRROS DA CIDADE, COM O OBJETIVO DE ORIENTAR E FAZER A LIMPEZA 
                DOS TERRENOS E CASAS A RESPEITO DE POSSÍVEIS FOCOS DA DENGUE.`),
    },
    {
      date: "Abril de 2023 - Setembro de 2024",
      name: "OLIVEIRA & OLIVEIRA LTDA. MECÂNICA REIS.",
      summary:
        "AUXILIAR DE MECÂNICO, TROCA DE ÓLEO, CÂMBIO, MOTORES DIESEL EM GERAL.",
    },
    {
      date: "Outubro de 2024 - Fevereiro de 2025",
      name: "ANDERSON DA SILVA - SOFTWARE E CONSULTORIA.",
      summary:
        "DESENVOLVEDOR TRAINEE, DESAFIOS TÉCNICOS, CURSOS SOBRE DELPHI E RAD STUDIO, CONHECIMENTO SOBRE REGRAS DE NEGÓCIO.",
    },
    {
      date: "Maio de 2025 - Dezembro de 2025",
      name: "CONSÓRCIO INTERMUNICIPAL DE SAÚDE DE IVAIPORÃ.",
      summary:
        "CHEFE DO SETOR DE RECURSOS HUMANOS, GERENCIEI A FOLHA DE 25 FUNCIONÁRIOS E ESTAGIÁRIOS.",
    },
  ],
  education: [
    {
      date: "Julho de 2022 - Agosto de 2022",
      name: "Curso Técnico de Elétrica Automotiva",
      institution: "Senac/PR",
      status: "Concluído"
    },
    {
      date: "Fevereiro de 2023 - Julho de 2025",
      name: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      institution: "Univale (Faculdades Integradas do Vale do Ivaí)",
      status: "Concluído"
    }
  ]
};
