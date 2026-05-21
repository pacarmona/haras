import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Um espaço onde a paixão pelos cavalos encontra a excelência em cada
            detalhe.
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Em meio à tranquilidade da natureza e à força da tradição equestre,
            o Haras Alcançu nasce como um ambiente pensado para oferecer muito
            mais do que estrutura: uma verdadeira experiência para apaixonados
            pelo universo dos cavalos. Com espaços planejados, atendimento
            especializado e um ambiente acolhedor, proporcionamos conforto,
            segurança e qualidade tanto para os animais quanto para seus
            proprietários e visitantes. Cada detalhe foi cuidadosamente
            desenvolvido para unir funcionalidade, sofisticação e conexão com a
            essência da vida no campo. Aqui, tradição e modernidade caminham
            lado a lado. Do cuidado diário aos momentos de treinamento, lazer e
            convivência, buscamos criar um ambiente que represente confiança,
            bem-estar e excelência em tudo o que fazemos. O Haras Alcançu é mais
            do que um haras — é um lugar criado para viver o universo equestre
            de forma autêntica, elegante e inesquecível.
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-xl bg-blue-950" />

          <div className="relative h-100 w-full rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/haras2.jpg"
              alt="Haras Alcançu"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
