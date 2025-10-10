interface Project {
  title: string;
  description: string;
  stack: string[];
  github?: string;
  preview?: string;
}

export const projects: Project[] = [
  {
    title: "FinTrack",
    description:
      "Um projeto fullstack desenvolvido com o objetivo de calcular investimentos baseados em juros compostos.",
    stack: [
      "C#",
      ".NET Core",
      "Entity Framework",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
    ],
    github: "https://github.com/miguelkapicius/fintrack-api",
    preview: "https://fintrack-web-bay.vercel.app/",
  },
  {
    title: "E-Pit",
    description:
      "Um projeto fullstack desenvolvido com o objetivo de atrair e manter o público na modalidade da Formula E, o E-Pit é um portal de estatísticas integrado a um jogo fantasy.",
    stack: [
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    github: "https://github.com/miguelkapicius/Mahindra_Challenge_2024",
    preview: "https://mahindra-challenge-2024.vercel.app/login",
  },
  {
    title: "Global Solution Blue Future | Landing Page",
    description:
      "O projeto visa criar uma plataforma integrada para monitoramento da qualidade da água, tanto no mar aberto quanto regiões costeiras de comunidades dependente da pesca. Utilizando sensores conectados a placas Arduino, o sistema mede parâmetros críticos como temperatura, PH, salinidade e níveis de poluição. Os dados são coletados, processados, armazenados e apresentados em uma interface web de fácil utilização..",
    stack: ["HTML", "CSS", "Bootstrap", "JavaScript", "Arduino"],
    github: "https://github.com/miguelkapicius/GS-BlueFuture",
    preview: "https://miguelkapicius.github.io/GS-BlueFuture/",
  },
  {
    title: "NLW Expert | Notes",
    description:
      "O projeto foi desenvolvido durante o evento NLW Expert promovido pela Rocketseat, consiste em uma aplicação que salva notas tanto por texto quanto por input de voz.",
    stack: ["TypeScript", "React", "Tailwind CSS", "Vite"],
    github: "https://github.com/miguelkapicius/nlw",
    preview: "https://nlw-miguelkapicius.vercel.app/",
  },
];
