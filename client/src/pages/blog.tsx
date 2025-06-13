import { Calendar, Clock, Phone, MapPin, Wrench, Battery, Zap } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import businessVehicleImg from "@assets/118159882_2661484653954988_4487587664726070543_n_1749805657552.jpg";
import vehicleServicingImg from "@assets/480580703_8422622434507819_6324339413906591208_n_1749805657553.jpg";
import dieselInjectorsImg from "@assets/480767987_8424530307650365_973478690302225057_n_1749805657553.jpg";
import sparkPlugImg from "@assets/480769492_8438025702967492_3915631524323777433_n_1749805657554.jpg";
import coolantSensorsImg from "@assets/481011555_8433712596732136_7045488006639825717_n_1749805657554.jpg";
import servicePromoImg from "@assets/481906401_8469623613141034_5789006434150836708_n_1749805657555.jpg";
import batteryPackImg from "@assets/486147528_1252681930196431_3887197685312681905_n_1749805657555.jpg";
import liquidCoolingImg from "@assets/486261126_1252681640196460_4688732123092460616_n_1749805657556.jpg";
import hybridBatteryImg from "@assets/486284443_1252677416863549_7166789577646969114_n_1749805657556.jpg";
import aquaFitImg from "@assets/486377372_1252553180209306_3213171532241942266_n_1749805657557.jpg";
import hybridBatteryPackImg from "@assets/495601431_8925306940906030_5804913198261990529_n_1749805657557.jpg";
import teamPhotoImg from "@assets/495601431_8925306940906030_5804913198261990529_n_1749805657557.jpg";
import warrantyImg from "@assets/WhatsApp Image 2025-06-11 at 14.38.40_0b193b83_1749805671941.jpg";

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
      {/* Hero Header Section */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-gray-900 to-[var(--dark-bg)]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(${vehicleServicingImg})`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--dark-bg)]/70 via-[var(--dark-bg)]/50 to-[var(--dark-bg)]/90"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <h1 className="font-orbitron font-bold text-5xl md:text-7xl mb-8 gradient-text">
            Our Services & Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Professional automotive diagnostics, repairs, and specialized hybrid vehicle services
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">

        {/* Contact Information Banner */}
        <div className="glassmorphism rounded-2xl p-8 mb-12 border border-[var(--brand-blue)]/20">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-orbitron text-xl font-bold mb-4 text-[var(--brand-orange)]">Contact Us Today</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-300">
                  <Phone className="w-4 h-4 text-[var(--brand-blue)]" />
                  <span>Harare: +263 242 770 389 | +263 772 974 846</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Phone className="w-4 h-4 text-[var(--brand-blue)]" />
                  <span>Bulawayo: +263 292 883 884 | +263 779 298 117</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-orbitron text-xl font-bold mb-4 text-[var(--brand-orange)]">Visit Our Locations</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-300">
                  <MapPin className="w-4 h-4 text-[var(--brand-blue)]" />
                  <span>03 Robert Mugabe Rd, Harare</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <MapPin className="w-4 h-4 text-[var(--brand-blue)]" />
                  <span>114 George Silundika St, Bulawayo</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 glassmorphism rounded-2xl border border-[var(--brand-blue)]/20 bg-transparent">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-2xl h-64">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-[var(--brand-orange)] text-white border-0 flex items-center space-x-1 font-orbitron">
                      {service.icon}
                      <span>{service.category}</span>
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h2 className="font-orbitron text-xl font-bold text-white mb-3 group-hover:text-[var(--brand-orange)] transition-colors">
                  {service.title}
                </h2>
                <p className="text-gray-300 mb-4">
                  {service.excerpt}
                </p>
                
                {/* Services List */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[var(--brand-orange)] mb-2 font-orbitron">Services Include:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {service.services.slice(0, 4).map((item, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-[var(--brand-orange)] rounded-full"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                    {service.services.length > 4 && (
                      <li className="text-[var(--brand-orange)] font-medium">+ {service.services.length - 4} more services</li>
                    )}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4 text-[var(--brand-blue)]" />
                      <span>Available Now</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-[var(--brand-blue)]" />
                      <span>Professional Service</span>
                    </div>
                  </div>
                  
                  <Button 
                    size="sm" 
                    className="bg-[var(--brand-orange)] hover:bg-[var(--brand-orange)]/80 text-white font-orbitron"
                    onClick={() => window.open('tel:+263242770389', '_self')}
                  >
                    <Phone className="w-4 h-4 mr-1" />
                    Call Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Need Expert Automotive Service?</h3>
          <p className="text-lg mb-6 opacity-90">
            Contact us today for professional diagnostics, repairs, and hybrid vehicle services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white"
              onClick={() => window.open('tel:+263242770389', '_self')}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Harare: +263 242 770 389
            </Button>
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white"
              onClick={() => window.open('tel:+263292883884', '_self')}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Bulawayo: +263 292 883 884
            </Button>
          </div>
          <p className="mt-4 text-sm opacity-75">
            Visit us at: www.diagnosisandsensors.co.zw
          </p>
        </div>
      </div>
    </div>
  );
}