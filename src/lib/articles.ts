import path from "path";
import matter from "gray-matter";
import fs from "fs";

export interface Article {
    slug: string;
    title: string;
    image?: string;
    date: string;
    tags?: string[];
    content?: any;
}

const articlesDirectory = path.join(process.cwd(), "src/articles");

export function getAllArticles() {
    const fileNames = fs.readdirSync(articlesDirectory);

    return fileNames.map((fileName) => {
        const filePath = path.join(articlesDirectory, fileName);
        const fileContents = fs.readFileSync(filePath, "utf8");
        const { data } = matter(fileContents);

        return {
            slug: fileName.replace(/\.md$/, ""),
            title: data.title,
            image: data.image,
            date: data.date,
            tags: data.tags || [],
        };
    });
}

export function getArticleBySlug(slug: string): Article | null {
    const filePath = path.join(articlesDirectory, `${slug}.md`);
    if (!fs.existsSync(filePath)) {
        return null;
    }
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        slug,
        title: data.title,
        image: data.image,
        date: data.date,
        tags: data.tags || [],
        content,
    };
}
