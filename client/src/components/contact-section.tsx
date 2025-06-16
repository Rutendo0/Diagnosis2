import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email link
    const emailSubject = encodeURIComponent(formData.subject || 'Inquiry from Website');
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const emailLink = `mailto:sales@diagnosisandsensors.co.zw?subject=${emailSubject}&body=${emailBody}`;
    
    window.open(emailLink);
    
    toast({
      title: "Email client opened",
      description: "Your default email client should open with the message pre-filled.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-br from-[var(--dark-surface)] via-[var(--dark-card)] to-[var(--brand-blue)]/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-3 glassmorphism rounded-full px-8 py-4 neon-glow mb-8">
            <div className="w-3 h-3 bg-[var(--brand-orange)] rounded-full animate-pulse-slow shadow-lg shadow-orange-500/50"></div>
            <span className="text-[var(--brand-orange)] font-orbitron font-bold text-sm tracking-widest uppercase text-glow">
              Professional Support & Service
            </span>
          </div>
          <h2 className="font-orbitron font-black text-4xl md:text-6xl lg:text-8xl mb-6 md:mb-8 ultra-premium-text text-glow leading-tight">
            <span className="block">Connect</span>
            <span className="block text-gradient shimmer">With Us</span>
          </h2>
          <div className="w-32 h-2 mx-auto bg-gradient-to-r from-[var(--brand-orange)] via-[var(--brand-gold)] to-[var(--brand-blue)] rounded-full animate-glow mb-8"></div>
          <p className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-4xl mx-auto leading-relaxed font-light px-4">
            Ready to elevate your automotive diagnostic capabilities? 
            <span className="block mt-3 text-gradient font-semibold text-lg">
              Connect with Zimbabwe's leading automotive specialists today
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Harare Branch */}
            <Card className="glassmorphism rounded-2xl border-none bg-transparent hover:transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-[var(--brand-orange)] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-map-marker-alt text-2xl text-white"></i>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-[var(--brand-orange)]">Harare Branch</h3>
                <p className="text-white mb-2">03 Robert Mugabe Way</p>
                <div className="space-y-1 text-sm text-white">
                  <a href="tel:+263242770389" className="block hover:text-[var(--brand-orange)]">+263 242 77 0389</a>
                  <a href="https://wa.me/263772974846" className="block hover:text-[var(--brand-orange)]">+263 772 974 846</a>
                </div>
              </CardContent>
            </Card>

            {/* Bulawayo Branch */}
            <Card className="glassmorphism rounded-2xl border-none bg-transparent hover:transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-[var(--brand-blue)] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-map-marker-alt text-2xl text-white"></i>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-[var(--brand-blue)]">Bulawayo Branch</h3>
                <p className="text-white mb-2">114 George Silundika St.</p>
                <div className="space-y-1 text-sm text-white">
                  <a href="tel:+263292883884" className="block hover:text-[var(--brand-blue)]">+263 292 88 3884</a>
                  <a href="https://wa.me/263778633785" className="block hover:text-[var(--brand-blue)]">+263 779 298 117</a>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="glassmorphism rounded-2xl border-none bg-transparent hover:transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-gradient-to-r from-[var(--brand-gold)] to-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-clock text-2xl text-white"></i>
                </div>
                <h3 className="font-semibold text-lg mb-4 text-[var(--brand-gold)] text-center">Business Hours</h3>
                <div className="space-y-2 text-sm text-white">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="text-[var(--brand-orange)]">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="text-[var(--brand-orange)]">8:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="text-gray-400">Closed</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <div className="text-center">
                      <span className="text-green-400 font-semibold">• Emergency Services Available</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email & Social */}
            <Card className="glassmorphism rounded-2xl border-none bg-transparent hover:transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-blue)] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-envelope text-2xl text-white"></i>
                </div>
                <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                <a 
                  href="mailto:sales@diagnosisandsensors.co.zw" 
                  className="text-[var(--brand-orange)] hover:underline mb-4 block"
                >
                  sales@diagnosisandsensors.co.zw
                </a>
                <div className="flex space-x-4 justify-center">
                  <a 
                    href="https://www.facebook.com/p/Diagnosis-and-Sensors-100063639080600/" 
                    className="glassmorphism rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/diagnosisandsensorszw/" 
                    className="glassmorphism rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-6 h-6 text-orange-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.324-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.417-3.324c.876-.807 2.027-1.297 3.324-1.297s2.448.49 3.324 1.297c.927.876 1.417 2.027 1.417 3.324s-.49 2.448-1.417 3.324c-.876.807-2.027 1.297-3.324 1.297zm7.83-7.296c-.245 0-.49-.098-.653-.261-.163-.163-.261-.408-.261-.653s.098-.49.261-.653c.163-.163.408-.261.653-.261s.49.098.653.261c.163.163.261.408.261.653s-.098.49-.261.653c-.163.163-.408.261-.653.261zm-3.832 3.159c-.817 0-1.479-.662-1.479-1.479s.662-1.479 1.479-1.479 1.479.662 1.479 1.479-.662 1.479-1.479 1.479z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://wa.me/+263719974846" 
                    className="glassmorphism rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-6 h-6 text-green-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glassmorphism-premium rounded-3xl border-none bg-transparent hover:transform hover:scale-105 transition-all duration-500 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--brand-orange)] via-[var(--brand-gold)] to-[var(--brand-blue)]"></div>
              <CardContent className="p-10">
                <div className="text-center mb-8">
                  <h3 className="font-orbitron font-bold text-2xl ultra-premium-text mb-3">Send Us a Message</h3>
                  <p className="text-white/80 text-lg">Get professional automotive solutions tailored to your needs</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group">
                      <Label className="block text-sm font-orbitron font-semibold mb-3 text-[var(--brand-orange)] uppercase tracking-wider">Full Name</Label>
                      <Input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-[var(--dark-bg)]/80 border-2 border-white/20 rounded-xl px-6 py-4 text-white focus:border-[var(--brand-orange)] focus:outline-none transition-all duration-300 hover:border-[var(--brand-orange)]/50 group-hover:scale-105" 
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="group">
                      <Label className="block text-sm font-orbitron font-semibold mb-3 text-[var(--brand-orange)] uppercase tracking-wider">Email Address</Label>
                      <Input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-[var(--dark-bg)]/80 border-2 border-white/20 rounded-xl px-6 py-4 text-white focus:border-[var(--brand-orange)] focus:outline-none transition-all duration-300 hover:border-[var(--brand-orange)]/50 group-hover:scale-105" 
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="group">
                    <Label className="block text-sm font-orbitron font-semibold mb-3 text-[var(--brand-orange)] uppercase tracking-wider">Subject</Label>
                    <Input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-[var(--dark-bg)]/80 border-2 border-white/20 rounded-xl px-6 py-4 text-white focus:border-[var(--brand-orange)] focus:outline-none transition-all duration-300 hover:border-[var(--brand-orange)]/50 group-hover:scale-105" 
                      placeholder="What can we help you with?"
                    />
                  </div>
                  <div className="group">
                    <Label className="block text-sm font-orbitron font-semibold mb-3 text-[var(--brand-orange)] uppercase tracking-wider">Your Message</Label>
                    <Textarea 
                      rows={6} 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-[var(--dark-bg)]/80 border-2 border-white/20 rounded-xl px-6 py-4 text-white focus:border-[var(--brand-orange)] focus:outline-none transition-all duration-300 hover:border-[var(--brand-orange)]/50 resize-none group-hover:scale-105" 
                      placeholder="Tell us about your automotive diagnostic needs, vehicle concerns, or any questions you may have..."
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-[var(--brand-orange)] to-red-400 hover:from-red-500 hover:to-[var(--brand-orange)] py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h3 className="font-orbitron font-black text-4xl md:text-5xl ultra-premium-text mb-6">Frequently Asked Questions</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-blue)] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What types of vehicles do you service?",
                answer: "We service all types of vehicles including cars, trucks, SUVs, and hybrid vehicles. We specialize in diesel engines, hybrid systems, and modern automotive electronics."
              },
              {
                question: "Do you offer mobile diagnostic services?",
                answer: "Yes! We have a mobile diagnostic unit equipped with the latest equipment. We can come to your location for convenient on-site diagnostics and minor repairs."
              },
              {
                question: "What warranty do you provide on repairs?",
                answer: "We provide comprehensive warranties on our work and parts. Hybrid battery packs come with a 3-month warranty, and all our diagnostic and repair services are guaranteed."
              },
              {
                question: "How long does a typical diagnostic take?",
                answer: "Most standard diagnostics take 30-60 minutes. Complex issues may require additional time, but we'll always provide an estimated timeframe before starting any work."
              }
            ].map((faq, index) => (
              <Card key={index} className="glassmorphism border-none group hover:transform hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <h4 className="font-orbitron font-bold text-lg text-[var(--brand-orange)] mb-4 group-hover:text-[var(--brand-gold)] transition-colors">
                    {faq.question}
                  </h4>
                  <p className="text-white/90 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Customer Testimonial */}
        <div className="mt-20 text-center">
          <div className="glassmorphism rounded-3xl p-12 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[var(--brand-orange)] via-[var(--brand-gold)] to-[var(--brand-blue)]"></div>
            <div className="text-6xl text-[var(--brand-orange)] mb-6">"</div>
            <blockquote className="text-2xl text-white/95 font-light leading-relaxed mb-8 italic">
              Exceptional service and expertise! The team at Diagnosis & Sensors solved a complex hybrid battery issue that other shops couldn't diagnose. Professional, reliable, and honest. Highly recommended for any automotive diagnostic needs.
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="text-right">
                <div className="font-orbitron font-bold text-[var(--brand-orange)]">Sarah M.</div>
                <div className="text-sm text-white/70">Toyota Aqua Owner, Harare</div>
              </div>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[var(--brand-gold)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
