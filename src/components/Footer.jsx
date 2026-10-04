import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 text-white py-14 border-t border-zinc-900">
      <div className="site-container space-y-10">
        
        {/* Top Section: Brand & Details on Left, Social Media Links on Right */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-10 border-b border-zinc-900">
          
          {/* Left: Name, Logo, Full-width Subtext, and Available Worldwide below */}
          <div className="space-y-3.5 max-w-2xl">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/logo-white.png" 
                alt="Aljo K J Logo" 
                className="h-7 sm:h-8 w-auto object-contain"
              />
              <span className="font-bold text-base sm:text-lg text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>

            {/* Filled subtext without artificial 2-line constraint */}
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              UI/UX & Product Designer crafting simple, scalable, and high-impact digital experiences across web, mobile, and design systems.
            </p>

            {/* Available Worldwide placed directly below Name, Logo, and Subtext */}
            <div className="pt-1 flex items-center gap-2 text-xs sm:text-sm text-zinc-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-medium text-zinc-300">
                Available Worldwide (Remote / Hybrid)
              </span>
            </div>
          </div>

          {/* Right: Navigation Links (Works, Process, About, Contact) + Scroll to top button */}
          <div className="flex flex-wrap items-center gap-5 sm:gap-6 text-xs sm:text-sm text-zinc-400 font-medium shrink-0">
            <a 
              href="#works" 
              className="hover:text-white transition-colors py-1"
            >
              Works
            </a>
            <a 
              href="#process" 
              className="hover:text-white transition-colors py-1"
            >
              Process
            </a>
            <a 
              href="#about" 
              className="hover:text-white transition-colors py-1"
            >
              About
            </a>
            <a 
              href="#contact" 
              className="hover:text-white transition-colors py-1"
            >
              Contact
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 sm:p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all cursor-pointer ml-1"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Section: Copyright placed in the exact middle */}
        <div className="pt-2 text-center flex items-center justify-center">
          <p className="text-xs sm:text-sm text-zinc-500 font-normal">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
