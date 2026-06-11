/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { useState } from 'react';

export default function WhatsAppButton() {
  const [isPulse, setIsPulse] = useState(true);

  const whatsappUrl = "https://wa.me/919032019797?text=I%20would%20like%20to%20enquire%20about%20your%20products";

  return (
    <div id="whatsapp-ambient-floating" className="fixed bottom-6 right-6 z-45 flex flex-col items-end gap-3.5 select-none text-left">
      
      {/* Primary Floating Button */}
      <div className="relative">
        {/* Pulsing Outer Glow */}
        {isPulse && (
          <span className="absolute -inset-1 rounded-full bg-emerald-500/30 blur-md animate-ping pointer-events-none" />
        )}
        
        <a
          id="whatsapp-float-trigger"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsPulse(false)}
          className="relative w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center cursor-pointer shadow-[0_8px_20px_rgba(5,150,105,0.4)] hover:bg-emerald-500 hover:scale-105 active:scale-95 transition-all duration-300 border border-emerald-400/30 focus:outline-none focus:ring-4 focus:ring-emerald-500/20"
          title="Direct WhatsApp Inquiry Lobby"
        >
          <svg
            className="w-6.5 h-6.5 fill-current"
            viewBox="0 0 24 24"
            role="img"
            aria-label="WhatsApp Logo"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97-1.861-1.868-4.333-2.897-6.966-2.899-5.442 0-9.87 4.372-9.875 9.802-.002 1.774.465 3.509 1.355 5.048l-.941 3.43 3.528-.916zm11.235-7.64c-.1-.137-.282-.219-.564-.359-.283-.141-1.672-.821-1.931-.916-.259-.094-.447-.141-.636.141-.188.281-.727.916-.892 1.101-.165.185-.331.206-.613.066-.282-.141-1.192-.437-2.271-1.398-.84-.747-1.407-1.671-1.572-1.952-.165-.282-.018-.434.123-.574.127-.127.282-.328.423-.492.142-.164.189-.282.283-.469.094-.187.047-.351-.024-.492-.071-.141-.636-1.529-.871-2.09-.229-.553-.459-.478-.636-.487-.164-.008-.352-.01-.54-.01-.188 0-.493.07-.751.352-.259.282-.987.961-.987 2.343 0 1.383 1.01 2.719 1.151 2.906.141.188 1.986 3.018 4.811 4.217.672.285 1.197.456 1.606.585.674.214 1.288.184 1.773.111.54-.08 1.672-.681 1.907-1.336.235-.656.235-1.219.165-1.336z" />
          </svg>
        </a>
      </div>

    </div>
  );
}
