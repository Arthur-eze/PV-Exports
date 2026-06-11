/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Maximize2, ShieldCheck, SlidersHorizontal, Sparkles, ChevronRight, ChevronDown } from 'lucide-react';
import { galleryItems } from '../data';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  onInquire?: (product: { title: string; category: string; specification: string }) => void;
}

export default function GallerySection({ onInquire }: GallerySectionProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'bed' | 'bath' | 'dining' | 'curtains' | 'cushions'>('all');
  const [selectedProduct, setSelectedProduct] = useState<GalleryItem | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const scrollTabsRight = () => {
    const container = document.getElementById('lookbook-tabs-container');
    if (container) {
      container.scrollBy({ left: 160, behavior: 'smooth' });
    }
  };

  const tabs: { id: 'all' | 'bed' | 'bath' | 'dining' | 'curtains' | 'cushions'; label: string }[] = [
    { id: 'all', label: 'All Premium Linens' },
    { id: 'bed', label: 'Bed Linen' },
    { id: 'bath', label: 'Bath Linens' },
    { id: 'curtains', label: 'Luxury Curtains' },
    { id: 'dining', label: 'F&B Dining' },
    { id: 'cushions', label: 'Cushions & Pillows' },
  ];

  const filteredItems = galleryItems.filter(
    (item) => activeTab === 'all' || item.category === activeTab
  );

  return (
    <section
      id="gallery"
      className="py-24 bg-white px-6 md:px-12 border-t border-brand-medium/10"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="text-left space-y-4 max-w-2xl">
            <span className="inline-block text-[10px] uppercase tracking-[0.4em] text-brand-medium font-bold border border-brand-medium/20 py-2 px-5 bg-brand-medium/5">
              Five-Star Lookbook
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-slate-900 font-medium tracking-tight italic">
              Aesthetic Bed & Bath Showcase
            </h2>
            <p className="text-slate-650 font-light text-xs sm:text-sm leading-relaxed">
              Every thread count and towel weight in our collection has been optimized through rigorous weave ratios. Filter our catalog below to inspect active production runs supplied to global hotels and Australian suites.
            </p>
          </div>

          {/* Filtering Console with Scroll Arrow & Dropdown */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
            <div className="flex items-center gap-2 w-full lg:w-auto">
              <SlidersHorizontal className="w-4 h-4 text-brand-medium hidden md:block mr-1" aria-hidden="true" />
              
              {/* Scrollable tab wrapper */}
              <div className="relative flex items-center flex-grow overflow-hidden max-w-[calc(100vw-120px)] sm:max-w-[340px] md:max-w-[460px] lg:max-w-[480px]">
                <div
                  id="lookbook-tabs-container"
                  className="flex gap-2 overflow-x-auto pb-1 scrollbar-none w-full scroll-smooth"
                  role="tablist"
                  aria-label="Product categories"
                >
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      id={`tab-btn-${tab.id}`}
                      onClick={() => setActiveTab(tab.id)}
                      role="tab"
                      aria-selected={activeTab === tab.id}
                      className={`py-3 px-5 rounded-none text-[10px] tracking-[0.2em] uppercase transition-all duration-300 flex-shrink-0 cursor-pointer ${
                        activeTab === tab.id
                          ? 'bg-brand-medium text-white font-bold shadow-md border border-brand-medium'
                          : 'bg-[#F5F4F0] text-slate-700 border border-brand-medium/10 hover:border-brand-medium hover:text-brand-medium'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Arrow Scroll indicator overlay */}
                <div className="absolute right-0 top-0 bottom-1 flex items-center px-1.5 bg-gradient-to-l from-white via-white/85 to-transparent pointer-events-none">
                  <div className="w-3" />
                </div>
              </div>

              {/* Right Scroll Arrow button */}
              <button
                type="button"
                onClick={scrollTabsRight}
                className="w-9 h-9 rounded-full bg-[#F5F4F0] border border-brand-medium/10 hover:border-brand-medium text-brand-medium hover:bg-brand-medium hover:text-white transition-all flex items-center justify-center cursor-pointer shrink-0 shadow-sm"
                title="Scroll categories"
                aria-label="Show more categories"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Dropdown Selector */}
            <div className="relative shrink-0 z-10">
              <button
                id="categories-dropdown-btn"
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full sm:w-auto py-3 px-4 bg-[#F5F4F0] text-slate-700 border border-brand-medium/10 hover:border-brand-medium hover:bg-brand-medium/5 hover:text-brand-medium transition-all duration-300 flex items-center justify-between sm:justify-start gap-2.5 text-[10px] tracking-[0.2em] uppercase font-bold cursor-pointer font-sans"
                aria-expanded={dropdownOpen}
                aria-haspopup="listbox"
              >
                <span>Category Menu</span>
                <ChevronDown className="w-3.5 h-3.5 text-brand-medium" />
              </button>
              
              {dropdownOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-10 cursor-default" 
                    onClick={() => setDropdownOpen(false)} 
                  />
                  <div 
                    className="absolute right-0 mt-2 w-52 bg-white border border-brand-medium/20 shadow-xl z-20 py-2 animate-fade-in text-left rounded-sm"
                    role="listbox"
                  >
                    <div className="px-3 pb-1 mb-1 border-b border-brand-medium/10">
                      <span className="text-[9px] font-bold text-slate-400 tracking-wider uppercase font-mono">Jump To Category:</span>
                    </div>
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        role="option"
                        aria-selected={activeTab === tab.id}
                        onClick={() => {
                          setActiveTab(tab.id);
                          setDropdownOpen(false);
                          
                          const btn = document.getElementById(`tab-btn-${tab.id}`);
                          if (btn) {
                            btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                          }
                        }}
                        className={`w-full text-left px-4 py-2.5 text-[10px] tracking-widest uppercase transition-colors hover:bg-brand-medium/5 font-sans ${
                          activeTab === tab.id 
                            ? 'text-brand-medium font-bold bg-brand-medium/5 border-l-2 border-brand-medium pl-3.5' 
                            : 'text-slate-700 hover:text-brand-medium'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              className="group bg-[#F5F4F0] border border-brand-medium/10 rounded-sm overflow-hidden flex flex-col justify-between hover:border-brand-medium/40 hover:shadow-lg transition-all duration-500 hover:translate-y-[-4px]"
            >
              {/* Product Card Image Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-brand-dark/10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Lightbox Trigger Icon */}
                <button
                  id={`maximize-btn-${item.id}`}
                  onClick={() => setSelectedProduct(item)}
                  className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/95 border border-brand-medium/10 flex items-center justify-center text-slate-750 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md hover:bg-brand-medium hover:text-white cursor-pointer"
                  aria-label="View specifications details"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Product Info Block */}
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2 text-left">
                  <div className="flex items-center justify-between gap-1.5 flex-wrap">
                    <span className="block text-[9px] uppercase tracking-widest text-brand-medium font-bold font-mono">
                      Category: {item.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[9px] uppercase tracking-wider font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/40 px-2 py-0.5 rounded-xs inline-flex items-center gap-1 select-none">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Custom Orders Welcomed
                    </span>
                  </div>
                  <h3 className="font-serif text-base sm:text-lg text-slate-900 font-bold group-hover:text-brand-medium transition-colors duration-300 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-light leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-medium/10 flex items-center justify-between">
                  <span className="text-[10px] text-slate-500 font-mono font-medium flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-medium" /> Tested Quality
                  </span>
                  <button
                    id={`view-specs-btn-${item.id}`}
                    onClick={() => setSelectedProduct(item)}
                    className="text-xs text-brand-medium hover:text-brand-light font-bold uppercase tracking-wider transition-colors duration-300 flex items-center gap-1 cursor-pointer"
                  >
                    View Specs
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Weaving & Bespoke Orders Announcement Footer */}
        <div className="mt-16 bg-[#F5F4F0] border border-brand-medium/15 p-6 sm:p-10 rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-left">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-mono text-[9px] uppercase bg-brand-medium text-white px-2 py-0.5 rounded-sm font-bold tracking-wider">
                Mill Integration Spec
              </span>
              <span className="text-brand-medium text-xs font-bold font-sans flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Bespoke Custom Ordering Available
              </span>
            </div>
            <h3 className="text-slate-900 font-serif text-lg sm:text-xl font-bold">
              Tailored Sizes, Custom Weave Patterns, & Custom Dye Matching
            </h3>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Every item in our collection is manufactured at our weaving hubs. We fully support tailored draping lengths/drops for curtains, custom thread counts, and strict commercial dye matching. Contact our commercial desk to fulfill unique boutique requirements.
            </p>
          </div>
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="w-full md:w-auto bg-transparent hover:bg-brand-medium hover:text-white text-brand-medium border border-brand-medium font-bold py-3 px-6 rounded-none text-[10px] tracking-[0.2em] uppercase transition-all duration-300 flex-shrink-0 cursor-pointer text-center"
          >
            Request customised order
          </button>
        </div>

        {/* Empty state callback */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 border border-dashed border-brand-medium/10 rounded-md">
            <span className="block text-slate-650 font-light mb-2">No products in this active filter run.</span>
            <button
              onClick={() => setActiveTab('all')}
              className="text-brand-medium text-xs uppercase tracking-wider underline hover:text-brand-light font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Dynamic Product Lightbox Spec Modal */}
      {selectedProduct && (
        <div
          id="product-spec-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          {/* Blackout overlay */}
          <div
            id="product-modal-backdrop"
            onClick={() => setSelectedProduct(null)}
            className="absolute inset-0 bg-slate-950/40 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Inner Container */}
          <div className="bg-white border border-brand-medium/20 w-full max-w-3xl relative rounded-md shadow-2xl z-10 overflow-hidden text-left flex flex-col md:flex-row max-h-[90vh]">
            
            {/* Modal Image Display */}
            <div className="md:w-1/2 relative min-h-[220px] md:min-h-full">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full h-full object-cover absolute inset-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-white via-white/10 to-transparent md:from-slate-900 md:via-slate-900/10" />
              
              <div className="absolute top-4 left-4 bg-slate-950/90 border border-brand-medium/20 text-[10px] text-white font-mono tracking-widest px-3 py-1 rounded-sm uppercase font-semibold">
                {selectedProduct.specification}
              </div>
            </div>

            {/* Modal Specifications Matrix */}
            <div className="p-8 md:w-1/2 flex flex-col justify-between overflow-y-auto bg-white">
              <div className="space-y-6">
                
                {/* Header specs info */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-brand-medium font-bold">
                    PV Luxury Lookbook Spec Sheet
                  </span>
                  <button
                    id="product-modal-close"
                    onClick={() => setSelectedProduct(null)}
                    className="text-slate-500 hover:text-slate-900 p-1.5 rounded-full hover:bg-slate-100 transition-colors cursor-pointer text-xs font-bold font-sans"
                  >
                    Close
                  </button>
                </div>

                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-slate-900 font-bold mb-3">
                    {selectedProduct.title}
                  </h3>
                  <div className="h-[2px] w-12 bg-brand-medium mb-4" />
                  <p className="text-xs text-slate-650 font-light leading-relaxed">
                    {selectedProduct.description}
                  </p>
                </div>

                {/* Spec details board */}
                <div className="bg-[#F5F4F0] border border-brand-medium/10 p-4 rounded-sm space-y-3">
                  <span className="block text-xs uppercase tracking-wider text-slate-550 font-mono font-bold">
                    Technical Specifications:
                  </span>
                  
                  <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 border-t border-brand-medium/10 pt-2.5 text-xs">
                    <div>
                      <span className="block text-[10px] text-slate-500 font-sans uppercase">Weave Density</span>
                      <span className="block text-slate-950 font-bold">{selectedProduct.specification}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-500 font-sans uppercase">Color Retention</span>
                      <span className="block text-slate-950 font-bold">Level 4.5+ (Bleach Safe)</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-500 font-sans uppercase">Shrinkage Ratio</span>
                      <span className="block text-slate-950 font-bold">Under 2.5% (ISO Verified)</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-500 font-sans uppercase">Standard Certs</span>
                      <span className="block text-slate-950 font-bold font-mono text-[10px]">OEKO-TEX 100</span>
                    </div>
                  </div>
                </div>

                {/* Additional commercial details */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-705">
                    <Sparkles className="w-4 h-4 text-brand-medium" />
                    <span>Machine automated monogram stitching options available.</span>
                  </div>
                </div>

              </div>

              {/* Modal CTA actions */}
              <div className="pt-8 border-t border-brand-medium/10 mt-8 flex flex-col gap-3">
                <button
                  id="spec-modal-inquire"
                  onClick={() => {
                    if (onInquire) {
                      onInquire({
                        title: selectedProduct.title,
                        category: selectedProduct.category,
                        specification: selectedProduct.specification
                      });
                    } else {
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                    setSelectedProduct(null);
                  }}
                  className="w-full bg-brand-medium hover:bg-brand-light text-white font-bold py-3.5 px-4 rounded-sm text-[10px] tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border border-brand-medium shadow-md animate-fade-in"
                >
                  Inquire For {selectedProduct.title}
                </button>
              </div>

            </div>

          </div>
        </div>
      )}
      
    </section>
  );
}
