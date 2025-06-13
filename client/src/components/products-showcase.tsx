import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ProductsShowcase() {
  return (
    <section id="products" className="py-24 px-6 bg-[var(--dark-surface)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-5xl md:text-6xl mb-6 text-white">Premium Products</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Cutting-edge diagnostic equipment and sensors engineered for the modern automotive industry
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Card className="glassmorphism rounded-2xl border-l-4 border-[var(--brand-orange)] bg-transparent border-none">
              <CardContent className="p-8">
                <h3 className="font-orbitron font-bold text-2xl mb-4 text-[var(--brand-orange)]">
                  Advanced Diagnostic Scanners
                </h3>
                <p className="text-gray-300 mb-4">
                  Professional-grade OBD scanners with multi-brand compatibility and real-time data streaming capabilities.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center">
                    <Check className="text-[var(--brand-orange)] mr-3" size={16} />
                    Multi-protocol support
                  </li>
                  <li className="flex items-center">
                    <Check className="text-[var(--brand-orange)] mr-3" size={16} />
                    Live data streaming
                  </li>
                  <li className="flex items-center">
                    <Check className="text-[var(--brand-orange)] mr-3" size={16} />
                    Comprehensive coverage
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glassmorphism rounded-2xl border-l-4 border-[var(--brand-blue)] bg-transparent border-none">
              <CardContent className="p-8">
                <h3 className="font-orbitron font-bold text-2xl mb-4 text-[var(--brand-blue)]">
                  Precision Sensors
                </h3>
                <p className="text-gray-300 mb-4">
                  High-quality automotive sensors for all major vehicle systems with guaranteed accuracy and durability.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center">
                    <Check className="text-[var(--brand-blue)] mr-3" size={16} />
                    OEM quality standards
                  </li>
                  <li className="flex items-center">
                    <Check className="text-[var(--brand-blue)] mr-3" size={16} />
                    Extended warranty
                  </li>
                  <li className="flex items-center">
                    <Check className="text-[var(--brand-blue)] mr-3" size={16} />
                    Wide compatibility
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Advanced automotive diagnostic equipment" 
                className="w-full h-96 object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark-bg)]/60 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[var(--brand-orange)] to-red-500 rounded-2xl p-6 shadow-xl animate-float">
              <div className="text-center">
                <div className="font-orbitron font-bold text-2xl">500+</div>
                <div className="text-sm opacity-90">Products Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
