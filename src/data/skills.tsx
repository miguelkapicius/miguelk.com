import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiNestjs,
  SiDocker,
  SiPostgresql,
  SiSpring,
} from "react-icons/si"
import { FaJava } from "react-icons/fa"
import { IconType } from "react-icons"

interface Skill {
  name: string
  icon: IconType
  color: string
}

export const skills: Skill[] = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
  { name: "Java", icon: FaJava, color: "#ED8B00" },
  { name: "Spring", icon: SiSpring, color: "#6DB33F" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
]
