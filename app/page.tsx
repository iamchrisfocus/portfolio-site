import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import Recommendation from "@/components/sections/Recommendation";
import SkillsStrip from "@/components/sections/SkillsStrip";
import Tools from "@/components/sections/Tools";
import Work from "@/components/sections/Work";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <Hero />

      <SkillsStrip />

      <Work />

      <div data-motion-static>
        <Tools />
      </div>

      <About />

      <Recommendation />

      <Contact />

      <Footer />
    </main>
  );
}