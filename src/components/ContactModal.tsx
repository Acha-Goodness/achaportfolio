"use client";

import React, { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in required fields (*)");
      return;
    }

    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        budget: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop overlay */}
      <div
        className="absolute inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog Container */}
      <div className="relative w-full max-w-2xl bg-[#090f1d] border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 animate-fade-in-up">
        {/* Decorative corner light */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/5 rounded-full blur-3xl" />

        {/* Modal Header */}
        <div className="p-6 md:p-8 flex items-center justify-between border-b border-white/5 relative z-10">
          <div>
            <h3 className="text-2xl font-black text-white tracking-tight">Let&apos;s Talk?</h3>
            <p className="text-slate-400 text-xs font-light mt-1">Let&apos;s make something awesome together</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full border border-white/5 hover:border-white/20 text-slate-400 hover:text-white bg-slate-900/40 hover:bg-slate-900/90 transition-all cursor-pointer"
            aria-label="Close Modal"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="w-4 h-4"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Modal Form */}
        <div className="p-6 md:p-8 max-h-[75vh] overflow-y-auto relative z-10">
          {submitStatus === "success" ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-accent-gold/10 border border-accent-gold/30 flex items-center justify-center text-accent-gold mb-6 animate-pulse">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="w-8 h-8"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h4>
              <p className="text-slate-400 text-sm font-light max-w-sm">
                Thank you for reaching out. I will get back to you within 24 hours to discuss your project details.
              </p>
              <button
                onClick={() => setSubmitStatus("idle")}
                className="mt-8 px-6 py-2 rounded-full border border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-slate-950 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row: Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                    Your Name <span className="text-accent-gold">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/40 border border-white/5 focus:border-accent-gold/50 focus:bg-slate-950/70 text-white focus:outline-none transition-all text-sm font-light"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                    Your E-Mail <span className="text-accent-gold">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/40 border border-white/5 focus:border-accent-gold/50 focus:bg-slate-950/70 text-white focus:outline-none transition-all text-sm font-light"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Row: Subject and Budget */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                    Your Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/40 border border-white/5 focus:border-accent-gold/50 focus:bg-slate-950/70 text-white focus:outline-none transition-all text-sm font-light"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="budget" className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950/40 border border-white/5 focus:border-accent-gold/50 focus:bg-slate-950/70 text-white focus:outline-none transition-all text-sm font-light select-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#090f1d] text-slate-500">Select budget range</option>
                    <option value="Low budget" className="bg-[#090f1d] text-white">Less than $1,000</option>
                    <option value="$1,000 — $3,000" className="bg-[#090f1d] text-white">$1,000 — $3,000</option>
                    <option value="$3,000 — $5,000" className="bg-[#090f1d] text-white">$3,000 — $5,000</option>
                    <option value="$5,000+" className="bg-[#090f1d] text-white">$5,000 +</option>
                  </select>
                </div>
              </div>

              {/* Row: Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                  Your Message <span className="text-accent-gold">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/40 border border-white/5 focus:border-accent-gold/50 focus:bg-slate-950/70 text-white focus:outline-none transition-all text-sm font-light resize-none"
                  placeholder="Tell me more about your project idea..."
                />
              </div>

              {/* Submit trigger button */}
              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 rounded-full bg-accent-gold hover:bg-accent-gold-hover text-slate-950 font-bold tracking-wider text-xs uppercase shadow-md shadow-accent-gold/10 hover:shadow-accent-gold/25 hover:scale-[1.02] disabled:opacity-50 disabled:pointer-events-none transition-all cursor-pointer"
                >
                  {isSubmitting ? "Sending message..." : "Send Message"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
