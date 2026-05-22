import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const champions_list = [
  {
    title: "Conheça o Haras",
    image: "/haras2.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "https://www.example.com/award1",
  },
  {
    title: "Conheça o Haras",
    image: "/haras2.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "https://www.example.com/award1",
  },
  {
    title: "Conheça o Haras",
    image: "/haras2.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "https://www.example.com/award1",
  },
];

export default function Champions() {
  return (
    <section id="champions" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Conheça nossos Campeões
        </h2>
        <p className="text-gray-600 leading-relaxed">
            O Haras Alcançu tem o orgulho de apresentar seus campeões, verdadeiras estrelas do mundo equestre. Cada um de nossos campeões é resultado de dedicação, treinamento e amor pelos cavalos, representando o melhor que nosso haras tem a oferecer. Com uma combinação de genética excepcional, cuidados especializados e um ambiente ideal para o desenvolvimento, nossos campeões se destacam em competições equestres, conquistando títulos e reconhecimento nacional e internacional. Conheça as histórias inspiradoras de nossos campeões, suas conquistas e o compromisso que temos em continuar cultivando a excelência no universo dos cavalos.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Cada campeão do Haras Alcançu é uma prova viva do nosso compromisso com a qualidade, o cuidado e a paixão pelos cavalos. Eles são o resultado de anos de trabalho árduo, treinamento dedicado e um ambiente que promove o bem-estar e o desenvolvimento dos nossos animais. Nossos campeões não apenas conquistam títulos e reconhecimento em competições, mas também representam a essência do que significa ser parte do Haras Alcançu: tradição, excelência e amor pelos cavalos. Conheça mais sobre nossos campeões e as histórias inspiradoras por trás de cada um deles.
        </p>
      </div>
      <div className="container mx-auto px-6 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {champions_list.map((champion) => (
          <div key={champion.href} className="relative">
            <div className="absolute inset-0 -translate-x-3 -translate-y-3 rounded-xl bg-yellow-500" />
            <Card className="relative w-full z-10 max-w-sm">
              <CardHeader>
                <CardTitle>{champion.title}</CardTitle>
                <CardDescription>{champion.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={champion.image}
                  alt={champion.title}
                  width={600}
                  height={320}
                  className="w-full h-48 object-cover rounded-md"
                />
              </CardContent>
              <CardFooter className="flex-col gap-2">
                <Button
                  asChild
                  className="w-full bg-blue-600 text-white hover:bg-blue-700"
                >
                  <a
                    href={champion.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mais informações
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
