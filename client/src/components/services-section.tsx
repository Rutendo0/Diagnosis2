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

        {/* Enhanced Call-to-Action Section */}
        <div className="text-center mt-20 animate-fade-in">
          <div className="glassmorphism rounded-3xl p-12 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[var(--brand-orange)] via-[var(--brand-gold)] to-[var(--brand-blue)]"></div>
            <h3 className="font-orbitron font-black text-4xl md:text-5xl ultra-premium-text mb-6">
              Ready for Professional Service?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience the difference of working with Zimbabwe's premier automotive diagnostic specialists. 
              Book your service appointment today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="https://wa.me/+263719974846" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-8 py-4 rounded-2xl font-orbitron font-bold text-white transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-green-500/50"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>Book via WhatsApp</span>
              </a>
              <a 
                href="tel:+263242770389" 
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-[var(--brand-blue)] to-blue-600 hover:from-blue-600 hover:to-[var(--brand-blue)] px-8 py-4 rounded-2xl font-orbitron font-bold text-white transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-blue-500/50"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}