import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Zap, Wrench, Fuel, KeyRound, Settings, Clock, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Truck,
      title: "Towing Services",
      description: "Professional towing for vehicles that can't be repaired on-site. Safe transport to your preferred destination."
    },
    {
      icon: Zap,
      title: "Jump-Starts",
      description: "Dead battery? Get a quick jump-start to get your vehicle running again in minutes."
    },
    {
      icon: Wrench,
      title: "Tire Changes",
      description: "Flat tire replacement service with professional tools and expertise for your safety."
    },
    {
      icon: Fuel,
      title: "Fuel Delivery",
      description: "Ran out of gas? We'll deliver fuel directly to your location so you can continue your journey."
    },
    {
      icon: KeyRound,
      title: "Lockout Service",
      description: "Locked out of your vehicle? Our experts will safely unlock your car without damage."
    },
    {
      icon: Settings,
      title: "Minor Mechanical Repairs",
      description: "On-site repairs for common issues to get you back on the road quickly and safely."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock emergency support through our mobile app or hotline whenever you need help."
    },
    {
      icon: Shield,
      title: "Verified Responders",
      description: "All service providers are thoroughly trained, verified, and trackable for your peace of mind."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Road Rescue combines the power of location services, e-commerce, and trusted networks to get you back on the road quickly and safely.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-card hover:shadow-brand transition-all duration-300 border-border/50">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;