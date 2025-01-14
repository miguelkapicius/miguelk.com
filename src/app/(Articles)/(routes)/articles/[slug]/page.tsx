import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getArticleBySlug } from "@/lib/articles";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { notFound, useRouter } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";

export default async function ArticlePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const slug = (await params).slug;
    const article = await getArticleBySlug(slug);
    if (!article) {
        notFound();
    }
    const contentHtml = (
        await remark().use(html).process(article.content)
    ).toString();

    return (
        <div>
            <>
                <div
                    className={`-z-20 flex flex-col items-center justify-center pt-24 gap-8 ${
                        article.image
                            ? "absolute h-[90vh] left-0 top-0 w-full"
                            : " mb-24"
                    } `}
                >
                    {article.image && (
                        <Image
                            className="opacity-30 bg-fixed object-cover"
                            fill
                            src={article.image}
                            alt={article.slug}
                        />
                    )}
                    <div className="flex flex-col items-center gap-4 z-30 px-6">
                        <div className="flex items-center justify-between w-full">
                            <Badge className="text-xl mr-4">
                                {new Date(article.date).toLocaleDateString(
                                    "pt-BR"
                                )}
                            </Badge>
                            <div className="flex">
                                {article.tags?.map((tag) => (
                                    <span
                                        key={tag}
                                        className="inline-block bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded mr-2"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold">
                            {article.title}
                        </h2>
                        <span className="flex flex-col gap-4 items-center mt-12 text-xl ">
                            Arraste para ver mais{" "}
                            <ArrowDown className="size-12 animate-bounce" />
                        </span>
                    </div>
                </div>
                {!article.image && <Separator className="mb-24" />}
                <article
                    className={`space-y-8 markdown-content leading-8 ${
                        article.image && "mt-[90vh]"
                    }`}
                    dangerouslySetInnerHTML={{ __html: contentHtml }}
                />
            </>
        </div>
    );
}
