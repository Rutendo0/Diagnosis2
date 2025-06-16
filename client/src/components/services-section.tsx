import { Search, Cpu, Wrench, Settings, LifeBuoy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const vehicleServicingImg = "/images/vehicle.jpg";
const dieselInjectorsImg = "/images/injector.jpg";
const sparkPlugImg = "/images/parts.jpg";
const coolantSensorsImg = "/images/sensors.jpg";
const servicePromoImg = "/images/vehicle-servicing.jpg";

export default function ServicesSection() {
  const services = [
    {
      title: "Injector Pressure Test",
      description: "Advanced diesel injection diagnosis, Petrol Injector Testing & Diagnosis, uniformity & sprayability test, injection flow test & Ultrasonic Cleaning with state-of-the-art equipment",
      icon: Search,
      color: "brand-orange",
      image: dieselInjectorsImg,
      features: ["Pressure Testing", "Flow Analysis", "Ultrasonic Cleaning", "Performance Report"]
    },
    {
      title: "Vehicle Diagnostics & Troubleshooting",
      description: "Expert vehicle diagnostics and troubleshooting services, identifying issues quickly and accurately to ensure optimal performance with cutting-edge diagnostic tools",
      icon: Cpu,
      color: "brand-blue",
      image: servicePromoImg,
      features: ["OBD-II Scanning", "Real-time Data", "Error Code Analysis", "Performance Metrics"]
    },
    {
      title: "Vehicle Automotive Repair",
      description: "Comprehensive automotive repair services including diesel repairs, service replacement, multi-point inspection, filter maintenance, leak detection, and sensor diagnostics",
      icon: Wrench,
      color: "brand-orange",
      image: vehicleServicingImg,
      features: ["Engine Repair", "Service Replacement", "Leak Detection", "Multi-Point Inspection"]
    },
    {
      title: "Vehicle Parts & Accessories",
      description: "Premium automotive parts and accessories including diesel supplies, aftermarket components, automotive electronics, common rail fuel systems, ABS sensors, and industrial valves",
      icon: Settings,
      color: "brand-blue",
      image: sparkPlugImg,
      features: ["OEM Parts", "Aftermarket Options", "Electronics", "Industrial Components"]
    },
    {
      title: "Automotive Sensors Supply & Fitting",
      description: "Professional supply and fitting of automotive sensors including airflow direction, fuel system sensors, temperature sensors, speed sensors, position sensors, and exhaust gas sensors",
      icon: LifeBuoy,
      color: "brand-orange",
      image: coolantSensorsImg,
      features: ["Temperature Sensors", "Speed Sensors", "Position Sensors", "Exhaust Gas Sensors"]
    }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-gradient-to-b from-[var(--dark-bg)] to-[var(--dark-surface)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-[var(--brand-orange)] font-orbitron font-semibold text-lg tracking-wide">Professional Services</span>
          </div>
          <h2 className="font-orbitron font-black text-5xl md:text-7xl mb-8 ultra-premium-text text-glow">Our Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-blue)] mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive automotive diagnostic solutions engineered for precision and performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="premium-card border-none group hover:transform hover:scale-105 transition-all duration-500 animate-fade-in"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="image-overlay h-64 relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-orange)]/20 to-[var(--brand-blue)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-2xl ${service.color === 'brand-orange' ? 'bg-[var(--brand-orange)]' : 'bg-[var(--brand-blue)]'} group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon 
                        className="text-white" 
                        size={28} 
                      />
                    </div>
                    <div className="flex-1">
                      <div className={`h-1 w-16 rounded-full ${service.color === 'brand-orange' ? 'bg-[var(--brand-orange)]' : 'bg-[var(--brand-blue)]'} group-hover:w-24 transition-all duration-500`}></div>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-10">
                <div className="w-20 h-20 mx-auto mb-8 rounded-3xl bg-gradient-to-r from-[var(--brand-orange)] via-[var(--brand-gold)] to-[var(--brand-blue)] flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                  <service.icon className="text-white group-hover:animate-pulse" size={36} />
                </div>
                <h3 className="ultra-premium-text font-orbitron font-bold text-2xl mb-6 text-center group-hover:text-[var(--brand-gold)] transition-colors duration-300">{service.title}</h3>
                <p className="text-white/90 mb-6 text-center leading-relaxed text-lg">{service.description}</p>
                
                {/* Service Features */}
                <div className="mb-8">
                  <h4 className="text-[var(--brand-orange)] font-orbitron font-semibold text-sm mb-4 text-center uppercase tracking-wider">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-white/80 group/feature hover:text-[var(--brand-orange)] transition-colors duration-300">
                        <div className="w-2 h-2 bg-[var(--brand-orange)] rounded-full group-hover/feature:scale-150 transition-transform duration-300"></div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}