import { Shield, Wrench, DollarSign, Award, Clock, Users, CheckCircle, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AdvantagesSection() {
  const advantages = [
    {
      title: "Certified Excellence",
      description: "ISO-certified processes and industry-leading quality standards ensure exceptional service delivery",
      icon: Shield,
      color: "from-orange-500 to-orange-600",
      stats: "ISO Certified",
      image: "/images/image2.jpg"
    },
    {
      title: "Expert Technicians",
      description: "Our team consists of certified automotive specialists with decades of combined experience",
      icon: Wrench,
      color: "from-blue-500 to-blue-600",
      stats: "15+ Years Exp",
      image: "/images/image3.jpg"
    },
    {
      title: "Competitive Pricing",
      description: "Transparent pricing with no hidden fees, offering the best value for premium automotive services",
      icon: DollarSign,
      color: "from-orange-500 to-orange-600",
      stats: "Best Prices",
      image: "/images/image4.jpg"
    },
    {
      title: "Quality Guarantee",
      description: "Every service comes with our comprehensive warranty and satisfaction guarantee",
      icon: Award,
      color: "from-blue-500 to-blue-600",
      stats: "100% Guaranteed",
      image: "/images/image5.jpg"
    },
    {
      title: "Rapid Service",
      description: "Efficient diagnostics and quick turnaround times without compromising on quality",
      icon: Clock,
      color: "from-orange-500 to-orange-600",
      stats: "Same Day Service",
      image: "/images/image6.jpg"
    },
    {
      title: "Customer Focus",
      description: "Dedicated customer service team providing personalized support and expert guidance",
      icon: Users,
      color: "from-blue-500 to-blue-600",
      stats: "5000+ Happy Clients",
      image: "/images/image7.jpg"
    }
  ];

  return (
    <section id="advantages" className="py-32 px-6 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent to-orange-50/40"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-orange-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-l from-blue-200/30 to-orange-200/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-100 to-blue-100 rounded-full px-8 py-4 mb-8 shadow-lg border border-orange-200/50">
            <Star className="text-orange-500" size={20} />
            <span className="text-transparent bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text font-orbitron font-bold text-lg tracking-wider uppercase">
              Why Choose Us
            </span>
          </div>
          <div className="w-32 h-2 bg-gradient-to-r from-orange-500 via-orange-400 to-blue-500 mx-auto rounded-full mb-8 shadow-lg"></div>

          <p className="text-xl md:text-1xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
            If you own a hybrid car or are considering purchasing one, trust us with all your maintanance and repair needs. We are dedicated to keeping your vehicle in top condition so that you can enjoy its many benefits for years to come.
          </p>
        </div>

        {/* Enhanced Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {advantages.map((advantage, index) => (
            <Card key={index} className="group relative bg-white border-0 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 overflow-hidden">
              {/* Background Image */}
              <div className="relative h-48 overflow-hidden rounded-t-2xl">
                <img 
                  src={advantage.image} 
                  alt={advantage.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5"></div>
              </div>

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${advantage.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              <CardContent className="relative p-8 text-center">
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${advantage.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <advantage.icon className="text-white" size={36} />
                  </div>

                  {/* Stats Badge */}
                  <div className="absolute -top-2 -right-2 bg-white shadow-lg rounded-full px-3 py-1 border-2 border-gray-100">
                    <span className="text-xs font-bold text-gray-600">{advantage.stats}</span>
                  </div>
                </div>

                <h3 className="font-orbitron font-black text-xl md:text-2xl text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                  {advantage.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-lg">
                  {advantage.description}
                </p>

                {/* Check Mark */}
                <div className="mt-6 flex justify-center">
                  <CheckCircle className="text-green-500" size={24} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}