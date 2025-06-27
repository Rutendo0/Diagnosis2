
import { Award, Users, Target, CheckCircle, Star, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-transparent via-white/80 to-transparent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-orange)]/2 via-transparent to-[var(--brand-blue)]/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-16 md:mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-orange-100 to-blue-100 rounded-full px-8 py-4 mb-8 shadow-lg border border-orange-200/50">
            <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full animate-pulse"></div>
            <span className="text-transparent bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text font-orbitron font-bold text-lg tracking-wider uppercase">
              About Our Company
            </span>
          </div>
          
          <h2 className="font-orbitron font-black text-5xl md:text-7xl lg:text-8xl mb-8 text-gray-900 leading-tight">
            <span className="block">Who</span>
            <span className="block bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
              We Are
            </span>
          </h2>
          
          <div className="w-32 h-2 bg-gradient-to-r from-orange-500 via-orange-400 to-blue-500 mx-auto rounded-full mb-8 shadow-lg"></div>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
            Your trusted partner in automotive excellence and diagnostic innovation
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium mb-8">
                Diagnosis and Sensors is a specialist in motor vehicle diagnosis, troubleshooting, auto repairs, selling parts and accessories.We have experience in servicing client across a number of including the following:
              </p>

              {/* Client Categories */}
              <div className="space-y-4 mb-8">
                {[
                  'Small to medium sized enterprises', 
                  'Individual customers', 
                  'Colleges and Universities', 
                  'Other tradesman'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 group hover:transform hover:translate-x-2 transition-all duration-300">
                    <div className="w-5 h-5 bg-[var(--brand-orange)] rounded-full shadow-md flex-shrink-0"></div>
                    <span className="text-gray-700 text-base md:text-lg group-hover:text-[var(--brand-orange)] transition-colors duration-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden shadow-2xl border border-gray-200/50">
              <div className="aspect-[4/3] p-6">
                <img 
                  src="/images/about.jpg"
                  alt="Diagnosis & Sensors team showcasing automotive expertise" 
                  className="w-full h-full object-cover rounded-2xl filter brightness-105 contrast-110 shadow-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/vehicle.jpg';
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 via-transparent to-blue-500/5 rounded-3xl"></div>
            </div>
          </div>
        </div>
        {/* <-- This closing div properly closes the main content grid */}
        </div>

        {/* Enhanced Mission and Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20">
          <Card className="group bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 border-none text-white hover:shadow-2xl hover:scale-105 transition-all duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10"></div>
            <CardContent className="p-8 md:p-10 text-center relative z-10">
              <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Target className="text-white" size={36} />
              </div>
              <h3 className="font-orbitron font-black text-2xl md:text-3xl mb-6 text-shadow">Our Mission</h3>
              <p className="text-white/95 leading-relaxed text-base md:text-lg font-light">
                To provide efficient and effective solutions to all automotive challenges at the most convenient and practical time, ensuring guaranteed customer satisfaction through innovation and excellence.
              </p>
            </CardContent>
          </Card>

          <Card className="group bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 border-none text-white hover:shadow-2xl hover:scale-105 transition-all duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10"></div>
            <CardContent className="p-8 md:p-10 text-center relative z-10">
              <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Award className="text-white" size={36} />
              </div>
              <h3 className="font-orbitron font-black text-2xl md:text-3xl mb-6 text-shadow">Our Vision</h3>
              <p className="text-white/95 leading-relaxed text-base md:text-lg font-light">
                To be Zimbabwe's leading automotive diagnostic and sensor specialist, providing comprehensive one-stop solutions in automotive engineering, diagnosis, and premium accessories.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values Section */}
        <div className="text-center mb-12">
          <h3 className="font-orbitron font-black text-3xl md:text-4xl text-gray-900 mb-4">Our Core Values</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-blue)] mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            { icon: Award, title: 'Excellence', description: 'Delivering superior automotive solutions with precision and expertise', color: 'from-orange-500 to-orange-600' },
            { icon: Users, title: 'Integrity', description: 'Building trust through honest service and transparent communication', color: 'from-blue-500 to-blue-600' },
            { icon: Target, title: 'Innovation', description: 'Embracing cutting-edge technology for advanced automotive diagnostics', color: 'from-orange-500 to-orange-600' },
            { icon: CheckCircle, title: 'Reliability', description: 'Consistent quality service you can depend on every time', color: 'from-blue-500 to-blue-600' }
          ].map((value, index) => (
            <Card key={index} className="group bg-white border-2 border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-500 hover:scale-105 rounded-2xl overflow-hidden">
              <CardContent className="p-6 md:p-8 text-center">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="text-white" size={28} />
                </div>
                <h4 className="font-orbitron font-black text-lg md:text-xl text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">{value.title}</h4>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light">{value.description}</p>
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
