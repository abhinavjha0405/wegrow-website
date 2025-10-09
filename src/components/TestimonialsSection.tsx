import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "WeGrow helped us register our company and get all necessary licenses within 2 weeks. Their expertise saved us months of paperwork and hassle.",
    name: "Durluv Bhandari",
    title: "Founder & CEO",
    company: "Sulav Mechatronics and Mechinery"
  },
  {
    quote: "The FSSAI registration process was seamless. The team guided us through every step and ensured complete compliance for our food business.",
    name: "Priya Sharma",
    title: "Co-founder",
    company: "FoodCraft Enterprises"
  },
  {
    quote: "Their business growth strategies helped us increase revenue by 45% in just 6 months. Highly recommend their consulting services.",
    name: "Amit Patel",
    title: "Managing Director",
    company: "GreenLeaf Manufacturing"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="animate-fade-in bg-white relative">
              <CardContent className="pt-8 pb-6">
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-muted-foreground italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
