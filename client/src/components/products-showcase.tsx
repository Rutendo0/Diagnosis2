import { Check, Battery, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import hybridBatteryPackImg from "@assets/495601431_8925306940906030_5804913198261990529_n_1749805657557.jpg";
import hybridBatteryImg from "@assets/486284443_1252677416863549_7166789577646969114_n_1749805657556.jpg";
import liquidCoolingImg from "@assets/486261126_1252681640196460_4688732123092460616_n_1749805657556.jpg";

export default function ProductsShowcase() {
  return (
    <section id="products" className="py-24 px-6 bg-[var(--dark-surface)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-5xl md:text-6xl mb-6 ultra-premium-text">Our Products & Services</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional automotive diagnostic equipment and high-quality sensors for comprehensive vehicle maintenance and repair
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Card className="premium-card border-l-4 border-[var(--brand-orange)] bg-transparent border-none">
              <CardContent className="p-8">
                <h3 className="ultra-premium-text font-orbitron font-bold text-2xl mb-4 flex items-center">
                  <Battery className="mr-3" size={24} />
                  Hybrid Battery Packs
                </h3>
                <p className="text-gray-300 mb-4">
                  Complete battery packs for Toyota Aqua and Honda Fit Hybrid vehicles with 3 months warranty on 2012-2016 cells.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center">
                    <Check className="text-[var(--brand-orange)] mr-3" size={16} />
                    Low mileage batteries
                  </li>
                  <li className="flex items-center">
                    <Check className="text-[var(--brand-orange)] mr-3" size={16} />
                    3 months warranty
                  </li>
                  <li className="flex items-center">
                    <Check className="text-[var(--brand-orange)] mr-3" size={16} />
                    Trade-in options available
                  </li>
                  <li className="flex items-center">
                    <Check className="text-[var(--brand-orange)] mr-3" size={16} />
                    Professional installation - $120
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="premium-card border-l-4 border-[var(--brand-blue)] bg-transparent border-none">
              <CardContent className="p-8">
                <h3 className="ultra-premium-text font-orbitron font-bold text-2xl mb-4 flex items-center">
                  <Zap className="mr-3" size={24} />
                  Liquid Battery Cooling Systems
                </h3>
                <p className="text-gray-300 mb-4">
                  Specialized liquid battery cooling systems for hybrid vehicles ensuring optimal battery performance and longevity.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center">
                    <Check className="text-[var(--brand-blue)] mr-3" size={16} />
                    Hybrid vehicle cooling
                  </li>
                  <li className="flex items-center">
                    <Check className="text-[var(--brand-blue)] mr-3" size={16} />
                    Battery temperature management
                  </li>
                  <li className="flex items-center">
                    <Check className="text-[var(--brand-blue)] mr-3" size={16} />
                    Performance optimization
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="relative space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={hybridBatteryPackImg}
                alt="Complete battery packs for Toyota Aqua and Honda Fit Hybrid" 
                className="w-full h-64 object-cover" 
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={hybridBatteryImg}
                  alt="Hybrid battery systems" 
                  className="w-full h-32 object-cover" 
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={liquidCoolingImg}
                  alt="Liquid battery cooling systems" 
                  className="w-full h-32 object-cover" 
                />
              </div>
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
