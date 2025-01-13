import Image from "next/image";
import { Navigation } from "./navigation";
import Link from "next/link";

export function Header() {
    return (
        <header className="flex flex-col sm:flex-row justify-between sm:items-center gap-6 h-16 px-6 py-6 sm:py-0 mb-16">
            <div className="absolute inset-0 backdrop-blur-sm drop-shadow -z-10 h-16" />
            <Link href={"/"}>
                <Image src={"/logo.png"} width={32} height={32} alt="logo" />
            </Link>
            <Navigation />
            <div />
        </header>
    );
}
