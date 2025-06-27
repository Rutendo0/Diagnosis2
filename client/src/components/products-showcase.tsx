import { Zap, Settings, Star, Truck, Shield, Award, CheckCircle, ArrowRight, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ProductsShowcase() {
  const productCategories = [
    {
      title: "Engine Sensors",
      description: "High-precision sensors for optimal engine performance and diagnostics",
      products: [
        { name: "Oxygen Sensors", image: "/images/sensors.jpg" },
        { name: "MAP Sensors", image: "/images/sensors.jpg" },
        { name: "Temperature Sensors", image: "/images/sensors.jpg" },
        { name: "Pressure Sensors", image: "/images/sensors.jpg" }
      ],
      color: "from-orange-500 to-orange-600",
      icon: Zap
    },
    {
      title: "Automotive Parts",
      description: "Premium quality OEM and aftermarket parts for all vehicle makes",
      products: [
        { name: "Spark Plugs", image: "/images/parts.jpg" },
        { name: "Air Filters", image: "/images/parts.jpg" },
        { name: "Fuel Injectors", image: "/images/injector.jpg" },
        { name: "Brake Pads", image: "/images/parts.jpg" }
      ],
      color: "from-blue-500 to-blue-600",
      icon: Settings
    }
  ];

  const featuredProducts = [
    {
      name: "Professional Diagnostic Scanner",
      description: "Advanced OBD-II scanner with comprehensive vehicle coverage",
      image: "/images/image8.jpg",
      rating: 5,
      features: ["Multi-brand Support", "Live Data Stream", "Code Reading", "2-Year Warranty"],
      badge: "Best Seller"
    },
    {
      name: "Premium Sensor Kit",
      description: "Complete sensor replacement kit for modern vehicles",
      image: "/images/sensors.jpg",
      rating: 5,
      features: ["Universal Fit", "OEM Quality", "Easy Installation", "1-Year Warranty"],
      badge: "Popular"
    }
  ];

  return (
    <section id="products" className="py-32 px-6 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-transparent to-blue-50/30"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-r from-orange-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 left-10 w-56 h-56 bg-gradient-to-l from-blue-200/20 to-orange-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-100 to-blue-100 rounded-full px-8 py-4 mb-8 shadow-lg border border-orange-200/50">
            <span className="text-transparent bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text font-orbitron font-bold text-lg tracking-wider uppercase">
              Premium Products
            </span>
          </div>

          <h2 className="font-orbitron font-black text-5xl md:text-7xl lg:text-8xl mb-8 text-gray-900 leading-tight">
            <span className="block">Product</span>
            <span className="block bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
              Showcase
            </span>
          </h2>

          <div className="w-32 h-2 bg-gradient-to-r from-orange-500 via-orange-400 to-blue-500 mx-auto rounded-full mb-8 shadow-lg"></div>

          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
            Explore our comprehensive range of premium automotive sensors, parts, and diagnostic equipment
          </p>
        </div>

        {/* Featured Products */}
        <div className="mb-24">
          <h3 className="font-orbitron font-black text-3xl md:text-4xl text-gray-900 text-center mb-12">
            Featured Products
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="group relative bg-white border-0 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 overflow-hidden">
                {/* Product Badge */}
                <div className="absolute top-6 left-6 z-10">
                  <Badge className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 text-sm font-bold">
                    {product.badge}
                  </Badge>
                </div>

                {/* Product Image */}
                <div className="relative h-64 overflow-hidden rounded-t-3xl">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>

                <CardContent className="p-8">
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                    <span className="text-gray-600 ml-2">(4.9/5)</span>
                  </div>

                  <h4 className="font-orbitron font-black text-2xl text-gray-900 mb-3">
                    {product.name}
                  </h4>

                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex space-x-4">
                    <Button
                      onClick={() => window.open('tel:+263242770389', '_self')}
                      className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-orbitron font-bold py-3 rounded-2xl transition-all duration-300"
                    >
                      Get Quote
                    </Button>
                    <Button
                      onClick={() => window.open('https://wa.me/+263719974846', '_blank')}
                      variant="outline"
                      className="px-6 border-2 border-gray-300 hover:border-orange-500 hover:text-orange-600 rounded-2xl transition-all duration-300"
                    >
                      Contact Us
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Product Categories */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {productCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-2xl overflow-hidden border-0">
                {/* Category Header */}
                <div className="bg-white p-8 border-b border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-full transform translate-x-16 -translate-y-16"></div>
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                      <category.icon className="text-white" size={32} />
                    </div>
                    <h3 className="font-orbitron font-black text-3xl mb-3 text-gray-900">{category.title}</h3>
                    <p className="text-gray-600 text-lg">{category.description}</p>
                  </div>
                </div>

                {/* Products Grid */}
                <div className="p-8">
                  <div className="grid grid-cols-2 gap-6">
                    {category.products.map((product, idx) => (
                      <div key={idx} className="group cursor-pointer">
                        <div className="relative aspect-square rounded-2xl overflow-hidden mb-3">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/10 transition-colors duration-300"></div>
                        </div>
                        <h4 className="font-orbitron font-bold text-lg text-gray-900 mb-1 group-hover:text-orange-600 transition-colors duration-300">
                          {product.name}
                        </h4>
                      </div>
                    ))}
                  </div>

                  
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Call-to-Action Section */}
        <div className="relative">
          <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-blue-500/30 transform rotate-3"></div>
            </div>

            <div className="relative z-10">
              <Award className="mx-auto text-orange-400 mb-8" size={64} />

              <h3 className="font-orbitron font-black text-4xl md:text-5xl text-white mb-6">
                Need Custom Solutions?
              </h3>

              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                We are Zimbabwe's leading service provider in vehicle diagnosis and supply of automotive sensors. 
                Contact us for bulk pricing and professional installation services.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
                <div className="flex items-center justify-center space-x-3 bg-white/10 rounded-2xl p-4">
                  <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                  <span className="text-white font-medium">Bulk pricing available</span>
                </div>
                <div className="flex items-center justify-center space-x-3 bg-white/10 rounded-2xl p-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-white font-medium">Professional installation service</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-orbitron font-bold px-10 py-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  Request Quote
                </Button>

                <Button 
                  onClick={() => window.open('tel:+263242770389', '_self')}
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-orbitron font-bold px-10 py-6 rounded-2xl transition-all duration-300"
                >
                  <Phone className="mr-2" size={24} />
                  Call Expert
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}