import { Facebook, Mail, MessageSquare, Phone } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="py-16 px-6 bg-gradient-to-t from-gray-900 to-gray-800 relative overflow-hidden border-t border-gray-700">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-orange)]/5 via-transparent to-[var(--brand-blue)]/5 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          {/* Logo/Title */}
          <div className="font-orbitron font-bold text-3xl md:text-4xl gradient-text mb-6 tracking-tight">
            DIAGNOSIS & SENSORS
          </div>
          
          {/* Tagline */}
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            Premier automotive diagnostic solutions for the modern workshop
          </p>
          
          {/* Navigation Links */}
          <nav className="flex justify-center gap-6 mb-8 flex-wrap">
            {['home', 'services', 'products', 'about', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-white transition-colors duration-200 capitalize font-medium px-3 py-1 rounded-md hover:bg-gray-700/50"
              >
                {item}
              </button>
            ))}
          </nav>
          
         
          {/* Social/Contact Info */}
          <div className="flex justify-center gap-6 mb-8">
            <a href="mailto:info@diagnosis.com" className="text-gray-400 hover:text-orange-600 transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://wa.me/+263719974846" className="text-gray-400 hover:text-orange-600 transition-colors">
              <MessageSquare size={20} />
            </a>
            <a href="https://facebook.com/diagnosis" className="text-gray-400 hover:text-orange-600 transition-colors">
              <Facebook size={20} />
            </a>
            <div className="mt-4 md:mt-0">
              <p className="text-center md:text-right text-sm sm:text-base">
                Designed & Developed by{" "}
                <a 
                  href="https://niakazi.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-800 hover:text-orange-600 font-bold transition-colors text-base sm:text-lg"
                >
                  Niakazi Technology Solutions
                </a>
              </p>
            </div>
          </div>
          
          {/* Copyright and Credits */}
          <div className="text-gray-500 text-sm flex flex-col md:flex-row justify-center items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Diagnosis & Sensors. All rights reserved.</span>
            <span className="hidden md:block">|</span>
            <span>Engineered for Excellence</span>
            <span className="hidden md:block">|</span>   
          </div>
        </div>
      </div>
    </footer>
  );
}