"use client";

import React, { useState, useEffect } from "react";
import { poppins } from "@/fonts/fonts";

interface NavbarProps {
  onContactClick: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll to apply backdrop effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "SERVICES", href: "#services" },
    { label: "PORTFOLIO", href: "#portfolio" },
    { label: "BLOG", href: "#blog" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
        ? "bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-4"
        : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo (Matching Davis style in screenshot) */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full border-2 border-accent-gold overflow-hidden transition-transform duration-300 group-hover:rotate-45">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="w-4 h-4 text-accent-gold"
            >
              {/* Gear/Flower shape inside logo circle */}
              <circle cx="12" cy="12" r="3" fill="currentColor" />
              <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M16.36 16.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M16.36 7.64l1.42-1.42" />
            </svg>
          </div>
          <span className={`text-[30px] font-bold tracking-wide text-white group-hover:text-accent-gold transition-colors duration-300 ${poppins.className}`}>
            <span className="text-accent-gold">A</span>cha
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 font-medium text-[14px] tracking-widest text-slate-300">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`${poppins.className} hover:text-accent-gold transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-accent-gold after:transition-all after:duration-300 hover:after:w-full`}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={onContactClick}
            className={`${poppins.className} hover:text-accent-gold transition-colors duration-300 relative py-1 text-left after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-accent-gold after:transition-all after:duration-300 hover:after:w-full cursor-pointer`}
          >
            CONTACT
          </button>

          {/* Divider */}
          <span className="text-slate-700 font-light select-none">|</span>

          {/* Phone number and phone icon matching screenshot */}
          <a
            href="tel:+2347069698387"
            className="flex items-center gap-2 text-accent-gold hover:text-accent-gold/80 transition-colors duration-300"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-3.5 h-3.5"
            >
              <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z" />
            </svg>
            <span className={`${poppins.className} tracking-normal font-semibold text-[13px]`}>+234 70 6969 8387</span>
          </a>
        </nav>

        {/* Mobile Hamburger Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex flex-col justify-between w-6 h-4.5 text-white focus:outline-none z-50 cursor-pointer"
          aria-label="Toggle Menu"
        >
          <span
            className={`w-full h-[2px] bg-white rounded-full transition-all duration-300 origin-left ${mobileMenuOpen ? "rotate-45 translate-y-[2px]" : ""
              }`}
          />
          <span
            className={`w-full h-[2px] bg-white rounded-full transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""
              }`}
          />
          <span
            className={`w-full h-[2px] bg-white rounded-full transition-all duration-300 origin-left ${mobileMenuOpen ? "-rotate-45 -translate-y-[2px]" : ""
              }`}
          />
        </button>
      </div>

      {/* Mobile Drawer Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-slate-950/90 backdrop-blur-lg z-45 flex flex-col justify-center px-8"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="flex flex-col gap-6 text-xl font-semibold tracking-wider text-white">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-accent-gold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="hover:text-accent-gold text-left transition-colors cursor-pointer"
            >
              CONTACT
            </button>

            <div className="w-full h-[1px] bg-white/10 my-4" />

            {/* Mobile Phone Number */}
            <a
              href="tel:+2347069698387"
              className="flex items-center gap-3 text-accent-gold text-base"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z" />
              </svg>
              <span>+234 70 6969 8387</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
