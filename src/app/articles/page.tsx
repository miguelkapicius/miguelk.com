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
import { Article, getAllArticles } from "@/lib/articles";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

export default async function ArticlesPage() {
    const articles = await getAllArticles();

    return (
        <>
            <div className="space-y-12">
                <h2 className="text-5xl font-normal">Artigos</h2>
                <section className="grid grid-cols-1 gap-8">
                    {articles.map((article: Article) => (
                        <Card
                            className="hover:scale-105 duration-200"
                            key={article.slug}
                        >
                            <CardHeader>
                                <CardTitle className="text-2xl">
                                    {article.title}
                                </CardTitle>
                                <CardDescription>
                                    {article.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center flex-wrap gap-2">
                                    {article.tags?.map((item) => (
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
                                    <Link href={`articles/${article.slug}`}>
                                        <Button>
                                            Ler Artigo
                                            <ArrowUpRight />
                                        </Button>
                                    </Link>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </section>
            </div>
        </>
    );
}
