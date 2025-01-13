export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <main className="max-w-3xl mx-auto flex-1 px-6">{children}</main>;
}
