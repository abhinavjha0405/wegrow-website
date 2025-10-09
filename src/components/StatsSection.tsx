import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, TrendingUp, Shield } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Happy Clients"
  },
  {
    icon: Award,
    value: "98%",
    label: "Success Rate"
  },
  {
    icon: TrendingUp,
    value: "₹100Cr+",
    label: "Business Value Created"
  },
  {
    icon: Shield,
    value: "100%",
    label: "Compliance Rate"
  }
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center animate-fade-in border-border/50 hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {stat.value}
                </h3>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
