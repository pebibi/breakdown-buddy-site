import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, ShoppingCart, Clock, Shield, Users, Smartphone } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MapPin,
      title: "Find Nearby Shops",
      description: "Locate trusted repair shops within minutes based on your location and specific needs."
    },
    {
      icon: ShoppingCart,
      title: "Order Parts & Services",
      description: "Browse and purchase genuine parts and professional services directly through the app."
    },
    {
      icon: Clock,
      title: "24/7 Emergency Support",
      description: "Get help anytime, anywhere with our round-the-clock emergency roadside assistance."
    },
    {
      icon: Shield,
      title: "Verified Mechanics",
      description: "All repair shops are thoroughly vetted and certified to ensure quality service."
    },
    {
      icon: Users,
      title: "Real Reviews",
      description: "Read authentic reviews from fellow drivers to make informed decisions."
    },
    {
      icon: Smartphone,
      title: "Easy Booking",
      description: "Schedule appointments, track progress, and pay seamlessly through the app."
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