import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Certifications from "@/components/Certifications";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Certifications />
      <Portfolio />
      <Skills />
      <Contact />
    </>
  );
}
