
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
      excerpt: "Complete battery packs for Toyota Aqua and Honda Fit Hybrid vehicles with warranty on quality cells.",
      image: hybridBatteryImg,
      services: [
        "Low mileage batteries",
        "Quality warranty",
        "2012-2016 cells",
        "Trade-in options available",
        "Professional installation",
        "Battery pack replacement"
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

        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-white/90 backdrop-blur-sm rounded-full px-8 py-4 mb-8 shadow-md border border-[var(--brand-blue)]/20">
            <div className="w-3 h-3 bg-[var(--brand-orange)] rounded-full"></div>
            <span className="text-gray-700 font-orbitron font-bold text-sm tracking-widest uppercase">
              Our Services & Solutions
            </span>
          </div>
          
          <h1 className="font-orbitron font-black text-4xl md:text-6xl mb-6 text-gray-900 leading-tight">
            <span className="text-[var(--brand-blue)]">Automotive</span>
            <br />
            <span className="text-[var(--brand-orange)]">Excellence</span>
          </h1>
          
          <div className="w-32 h-2 mx-auto bg-gradient-to-r from-[var(--brand-orange)] via-[var(--brand-gold)] to-[var(--brand-blue)] rounded-full mb-8"></div>
          
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light mb-8">
            Comprehensive automotive diagnostic solutions and professional vehicle services. 
            Discover our expertise in vehicle diagnosis, sensor technology, and electrical systems.
          </p>
        </div>

        {/* Learn More About Us Section */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-[var(--brand-blue)]/10 via-white to-[var(--brand-orange)]/10 rounded-3xl p-8 md:p-12 border border-gray-200 shadow-lg">
            <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-md border border-[var(--brand-blue)]/20">
              <User className="w-4 h-4 text-[var(--brand-orange)]" />
              <span className="text-gray-700 font-orbitron font-bold text-sm tracking-widest uppercase">
                Our Story
              </span>
            </div>
            
            <h2 className="font-orbitron font-black text-3xl md:text-4xl mb-6 text-gray-900">
              Learn More About <span className="text-[var(--brand-orange)]">Diagnosis & Sensors</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light mb-8">
              Discover our journey, values, and commitment to automotive excellence. Learn about our team, 
              our mission, and why we're the leading brand in automotive vehicle diagnosis.
            </p>
            
            <Button 
              size="lg"
              className="group relative bg-gradient-to-r from-[var(--brand-orange)] to-orange-500 hover:from-orange-600 hover:to-[var(--brand-orange)] text-white font-orbitron font-bold px-12 py-6 rounded-2xl border-0 transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => window.open('https://sites.google.com/d/1KKFaXr6fxUDk93lgw8I7eOOTKB4kmIyK/p/1LEAHvzUj7nTZkEPKphu14A_q57guBDpH/edit', '_blank')}
            >
              <span className="relative z-10 flex items-center text-lg">
                LEARN ABOUT US
                <User className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={24} />
              </span>
            </Button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card  
              key={service.id}
              className="group bg-white backdrop-blur-sm border border-gray-200 shadow-lg overflow-hidden hover:shadow-xl hover:shadow-[var(--brand-orange)]/10 transition-all duration-300 transform hover:scale-102"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden h-64">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                
                  {/* Service Icon */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-[var(--brand-orange)] to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                      <Wrench size={20} className="text-white" />
                    </div>
                  </div>

                  {/* Professional Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-blue)]/5 to-[var(--brand-orange)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </CardHeader>
              <CardContent className="p-6 relative">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-blue)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                {/* Title */}
                <h2 className="font-orbitron text-xl font-bold mb-4 transition-all duration-300 text-gray-900 group-hover:text-[var(--brand-orange)]">
                  {service.title}
                </h2>
                
                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed font-light transition-colors duration-300">
                  {service.excerpt}
                </p>
                
                {/* Services List */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-[var(--brand-orange)] mb-4 font-orbitron flex items-center uppercase tracking-wider">
                    <div className="w-2 h-2 bg-[var(--brand-orange)] rounded-full mr-3"></div>
                    Services Included:
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    {service.services.slice(0, 4).map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-3 group/item hover:text-[var(--brand-orange)] transition-all duration-300">
                        <div className="w-1.5 h-1.5 bg-[var(--brand-blue)] rounded-full group-hover/item:bg-[var(--brand-orange)] transition-all duration-300"></div>
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                    {service.services.length > 4 && (
                      <li className="text-[var(--brand-orange)] font-bold flex items-center space-x-2 pt-2 border-t border-gray-200">
                        <Settings size={12} />
                        <span>+ {service.services.length - 4} more services</span>
                      </li>
                    )}
                  </ul>
                </div>
                
                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-4 text-xs text-gray-600">
                    <div className="flex items-center space-x-2 hover:text-[var(--brand-orange)] transition-all duration-300 cursor-pointer">
                      <Calendar className="w-4 h-4" />
                      <span className="font-semibold">Available Now</span>
                    </div>
                    <div className="flex items-center space-x-2 hover:text-[var(--brand-blue)] transition-all duration-300 cursor-pointer">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="font-semibold">Expert Service</span>
                    </div>
                  </div>
                  
                  <Button 
                    size="sm" 
                    className="group/btn bg-gradient-to-r from-[var(--brand-orange)] to-orange-500 hover:from-orange-600 hover:to-red-500 text-white font-orbitron font-bold text-sm px-6 py-3 rounded-xl border-0 transition-all duration-300 transform hover:scale-105 shadow-md"
                    onClick={() => window.open('tel:+263242770389', '_self')}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-16 bg-gradient-to-r from-[var(--brand-blue)]/10 via-white to-[var(--brand-orange)]/10 rounded-3xl p-8 md:p-12 border border-gray-200 shadow-lg">
          <h3 className="text-2xl font-bold text-[var(--brand-blue)] mb-6 font-orbitron text-center">Get Professional Help</h3>
          <p className="text-lg text-gray-700 mb-6 text-center max-w-3xl mx-auto">
            Our expert technicians are ready to help with all your automotive diagnostic needs. Contact us today for professional service.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-center">
            <div className="bg-white/80 rounded-2xl p-6 shadow-md border border-gray-200">
              <h4 className="font-bold text-[var(--brand-orange)] mb-2 font-orbitron">Harare Office</h4>
              <p className="text-gray-700">+263 242 770 389</p>
              <p className="text-gray-700">+263 772 974 846</p>
            </div>
            <div className="bg-white/80 rounded-2xl p-6 shadow-md border border-gray-200">
              <h4 className="font-bold text-[var(--brand-orange)] mb-2 font-orbitron">Bulawayo Office</h4>
              <p className="text-gray-700">+263 292 883 884</p>
              <p className="text-gray-700">+263 779 298 117</p>
            </div>
          </div>
        </div>

        {/* Floating Action Buttons */}
        <div className="fixed bottom-8 right-8 z-40">
          <div className="flex flex-col space-y-4">
            <Button 
              size="lg"
              className="rounded-full w-16 h-16 bg-[var(--brand-orange)] hover:bg-orange-600 shadow-xl transition-all duration-300 transform hover:scale-110"
              onClick={() => window.open('tel:+263242770389', '_self')}
            >
              <Phone size={24} className="text-white" />
            </Button>
            <Button 
              size="lg"
              className="rounded-full w-16 h-16 bg-[var(--brand-blue)] hover:bg-blue-700 shadow-xl transition-all duration-300 transform hover:scale-110"
              onClick={() => window.open('https://wa.me/+263719974846', '_blank')}
            >
              <MessageSquare size={24} className="text-white" />
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
