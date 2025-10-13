import Hero from "@/components/Hero";
// import Navbar from "@/components/Navbar"; // Remove Navbar import
import About from "@/components/About";
import Portfolio from "@/components/Portfolio"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact";
// import Footer from "@/components/Footer" // Remove Footer import

export default function Home() {
  return (
    <>
      {/* Navbar is now rendered in layout.tsx */}
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      {/* Footer is now rendered in layout.tsx */}
    </>
  );
}
