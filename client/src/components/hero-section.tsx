import { ChevronDown, Phone, MessageSquare, MapPin, Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const bussinesvehicleImg = "/images/bussinesvehicle.jpg";

export default function HeroSection() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bussinesvehicleImg})`, filter: 'brightness(0.5)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-blue)]/70 via-[var(--brand-orange)]/40 to-slate-200/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-200/50 via-transparent to-[var(--brand-blue)]/30"></div>
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[var(--brand-orange)] rounded-full animate-float opacity-60 blur-sm"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-[var(--brand-blue)] rounded-full animate-float opacity-40" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-4 h-4 bg-[var(--brand-orange)] rounded-full animate-float opacity-30" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[var(--brand-gold)] rounded-full animate-float opacity-50" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-[var(--brand-blue)] rounded-full animate-float opacity-30" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-2/3 left-1/6 w-3 h-3 bg-[var(--brand-orange)] rounded-full animate-float opacity-40" style={{animationDelay: '5s'}}></div>
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10 pattern-dots animate-pulse-slow"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center min-h-screen">

          {/* Centered Content */}
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            {/* Enhanced Premium Badge */}
            <div className="inline-flex items-center space-x-3 glassmorphism rounded-full px-8 py-4 neon-glow animate-fade-in">
              <div className="w-3 h-3 bg-[var(--brand-orange)] rounded-full animate-pulse-slow shadow-lg shadow-orange-500/50"></div>
              <span className="text-[var(--brand-orange)] font-orbitron font-bold text-sm tracking-widest uppercase text-glow">
                Professional Diagnostics
              </span>
              <div className="w-1 h-1 bg-[var(--brand-blue)] rounded-full animate-pulse"></div>
            </div>

            {/* Enhanced Main Headline */}
            <div className="space-y-8 animate-fade-in-up">
              <h1 className="font-orbitron font-black text-5xl md:text-7xl lg:text-8xl leading-none">
                <span className="block text-white text-shadow animate-slide-in-left">Diagnosis</span>
                <span className="block ultra-premium-text animate-slide-in-right shimmer" style={{animationDelay: '0.3s'}}>
                  & Sensors
                </span>
              </h1>

              <div className="relative w-32 h-2 mx-0">
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-orange)] via-[var(--brand-gold)] to-[var(--brand-blue)] rounded-full animate-glow"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-blue)] rounded-full blur-sm opacity-50"></div>
              </div>

              <p className="text-xl md:text-2xl text-white/90 font-light max-w-lg leading-relaxed animate-fade-in" style={{animationDelay: '0.6s'}}>
                Precision diagnostics and premium automotive solutions. 
                <span className="text-gradient font-semibold text-glow"> Where performance meets perfection.</span>
              </p>
            </div>

            {/* CTA Buttons - Lamborghini Inspired */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button 
                onClick={scrollToServices}
                size="lg"
                className="group relative bg-[var(--brand-orange)] hover:bg-[var(--brand-orange)]/90 text-black font-orbitron font-bold px-8 py-4 rounded-none border-0 transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center">
                  EXPLORE SERVICES
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-orange)] to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Button>

              <Button 
                onClick={() => window.open('tel:+263242770389', '_self')}
                size="lg"
                className="group bg-[var(--brand-blue)] hover:bg-[var(--brand-blue)]/90 text-white font-orbitron font-bold px-8 py-4 rounded-none border-0 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="mr-2" size={20} />
                CONTACT US
              </Button>
            </div>

            {/* Stats - Lamborghini Style */}
            <div className="grid grid-cols-3 gap-8 pt-12">
              <div className="text-center">
                <div className="text-3xl font-orbitron font-black text-[var(--brand-orange)]">7+</div>
                <div className="text-sm text-white/70 uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-orbitron font-black text-[var(--brand-orange)]">500+</div>
                <div className="text-sm text-white/70 uppercase tracking-wider">Vehicles Serviced</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-orbitron font-black text-[var(--brand-orange)]">2</div>
                <div className="text-sm text-white/70 uppercase tracking-wider">Cities Served</div>
              </div>
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
          onClick={() => window.open('https://wa.me/+263719974846', '_blank')}
          className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl hover:shadow-green-500/40 transition-all duration-300 transform hover:scale-110 animate-glow"
        >
          <MessageSquare size={28} />
        </Button>
      </div>
    </section>
  );
}