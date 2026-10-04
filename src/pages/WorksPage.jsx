import React from 'react';
import StackedProjectsSection from '../components/StackedProjectsSection';
import DesignProcess from '../components/DesignProcess';
import { useNavigation } from '../context/NavigationContext';
import { ArrowRight, UserCheck, Calendar } from 'lucide-react';

export default function WorksPage() {
  const { navigate } = useNavigation();

  return (
    <div className="w-full">
      {/* "Products I've worked on" with Sticky Scroll Stack Cards */}
      <StackedProjectsSection />

      {/* "My Design Process" with 6 pastel steps & medal illustration */}
      <DesignProcess />

      {/* Works Page Footer CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-zinc-50 border-t border-zinc-200/70">
        <div className="site-container">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-zinc-200/80 shadow-xs text-center space-y-5">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-700 text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-950"></span>
              <span>Next Steps</span>
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
              Like what you see? Let's take the next step.
            </h3>

            <p className="text-xs sm:text-sm text-zinc-600 max-w-xl mx-auto leading-relaxed">
              Explore my background, journey, and technical toolchain on the About page, or jump straight to scheduling a discovery call.
            </p>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => navigate('about')}
                className="btn-secondary px-5 py-2.5 text-xs sm:text-sm rounded-lg inline-flex items-center gap-2 cursor-pointer"
              >
                <UserCheck className="w-4 h-4 text-zinc-600" />
                <span>Read About My Journey</span>
              </button>

              <button
                type="button"
                onClick={() => navigate('contact')}
                className="btn-primary px-5 py-2.5 text-xs sm:text-sm rounded-lg inline-flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book A Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
