/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, X, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { row1Services, row2Services } from '../data';
import { ServiceItem } from '../types';

export default function ServicesMarquee() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Curate key services representing our comprehensive capabilities to show in alternating high-end layout
  const showcaseServices: ServiceItem[] = [
    row1Services[0], // Hotel Bedding Solutions
    row1Services[1], // Premium Spa & Bath Collections
    row1Services[2], // Bespoke Monogramming
    row2Services[0], // Australia & Sea-Freight Logistics
    row2Services[1]  // Quality Testing Labs
  ].filter(Boolean);

  // Animation variants
  const slideLeftVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: 'spring', stiffness: 45, damping: 18, duration: 0.9 }
    }
  };

  const slideRightVariants = {
    hidden: { opacity: 0, x: 80 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: 'spring', stiffness: 45, damping: 18, duration: 0.9 }
    }
  };

  const contentFadeVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 50, damping: 18, duration: 0.8, delay: 0.15 }
    }
  };

  return (
    <section
      id="services"
      className="py-32 bg-white border-t border-brand-medium/10 overflow-hidden relative"
    >
      {/* Abstract Luxury Ambient Lights */}
      <div className="absolute top-[10%] left-0 w-[500px] h-[500px] rounded-full bg-brand-medium/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-0 w-[500px] h-[500px] rounded-full bg-brand-light/5 blur-[120px] pointer-events-none" />

      {/* Narrative Section Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-28 relative z-10">
        <span className="text-[10px] uppercase tracking-[0.4em] text-brand-medium font-bold border border-brand-medium/20 py-2 px-5 bg-brand-medium/5">
          Comprehensive Craft & Export Systems
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-slate-900 font-medium tracking-tight mt-8 max-w-3xl mx-auto italic">
          Industrial Competencies <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-medium to-brand-light not-italic font-sans text-2xl sm:text-3xl md:text-4xl block uppercase tracking-[0.2em] mt-3">
            & Premium Tailoring
          </span>
        </h2>
        <p className="text-slate-600 font-light text-sm sm:text-base max-w-2xl mx-auto mt-6 leading-relaxed">
          Discover how we integrate traditional combed cotton weaving, personalized premium branding, and dedicated container shipping lines to service Australia's top hoteliers.
        </p>
      </div>

      {/* Vertical Staggered Showcase */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-36 relative z-10">
        {showcaseServices.map((service, index) => {
          const isOdd = index % 2 !== 0;

          return (
            <div
              key={service.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
            >
              {/* IMAGE COLUMN */}
              {/* On mobile, image always stacks first. On desktop, alternate position */}
              <motion.div
                id={`service-image-container-${service.id}`}
                className={`lg:col-span-5 ${isOdd ? 'lg:order-last' : 'lg:order-first'}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={isOdd ? slideRightVariants : slideLeftVariants}
              >
                <div 
                  onClick={() => setSelectedService(service)}
                  className="relative aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] rounded-sm overflow-hidden border border-brand-medium/10 shadow-lg bg-brand-medium/5 cursor-pointer group"
                >
                  {/* Fine Hover Overlay & Frame */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent h-1/2 z-10 opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />

                  {/* Corner Accent badge on Hover */}
                  <div className="absolute top-4 right-4 bg-[#011425]/90 backdrop-blur-md border border-brand-light/30 px-3 py-1.5 text-[9px] uppercase tracking-widest text-brand-light rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center gap-1.5">
                    <span>View Specifications</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              </motion.div>

              {/* CONTENT/SPECS COLUMN */}
              <motion.div
                id={`service-content-container-${service.id}`}
                className="lg:col-span-7 space-y-6 text-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={contentFadeVariants}
              >
                <div className="inline-flex items-center gap-2 text-brand-medium">
                  <ShieldCheck className="w-4 h-4 text-brand-medium/80" />
                  <span className="text-[10px] uppercase font-mono tracking-[0.3em] font-semibold">
                    Capability Registry 0{index + 1}
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-slate-900 font-medium tracking-tight italic">
                  {service.title}
                </h3>

                <p className="text-slate-600 font-light text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>

                {/* Micro Capabilities Bullet grid */}
                <div className="border-t border-brand-medium/10 pt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.featureList.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <div className="w-1.5 h-1.5 bg-brand-medium rounded-none flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Full-Screen Technical Detail Modal */}
      {selectedService && (
        <div
          id="service-detail-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          {/* Blackout overlay */}
          <div
            id="modal-backdrop"
            onClick={() => setSelectedService(null)}
            className="absolute inset-0 bg-slate-900/65 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Card */}
          <div className="bg-white border border-brand-medium/15 w-full max-w-2xl relative rounded-sm shadow-2xl z-10 overflow-hidden text-left flex flex-col md:flex-row max-h-[85vh]">
            
            {/* Modal Image banner */}
            <div className="md:w-1/2 relative min-h-[220px] md:min-h-full bg-slate-100">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-white via-white/10 to-transparent opacity-80" />
            </div>

            {/* Modal Specs Content */}
            <div className="p-8 md:w-1/2 flex flex-col justify-between overflow-y-auto bg-white">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-mono bg-brand-medium/5 border border-brand-medium/20 text-brand-medium px-2.5 py-0.5 rounded-sm font-semibold">
                    Premium Quality Specs
                  </span>
                  <button
                    id="close-modal-button"
                    onClick={() => setSelectedService(null)}
                    className="text-slate-500 hover:text-slate-900 p-1 rounded-sm hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-slate-950 font-bold mb-2.5 italic">
                    {selectedService.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    {selectedService.description}
                  </p>
                </div>

                <div className="border-t border-brand-medium/10 pt-4">
                  <span className="block text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-2.5">
                    Commitment Framework:
                  </span>
                  <ul className="space-y-2">
                    {selectedService.featureList.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-brand-medium/10 text-center">
                <button
                  id="modal-inquire-action"
                  onClick={() => {
                    setSelectedService(null);
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full bg-brand-medium hover:bg-brand-light text-white font-bold py-3.5 px-4 rounded-sm text-[10px] tracking-[0.2em] uppercase transition-colors cursor-pointer border border-brand-medium shadow-md"
                >
                  Request Technical Quotation
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
