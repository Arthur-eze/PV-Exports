/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, Landmark, User, Phone, Mail } from 'lucide-react';
import { InquiryForm } from '../types';

interface ContactSectionProps {
  inquiryProduct?: { title: string; category: string; specification: string } | null;
}

export default function ContactSection({ inquiryProduct }: ContactSectionProps) {
  const [form, setForm] = useState<InquiryForm>({
    name: '',
    email: '',
    company: '',
    phone: '',
    productInterest: 'Satin Stripe Bedding',
    destinationCountry: 'Australia',
    message: '',
  });

  const [activeInquiries, setActiveInquiries] = useState<InquiryForm[]>([]);
  const [lastTicket, setLastTicket] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Auto-populate when a specific product from Gallery is inquired
  useEffect(() => {
    if (inquiryProduct) {
      let matchedInterest = 'Custom Bespoke Weaving';
      if (inquiryProduct.category === 'bed') {
        if (inquiryProduct.title.toLowerCase().includes('percale')) {
          matchedInterest = 'Classic Percale Sheets';
        } else {
          matchedInterest = 'Satin Stripe Bedding';
        }
      } else if (inquiryProduct.category === 'bath') {
        if (inquiryProduct.title.toLowerCase().includes('bathrobe') || inquiryProduct.title.toLowerCase().includes('robe')) {
          matchedInterest = 'Velour Shawl Bathrobes';
        } else {
          matchedInterest = 'Egyptian Bath Sheets';
        }
      } else if (inquiryProduct.category === 'dining') {
        matchedInterest = 'Jacquard Dining Linens';
      } else if (inquiryProduct.category === 'curtains') {
        if (inquiryProduct.title.toLowerCase().includes('blackout')) {
          matchedInterest = 'Luxury Blackout Curtains';
        } else {
          matchedInterest = 'Sheer Belgian Linen Curtains';
        }
      }

      setForm((prev) => ({
        ...prev,
        productInterest: matchedInterest,
        message: `Inquiry regarding custom: ${inquiryProduct.title} (${inquiryProduct.specification}).\n\nDear PV Exports,\nWe would like to request a formal quotation and sample swatch package for our hotel. Please contact us to discuss volume pricing and custom sizing parameters. Thanks!`
      }));
    }
  }, [inquiryProduct]);

  // Initialize from storage to preserve real submitted inquiries
  useEffect(() => {
    const saved = localStorage.getItem('pv_exports_inquiries');
    if (saved) {
      try {
        setActiveInquiries(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.company) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('https://formspree.io/f/mwvjnyra', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          phone: form.phone || 'N/A',
          productInterest: form.productInterest,
          destinationCountry: form.destinationCountry,
          message: form.message,
        }),
      });

      if (response.ok) {
        const ticketId = `PV-REQ-${form.destinationCountry.slice(0, 2).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
        setLastTicket(ticketId);

        const updated = [form, ...activeInquiries];
        setActiveInquiries(updated);
        localStorage.setItem('pv_exports_inquiries', JSON.stringify(updated));

        setIsSuccess(true);

        // Reset form but preserve country pre-set
        setForm({
          name: '',
          email: '',
          company: '',
          phone: '',
          productInterest: form.productInterest,
          destinationCountry: form.destinationCountry,
          message: '',
        });
      } else {
        const errData = await response.json().catch(() => ({}));
        const errorMessage = (errData.errors && errData.errors.map((err: { message: string }) => err.message).join(', ')) || 'Unexpected response status';
        setSubmitError(`Submission failed: ${errorMessage}. Please check your inputs or mail us directly at pvexportimport@gmail.com.`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('A transmission error occurred. Please verify your internet connection or email us directly at pvexportimport@gmail.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#F5F4F0] px-6 md:px-12 border-t border-brand-medium/10"
    >
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Corporate & Logistics Node Information */}
          <div className="lg:col-span-5 space-y-10 text-left">
            <div className="space-y-6">
              <span className="inline-block text-[10px] uppercase tracking-[0.4em] text-brand-medium font-bold border border-brand-medium/20 py-2 px-5 bg-brand-medium/5">
                PV Exports Corporate Headquarters
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-slate-900 font-medium leading-[0.95] tracking-tight italic">
                Connect Directly <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-medium to-brand-light not-italic font-sans text-2xl sm:text-3xl md:text-4xl block uppercase tracking-[0.2em] mt-3">
                  With Our Hyderabad Hub
                </span>
              </h2>
              <p className="text-slate-600 font-light text-sm sm:text-base leading-relaxed">
                Hospitality chains and commercial wholesalers are welcome to engage our corporate managers based in <strong>Hyderabad, India</strong>. We specialize in custom weaves, private monograms, and volume export SLAs delivered seamlessly across oceans to Australian shores and global hubs.
              </p>
            </div>

            {/* Structured Info Blocks */}
            <div className="space-y-4 pt-4">
              <div className="bg-white border border-brand-medium/15 p-6 rounded-sm shadow-md text-left space-y-4">
                
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-brand-medium/5 flex items-center justify-center border border-brand-medium/10 text-brand-medium shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">Pearl Vincent</p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-brand-medium/5 flex items-center justify-center border border-brand-medium/10 text-brand-medium shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider text-slate-500 font-bold font-sans">Corporate Email</h4>
                    <a href="mailto:pvexportimport@gmail.com" className="text-sm font-semibold text-brand-medium hover:text-brand-light transition-colors break-all">
                      pvexportimport@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-brand-medium/5 flex items-center justify-center border border-brand-medium/10 text-brand-medium shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider text-slate-500 font-bold font-sans">Inquiry Line</h4>
                    <a href="tel:9032019797" className="text-sm font-semibold text-slate-800 hover:text-brand-medium transition-colors">
                      9032019797
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High-End Inquiry Form */}
          <div className="lg:col-span-7 bg-white border border-brand-medium/10 p-8 sm:p-10 rounded-sm shadow-xl relative">
            
            {isSuccess ? (
              <div id="contact-success-screen" className="text-center py-10 space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-sm animate-bounce">
                  <CheckCircle className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-2xl sm:text-3xl text-slate-900 font-bold">Inquiry Consigned Successfully</h3>
                  <p className="text-xs text-brand-medium font-mono uppercase tracking-widest font-semibold">
                    Reference ID: <span className="text-emerald-600 font-bold">{lastTicket}</span>
                  </p>
                  <p className="text-xs text-slate-600 font-light max-w-md mx-auto pt-2 leading-relaxed">
                    Thank you. Your custom specification sheet has been logged in our export database. Our corporate export team at our Hyderabad headquarters will verify your specifications and supply our formal commercial quotation within 4 business hours.
                  </p>
                </div>

                <div className="border-t border-brand-medium/10 pt-6 max-w-sm mx-auto">
                  <button
                    id="reset-form-btn"
                    onClick={() => setIsSuccess(false)}
                    className="w-full bg-brand-medium hover:bg-brand-light text-white text-[10px] font-bold py-3 px-6 rounded-sm uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer border border-brand-medium shadow-md"
                  >
                    Send Another Proposal
                  </button>
                </div>
              </div>
            ) : (
              <form id="contact-inquiry-form" onSubmit={handleFormSubmit} className="space-y-6">
                
                <div className="space-y-1 text-left">
                  <h3 className="font-serif text-xl sm:text-2xl text-slate-900 font-bold">Commercial Specification Submission</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Name Input */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="name" className="block text-[11px] uppercase tracking-wider text-slate-705 font-bold font-sans">
                      Your Full Name <span className="text-brand-medium">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-brand-medium/20 focus:border-brand-medium focus:ring-1 focus:ring-brand-medium p-3 text-sm text-slate-900 rounded-sm focus:outline-none transition-colors font-sans"
                      placeholder=""
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="email" className="block text-[11px] uppercase tracking-wider text-slate-705 font-bold font-sans">
                      Business Email <span className="text-brand-medium">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-brand-medium/20 focus:border-brand-medium focus:ring-1 focus:ring-brand-medium p-3 text-sm text-slate-900 rounded-sm focus:outline-none transition-colors font-sans"
                      placeholder=""
                    />
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Hotel Brand / Company */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="company" className="block text-[11px] uppercase tracking-wider text-slate-705 font-bold font-sans">
                      Hotel Brand / Company <span className="text-brand-medium">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-brand-medium/20 focus:border-brand-medium focus:ring-1 focus:ring-brand-medium p-3 text-sm text-slate-900 rounded-sm focus:outline-none transition-colors font-sans"
                      placeholder=""
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="phone" className="block text-[11px] uppercase tracking-wider text-slate-705 font-bold font-sans">
                      Contact Line
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full bg-white border border-brand-medium/20 focus:border-brand-medium focus:ring-1 focus:ring-brand-medium p-3 text-sm text-slate-900 rounded-sm focus:outline-none transition-colors font-sans"
                      placeholder=""
                    />
                  </div>

                </div>



                {/* Message input */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="message" className="block text-[11px] uppercase tracking-wider text-slate-705 font-bold font-sans">
                    Detailed Inquiry Targets & Dimensions
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-white border border-brand-medium/20 focus:border-brand-medium focus:ring-1 focus:ring-brand-medium p-3 text-sm text-slate-900 rounded-sm focus:outline-none transition-colors font-sans resize-none"
                    placeholder=""
                  />
                </div>

                {submitError && (
                  <div className="bg-red-550/5 border border-red-500/20 text-red-650 p-4 rounded-sm text-xs text-left leading-relaxed">
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  id="inquiry-submit-btn"
                  disabled={isSubmitting}
                  className="w-full bg-brand-medium hover:bg-brand-light text-white font-bold py-4 px-5 rounded-sm text-[10px] tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50 border border-brand-medium"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin" />
                      Logging Consignment...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Formal Inquiry
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>

        {/* PERSISTED SUBMISSIONS BOARD to show full high-end capability */}
        {activeInquiries.length > 0 && (
          <div id="submitted-logs-board" className="mt-16 bg-white border border-brand-medium/10 p-6 sm:p-8 rounded-sm shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <Landmark className="w-5 h-5 text-brand-medium" />
              <h4 className="font-serif text-lg text-slate-900 font-bold">Your Active Inquiries Cache</h4>
              <span className="text-[10px] bg-brand-medium/5 text-brand-medium px-2.5 py-0.5 rounded-full font-mono border border-brand-medium/10 font-bold">
                {activeInquiries.length} logged
              </span>
            </div>

            <div className="space-y-4 max-h-[220px] overflow-y-auto pr-2 custom-scrollbar">
              {activeInquiries.map((inq, idx) => (
                <div key={idx} className="bg-slate-50 border border-brand-medium/10 p-4 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left shadow-2xs">
                  <div>
                    <span className="block text-xs font-bold text-slate-950">{inq.company}</span>
                    <span className="inline-block text-[10px] text-brand-medium font-mono uppercase tracking-wider font-semibold">{inq.name} · {inq.email}</span>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="block text-xs font-bold text-emerald-700 font-mono tracking-wider">Port Target: {inq.destinationCountry}</span>
                    <span className="block text-[10px] text-slate-600 uppercase font-mono tracking-widest">{inq.productInterest}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 text-center">
              <button
                onClick={() => {
                  localStorage.removeItem('pv_exports_inquiries');
                  setActiveInquiries([]);
                }}
                className="text-slate-500 hover:text-red-650 text-xs underline cursor-pointer font-medium"
              >
                Clear Submission Cache
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
