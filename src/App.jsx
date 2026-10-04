import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import JourneySection from './components/JourneySection';
import StackedProjectsSection from './components/StackedProjectsSection';
import DesignProcess from './components/DesignProcess';
import WhenICanHelp from './components/WhenICanHelp';
import LookingForSection from './components/LookingForSection';
import SkillsAndTools from './components/SkillsAndTools';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingScrollToTop from './components/FloatingScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-white text-zinc-900 selection:bg-zinc-950 selection:text-white flex flex-col font-sans relative">
      
      {/* 1:1 Replicated Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section with 3 CTAs & exact Lottie illustration */}
        <Hero />

        {/* Client Logos Ribbon ("A FEW OF THE PLACES I WORKED") */}
        <SocialProof />

        {/* "My journey through design" with animated car & timeline */}
        <JourneySection />

        {/* "Products I've worked on" with Sticky Scroll Stack Cards */}
        <StackedProjectsSection />

        {/* "My Design Process" with 6 pastel steps & medal illustration */}
        <DesignProcess />

        {/* "When I can help?" with 2x2 grid & ringing clock illustration */}
        <WhenICanHelp />

        {/* "Are you’re looking for.." with 2x2 white cards & cap/glasses illustration */}
        <LookingForSection />

        {/* Capabilities & Toolchain Bento */}
        <SkillsAndTools />

        {/* About Section & Milestones */}
        <AboutSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Return To Top CTA */}
      <FloatingScrollToTop />
    </div>
  );
}
