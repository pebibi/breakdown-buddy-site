import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
          Ready to Never Get Stranded Again?
        </h2>
        <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
          Join over 500,000 drivers who trust Road Rescue to keep them safe on the road. Download now and get your first service call free.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" variant="secondary" className="bg-white text-destructive hover:bg-white/90 shadow-lg text-lg px-8 py-6">
            <Download className="mr-2 h-5 w-5" />
            Download Free App
          </Button>
          <Button size="lg" variant="ghost" className="text-primary-foreground hover:bg-white/10 text-lg px-8 py-6">
            Learn More
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        <div className="mt-8 text-primary-foreground/80 text-sm">
          Available on iOS and Android • No hidden fees • Cancel anytime
        </div>
      </div>
    </section>
  );
};

export default CTA;