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
      description: "Diesel injection diagnosis, Petrol Injector Testing & Diagnosis, uniformity & sprayability test, injection flow test & Ultrasonic Cleaning",
      icon: Search,
      color: "brand-orange",
      image: dieselInjectorsImg
    },
    {
      title: "Vehicle Diagnostics & Troubleshooting",
      description: "Expert vehicle diagnostics and troubleshooting services, identifying issues quickly and accurately to ensure optimal performance",
      icon: Cpu,
      color: "brand-blue",
      image: servicePromoImg
    },
    {
      title: "Vehicle Automotive Repair",
      description: "Diesel Repairs, Service Replacement, Automotive Repair, Multi-Point Inspection, Filters, Checking Leak, Checking the sensor",
      icon: Wrench,
      color: "brand-orange",
      image: vehicleServicingImg
    },
    {
      title: "Vehicle Parts & Accessories",
      description: "Parts and diesel supplies, Petrol and aftermarket / premium automotive housing, diesel injection, automotive electronics, Commrail fuel, Diesel fuel connection, Abs sensors, Industrial valves, Air control system",
      icon: Settings,
      color: "brand-blue",
      image: sparkPlugImg
    },
    {
      title: "Automotive Sensors Supply & Fitting",
      description: "Supply and fitting of automotive sensors such as Airflow direction, car fuel system, water temperature, speed sensor, position sensor, exhaust gas sensor as well as related system vehicle air con repairer",
      icon: LifeBuoy,
      color: "brand-orange",
      image: coolantSensorsImg
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="card-enhanced hover-lift animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="image-overlay h-64">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end z-10">
                    <div className="p-6">
                      <IconComponent 
                        className={`${service.color === 'brand-orange' ? 'text-[var(--brand-orange)]' : 'text-[var(--brand-blue)]'} mb-2 animate-pulse-slow`} 
                        size={36} 
                      />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-gradient font-orbitron font-bold text-2xl mb-4 transition-all duration-300 hover:text-glow">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
