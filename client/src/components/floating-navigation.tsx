import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";
import Logo from "@/components/logo";

export default function FloatingNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[var(--dark-bg)]/95 backdrop-blur-xl border-b border-white/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-12">
              <Logo className="h-10 w-auto" />
              <div className="hidden lg:flex items-center space-x-8">
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="relative font-orbitron font-medium text-white hover:text-white transition-all duration-300 group"
                >
                  <span className="relative z-10">Home</span>
                  <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-blue)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </button>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="relative font-orbitron font-medium text-white/ hover:text-white transition-all duration-300 group"
                >
                  <span className="relative z-10">Services</span>
                  <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-blue)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </button>
                <button 
                  onClick={() => scrollToSection('products')} 
                  className="relative font-orbitron font-medium text-white hover:text-white transition-all duration-300 group"
                >
                  <span className="relative z-10">Products</span>
                  <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-blue)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </button>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="relative font-orbitron font-medium text-white hover:text-white transition-all duration-300 group"
                >
                  <span className="relative z-10">About</span>
                  <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-blue)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </button>
                <Link 
                  href="/blog" 
                  className="relative font-orbitron font-medium text-white hover:text-white transition-all duration-300 group"
                >
                  <span className="relative z-10">Blog</span>
                  <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-blue)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </Link>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="relative font-orbitron font-medium text-white hover:text-white transition-all duration-300 group"
                >
                  <span className="relative z-10">Contact</span>
                  <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-blue)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </button>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center space-x-4">
              <button 
                onClick={() => window.open('tel:+263242770389', '_self')}
                className="luxury-button px-6 py-2 text-sm font-orbitron font-semibold"
              >
                Call Now
              </button>
            </div>

            <div className="lg:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white/90 hover:text-white transition-colors"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-80 bg-[var(--dark-bg)]/95 backdrop-blur-xl border-l border-white/10">
            <div className="p-8">
              <div className="flex justify-between items-center mb-12">
                <Logo className="h-8 w-auto" />
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="space-y-8">
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="block w-full text-left font-orbitron text-lg font-medium text-white hover:text-white transition-all duration-300 py-3 border-b border-white/10 hover:border-[var(--brand-orange)]/50"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="block w-full text-left font-orbitron text-lg font-medium text-white hover:text-white transition-all duration-300 py-3 border-b border-white/10 hover:border-[var(--brand-orange)]/50"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('products')} 
                  className="block w-full text-left font-orbitron text-lg font-medium text-white hover:text-white transition-all duration-300 py-3 border-b border-white/10 hover:border-[var(--brand-orange)]/50"
                >
                  Products
                </button>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="block w-full text-left font-orbitron text-lg font-medium text-white hover:text-white transition-all duration-300 py-3 border-b border-white/10 hover:border-[var(--brand-orange)]/50"
                >
                  About
                </button>
                <Link 
                  href="/blog" 
                  className="block w-full text-left font-orbitron text-lg font-medium text-white hover:text-white transition-all duration-300 py-3 border-b border-white/10 hover:border-[var(--brand-orange)]/50" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="block w-full text-left font-orbitron text-lg font-medium text-white hover:text-white transition-all duration-300 py-3 border-b border-white/10 hover:border-[var(--brand-orange)]/50"
                >
                  Contact
                </button>
                
                <div className="pt-8">
                  <button 
                    onClick={() => {
                      window.open('tel:+263242770389', '_self');
                      setIsMobileMenuOpen(false);
                    }}
                    className="luxury-button w-full px-6 py-4 text-base font-orbitron font-semibold"
                  >
                    Call Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
