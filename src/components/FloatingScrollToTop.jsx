import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function FloatingScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Must be scrolled down past hero/top area
      const scrolledDown = window.scrollY > 350;

      // 2. Check if the footer has entered the viewport
      const footerEl = document.getElementById('footer');
      let footerVisible = false;
      if (footerEl) {
        const rect = footerEl.getBoundingClientRect();
        // If footer's top edge has entered the window screen
        footerVisible = rect.top < window.innerHeight;
      }

      // Show only when scrolled down AND footer is NOT on screen
      setIsVisible(scrolledDown && !footerVisible);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-40 transition-all duration-300 ease-out ${
        isVisible
          ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 scale-75 translate-y-4 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-zinc-950/90 hover:bg-zinc-950 text-white border border-zinc-800/90 shadow-lg hover:shadow-xl backdrop-blur-md flex items-center justify-center transition-all duration-200 cursor-pointer group active:scale-95 hover:-translate-y-0.5"
        title="Return to top"
        aria-label="Return to top"
      >
        <ArrowUp className="w-5 h-5 text-zinc-300 group-hover:text-white transition-colors" />
      </button>
    </div>
  );
}
