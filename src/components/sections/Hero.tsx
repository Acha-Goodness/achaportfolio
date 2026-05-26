"use client";

import React from "react";
import Image from "next/image";
import SocialPill from "../SocialPill";
import { poppins } from "@/fonts/fonts";
import acha from "@/asstes/achaPro.png";

interface HeroProps {
  onHireMeClick: () => void;
}

export default function Hero({ onHireMeClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center overflow-hidden pt-20"
    >
      {/* Container holding layout split */}
      <div className="w-full max-w-[1920px] mx-auto flex flex-col-reverse lg:flex-row items-center min-h-[calc(100vh-80px)]">

        {/* Left Side: Copy and call-to-actions */}
        <div className={`${poppins.className} w-full lg:w-1/2 px-6 md:px-16 xl:px-24 py-12 lg:py-0 flex flex-col justify-center relative z-20`}>
          <div className="max-w-xl animate-fade-in-up ml-[22%]">
            {/* "Hello, I'm" subtitle */}
            <span className="text-base md:text-lg font-medium text-accent-gold tracking-wide block mb-3 md:mb-5">
              Hello, I&apos;m
            </span>

            {/* Name Heading */}
            <h1 className={`w-full lg:w-1/2 text-5xl md:text-7xl xl:text-8xl font-black text-white tracking-tight leading-[1.05] mb-5 md:mb-7`}>
              Acha <br />
              Goodness
            </h1>

            {/* Title description */}
            <p className="text-lg md:text-xl xl:text-2xl font-light text-slate-400 tracking-wide mb-8 md:mb-12">
              Full-Stack Software Engineer
            </p>

            {/* Hire Me button */}
            <button
              onClick={onHireMeClick}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-accent-gold hover:bg-accent-gold-hover text-slate-950 font-bold tracking-wider text-xs uppercase shadow-lg shadow-accent-gold/15 hover:shadow-accent-gold/30 hover:scale-[1.03] transition-all duration-300 cursor-pointer"
            >
              Hire Me
            </button>
          </div>
        </div>

        {/* Right Side: Portrait Image (Matching the reference screenshot style) */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-[calc(100vh-80px)] relative overflow-hidden flex items-end justify-center lg:justify-end self-stretch bg-[#02050e]">

          {/* Main portrait image with grayscale filter applied */}
          <div className="relative w-full h-full max-h-[85vh] lg:max-h-none lg:w-[95%] overflow-hidden group">
            <Image
              src={acha}
              alt="Acha Goodness Portrait"
              fill
              priority
              className="object-cover object-center grayscale contrast-[1.1] brightness-[0.9] saturate-[0.1] hover:grayscale-0 hover:contrast-100 hover:brightness-100 hover:saturate-100 transition-all duration-[1000ms] ease-out"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Dark vignette gradient overlay to blend image borders */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#030712] lg:via-transparent lg:to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/20 to-transparent pointer-events-none" />

            {/* The signature floating golden-orange dot on the left side of the face (Replicating exact detail in screenshot!) */}
            <div className="absolute top-[52%] left-[16%] lg:left-[12%] w-2.5 h-2.5 rounded-full bg-accent-gold shadow-lg shadow-accent-gold/80 animate-pulse hidden lg:block" />
          </div>
        </div>
      </div>

      {/* Floating social links capsule pill */}
      <SocialPill />
    </section>
  );
}
