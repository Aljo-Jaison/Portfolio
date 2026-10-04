import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, BarChart3, Sparkles, Eye } from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function ProjectsShowcase({ onSelectProject }) {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'saas', label: 'SaaS Platforms' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'systems', label: 'Design Systems' },
  ];

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'saas') return p.category.includes('SaaS');
    if (filter === 'mobile') return p.category.includes('Mobile');
    if (filter === 'systems') return p.category.includes('Design System') || p.category.includes('Branding');
    return true;
  });

  return (
    <section id="works" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold text-zinc-700">
              <Sparkles className="w-3.5 h-3.5 text-zinc-900" />
              <span>Selected Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
              Products designed with precision & business impact
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              Every project is guided by real user research, measurable business KPIs, and a developer-friendly design system.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-zinc-100/90 p-1.5 rounded-2xl border border-zinc-200/80 self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  filter === cat.id
                    ? 'bg-white text-zinc-950 shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-950 hover:bg-white/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl border border-zinc-200/90 shadow-sm hover:shadow-card hover:border-zinc-300 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              
              {/* Card Header & Content */}
              <div className="p-6 sm:p-8 space-y-5">
                
                {/* Category & Live Link */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold bg-zinc-100 text-zinc-800 border border-zinc-200/60">
                    {project.category}
                  </span>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-medium text-zinc-500 hover:text-zinc-950 transition-colors"
                  >
                    <span>View Details</span>
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 group-hover:text-zinc-800 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-zinc-500 mt-1">
                    {project.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-zinc-600 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Key Metrics Box (Aljo style high-trust proof) */}
                <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/70">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <div className="text-[11px] font-medium text-zinc-400">
                        {metric.label}
                      </div>
                      <div className="text-lg font-bold text-zinc-950 flex items-center gap-1">
                        <span>{metric.value}</span>
                        <BarChart3 className="w-3.5 h-3.5 text-emerald-600 opacity-80" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-zinc-100/70 text-zinc-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Illustrative Preview Mockup Area */}
              <div className={`p-6 border-t border-zinc-100 ${project.bgColor} relative overflow-hidden group-hover:bg-opacity-80 transition-colors`}>
                
                {/* SVG Visual Mockup based on project type */}
                <div className="bg-white rounded-xl border border-zinc-200/80 shadow-xs p-4 transform group-hover:scale-[1.01] transition-transform duration-300">
                  
                  {project.mockupType === 'dashboard' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-zinc-100">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-rose-400"></div>
                          <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                          <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                          <span className="text-[10px] font-mono text-zinc-400 ml-1">app.pulseflow.io</span>
                        </div>
                        <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Live Cluster</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-10 bg-zinc-50 rounded-lg p-2 border border-zinc-100">
                          <div className="h-1.5 w-8 bg-zinc-200 rounded"></div>
                          <div className="h-2.5 w-12 bg-zinc-800 rounded mt-1.5"></div>
                        </div>
                        <div className="h-10 bg-zinc-50 rounded-lg p-2 border border-zinc-100">
                          <div className="h-1.5 w-8 bg-zinc-200 rounded"></div>
                          <div className="h-2.5 w-10 bg-indigo-600 rounded mt-1.5"></div>
                        </div>
                        <div className="h-10 bg-zinc-50 rounded-lg p-2 border border-zinc-100">
                          <div className="h-1.5 w-8 bg-zinc-200 rounded"></div>
                          <div className="h-2.5 w-14 bg-zinc-800 rounded mt-1.5"></div>
                        </div>
                      </div>
                      <div className="h-16 bg-zinc-50 rounded-lg p-2.5 border border-zinc-100 flex items-end gap-1.5">
                        <div className="w-1/6 bg-indigo-200 h-60% rounded-t"></div>
                        <div className="w-1/6 bg-indigo-300 h-80% rounded-t"></div>
                        <div className="w-1/6 bg-indigo-200 h-50% rounded-t"></div>
                        <div className="w-1/6 bg-indigo-400 h-90% rounded-t"></div>
                        <div className="w-1/6 bg-indigo-500 h-75% rounded-t"></div>
                        <div className="w-1/6 bg-indigo-600 h-100% rounded-t"></div>
                      </div>
                    </div>
                  )}

                  {project.mockupType === 'mobile' && (
                    <div className="max-w-[240px] mx-auto space-y-2.5 py-1">
                      <div className="flex items-center justify-between text-[10px] text-zinc-400 px-1">
                        <span>9:41</span>
                        <div className="flex gap-1">
                          <div className="w-2.5 h-1.5 bg-zinc-300 rounded-xs"></div>
                          <div className="w-2 h-2 rounded-full bg-zinc-300"></div>
                        </div>
                      </div>
                      <div className="p-3 bg-zinc-950 text-white rounded-xl space-y-1">
                        <div className="text-[10px] text-zinc-400">Total Treasury Balance</div>
                        <div className="text-base font-bold">$248,910.45</div>
                        <div className="text-[10px] text-emerald-400">Instant Global Payout Active</div>
                      </div>
                      <div className="flex gap-1.5">
                        <div className="flex-1 py-1 bg-zinc-100 rounded text-center text-[10px] font-medium text-zinc-700">Send</div>
                        <div className="flex-1 py-1 bg-zinc-100 rounded text-center text-[10px] font-medium text-zinc-700">Request</div>
                        <div className="flex-1 py-1 bg-zinc-100 rounded text-center text-[10px] font-medium text-zinc-700">FX Swap</div>
                      </div>
                    </div>
                  )}

                  {project.mockupType === 'ecommerce' && (
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between pb-1.5 border-b border-zinc-100">
                        <span className="text-[11px] font-bold text-zinc-800">KŌHĪ / COFFEE SUBSCRIPTION</span>
                        <span className="text-[10px] font-mono text-amber-600 bg-amber-50 px-2 py-0.5 rounded">Roast Profile A</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-amber-50/50 p-2.5 rounded-lg border border-amber-100/60">
                          <div className="text-[10px] text-zinc-500">Ethiopia Yirgacheffe</div>
                          <div className="text-xs font-bold text-zinc-900 mt-0.5">$22.00 / bi-weekly</div>
                        </div>
                        <div className="bg-zinc-50 p-2.5 rounded-lg border border-zinc-100">
                          <div className="text-[10px] text-zinc-500">Guatemala Antigua</div>
                          <div className="text-xs font-bold text-zinc-900 mt-0.5">$24.00 / bi-weekly</div>
                        </div>
                      </div>
                      <div className="w-full py-1.5 bg-zinc-900 text-white text-center rounded text-[11px] font-medium">
                        Custom Grind Selector • 1-Click Subscribe
                      </div>
                    </div>
                  )}

                  {project.mockupType === 'system' && (
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between pb-1.5 border-b border-zinc-100">
                        <span className="text-[11px] font-mono text-zinc-500">tokens.aura.design</span>
                        <span className="text-[10px] font-mono text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded">v2.1 Tokens</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="flex-1 p-2 rounded bg-cyan-500/10 border border-cyan-500/20 text-center text-[10px] font-mono text-cyan-800">
                          primary-500
                        </div>
                        <div className="flex-1 p-2 rounded bg-emerald-500/10 border border-emerald-500/20 text-center text-[10px] font-mono text-emerald-800">
                          success-500
                        </div>
                        <div className="flex-1 p-2 rounded bg-zinc-900 text-white text-center text-[10px] font-mono">
                          radius: 12px
                        </div>
                      </div>
                      <div className="h-6 bg-zinc-100 rounded flex items-center px-2 text-[10px] text-zinc-500 font-mono">
                        WCAG 2.1 AAA Compliant Contrast Grid
                      </div>
                    </div>
                  )}

                </div>

                {/* Bottom Card CTA bar */}
                <div className="flex items-center justify-between mt-4">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-950 hover:underline"
                  >
                    <span>Read Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-zinc-500 hover:text-zinc-800 font-medium"
                  >
                    <span>Live Preview</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
