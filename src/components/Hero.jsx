import React from 'react';
import HeroIllustration from './HeroIllustration';

export default function Hero() {
  return (
    <section id="home" className="relative pt-8 pb-16 md:pt-14 md:pb-24 bg-white overflow-hidden">
      <div className="site-container">
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
                <span>👋 Hi! I'm Aljo K J & your go-to</span>
              </h4>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-zinc-950 tracking-tight leading-[1.08]">
                Product Designer
              </h1>
              
              <p className="text-zinc-500 text-sm sm:text-base leading-relaxed pt-1">
                for startups to large organizations, transforming complex design problems into simple solutions.
              </p>
            </div>

            {/* The 3 CTAs requested by the user: See my works, About me, Contact me */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              {/* CTA 1: See my works (Primary - inverts to secondary on hover) */}
              <a
                href="#works"
                className="btn-primary px-6 py-3 text-sm rounded-lg tracking-normal"
              >
                See my works
              </a>

              {/* CTA 2: About me (Secondary - fills to primary on hover) */}
              <a
                href="#about"
                className="btn-secondary px-6 py-3 text-sm rounded-lg tracking-normal"
              >
                About me
              </a>

              {/* CTA 3: Contact me (Secondary - fills to primary on hover) */}
              <a
                href="#contact"
                className="btn-secondary px-6 py-3 text-sm rounded-lg tracking-normal"
              >
                Contact me
              </a>
            </div>

            {/* Subtle note under buttons with generous breathing space */}
            <p className="text-xs sm:text-[13px] text-zinc-400 tracking-wider leading-relaxed pt-2">
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
