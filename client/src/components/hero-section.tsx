import { ChevronDown, Phone, MessageSquare, MapPin, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
const businessVehicleImg = "/images/aqua.jpg";

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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Enhanced Background with Real Business Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url(${businessVehicleImg})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--dark-bg)]/85 via-[var(--dark-bg)]/70 to-[var(--dark-bg)]/95"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--brand-orange)]/10 to-transparent"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[var(--brand-orange)] rounded-full animate-float opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[var(--brand-blue)] rounded-full animate-float opacity-40" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-[var(--brand-orange)] rounded-full animate-float opacity-30" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="relative z-10 text-center max-w-7xl mx-auto px-6">
        {/* Enhanced Brand Section */}
        <div className="animate-fade-in mb-8">
          <p className="text-[var(--brand-orange)] font-orbitron font-semibold text-lg md:text-xl mb-4 tracking-wide">
            Is Your Check Engine Light On?
          </p>
          <h1 className="font-orbitron font-black text-6xl md:text-8xl lg:text-9xl mb-6 leading-tight ultra-premium-text text-glow">
            Diagnosis & Sensors
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-blue)] mx-auto mb-6 animate-slide-up"></div>
          <p className="text-2xl md:text-3xl font-orbitron text-[var(--brand-orange)] font-bold tracking-wide">
            The best solution to your automotive.
          </p>
        </div>

        {/* Enhanced Description */}
        <p className="text-lg md:text-xl text-gray-300 max-w-5xl mx-auto mb-12 leading-relaxed animate-slide-up opacity-90">
          Professional automotive diagnostics, repairs, and specialized hybrid vehicle services in Harare and Bulawayo. 
          Expert technicians with cutting-edge equipment for all your automotive needs.
        </p>
        
        {/* Action Buttons with Enhanced Styling */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up mb-16">
          <Button 
            onClick={scrollToServices}
            size="lg"
            className="luxury-button px-12 py-6 text-lg font-orbitron font-bold text-white rounded-full shadow-2xl neon-glow"
          >
            <Wrench className="mr-3" size={20} />
            Our Services
          </Button>
          <Button 
            onClick={() => window.open('tel:+263242770389', '_self')}
            variant="outline"
            size="lg"
            className="luxury-button px-12 py-6 text-lg font-orbitron font-bold text-white rounded-full glassmorphism-card"
          >
            <Phone className="mr-3" size={20} />
            Call Now
          </Button>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16 animate-fade-in">
          <div className="premium-card rounded-2xl p-8 hover-lift">
            <div className="flex items-center mb-4">
              <MapPin className="text-[var(--brand-orange)] mr-3" size={24} />
              <h3 className="font-orbitron text-[var(--brand-orange)] font-bold text-xl">Harare Office</h3>
            </div>
            <p className="text-gray-300 mb-3 text-lg">03 Robert Mugabe Rd, Harare</p>
            <div className="space-y-1">
              <p className="text-[var(--brand-blue)] font-bold text-lg">+263 242 770 389</p>
              <p className="text-[var(--brand-blue)] font-bold text-lg">+263 772 974 846</p>
            </div>
          </div>
          <div className="premium-card rounded-2xl p-8 hover-lift">
            <div className="flex items-center mb-4">
              <MapPin className="text-[var(--brand-orange)] mr-3" size={24} />
              <h3 className="font-orbitron text-[var(--brand-orange)] font-bold text-xl">Bulawayo Office</h3>
            </div>
            <p className="text-gray-300 mb-3 text-lg">114 George Silundika St, Bulawayo</p>
            <div className="space-y-1">
              <p className="text-[var(--brand-blue)] font-bold text-lg">+263 292 883 884</p>
              <p className="text-[var(--brand-blue)] font-bold text-lg">+263 779 298 117</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToServices}>
        <div className="glassmorphism rounded-full p-4 hover:bg-[var(--brand-orange)]/20 transition-all duration-300 neon-glow">
          <ChevronDown 
            size={28} 
            className="text-[var(--brand-orange)] hover:text-white transition-colors duration-300"
          />
        </div>
      </div>
      
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          onClick={() => window.open('https://wa.me/263242770389', '_blank')}
          className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl hover:shadow-green-500/40 transition-all duration-300 transform hover:scale-110 animate-glow"
        >
          <MessageSquare size={28} />
        </Button>
      </div>
    </section>
  );
}
