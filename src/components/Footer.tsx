/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ChevronUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#FCFBF9] border-t border-brand-medium/10 text-slate-600 text-xs">
      
      {/* Footer Bottom copyright with Scroll to Top */}
      <div className="bg-[#F5F4F0] py-6 px-6 md:px-12 text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px]">
          
          <div className="space-y-1">
            <p>PV Exports © 2026. All rights and trademark registered.</p>
            <p className="text-[10px] text-slate-500">Designed with absolute precision for high-frequency luxury hotel linen supply lines. Hyderabad, India — serving Australia and elite global hospitality.</p>
          </div>

          <button
            onContextMenu={(e) => { e.preventDefault(); }}
            onClick={scrollToTop}
            className="group flex items-center gap-1.5 bg-brand-medium/5 hover:bg-brand-medium text-slate-700 hover:text-white py-1.5 px-3.5 rounded-sm transition-all cursor-pointer border border-brand-medium/20 font-bold"
            title="Scroll back to top"
          >
            Back to Top
            <ChevronUp className="w-3.5 h-3.5 group-hover:translate-y-[-1.5px] transition-transform" />
          </button>

        </div>
      </div>

    </footer>
  );
}
