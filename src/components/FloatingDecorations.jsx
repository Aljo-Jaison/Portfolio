import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function FloatingDecorations() {
  return (
    <>
      {/* Right Edge: Awwwards "W. Nominee" Badge */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col items-center bg-white border-l border-y border-zinc-200/80 rounded-l-md px-1.5 py-3 shadow-xs hover:bg-zinc-50 transition-colors cursor-pointer group">
        <span className="font-bold text-xs text-zinc-900 group-hover:scale-110 transition-transform">
          W.
        </span>
        <div className="h-4"></div>
        <span className="text-[10px] font-semibold tracking-widest text-zinc-500 uppercase [writing-mode:vertical-lr] rotate-180">
          Nominee
        </span>
      </div>

      {/* Bottom Center: Floating Social Pill */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 bg-white/95 backdrop-blur-md border border-zinc-200 px-3.5 py-1.5 rounded-full shadow-lg">
        {/* X / Twitter icon */}
        <a 
          href="https://x.com" 
          target="_blank" 
          rel="noreferrer" 
          className="w-5 h-5 rounded bg-black text-white text-[10px] font-bold flex items-center justify-center hover:opacity-80 transition-opacity"
          title="X / Twitter"
        >
          𝕏
        </a>

        <span className="text-zinc-300 text-xs">•</span>

        {/* Upwork text badge */}
        <a 
          href="https://upwork.com" 
          target="_blank" 
          rel="noreferrer" 
          className="text-xs font-bold text-zinc-900 hover:text-emerald-600 transition-colors"
          title="Upwork"
        >
          up
        </a>

        <span className="text-zinc-300 text-xs">•</span>

        {/* Dribbble icon */}
        <a 
          href="https://dribbble.com" 
          target="_blank" 
          rel="noreferrer" 
          className="w-4 h-4 rounded-full border border-zinc-800 text-zinc-900 flex items-center justify-center text-[9px] font-bold hover:text-rose-500 hover:border-rose-500 transition-colors"
          title="Dribbble"
        >
          🏀
        </a>
      </div>

      {/* Bottom Right: Floating Chat Widget Button */}
      <button 
        className="fixed bottom-5 right-6 z-40 w-12 h-12 rounded-full bg-zinc-950 text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all focus:outline-none"
        title="Live Chat"
        aria-label="Open Chat"
      >
        <MessageSquare className="w-5 h-5 fill-white" />
      </button>
    </>
  );
}
