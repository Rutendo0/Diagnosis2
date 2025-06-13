import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--dark-bg)]/70 via-[var(--dark-bg)]/50 to-[var(--dark-bg)]/90"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="animate-fade-in-up">
          <h1 className="font-orbitron font-black text-6xl md:text-8xl lg:text-9xl mb-6 leading-tight">
            <span className="gradient-text">DIAGNOSIS</span><br />
            <span className="text-white">&</span><br />
            <span className="text-[var(--brand-blue)]">SENSORS</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            The best solution to your automotive. Leading service provider in vehicle diagnosis and supply of automotive sensors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToServices}
              className="bg-gradient-to-r from-[var(--brand-orange)] to-red-500 hover:from-red-500 hover:to-[var(--brand-orange)] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              size="lg"
            >
              Explore Solutions
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline"
              className="border-2 border-[var(--brand-blue)] text-[var(--brand-blue)] hover:bg-[var(--brand-blue)] hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              size="lg"
            >
              Get Consultation
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-2xl text-[var(--brand-orange)]" size={32} />
      </div>
    </section>
  );
}
