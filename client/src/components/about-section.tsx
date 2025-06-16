
import { Award, Users, Target, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-white/5 to-[var(--dark-bg)] min-h-screen relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 glassmorphism rounded-full px-6 py-3 mb-8 neon-glow">
              <div className="w-3 h-3 bg-[var(--brand-orange)] rounded-full animate-pulse"></div>
              <p className="text-[var(--brand-orange)] font-orbitron font-bold text-sm tracking-wide uppercase">About Our Company</p>
            </div>
            
            <h2 className="font-orbitron font-black text-4xl md:text-6xl mb-8 ultra-premium-text text-glow leading-tight">
              We are the leading service provider in vehicle diagnosis and supply of automotive sensors.
            </h2>
            
            <p className="text-xl text-white/95 mb-8 leading-relaxed font-light">
              We have been specializing in commercial and private automotive troubleshooting, auto repairs, selling parts and accessories, with extensive experience serving clients across a market including the following:
            </p>

            {/* Client Categories */}
            <div className="space-y-4 mb-8">
              {[
                'Based on medium enterprises', 
                'Individual customers', 
                'Service companies', 
                'Other institutions'
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
          </div>

          <div className="relative animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-blue)] rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <img 
                src="/images/about.jpg"
                alt="Diagnosis & Sensors team at automotive expo showcasing our expertise" 
                className="relative rounded-2xl shadow-2xl w-full h-auto group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/images/vehicle.jpg';
                }}
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

        {/* Enhanced Company Values Section */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h3 className="font-orbitron font-black text-4xl md:text-5xl ultra-premium-text mb-6">Our Core Values</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-blue)] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'Excellence', description: 'Delivering superior automotive solutions with precision and expertise' },
              { icon: Users, title: 'Integrity', description: 'Building trust through honest service and transparent communication' },
              { icon: Target, title: 'Innovation', description: 'Embracing cutting-edge technology for advanced automotive diagnostics' },
              { icon: CheckCircle, title: 'Reliability', description: 'Consistent quality service you can depend on every time' }
            ].map((value, index) => (
              <Card key={index} className="glassmorphism border-none group hover:transform hover:scale-105 transition-all duration-500">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-blue)] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <value.icon className="text-white group-hover:animate-pulse" size={28} />
                  </div>
                  <h4 className="font-orbitron font-bold text-xl text-white mb-4 group-hover:text-[var(--brand-orange)] transition-colors">{value.title}</h4>
                  <p className="text-white/80 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership Team Section */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h3 className="font-orbitron font-black text-4xl md:text-5xl ultra-premium-text mb-6">Leadership Team</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-blue)] mx-auto mb-6"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Meet the experienced professionals driving innovation in automotive diagnostics across Zimbabwe
            </p>
          </div>
          <div className="glassmorphism rounded-3xl p-12 text-center">
            <div className="max-w-4xl mx-auto">
              <h4 className="font-orbitron font-bold text-2xl text-[var(--brand-orange)] mb-6">Expert Leadership</h4>
              <p className="text-lg text-white/90 leading-relaxed mb-8">
                Our leadership team combines decades of automotive industry experience with a passion for technological innovation. 
                With deep expertise in vehicle diagnostics, hybrid systems, and automotive electronics, we guide our company's mission 
                to deliver exceptional service to every customer.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-orbitron font-black text-[var(--brand-orange)] mb-2">15+</div>
                  <div className="text-sm text-white/80 uppercase tracking-wider">Years Combined Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-orbitron font-black text-[var(--brand-orange)] mb-2">100+</div>
                  <div className="text-sm text-white/80 uppercase tracking-wider">Training Certifications</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-orbitron font-black text-[var(--brand-orange)] mb-2">2</div>
                  <div className="text-sm text-white/80 uppercase tracking-wider">Branch Locations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
