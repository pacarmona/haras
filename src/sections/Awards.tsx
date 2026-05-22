import Image from "next/image";

export default function Awards() {
  return (
    <section
      id="awards"
      className="relative py-32"
      style={{ clipPath: "inset(0)" }}
    >
      <div className="fixed inset-0 -z-10 bg-gray-900/80">
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
        <p className="text-white/75 leading-relaxed">
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