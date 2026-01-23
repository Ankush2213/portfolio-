import { Navbar } from "../components/Navbar";





import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { HobbiesSection } from "../components/HobbiesSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { SignatureSection } from "../components/SignatureSection";
import { Footer } from "../components/Footer";


export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeToggle />
      <StarBackground />
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />

      
      

        <HobbiesSection />
        <ProjectsSection />
        <ContactSection />
        <SignatureSection />
      </main>

      <Footer />

    </div>
  );
};
