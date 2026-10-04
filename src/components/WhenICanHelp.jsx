import React from 'react';
import { Check } from 'lucide-react';

const helpPoints = [
  {
    title: 'Launching a New Product or Service?',
    description: "I craft user-centric designs to enhance your brand's identity and captivate your audience.",
  },
  {
    title: 'Need a Website or App Redesign?',
    description: 'I transform digital platforms with intuitive designs, boosting user engagement and satisfaction.',
  },
  {
    title: 'Improving User Engagement?',
    description: 'I optimize user journeys and implement interactive elements for increased customer loyalty.',
  },
  {
    title: 'Seeking Expert UX Strategy?',
    description: 'I provide guidance on defining user personas, competitive analysis, and strategic UX initiatives',
  },
];

export default function WhenICanHelp() {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-zinc-100">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        
        {/* Header with Ringing Alarm Clock Illustration matching screenshot */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              When I can help?
            </h2>
            <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
              When you're building from scratch, scaling fast, or stuck in a design rut, I jump in with clarity, strategy, and craft.
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

          {/* Clock Illustration */}
          <div className="hidden md:block shrink-0">
            <img 
              src="/assets/sections/clock-icon.webp" 
              alt="Alarm Clock" 
              className="w-24 sm:w-28 h-auto object-contain"
            />
          </div>
        </div>

        {/* 2x2 Grid with green checkmarks matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 pt-2">
          {helpPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-3.5">
              {/* Green checkmark circle */}
              <div className="w-5 h-5 rounded-full bg-[#16A34A] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>

              {/* Title & Description */}
              <div className="space-y-1">
                <h3 className="text-sm sm:text-[15px] font-bold text-zinc-950 tracking-tight">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
