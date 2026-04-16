import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { SkillCubes } from "@/components/skill-cubes";

export default function Home() {
  return (
    <div className="w-full flex flex-col" style={{ minHeight: "68vh" }}>
      <div className="flex-1 flex items-center justify-center">
        <FadeIn className="space-y-4 flex flex-col items-center text-center">
          <h1 className="text-4xl font-extrabold">Miguel Kapicius</h1>
          <p className="font-light flex items-center gap-2">
            Engenheiro de Software <Terminal />
          </p>
          <div className="flex gap-2 items-center">
            <Link href={"/about"}>
              <Button>
                Começar <ArrowRight />
              </Button>
            </Link>
            <Link
              href={"https://www.linkedin.com/in/miguelkapicius/"}
              target="_blank"
              className="hover:bg-accent hover:text-accent-foreground p-2 rounded-md"
            >
              <FaLinkedin size={24} />
            </Link>
            <Link
              href={"https://github.com/miguelkapicius"}
              target="_blank"
              className="hover:bg-accent hover:text-accent-foreground p-2 rounded-md"
            >
              <FaGithub size={24} />
            </Link>
          </div>
        </FadeIn>
      </div>

      <div className="flex items-end pb-4">
        <FadeIn delay={0.25} className="w-full">
          <SkillCubes />
        </FadeIn>
      </div>
    </div>
  );
}
