import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye } from "lucide-react";

const Mission = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Purpose
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dedicated to keeping every driver safe and supported on the road.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Card className="shadow-card hover:shadow-brand transition-all duration-300 border-border/50">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To seamlessly provide fast, reliable, and affordable roadside assistance, 
                ensuring every driver feels safe and supported on the road.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card hover:shadow-brand transition-all duration-300 border-border/50">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To empower every driver with peace of mind by being their most trusted 
                roadside companion—delivering safety, care, and confidence whenever and wherever they need us.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Mission;