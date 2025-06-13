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
      <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 glassmorphism rounded-full px-8 py-4 transition-all duration-300 ${isScrolled ? 'bg-opacity-95' : ''}`}>
        <div className="flex items-center space-x-8">
          <Logo />
          <div className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection('home')} className="hover:text-[var(--brand-orange)] transition-colors duration-300">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="hover:text-[var(--brand-orange)] transition-colors duration-300">
              Services
            </button>
            <button onClick={() => scrollToSection('products')} className="hover:text-[var(--brand-orange)] transition-colors duration-300">
              Products
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-[var(--brand-orange)] transition-colors duration-300">
              About
            </button>
            <Link href="/blog" className="hover:text-[var(--brand-orange)] transition-colors duration-300">
              Blog
            </Link>
            <button onClick={() => scrollToSection('contact')} className="hover:text-[var(--brand-orange)] transition-colors duration-300">
              Contact
            </button>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 glassmorphism rounded-2xl p-6 w-64">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-left hover:text-[var(--brand-orange)] transition-colors duration-300">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left hover:text-[var(--brand-orange)] transition-colors duration-300">
                Services
              </button>
              <button onClick={() => scrollToSection('products')} className="text-left hover:text-[var(--brand-orange)] transition-colors duration-300">
                Products
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left hover:text-[var(--brand-orange)] transition-colors duration-300">
                About
              </button>
              <Link href="/blog" className="text-left hover:text-[var(--brand-orange)] transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>
                Blog
              </Link>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-[var(--brand-orange)] transition-colors duration-300">
                Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
