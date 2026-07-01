"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import phone from "@/assets/phones.jpg";
import chrome from "@/assets/chrome.jpg"
import headset from "@/assets/headset.jpg"
import control from "@/assets/control.jpg"
import google from "@/assets/google.jpg"

interface BlogPost {
  title: string;
  category: string;
  imageUrl: StaticImageData;
  linkUrl: string;
  date: string;
  summary: string;
}

export default function Blog() {
  const posts: BlogPost[] = [
    {
      title: "Google Chrome 100 Trips Up Websites That Can't Count That High",
      category: "Browsers",
      imageUrl: chrome,
      linkUrl: "https://www.cnet.com/tech/services-and-software/google-chrome-100-trips-up-websites-that-cant-count-that-high/",
      date: "Tech News",
      summary: "Major web browsers hitting version 100 triggered parsing bugs on legacy websites unable to handle three-digit version numbers.",
    },
    {
      title: "Best Xbox Deals: Save on Controllers, Headsets, Series S and More",
      category: "Games",
      imageUrl: control,
      linkUrl: "https://www.cnet.com/tech/gaming/best-xbox-deals/",
      date: "Deals & Reviews",
      summary: "A roundup of the best promotions and discount codes currently running for modern Xbox consoles, custom pads, and audio gear.",
    },
    {
      title: "Google Using New AI to Better Detect Searches Made by People During Personal Crises",
      category: "Artificial Intelligence",
      imageUrl: google,
      linkUrl: "https://www.cnet.com/tech/services-and-software/google-using-new-ai-to-better-detect-searches-made-by-people-during-personal-crises/",
      date: "AI Updates",
      summary: "Google integrates sophisticated machine learning algorithms to contextually sense search queries denoting personal crises.",
    },
    {
      title: "Easily Cast Your Samsung Phone Screen to Your TV. Here's How",
      category: "Mobile Phones",
      imageUrl: phone,
      linkUrl: "https://www.cnet.com/tech/home-entertainment/easily-cast-your-android-phone-screen-to-your-tv-heres-how/",
      date: "Guides & How-To",
      summary: "A step-by-step walkthrough covering wireless casting from Samsung Galaxy smart devices directly onto big-screen TVs.",
    },
    {
      title: "Get 30% Off the Excellent-Sounding Head sET Air Pro XI",
      category: "Head Sets",
      imageUrl: headset,
      linkUrl: "https://www.cnet.com/tech/mobile/get-30-off-the-excellent-sounding-earfun-air-pro-sv-earbuds/",
      date: "Special Offers",
      summary: "Special limited-time promotional voucher codes providing massive price drops on high-performance noise-cancelling earbud models.",
    },
  ];

  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-slate-950/20">
      {/* Background glow circle */}
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-accent-gold/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="max-w-xl mb-16 md:mb-20 reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Latest News.
          </h2>
          <p className="text-accent-gold text-sm tracking-wider uppercase font-semibold">
            Check out tech news & curated articles
          </p>
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post, index) => (
            <article
              key={post.title}
              className="glass-panel rounded-2xl border border-white/5 bg-slate-900/10 overflow-hidden group flex flex-col h-full transition-all duration-300 hover:border-accent-gold/20 reveal-on-scroll"
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Blog Card Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950/40">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-103"
                  sizes="(max-width: 1024px) 100vw, 30vw"
                />

                {/* Category label badge overlay */}
                <span className="absolute top-4 left-4 p-1 px-3.5 rounded-full text-[9px] font-extrabold uppercase tracking-widest bg-slate-950/80 backdrop-blur-md text-accent-gold border border-white/5 z-10 select-none">
                  {post.category}
                </span>
              </div>

              {/* Blog Card Text content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow justify-between border-t border-white/5">
                <div>
                  <span className="text-[11px] font-bold text-slate-500 tracking-widest uppercase block mb-3">
                    {post.date}
                  </span>

                  <h3 className="text-lg font-bold text-white mb-4 leading-snug tracking-tight group-hover:text-accent-gold transition-colors duration-300">
                    <a href={post.linkUrl} target="_blank" rel="noopener noreferrer">
                      {post.title}
                    </a>
                  </h3>

                  <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
                    {post.summary}
                  </p>
                </div>

                {/* Read Full Article trigger link */}
                <a
                  href={post.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold text-accent-gold tracking-widest uppercase hover:text-white transition-colors duration-300"
                >
                  Read Article
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
