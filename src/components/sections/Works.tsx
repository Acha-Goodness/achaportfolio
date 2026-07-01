"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import ENUM from "@/assets/ENUM.png";
import KOKO from "@/assets/KOKO.png";
import WE from "@/assets/WE_IMMERSIVE.png";
import KUDU from "@/assets/KUDU_MART.png";
import Movie from "@/assets/MovieMenions.jpg";
import African from "@/assets/africanProverb.png";
import Julo from "@/assets/julo.png";

interface Project {
  title: string;
  category: string;
  tags: string[];
  imageUrl: StaticImageData;
  linkUrl: string;
  description: string;
}

export default function Works() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Web App", "E-Learning", "E-Commerce"];

  const projects: Project[] = [
    {
      title: "Enum Africa",
      category: "E-Learning",
      tags: ["React.js", "Node.js", "MongoDB", "Redux"],
      imageUrl: ENUM,
      linkUrl: "https://dev.enumverse.com",
      description: "An online digital skills learning and talent hunt platform connecting developers with opportunities.",
    },
    {
      title: "Koko Health",
      category: "Web App",
      tags: ["React.js", "Context API", "Sass", "RESTful API"],
      imageUrl: KOKO,
      linkUrl: "https://kokohealthcare.com",
      description: "A comprehensive digital medical records and health management platform for clinics and patient desk operations.",
    },
    {
      title: "WE_IMMERSIVE",
      category: "E-Learning",
      tags: ["HTML5", "CSS3", "JavaScript", "Animation"],
      imageUrl: WE,
      linkUrl: "https://we-immersive.netlify.app/",
      description: "An immersive e-learning interface featuring engaging layout dynamics and modern educational elements.",
    },
    {
      title: "Julo Energy",
      category: "E-Commerce",
      tags: ["React.js", "Tailwind CSS", "Redux Toolkit", "API"],
      imageUrl: Julo,
      linkUrl: "https://julo-energy-kohl.vercel.app",
      description: "A responsive, feature-rich electronic products retail shopping catalog and digital checkout interface.",
    },
    {
      title: "Kudu Mart",
      category: "E-Commerce",
      tags: ["React.js", "Firebase", "Styled Components"],
      imageUrl: KUDU,
      linkUrl: "https://kudu-web.netlify.app/",
      description: "A multi-vendor digital e-shopping platform with integrated cart flow and real-time database updates.",
    },
    {
      title: "Movie Minions",
      category: "Web App",
      tags: ["HTML5", "CSS3", "JavaScript", "Movie API"],
      imageUrl: Movie,
      linkUrl: "https://acha-goodness.github.io/movieminions/",
      description: "An interactive online movie exploration and streaming portal hooked into the TMDB open API database.",
    },
    {
      title: "African Proverbs",
      category: "E-Learning",
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      imageUrl: African,
      linkUrl: "https://www.africanproverbs.com",
      description: "A cultural reservation platform detailing diverse traditional African proverbs, meanings, and historical contexts.",
    },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background soft glowing blur */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-accent-gold/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20 reveal-on-scroll">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Works.
            </h2>
            <p className="text-accent-gold text-sm tracking-wider uppercase font-semibold">
              Websites & Web Apps We Have Created
            </p>
          </div>

          {/* Categories Filtering tabs */}
          <div className="flex flex-wrap gap-2 md:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase border transition-all duration-300 cursor-pointer ${filter === cat
                  ? "bg-accent-gold border-accent-gold text-slate-950 shadow-md shadow-accent-gold/20"
                  : "border-white/10 text-slate-400 hover:text-white hover:border-white/20 bg-slate-950/20"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Works Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="glass-panel rounded-2xl border border-white/5 bg-slate-900/10 overflow-hidden group flex flex-col h-full reveal-on-scroll"
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Card Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950/40">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />

                {/* Dark Hover overlay layer */}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  {/* Floating Visit badge */}
                  <a
                    href={project.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto p-4 rounded-full bg-accent-gold text-slate-950 shadow-lg scale-75 group-hover:scale-100 transition-transform duration-500 hover:bg-accent-gold-hover"
                    title={`Visit ${project.title}`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="w-5 h-5"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>

                {/* Category small floating tag */}
                <span className="absolute top-4 left-4 p-1.5 px-3 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-950/80 backdrop-blur-md text-accent-gold border border-white/5 select-none z-10">
                  {project.category}
                </span>
              </div>

              {/* Card Text & Information Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow justify-between border-t border-white/5">
                <div>
                  {/* Tag list pill containers */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium tracking-wide text-slate-500 bg-slate-950/30 p-1 px-2.5 rounded-full border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-accent-gold transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Visit external URL trigger link */}
                <a
                  href={project.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-accent-gold tracking-widest uppercase hover:text-white transition-colors duration-300"
                >
                  Visit Website
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="w-3.5 h-3.5"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
