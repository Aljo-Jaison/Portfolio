import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function TopBar() {
  return (
    <div className="bg-zinc-900 text-zinc-300 text-xs py-2 px-4 border-b border-zinc-800 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400">
            <Sparkles className="w-2.5 h-2.5" />
          </span>
          <span className="text-zinc-200 font-medium">Open for select design contracts & product advisory</span>
          <span className="hidden md:inline text-zinc-500">•</span>
          <span className="hidden md:inline text-zinc-400">Q2 / Q3 2026</span>
        </div>

        <div className="flex items-center gap-4 text-zinc-400">
          <span className="text-zinc-500 hidden sm:inline">Connect:</span>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors flex items-center gap-0.5"
          >
            LinkedIn <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>
          <span className="text-zinc-700">•</span>
          <a
            href={personalInfo.socials.dribbble}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors flex items-center gap-0.5"
          >
            Dribbble <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>
          <span className="text-zinc-700">•</span>
          <a
            href={personalInfo.socials.twitter}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors flex items-center gap-0.5"
          >
            X / Twitter <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>
        </div>
      </div>
    </div>
  );
}
