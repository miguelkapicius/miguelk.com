import Image from "next/image";
import { Navigation } from "./navigation";
import Link from "next/link";

export function Header() {
    return (
        <header className="flex flex-col gap-2 md:flex-row md:justify-between py-2">
            <div className="absolute inset-0 backdrop-blur-sm drop-shadow -z-10 h-16" />
            <Link className="px-10 py-2" href={"/"}>
                <Image
                    src={"/logo.png"}
                    width={32}
                    height={32}
                    alt="logo"
                    className="size-6 md:size-8"
                />
            </Link>
            <Navigation />
            <div />
        </header>
    );
}
