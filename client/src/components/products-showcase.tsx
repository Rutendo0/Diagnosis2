
import { Star, ArrowRight, Package, Zap, Shield, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

export default function ProductsShowcase() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.stagger-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('visible');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const featuredProducts = [
    {
      id: 1,
      name: "Advanced Engine Sensors",
      description: "High-precision sensors for modern engine management systems",
      image: "/images/sensors.jpg",
      price: "From R450",
      features: ["OEM Quality", "2 Year Warranty", "Professional Grade"],
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Diesel Injectors",
      description: "Premium diesel injectors for various vehicle models",
      image: "/images/injector.jpg", 
      price: "From R850",
      features: ["Multiple Brands", "Testing Available", "Expert Installation"],
      badge: "In Stock"
    },
    {
      id: 3,
      name: "Diagnostic Equipment",
      description: "Professional automotive diagnostic tools and scanners",
      image: "/images/parts.jpg",
      price: "From R1200",
      features: ["Latest Technology", "Multi-Brand Support", "Training Included"],
      badge: "Professional"
    }
  ];

  const productCategories = [
    {
      icon: Zap,
      name: "Sensors & Electronics",
      count: "50+ Products",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Package,
      name: "Engine Components", 
      count: "75+ Products",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      name: "Diagnostic Tools",
      count: "25+ Products", 
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      name: "Professional Parts",
      count: "100+ Products",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section ref={sectionRef} id="products" className="py-32 px-6 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/40 via-transparent to-orange-50/40"></div>

      {/* Modern Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(37,99,235,0.1)_50%,transparent_75%)] bg-[length:60px_60px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 stagger-item">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-100 to-blue-100 rounded-full px-8 py-4 mb-8 shadow-lg border border-orange-200/50">
            <span className="text-transparent bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text font-orbitron font-bold text-lg tracking-wider uppercase">
              Premium Products
            </span>
          </div>

          <div className="w-32 h-2 bg-gradient-to-r from-orange-500 via-orange-400 to-blue-500 mx-auto rounded-full mb-8 shadow-lg"></div>

          <p className="text-xl md:text-1xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
            Our company specializes in providing cutting-edge vehicle diagnosis and sensor solutions to help our clients optimize their vehicle perfomance and ensure maximum safety on road.
          </p>
        </div>

        {/* Featured Products */}
        <div className="mb-24">
          <h3 className="font-orbitron font-black text-3xl md:text-4xl text-gray-900 text-center mb-12 stagger-item">
            Featured Products
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <Card key={product.id} className="modern-card stagger-item group overflow-hidden border-0">
                <div className="relative">
                  {/* Product Image */}
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {product.badge}
                  </div>
                </div>

                <CardContent className="p-6">
                  <h4 className="font-orbitron font-bold text-xl text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                    {product.name}
                  </h4>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Product Categories */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="modern-card stagger-item group cursor-pointer border-0">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="text-white" size={28} />
                    </div>
                    
                    <h4 className="font-orbitron font-bold text-lg text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                      {category.name}
                    </h4>
                    
                    <p className="text-gray-600 font-medium">
                      {category.count}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center stagger-item">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="font-orbitron font-bold text-3xl md:text-4xl mb-6">
              Looking for Specific Parts?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Our expert team can source any automotive part or sensor you need. Contact us with your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
