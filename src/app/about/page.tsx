import { Circle, Mail, Minus } from "lucide-react";
import Image from "next/image";
import { format, intervalToDuration, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Separator } from "@/components/ui/separator";
import { academic, career } from "@/data/about";
import { FadeIn } from "@/components/fade-in";
import Link from "next/link";

export default function AboutPage() {
  const getDuration = (startDate: string, endDate: string) => {
    const durationObj = intervalToDuration({
      start: parseISO(startDate),
      end: endDate ? parseISO(endDate) : new Date(),
    });

    let durationStr = "";

    if (durationObj.years! > 1) {
      durationStr = `${durationObj.years} anos `;
    } else if (durationObj.years === 1) {
      durationStr = `${durationObj.years} ano `;
    }

    durationStr += `${durationObj.months} meses`;

    return durationStr;
  };

  return (
    <div className="space-y-24">
      <div className="space-y-12">
        <FadeIn>
          <h2 className="text-5xl font-normal">Sobre mim</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <section className="flex flex-col md:flex-row gap-12">
            <Image
              src={"https://avatars.githubusercontent.com/u/101507328?v=4"}
              alt="Miguel Kapicius"
              width={400}
              height={600}
              draggable={false}
              className="rounded-md object-cover"
            />
            <div className="space-y-4">
              <p>
                Sou Miguel, estudante de Engenharia de Software e apaixonado por
                tecnologia.
              </p>
              <p>
                Desde que comecei a criar meus primeiros sites, me encantei pela
                possibilidade de transformar ideias em algo real e funcional.
              </p>
              <p>
                Quando não estou codando, gosto de aprender coisas novas e
                explorar projetos que me desafiem a pensar fora da caixa.
              </p>
              <p>
                Para mim, a tecnologia é uma ferramenta poderosa para resolver
                problemas e conectar pessoas, e eu adoro fazer parte disso.
              </p>
              <Link
                href="mailto:miguelkapicius@gmail.com"
                className="inline-flex items-center gap-2 mt-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Mail className="size-4" />
                miguelkapicius@gmail.com
              </Link>
            </div>
          </section>
        </FadeIn>
      </div>


<FadeIn delay={0.2}>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <aside className="space-y-6">
            <h3 className="text-2xl font-normal">Carreira</h3>
            <ul className="space-y-8">
              {career.map((role) => (
                <div className="space-y-12" key={role.title + role.enterprise}>
                  <div className="space-y-2">
                    <h4 className="font-normal text-xl">{role.title}</h4>
                    <h5 className="flex items-center gap-2 text-base">
                      <strong>{role.enterprise}</strong>{" "}
                      <Circle className="size-2" />
                      {role.location}
                    </h5>
                    <div className="flex items-center gap-2">
                      <span>
                        {format(parseISO(role.start), "LLL yyyy", {
                          locale: ptBR,
                        })}
                      </span>
                      <span>
                        {" "}
                        <Minus />{" "}
                      </span>
                      <span>
                        {role.end
                          ? format(parseISO(role.end), "LLL yyyy", {
                              locale: ptBR,
                            })
                          : "até o momento"}
                      </span>
                      <span> • </span>
                      <span>{getDuration(role.start, role.end)}</span>
                    </div>
                  </div>
                  <Separator />
                </div>
              ))}
            </ul>
          </aside>
          <aside className="space-y-6">
            <h3 className="text-2xl font-normal">Formação</h3>
            <ul className="space-y-8">
              {academic.map((role) => (
                <div className="space-y-12" key={role.title}>
                  <div className="space-y-2">
                    <h4 className="font-normal text-xl">{role.title}</h4>
                    <h5 className="flex items-center gap-2 text-base">
                      <strong>{role.enterprise}</strong>{" "}
                      <Circle className="size-2" />
                      {role.location}
                    </h5>
                    <div className="flex items-center gap-2">
                      <span>
                        {format(parseISO(role.start), "LLL yyyy", {
                          locale: ptBR,
                        })}
                      </span>
                      <span>
                        {" "}
                        <Minus />{" "}
                      </span>
                      <span>
                        {role.end
                          ? format(parseISO(role.end), "LLL yyyy", {
                              locale: ptBR,
                            })
                          : "até o momento"}
                      </span>
                    </div>
                  </div>
                  <Separator />
                </div>
              ))}
            </ul>
          </aside>
        </section>
      </FadeIn>
    </div>
  );
}
