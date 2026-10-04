import React, { useState } from 'react';
import { 
  Sparkles, 
  Compass, 
  GraduationCap, 
  Crown, 
  Palette, 
  Lightbulb, 
  Blocks 
} from 'lucide-react';
import CarIllustration from './CarIllustration';

export default function JourneySection() {
  const [selectedYear, setSelectedYear] = useState('all');

  const timelineYears = [
    { year: '2026', color: 'text-zinc-950 font-bold' },
    { year: '2025', color: 'text-zinc-900 font-semibold' },
    { year: '2024', color: 'text-zinc-800 font-medium' },
    { year: '2023', color: 'text-zinc-700 font-medium' },
    { year: '2022', color: 'text-zinc-600 font-medium' },
  ];

  const milestones = [
    {
      id: 1,
      year: '2026',
      icon: Sparkles,
      prefix: 'Started as ',
      highlight: 'Founding Product Designer',
      organization: 'Columsprout AI',
      date: "Jan '26 – Present",
    },
    {
      id: 2,
      year: '2025',
      icon: Compass,
      prefix: 'Leading as ',
      highlight: 'Lead Product Manager',
      organization: 'Prism Browser',
      date: "Jul '25 – Present",
    },
    {
      id: 3,
      year: '2025',
      icon: GraduationCap,
      prefix: 'Completed ',
      highlight: 'Product Design Internship',
      organization: 'SATCARD, IIT Palakkad',
      date: 'Sep 2025',
    },
    {
      id: 4,
      year: '2024',
      icon: Crown,
      prefix: 'Promoted to ',
      highlight: 'Design Lead',
      organization: 'IEEE SB CEK',
      date: 'Mar 2024',
    },
    {
      id: 5,
      year: '2023',
      icon: Palette,
      prefix: 'Completed ',
      highlight: 'UI/UX Design Internship',
      organization: 'Design Studio Program',
      date: 'Dec 2023',
    },
    {
      id: 6,
      year: '2023',
      icon: Lightbulb,
      prefix: 'Started as ',
      highlight: 'Design Intern',
      organization: 'IEEE SB CEK',
      date: 'Sep 2023',
    },
    {
      id: 7,
      year: '2022',
      icon: Blocks,
      prefix: 'Started as ',
      highlight: 'Design Intern',
      organization: 'GDG CEKNPY',
      date: 'Dec 2022',
    },
  ];

  const filteredMilestones = selectedYear === 'all' 
    ? milestones 
    : milestones.filter(m => m.year === selectedYear);

  return (
    <section id="journey" className="py-20 md:py-28 bg-white border-t border-zinc-100 overflow-hidden">
      <div className="site-container">
        
        {/* Animated Car over Bumps / Forest */}
        <div className="mb-4">
          <CarIllustration />
        </div>

        {/* Section Heading & Subtitle */}
        <div className="text-center space-y-2.5 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-950 tracking-tight">
            My journey through design
          </h2>
          <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
            Explore the milestones and experiences that have shaped my path across product design, management, and technical communities, year by year.
          </p>
        </div>

        {/* Scaled Horizontal Timeline Track Bar */}
        <div className="my-10 max-w-2xl sm:max-w-3xl mx-auto px-4">
          {/* Timeline Nodes & Connecting Bar */}
          <div className="relative flex items-center justify-between">
            {/* Background horizontal connecting line */}
            <div className="absolute top-[7px] left-3 right-3 h-[2px] bg-zinc-200 -z-0">
              {/* Green active highlight on the segment */}
              <div 
                className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-300"
                style={{
                  width: selectedYear === '2026' ? '20%' :
                         selectedYear === '2025' ? '40%' :
                         selectedYear === '2024' ? '60%' :
                         selectedYear === '2023' ? '80%' :
                         selectedYear === '2022' ? '100%' : '100%'
                }}
              ></div>
            </div>

            {/* Individual Year Markers */}
            {timelineYears.map((item, idx) => {
              const isSelected = selectedYear === item.year;
              const isAll = selectedYear === 'all';
              return (
                <button 
                  key={item.year}
                  type="button"
                  onClick={() => setSelectedYear(selectedYear === item.year ? 'all' : item.year)}
                  className="flex flex-col items-center group cursor-pointer relative z-10 bg-transparent border-none p-0 focus:outline-none"
                  aria-label={`Filter journey milestones for year ${item.year}`}
                >
                  {/* Dot */}
                  <div className={`w-3.5 h-3.5 rounded-full transition-all ${
                    isSelected
                      ? 'bg-emerald-500 ring-4 ring-emerald-100 scale-125'
                      : isAll && idx === 0
                      ? 'bg-emerald-500 ring-4 ring-emerald-100'
                      : 'bg-zinc-300 group-hover:bg-zinc-500 group-hover:scale-110'
                  }`}></div>

                  {/* Year Label */}
                  <span className={`text-xs sm:text-sm mt-3 transition-colors ${
                    isSelected 
                      ? 'text-emerald-600 font-bold underline underline-offset-4' 
                      : isAll && idx === 0
                      ? 'text-zinc-950 font-bold'
                      : 'text-zinc-600 font-medium group-hover:text-zinc-900'
                  }`}>
                    {item.year}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Reset / All filter indicator */}
          {selectedYear !== 'all' && (
            <div className="text-center mt-3">
              <button
                type="button"
                onClick={() => setSelectedYear('all')}
                className="text-xs font-semibold text-zinc-500 hover:text-zinc-950 underline cursor-pointer"
              >
                Showing {selectedYear} milestones (Click to view all years)
              </button>
            </div>
          )}
        </div>

        {/* Scaled Milestones Container - Spacious, Clean Monochrome Layout */}
        <div className="max-w-2xl sm:max-w-3xl mx-auto space-y-3 pt-2">
          {filteredMilestones.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white hover:bg-zinc-50/70 border border-zinc-200/70 hover:border-zinc-300 shadow-2xs transition-all duration-200"
              >
                {/* Left Side: Monochromatic Icon + Title & Org */}
                <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                  {/* Clean Monochromatic Neutral Icon Container */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-zinc-100 border border-zinc-200/80 flex items-center justify-center shrink-0 text-zinc-800 group-hover:text-zinc-950 group-hover:bg-zinc-200/60 transition-colors shadow-2xs">
                    <IconComponent className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2]" />
                  </div>

                  {/* Role Title & Organization */}
                  <div className="min-w-0">
                    <div className="text-sm sm:text-base text-zinc-950 font-semibold tracking-tight leading-snug">
                      <span className="font-normal text-zinc-600">{item.prefix}</span>
                      <strong className="font-bold text-zinc-950">{item.highlight}</strong>
                    </div>
                    <div className="text-xs sm:text-sm text-zinc-500 font-medium mt-0.5">
                      {item.organization}
                    </div>
                  </div>
                </div>

                {/* Right Side: Clean Date */}
                <div className="text-xs sm:text-sm font-semibold text-zinc-500 shrink-0 self-start sm:self-center pl-[50px] sm:pl-0 sm:text-right">
                  {item.date}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
