import { Check, Battery, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const hybridBatteryPackImg = "/images/battery3.jpg";
const hybridBatteryImg = "/images/battery2.jpg";
const liquidCoolingImg = "/images/battery.jpg";

export default function ProductsShowcase() {
  return (
    <section id="products" className="py-32 px-6 bg-gradient-to-br from-[var(--dark-bg)] via-[var(--dark-surface)] to-[var(--dark-card)] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-orange)]/5 via-transparent to-[var(--brand-blue)]/5"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--brand-orange)] to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-3 glassmorphism rounded-full px-8 py-4 neon-glow mb-8">
            <div className="w-3 h-3 bg-[var(--brand-orange)] rounded-full animate-pulse-slow shadow-lg shadow-orange-500/50"></div>
            <span className="text-[var(--brand-orange)] font-orbitron font-bold text-sm tracking-widest uppercase text-glow">
              Premium Products & Solutions
            </span>
          </div>
          <h2 className="font-orbitron font-black text-6xl md:text-8xl mb-8 ultra-premium-text text-glow leading-tight">
            <span className="block">Advanced</span>
            <span className="block text-gradient shimmer">Products</span>
          </h2>
          <div className="w-32 h-2 mx-auto bg-gradient-to-r from-[var(--brand-orange)] via-[var(--brand-gold)] to-[var(--brand-blue)] rounded-full animate-glow shadow-2xl mb-8"></div>
          <p className="text-xl md:text-2xl text-white/95 max-w-4xl mx-auto leading-relaxed font-light">
            Professional automotive diagnostic equipment and high-quality sensors for comprehensive vehicle maintenance and repair
            <span className="block mt-3 text-gradient font-semibold text-lg">
              Engineered for precision, built for performance
            </span>
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
                <p className="text-white mb-4">
                  Complete battery packs for Toyota Aqua and Honda Fit Hybrid vehicles with 3 months warranty on 2012-2016 cells.
                </p>
                <ul className="space-y-2 text-white">
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
                <p className="text-white mb-4">
                  Specialized liquid battery cooling systems for hybrid vehicles ensuring optimal battery performance and longevity.
                </p>
                <ul className="space-y-2 text-white">
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
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[var(--brand-orange)] to-orange-500 rounded-2xl p-6 shadow-xl animate-float">
              <div className="text-center">
                <div className="font-orbitron font-bold text-2xl">200+</div>
                <div className="text-sm opacity-90">Products Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
