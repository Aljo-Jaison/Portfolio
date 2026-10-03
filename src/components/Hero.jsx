import React from 'react';
import HeroIllustration from './HeroIllustration';

export default function Hero() {
  return (
    <section id="home" className="relative pt-8 pb-16 md:pt-14 md:pb-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Left Column: Content & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left max-w-xl">
            
            {/* "Available for work" green pill badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF8EF] border border-[#BCE8CA]">
              <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
              <span className="text-xs font-medium text-[#16A34A] tracking-tight">
                Available for work
              </span>
            </div>

            {/* Headline Group */}
            <div className="space-y-2">
              <h4 className="text-lg sm:text-xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
                <span>👋 Hi! I'm Ashik Prottoy & your go-to</span>
              </h4>
              
              <h1 className="text-5xl sm:text-6xl font-black text-zinc-950 tracking-tight leading-[1.08]">
                Product Designer
              </h1>
              
              <p className="text-zinc-500 text-sm sm:text-base leading-relaxed pt-1">
                for startups to large organizations, transforming complex design problems into simple solutions.
              </p>
            </div>

            {/* Avatar Group + Satisfied Clients Proof */}
            <div className="flex items-center gap-3 pt-1">
              <img 
                src="/assets/avatar-group.svg" 
                alt="100+ Satisfied Clients" 
                className="h-9 w-auto object-contain"
              />
              <span className="text-xs sm:text-sm font-medium text-[#1F70E5] hover:underline cursor-pointer">
                100+ Happy And Satisfied Clients
              </span>
            </div>

            {/* The 3 CTAs requested by the user: See my works, About me, Contact me */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* CTA 1: See my works (Solid Black) */}
              <a
                href="#works"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-zinc-950 text-white font-semibold text-sm hover:bg-zinc-800 transition-colors shadow-xs"
              >
                See my works
              </a>

              {/* CTA 2: About me (White with 1px border) */}
              <a
                href="#about"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-zinc-900 border border-zinc-200 font-semibold text-sm hover:bg-zinc-50 hover:border-zinc-300 transition-colors shadow-xs"
              >
                About me
              </a>

              {/* CTA 3: Contact me */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-zinc-800 border border-zinc-200 font-semibold text-sm hover:bg-zinc-50 hover:border-zinc-300 transition-colors shadow-xs"
              >
                Contact me
              </a>
            </div>

            {/* Subtle footer note under buttons matching the screenshot */}
            <p className="text-xs text-zinc-400 font-normal pt-1">
              I work independently, offering exceptional value and quality in my services.
            </p>

          </div>

          {/* Right Column: Exact Character Illustration Lottie Animation */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <HeroIllustration />
          </div>

        </div>
      </div>
    </section>
  );
}
