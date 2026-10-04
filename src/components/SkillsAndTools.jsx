import React from 'react';
import { Layers, Compass, Code2, TrendingUp } from 'lucide-react';

const specializations = [
  {
    name: 'Figma & FigJam',
    roleTag: 'Design Ops',
    description: 'Auto-layout wizardry, advanced component variants, design tokens, and interactive variables for rock-solid design ops.',
    iconType: 'image',
    iconSrc: '/assets/tools/figma.svg',
  },
  {
    name: 'Product Strategy & UX',
    roleTag: 'UX Strategist',
    description: 'User research, journey mapping, heuristic evaluations, and data-informed product discovery to solve real problems.',
    iconType: 'lucide',
    LucideIcon: Compass,
  },
  {
    name: 'Design Systems & Tokens',
    roleTag: 'System Architect',
    description: 'Scalable enterprise component libraries, multi-brand themes, and WCAG accessibility standards built for speed.',
    iconType: 'lucide',
    LucideIcon: Layers,
  },
  {
    name: 'Prototyping & Motion',
    roleTag: 'Motion & Micro-UX',
    description: 'Interactive flows, micro-interactions, and clickable high-fidelity prototypes that communicate intent, reduce friction, and delight users.',
    iconType: 'image',
    iconSrc: '/assets/tools/lottie.svg',
  },
  {
    name: 'Developer Handoff & Implementation',
    roleTag: 'Design to Code',
    description: 'End-to-end design support, organized Figma files, and clear component specifications to ensure smooth, pixel-perfect engineering handoff.',
    iconType: 'lucide',
    LucideIcon: Code2,
  },
  {
    name: 'Conversion Optimization',
    roleTag: 'Proven Growth',
    description: 'A/B testing flows, funnel drop-off diagnosis, checkout streamline, and UX copy alignment that measurably move metrics.',
    iconType: 'lucide',
    LucideIcon: TrendingUp,
  },
];

export default function SkillsAndTools() {
  return (
    <section id="specialisations" className="py-20 md:py-28 bg-white border-t border-zinc-100">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        
        {/* Section Header matching When I Can Help & Are You Looking For */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              Design Specialisations
            </h2>
            <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed tracking-normal">
              Honed across 1+ years of internship and design experience—from strategic UX discovery to design system architecture and code-level developer handoff.
            </p>
            <div className="pt-2">
              <a
                href="#contact"
                className="btn-secondary px-5 py-2.5 text-xs rounded-lg"
              >
                Let's Book a Free Call
              </a>
            </div>
          </div>

          {/* Header Illustration */}
          <div className="hidden md:block shrink-0">
            <img 
              src="/assets/sections/design-tools.svg" 
              alt="Design Tools & Specialisations" 
              className="w-24 sm:w-28 h-auto object-contain"
            />
          </div>
        </div>

        {/* 2x3 White Rounded Cards Grid matching LookingForSection style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {specializations.map((spec, index) => {
            const Icon = spec.LucideIcon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-zinc-200/60 shadow-xs hover:border-zinc-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between group"
              >
                {/* Card Top: Icon & Role Badge */}
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-200/60 flex items-center justify-center p-2.5 group-hover:bg-zinc-100/80 transition-colors shadow-2xs">
                      {spec.iconType === 'image' ? (
                        <img 
                          src={spec.iconSrc} 
                          alt={spec.name} 
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <Icon className="w-5 h-5 text-zinc-900 stroke-[1.8]" />
                      )}
                    </div>

                    <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-md bg-zinc-50 border border-zinc-200/70 text-zinc-600">
                      {spec.roleTag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-base sm:text-lg font-bold text-zinc-950 tracking-tight">
                      {spec.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed tracking-normal">
                      {spec.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
