import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Store, Utensils } from "lucide-react";

const projects = [
  {
    icon: Building2,
    company: "TechStart Solutions",
    type: "Private Limited Company",
    description: "Successfully registered and launched technology startup with complete compliance setup including GST and legal documentation.",
    tags: ["Company Registration", "GST", "Legal Docs"],
    result: "Operational in 15 days"
  },
  {
    icon: Utensils,
    company: "FoodCraft Enterprises",
    type: "FSSAI Licensed Business",
    description: "Obtained FSSAI license and GST registration for food manufacturing unit with full regulatory compliance.",
    tags: ["FSSAI", "GST", "Food License"],
    result: "License in 10 days"
  },
  {
    icon: Store,
    company: "GreenLeaf Manufacturing",
    type: "Manufacturing Business",
    description: "Complete business setup including LLP registration, trademark filing, and growth strategy implementation.",
    tags: ["LLP", "Trademark", "Strategy"],
    result: "45% revenue growth"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium text-primary">Success Stories</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Recent <span className="text-primary">Projects</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See how we've helped businesses like yours achieve their goals with our comprehensive solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="animate-slide-up hover-lift group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <project.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {project.company}
                </h3>
                
                <p className="text-sm text-primary font-medium mb-4">
                  {project.type}
                </p>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-primary">
                    ✓ {project.result}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
