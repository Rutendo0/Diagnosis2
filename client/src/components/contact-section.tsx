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
    <section id="contact" className="py-24 px-6 bg-[var(--dark-surface)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-5xl md:text-6xl mb-6 text-white">Get In Touch</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Ready to elevate your automotive diagnostic capabilities? Connect with our experts today.
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
                <p className="text-gray-300 mb-2">03 Robert Mugabe Way</p>
                <div className="space-y-1 text-sm text-gray-400">
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
                <div className="space-y-1 text-sm text-gray-400">
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
                    className="bg-blue-600 hover:bg-blue-700 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f text-white text-sm"></i>
                  </a>
                  <a 
                    href="https://www.instagram.com/diagnosisandsensorszw/" 
                    className="bg-pink-600 hover:bg-pink-700 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram text-white text-sm"></i>
                  </a>
                  <a 
                    href="https://wa.me/263719974846" 
                    className="bg-green-500 hover:bg-green-600 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-whatsapp text-white text-sm"></i>
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
                      <Label className="block text-sm font-medium mb-2 text-gray-300">Name</Label>
                      <Input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-[var(--dark-bg)] border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[var(--brand-orange)] focus:outline-none transition-colors duration-300" 
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div>
                      <Label className="block text-sm font-medium mb-2 text-gray-300">Email</Label>
                      <Input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-[var(--dark-bg)] border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[var(--brand-orange)] focus:outline-none transition-colors duration-300" 
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label className="block text-sm font-medium mb-2 text-gray-300">Subject</Label>
                    <Input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-[var(--dark-bg)] border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[var(--brand-orange)] focus:outline-none transition-colors duration-300" 
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <Label className="block text-sm font-medium mb-2 text-gray-300">Message</Label>
                    <Textarea 
                      rows={6} 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-[var(--dark-bg)] border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[var(--brand-orange)] focus:outline-none transition-colors duration-300 resize-none" 
                      placeholder="Tell us about your diagnostic needs..."
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-[var(--brand-orange)] to-red-500 hover:from-red-500 hover:to-[var(--brand-orange)] py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
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
