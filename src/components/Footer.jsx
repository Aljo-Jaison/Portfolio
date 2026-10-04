import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useNavigation } from '../context/NavigationContext';

export default function Footer() {
  const { navigate } = useNavigation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-zinc-950 text-white py-10 sm:py-12 md:py-14 border-t border-zinc-900">
      <div className="site-container space-y-8 sm:space-y-10">
        
        {/* Top Section: Brand & Details on Left, Available Worldwide & Scroll to Top on Right */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 sm:gap-8 pb-8 sm:pb-10 border-b border-zinc-900">
          
          {/* Left: Name, Logo, and Subtext */}
          <div className="space-y-3 max-w-xl">
            <button 
              type="button"
              onClick={() => navigate('home')}
              className="flex items-center gap-3 text-left cursor-pointer group"
            >
              <img 
                src="/assets/logo-white.png" 
                alt="Aljo K J Logo" 
                className="h-7 sm:h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
              <span className="font-bold text-base sm:text-lg text-white tracking-tight">
                {personalInfo.name}
              </span>
            </button>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              UI/UX & Product Designer crafting simple, scalable, and high-impact digital experiences across web, mobile, and design systems.
            </p>
          </div>

          {/* Right: Available Worldwide Status + Scroll to top button */}
          <div className="flex items-center gap-3.5 sm:gap-4 shrink-0">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs sm:text-sm text-zinc-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-medium tracking-tight">
                Available Worldwide (Remote / Hybrid)
              </span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 sm:p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all cursor-pointer"
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
