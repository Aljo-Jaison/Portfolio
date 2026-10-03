import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle, BarChart2, Layers } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/50 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-2xl border border-zinc-200 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-zinc-100 flex items-center justify-between sticky top-0 bg-white z-10">
          <div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded bg-zinc-100 text-zinc-700">
              {project.category}
            </span>
            <h3 className="text-2xl font-extrabold text-zinc-950 mt-2">
              {project.title}
            </h3>
            <p className="text-xs text-zinc-500 font-medium">
              {project.tagline}
            </p>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-zinc-400 hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Overview */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              Challenge & Solution
            </h4>
            <p className="text-sm text-zinc-700 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-zinc-50 border border-zinc-200/80">
            {project.metrics.map((m, i) => (
              <div key={i} className="space-y-0.5">
                <div className="text-xs text-zinc-500">{m.label}</div>
                <div className="text-xl font-black text-zinc-950 flex items-center gap-1.5">
                  <span>{m.value}</span>
                  <BarChart2 className="w-4 h-4 text-emerald-600" />
                </div>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              Key Contributions & Milestones
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stack & Tools */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              Design Deliverables & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t, i) => (
                <span key={i} className="px-3 py-1 bg-zinc-100 text-zinc-700 rounded-lg text-xs font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-zinc-100 bg-zinc-50 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/60 transition-colors"
          >
            Close
          </button>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-950 text-white text-xs font-semibold hover:bg-zinc-800 transition-colors shadow-sm"
          >
            <span>Visit Live Product</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
