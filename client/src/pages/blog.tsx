import { Calendar, Clock, Phone, MapPin, Wrench, Battery, Zap, Home, Settings, User, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Logo from "@/components/logo";
import FloatingNavigation from "@/components/floating-navigation";

// Image declarations
const businessVehicleImg = "/images/bussinesvehicle1.jpg";
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Navigation */}
      <FloatingNavigation />

      <div className="container mx-auto px-4 py-24">

        {/* Learn More About Us Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 mb-8 shadow-lg border border-[var(--brand-blue)]/20">
            <div className="w-3 h-3 bg-[var(--brand-blue)] rounded-full animate-pulse"></div>
            <span className="text-[var(--brand-blue)] font-orbitron font-bold text-sm tracking-widest uppercase">
              Discover Our Story
            </span>
          </div>
          
          <h2 className="font-orbitron font-black text-4xl md:text-6xl mb-6 text-gray-900 leading-tight">
            <span className="text-[var(--brand-blue)]">Learn More</span>
            <br />
            <span className="text-[var(--brand-orange)]">About Us</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light mb-8">
            Discover our journey, values, and commitment to automotive excellence. 
            <span className="block mt-3 text-gradient font-semibold">
              Get to know the team behind Zimbabwe's premier diagnostic services
            </span>
          </p>
          
          <Button 
            size="lg"
            className="group relative bg-gradient-to-r from-[var(--brand-orange)] to-orange-500 hover:from-orange-500 hover:to-[var(--brand-orange)] text-black font-orbitron font-bold px-12 py-6 rounded-2xl border-0 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/40"
            onClick={() => window.open('https://sites.google.com/d/1KKFaXr6fxUDk93lgw8I7eOOTKB4kmIyK/p/1LEAHvzUj7nTZkEPKphu14A_q57guBDpH/edit', '_blank')}
          >
            <span className="relative z-10 flex items-center text-lg">
              LEARN MORE ABOUT US
              <User className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={24} />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-sm"></div>
          </Button>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.id} 
              className="group bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-[var(--brand-orange)]/20 transition-all duration-500 transform hover:scale-105 animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden h-56">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-500"></div>
                  
                  {/* Service Number Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-[var(--brand-orange)] font-orbitron font-bold text-lg">{service.id}</span>
                  </div>
                  
                  {/* Hover Icon */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-[var(--brand-orange)] to-orange-500 rounded-full flex items-center justify-center shadow-xl">
                      <Wrench size={20} className="text-white" />
                    </div>
                  </div>

                  {/* Improved Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-orange)]/10 to-[var(--brand-blue)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </CardHeader>
              <CardContent className="p-8 relative">
                {/* Top gradient line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--brand-orange)] via-[var(--brand-gold)] to-[var(--brand-blue)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                
                {/* Title with enhanced styling */}
                <h2 className="font-orbitron text-2xl font-bold mb-4 transition-all duration-300 text-gray-900 group-hover:text-[var(--brand-orange)]">
                  {service.title}
                </h2>
                
                {/* Enhanced excerpt */}
                <p className="text-gray-700 mb-6 leading-relaxed text-lg font-light transition-colors duration-300">
                  {service.excerpt}
                </p>
                
                {/* Enhanced Services List */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-[var(--brand-orange)] mb-4 font-orbitron flex items-center uppercase tracking-wider">
                    <div className="w-3 h-3 bg-gradient-to-r from-[var(--brand-orange)] to-orange-500 rounded-full mr-3 animate-pulse-slow"></div>
                    What's Included:
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-3">
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
                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <div className="flex items-center space-x-6 text-xs text-gray-600">
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