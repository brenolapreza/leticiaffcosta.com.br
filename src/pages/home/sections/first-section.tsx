import { Button } from "@/components/button";
import { Tag } from "@/components/tag";
import Leticia from "@/public/lttc.svg";
import Image from "next/image";

export const FirstSection = () => {
  return (
    <section className="container">
      <div className="flex flex-col md:flex-row gap-5 items-center md:items-center w-full">
        <div className="flex flex-col gap-5 items-center md:items-start w-full">
          <h1 className="flex flex-col items-center md:items-start gap-2 text-center md:text-start">
            <span className="font-[pacifico] text-5xl">Olá!</span>
            <span className="text-[40px] tracking-wide">
              Eu sou a <strong className="font-extrabold">Letícia</strong>
            </span>
          </h1>
          <p className="text-center md:text-start">
            Profissional de <strong>Customer Success Manager</strong> e{" "}
            <strong>Marketing</strong>, especialista em CRM e engajamento de
            clientes, apaixonada por criar conexões, resolver problemas.
            <br />
            <span className="bg-primary">
              Sou formada em Marketing e Design Gráfico.
            </span>{" "}
            Tenho experiência prática na gestão de clientes, otimização de
            processos e implementação de estratégias que aumentam retenção e
            engajamento.
          </p>
          <Tag />
          <Button
            onClick={() => console.log("click")}
            buttonType="SECONDARY"
            className="w-[200px]"
          >
            CONHECER
          </Button>
        </div>
        <Image
          src={Leticia}
          alt="Foto de perfil da Letícia Costa. Uma mulher com cabelos grande, com os braços cruzados e uma camisa listrada preto e branco"
        />
      </div>
    </section>
  );
};
