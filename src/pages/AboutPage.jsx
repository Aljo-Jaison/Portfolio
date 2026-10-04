import React from 'react';
import AboutSection from '../components/AboutSection';
import JourneySection from '../components/JourneySection';
import SkillsAndTools from '../components/SkillsAndTools';
import { useNavigation } from '../context/NavigationContext';
import { ArrowRight, Layers, Calendar } from 'lucide-react';

export default function AboutPage() {
  const { navigate } = useNavigation();

  return (
    <div className="w-full">
      {/* About Section: Bio, Portrait Illustration & Milestones */}
      <AboutSection />

      {/* "My journey through design" with animated car & timeline */}
      <JourneySection />

      {/* Capabilities & Toolchain Bento */}
      <SkillsAndTools />

      {/* About Page Footer CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-zinc-50 border-t border-zinc-200/70">
        <div className="site-container">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-zinc-200/80 shadow-xs text-center space-y-5">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-700 text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-950"></span>
              <span>Collaborate With Aljo</span>
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
              Ready to create intuitive, high-conversion experiences?
            </h3>

            <p className="text-xs sm:text-sm text-zinc-600 max-w-xl mx-auto leading-relaxed">
              Explore the full case studies of products I've delivered, or reach out directly to talk about your next project or role.
            </p>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => navigate('works')}
                className="btn-secondary px-5 py-2.5 text-xs sm:text-sm rounded-lg inline-flex items-center gap-2 cursor-pointer"
              >
                <Layers className="w-4 h-4 text-zinc-600" />
                <span>Browse Products & Case Studies</span>
              </button>

              <button
                type="button"
                onClick={() => navigate('contact')}
                className="btn-primary px-5 py-2.5 text-xs sm:text-sm rounded-lg inline-flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Get In Touch / Book Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
