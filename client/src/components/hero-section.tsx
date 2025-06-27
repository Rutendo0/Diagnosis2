import { Phone, MessageSquare, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
const hybridCarImg = "https://car-images.bauersecure.com/pagefiles/74108/1752x1168/toyota_hybrids_03.jpg?mode=max&quality=90&scale=down";

export default function HeroSection() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // Fallback scroll to next section
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image with Enhanced Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${hybridCarImg})`, filter: 'brightness(0.3)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-blue)]/80 via-[var(--brand-orange)]/50 to-slate-900/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-[var(--brand-blue)]/40"></div>
      </div>

      

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center min-h-screen">
          {/* Enhanced Centered Content */}
          <div className="text-center space-y-10 max-w-5xl mx-auto">
            {/* Professional Main Headline */}
            <div className="space-y-6 animate-fade-in">
              <h1 className="font-orbitron font-black text-4xl md:text-6xl lg:text-5xl xl:text-5xl leading-none">
                <span className="block text-white drop-shadow-lg">
                  Diagnosis & Sensors
                </span>
              </h1>

              {/* Professional Divider */}
              <div className="relative w-40 h-1 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full"></div>
              </div></div>

            {/* Professional Description */}
            <div className="space-y-6">
              <p className="text-lg md:text-xl lg:text-2xl text-white font-light max-w-4xl mx-auto leading-relaxed px-4">
                The best solution to your automative.
              </p>

              {/* Professional Trust Indicators */}
              <div className="flex items-center justify-center space-x-8 text-white/90">
                <div className="flex items-center space-x-2">
                  <Star className="text-blue-400" size={20} />
                  <span className="font-medium">Premium Quality</span>
                </div>
                <div className="w-px h-6 bg-white/30"></div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="font-medium">Available 24/7</span>
                </div>
              </div>
            </div>

            {/* Professional CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-12 animate-fade-in">
              <Button 
                onClick={scrollToServices}
                size="lg"
                className="group bg-orange-500 hover:bg-orange-600 text-white font-orbitron font-bold px-10 py-6 rounded-lg border-0 transition-all duration-300 hover:shadow-lg"
              >
                <span className="flex items-center text-lg">
                  EXPLORE SERVICES
                  <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" size={24} />
                </span>
              </Button>

              <Button 
                onClick={() => window.open('tel:+263242770389', '_self')}
                size="lg"
                className="group bg-blue-600 hover:bg-blue-700 text-white font-orbitron font-bold px-10 py-6 rounded-lg border-0 transition-all duration-300 hover:shadow-lg"
              >
                <Phone className="mr-3" size={24} />
                <span className="text-lg">CONTACT US</span>
              </Button>
            </div>


          </div>
        </div>
      </div>

      {/* Professional Floating WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          onClick={() => window.open('https://wa.me/+263719974846', '_blank')}
          className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <MessageSquare size={28} />
        </Button>
      </div>
    </section>
  );
}