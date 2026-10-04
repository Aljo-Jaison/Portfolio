import React from 'react';

const lookingForCards = [
  {
    icon: '/assets/lookingfor/bulb.webp',
    title: 'A Team Lead',
    description: 'A reliable and experienced UX/UI designer to help you create intuitive and user-centered designs.',
  },
  {
    icon: '/assets/lookingfor/trophy.webp',
    title: 'UX Researcher',
    description: 'Someone to conduct user research and analysis, and to inform your design decisions.',
  },
  {
    icon: '/assets/lookingfor/coffee.webp',
    title: 'Un-Finished Design',
    description: 'Expertise in wireframing, prototyping, and visual design to bring your ideas to life.',
  },
  {
    icon: '/assets/lookingfor/cookies.webp',
    title: 'Redesign Existing App',
    description: 'Design strategy and consulting to help you align your designs with your business goals',
  },
];

export default function LookingForSection() {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-zinc-100">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        
        {/* Header with Cap & Glasses Illustration matching screenshot */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              Are you’re looking for..
            </h2>
            <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
              Solutions that blend usability, scalability, and stunning design, built with purpose, not just pixels.
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

          {/* Cap, Glasses & Notepad Illustration */}
          <div className="hidden md:block shrink-0">
            <img 
              src="/assets/lookingfor/hat-glasses.webp" 
              alt="Design Essentials" 
              className="w-24 sm:w-28 h-auto object-contain"
            />
          </div>
        </div>

        {/* 2x2 White Rounded Cards Grid matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lookingForCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 sm:p-10 border border-zinc-200/60 shadow-xs hover:border-zinc-300 hover:shadow-sm transition-all duration-200 space-y-5"
            >
              {/* Illustration Icon */}
              <div className="h-12 flex items-center">
                <img 
                  src={card.icon} 
                  alt={card.title} 
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </div>

              {/* Title & Description */}
              <div className="space-y-1.5">
                <h3 className="text-base sm:text-lg font-bold text-zinc-950 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
