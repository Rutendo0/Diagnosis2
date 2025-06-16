import { Calendar, Clock, Phone, MapPin, Wrench, Battery, Zap, Home, Settings, User, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Logo from "@/components/logo";
import FloatingNavigation from "@/components/floating-navigation";

// Image declarations
const businessVehicleImg = "/images/bussinesvehicle.jpg";
const vehicleServicingImg = "/images/vehicle-servicing.jpg";
const coolentTemperitureSensorsImg = "/images/sensors.jpg";
const sparkPlugImg = "/images/parts.jpg";
const coolantSensorsImg = "/images/sensors.jpg";
const servicePromoImg = "/images/vehicle.jpg";
const batteryPackImg = "/images/battery.jpg";
const liquidCoolingImg = "/images/battery2.jpg";
const hybridBatteryImg = "/images/battery3.jpg";
const aquaFitImg = "/images/image10.jpg";
const hybridBatteryPackImg = "/images/battery.jpg";
const teamPhotoImg = "/images/about.jpg";
const warrantyImg = "/images/image13.jpg";
const dieselInjectorsImg = "/images/injector.jpg";

export default function BlogPage() {
  const services = [
    {
      id: 1,
      title: "Vehicle Servicing and Repairs",
      excerpt: "Complete automotive servicing including wiring repairs, sensor replacement, common rail injector fitments, high pressure pump fitment, and oil changes.",
      image: vehicleServicingImg,
      services: [
        "Wiring repairs",
        "Sensor replacement", 
        "Common rail injector fitments",
        "High pressure pump fitment",
        "Changing oil",
        "Changing filters",
        "Checking leaks",
        "Checking idle position"
      ]
    },
    {
      id: 2,
      title: "Diesel Injectors - IN STOCK",
      excerpt: "Toyota D4D 1KD, Land Rover TDV6, Mercedes Benz and many more. Visit us today and get your injectors checked, serviced or replaced.",
      image: dieselInjectorsImg,
      services: [
        "Toyota D4D 1KD",
        "Land Rover TDV6", 
        "Mercedes Benz",
        "Injector checking",
        "Injector servicing",
        "Injector replacement"
      ]
    },
    {
      id: 3,
      title: "Spark Plug Diagnostics & Replacement",
      excerpt: "A Spark Plug supplies the spark that ignites the air/fuel mixture, creating the explosion which makes the engine produce power.",
      image: sparkPlugImg,
      services: [
        "Engine misfire diagnosis",
        "High fuel consumption analysis",
        "Black smoke troubleshooting",
        "Poor idling repair",
        "Car stalling solutions"
      ]
    },
    {
      id: 4,
      title: "Coolant Temperature Sensors",
      excerpt: "Professional coolant temperature sensor diagnosis and replacement for optimal engine performance and temperature regulation.",
      image: coolantSensorsImg,
      services: [
        "Temperature sensor testing",
        "Sensor replacement",
        "Cooling system diagnosis",
        "Engine temperature monitoring"
      ]
    },
    {
      id: 5,
      title: "Complete Battery Packs - Toyota Aqua & Honda Fit Hybrid",
      excerpt: "Complete battery packs for Toyota Aqua and Honda Fit Hybrid vehicles with 3 months warranty on 2012-2016 cells.",
      image: hybridBatteryImg,
      services: [
        "Low mileage batteries",
        "3 months warranty",
        "2012-2016 cells",
        "Trade-in options available",
        "Professional installation - $120",
        "Battery pack replacement - $580"
      ]
    },
    {
      id: 6,
      title: "Liquid Battery Cooling Systems",
      excerpt: "Specialized liquid battery cooling systems for hybrid vehicles ensuring optimal battery performance and longevity.",
      image: liquidCoolingImg,
      services: [
        "Hybrid vehicle cooling",
        "Battery temperature management",
        "Cooling system maintenance",
        "Performance optimization"
      ]
    },
    {
      id: 7,
      title: "Professional Service - Car Trouble Solutions",
      excerpt: "Service due? Car trouble? Wait no more! Our experienced technicians provide comprehensive automotive diagnostics and repairs.",
      image: servicePromoImg,
      services: [
        "Comprehensive diagnostics",
        "Professional service",
        "Experienced technicians",
        "Quick turnaround times"
      ]
    },
    {
      id: 8,
      title: "Our Business Vehicle",
      excerpt: "Our mobile diagnostic unit equipped with the latest automotive diagnostic equipment, ready to serve you at your location.",
      image: businessVehicleImg,
      services: [
        "Mobile diagnostics",
        "On-site service",
        "Professional equipment",
        "Convenient location service"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--dark-bg)]">
      {/* Navigation */}
      <FloatingNavigation />

      {/* Enhanced Hero Header Section */}
      <section className="relative pt-32 pb-32 px-6 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${vehicleServicingImg})`,
            filter: 'brightness(0.3)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-blue)]/80 via-[var(--brand-orange)]/40 to-slate-900/90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark-bg)] via-transparent to-[var(--dark-bg)]/60"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-[var(--brand-${i % 2 === 0 ? 'orange' : 'blue'})] rounded-full animate-float opacity-40 blur-sm`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          {/* Premium Badge */}
          <div className="inline-flex items-center space-x-3 glassmorphism rounded-full px-8 py-4 neon-glow animate-fade-in mb-8">
            <div className="w-3 h-3 bg-[var(--brand-orange)] rounded-full animate-pulse-slow shadow-lg shadow-orange-500/50"></div>
            <span className="text-[var(--brand-orange)] font-orbitron font-bold text-sm tracking-widest uppercase text-glow">
              Professional Services Portfolio
            </span>
          </div>

          <div className="space-y-8 animate-fade-in-up">
            <h1 className="font-orbitron font-black text-6xl md:text-8xl lg:text-9xl leading-none">
              <span className="block text-white text-shadow drop-shadow-2xl animate-slide-in-left">Our</span>
              <span className="block ultra-premium-text shimmer drop-shadow-2xl animate-slide-in-right" style={{animationDelay: '0.3s'}}>
                Services
              </span>
            </h1>

            <div className="relative w-32 h-2 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-orange)] via-[var(--brand-gold)] to-[var(--brand-blue)] rounded-full animate-glow shadow-2xl"></div>
            </div>

            <p className="text-xl md:text-2xl text-white/95 font-light max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.6s'}}>
              Professional automotive solutions with premium quality and exceptional service.
              <span className="block mt-3 text-gradient font-semibold">
                Discover our comprehensive range of specialized services
              </span>
            </p>
          </div>

          {/* Service Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 animate-fade-in" style={{animationDelay: '0.9s'}}>
            <div className="text-center group hover:scale-110 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-orbitron font-black text-[var(--brand-orange)] mb-2 group-hover:text-[var(--brand-gold)] transition-colors">8+</div>
              <div className="text-xs text-white/80 uppercase tracking-wider font-semibold">Service Types</div>
            </div>
            <div className="text-center group hover:scale-110 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-orbitron font-black text-[var(--brand-orange)] mb-2 group-hover:text-[var(--brand-gold)] transition-colors">24/7</div>
              <div className="text-xs text-white/80 uppercase tracking-wider font-semibold">Availability</div>
            </div>
            <div className="text-center group hover:scale-110 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-orbitron font-black text-[var(--brand-orange)] mb-2 group-hover:text-[var(--brand-gold)] transition-colors">Pro</div>
              <div className="text-xs text-white/80 uppercase tracking-wider font-semibold">Quality</div>
            </div>
            <div className="text-center group hover:scale-110 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-orbitron font-black text-[var(--brand-orange)] mb-2 group-hover:text-[var(--brand-gold)] transition-colors">Fast</div>
              <div className="text-xs text-white/80 uppercase tracking-wider font-semibold">Service</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">

        {/* Enhanced Services Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.id} 
              className="group premium-card overflow-hidden hover:shadow-2xl hover:shadow-[var(--brand-orange)]/20 transition-all duration-500 transform hover:scale-105 animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden h-56">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark-bg)]/90 via-[var(--dark-bg)]/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  
                  {/* Service Number Badge */}
                  <div className="absolute top-4 left-4 glassmorphism rounded-full w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-[var(--brand-orange)] font-orbitron font-bold text-lg">{service.id}</span>
                  </div>
                  
                  {/* Hover Icon */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-[var(--brand-orange)] to-orange-500 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                      <Wrench size={20} className="text-white" />
                    </div>
                  </div>

                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-orange)]/20 to-[var(--brand-blue)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </CardHeader>
              <CardContent className="p-8 relative">
                {/* Top gradient line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--brand-orange)] via-[var(--brand-gold)] to-[var(--brand-blue)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                
                {/* Title with enhanced styling */}
                <h2 className="ultra-premium-text font-orbitron text-2xl font-bold mb-4 transition-all duration-300 group-hover:text-[var(--brand-gold)]">
                  {service.title}
                </h2>
                
                {/* Enhanced excerpt */}
                <p className="text-white/90 mb-6 leading-relaxed text-lg font-light group-hover:text-white transition-colors duration-300">
                  {service.excerpt}
                </p>
                
                {/* Enhanced Services List */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-[var(--brand-orange)] mb-4 font-orbitron flex items-center uppercase tracking-wider">
                    <div className="w-3 h-3 bg-gradient-to-r from-[var(--brand-orange)] to-orange-500 rounded-full mr-3 animate-pulse-slow"></div>
                    What's Included:
                  </h4>
                  <ul className="text-sm text-white space-y-3">
                    {service.services.slice(0, 4).map((item, index) => (
                      <li key={index} className="flex items-center space-x-4 group/item hover:text-[var(--brand-orange)] transition-all duration-300 hover:translate-x-2">
                        <div className="w-2 h-2 bg-[var(--brand-orange)] rounded-full group-hover/item:scale-150 group-hover/item:bg-[var(--brand-gold)] transition-all duration-300"></div>
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                    {service.services.length > 4 && (
                      <li className="text-[var(--brand-orange)] font-bold flex items-center space-x-3 pt-2 border-t border-[var(--brand-orange)]/20 group-hover:text-[var(--brand-gold)] transition-colors">
                        <Settings size={14} className="animate-spin-slow" />
                        <span>+ {service.services.length - 4} additional services</span>
                      </li>
                    )}
                  </ul>
                </div>
                
                {/* Enhanced Footer */}
                <div className="flex items-center justify-between pt-6 border-t border-gradient-to-r from-[var(--brand-orange)]/30 to-[var(--brand-blue)]/30">
                  <div className="flex items-center space-x-6 text-xs text-white/80">
                    <div className="flex items-center space-x-2 hover:text-[var(--brand-orange)] transition-all duration-300 cursor-pointer group/badge">
                      <Calendar className="w-4 h-4 group-hover/badge:animate-pulse" />
                      <span className="font-semibold">Available Now</span>
                    </div>
                    <div className="flex items-center space-x-2 hover:text-[var(--brand-blue)] transition-all duration-300 cursor-pointer group/badge">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="font-semibold">Expert Service</span>
                    </div>
                  </div>
                  
                  <Button 
                    size="sm" 
                    className="group/btn bg-gradient-to-r from-[var(--brand-orange)] to-orange-500 hover:from-orange-500 hover:to-red-500 text-black font-orbitron font-bold text-sm px-6 py-3 rounded-xl border-0 transition-all duration-500 transform hover:scale-110 hover:shadow-lg hover:shadow-orange-500/40"
                    onClick={() => window.open('tel:+263242770389', '_self')}
                  >
                    <Phone className="w-4 h-4 mr-2 group-hover/btn:animate-pulse" />
                    Call Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Floating Action Section */}
        <div className="fixed bottom-8 right-8 z-40">
          <div className="flex flex-col space-y-4">
            <Button 
              size="lg"
              className="rounded-full w-16 h-16 bg-[var(--brand-orange)] hover:bg-[var(--brand-orange)]/80 shadow-2xl hover:shadow-[var(--brand-orange)]/40 transition-all duration-300 transform hover:scale-110"
              onClick={() => window.open('tel:+263242770389', '_self')}
            >
              <Phone size={24} />
            </Button>
            <Button 
              size="lg"
              className="rounded-full w-16 h-16 bg-[var(--brand-blue)] hover:bg-[var(--brand-blue)]/80 shadow-2xl hover:shadow-[var(--brand-blue)]/40 transition-all duration-300 transform hover:scale-110"
              onClick={() => window.open('https://wa.me/+263719974846', '_blank')}
            >
              <MessageSquare size={24} />
            </Button>
          </div>
        </div>


      </div>
    </div>
  );
}