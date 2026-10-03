import React, { useState } from 'react';
import { Compass, Network, Palette, CheckCircle2, ArrowRight } from 'lucide-react';
import { processSteps } from '../data/portfolioData';

const stepIcons = [Compass, Network, Palette, CheckCircle2];

export default function DesignProcess() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-20 md:py-28 bg-zinc-50/70 border-t border-zinc-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-zinc-200 text-xs font-semibold text-zinc-700 shadow-xs">
            <span>Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
            A user-centered process built for measurable velocity
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            I don't just produce aesthetic interfaces — I build repeatable product systems designed to solve business bottlenecks and ship cleanly.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, idx) => {
            const Icon = stepIcons[idx];
            const isSelected = activeStep === idx;

            return (
              <div
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-zinc-950 shadow-card ring-1 ring-zinc-950'
                    : 'bg-white/80 border-zinc-200/80 hover:border-zinc-300 hover:bg-white shadow-xs'
                }`}
              >
                <div className="space-y-4">
                  
                  {/* Step Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-lg ${
                      isSelected ? 'bg-zinc-950 text-white' : 'bg-zinc-100 text-zinc-500'
                    }`}>
                      Phase {step.step}
                    </span>
                    <div className={`p-2 rounded-xl transition-colors ${
                      isSelected ? 'bg-zinc-100 text-zinc-950' : 'text-zinc-400'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-zinc-950">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="pt-6 mt-6 border-t border-zinc-100 space-y-2">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                    Key Deliverables
                  </div>
                  <ul className="space-y-1.5">
                    {step.deliverables.map((d, i) => (
                      <li key={i} className="flex items-center gap-1.5 text-xs text-zinc-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Guarantee Callout */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-zinc-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm text-zinc-700">
            <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 font-bold shrink-0">
              ✓
            </div>
            <div>
              <span className="font-semibold text-zinc-900">Developer-Ready Handoff Guarantee:</span> Every screen includes spacing tokens, interactive states, responsive rules, and exportable assets.
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-950 hover:underline shrink-0"
          >
            <span>Discuss your timeline</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
