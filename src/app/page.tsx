import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Certifications from "@/components/Certifications";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WorkExperience />
      <Certifications />
      <Portfolio />
      <Skills />
      <Contact />
    </>
  );
}
