import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, CreditCard, Calendar } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      icon: Calendar,
      title: "Monthly Subscription",
      description: "Flexible monthly billing",
      price: "₱50/month",
      features: [
        "Unlimited service calls",
        "Priority response times",
        "Premium customer support",
        "Mobile app access",
        "24/7 emergency support"
      ],
      cta: "Start Monthly",
      popular: false
    },
    {
      icon: CreditCard,
      title: "Yearly Subscription",
      description: "Best value - Save 39%",
      price: "₱365/year",
      features: [
        "All monthly features included",
        "Fastest priority response",
        "Premium customer support",
        "Advanced app features",
        "Family plan options available"
      ],
      cta: "Choose Yearly",
      popular: true
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
            Flexible Options
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you need occasional help or regular coverage, we have the right plan for every driver.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`shadow-card hover:shadow-brand transition-all duration-300 border-border/50 relative ${
                plan.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <plan.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-foreground">{plan.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
                <div className="text-3xl font-bold text-foreground mt-4">{plan.price}</div>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-muted-foreground">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-primary text-primary-foreground' : 'variant-outline'}`}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 text-muted-foreground">
          <p className="text-sm">
            All plans include verified responders, live tracking, and transparent pricing. 
            Cancel anytime with no hidden fees.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;