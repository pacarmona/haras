"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative h-[80vh]"
      style={{ clipPath: "inset(0)" }}
    >
      <div className="fixed inset-0 -z-10 bg-gray-900/80">
        <Image
          src="/hero.jpg"
          alt="Hero"
          fill
          className="object-cover object-[center_20%] opacity-50"
          priority
        />
      </div>

      <div className="flex h-full items-end">
        <div className="container mx-auto px-6 pb-20 text-white">
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-white/60 mb-4">
            Haras Alcançu
          </span>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-3xl">
            O verdadeiro espírito{" "}
            <span className="text-amber-400">equestre</span>
          </h1>

          <p className="text-base md:text-lg text-white/75 max-w-lg leading-relaxed mb-10">
            Um espaço criado para apaixonados pelo universo equestre, unindo
            estrutura de qualidade, cuidado especializado e a verdadeira
            essência da vida no campo.
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40">
        <span className="text-xs tracking-widest uppercase">scroll</span>
        <span className="animate-bounce text-lg">↓</span>
      </div>
    </section>
  );
}