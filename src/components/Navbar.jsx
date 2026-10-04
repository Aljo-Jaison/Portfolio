import React, { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentPage, navigate } = useNavigation();

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'works', label: 'My Works' },
    { id: 'about', label: 'About me' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId, e) => {
    if (e) e.preventDefault();
    navigate(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200/50 transition-colors duration-200">
      <div className="site-container py-3.5 sm:py-4 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="/" 
          onClick={(e) => handleNavClick('home', e)}
          className="flex items-center gap-2 group shrink-0" 
          aria-label="Aljo K J - Home"
        >
          <img 
            src="/assets/logo-black.png" 
            alt="Aljo K J Logo" 
            className="h-7 sm:h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 sm:gap-7 text-[14px] sm:text-[15px]">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <a
                key={link.id}
                href={link.id === 'home' ? '/' : `/${link.id}`}
                onClick={(e) => handleNavClick(link.id, e)}
                className={`transition-colors py-1 relative ${
                  isActive 
                    ? 'font-bold text-zinc-950' 
                    : 'font-medium text-zinc-600 hover:text-zinc-950'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-zinc-950 rounded-full animate-in fade-in" />
                )}
              </a>
            );
          })}

          {/* Resume Download Button (Hidden when viewing About page per user preference) */}
          <div 
            className={`overflow-hidden transition-all duration-300 ease-out flex items-center ${
              currentPage !== 'about' 
                ? 'max-w-[130px] opacity-100 scale-100 ml-1' 
                : 'max-w-0 opacity-0 scale-95 pointer-events-none'
            }`}
          >
            <a
              href="/resume.pdf"
              download="Aljo_KJ_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200/80 text-xs font-semibold text-zinc-700 hover:text-zinc-950 hover:border-zinc-300 hover:bg-zinc-50/80 transition-all shadow-xs whitespace-nowrap"
              title="Download Resume"
            >
              <Download className="w-3.5 h-3.5 text-zinc-500" />
              <span>Resume</span>
            </a>
          </div>

          {/* Desktop "Contact me" CTA Button */}
          {currentPage !== 'contact' && (
            <a
              href="/contact"
              onClick={(e) => handleNavClick('contact', e)}
              className="btn-primary px-4 py-2 text-xs sm:text-sm rounded-lg whitespace-nowrap ml-1 cursor-pointer"
            >
              Contact me
            </a>
          )}
        </nav>

        {/* Mobile Navigation controls */}
        <div className="md:hidden flex items-center gap-2">
          {/* Mobile dynamic Contact CTA when not on contact page */}
          {currentPage !== 'contact' && (
            <a
              href="/contact"
              onClick={(e) => handleNavClick('contact', e)}
              className="btn-primary px-3 py-1.5 text-xs rounded-lg cursor-pointer"
            >
              Contact
            </a>
          )}

          {/* Mobile Resume Button (Hidden when viewing About page) */}
          {currentPage !== 'about' && (
            <a
              href="/resume.pdf"
              download="Aljo_KJ_Resume.pdf"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-zinc-200 text-xs font-semibold text-zinc-700 hover:text-zinc-950 whitespace-nowrap"
              title="Download Resume"
            >
              <Download className="w-3.5 h-3.5 text-zinc-500" />
              <span>Resume</span>
            </a>
          )}

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
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-zinc-200/60 px-6 py-5 space-y-3.5 text-sm animate-in fade-in duration-150">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <a
                key={link.id}
                href={link.id === 'home' ? '/' : `/${link.id}`}
                onClick={(e) => handleNavClick(link.id, e)}
                className={`block py-1.5 transition-colors cursor-pointer ${
                  isActive 
                    ? 'font-bold text-zinc-950' 
                    : 'font-medium text-zinc-700 hover:text-zinc-950'
                }`}
              >
                {link.label}
              </a>
            );
          })}

          <a 
            href="/resume.pdf" 
            download="Aljo_KJ_Resume.pdf"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between font-medium text-zinc-700 hover:text-zinc-950 py-1.5"
          >
            <span>Resume</span>
            <Download className="w-4 h-4 text-zinc-500" />
          </a>

          {currentPage !== 'contact' && (
            <div className="pt-2 border-t border-zinc-100">
              <a
                href="/contact"
                onClick={(e) => handleNavClick('contact', e)}
                className="btn-primary w-full text-center px-4 py-2.5 text-xs rounded-lg block cursor-pointer"
              >
                Contact me
              </a>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
