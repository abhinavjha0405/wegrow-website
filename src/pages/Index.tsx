import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesIntro from "@/components/ServicesIntro";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <ServicesIntro />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <SocialSidebar />
    </div>
  );
};

export default Index;
