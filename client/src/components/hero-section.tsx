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

  const scrollToContact = () => {
    const element = document.getElementById('contact');
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

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[var(--brand-orange)] rounded-full animate-float opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[var(--brand-blue)] rounded-full animate-float opacity-40" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-[var(--brand-orange)] rounded-full animate-float opacity-30" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen">

          {/* Left Side - Lamborghini-inspired Content */}
          <div className="text-left space-y-8">
            {/* Premium Badge */}
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-[var(--brand-orange)]/20 to-[var(--brand-blue)]/20 backdrop-blur-sm border border-[var(--brand-orange)]/30 rounded-full px-6 py-3">
              <div className="w-2 h-2 bg-[var(--brand-orange)] rounded-full animate-pulse"></div>
              <span className="text-[var(--brand-orange)] font-orbitron font-semibold text-sm tracking-widest uppercase">
                Professional Diagnostics
              </span>
            </div>

            {/* Main Headline - Lamborghini Style */}
            <div className="space-y-6">
              <h1 className="font-orbitron font-black text-5xl md:text-7xl lg:text-8xl leading-none text-white">
                <span className="block">AUTOMOTIVE</span>
                <span className="block bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-blue)] bg-clip-text text-transparent">
                  EXCELLENCE
                </span>
              </h1>

              <div className="w-24 h-1 bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-blue)] animate-pulse"></div>

              <p className="text-xl md:text-2xl text-white/90 font-light max-w-lg leading-relaxed">
                Precision diagnostics and premium automotive solutions. 
                <span className="text-[var(--brand-orange)] font-semibold"> Where performance meets perfection.</span>
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
                variant="outline"
                size="lg"
                className="group border-2 border-white/30 text-white hover:bg-white hover:text-black font-orbitron font-bold px-8 py-4 rounded-none transition-all duration-300"
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

          {/* Right Side - Visual Element */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Geometric Frame */}
              <div className="absolute inset-0 border border-[var(--brand-orange)]/30 transform rotate-3"></div>
              <div className="absolute inset-0 border border-[var(--brand-blue)]/20 transform -rotate-3"></div>

              {/* Content Box */}
              <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 p-8 space-y-6">
                <div className="text-[var(--brand-orange)] font-orbitron font-semibold text-sm uppercase tracking-widest">
                  Services Include
                </div>
                <ul className="space-y-4 text-white">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[var(--brand-orange)] rounded-full"></div>
                    <span>Advanced Vehicle Diagnostics</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[var(--brand-orange)] rounded-full"></div>
                    <span>Hybrid Battery Solutions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[var(--brand-orange)] rounded-full"></div>
                    <span>Sensor Replacement & Repair</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[var(--brand-orange)] rounded-full"></div>
                    <span>Diesel Injection Systems</span>
                  </li>
                </ul>
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