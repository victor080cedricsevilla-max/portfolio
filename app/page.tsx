import { SiteChrome } from "@/components/SiteChrome";
import { About } from "@/components/sections/About";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { Engineering } from "@/components/sections/Engineering";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { MoreProjects } from "@/components/sections/MoreProjects";
import { Skills } from "@/components/sections/Skills";
import { Stats } from "@/components/sections/Stats";

export default function Page() {
  return (
    <>
      <SiteChrome />
      <main id="main" className="flex-1">
        <Hero />
        <Stats />
        <About />
        <FeaturedProjects />
        <MoreProjects />
        <Skills />
        <Engineering />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
