import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, Check, ChevronRight, Sliders, Info, Sparkles, HelpCircle } from 'lucide-react';
import { premiumFabrics } from '../data';
import { FabricItem } from '../types';

interface PremiumFabricsProps {
  onSelectFabric: (fabricName: string) => void;
}

export default function PremiumFabrics({ onSelectFabric }: PremiumFabricsProps) {
  const [selectedFabric, setSelectedFabric] = useState<FabricItem | null>(null);

  return (
    <section id="fabrics" className="py-24 bg-white border-t border-b border-brand-medium/10 px-6 md:px-12 relative overflow-hidden text-left">
      {/* Decorative vector grid overlay */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#F5F4F0]/50 to-transparent pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-brand-medium/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-medium" />
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#5C7C89] font-bold">
                Commercial Spinning Standards
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-slate-900 font-medium leading-tight">
              Premium Textile Weaves <br />
              <span className="italic text-brand-medium font-normal">Sourced & Crafted to Specification</span>
            </h2>
          </div>
          <p className="text-slate-600 font-light text-sm max-w-md leading-relaxed">
            Every thread of our collections is calibrated on modern high-speed looms for heavy laundry survival. Explore the raw tactical textures backing our bed, bath, and drape finishes.
          </p>
        </div>

        {/* Fabrics Interactive Layout Grid */}
        <div className={`grid grid-cols-1 ${
          premiumFabrics.length === 1
            ? 'max-w-md mx-auto'
            : premiumFabrics.length === 2
            ? 'md:grid-cols-2 max-w-2xl mx-auto'
            : premiumFabrics.length === 3
            ? 'md:grid-cols-3 max-w-5xl mx-auto'
            : 'md:grid-cols-2 lg:grid-cols-4'
        } gap-8`}>
          {premiumFabrics.map((fabric) => (
            <motion.div
              key={fabric.id}
              onClick={() => setSelectedFabric(fabric)}
              className="group bg-[#F5F4F0]/30 border border-brand-medium/10 p-5 rounded-sm hover:bg-white hover:border-brand-medium/40 hover:shadow-lg transition-all duration-500 cursor-pointer flex flex-col justify-between"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-5">
                {/* Visual Swatch Card Container */}
                <div id={`fabric-swatch-${fabric.id}`} className="aspect-square w-full relative overflow-hidden rounded-sm bg-neutral-100 border border-brand-medium/10">
                  <img
                    src={fabric.image}
                    alt={fabric.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Hover action banner */}
                  <div className="absolute inset-0 bg-brand-medium/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                    <span className="bg-white/95 backdrop-blur-sm text-slate-900 shadow-md border border-brand-medium/10 px-4 py-2 text-[9px] uppercase tracking-wider font-mono font-bold flex items-center gap-1.5 rounded-sm">
                      <Eye className="w-3.5 h-3.5 text-brand-medium" /> View Specifications
                    </span>
                  </div>


                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-lg text-slate-900 font-bold tracking-tight">
                    {fabric.name}
                  </h3>
                  <p className="text-xs text-slate-600 font-light leading-relaxed line-clamp-2">
                    {fabric.description}
                  </p>
                </div>
              </div>

              {/* Card Footer detail */}
              <div className="mt-6 pt-4 border-t border-brand-medium/5 flex items-center justify-between text-brand-medium">
                <span className="text-[9px] uppercase tracking-widest font-mono font-semibold">
                  Specs & Weave Data
                </span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Raw Fabric Orders Callout Banner */}
        <div className="mt-16 bg-[#F5F4F0]/60 border border-brand-medium/15 p-6 sm:p-8 rounded-none flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-medium/5 rounded-full blur-2xl pointer-events-none" />
          <div className="space-y-3 max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-brand-medium/5 border border-brand-medium/10 text-[9px] uppercase font-mono tracking-widest text-[#5C7C89] font-bold">
              Raw Bolt & Bulk Orders
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-slate-900 font-medium leading-snug">
              We Accept <span className="italic text-brand-medium">Raw Fabric Bolt & Roll</span> Bulk Orders
            </h3>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              In addition to fully styled finished commercial linens, we accept custom supply orders for raw fabric rolls, looms-state bolts, base yarns, and custom dyelots. Orders dispatch directly from our high-capacity weaving hubs to your specific factory floor.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onSelectFabric("Raw Fabric Bolts / Rolls")}
            className="relative z-10 self-start md:self-auto bg-brand-medium hover:bg-brand-medium/95 text-white font-bold py-3.5 px-6 rounded-none text-[10px] tracking-[0.2em] uppercase transition-all duration-300 shrink-0 cursor-pointer shadow-sm hover:shadow-md font-sans"
          >
            Inquire Raw Fabrics
          </button>
        </div>

        {/* Modal / Swatch Detail Sheet overlay */}
        <AnimatePresence>
          {selectedFabric && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Blur backdrop overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedFabric(null)}
                className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs"
              />

              {/* Main detailed modal modal content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="bg-white border border-brand-medium/20 rounded-sm w-full max-w-3xl overflow-hidden shadow-2xl relative z-10 flex flex-col md:flex-row text-left"
              >
                {/* Image panel */}
                <div className="w-full md:w-1/2 aspect-square md:aspect-auto md:min-h-[420px] bg-neutral-50 relative border-b md:border-b-0 md:border-r border-brand-medium/10">
                  <img
                    src={selectedFabric.image}
                    alt={selectedFabric.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  
                  <div className="absolute top-4 left-4 bg-emerald-950/90 backdrop-blur-md text-emerald-300 border border-emerald-500/30 px-3 py-1.5 rounded-sm text-[8px] font-mono font-bold uppercase tracking-wider flex items-center gap-1 select-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                     Swatches in Stock
                  </div>
                </div>

                {/* Details side sheet */}
                <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <span className="text-[9px] uppercase tracking-widest font-mono font-bold text-brand-medium">
                          {selectedFabric.type}
                        </span>
                        <h4 className="font-serif text-xl sm:text-2xl text-slate-900 font-bold leading-tight">
                          {selectedFabric.name}
                        </h4>
                      </div>
                      <button
                        onClick={() => setSelectedFabric(null)}
                        className="text-slate-400 hover:text-slate-900 cursor-pointer p-1 -mt-2 -mr-2 text-sm font-sans"
                        aria-label="Close details"
                      >
                        ✕
                      </button>
                    </div>

                    <p className="text-xs text-slate-600 font-light leading-relaxed">
                      {selectedFabric.description}
                    </p>

                    {/* Raw Loom Metrics Block */}
                    <div className="space-y-2 pt-2">
                      <span className="text-[9px] uppercase tracking-widest font-mono font-bold text-[#5C7C89] block">
                        Mill Certification Features
                      </span>
                      <div className="grid grid-cols-1 gap-2">
                        {selectedFabric.attributes.map((attr, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-800">
                            <div className="w-4 h-4 rounded-full bg-brand-medium/5 border border-brand-medium/20 flex items-center justify-center text-brand-medium flex-shrink-0">
                              <Check className="w-2.5 h-2.5" />
                            </div>
                            <span className="font-light">{attr}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions footer */}
                  <div className="pt-6 border-t border-brand-medium/10 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => {
                        onSelectFabric(selectedFabric.name);
                        setSelectedFabric(null);
                      }}
                      className="flex-1 bg-brand-medium hover:bg-brand-medium/95 text-white font-bold py-3 px-5 rounded-none text-[9px] tracking-[0.15em] uppercase transition-all duration-300 text-center cursor-pointer"
                    >
                      Place an Order
                    </button>
                    <button
                      onClick={() => setSelectedFabric(null)}
                      className="bg-transparent hover:bg-neutral-50 text-slate-600 border border-slate-300 hover:text-slate-900 font-bold py-3 px-5 rounded-none text-[9px] tracking-[0.15em] uppercase transition-all duration-300 text-center cursor-pointer"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
