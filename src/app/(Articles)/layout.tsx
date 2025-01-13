import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Artigos | Miguel Kapicius",
    description:
        "Explore artigos exclusivos sobre desenvolvimento web, tecnologia e design, escritos por Miguel. Aprenda dicas, descubra tendências e inspire-se para seus próximos projetos!",
};

export default function ArticlesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <main className="max-w-3xl px-6 mx-auto flex-1">{children}</main>;
}
