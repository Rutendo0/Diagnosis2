import { ChevronDown, Phone, MessageSquare, MapPin, Wrench, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
const bussinesvehicleImg = "/images/background.jpg";

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
        style={{ backgroundImage: `url(${bussinesvehicleImg})`, filter: 'brightness(0.4)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-blue)]/80 via-[var(--brand-orange)]/50 to-slate-900/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-[var(--brand-blue)]/40"></div>
      </div>

      {/* Enhanced Floating Particles with Better Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-${Math.floor(Math.random() * 3) + 1} h-${Math.floor(Math.random() * 3) + 1} bg-[var(--brand-${i % 2 === 0 ? 'orange' : 'blue'})] rounded-full animate-float opacity-${30 + Math.floor(Math.random() * 40)} blur-sm`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5 pattern-dots animate-pulse-slow"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center min-h-screen">
          {/* Enhanced Centered Content */}
          <div className="text-center space-y-10 max-w-5xl mx-auto">
            {/* Enhanced Main Headline with Better Typography */}
            <div className="space-y-10 animate-fade-in">
              <h1 className="font-orbitron font-black text-4xl md:text-6xl lg:text-5xl xl:text-5xl leading-none">
                <span className="block text-white ">Diagnosis</span>
                <span className="block ultra-premium-text shimmer drop-shadow-2xl">
                  & Solutions
                </span>
              </h1>

              {/* Enhanced Divider */}
              <div className="relative w-40 h-1 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-blue)] rounded-full"></div>
              </div>

              {/* Enhanced Description */}
              <div className="space-y-6">
                <p className="text-lg md:text-2xl lg:text-3xl text-white/95 font-light max-w-2xl mx-auto leading-relaxed animate-fade-in px-4">
                  Advanced automotive solutions where  
                </p>

                {/* Trust Indicators */}
                <div className="flex items-center justify-center space-x-8 text-white/80 animate-fade-in">
                  <div className="flex items-center space-x-2">
                    <Star className="text-[var(--brand-gold)]" size={20} />
                    <span className="font-semibold">Certified Experts</span>
                  </div>
                  <div className="w-px h-6 bg-white/30"></div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-semibold">Available 24/7</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-12 animate-fade-in">
              <Button 
                onClick={scrollToServices}
                size="lg"
                className="group relative bg-gradient-to-r from-[var(--brand-orange)] to-blue-600 hover:from-blue-600 hover:to-[var(--brand-blue)] text-black font-orbitron font-bold px-10 py-6 rounded-2xl border-0 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/40"
              >
                <span className="relative z-10 flex items-center text-lg">
                  EXPLORE SERVICES
                  <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={24} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-sm"></div>
              </Button>

              <Button 
                         onClick={() => window.open('tel:+263242770389', '_self')}
                              size="lg"
                     className="group relative bg-transparent text-white font-orbitron font-bold px-10 py-6 rounded-2xl border border-white hover:border-orange-500 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/40"
                       >
                 <Phone className="mr-3 group-hover:animate-pulse" size={24} />
                    <span className="text-lg">CONTACT US</span>
                   </Button>
            </div>


          </div>
        </div>
      </div>



      {/* Enhanced Floating WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          onClick={() => window.open('https://wa.me/+263719974846', '_blank')}
          className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-2xl hover:shadow-green-500/50 transition-all duration-500 transform hover:scale-125 animate-glow group"
        >
          <MessageSquare size={32} className="group-hover:animate-pulse" />
        </Button>
      </div>
    </section>
  );
}