import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
  useTimeline,
} from "@/components/ui/timeline";
import { GithubIcon, Globe, Newspaper } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

interface Item {
  id: number;
  date: string;
  github?: string;
  website?: string;
  article?: string;
  title: string;
  description: string;
}

const items: Item[] = [
  {
    id: 1,
    date: "13 Mar, 2022",
    title: "Primeiro Contato com Programação",
    description:
      "Comecei a me interessar por programação estudando HTML, dando meus primeiros passos no desenvolvimento web.",
  },
  {
    id: 2,
    date: "31 Mar, 2023",
    github: "https://github.com/miguelkapicius/Curso-Python",
    title: "Primeiro Commit",
    description:
      "Concluí o curso de Python do Gustavo Guanabara e fiz meu primeiro commit no GitHub.",
  },
  {
    id: 3,
    date: "07 Fev, 2024",
    website: "https://nlw-silk.vercel.app",
    title: "Primeiro NLW da Rocketseat",
    description:
      "Concluí meu primeiro evento NLW da Rocketseat, desenvolvendo um projeto de notas com LocalStorage usando React.",
  },
  {
    id: 4,
    date: "27 Fev, 2024",
    article: "https://www.miguelk.com/articles/first-year-of-college",
    title: "Início da Faculdade",
    description:
      "Comecei minha graduação em Engenharia de Software na FIAP, dando um passo importante rumo à carreira de desenvolvedor.",
  },
  {
    id: 5,
    date: "2 Abr, 2024",
    github:
      "https://github.com/miguelkapicius/Java-Criando-sua-primeira-aplicacao",
    title: "Estudos em Java",
    description:
      "Iniciei meus estudos de Java pela Alura. Ainda estava explorando e procurando qual linguagem seguir como foco principal.",
  },
  {
    id: 6,
    date: "23 Abr, 2024",
    github: "https://github.com/miguelkapicius/Flask-Alura",
    title: "Primeiros Passos com Flask",
    description:
      "Comecei a estudar Python com Flask, explorando o desenvolvimento web e entendendo como construir aplicações mais completas.",
  },
  {
    id: 7,
    date: "23 Mar, 2024",
    github: "https://github.com/miguelkapicius/IgniteFeed-React",
    title: "Projeto Ignite Feed",
    description:
      "Desenvolvi o projeto Ignite Feed no programa Rocketseat Ignite, utilizando React. A aplicação permite comentar, excluir comentários e dar like. Foi nesse projeto que decidi focar em Typescript como minha principal linguagem.",
  },
  {
    id: 8,
    date: "7 Jun, 2024",
    github: "https://github.com/miguelkapicius/GS-BlueFuture",
    website: "https://miguelkapicius.github.io/GS-BlueFuture/",
    article: "https://www.miguelk.com/articles/first-year-of-college",
    title: "Primeira Global Solution",
    description:
      "Realizei minha primeira Global Solution da FIAP. Criamos uma plataforma integrada para monitorar a qualidade da água em mares e regiões costeiras, usando sensores em placas Arduino para medir temperatura, pH, salinidade e poluição. Os dados foram processados, armazenados e exibidos em uma interface web de fácil uso.",
  },
  {
    id: 9,
    date: "9 Jun, 2024",
    github: "https://github.com/miguelkapicius/NestJs-Course",
    title: "Estudos em NestJS",
    description:
      "Iniciei meus estudos em NestJS pela Alura, aprofundando meus conhecimentos em backend com TypeScript e criando APIs mais estruturadas e escaláveis.",
  },
  {
    id: 10,
    date: "9 Out, 2024",
    github: "https://github.com/miguelkapicius/Mahindra_Challenge_2024",
    title: "Primeiro Challenge da FIAP",
    description:
      "Finalizei meu primeiro challenge na FIAP, criando um site dedicado à Fórmula E. O projeto visa aumentar a visibilidade e interação com o público, oferecendo uma plataforma online informativa e envolvente para fãs da categoria.",
  },
  {
    id: 11,
    date: "9 Fev, 2025",
    github: "https://github.com/miguelkapicius/nlw-connect-fastify",
    title: "NLW Connect da Rocketseat",
    description:
      "Realizei o NLW Connect da Rocketseat, desenvolvendo uma aplicação que cria um ranking de usuários com mais cliques em links de afiliados, utilizando Fastify e Redis.",
  },
  {
    id: 12,
    date: "23 Abr, 2025",
    title: "Primeiro Emprego Front-end",
    description:
      "Consegui meu primeiro emprego como desenvolvedor front-end na RapidoPay (startup de pagamentos), colocando em prática meus conhecimentos em Next para desenvolver o portal dos clientes.",
  },
  {
    id: 13,
    date: "4 Jun, 2025",
    github: "https://github.com/miguelkapicius/microsservicos",
    title: "Curso de Microsserviços da Rocketseat",
    description:
      "Concluí o curso de Microsserviços da Rocketseat, explorando conceitos como message brokers, comunicação entre serviços e arquitetura escalável.",
  },
  {
    id: 14,
    date: "10 Jul, 2025",
    title: "Saída da RapidoPay",
    description:
      "Saí da RapidoPay após a empresa encerrar suas atividades, levando comigo a experiência adquirida no primeiro emprego como desenvolvedor front-end.",
  },
  {
    id: 15,
    date: "12 Ago, 2025",
    github: "https://github.com/miguelkapicius/nlw-agents-api",
    website: "https://github.com/miguelkapicius/nlw-agents-web",
    title: "NLW Agents da Rocketseat",
    description:
      "Participei do NLW Agents, desenvolvendo uma aplicação fullstack onde a IA responde a perguntas de uma aula se já foram respondidas anteriormente, usando gravação e transcrição de voz do palestrante.",
  },
  {
    id: 16,
    date: "Agora",
    title: "Projeto Editor de Documentos",
    description:
      "Atualmente estou desenvolvendo um editor de documentos baseado no Google Docs, planejando adicionar algumas funcionalidades extras e experimentar novas soluções de frontend e backend.",
  },
];

export function TimelineComponent() {
  return (
    <Timeline defaultValue={items.length}>
      {items.map((item) => (
        <TimelineItem
          key={item.id}
          step={item.id}
          className="group-data-[orientation=vertical]/timeline:sm:ms-32 pb-12"
        >
          <TimelineHeader>
            <TimelineSeparator className="h-full" />
            <TimelineDate className="group-data-[orientation=vertical]/timeline:sm:absolute group-data-[orientation=vertical]/timeline:sm:-left-32 group-data-[orientation=vertical]/timeline:sm:w-20 group-data-[orientation=vertical]/timeline:sm:text-right">
              {item.date}
            </TimelineDate>
            <TimelineTitle className="sm:-mt-0.5">{item.title}</TimelineTitle>

            <TimelineIndicator
              className={
                item.id === items.length
                  ? "bg-red-500/80 animate-pulse"
                  : "bg-primary"
              }
            />
          </TimelineHeader>
          <TimelineContent className="max-w-sm flex flex-col gap-2">
            {item.description}
            <div className="flex items-center gap-2">
              {item.github && (
                <Link
                  target="_blank"
                  href={item.github}
                  className="group max-w-max"
                >
                  <GithubIcon className="size-4 group-hover:text-primary duration-200" />
                </Link>
              )}
              {item.website && (
                <Link
                  target="_blank"
                  href={item.website}
                  className="group max-w-max"
                >
                  <Globe className="size-4 group-hover:text-primary duration-200" />
                </Link>
              )}
              {item.article && (
                <Link
                  target="_blank"
                  href={item.article}
                  className="group max-w-max"
                >
                  <Newspaper className="size-4 group-hover:text-primary duration-200" />
                </Link>
              )}
            </div>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
