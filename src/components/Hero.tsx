/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, Globe, ShieldCheck, Waves } from 'lucide-react';
import { generatedAssets } from '../data';

interface HeroProps {
  onLearnMore: () => void;
  onContact: () => void;
}

export default function Hero({ onLearnMore, onContact }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-b from-brand-dark via-brand-dark to-slate-100 flex flex-col justify-center pt-24 pb-16 overflow-hidden md:px-12 px-6"
    >
      {/* Decorative Grid Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(31,73,89,0.06),rgba(252,251,249,0))]" />
      
      {/* Elegant Moving background vector */}
      <div className="absolute top-20 right-[-100px] w-[500px] h-[500px] rounded-full bg-brand-light/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 my-auto">
        
        {/* Left Side: Brand Narrative */}
        <div className="lg:col-span-6 flex flex-col justify-center text-left space-y-8">
          {/* Tagline / Global Status */}
          <div className="inline-flex items-center space-x-3 bg-brand-medium/5 border border-brand-medium/20 py-2 px-5 self-start text-[10px] tracking-[0.4em] text-brand-medium uppercase font-semibold">
            <Waves className="w-3.5 h-3.5 animate-pulse text-brand-medium" />
            <span>Premium Hospitality & Bath</span>
          </div>

          {/* Majestic Hero Typography */}
          <div className="space-y-6">
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-slate-900 font-medium leading-[0.95] tracking-tight">
              Pure Elegance <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-medium to-brand-light italic">
                In Every Fiber.
              </span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light max-w-xl">
              PV Exports is a premier fabric weaver located in <strong>Hyderabad, India</strong>, crafting world-class hospitality linens engineered for elite hotel brands across Australia and major global destinations.
            </p>
          </div>

          {/* Custom Weaving Banner */}
          <div className="inline-flex flex-col sm:flex-row sm:items-center gap-3 bg-brand-medium/5 border border-brand-medium/20 p-4 rounded-sm text-xs max-w-xl text-left">
            <div className="flex-shrink-0">
              <span className="font-mono font-bold text-[9px] bg-brand-medium text-white px-2 py-1 rounded-sm uppercase tracking-wider">
                Bespoke & Custom Orders
              </span>
            </div>
            <p className="text-slate-700 font-light leading-relaxed">
              We fully manufacture <strong>custom dimensions, custom drapes/curtain drops, bespoke colorways, and monogram embroidery</strong> to fit your exact boutique property needs.
            </p>
          </div>

          {/* Corporate Hub & Global Exports */}
          <div className="border-l-2 border-brand-medium bg-brand-medium/5 p-5 rounded-r-sm max-w-xl">
            <div className="flex items-center gap-2 mb-1.5">
              <Globe className="w-4 h-4 text-brand-medium" />
              <span className="text-xs font-semibold tracking-wider uppercase text-brand-medium">
                Hyderabad to Australia & Beyond
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-light">
              Based in Hyderabad's industrial hub, we coordinate direct ocean freight shipping to major Australian ports including <strong>Sydney, Melbourne, and Brisbane</strong>. We are trusted by Australia's finest luxury resorts and spa sanctuaries for pristine, moisture-controlled customs delivery and exceptional loop density.
            </p>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              id="cta-primary-inquire"
              onClick={onContact}
              className="bg-brand-medium hover:bg-brand-light text-white font-bold py-4 px-8 rounded-sm text-[10px] tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-[0_10px_20px_rgba(31,73,89,0.15)] flex items-center justify-center gap-2 cursor-pointer"
            >
              Send Request
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              id="cta-secondary-gallery"
              onClick={onLearnMore}
              className="border border-brand-medium/30 hover:border-brand-medium text-brand-medium font-semibold py-4 px-8 rounded-sm text-[10px] tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 hover:bg-brand-medium/5 cursor-pointer"
            >
              View Lookbook
            </button>
          </div>

          {/* Micro Brand Badges */}
          <div className="grid grid-cols-2 gap-4 max-w-xl pt-4 border-t border-brand-medium/10 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-medium" />
              <span>OEKO-TEX® Certified Weave</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-medium" />
              <span>100+ Commercial Wash Tested</span>
            </div>
          </div>
        </div>

        {/* Right Side: Stunning Product Image Framing */}
        <div className="lg:col-span-6 relative flex items-center justify-center">
          
          {/* Framed Image */}
          <div className="relative w-full max-w-lg aspect-[11/9] sm:aspect-[4/3] lg:aspect-[16/13] rounded-sm overflow-hidden border border-brand-medium/10 shadow-xl z-10 group">
            <img
              src={generatedAssets.hero}
              alt="Premium PV Exports Bedding Suite Showcase"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Underlay aesthetic shadow sheet */}
          <div className="absolute -top-4 -right-4 w-full h-full border border-brand-medium/10 rounded-sm pointer-events-none z-0" />
          <div className="absolute -bottom-4 -left-4 w-full h-full border border-brand-medium/15 rounded-sm pointer-events-none z-0" />
        </div>

      </div>
    </section>
  );
}
