import { Award, Users, Globe } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: Award,
      title: "Industry Leadership",
      description: "Recognized as the premier provider of automotive diagnostic solutions",
      color: "brand-orange"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified technicians with extensive automotive expertise",
      color: "brand-blue"
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "International quality standards and certifications",
      color: "brand-orange"
    }
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-orbitron font-bold text-5xl md:text-6xl mb-8 gradient-text">
              About Our Excellence
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              With over a decade of experience in automotive diagnostics, Diagnosis & Sensors stands at the forefront of automotive technology solutions in Zimbabwe and beyond.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`bg-[var(--${feature.color})] rounded-full p-3`}>
                    <feature.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1486754735734-325b5831c3ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern automotive workshop" 
                className="w-full h-96 object-cover" 
              />
            </div>
            <div className="absolute -top-6 -left-6 bg-gradient-to-r from-[var(--brand-blue)] to-blue-600 rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="font-orbitron font-bold text-2xl">10+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
