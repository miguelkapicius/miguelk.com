import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const poppins = Poppins({
    weight: ["300", "500", "700"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Miguel Kapicius",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br" suppressHydrationWarning className="dark">
            <body
                cz-shortcut-listen="true"
                className={`${poppins.className} font-light antialiased scroll-smooth flex flex-col min-h-screen`}
            >
                <Header />
                <main className="flex-1 flex pb-12 mt-8">{children}</main>
                <Footer />
            </body>
            <GoogleAnalytics gaId="G-T0VTW5S9DW" />
        </html>
    );
}
