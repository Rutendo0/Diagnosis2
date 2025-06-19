
import { Award, Users, Target, CheckCircle, Star, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-transparent via-white/80 to-transparent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-orange)]/2 via-transparent to-[var(--brand-blue)]/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg border border-[var(--brand-orange)]/20">
            <div className="w-3 h-3 bg-[var(--brand-orange)] rounded-full animate-pulse"></div>
            <span className="text-gray-300 font-orbitron font-bold text-sm tracking-wide uppercase">About Our Company</span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium mb-8">
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
                  <div key={index} className="flex items-center space-x-4 group hover:transform hover:translate-x-2 transition-all duration-300">
                    <div className="relative flex-shrink-0">
                      <div className="w-5 h-5 bg-gradient-to-r from-[var(--brand-orange)] to-orange-500 rounded-full shadow-lg"></div>
                      <div className="absolute inset-0 w-5 h-5 bg-[var(--brand-orange)] rounded-full animate-ping opacity-25"></div>
                    </div>
                    <span className="text-gray-700 text-base md:text-lg group-hover:text-[var(--brand-orange)] transition-colors duration-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-blue)] rounded-3xl blur opacity-20"></div>
              <img 
                src="/images/about.jpg"
                alt="Diagnosis & Sensors team showcasing automotive expertise" 
                className="relative rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/images/vehicle.jpg';
                }}
              />
            </div>
          </div>
        </div>
        {/* <-- This closing div properly closes the main content grid */}

        {/* Mission and Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-12 md:mb-16">
          <Card className="bg-gradient-to-br from-[var(--brand-orange)] to-orange-600 border-none text-white transition-all duration-200">
            <CardContent className="p-6 md:p-8 text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Target className="text-white" size={28} />
              </div>
              <h3 className="font-orbitron font-bold text-xl md:text-2xl mb-3 md:mb-4">Our Mission</h3>
              <p className="text-white/95 leading-relaxed text-sm md:text-base">
                To provide efficient and effective solutions to all automotive challenges at the most convenient and practical time, ensuring guaranteed customer satisfaction through cutting-edge technology and expert service.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[var(--brand-blue)] to-blue-600 border-none text-white hover:scale-105 transition-transform duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="font-orbitron font-bold text-2xl mb-4">Our Vision</h3>
              <p className="text-white/95 leading-relaxed">
                To be Zimbabwe's leading automotive diagnostic and sensor technology company, providing innovative solutions in automotive engineering, diagnosis, and premium automotive accessories through world-class expertise.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values Section */}
        <div className="text-center mb-12">
          <h3 className="font-orbitron font-black text-3xl md:text-4xl text-gray-900 mb-4">Our Core Values</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-blue)] mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { icon: Award, title: 'Excellence', description: 'Delivering superior automotive solutions with precision and expertise' },
            { icon: Users, title: 'Integrity', description: 'Building trust through honest service and transparent communication' },
            { icon: Target, title: 'Innovation', description: 'Embracing cutting-edge technology for advanced automotive diagnostics' },
            { icon: CheckCircle, title: 'Reliability', description: 'Consistent quality service you can depend on every time' }
          ].map((value, index) => (
            <Card key={index} className="bg-white border border-gray-200 hover:border-gray-300 transition-all duration-200 shadow-sm hover:shadow-md">
              <CardContent className="p-4 md:p-6 text-center">
                <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-3 md:mb-4 rounded-xl bg-gray-100 flex items-center justify-center">
                  <value.icon className="text-gray-600" size={20} />
                </div>
                <h4 className="font-orbitron font-bold text-base md:text-lg text-gray-900 mb-2 md:mb-3">{value.title}</h4>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Leadership Team Section */}
        <div className="mt-16 text-center">
          <h3 className="font-orbitron font-black text-3xl md:text-4xl text-gray-900 mb-4">Leadership Team</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-blue)] mx-auto mb-8"></div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-gray-200">
            <h4 className="font-orbitron font-bold text-2xl text-[var(--brand-orange)] mb-6">Expert Leadership</h4>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto">
              Our leadership team combines decades of automotive industry experience with a passion for technological innovation. 
              With deep expertise in vehicle diagnostics, hybrid systems, and automotive electronics, we guide our company's mission 
              to deliver exceptional service to every customer.
            </p>
          </div>
        </div>
    </section>
  );
}
