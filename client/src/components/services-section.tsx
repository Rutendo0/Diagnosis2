import { Wrench, Car, Zap, Settings, Shield, Award, CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  const services = [
    {
      icon: Car,
      title: "Vehicle Diagnostics",
      description: "Advanced computer diagnostics for all vehicle makes and models using state-of-the-art equipment",
      features: ["OBD-II Scanning", "Engine Analysis", "Transmission Check", "ABS System Testing"],
      color: "from-orange-500 to-orange-600",
      image: "/images/image1.jpg"
    },
    {
      icon: Zap,
      title: "Sensor Solutions",
      description: "Comprehensive sensor testing, replacement, and calibration services for optimal vehicle performance",
      features: ["O2 Sensors", "MAP Sensors", "Temperature Sensors", "Pressure Sensors"],
      color: "from-blue-500 to-blue-600",
      image: "/images/sensors.jpg"
    },
    {
      icon: Settings,
      title: "Auto Repairs",
      description: "Expert automotive repair services performed by certified technicians with premium quality parts",
      features: ["Engine Repair", "Brake Service", "Suspension Work", "Electrical Systems"],
      color: "from-orange-500 to-orange-600",
      image: "/images/vehicle-servicing.jpg"
    },
    {
      icon: Shield,
      title: "Parts & Accessories",
      description: "Genuine automotive parts and premium accessories sourced from trusted manufacturers worldwide",
      features: ["OEM Parts", "Performance Upgrades", "Accessories", "Warranty Included"],
      color: "from-blue-500 to-blue-600",
      image: "/images/parts.jpg"
    }
  ];

  return (
    <section id="services" className="py-32 px-6 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-transparent to-blue-50/30"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-200 to-transparent transform skew-y-6"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-200 to-transparent transform -skew-y-3"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-24 animate-fade-in">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-orange-100 to-blue-100 rounded-full px-8 py-4 mb-8 shadow-lg border border-orange-200/50">
            <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full animate-pulse"></div>
            <span className="text-transparent bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text font-orbitron font-bold text-lg tracking-wider uppercase">
              Professional Services
            </span>
          </div>

          <h2 className="font-orbitron font-black text-5xl md:text-7xl lg:text-8xl mb-8 text-gray-900 leading-tight">
            <span className="block">Our</span>
            <span className="block bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>

          <div className="w-32 h-2 bg-gradient-to-r from-orange-500 via-orange-400 to-blue-500 mx-auto rounded-full mb-8 shadow-lg"></div>

          <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
            <span className="font-semibold text-orange-600">Diagnosis and Sensors</span> is Zimbabwe's premier 
            specialist in motor vehicle diagnostics, troubleshooting, auto repairs, and premium automotive parts
          </p>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {services.map((service, index) => (
            <Card key={index} className="group relative bg-white border-0 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 overflow-hidden">
              {/* Service Image */}
              <div className="relative h-64 overflow-hidden rounded-t-3xl">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10"></div>

                {/* Service Icon */}
                <div className="absolute top-6 left-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <service.icon className="text-white" size={32} />
                  </div>
                </div>
              </div>

              <CardContent className="p-8">
                <h3 className="font-orbitron font-black text-2xl md:text-3xl text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Service Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button className={`w-full bg-gradient-to-r ${service.color} hover:shadow-lg text-white font-orbitron font-bold py-4 rounded-2xl transition-all duration-300 group`}>
                  <span className="flex items-center justify-center">
                    Learn More
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                  </span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Call-to-Action Section */}
        <div className="relative">
          <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-500/20 transform rotate-3"></div>
            </div>

            <div className="relative z-10">
              <Award className="mx-auto text-orange-400 mb-8" size={64} />

              <h3 className="font-orbitron font-black text-4xl md:text-5xl text-white mb-6">
                Ready to Experience
                <span className="block text-transparent bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text">
                  Professional Service?
                </span>
              </h3>

              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Join thousands of satisfied customers who trust us with their automotive needs. 
                Get expert diagnostics and premium service today.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-orbitron font-bold px-10 py-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  Get Free Quote
                </Button>

                <Button 
                  onClick={() => window.open('tel:+263242770389', '_self')}
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-orbitron font-bold px-10 py-6 rounded-2xl transition-all duration-300"
                >
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}