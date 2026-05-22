import Hero from "@/sections/Hero";
import HowItWorks from "@/sections/HowItWorks";
import About from "@/sections/About";
import Awards from "@/sections/Awards";
import Champions from "@/sections/Champions";
import Faq from "@/sections/Faq";
import Cta from "@/sections/Cta";
import { Carousell } from "@/sections/Carousell";

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <About />
      <Awards />
      <Champions />
      <Carousell />
      <Cta />
      <Faq />
    </main>
  );
}
