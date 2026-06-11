/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Sparkles, Globe, CheckCircle2, Leaf, Shield, Award, Landmark } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesMarquee from './components/ServicesMarquee';
import GallerySection from './components/GallerySection';
import PremiumFabrics from './components/PremiumFabrics';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

import { companyValues } from './data';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [inquiryProduct, setInquiryProduct] = useState<{ title: string; category: string; specification: string } | null>(null);

  // Map representation of icons used in values to prevent runtime import complications
  const valueIcons: Record<string, typeof Sparkles> = {
    Sparkles: Sparkles,
    Globe: Globe,
    CheckCircle2: CheckCircle2,
    Leaf: Leaf,
  };

  // Automated scroll detection to highlight nav items in real-time
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'gallery', 'fabrics', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const handleInquireProduct = (product: { title: string; category: string; specification: string }) => {
    setInquiryProduct(product);
    handleNavigate('contact');
  };

  return (
    <div className="min-h-screen bg-brand-dark text-slate-900 flex flex-col font-sans select-none antialiased">
      {/* Sticky Header */}
      <Header activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Sections Body */}
      <main className="flex-grow">
        
        {/* HERO INTRO */}
        <Hero
          onLearnMore={() => handleNavigate('gallery')}
          onContact={() => handleNavigate('contact')}
        />

        {/* CORE VALUES & EXPORT PIPELINE SECTION */}
        <section className="py-20 bg-[#F5F4F0] border-t border-b border-brand-medium/10 px-6 md:px-12 relative animate-fade-in">
          {/* Glowing mesh */}
          <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-brand-medium/5 blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            
            {/* Split Sizing info panel */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
              
              <div className="lg:col-span-5 text-left space-y-4">
                <span className="text-[10px] uppercase font-mono tracking-widest text-brand-medium font-bold">
                  Architectural Fabric Standard
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-slate-900 font-medium leading-tight">
                  Woven For Durability. <br />
                  <span className="italic text-brand-medium">Refined For Hospitality.</span>
                </h3>
              </div>
              
              <div className="lg:col-span-7 text-left">
                <p className="text-slate-600 font-light text-sm leading-relaxed">
                  Australian boutique hotels maintain some of the highest global regulatory metrics for environmental wash safety and fabric wear life. PV Exports bridges the gap between cost optimization and five-star quality indices by deploying custom structural weaving frameworks directly on our advanced looms.
                </p>
              </div>

            </div>

            {/* Core Values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {companyValues.map((value, index) => {
                const IconComponent = valueIcons[value.iconName] || Shield;
                return (
                  <div
                    key={index}
                    id={`value-card-${index}`}
                    className="bg-white border border-brand-medium/10 p-6 rounded-sm text-left hover:border-brand-medium/30 hover:translate-y-[-2px] transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md"
                  >
                    <div className="space-y-4">
                      {/* Icon bubble */}
                      <div className="w-10 h-10 rounded-sm bg-brand-medium/5 border border-brand-medium/10 flex items-center justify-center text-brand-medium shadow-inner">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      
                      <h4 className="font-serif text-base text-slate-900 font-bold tracking-tight">
                        {value.title}
                      </h4>
                      
                      <p className="text-xs text-slate-600 font-light leading-normal">
                        {value.description}
                      </p>
                    </div>

                    {/* Simple detail footer marker */}
                    <div className="mt-6 pt-3 border-t border-brand-medium/5 text-[9px] uppercase tracking-widest text-brand-medium font-mono font-semibold">
                      PV Certified Standard
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Micro Industrial Stats Banner inside values */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 mt-16 border-t border-brand-medium/10 text-center">
              <div>
                <span className="block text-3xl md:text-4xl font-serif font-bold text-brand-medium mb-1">
                  100+
                </span>
                <span className="block text-[10px] uppercase font-mono tracking-widest text-[#5C7C89] font-bold">
                  Wash Cycles Certified
                </span>
              </div>
              <div>
                <span className="block text-3xl md:text-4xl font-serif font-bold text-brand-medium mb-1">
                  100%
                </span>
                <span className="block text-[10px] uppercase font-mono tracking-widest text-[#5C7C89] font-bold">
                  Long-Staple Cotton
                </span>
              </div>
              <div>
                <span className="block text-3xl md:text-4xl font-serif font-bold text-brand-medium mb-1">
                  Sydney
                </span>
                <span className="block text-[10px] uppercase font-mono tracking-widest text-[#5C7C89] font-bold">
                  Customs Agent Available
                </span>
              </div>
              <div>
                <span className="block text-3xl md:text-4xl font-serif font-bold text-brand-medium mb-1">
                  Zero
                </span>
                <span className="block text-[10px] uppercase font-mono tracking-widest text-[#5C7C89] font-bold">
                  Plastic Packing Weave
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* SERVICES MARQUEE (Dual-Row infinite scroll) */}
        <ServicesMarquee />

        {/* PRODUCT LOOKBOOK (Gallery) */}
        <GallerySection onInquire={handleInquireProduct} />

        {/* PREMIUM FABRICS SHOWCASE */}
        <PremiumFabrics onSelectFabric={(name) => handleInquireProduct({ title: name, category: 'spa', specification: 'Fabric Swatch Request' })} />

        {/* GLOBAL TRUST TESTIMONIALS */}
        <Testimonials />

        {/* INQUIRY CONTACT FORM */}
        <ContactSection inquiryProduct={inquiryProduct} />

      </main>

      {/* FLOATING ACTION CHAT ASSIST */}
      <WhatsAppButton />

      {/* FOOTER DETAILS */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
