import React from 'react';
import { Award, Globe2, Briefcase, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function AboutSection() {
  const milestones = [
    { year: '2025–Present', role: 'Staff Product Designer', org: 'Ventures & Studio Advisory', detail: 'Designing high-growth B2B platforms and advising venture-backed founders.' },
    { year: '2023–2025', role: 'Lead UI/UX Designer', org: 'SaaS & Fintech Client Roster', detail: 'Shipped design systems and mobile apps with millions in monthly transaction volume.' },
    { year: '2021–2023', role: 'Senior Product Designer', org: 'Digital Product Agency', detail: 'Led design teams through 20+ zero-to-one product sprints and redesigns.' },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-zinc-50/50 border-t border-zinc-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-zinc-200 text-xs font-semibold text-zinc-700 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-zinc-900" />
              <span>About Me</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
              Passionate about clarity, design craft & user empowerment
            </h2>

            <div className="space-y-4 text-zinc-600 text-sm sm:text-base leading-relaxed">
              <p>
                Over the past 6+ years, I’ve worked with founders, product managers, and engineering teams to transform ambitious concepts into usable, beloved products.
              </p>
              <p>
                I believe great design isn't about unnecessary animations or superficial decoration. It’s about reducing cognitive friction, clarifying navigation, and giving users a fast, delightful path to their goals.
              </p>
              <p>
                When I’m not designing component libraries in Figma, I’m exploring micro-typography, advising early-stage builders, and studying user psychology.
              </p>
            </div>

            {/* Credibility Badges (Ashik-style recognition) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
              <div className="p-3.5 rounded-xl bg-white border border-zinc-200/80 shadow-xs space-y-1">
                <Award className="w-4 h-4 text-amber-500" />
                <div className="text-xs font-bold text-zinc-900">Top Rated Plus</div>
                <div className="text-[10px] text-zinc-500">Global UX Rank</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-zinc-200/80 shadow-xs space-y-1">
                <Globe2 className="w-4 h-4 text-cyan-600" />
                <div className="text-xs font-bold text-zinc-900">12+ Countries</div>
                <div className="text-[10px] text-zinc-500">Cross-border teams</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-zinc-200/80 shadow-xs space-y-1">
                <Heart className="w-4 h-4 text-rose-500" />
                <div className="text-xs font-bold text-zinc-900">99% Client Trust</div>
                <div className="text-[10px] text-zinc-500">Repeated partnerships</div>
              </div>
            </div>
          </div>

          {/* Right Column: Experience Timeline */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-zinc-200/90 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-zinc-950 pb-3 border-b border-zinc-100 flex items-center justify-between">
              <span>Career Track Record</span>
              <span className="text-xs font-normal text-zinc-400">2021 – Present</span>
            </h3>

            <div className="space-y-6">
              {milestones.map((m, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-zinc-200 last:border-l-0 space-y-1">
                  <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-zinc-950"></div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-zinc-950">{m.role}</span>
                    <span className="font-mono text-zinc-400 text-[11px]">{m.year}</span>
                  </div>
                  <div className="text-xs font-medium text-emerald-700">{m.org}</div>
                  <p className="text-xs text-zinc-600 pt-0.5 leading-relaxed">{m.detail}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Full CV & References available upon request
              </span>
              <a
                href="#contact"
                className="font-semibold text-zinc-950 hover:underline"
              >
                Inquire →
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
