import Link from "next/link";
import { Github, LinkedinIcon } from "lucide-react";

export function Footer() {
    return (
        <footer className="h-16 flex items-center justify-center gap-4 text-foreground/50 text-sm">
            <Link
                href={"https://www.linkedin.com/in/miguelkapicius/"}
                target="_blank"
                className="hover:text-accent-foreground p-2 rounded-md"
            >
                LinkedIn
            </Link>
            <Link
                href={"https://github.com/miguelkapicius"}
                target="_blank"
                className="hover:text-accent-foreground p-2 rounded-md"
            >
                Github
            </Link>
        </footer>
    );
}
