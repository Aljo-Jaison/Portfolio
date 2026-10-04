import React, { useState } from 'react';
import CarIllustration from './CarIllustration';

export default function JourneySection() {
  const [selectedYear, setSelectedYear] = useState('all');

  const timelineYears = [
    { year: '2025', active: true, color: 'text-zinc-950 font-bold' },
    { year: '2023', active: false, color: 'text-zinc-800 font-semibold' },
    { year: '2022', active: false, color: 'text-zinc-700 font-medium' },
    { year: '2019', active: false, color: 'text-zinc-600 font-medium' },
    { year: '2017', active: false, color: 'text-zinc-400 font-normal' },
    { year: '2016', active: false, color: 'text-zinc-300 font-normal' },
  ];

  const milestones = [
    {
      id: 1,
      year: '2025',
      icon: '/assets/journey/cup.svg',
      title: 'Nominated as Awwwards Young Jury',
      isBold: false,
      date: 'Mar 2025',
    },
    {
      id: 2,
      year: '2025',
      icon: '/assets/journey/contra.svg',
      title: 'Featured on Contra top 5%',
      isBold: false,
      date: 'Feb 2025',
    },
    {
      id: 3,
      year: '2024',
      icon: '/assets/journey/webflow.svg',
      prefix: 'Got verified ',
      highlight: 'Webflow Partner badge',
      date: 'Sep 2024',
    },
    {
      id: 4,
      year: '2023',
      icon: '/assets/journey/framer.svg',
      title: 'Featured on Framer Expert Developer',
      isBold: false,
      date: 'Apr 2023',
    },
    {
      id: 5,
      year: '2024',
      icon: '/assets/journey/cup.svg',
      prefix: 'Completed ',
      highlight: 'Product Design Internship',
      date: 'Jan 2024',
    },
    {
      id: 6,
      year: '2016',
      icon: '/assets/journey/globe.svg',
      title: '12+ Countries worked in',
      hasFlags: true,
      flags: ['🇺🇸', '🇬🇧', '🇨🇦', '🇨🇭', '🇺🇾', '🇦🇷', '🇩🇪', '🇨🇱'],
      date: 'From 2016',
    },
    {
      id: 7,
      year: '2015',
      icon: '/assets/journey/signature.svg',
      title: 'Started Flexlab Studio',
      isBold: false,
      date: 'Feb 2015',
    },
  ];

  const filteredMilestones = selectedYear === 'all' 
    ? milestones 
    : milestones.filter(m => m.year === selectedYear);

  return (
    <section id="journey" className="py-20 md:py-28 bg-white border-t border-zinc-100 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        
        {/* Animated Car over Bumps / Forest */}
        <div className="mb-4">
          <CarIllustration />
        </div>

        {/* Section Heading & Subtitle matching reference */}
        <div className="text-center space-y-2.5 max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-950 tracking-tight">
            My journey through design
          </h2>
          <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
            Explore the milestones and experiences that have shaped my career as a top ux designer, year by year.
          </p>
        </div>

        {/* Horizontal Timeline Track Bar matching the screenshot */}
        <div className="my-10 max-w-xl mx-auto px-2">
          {/* Timeline Nodes & Connecting Bar */}
          <div className="relative flex items-center justify-between">
            {/* Background horizontal connecting line */}
            <div className="absolute top-[5px] left-2 right-2 h-[2px] bg-zinc-200 -z-0">
              {/* Green active highlight on the left segment */}
              <div className="h-full w-1/5 bg-gradient-to-r from-emerald-500 to-emerald-400"></div>
            </div>

            {/* Individual Year Markers */}
            {timelineYears.map((item, idx) => (
              <div 
                key={item.year}
                onClick={() => setSelectedYear(selectedYear === item.year ? 'all' : item.year)}
                className="flex flex-col items-center group cursor-pointer relative z-10"
              >
                {/* Dot */}
                <div className={`w-3 h-3 rounded-full transition-transform group-hover:scale-125 ${
                  idx === 0 
                    ? 'bg-emerald-500 ring-4 ring-emerald-100' 
                    : idx < 4 
                    ? 'bg-zinc-300 group-hover:bg-zinc-500' 
                    : 'bg-zinc-200'
                }`}></div>

                {/* Year Label */}
                <span className={`text-xs sm:text-sm mt-3.5 transition-colors ${item.color} ${
                  selectedYear === item.year ? '!text-emerald-600 !font-bold underline underline-offset-4' : ''
                }`}>
                  {item.year}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones Vertical List matching reference */}
        <div className="max-w-xl mx-auto space-y-2 pt-2">
          {filteredMilestones.map((item) => (
            <div
              key={item.id}
              className="group flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-zinc-50/80 transition-colors"
            >
              {/* Left Side: Icon + Text */}
              <div className="flex items-center gap-3.5">
                {/* Rounded Icon Container */}
                <div className="w-8 h-8 rounded-lg bg-zinc-100/90 border border-zinc-200/50 flex items-center justify-center shrink-0 group-hover:bg-zinc-200/60 transition-colors">
                  <img 
                    src={item.icon} 
                    alt="" 
                    className="w-4 h-4 object-contain grayscale opacity-80 group-hover:opacity-100 transition-opacity" 
                  />
                </div>

                {/* Milestone Description */}
                <div className="text-xs sm:text-sm text-zinc-800 flex flex-wrap items-center gap-1.5">
                  {item.highlight ? (
                    <span>
                      {item.prefix}
                      <strong className="font-bold text-zinc-950">{item.highlight}</strong>
                    </span>
                  ) : (
                    <span className="text-zinc-800">{item.title}</span>
                  )}

                  {/* Country Flags if present */}
                  {item.hasFlags && (
                    <span className="inline-flex items-center gap-1 text-sm ml-1">
                      {item.flags.map((flag, i) => (
                        <span key={i} className="hover:scale-125 transition-transform cursor-default">
                          {flag}
                        </span>
                      ))}
                    </span>
                  )}
                </div>
              </div>

              {/* Right Side: Date */}
              <div className="text-xs sm:text-sm text-zinc-400 font-normal shrink-0 pl-3">
                {item.date}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
