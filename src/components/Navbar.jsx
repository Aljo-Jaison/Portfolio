import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById('home');
      if (heroEl) {
        const heroBottom = heroEl.offsetTop + heroEl.offsetHeight;
        // Trigger when scrolled near the end of or past the hero section
        setScrolledPastHero(window.scrollY > (heroBottom - 120));
      } else {
        setScrolledPastHero(window.scrollY > 400);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 w-full z-50 bg-white/75 backdrop-blur-md border-b border-zinc-200/50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-4 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2 group shrink-0">
          <img 
            src="/assets/logo.svg" 
            alt="Aljo K J Logo" 
            className="h-7 sm:h-8 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-[14px] sm:text-[15px]">
          <a 
            href="#home" 
            className="font-medium text-zinc-600 hover:text-zinc-950 transition-colors"
          >
            Home
          </a>
          <a 
            href="#works" 
            className="font-medium text-zinc-600 hover:text-zinc-950 transition-colors"
          >
            My Works
          </a>

          {/* Dynamic "About me" link that smoothly appears when scrolling past Hero */}
          <div 
            className={`overflow-hidden transition-all duration-300 ease-out flex items-center ${
              scrolledPastHero 
                ? 'max-w-[120px] opacity-100 translate-x-0' 
                : 'max-w-0 opacity-0 -translate-x-3 pointer-events-none'
            }`}
          >
            <a 
              href="#about" 
              className="font-medium text-zinc-600 hover:text-zinc-950 transition-colors whitespace-nowrap"
            >
              About me
            </a>
          </div>

          {/* Resume Download Button */}
          <a
            href="/resume.pdf"
            download="Aljo_KJ_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200/80 text-xs font-semibold text-zinc-700 hover:text-zinc-950 hover:border-zinc-300 hover:bg-zinc-50/80 transition-all shadow-xs"
            title="Download Resume"
          >
            <Download className="w-3.5 h-3.5 text-zinc-500" />
            <span>Resume</span>
          </a>

          {/* Dynamic "Contact me" CTA Button that smoothly appears when scrolling past Hero */}
          <div 
            className={`overflow-hidden transition-all duration-300 ease-out flex items-center ${
              scrolledPastHero 
                ? 'max-w-[160px] opacity-100 scale-100 ml-1' 
                : 'max-w-0 opacity-0 scale-95 pointer-events-none ml-0'
            }`}
          >
            <a
              href="#contact"
              className="btn-primary px-4 py-2 text-xs sm:text-sm rounded-lg whitespace-nowrap"
            >
              Contact me
            </a>
          </div>
        </nav>

        {/* Mobile Navigation controls */}
        <div className="md:hidden flex items-center gap-2">
          {/* Mobile dynamic Contact CTA when scrolled past Hero */}
          {scrolledPastHero && (
            <a
              href="#contact"
              className="btn-primary px-3 py-1.5 text-xs rounded-lg"
            >
              Contact me
            </a>
          )}

          <a
            href="/resume.pdf"
            download="Aljo_KJ_Resume.pdf"
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-zinc-200 text-xs font-semibold text-zinc-700 hover:text-zinc-950"
            title="Download Resume"
          >
            <Download className="w-3.5 h-3.5 text-zinc-500" />
            <span>Resume</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-700 hover:text-zinc-950 rounded-lg hover:bg-zinc-100/60 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown with matching translucent glassmorphism */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-zinc-200/60 px-6 py-5 space-y-4 text-sm animate-in fade-in duration-150">
          <a 
            href="#home" 
            onClick={() => setMobileMenuOpen(false)}
            className="block font-medium text-zinc-800 hover:text-zinc-950 py-1"
          >
            Home
          </a>
          <a 
            href="#works" 
            onClick={() => setMobileMenuOpen(false)}
            className="block font-medium text-zinc-800 hover:text-zinc-950 py-1"
          >
            My Works
          </a>
          <a 
            href="#about" 
            onClick={() => setMobileMenuOpen(false)}
            className="block font-medium text-zinc-800 hover:text-zinc-950 py-1"
          >
            About me
          </a>
          <a 
            href="/resume.pdf" 
            download="Aljo_KJ_Resume.pdf"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between font-medium text-zinc-800 hover:text-zinc-950 py-1"
          >
            <span>Resume</span>
            <Download className="w-4 h-4 text-zinc-500" />
          </a>
          <div className="pt-2 border-t border-zinc-100">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary w-full text-center px-4 py-2.5 text-xs rounded-lg"
            >
              Contact me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
