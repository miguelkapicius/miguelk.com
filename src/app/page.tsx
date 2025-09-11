import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Github,
  Linkedin,
  LinkedinIcon,
  Terminal,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-[60vh]">
      <div className="space-y-4 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold">Miguel Kapicius</h1>
        <p className="font-light flex items-center gap-2">
          Engenheiro de Software <Terminal />
        </p>
        <div className="flex gap-2 items-center w-full">
          <Link className="flex-1" href={"/about"}>
            <Button className="w-full">
              Começar <ArrowRight />
            </Button>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/miguelkapicius/"}
            target="_blank"
            className="hover:bg-accent hover:text-accent-foreground p-2 rounded-md"
          >
            <LinkedinIcon size={24} />
          </Link>
          <Link
            href={"https://github.com/miguelkapicius"}
            target="_blank"
            className="hover:bg-accent hover:text-accent-foreground p-2 rounded-md"
          >
            <Github size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
}
