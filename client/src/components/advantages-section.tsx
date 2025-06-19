import { Shield, Wrench, DollarSign, Award, Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AdvantagesSection() {
  const advantages = [
    {
      title: "Free Trade Appraisal",
      description: "Take advantage of our free trade appraisal offer",
      icon: Shield,
      color: "brand-orange"
    },
    {
      title: "Trained Technicians",
      description: "All our mechanics are trained and certified",
      icon: Wrench,
      color: "brand-blue"
    },
    {
      title: "Low Price Guarantee",
      description: "We provide customers the best pricing possible",
      icon: DollarSign,
      color: "brand-orange"
    },
    {
      title: "Quality Guaranteed",
      description: "Auto repair services done right the very first time",
      icon: Award,
      color: "brand-blue"
    },
    {
      title: "A Life-Time Warranty",
      description: "Never worry about the vehicle's performance",
      icon: Shield,
      color: "brand-orange"
    },
    {
      title: "Quick Service Times",
      description: "We're opened from early morning till late evening",
      icon: Clock,
      color: "brand-blue"
    }
  ];

  return (
    <section id="advantages" className="py-24 px-6 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-orange)]/2 via-transparent to-[var(--brand-blue)]/2"></div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[var(--brand-orange)] font-semibold text-lg mb-4 italic">Why Choose Us</p>
          <h2 className="font-orbitron font-bold text-5xl md:text-6xl mb-6 text-[var(--brand-orange)]">Our Advantages</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card key={index} className="bg-white rounded-2xl border-none hover:transform hover:scale-105 transition-all duration-300 group shadow-xl">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center ${
                  advantage.color === 'brand-orange' 
                    ? 'bg-[var(--brand-orange)] text-white' 
                    : 'bg-[var(--brand-blue)] text-white'
                }`}>
                  <advantage.icon size={32} />
                </div>
                <h3 className="font-bold text-xl mb-4 text-gray-800">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}