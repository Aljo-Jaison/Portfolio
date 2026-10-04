import React from 'react';
import { Sparkles } from 'lucide-react';

const processSteps = [
  {
    step: 'Step 1/6',
    title: 'Understand the Problem',
    description: 'Clarify the business goals, user needs, technical constraints, and KPIs.',
    bg: 'bg-[#FDF2F7]',
  },
  {
    step: 'Step 2/6',
    title: 'Define the Experience',
    description: 'Map the user flow, define primary actions, identify edge cases.',
    bg: 'bg-[#FAF1E8]',
  },
  {
    step: 'Step 3/6',
    title: 'Wireframe the Structure',
    description: 'Start laying out the interface without getting lost in visual designs.',
    bg: 'bg-[#EBF4ED]',
  },
  {
    step: 'Step 4/6',
    title: 'Design the Interface',
    description: 'Apply design systems, colors, typography, spacing, and visual hierarchy.',
    bg: 'bg-[#F5EBE6]',
  },
  {
    step: 'Step 5/6',
    title: 'Prototype & Test',
    description: 'Create interactive flows and test with real users or stakeholders.',
    bg: 'bg-[#EEF0FA]',
  },
  {
    step: 'Step 6/6',
    title: 'Handoff & Iterate',
    description: 'Deliver specs to devs, support implementation, & iterate based on user data.',
    bg: 'bg-[#FDF0F4]',
  },
];

export default function DesignProcess() {
  return (
    <section id="process" className="py-20 md:py-28 bg-white border-t border-zinc-100">
      <div className="site-container">
        
        {/* Header with Medal Ribbon Illustration matching screenshot */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              My Design Process
            </h2>
            <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
              A user-centered, data-informed process, built to solve real problems, not just deliver pretty screens.
            </p>
            <div className="pt-2">
              <a
                href="#how-it-works"
                className="btn-primary px-5 py-2.5 text-xs rounded-lg"
              >
                How it works?
              </a>
            </div>
          </div>

          {/* Medal Illustration */}
          <div className="hidden md:flex items-center justify-center shrink-0 w-24 sm:w-28 h-20 sm:h-24">
            <img 
              src="/assets/sections/medal-icon.svg" 
              alt="Design Process Medal" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* 6 Process Cards Stacked Vertically matching screenshot */}
        <div className="space-y-4">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className={`${step.bg} rounded-2xl p-6 sm:p-7 border border-zinc-200/40 hover:border-zinc-300/80 transition-all duration-200 space-y-3`}
            >
              {/* Badge Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-zinc-200/60 shadow-2xs">
                <Sparkles className="w-3 h-3 text-zinc-400" />
                <span className="text-xs font-bold text-zinc-700">
                  {step.step}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-zinc-950 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
