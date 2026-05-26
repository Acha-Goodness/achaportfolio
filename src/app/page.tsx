"use client";

import React, { useState } from "react";
import StarryBackdrop from "@/components/StarryBackdrop";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Works from "@/components/sections/Works";
import Blog from "@/components/sections/Blog";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full text-foreground bg-cosmic-gradient selection:bg-accent-gold/30 selection:text-white">
      {/* Interactive star backdrop canvas */}
      <StarryBackdrop />

      {/* Sticky layout Header Navigation */}
      <Navbar onContactClick={() => setIsContactOpen(true)} />

      {/* Main Sections */}
      <main className="w-full">
        {/* Hero Section */}
        <Hero onHireMeClick={() => setIsContactOpen(true)} />

        {/* Separator Line */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <hr className="border-t border-white/5" />
        </div>

        {/* About Section */}
        <About />

        {/* Separator Line */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <hr className="border-t border-white/5" />
        </div>

        {/* Services Section */}
        <Services />

        {/* Separator Line */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <hr className="border-t border-white/5" />
        </div>

        {/* Works/Portfolio Section */}
        <Works />

        {/* Separator Line */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <hr className="border-t border-white/5" />
        </div>

        {/* Blog / Tech News Section */}
        <Blog />
      </main>

      {/* Premium Rebuilt Footer */}
      <footer className="relative border-t border-white/5 bg-slate-950/40 backdrop-blur-md pt-20 pb-10 z-30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Top Footer Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white text-glow-gold">Let&apos;s Talk?</h2>
              <p className="text-slate-400 text-xs font-light mt-1.5">Let&apos;s make something awesome together</p>
            </div>

            <div className="flex md:justify-center">
              <button
                onClick={() => setIsContactOpen(true)}
                className="px-8 py-3.5 rounded-full border border-white/10 hover:border-accent-gold hover:text-accent-gold text-slate-300 bg-slate-900/20 hover:bg-slate-900/60 font-bold tracking-wider text-xs uppercase transition-all duration-300 cursor-pointer"
              >
                Make an enquiry
              </button>
            </div>

            {/* Socials right column */}
            <div className="flex justify-start md:justify-end gap-4">
              <a
                href="https://www.linkedin.com/in/acha-goodness"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/5 hover:border-accent-gold hover:text-accent-gold text-slate-400 bg-slate-900/20 hover:bg-slate-900/60 flex items-center justify-center transition-all duration-300"
                title="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://github.com/Acha-Goodness"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/5 hover:border-accent-gold hover:text-accent-gold text-slate-400 bg-slate-900/20 hover:bg-slate-900/60 flex items-center justify-center transition-all duration-300"
                title="GitHub"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
            </div>
          </div>

          <hr className="border-t border-white/5 my-8" />

          {/* Center Phone number and Office locations */}
          <div className="flex flex-col md:flex-row justify-between gap-6 mb-12">
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs md:text-sm font-semibold tracking-wider text-slate-400">
              <a href="tel:+2347069698387" className="hover:text-accent-gold transition-colors flex items-center gap-2">
                <span>Nigeria.</span>
                <span className="text-white">+234 70 6969 8387</span>
              </a>
              <a href="tel:+2349020627105" className="hover:text-accent-gold transition-colors flex items-center gap-2">
                <span>Lagos.</span>
                <span className="text-white">+234 90 2062 7105</span>
              </a>
            </div>
          </div>

          <hr className="border-t border-white/5 my-8" />

          {/* Bottom Footer Row */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 text-[11px] font-medium tracking-wider text-slate-500">
            <p className="text-center md:text-left">
              2026 © <span className="text-slate-400 font-semibold select-none">Acharious Concept</span>. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Terms of use</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Enquiry Contact popover dialog */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
