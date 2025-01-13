import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { projects } from "@/data/projects";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
    return (
        <>
            <div className="space-y-12">
                <h2 className="text-5xl font-normal">Projetos</h2>
                <section className="grid grid-cols-1 gap-8">
                    {projects.map((project) => (
                        <Card
                            className="hover:scale-105 duration-200"
                            key={project.title}
                        >
                            <CardHeader>
                                <CardTitle className="text-2xl">
                                    {project.title}
                                </CardTitle>
                                <CardDescription>
                                    {project.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center flex-wrap gap-2">
                                    {project.stack.map((item) => (
                                        <Badge
                                            key={item}
                                            className="p-2"
                                            variant={"secondary"}
                                        >
                                            {item}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter>
                                <div className="flex gap-4">
                                    {project.preview && (
                                        <Link
                                            target="_blank"
                                            href={project.preview}
                                        >
                                            <Button>
                                                Visitar
                                                <ArrowUpRight />
                                            </Button>
                                        </Link>
                                    )}
                                    {project.github && (
                                        <Link
                                            target="_blank"
                                            href={project.github}
                                        >
                                            <Button variant={"outline"}>
                                                Github
                                                <Github />
                                            </Button>
                                        </Link>
                                    )}
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </section>
            </div>
        </>
    );
}
