"use client";

import React from "react";

export default function SocialPill() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Acha-Goodness",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          {/* GitHub SVG outline */}
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ),
    },
    {
      name: "Portfolio",
      href: "#portfolio",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          {/* Globe SVG */}
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-3.5 h-3.5"
        >
          {/* X logo (modern Twitter) */}
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-12 z-30 flex items-center ml-[11%]">
      {/* Container capsule pill */}
      <div className="flex items-center gap-3 p-1.5 px-3 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/10 shadow-lg shadow-black/50">
        {/* Simple round icons */}
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-slate-900/40 hover:bg-slate-900/90 text-slate-400 hover:text-white hover:border-accent-gold transition-all duration-300 scale-95 hover:scale-105"
            title={link.name}
          >
            {link.icon}
          </a>
        ))}

        {/* LinkedIn premium button with text, matching the style in the screenshot */}
        <a
          href="https://www.linkedin.com/in/acha-goodness"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-slate-900/40 hover:bg-slate-900/90 hover:border-accent-gold text-slate-300 hover:text-white transition-all duration-300 text-xs font-semibold scale-95 hover:scale-105"
        >
          {/* LinkedIn Icon */}
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-3.5 h-3.5 text-[#0077b5] group-hover:text-white transition-colors"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          <span className="tracking-wide">LinkedIn</span>
        </a>
      </div>
    </div>
  );
}
