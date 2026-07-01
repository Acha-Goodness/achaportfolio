"use client";

import React from "react";

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      title: "Web Development",
      description: "Building fast, SEO-friendly, and accessible websites using modern static generators, Jamstack architectures, and robust styling standards.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      title: "WebApp Development",
      description: "Developing robust, highly interactive single-page and server-side web applications using React, Next.js, Node.js, and TypeScript.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      title: "Mobile App Development",
      description: "Crafting beautiful cross-platform native iOS and Android mobile applications using React Native, fully integrated with device hardware and cloud platforms.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
    },
    {
      title: "Web Design",
      description: "Structuring digital platforms with visual balance, elegant dark modes, typography pairing, glassmorphism, and intuitive visual hierarchies.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
          <path d="M12 6V12L16 14" />
        </svg>
      ),
    },
    {
      title: "Graphics Design",
      description: "Designing memorable brand assets, customized vector illustration elements, layouts, and cohesive corporate color schemes.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
    },
    {
      title: "UX Design",
      description: "Conducting user research, low and high fidelity wireframing, creating interactive flows, prototypes, and testing micro-animations.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-slate-950/20">
      {/* Background glowing gradients */}
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-accent-gold/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="max-w-xl mb-16 md:mb-24 reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Services.
          </h2>
          <p className="text-accent-gold text-sm tracking-wider uppercase font-semibold">
            I work with you and for you
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-panel glass-panel-hover p-8 md:p-10 rounded-2xl flex flex-col items-start relative group transition-all duration-500 overflow-hidden reveal-on-scroll"
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Corner soft light highlight */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-gold/0 group-hover:bg-accent-gold/5 rounded-full blur-2xl transition-all duration-500" />
              
              {/* Floating icon */}
              <div className="mb-6 w-14 h-14 rounded-2xl bg-slate-900/60 border border-white/5 flex items-center justify-center text-accent-gold group-hover:text-white group-hover:border-accent-gold/30 transition-all duration-300">
                {service.icon}
              </div>

              {/* Service Title */}
              <h3 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-accent-gold transition-colors duration-300">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
