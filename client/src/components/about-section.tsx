import { Award, Users, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const teamPhotoImg = "/images/about.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-white/100 to-[var(--dark-bg)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 glassmorphism rounded-full px-6 py-3 mb-8 neon-glow">
              <div className="w-3 h-3 bg-[var(--brand-orange)] rounded-full animate-pulse"></div>
              <p className="text-[var(--brand-orange)] font-orbitron font-bold text-sm tracking-wide uppercase">Automotive Excellence Since 2017</p>
            </div>
            <h2 className="font-orbitron font-black text-4xl md:text-6xl mb-8 ultra-premium-text text-glow leading-tight">
              Zimbabwe's Leading Automotive Diagnostic Specialists
            </h2>
            <p className="text-xl text-white/95 mb-8 leading-relaxed font-light">
              We are pioneers in automotive technology, specializing in advanced vehicle diagnostics, precision repairs, and premium automotive solutions. Our expertise spans across commercial and private automotive sectors, delivering unmatched service quality.
            </p>
            
            {/* Enhanced Statistics */}
            <div className="grid grid-cols-3 gap-6 mb-8 p-6 glassmorphism rounded-2xl">
              <div className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-orbitron font-black text-[var(--brand-orange)] mb-2 group-hover:text-[var(--brand-gold)] transition-colors">7+</div>
                <div className="text-xs text-white/80 uppercase tracking-wider font-semibold">Years Experience</div>
              </div>
              <div className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-orbitron font-black text-[var(--brand-orange)] mb-2 group-hover:text-[var(--brand-gold)] transition-colors">1000+</div>
                <div className="text-xs text-white/80 uppercase tracking-wider font-semibold">Happy Clients</div>
              </div>
              <div className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-orbitron font-black text-[var(--brand-orange)] mb-2 group-hover:text-[var(--brand-gold)] transition-colors">24/7</div>
                <div className="text-xs text-white/80 uppercase tracking-wider font-semibold">Support</div>
              </div>
            </div>
            
            <div className="space-y-4">
              {[
                'Medium & Large Enterprises', 
                'Individual Vehicle Owners', 
                'Auto Service Companies', 
                'Government Institutions'
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4 group animate-fade-in hover:transform hover:translate-x-4 transition-all duration-300" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="relative flex-shrink-0">
                    <div className="w-5 h-5 bg-gradient-to-r from-[var(--brand-orange)] to-orange-500 rounded-full group-hover:scale-125 transition-transform duration-300 shadow-lg"></div>
                    <div className="absolute inset-0 w-5 h-5 bg-[var(--brand-orange)] rounded-full animate-ping opacity-25"></div>
                  </div>
                  <span className="text-white text-lg group-hover:text-[var(--brand-orange)] transition-colors duration-300 font-medium">{item}</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-[var(--brand-orange)]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-blue)] rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <img 
                src={teamPhotoImg}
                alt="Diagnosis & Sensors team at automotive expo" 
                className="relative rounded-2xl shadow-2xl w-full h-auto group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Mission and Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          <Card className="premium-card border-none group hover:transform hover:scale-105 transition-all duration-500">
            <CardContent className="p-10 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--brand-orange)] to-orange-500"></div>
              <div className="w-20 h-20 mx-auto mb-8 rounded-3xl bg-gradient-to-r from-[var(--brand-orange)] via-orange-500 to-red-500 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <Target className="text-white group-hover:animate-pulse" size={36} />
              </div>
              <h3 className="ultra-premium-text font-orbitron font-black text-3xl mb-6 group-hover:text-[var(--brand-gold)] transition-colors duration-300">Our Mission</h3>
              <p className="text-white/95 leading-relaxed text-lg font-light">
                To provide efficient and effective solutions to all automotive challenges at the most convenient and practical time, ensuring guaranteed customer satisfaction through cutting-edge technology and expert service.
              </p>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--brand-orange)]/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            </CardContent>
          </Card>

          <Card className="premium-card border-none group hover:transform hover:scale-105 transition-all duration-500">
            <CardContent className="p-10 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--brand-blue)] to-blue-500"></div>
              <div className="w-20 h-20 mx-auto mb-8 rounded-3xl bg-gradient-to-r from-[var(--brand-blue)] via-blue-500 to-[var(--brand-gold)] flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <Award className="text-white group-hover:animate-pulse" size={36} />
              </div>
              <h3 className="ultra-premium-text font-orbitron font-black text-3xl mb-6 group-hover:text-[var(--brand-gold)] transition-colors duration-300">Our Vision</h3>
              <p className="text-white/95 leading-relaxed text-lg font-light">
                To be Zimbabwe's leading automotive diagnostic and sensor technology company, providing innovative solutions in automotive engineering, diagnosis, and premium automotive accessories through world-class expertise.
              </p>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--brand-blue)]/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
