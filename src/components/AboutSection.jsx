import React from 'react';
import { Check } from 'lucide-react';

const trustMetrics = [
  {
    iconSrc: '/assets/journey/contra.svg',
    isBadge: false,
    tag: 'Network',
    title: 'LinkedIn Network',
    description: 'Connecting with product creators, engineering teams, and founders globally.',
  },
  {
    iconSrc: '/assets/journey/globe.svg',
    isBadge: false,
    tag: 'Experience',
    title: '1+ Years Experience',
    description: 'Hands-on internship background shipping clean, user-centered digital products.',
  },
  {
    iconSrc: '/assets/journey/cup.svg',
    isBadge: false,
    tag: 'Craft',
    title: 'High-Fidelity UI/UX',
    description: 'Dedicated to clean aesthetics, seamless usability, and meticulous attention to detail.',
  },
];

const careerMilestones = [
  {
    year: "Jan '26 – Present",
    role: 'Founding Product Designer - AI & SaaS',
    company: 'columsproutAI',
    description: 'Owning end-to-end product design for AI-powered SaaS workflows, building a scalable design system with reusable components and tokens, and delivering developer-ready Figma specifications.',
  },
  {
    year: "May '25 – Sep '25",
    role: 'UI/UX Designer Intern',
    company: 'SATCARD - IIT PALAKKAD',
    description: 'Designed mobile and web experiences (TUTOZ learning platform), conducted usability testing with 15+ users, and collaborated closely with engineering teams for production-ready handoff.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white border-t border-zinc-100">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        
        {/* Section Header matching When I Can Help & Are You Looking For */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              About Me
            </h2>
            <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed tracking-normal">
              Passionate about clarity, design craft & user empowerment—turning complex design problems into intuitive, high-conversion products.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="btn-secondary px-5 py-2.5 text-xs rounded-lg"
              >
                Let's Book a Free Call
              </a>
              <a
                href="https://www.linkedin.com/in/aljo-kj/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold text-zinc-700 hover:text-zinc-950 hover:bg-zinc-50 border border-zinc-200/80 transition-all shadow-xs"
              >
                <span>Check My LinkedIn Profile</span>
                <span className="text-zinc-400">↗</span>
              </a>
            </div>
          </div>

          {/* Designer Accessories Illustration */}
          <div className="hidden md:block shrink-0">
            <img 
              src="/assets/lookingfor/hat-glasses.webp" 
              alt="Designer Essentials" 
              className="w-24 sm:w-28 h-auto object-contain opacity-90"
            />
          </div>
        </div>

        {/* 1. Core Story Card */}
        <div className="bg-white rounded-2xl p-7 sm:p-9 border border-zinc-200/60 shadow-xs hover:border-zinc-300 hover:shadow-sm transition-all duration-200 mb-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-zinc-100">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <span className="text-xs font-bold text-zinc-900 tracking-tight">
                UI/UX Product Designer
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>1+ Years Internship & Design Experience</span>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-zinc-600 leading-relaxed tracking-normal">
            <p>
              Over the past 1+ years of hands-on internship experience, I’ve collaborated with founders, product teams, and developers to transform ambitious concepts into usable, well-crafted products that solve real problems.
            </p>
            <p>
              I believe great design isn't about unnecessary decoration or bloated animations. It’s about reducing cognitive friction, clarifying navigation, and giving users an effortless path to their goals.
            </p>
            <p>
              With practical grounding in <strong className="font-semibold text-zinc-900">user research</strong>, <strong className="font-semibold text-zinc-900">information architecture</strong>, and <strong className="font-semibold text-zinc-900">developer-ready Figma design systems</strong>, I create intuitive digital platforms that align seamlessly with business goals.
            </p>
          </div>
        </div>

        {/* 2. Three Trust & Recognition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {trustMetrics.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-zinc-200/60 shadow-xs hover:border-zinc-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-200/60 flex items-center justify-center p-2 shadow-2xs">
                    <img 
                      src={item.iconSrc} 
                      alt={item.title} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-md bg-zinc-50 border border-zinc-200/70 text-zinc-600">
                    {item.tag}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-zinc-950 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed tracking-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3. Career Track Record & Milestones */}
        <div className="bg-white rounded-2xl p-7 sm:p-9 border border-zinc-200/60 shadow-xs hover:border-zinc-300 hover:shadow-sm transition-all duration-200 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-zinc-950 tracking-tight">
                Career Track Record
              </h3>
              <p className="text-xs text-zinc-500 mt-0.5">
                Key internship & project roles
              </p>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-zinc-50 border border-zinc-200/70 text-zinc-600">
              2025 – Present
            </span>
          </div>

          <div className="space-y-6 pt-1">
            {careerMilestones.map((milestone, idx) => (
              <div 
                key={idx} 
                className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-6 border-b border-zinc-100 last:border-b-0 last:pb-0"
              >
                <div className="space-y-1 sm:max-w-md">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                    <h4 className="text-sm sm:text-[15px] font-bold text-zinc-950 tracking-tight">
                      {milestone.role}
                    </h4>
                  </div>
                  <div className="text-xs font-medium text-emerald-700 pl-4">
                    {milestone.company}
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed tracking-normal pl-4 pt-0.5">
                    {milestone.description}
                  </p>
                </div>
                <div className="text-xs font-mono text-zinc-400 pl-4 sm:pl-0 sm:shrink-0">
                  {milestone.year}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-zinc-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-zinc-500">
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
              Case Studies & References available upon request
            </span>
            <a
              href="#contact"
              className="font-semibold text-zinc-950 hover:underline"
            >
              Inquire for details →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
