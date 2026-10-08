import React from 'react';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import WhenICanHelp from '../components/WhenICanHelp';
import LookingForSection from '../components/LookingForSection';
import { useNavigation } from '../context/NavigationContext';
import { ArrowRight, Send } from 'lucide-react';

export default function HomePage() {
  const { navigate } = useNavigation();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero />

      {/* Client Logos Ribbon ("A FEW OF THE PLACES I WORKED") */}
      <SocialProof />

      {/* "When I can help?" with 2x2 grid & ringing clock illustration */}
      <WhenICanHelp />

      {/* "Are you’re looking for.." with 2x2 white cards & cap/glasses illustration */}
      <LookingForSection />

      {/* Next Step Navigation Banner */}
      <section className="py-12 sm:py-16 md:py-20 bg-zinc-50 border-t border-zinc-200/70">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            
            {/* Card 1: Explore Works */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-zinc-200/80 shadow-xs hover:shadow-md hover:border-zinc-300 transition-all duration-200 flex flex-col justify-between group">
              <div className="space-y-2.5">
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                  Explore Products I've Built
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Dive into real-world case studies across healthcare AI, institutional portals, and SaaS platforms — including design systems and metrics.
                </p>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => navigate('works')}
                  className="btn-primary w-full sm:w-auto px-5 py-2.5 text-xs sm:text-sm rounded-lg flex items-center justify-center gap-2 group-hover:gap-3 transition-all cursor-pointer"
                >
                  <span>View All Works</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>

            {/* Card 2: Contact & Discovery Call */}
            <div className="bg-zinc-950 text-white rounded-2xl p-6 sm:p-8 border border-zinc-900 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Available For New Projects</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Let's Build Something Great
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Have an early concept, need a 0-to-1 design partner, or want to discuss a full-time role? Book a 30-min discovery call or send a message.
                </p>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => navigate('contact')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white text-zinc-950 hover:bg-zinc-100 text-xs sm:text-sm font-semibold transition-all cursor-pointer group-hover:gap-3"
                >
                  <span>Book A Call / Contact</span>
                  <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
