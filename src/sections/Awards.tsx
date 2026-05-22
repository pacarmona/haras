"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Awards() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();

      const offset = -rect.top * 0.2;
      sectionRef.current.style.setProperty("--awards-offset", `${offset}px`);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="awards"
      className="relative overflow-hidden py-32"
    >
      <div
        className="absolute inset-0 -z-10 scale-110"
        style={{ transform: "translateY(var(--awards-offset, 0px))" }}
      >
        <Image
          src="/capa.jpg"
          alt="Capa"
          fill
          className="object-cover object-[center_20%] opacity-50"
          priority
        />
      </div>

      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-4">Nossos Prêmios</h2>
        <p className="text-gray-600 leading-relaxed">
          O Haras Alcançu tem o orgulho de ser reconhecido por sua excelência e
          dedicação ao mundo equestre. Ao longo dos anos, conquistamos diversos
          prêmios que refletem nosso compromisso com a qualidade, o cuidado e a
          paixão pelos cavalos. Cada prêmio é um testemunho do nosso esforço
          contínuo para oferecer o melhor ambiente para nossos animais e para
          nossos clientes. Estamos honrados em compartilhar essas conquistas,
          que são resultado do trabalho árduo de nossa equipe e do amor que
          temos por tudo o que fazemos no Haras Alcançu.
        </p>
      </div>
    </section>
  );
}
