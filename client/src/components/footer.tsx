export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="py-12 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="font-orbitron font-bold text-3xl gradient-text mb-4">DIAGNOSIS & SENSORS</div>
          <p className="text-white mb-6">Premier automotive diagnostic solutions for the modern workshop</p>
          <div className="flex justify-center space-x-6 mb-6 flex-wrap">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-gray-400 hover:text-[var(--brand-orange)] transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-white hover:text-[var(--brand-orange)] transition-colors duration-300"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('products')} 
              className="text-gray-400 hover:text-[var(--brand-orange)] transition-colors duration-300"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-400 hover:text-[var(--brand-orange)] transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-400 hover:text-[var(--brand-orange)] transition-colors duration-300"
            >
              Contact
            </button>
          </div>
          <div className="text-gray-500 text-sm">
            &copy; 2024 Diagnosis & Sensors. All rights reserved. | Engineered for Excellence
          </div>
        </div>
      </div>
    </footer>
  );
}
