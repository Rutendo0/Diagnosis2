import { Phone, MessageSquare, ArrowRight, Star, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Clean Professional Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-gray-900"></div>
        <div className="absolute inset-0 bg-[url('/images/image1.jpg')] bg-cover bg-center opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border border-orange-500/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-blue-500/10 rounded-lg transform rotate-45 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-orange-400/30 transform rotate-12 animate-spin-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center space-y-12 max-w-6xl mx-auto">
            
            {/* Premium Badge */}
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-xl rounded-full px-8 py-4 border border-white/20 shadow-2xl animate-fade-in">
              <Shield className="text-orange-400" size={20} />
              <span className="text-white font-orbitron font-bold text-sm tracking-wider uppercase">
                Professional Automotive Solutions
              </span>
            </div>

            {/* Hero Headline with Enhanced Typography */}
            <div className="space-y-8 animate-fade-in-up">
              <h1 className="font-orbitron font-black text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-none">
                <span className="block bg-gradient-to-r from-orange-400 via-orange-300 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl">
                  DIAGNOSIS
                </span>
                <span className="block text-white drop-shadow-2xl mt-4">
                  & SENSORS
                </span>
              </h1>

              {/* Animated Divider */}
              <div className="relative w-48 h-2 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-400 to-blue-500 rounded-full shadow-lg"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-blue-400 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Enhanced Description */}
            <div className="space-y-8">
              <p className="text-xl md:text-2xl lg:text-3xl text-white/95 font-light max-w-5xl mx-auto leading-relaxed">
                Zimbabwe's premier automotive diagnostic specialists delivering 
                <span className="text-orange-400 font-semibold"> cutting-edge solutions</span> for 
                modern vehicle technology
              </p>

              {/* Premium Trust Indicators */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="flex items-center justify-center space-x-3 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <Star className="text-orange-400" size={24} />
                  <span className="text-white font-medium">Premium Quality</span>
                </div>
                <div className="flex items-center justify-center space-x-3 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <Award className="text-blue-400" size={24} />
                  <span className="text-white font-medium">Expert Technicians</span>
                </div>
                <div className="flex items-center justify-center space-x-3 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <Shield className="text-orange-400" size={24} />
                  <span className="text-white font-medium">24/7 Support</span>
                </div>
              </div>
            </div>

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-8 pt-16 animate-fade-in">
              <Button 
                onClick={scrollToServices}
                size="lg"
                className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-orbitron font-bold px-12 py-8 rounded-2xl border-0 transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/25"
              >
                <span className="flex items-center text-xl">
                  EXPLORE SERVICES
                  <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform duration-300" size={28} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>

              <Button 
                onClick={() => window.open('tel:+263242770389', '_self')}
                size="lg"
                className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-orbitron font-bold px-12 py-8 rounded-2xl border-0 transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
              >
                <Phone className="mr-4" size={28} />
                <span className="text-xl">CONTACT US</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>

            {/* Professional Stats */}
            <div className="grid grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-orbitron font-black text-orange-400 mb-2">15+</div>
                <div className="text-white/80 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-orbitron font-black text-blue-400 mb-2">5000+</div>
                <div className="text-white/80 font-medium">Vehicles Serviced</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-orbitron font-black text-orange-400 mb-2">24/7</div>
                <div className="text-white/80 font-medium">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          onClick={() => window.open('https://wa.me/+263719974846', '_blank')}
          className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-2xl hover:shadow-green-500/25 transition-all duration-300 group transform hover:scale-110"
        >
          <MessageSquare size={32} className="group-hover:scale-110 transition-transform duration-300" />
        </Button>
      </div>
    </section>
  );
}