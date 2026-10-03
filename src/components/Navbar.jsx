import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-transparent z-40 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-5 flex items-center justify-between">
        
        {/* Brand Logo matching the screenshot */}
        <a href="/" className="flex items-center gap-2 group">
          <img 
            src="/assets/logo.svg" 
            alt="Ashik Prottoy Logo" 
            className="h-8 sm:h-9 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[15px]">
          <a 
            href="#home" 
            className="font-bold text-zinc-950 transition-colors"
          >
            Home
          </a>
          <a 
            href="#works" 
            className="font-medium text-zinc-700 hover:text-zinc-950 transition-colors"
          >
            My Works
          </a>
          <a 
            href="#psychology" 
            className="font-medium text-zinc-700 hover:text-zinc-950 transition-colors"
          >
            Psychology
          </a>

          {/* Resources Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setResourcesOpen(!resourcesOpen)}
              onBlur={() => setTimeout(() => setResourcesOpen(false), 200)}
              className="font-medium text-zinc-700 hover:text-zinc-950 transition-colors flex items-center gap-1.5 focus:outline-none"
            >
              <span>Resources</span>
              <ChevronDown className="w-4 h-4 text-zinc-500 stroke-[2]" />
            </button>

            {resourcesOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-card border border-zinc-100 py-2 z-50 text-sm">
                <a href="#courses" className="block px-4 py-2 text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950">
                  Courses
                </a>
                <a href="#case-studies" className="block px-4 py-2 text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950">
                  Case Studies
                </a>
                <a href="#moodboard" className="block px-4 py-2 text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950">
                  Moodboard
                </a>
                <a href="#blogs" className="block px-4 py-2 text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950">
                  Blogs
                </a>
              </div>
            )}
          </div>

          {/* Log In Button */}
          <a
            href="#signin"
            className="ml-2 px-5 py-2 rounded-lg border border-zinc-200 text-zinc-900 font-medium text-sm hover:border-zinc-300 hover:bg-zinc-50 transition-all"
          >
            Log In
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href="#signin"
            className="px-3.5 py-1.5 rounded-lg border border-zinc-200 text-zinc-900 font-medium text-xs hover:bg-zinc-50"
          >
            Log In
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-700 hover:text-zinc-950"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-zinc-100 px-6 py-4 space-y-3 text-sm">
          <a 
            href="#home" 
            onClick={() => setMobileMenuOpen(false)}
            className="block font-bold text-zinc-950 py-1"
          >
            Home
          </a>
          <a 
            href="#works" 
            onClick={() => setMobileMenuOpen(false)}
            className="block font-medium text-zinc-700 py-1"
          >
            My Works
          </a>
          <a 
            href="#psychology" 
            onClick={() => setMobileMenuOpen(false)}
            className="block font-medium text-zinc-700 py-1"
          >
            Psychology
          </a>
          <a 
            href="#courses" 
            onClick={() => setMobileMenuOpen(false)}
            className="block font-medium text-zinc-700 py-1"
          >
            Resources & Case Studies
          </a>
        </div>
      )}
    </header>
  );
}
