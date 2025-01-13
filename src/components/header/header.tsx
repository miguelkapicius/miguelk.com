import Image from "next/image";
import { Navigation } from "./navigation";
import Link from "next/link";

export function Header() {
    return (
        <header className="flex justify-between items-center h-16 px-6 mb-16">
            <div className="absolute inset-0 backdrop-blur-sm drop-shadow -z-10 h-16" />
            <Link href={"/"}>
                <Image src={"/logo.png"} width={32} height={32} alt="logo" />
            </Link>
            <Navigation />
            <div />
        </header>
    );
}
