import { Header } from "@/components/header";
import { Tag } from "@/components/tag";
import Leticia from "@/public/lttc.svg";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="max-w-containerMain w-containerMain mx-auto py-16 ">
        <div className="flex flex-col md:flex-row gap-4 items-center md:items-start w-full">
          <div className="flex flex-col gap-4 items-center md:items-start w-full">
            <h1 className="flex flex-col items-center md:items-start gap-4 text-center md:text-start">
              <span className="font-[pacifico] text-5xl">Olá!</span>
              <span className="text-[40px] tracking-wide">
                Eu sou a <strong className="font-extrabold">Letícia</strong>
              </span>
            </h1>
            <p className="text-center md:text-start">
              Sou formada em Marketing e atuo com Customer Success, Design e
              Marketing. Acredito no poder da comunicação visual e estratégica
              para transformar negócios.
            </p>
            <Tag />
          </div>
          <Image
            src={Leticia}
            alt="Foto de perfil da Letícia Costa. Uma mulher com cabelos grande, com os braços cruzados e uma camisa listrada preto e branco"
          />
        </div>
      </div>
    </div>
  );
}
