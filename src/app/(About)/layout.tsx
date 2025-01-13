import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sobre | Miguel Kapicius",
    description:
        "Conheça Miguel, um desenvolvedor apaixonado por desenvolvimento e tecnologia. Descubra minha trajetória, habilidades e projetos que transformam ideias em experiências digitais incríveis.",
};

export default function AboutLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <main className="max-w-3xl px-6 mx-auto flex-1">{children}</main>;
}
