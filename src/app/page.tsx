import Hero from "@/sections/Hero";
import HowItWorks from "@/sections/HowItWorks";
import About from "@/sections/About";
import Awards from "@/sections/Awards";
import Champions from "@/sections/Champions";
import Faq from "@/sections/Faq";
import Cta from "@/sections/Cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <About />
      <Awards />
      <Champions />
      <Cta />
      <Faq />
    </main>
  );
}
