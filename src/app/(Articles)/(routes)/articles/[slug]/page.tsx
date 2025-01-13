import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getArticleBySlug } from "@/lib/articles";
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
                    <div className="flex flex-col items-start gap-4">
                        <Badge className="text-xl">
                            {new Date(article.date).toLocaleDateString("pt-BR")}
                        </Badge>
                        <h2 className="text-5xl text-center font-bold">
                            {article.title}
                        </h2>
                    </div>
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
