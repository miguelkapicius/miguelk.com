import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col gap-4 items-center justify-center w-full">
            <h2 className="text-6xl">404</h2>
            <p>A página não foi encontrada!</p>
            <Link href="/">
                <Button>
                    <ArrowLeft />
                    Voltar pra Home
                </Button>
            </Link>
        </div>
    );
}
