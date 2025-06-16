import { Award, Users, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const teamPhotoImg = "/images/about.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-white/100 to-[var(--dark-bg)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 glassmorphism rounded-full px-6 py-2 mb-6">
              <div className="w-2 h-2 bg-[var(--brand-orange)] rounded-full animate-pulse"></div>
              <p className="text-[var(--brand-orange)] font-semibold text-sm tracking-wide">Auto Repair since 2017</p>
            </div>
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-8 ultra-premium-text text-glow">
              We are the leading service provider in vehicle diagnosis and supply of automotive sensors.
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              We have been specializing in commercial and private automotive troubleshooting, auto repairs, selling parts and accessories, with extensive experience serving clients across a market including the following:
            </p>
            <div className="space-y-4">
              {['Based on medium enterprises', 'Individual customers', 'Service companies', 'Other institutions'].map((item, index) => (
                <div key={index} className="flex items-center space-x-4 group animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="relative">
                    <div className="w-4 h-4 bg-[var(--brand-orange)] rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    <div className="absolute inset-0 w-4 h-4 bg-[var(--brand-orange)] rounded-full animate-ping opacity-25"></div>
                  </div>
                  <span className="text-white group-hover:text-[var(--brand-orange)] transition-colors duration-300 font-medium">{item}</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-[var(--brand-orange)]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

        {/* Mission and Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <Card className="premium-card border-none">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-blue)] flex items-center justify-center">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="ultra-premium-text font-bold text-2xl mb-4">Our Mission</h3>
              <p className="text-white leading-relaxed">
                Our mission is to provide effecient and effective to all automative challenges at the most convenient and pratical time with guaranteed customer satisfacrion.
              </p>
            </CardContent>
          </Card>

          <Card className="premium-card border-none">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-gold)] flex items-center justify-center">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="ultra-premium-text font-bold text-2xl mb-4">Our Vision</h3>
              <p className="text-white leading-relaxed">
                We envision to be the leading best one-stop shop in Zimbabwe that provides effecient servicesin automotive engineering,diagnosis and selling sensors & accessories.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
