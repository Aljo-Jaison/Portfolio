import React from 'react';
import { Layers, Sparkles, Cpu, Code2, TrendingUp, Check } from 'lucide-react';
import { skillsAndTools } from '../data/portfolioData';

export default function SkillsAndTools() {
  return (
    <section id="capabilities" className="py-20 md:py-28 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold text-zinc-700">
            <Sparkles className="w-3.5 h-3.5 text-zinc-900" />
            <span>Specializations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
            Skills & toolchain honed over 6+ years
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            I work across the full product lifecycle: from preliminary stakeholder alignment to production-ready design systems and code-level feasibility.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsAndTools.map((skill, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-zinc-50/60 border border-zinc-200/80 hover:border-zinc-300 hover:bg-white hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-md bg-white border border-zinc-200/70 text-zinc-600">
                    {skill.level}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-zinc-300 group-hover:bg-zinc-950 transition-colors"></div>
                </div>

                <h3 className="text-base font-bold text-zinc-950 group-hover:text-zinc-900">
                  {skill.name}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-zinc-200/60 flex items-center gap-1.5 text-xs text-zinc-500 font-medium">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Production tested</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
