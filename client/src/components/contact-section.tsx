
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Support",
      details: [
        { label: "Harare", value: "0242 770 389" },
        { label: "Mobile", value: "+263 772 974 846" }
      ],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Phone,
      title: "Bulawayo Office",
      details: [
        { label: "Office", value: "0292 883 884" },
        { label: "Mobile", value: "+263 779 298 117" }
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: MapPin,
      title: "Visit Our Locations",
      details: [
        { label: "Harare", value: "Stand 3 Robert Mugabe Str" },
        { label: "Bulawayo", value: "Stand 14 George Silundika Str" }
      ],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Mail,
      title: "Email Support",
      details: [
        { label: "Email", value: "info@diagnosisandsensors.co.zw" },
      ],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        { label: "Mon - Saturday", value: "8:00 AM - 5:00 PM" },
        { label: "Sunday", value: "8:00 AM - 2:00 PM" }
      ],
      color: "from-blue-500 to-blue-600"
    }
  ];

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/40 via-transparent to-blue-50/40"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-200 to-transparent transform skew-y-6"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-200 to-transparent transform -skew-y-3"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-orange-100 to-blue-100 rounded-full px-8 py-4 mb-8 shadow-lg border border-orange-200/50">
            <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full animate-pulse"></div>
            <span className="text-transparent bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text font-orbitron font-bold text-lg tracking-wider uppercase">
              Professional Support & Service
            </span>
          </div>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
            Ready to elevate your automotive diagnostic capabilities? 
          </p>
          <h3 className="font-orbitron font-black text-3xl md:text-4xl text-gray-900 mb-6">
                Get In Touch
              </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="group bg-white border-0 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="text-white" size={28} />
                    </div>
                    
                    <h4 className="font-orbitron font-bold text-lg text-gray-900 mb-3">
                      {info.title}
                    </h4>
                    
                    <div className="space-y-2">
                      {info.details.map((detail, idx) => (
                        <div key={idx} className="flex justify-between items-center">
                          <span className="text-gray-600 text-sm">{detail.label}:</span>
                          <span className="text-gray-900 font-medium text-sm">{detail.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-blue-500/30 transform rotate-2"></div>
              </div>
              
              <div className="relative z-10">
                <h4 className="font-orbitron font-black text-2xl mb-4">
                  Need Immediate Assistance?
                </h4>
                <p className="text-gray-300 mb-6">
                  Our expert technicians are standing by to help with urgent diagnostic needs
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => window.open('tel:0242770389', '_self')}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-orbitron font-bold py-3 px-6 rounded-xl transition-all duration-300"
                  >
                    <Phone className="mr-2" size={20} />
                    Call Now
                  </Button>
                  
                  <Button 
                    onClick={() => window.open('mailto:info@diagnosisandsensors.co.zw', '_self')}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-orbitron font-bold py-3 px-6 rounded-xl transition-all duration-300"
                  >
                    <Mail className="mr-2" size={20} />
                    Email Us
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-0 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-orange-400 to-blue-500"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <Award className="mx-auto text-orange-500 mb-4" size={48} />
                <h3 className="font-orbitron font-black text-3xl text-gray-900 mb-3">
                  Request Consultation
                </h3>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <Input 
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <Input 
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input 
                    type="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <Input 
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vehicle Information
                  </label>
                  <Input 
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="Make, Model, Year (e.g., Toyota Camry 2020)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Required *
                  </label>
                  <Textarea 
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 min-h-[120px]"
                    placeholder="Describe the service or diagnostic needs for your vehicle..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-orbitron font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Send className="mr-3" size={20} />
                  Send Message
                </Button>

                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <CheckCircle className="text-green-500" size={16} />
                  <span>We'll respond within 24 hours</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
