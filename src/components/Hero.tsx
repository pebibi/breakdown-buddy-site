import { Button } from "@/components/ui/button";
import { Download, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Never Get Stranded
            <span className="block text-white/90">Again</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Find trusted repair shops instantly, order parts on-demand, and get back on the road fast. 
            <strong className="text-white"> Fast. Safe. Reliable.</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-white text-destructive hover:bg-white/90 shadow-brand text-lg px-8 py-6">
              <Download className="mr-2 h-5 w-5" />
              Download for iOS
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-destructive text-lg px-8 py-6">
              <Play className="mr-2 h-5 w-5" />
              Download for Android
            </Button>
          </div>
          
          <div className="text-white/80 text-sm">
            ⭐ 4.8/5 stars • Over 500K downloads • Trusted by drivers nationwide
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;