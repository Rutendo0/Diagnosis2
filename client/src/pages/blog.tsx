import { Calendar, Clock, Phone, MapPin, Wrench, Battery, Zap, Home, Settings, User, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Logo from "@/components/logo";
const businessVehicleImg = "/images/business-vehicle.jpg";
const vehicleServicingImg = "/images/vehicle-servicing.jpg";
const dieselInjectorsImg = "/images/diesel-injectors.jpg";
const sparkPlugImg = "/images/spark-plugs.jpg";
const coolantSensorsImg = "/images/coolant-sensors.jpg";
const servicePromoImg = "/images/service-promo.jpg";
const batteryPackImg = "/images/battery-pack.jpg";
const liquidCoolingImg = "/images/liquid-cooling.jpg";
const hybridBatteryImg = "/images/hybrid-battery.jpg";
const aquaFitImg = "/images/aqua.jpg";
const hybridBatteryPackImg = "/images/hybrid-battery.jpg";
const teamPhotoImg = "/images/business-vehicle.jpg";
const warrantyImg = "/images/warranty.jpg";

export default function BlogPage() {
  const services = [
    {
      id: 1,
      title: "Vehicle Servicing and Repairs",
      excerpt: "Complete automotive servicing including wiring repairs, sensor replacement, common rail injector fitments, high pressure pump fitment, and oil changes.",
      image: vehicleServicingImg,
      category: "Services",
      icon: <Wrench className="w-5 h-5" />,
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
      category: "Parts",
      icon: <Zap className="w-5 h-5" />,
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
      category: "Diagnostics",
      icon: <Zap className="w-5 h-5" />,
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
      category: "Sensors",
      icon: <Wrench className="w-5 h-5" />,
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
      image: hybridBatteryPackImg,
      category: "Battery",
      icon: <Battery className="w-5 h-5" />,
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
      category: "Hybrid Systems",
      icon: <Battery className="w-5 h-5" />,
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
      category: "Services",
      icon: <Wrench className="w-5 h-5" />,
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
      category: "About Us",
      icon: <MapPin className="w-5 h-5" />,
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--dark-bg)]/95 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-12">
              <Logo className="h-10 w-auto" />
              <div className="hidden lg:flex items-center space-x-8">
                <Link 
                  href="/" 
                  className="relative font-orbitron font-medium text-white/90 hover:text-white transition-all duration-300 group"
                >
                  <span className="relative z-10">Home</span>
                  <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-blue)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </Link>
                <Link 
                  href="/#services" 
                  className="relative font-orbitron font-medium text-white/90 hover:text-white transition-all duration-300 group"
                >
                  <span className="relative z-10">Services</span>
                  <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-blue)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </Link>
                <Link 
                  href="/#products" 
                  className="relative font-orbitron font-medium text-white/90 hover:text-white transition-all duration-300 group"
                >
                  <span className="relative z-10">Products</span>
                  <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-blue)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </Link>
                <Link 
                  href="/#about" 
                  className="relative font-orbitron font-medium text-white/90 hover:text-white transition-all duration-300 group"
                >
                  <span className="relative z-10">About</span>
                  <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-blue)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </Link>
                <Link 
                  href="/blog" 
                  className="relative font-orbitron font-medium text-[var(--brand-orange)] transition-all duration-300 group"
                >
                  <span className="relative z-10">Blog</span>
                  <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-blue)] transform scale-x-100 transition-transform duration-300"></div>
                </Link>
                <Link 
                  href="/#contact" 
                  className="relative font-orbitron font-medium text-white/90 hover:text-white transition-all duration-300 group"
                >
                  <span className="relative z-10">Contact</span>
                  <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-blue)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center space-x-4">
              <button 
                onClick={() => window.open('tel:+263242770389', '_self')}
                className="luxury-button px-6 py-2 text-sm font-orbitron font-semibold"
              >
                Call Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Header Section */}
      <section className="relative pt-32 pb-24 px-6 bg-gradient-to-b from-gray-900 to-[var(--dark-bg)]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(${vehicleServicingImg})`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--dark-bg)]/70 via-[var(--dark-bg)]/50 to-[var(--dark-bg)]/90"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <h1 className="font-orbitron font-bold text-5xl md:text-7xl mb-8 ultra-premium-text">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto font-light">
            Professional automotive solutions with premium quality and exceptional service
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-blue)] mx-auto"></div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="group premium-card overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark-bg)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-[var(--brand-orange)] text-white border-0 flex items-center space-x-1 font-orbitron shadow-lg backdrop-blur-sm">
                      {service.icon}
                      <span>{service.category}</span>
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-[var(--brand-orange)] rounded-full flex items-center justify-center">
                      <MapPin size={16} className="text-white" />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-blue)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                <h2 className="ultra-premium-text font-orbitron text-xl font-bold mb-3 transition-all duration-300">
                  {service.title}
                </h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.excerpt}
                </p>
                
                {/* Services List */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[var(--brand-orange)] mb-3 font-orbitron flex items-center">
                    <div className="w-2 h-2 bg-[var(--brand-orange)] rounded-full mr-2"></div>
                    Services Include:
                  </h4>
                  <ul className="text-sm text-gray-400 space-y-2">
                    {service.services.slice(0, 4).map((item, index) => (
                      <li key={index} className="flex items-center space-x-3 group/item hover:text-gray-300 transition-colors">
                        <div className="w-1.5 h-1.5 bg-[var(--brand-orange)] rounded-full group-hover/item:scale-125 transition-transform"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                    {service.services.length > 4 && (
                      <li className="text-[var(--brand-orange)] font-medium flex items-center space-x-2">
                        <Settings size={12} />
                        <span>+ {service.services.length - 4} more services</span>
                      </li>
                    )}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-[var(--brand-blue)]/20">
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <div className="flex items-center space-x-1 hover:text-[var(--brand-blue)] transition-colors">
                      <Calendar className="w-3 h-3" />
                      <span>Available</span>
                    </div>
                    <div className="flex items-center space-x-1 hover:text-[var(--brand-blue)] transition-colors">
                      <Clock className="w-3 h-3" />
                      <span>Professional</span>
                    </div>
                  </div>
                  
                  <Button 
                    size="sm" 
                    className="luxury-button font-orbitron text-xs px-4 py-2"
                    onClick={() => window.open('tel:+263242770389', '_self')}
                  >
                    <Phone className="w-3 h-3 mr-1" />
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
              onClick={() => window.open('https://wa.me/263242770389', '_blank')}
            >
              <MessageSquare size={24} />
            </Button>
          </div>
        </div>


      </div>
    </div>
  );
}