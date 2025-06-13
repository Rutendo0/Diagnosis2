import { Search, Cpu, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ServicesSection() {
  const services = [
    {
      title: "Injector Pressure Testing",
      description: "Diesel injection diagnosis, petrol injector testing & diagnosis, uniformity & sprayability test, leakage test, injection flow test & ultrasonic cleaning.",
      icon: Search,
      color: "brand-orange",
      image: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      title: "Vehicle Diagnostics & Troubleshooting",
      description: "Expert vehicle diagnostics and troubleshooting services, identifying issues quickly and accurately to ensure optimal performance and reliability.",
      icon: Cpu,
      color: "brand-blue",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      title: "Automotive Sensors & Parts",
      description: "High-quality automotive sensors and electronic components for all major vehicle systems. Serving businesses, individuals, and institutions with precision.",
      icon: Wrench,
      color: "brand-orange",
      image: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    }
  ];

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-5xl md:text-6xl mb-6 gradient-text">Our Expertise</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive automotive diagnostic solutions engineered for precision and performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="glassmorphism rounded-2xl border-none hover:transform hover:scale-105 transition-all duration-300 group bg-transparent">
              <CardContent className="p-8">
                <div 
                  className="h-48 bg-cover bg-center rounded-xl mb-6 relative overflow-hidden"
                  style={{ backgroundImage: `url('${service.image}')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark-bg)]/80 to-transparent rounded-xl flex items-end">
                    <div className="p-4">
                      <service.icon 
                        className={`text-3xl ${service.color === 'brand-orange' ? 'text-[var(--brand-orange)]' : 'text-[var(--brand-blue)]'} mb-2`} 
                        size={32} 
                      />
                    </div>
                  </div>
                </div>
                <h3 className={`font-orbitron font-bold text-2xl mb-4 text-white group-hover:${service.color === 'brand-orange' ? 'text-[var(--brand-orange)]' : 'text-[var(--brand-blue)]'} transition-colors`}>
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
