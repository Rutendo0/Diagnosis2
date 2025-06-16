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
          <div className="inline-flex items-center space-x-3 glassmorphism rounded-full px-8 py-4  mb-8">
            <span className="text-white font-orbitron font-bold text-sm tracking-widest uppercase">
              Explore Our
            </span>
            <span className="text-[var(--brand-orange)]  font-bold text-sm tracking-widest uppercase text-glow">
              Premium Products & Solutions
            </span>
          </div>
          <h2 className=" font-black text-6xl md:text-8xl mb-8 ultra-premium-text text-glow leading-tight">
            <span className="block">Advanced</span>
            <span className="block text-gradient shimmer">Products</span>
          </h2>
          <div className="w-32 h-2 mx-auto bg-gradient-to-r from-[var(--brand-orange)] via-[var(--brand-gold)] to-[var(--brand-blue)] rounded-full animate-glow shadow-2xl mb-8"></div>
          <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed font-light">
            Professional automotive diagnostic equipment and high-quality sensors for comprehensive vehicle maintenance and repair
            <span className="block mt-3 text-gradient font-semibold text-lg">
              Engineered for precision, built for performance
            </span>
          </p>
        </div>

        {/* Product Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-r from-[var(--brand-orange)] to-red-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
              <Battery className="text-white group-hover:animate-pulse" size={36} />
            </div>
            <h3 className="font-orbitron font-bold text-2xl text-white mb-3 group-hover:text-[var(--brand-orange)] transition-colors">Hybrid Batteries</h3>
            <p className="text-white/80 text-lg">Complete battery solutions for hybrid vehicles</p>
          </div>
          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-r from-[var(--brand-blue)] to-blue-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
              <Zap className="text-white group-hover:animate-pulse" size={36} />
            </div>
            <h3 className="font-orbitron font-bold text-2xl text-white mb-3 group-hover:text-[var(--brand-blue)] transition-colors">Cooling Systems</h3>
            <p className="text-white/80 text-lg">Advanced liquid cooling technology</p>
          </div>
          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-r from-[var(--brand-gold)] to-yellow-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
              <Check className="text-white group-hover:animate-pulse" size={36} />
            </div>
            <h3 className="font-orbitron font-bold text-2xl text-white mb-3 group-hover:text-[var(--brand-gold)] transition-colors">Quality Assured</h3>
            <p className="text-white/80 text-lg">3 months warranty on all products</p>
          </div>
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
            <div className="rounded-2xl overflow-hidden">
              <img 
                src={hybridBatteryPackImg}
                alt="Complete battery packs for Toyota Aqua and Honda Fit Hybrid" 
                className="w-full h-64 object-cover" 
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden">
                <img 
                  src={hybridBatteryImg}
                  alt="Hybrid battery systems" 
                  className="w-full h-32 object-cover" 
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <img 
                  src={liquidCoolingImg}
                  alt="Liquid battery cooling systems" 
                  className="w-full h-32 object-cover" 
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[var(--brand-orange)] to-orange-500 rounded-2xl p-6 animate-float">
              <div className="text-center">
                <div className="font-orbitron font-bold text-2xl">200+</div>
                <div className="text-sm opacity-90">Products Available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Inquiry Section */}
        <div className="mt-20 text-center">
          <div className="glassmorphism rounded-3xl p-12 max-w-5xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[var(--brand-orange)] via-[var(--brand-gold)] to-[var(--brand-blue)]"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h3 className="font-orbitron font-black text-3xl md:text-4xl ultra-premium-text mb-6">
                  Need Custom Solutions?
                </h3>
                <p className="text-xl text-white/90 mb-6 leading-relaxed">
                  Our extensive inventory includes specialized parts for various vehicle models. 
                  Contact us for custom orders and bulk purchases.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[var(--brand-orange)] rounded-full animate-pulse"></div>
                    <span className="text-white/90">Custom battery pack configurations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[var(--brand-orange)] rounded-full animate-pulse"></div>
                    <span className="text-white/90">Bulk pricing available</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[var(--brand-orange)] rounded-full animate-pulse"></div>
                    <span className="text-white/90">Professional installation service</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-[var(--dark-bg)]/50 rounded-2xl p-6 border border-[var(--brand-orange)]/30">
                  <h4 className="font-orbitron font-bold text-xl text-[var(--brand-orange)] mb-4">Quick Quote Request</h4>
                  <div className="space-y-4">
                    <a 
                      href="https://wa.me/+263719974846?text=Hi! I need a quote for hybrid battery products."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      <span>WhatsApp Quote</span>
                    </a>
                    <a 
                      href="mailto:sales@diagnosisandsensors.co.zw?subject=Product Quote Request"
                      className="w-full inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-[var(--brand-blue)] to-blue-600 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
                    >
                      <i className="fas fa-envelope"></i>
                      <span>Email Quote</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}