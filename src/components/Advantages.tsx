import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Clock, MapPin, Smartphone, DollarSign } from "lucide-react";

const Advantages = () => {
  const advantages = [
    {
      icon: Zap,
      title: "Lightning Fast Response",
      description: "Smart dispatch system matches you with the nearest verified responder for fastest arrival times."
    },
    {
      icon: Clock,
      title: "Always Available",
      description: "24/7 service availability, anytime, anywhere you need roadside assistance."
    },
    {
      icon: MapPin,
      title: "Safety First Priority",
      description: "All responders are trained, verified, and trackable through our app for your complete safety."
    },
    {
      icon: Smartphone,
      title: "Technology-Driven",
      description: "Mobile app booking, live tracking, and SOS alerts keep you informed and in control."
    },
    {
      icon: DollarSign,
      title: "Flexible & Transparent Pricing",
      description: "Choose from subscription plans or pay-per-use options with upfront, transparent pricing."
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
            Why Choose Road Rescue
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Competitive Edge
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What makes Road Rescue the most trusted choice for roadside assistance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <Card key={index} className="shadow-card hover:shadow-brand transition-all duration-300 border-border/50">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{advantage.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;