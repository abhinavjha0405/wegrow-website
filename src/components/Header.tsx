import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Building2 className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">WeGrow Consultancy</h1>
              <p className="text-xs text-muted-foreground">& Solution</p>
            </div>
          </div>
          
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <button 
                onClick={() => scrollToSection('home')} 
                className="relative text-foreground hover:text-primary transition-colors group py-1"
              >
                Home
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('services')} 
                className="relative text-foreground hover:text-primary transition-colors group py-1"
              >
                Services
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="relative text-foreground hover:text-primary transition-colors group py-1"
              >
                Projects
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('process')} 
                className="relative text-foreground hover:text-primary transition-colors group py-1"
              >
                Process
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="relative text-foreground hover:text-primary transition-colors group py-1"
              >
                Testimonials
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="relative text-foreground hover:text-primary transition-colors group py-1"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            </li>
          </ul>

          <Button onClick={() => scrollToSection('contact')}>
            Login
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
