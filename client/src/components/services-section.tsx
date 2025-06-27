
import { Wrench, Zap, Cog, Users, Clock, Shield, Star, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.scroll-reveal');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('visible');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Wrench,
      title: "Complete Vehicle Servicing",
      description: "Comprehensive automotive servicing including diagnostics, repairs, and maintenance.",
      features: ["Wiring repairs", "Sensor replacement", "Oil changes", "Filter replacement"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Zap,
      title: "Diesel Injector Services", 
      description: "Specialized diesel injector diagnostics, cleaning, and replacement services.",
      features: ["Toyota D4D 1KD", "Land Rover TDV6", "Mercedes Benz", "Complete testing"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Cog,
      title: "Spark Plug Diagnostics",
      description: "Professional spark plug analysis and replacement for optimal engine performance.",
      features: ["Misfire diagnosis", "Performance optimization", "Fuel efficiency", "Engine analysis"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Premium Parts Supply",
      description: "High-quality automotive parts and sensors from trusted manufacturers.",
      features: ["OEM quality parts", "Sensor technology", "Diagnostic equipment", "Professional tools"],
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-32 px-6 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-transparent to-blue-50/30"></div>

      {/* Modern Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(249,115,22,0.15)_1px,transparent_0)] bg-[length:40px_40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-24 scroll-reveal">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-orange-100 to-blue-100 rounded-full px-8 py-4 mb-8 shadow-lg border border-orange-200/50">
            <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full animate-pulse"></div>
            <span className="text-transparent bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text font-orbitron font-bold text-lg tracking-wider uppercase">
              Professional Services
            </span>
          </div>

          <div className="w-32 h-2 bg-gradient-to-r from-orange-500 via-orange-400 to-blue-500 mx-auto rounded-full mb-8 shadow-lg"></div>

          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
            Diagnosis and Sensors is a specialist in motor vehicle diagnosis, troubleshooting, auto repairs, selling parts and accessories.
          </p>
        </div>

        {/* Modern Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="modern-card scroll-reveal group overflow-hidden border-0">
                <CardContent className="p-8">
                  <div className="relative">
                    {/* Gradient Background */}
                    <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r ${service.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="text-white" size={28} />
                    </div>

                    {/* Content */}
                    <h3 className="font-orbitron font-bold text-2xl text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="text-green-500 flex-shrink-0" size={18} />
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center scroll-reveal">
          <div className="bg-gradient-to-r from-orange-500 to-blue-600 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="font-orbitron font-bold text-3xl md:text-4xl mb-6">
              Need Professional Automotive Service?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Contact our expert team for comprehensive diagnostic and repair solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="modern-button bg-white text-orange-600 hover:bg-gray-100 font-orbitron font-bold px-8 py-4 text-lg border-0">
                Get Quote Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
