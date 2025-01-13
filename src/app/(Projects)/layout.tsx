import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projetos | Miguel Kapicius",
    description:
        "Descubra os projetos desenvolvidos por Miguel, unindo criatividade e tecnologia. Veja soluções interativas e inovadoras que transformam ideias em realidade no mundo digital.",
};

export default function ProjectsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <main className="max-w-3xl px-6 mx-auto flex-1">{children}</main>;
}
