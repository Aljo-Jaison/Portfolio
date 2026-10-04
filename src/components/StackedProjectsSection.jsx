import React from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const projectCards = [
  {
    id: 'columsprout',
    category: 'SaaS eCommerce',
    categoryColor: 'text-[#4F46E5]',
    title: 'Columsprout AI',
    tagline: 'AI Agents for eCommerce Growth',
    description: 'Transforming customer engagement, proactive storefront assistance, and sales conversions for modern brands with intelligent on-site AI agents.',
    buttonText: 'Visit Columsprout AI',
    link: 'https://columsprout.ai/',
    domain: 'columsprout.ai',
    bgCard: 'bg-[#EEF2FF]',
    buttonBg: 'bg-[#E0E7FF] hover:bg-[#C7D2FE]',
    buttonTextCol: 'text-indigo-950',
    logoSrc: '/assets/clients/columsprout.png',
    tags: ['AI Agents', 'eCommerce Growth', 'SaaS Platform', 'Storefront UI'],
  },
  {
    id: 'tutoz',
    category: 'EdTech & AI Learning',
    categoryColor: 'text-[#0284C7]',
    title: 'Tutoz',
    tagline: 'Where Every Doubt Leads to Discovery',
    description: 'India’s first AI-powered learning app developed in collaboration with IIT Palakkad. Delivering 24/7 personalized tutoring, adaptive STEM explanations, and interactive doubt resolution.',
    buttonText: 'Visit Tutoz',
    link: 'https://tutoz.in/',
    domain: 'tutoz.in',
    bgCard: 'bg-[#F0F9FF]',
    buttonBg: 'bg-[#E0F2FE] hover:bg-[#BAE6FD]',
    buttonTextCol: 'text-sky-950',
    logoSrc: '/assets/clients/tutoz.png',
    tags: ['EdTech', 'AI Learning App', 'IIT Palakkad', 'STEM Education'],
  },
  {
    id: 'ceknpy',
    category: 'Higher Ed & Institutional Web',
    categoryColor: 'text-[#16A34A]',
    title: 'College of Engineering Karunagappally',
    tagline: 'Official Institutional Campus Web Portal',
    description: 'Redesigned the official digital campus portal for CEK (IHRD, Govt. of Kerala), centralizing academic departments, admissions, placements, and student resources into an accessible, responsive experience.',
    buttonText: 'Visit CEK Website',
    link: 'https://ceknpy.vercel.app/',
    domain: 'ceknpy.vercel.app',
    bgCard: 'bg-[#F0FDF4]',
    buttonBg: 'bg-[#DCFCE7] hover:bg-[#BBF7D0]',
    buttonTextCol: 'text-emerald-950',
    logoSrc: '/assets/clients/ceknpy.png',
    tags: ['Higher Education', 'Institutional Portal', 'UI/UX Redesign', 'WCAG 2.2 AA'],
  },
  {
    id: 'mkskab',
    category: 'Engineering & Industrial Contracting',
    categoryColor: 'text-[#B45309]',
    title: 'MK SKAB General Constructions',
    tagline: 'Civil Engineering, Heavy Equipment & Contracting KSA',
    description: 'Corporate web presence for a premier industrial contracting group in Saudi Arabia, highlighting heavy machinery rental fleets, infrastructure engineering, and turn-key industrial services.',
    buttonText: 'Visit MK SKAB',
    link: 'https://www.mkskab.com/',
    domain: 'mkskab.com',
    bgCard: 'bg-[#FFFBEB]',
    buttonBg: 'bg-[#FEF3C7] hover:bg-[#FDE68A]',
    buttonTextCol: 'text-amber-950',
    logoSrc: '/assets/clients/mkskab.png',
    tags: ['Industrial Contracting', 'Heavy Equipment Fleet', 'Civil Engineering', 'Corporate Web'],
  },
];

export default function StackedProjectsSection() {
  return (
    <section id="works" className="py-20 md:py-28 bg-white border-t border-zinc-100">
      <div className="site-container">
        
        {/* Section Header with Sketchpad Illustration matching reference */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              Products I've worked on
            </h2>
            <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
              Worked closely with the clients to understand their business goals and the needs of their target audience, designing interfaces that solved core problems and elevated their brand.
            </p>
            <div className="pt-2">
              <a
                href="https://www.behance.net/aljojaison"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-lg border border-zinc-200 text-zinc-900 text-xs font-semibold hover:bg-zinc-50 hover:border-zinc-300 transition-colors shadow-xs"
              >
                View All Design Works
              </a>
            </div>
          </div>

          {/* Sketchpad / Notepad Illustration */}
          <div className="hidden md:flex items-center justify-center shrink-0 w-24 sm:w-28 h-20 sm:h-24">
            <img 
              src="/assets/cards/notepad.webp" 
              alt="Design Notepad" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Scrollable Stack Container */}
        <div className="relative pb-24">
          {projectCards.map((card, index) => (
            <div
              key={card.id}
              style={{
                zIndex: index + 10,
                '--card-top': `${80 + index * 42}px`,
              }}
              className={`relative lg:sticky top-auto lg:top-[var(--card-top)] ${card.bgCard} rounded-2xl sm:rounded-3xl border border-zinc-200/50 shadow-[0_12px_36px_rgba(0,0,0,0.04)] mb-8 sm:mb-10 lg:mb-14 transition-all duration-300 overflow-hidden`}
            >
              <div className="p-6 sm:p-10 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column: Details & Tags */}
                  <div className="lg:col-span-6 space-y-6">
                    
                    {/* Category Label */}
                    <div>
                      <span className={`text-xs sm:text-sm font-bold tracking-tight uppercase ${card.categoryColor}`}>
                        {card.category}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-2">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
                        {card.title}
                      </h3>
                      <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    {/* Feature & Domain Tags */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {card.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md text-xs font-semibold bg-white/80 border border-zinc-200/60 text-zinc-700 shadow-2xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Bottom CTA Action Button */}
                    <div className="pt-2">
                      <a
                        href={card.link}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center justify-between w-full sm:w-auto sm:min-w-[200px] px-4 py-2.5 rounded-xl ${card.buttonBg} ${card.buttonTextCol} text-xs sm:text-sm font-bold transition-all group`}
                      >
                        <span>{card.buttonText}</span>
                        <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>

                  </div>

                  {/* Right Column: White Mockup Card with Logo */}
                  <div className="lg:col-span-6 flex items-center justify-center">
                    <div className="w-full bg-white rounded-2xl shadow-sm border border-zinc-200/60 p-6 sm:p-10 aspect-[4/3] flex flex-col justify-between relative group hover:shadow-md transition-shadow">
                      
                      {/* Browser Mockup Top Bar */}
                      <div className="flex items-center justify-between self-stretch pb-3 border-b border-zinc-100">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[11px] font-medium text-zinc-400">
                          <span>{card.domain}</span>
                          <ExternalLink className="w-3 h-3 text-zinc-300 group-hover:text-zinc-600 transition-colors" />
                        </div>
                      </div>

                      {/* Centered Brand Logo */}
                      <div className="flex-1 flex items-center justify-center py-6 px-4">
                        <img 
                          src={card.logoSrc} 
                          alt={card.title}
                          className="max-h-20 sm:max-h-24 max-w-[220px] sm:max-w-[280px] w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-2xs"
                        />
                      </div>

                      {/* Bottom Domain / Subtitle Indicator */}
                      <div className="pt-2 border-t border-zinc-100 text-center">
                        <span className="text-[11px] sm:text-xs font-semibold text-zinc-500 tracking-wide uppercase">
                          {card.tagline}
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
