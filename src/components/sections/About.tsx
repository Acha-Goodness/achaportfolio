"use client";

import React from "react";
import Image from "next/image";
import acha from "@/assets/achaPro0.png"

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background radial soft light to guide eye */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-accent-gold/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 md:mb-24 reveal-on-scroll">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
              About.
            </h2>
            <p className="text-accent-gold text-sm tracking-wider uppercase font-semibold">
              I am more than a Software Engineer
            </p>
          </div>
          <div className="max-w-xl lg:text-right">
            <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed">
              I work together, across boundaries, to meet the needs of companies and to help teams win.
              I value collaboration, encourage team growth, and take pride in delivering robust systems.
            </p>
          </div>
        </div>

        {/* Dynamic Image & Bio Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Column: Portrait Framing card */}
          <div className="col-span-1 lg:col-span-5 relative group reveal-on-scroll">
            <div className="absolute -inset-2 bg-gradient-to-r from-accent-gold/20 to-transparent rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-1000" />
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden glass-panel border border-white/10 flex items-center justify-center p-2">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src={acha}
                  alt="Acha Goodness in action"
                  fill
                  className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent opacity-60" />
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Personal Bio */}
          <div 
            className="col-span-1 lg:col-span-7 flex flex-col justify-center reveal-on-scroll"
            style={{ transitionDelay: "150ms" }}
          >
            <div className="glass-panel p-8 md:p-10 rounded-2xl border border-white/5 bg-slate-900/25 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-gold/5 rounded-full blur-2xl" />

              <h3 className="text-2xl font-bold text-white mb-6 tracking-tight flex items-center gap-3">
                <span className="w-1.5 h-6 bg-accent-gold rounded-full" />
                Who I am — Bios
              </h3>

              <div className="text-slate-300 space-y-5 leading-relaxed font-light text-sm md:text-base">
                <p>
                  I am a diligent, professional, standard-driven, and result-focused full-stack engineer
                  with diverse skills and qualities. I have five years of experience working as a full-stack
                  engineer on both web and mobile platforms, utilizing modern technologies to develop software.
                </p>
                <p>
                  I am a high-achiever. In my last job, I was the frontend lead engineer, where I took the lead during
                  challenging situations and trained new team members as they joined the organization.
                  I value feedback and constructive criticism, take full ownership of my professional development,
                  and always support my co-workers to achieve the team&apos;s mission.
                </p>
                <p>
                  I strive to be a brilliant role model for every company I work for, driving new initiatives
                  to ensure they become commercial successes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy grid cards matching original about section layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Teamwork */}
          <div className="glass-panel glass-panel-hover p-8 rounded-2xl reveal-on-scroll">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent-gold/10 flex items-center justify-center text-accent-gold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-white">Teamwork</h4>
            </div>
            <p className="text-slate-400 text-sm font-light leading-relaxed">
              Committed, creative, and collaborative. Cherishing community and celebrating unique talents,
              passions, and backgrounds is central to my work ethic.
            </p>
          </div>

          {/* Card 2: Philosophy */}
          <div 
            className="glass-panel glass-panel-hover p-8 rounded-2xl reveal-on-scroll"
            style={{ transitionDelay: "100ms" }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent-gold/10 flex items-center justify-center text-accent-gold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-white">Philosophy</h4>
            </div>
            <p className="text-slate-400 text-sm font-light leading-relaxed">
              Ideas matter when they become real. My purpose is making dreams reality through clean architecture,
              delivering incredible returns with a perfect balance of form and function.
            </p>
          </div>

          {/* Card 3: Location */}
          <div 
            className="glass-panel glass-panel-hover p-8 rounded-2xl reveal-on-scroll"
            style={{ transitionDelay: "200ms" }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent-gold/10 flex items-center justify-center text-accent-gold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-white">Location</h4>
            </div>
            <p className="text-slate-400 text-sm font-light leading-relaxed">
              Lagos, Nigeria. Open to remote work options globally, cross-timezone integrations,
              and on-site collaborations where necessary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
