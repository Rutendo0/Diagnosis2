import { Search, Cpu, Wrench, Settings, LifeBuoy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import vehicleServicingImg from "@assets/480580703_8422622434507819_6324339413906591208_n_1749805657553.jpg";
import dieselInjectorsImg from "@assets/480767987_8424530307650365_973478690302225057_n_1749805657553.jpg";
import sparkPlugImg from "@assets/480769492_8438025702967492_3915631524323777433_n_1749805657554.jpg";
import coolantSensorsImg from "@assets/481011555_8433712596732136_7045488006639825717_n_1749805657554.jpg";
import servicePromoImg from "@assets/481906401_8469623613141034_5789006434150836708_n_1749805657555.jpg";

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
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-5xl md:text-6xl mb-6 gradient-text">Our Expertise</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive automotive diagnostic solutions engineered for precision and performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
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
