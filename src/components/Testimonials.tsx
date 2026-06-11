/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-[#F5F4F0] px-6 md:px-12 border-t border-brand-medium/10 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-medium/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header descriptive */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <span className="inline-block text-[10px] uppercase tracking-[0.4em] text-brand-medium font-bold border border-brand-medium/20 py-2 px-5 bg-brand-medium/5">
            Global Affiliations & Verification
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-slate-900 font-medium tracking-tight mt-6 italic">
            Endorsed by Australian Hoteliers
          </h2>
          <p className="text-slate-650 font-light text-sm sm:text-base leading-relaxed">
            Our trade network with Australia represents a pledge of zero compromises.
          </p>
        </div>

      </div>
    </section>
  );
}
