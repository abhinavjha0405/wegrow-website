import { Button } from "@/components/ui/button";
import { TrendingUp, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-business.jpg";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const words = ["Transform", "Create", "Achieve", "Build", "Launch"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 50 : 150;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          // Wait before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentWord.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-secondary-foreground">Your Business Growth Partner</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="inline-block min-w-[200px]">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>{" "}
              Your{" "}
              <span className="text-primary">Business Ideas</span>{" "}
              Into Reality
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              From company registration to scaling strategies, we provide end-to-end business solutions that help startups and enterprises achieve sustainable growth.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => scrollToSection('contact')} className="gap-2">
                Get Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('services')}>
                View Our Work
              </Button>
            </div>
          </div>

          <div className="animate-fade-in hidden md:block">
            <img 
              src={heroImage} 
              alt="Professional business consultation" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
