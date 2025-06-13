import FloatingNavigation from "@/components/floating-navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import ProductsShowcase from "@/components/products-showcase";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--dark-bg)] text-white">
      <FloatingNavigation />
      <HeroSection />
      <ServicesSection />
      <ProductsShowcase />
      <AboutSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
