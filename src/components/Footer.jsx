import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 text-white py-14 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-zinc-800/80">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white text-zinc-950 font-bold text-xs flex items-center justify-center">
                AKJ
              </div>
              <span className="font-bold text-base tracking-tight">{personalInfo.name}</span>
            </div>
            <p className="text-xs text-zinc-400 mt-1 max-w-sm">
              UI/UX & Product Designer crafting simple, scalable, and high-impact digital experiences.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-zinc-400">
            <a href="#works" className="hover:text-white transition-colors">Works</a>
            <a href="#process" className="hover:text-white transition-colors">Process</a>
            <a href="#capabilities" className="hover:text-white transition-colors">Capabilities</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors ml-2"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-5 text-zinc-400">
            <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href={personalInfo.socials.behance} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Behance</a>
            <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href={personalInfo.socials.pinterest} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Pinterest</a>
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>Available Worldwide (Remote / Hybrid)</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
