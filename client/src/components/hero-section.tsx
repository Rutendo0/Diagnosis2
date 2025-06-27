import { MessageSquare, ArrowRight, Star, Shield, Award } from "lucide-react";
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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Clean Professional Background */}
      <div className="absolute inset-0">
      <div className="absolute inset-0 gradient-hero "></div>
      <div className="absolute inset-0 bg-[url('https://images.contentstack.io/v3/assets/blt8ede3f648df7664a/bltbb89b81848255ec7/6653fb3b5937a038d321749c/Toyota-RAV4-Adventure-Hybrid-front-action_www.jpg')] bg-cover bg-center  opacity-20"></div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center space-y-8 sm:space-y-12 max-w-6xl mx-auto">

            {/* Premium Badge */}
            <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-white/10 backdrop-blur-xl rounded-full px-4 py-2 sm:px-8 sm:py-4 border border-white/20 shadow-2xl animate-fade-in">
              <Shield className="text-orange-400" size={16} />
              <span className="text-gray-600 font-orbitron font-bold text-xs sm:text-sm tracking-wider uppercase">
                The Best Solution To Your Automotive
              </span>
            </div>

            {/* Hero Headline with Enhanced Typography */}
            <div className="space-y-4 sm:space-y-8 animate-fade-in-up">
              <h1 className="font-orbitron font-black text-1xl sm:text-1xl md:text-2xl lg:text-2xl xl:text-4xl leading-none">
                <span className="block bg-gradient-to-r from-orange-400 via-orange-300 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl">
                  DIAGNOSIS
                </span>
                <span className="block text-gray-700 drop-shadow-1xl mt-2 sm:mt-2">
                  & SENSORS
                </span>
              </h1>

              {/* Animated Divider */}
              <div className="relative w-32 sm:w-48 h-2 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-400 to-blue-500 rounded-full shadow-lg"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-blue-400 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Enhanced Description */}
            <div className="space-y-6 sm:space-y-8">
              <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-gray-400 font-light max-w-5xl mx-auto leading-relaxed px-4">
                We are the leading service provider in vehicle diagnosis and supply of Automative Sensors 
              </p>

              {/* Premium Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto px-4">
                <div className="flex items-center justify-center space-x-2 sm:space-x-3 bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10">
                  <Star className="text-orange-400" size={20} />
                  <span className="text-white font-medium text-sm sm:text-base">Premium Quality</span>
                </div>
                <div className="flex items-center justify-center space-x-2 sm:space-x-3 bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10">
                  <Award className="text-blue-400" size={20} />
                  <span className="text-white font-medium text-sm sm:text-base">Profesional Team</span>
                </div>
                <div className="flex items-center justify-center space-x-2 sm:space-x-3 bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10">
                  <Shield className="text-orange-400" size={20} />
                  <span className="text-white font-medium text-sm sm:text-base">24/7 Support</span>
                </div>
              </div>
            </div>

            {/* Enhanced Modern CTA Section */}
            <div className="animate-fade-in-up space-y-6 sm:space-y-8 px-4" style={{ animationDelay: '0.8s' }}>
              <div className="flex flex-col gap-4 sm:gap-6 justify-center items-center">
                <Button 
                  onClick={scrollToServices}
                  className="modern-button group bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 hover:from-orange-600 hover:via-red-500 hover:to-red-600 text-white px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg font-orbitron font-bold tracking-wider uppercase shadow-2xl transform transition-all duration-500 hover:scale-110 hover:shadow-orange-500/50 border-0 w-full sm:w-auto"
                >
                  <span className="flex items-center space-x-2 sm:space-x-3">
                    <span>Explore Services</span>
                    <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={18} />
                  </span>
                </Button>
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