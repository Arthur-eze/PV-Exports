/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'services', label: 'Services & Weaves' },
    { id: 'gallery', label: 'Product Lookbook' },
    { id: 'fabrics', label: 'Premium Fabrics' },
    { id: 'testimonials', label: 'Global Trust' },
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-dark/95 backdrop-blur-md border-b border-brand-medium/10 py-3 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo Monogram */}
        <button
          id="logo-button"
          onClick={() => handleItemClick('hero')}
          className="flex items-baseline space-x-2 group text-left cursor-pointer focus:outline-none"
        >
          <span className="text-3xl font-serif font-bold tracking-tighter italic text-brand-medium group-hover:text-[#5C7C89] transition-colors duration-300">PV</span>
          <span className="text-xs uppercase tracking-[0.4em] text-brand-light font-bold">Exports</span>
        </button>
 
        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`nav-link-${item.id}`}
              onClick={() => handleItemClick(item.id)}
              className={`text-[10px] tracking-[0.25em] uppercase transition-all duration-300 relative py-1 hover:text-brand-medium cursor-pointer ${
                activeSection === item.id
                  ? 'text-brand-medium font-bold'
                  : 'text-slate-600 hover:text-brand-medium'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-brand-medium rounded-sm" />
              )}
            </button>
          ))}
          <button
            id="header-cta"
            onClick={() => handleItemClick('contact')}
            className="bg-brand-medium hover:bg-brand-light text-white font-bold py-2.5 px-6 rounded-sm text-[10px] tracking-[0.2em] uppercase transition-all duration-300 border border-brand-medium hover:border-brand-light active:scale-95 shadow-md flex items-center gap-2 cursor-pointer"
          >
            <Mail className="w-3 h-3" />
            Inquire Now
          </button>
        </nav>
 
        {/* Mobile Navigation Trigger & Mobile CTA */}
        <div className="md:hidden flex items-center space-x-3">
          <button
            id="mobile-header-cta-top"
            onClick={() => handleItemClick('contact')}
            className="bg-brand-medium hover:bg-brand-light text-white font-bold py-2 px-3.5 rounded-none text-[8px] sm:text-[9px] tracking-[0.15em] uppercase transition-all duration-300 border border-brand-medium hover:border-brand-light active:scale-95 shadow-sm flex items-center gap-1.5 cursor-pointer"
          >
            <Mail className="w-2.5 h-2.5" />
            Inquire Now
          </button>
          
          <button
            id="mobile-nav-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-850 hover:text-brand-medium p-1 focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Overlay) */}
      <div
        id="mobile-drawer"
        className={`fixed inset-0 top-[65px] z-45 bg-white backdrop-blur-lg border-t border-brand-medium/10 transition-all duration-300 md:hidden flex flex-col justify-between py-10 px-8 ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="flex flex-col space-y-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`mobile-link-${item.id}`}
              onClick={() => handleItemClick(item.id)}
              className={`text-left text-lg py-2 border-b border-brand-medium/10 tracking-wide transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-brand-medium pl-2 border-l-2 border-brand-medium font-bold'
                  : 'text-slate-600'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          <div className="bg-brand-medium/5 border border-brand-medium/10 rounded-lg p-4 text-center">
            <span className="block text-xs uppercase tracking-widest text-brand-medium mb-1 font-semibold">
              Corporate Headquarters
            </span>
            <span className="block text-sm font-bold text-slate-900 mb-2">
              Hyderabad, India
            </span>
            <a
              href="mailto:Ezekiel.J2008@gmail.com"
              className="inline-flex items-center gap-1.5 text-xs text-brand-medium hover:text-brand-light transition-colors font-medium"
            >
              <Mail className="w-3.5 h-3.5" />
              Ezekiel.J2008@gmail.com
            </a>
          </div>

          <button
            id="mobile-header-cta"
            onClick={() => handleItemClick('contact')}
            className="w-full bg-brand-medium text-white font-medium py-3 rounded-sm text-sm tracking-wider uppercase text-center cursor-pointer hover:bg-brand-light transition-colors"
          >
            Request Full Catalog
          </button>
        </div>
      </div>
    </header>
  );
}
