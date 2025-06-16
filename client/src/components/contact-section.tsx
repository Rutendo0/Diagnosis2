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
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-6">
            <span className="text-[var(--brand-orange)] font-orbitron font-semibold text-lg tracking-wide">Contact Us</span>
          </div>
          <h2 className="font-orbitron font-bold text-5xl md:text-6xl mb-6 ultra-premium-text text-glow">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-blue)] mx-auto mb-6 animate-glow"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Ready to elevate your automotive diagnostic capabilities? 
            <span className="text-gradient font-semibold"> Connect with our experts today.</span>
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
                    className="glassmorphism rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/diagnosisandsensorszw/" 
                    className="glassmorphism rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110 hover:shadow-lg hover:shadow-pink-500/30"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-6 h-6 text-orange-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.324-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.417-3.324c.876-.807 2.027-1.297 3.324-1.297s2.448.49 3.324 1.297c.927.876 1.417 2.027 1.417 3.324s-.49 2.448-1.417 3.324c-.876.807-2.027 1.297-3.324 1.297zm7.83-7.296c-.245 0-.49-.098-.653-.261-.163-.163-.261-.408-.261-.653s.098-.49.261-.653c.163-.163.408-.261.653-.261s.49.098.653.261c.163.163.261.408.261.653s-.098.49-.261.653c-.163.163-.408.261-.653.261zm-3.832 3.159c-.817 0-1.479-.662-1.479-1.479s.662-1.479 1.479-1.479 1.479.662 1.479 1.479-.662 1.479-1.479 1.479z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://wa.me/+263719974846" 
                    className="glassmorphism rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110 hover:shadow-lg hover:shadow-green-500/30"
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

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glassmorphism rounded-2xl border-none bg-transparent">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label className="block text-sm font-medium mb-2 text-white">Name</Label>
                      <Input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-[var(--dark-bg)] border border-gray-400 rounded-lg px-4 py-3 text-white focus:border-[var(--brand-orange)] focus:outline-none transition-colors duration-300" 
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div>
                      <Label className="block text-sm font-medium mb-2 text-white">Email</Label>
                      <Input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-[var(--dark-bg)] border border-gray-400 rounded-lg px-4 py-3 text-white focus:border-[var(--brand-orange)] focus:outline-none transition-colors duration-300" 
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label className="block text-sm font-medium mb-2 text-white">Subject</Label>
                    <Input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-[var(--dark-bg)] border border-gray-400 rounded-lg px-4 py-3 text-white focus:border-[var(--brand-orange)] focus:outline-none transition-colors duration-300" 
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <Label className="block text-sm font-medium mb-2 text-white">Message</Label>
                    <Textarea 
                      rows={6} 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-[var(--dark-bg)] border border-gray-400 rounded-lg px-4 py-3 text-white focus:border-[var(--brand-orange)] focus:outline-none transition-colors duration-300 resize-none" 
                      placeholder="Tell us about your diagnostic needs..."
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-[var(--brand-orange)] to-red-400 hover:from-red-500 hover:to-[var(--brand-orange)] py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
