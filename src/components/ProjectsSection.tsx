import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight } from "lucide-react";
import techStartImg from "@/assets/project-techstart.jpg";
import foodCraftImg from "@/assets/project-foodcraft.jpg";
import greenLeafImg from "@/assets/project-greenleaf.jpg";
import urbanRetailImg from "@/assets/project-urban.jpg";

const projects = [
  {
    image: techStartImg,
    badge: "Technology Startup",
    badgeColor: "bg-green-100 text-green-700",
    company: "TechStart Solutions",
    description: "Complete company registration, GST setup, and legal documentation for a SaaS startup.",
    results: [
      "Registered in 10 days",
      "Quick funding secured",
      "100% compliance achieved"
    ]
  },
  {
    image: foodCraftImg,
    badge: "Food & Beverage",
    badgeColor: "bg-blue-100 text-blue-700",
    company: "FoodCraft Enterprises",
    description: "FSSAI registration, GST compliance, and franchise expansion support.",
    results: [
      "FSSAI approved",
      "3 franchise locations",
      "Zero compliance issues"
    ]
  },
  {
    image: greenLeafImg,
    badge: "Manufacturing",
    badgeColor: "bg-green-100 text-green-700",
    company: "GreenLeaf Manufacturing",
    description: "Business restructuring, growth strategy, and operational optimization.",
    results: [
      "45% revenue growth",
      "Operational efficiency +40%",
      "Market expansion"
    ]
  },
  {
    image: urbanRetailImg,
    badge: "Retail",
    badgeColor: "bg-blue-100 text-blue-700",
    company: "Urban Retail Chain",
    description: "Multi-location setup, legal documentation, and franchise model creation.",
    results: [
      "15 stores launched",
      "Legal framework setup",
      "Franchise model created"
    ]
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium text-primary">Success Stories</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Businesses We've{" "}
            <span className="text-primary">Helped Succeed</span>
          </h2>
          
          <p className="text-base text-orange-600 max-w-3xl mx-auto">
            From startups to established enterprises, see how we've helped businesses achieve their goals and scale successfully.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="animate-slide-up hover-lift group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.company}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={`${project.badgeColor} border-0`}>
                    {project.badge}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="pt-6 pb-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {project.company}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {project.results.map((result, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{result}</span>
                    </div>
                  ))}
                </div>
                
                <button className="text-primary font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all group/link">
                  View Case Study
                  <ArrowRight className="w-4 h-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
