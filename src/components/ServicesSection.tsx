import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, FileCheck, TrendingUp, Scale } from "lucide-react";

const services = [
  {
    icon: Building,
    title: "Company Registration",
    description: "Fast and hassle-free company registration services including Private Limited, LLP, and Sole Proprietorship."
  },
  {
    icon: FileCheck,
    title: "GST & FSSAI",
    description: "Complete assistance with GST registration, filing, and FSSAI licensing for food businesses."
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description: "Strategic consulting and growth planning to scale your business and maximize profitability."
  },
  {
    icon: Scale,
    title: "Legal Documentation",
    description: "Professional drafting and review of contracts, agreements, and other business documents."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive business solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="animate-fade-in hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
