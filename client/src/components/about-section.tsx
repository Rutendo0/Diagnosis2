import { Award, Users, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import teamPhotoImg from "@assets/475302653_8297967280306669_8088948475092022602_n_1749805999127.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-gray-900 to-[var(--dark-bg)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[var(--brand-orange)] font-semibold text-lg mb-4 italic">Auto Repair since 2017</p>
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-8 ultra-premium-text">
              We are the leading service provider in vehicle diagnosis and supply of automotive sensors.
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We have been specializing in commercial and private automotive troubleshooting, auto repairs, selling parts and accessories, with extensive experience serving clients across a market including the following:
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-[var(--brand-orange)] rounded-full"></div>
                <span className="text-gray-300">Based on medium enterprises</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-[var(--brand-orange)] rounded-full"></div>
                <span className="text-gray-300">Individual customers</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-[var(--brand-orange)] rounded-full"></div>
                <span className="text-gray-300">Service companies</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-[var(--brand-orange)] rounded-full"></div>
                <span className="text-gray-300">Other institutions</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-1 gap-6">
              <img 
                src={teamPhotoImg}
                alt="Diagnosis & Sensors team at automotive expo" 
                className="rounded-2xl shadow-2xl"
              />
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
              <p className="text-gray-300 leading-relaxed">
                Our mission is to lead excellence and innovation for Automotive business. We're committed to providing the highest quality services and products to keep vehicles running at peak performance.
              </p>
            </CardContent>
          </Card>

          <Card className="premium-card border-none">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-gold)] flex items-center justify-center">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="ultra-premium-text font-bold text-2xl mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                We envision to be the leading provider of innovative solutions that empowers automotive excellence. We're striving to set new benchmarks in quality and service.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
