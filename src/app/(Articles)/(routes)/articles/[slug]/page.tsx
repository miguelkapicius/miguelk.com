import { Separator } from "@/components/ui/separator";
import { Article, getAllArticles, getArticleBySlug } from "@/lib/articles";
import Image from "next/image";
import { remark } from "remark";
import html from "remark-html";

export default async function ArticlePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const slug = (await params).slug;
    const article = getArticleBySlug(slug);
    const contentHtml = (
        await remark().use(html).process(article.content)
    ).toString();

    return (
        <div>
            <>
                <div
                    className={`-z-20 flex flex-col items-center justify-center gap-8 ${
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
                    <h2 className="text-5xl text-center font-bold">
                        {article.title}
                    </h2>
                    <p>{new Date(article.date).toLocaleDateString("pt-BR")}</p>
                    {article.tags?.map((tag) => (
                        <span
                            key={tag}
                            className="inline-block bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded mr-2"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                {!article.image && <Separator className="mb-24" />}
                <article
                    className={`space-y-8 markdown-content leading-8 ${
                        article.image && "mt-[80vh]"
                    }`}
                    dangerouslySetInnerHTML={{ __html: contentHtml }}
                />
            </>
        </div>
    );
}
