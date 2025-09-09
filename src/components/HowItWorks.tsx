import { Badge } from "@/components/ui/badge";

const HowItWorks = () => {
  const steps = [
    {
      step: "1",
      title: "Report Your Issue",
      description: "Quickly describe your vehicle problem using our smart diagnostic tool or take a photo."
    },
    {
      step: "2", 
      title: "Find Nearby Help",
      description: "Get matched with certified repair shops and mobile mechanics in your area instantly."
    },
    {
      step: "3",
      title: "Book & Pay Securely", 
      description: "Choose your service, schedule an appointment, and pay safely through the app."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-primary">
            Simple Process
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How Road Rescue Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get help in three simple steps. No more waiting hours for assistance or wondering if help is coming.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Step Number */}
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto shadow-brand">
                {step.step}
              </div>
              
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-border ml-8 -z-10" />
              )}
              
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;