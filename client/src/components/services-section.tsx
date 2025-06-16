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
              <div key={index} className="card-enhanced hover-lift animate-fade-in-up group" style={{animationDelay: `${index * 0.2}s`}}>
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
                        <IconComponent 
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
                <div className="p-8 bg-gradient-to-br from-[var(--dark-surface)] to-[var(--dark-card)]">
                  <h3 className="ultra-premium-text font-orbitron font-bold text-2xl mb-4 group-hover:text-glow transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {service.description}
                  </p>
                  <div className="mt-6 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[var(--brand-orange)] text-sm font-semibold">Learn More</span>
                    <div className="w-4 h-0.5 bg-[var(--brand-orange)] group-hover:w-8 transition-all duration-300"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
