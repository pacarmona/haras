import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    href: "https://www.example.com/award2",
  },
  {
    title: "Conheça o Haras",
    image: "/haras2.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "https://www.example.com/award3",
  },
  {
    title: "Conheça o Haras",
    image: "/haras2.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "https://www.example.com/award4",
  },
  {
    title: "Conheça o Haras",
    image: "/haras2.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "https://www.example.com/award5",
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
          O Haras Alcançu tem o orgulho de apresentar seus campeões, verdadeiras
          estrelas do mundo equestre. Cada um de nossos campeões é resultado de
          dedicação, treinamento e amor pelos cavalos, representando o melhor
          que nosso haras tem a oferecer.
        </p>
      </div>

      <div className="container mx-auto px-10 mt-10">
        <Carousel
          opts={{ align: "start", slidesToScroll: 3 }}
          className="w-full"
        >
          <CarouselContent>
            {champions_list.map((champion, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="relative p-4">
                  <Card className="relative z-10">
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
                    <CardFooter>
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
