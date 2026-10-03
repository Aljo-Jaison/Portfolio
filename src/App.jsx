import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import JourneySection from './components/JourneySection';
import StackedProjectsSection from './components/StackedProjectsSection';
import DesignProcess from './components/DesignProcess';
import SkillsAndTools from './components/SkillsAndTools';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingDecorations from './components/FloatingDecorations';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-950 selection:text-white flex flex-col font-sans relative">
      
      {/* 1:1 Replicated Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1:1 Replicated Hero Section with 3 CTAs & exact Lottie illustration */}
        <Hero />

        {/* 1:1 Replicated Client Logos Ribbon ("A FEW OF THE PLACES I WORKED") */}
        <SocialProof />

        {/* 1:1 Replicated "My journey through design" with animated car & timeline */}
        <JourneySection />

        {/* 1:1 Replicated "Products I've worked on" with Sticky Scroll Stack Cards */}
        <StackedProjectsSection />

        {/* 4-Step Design Methodology */}
        <DesignProcess />

        {/* Capabilities & Toolchain Bento */}
        <SkillsAndTools />

        {/* About Section & Milestones */}
        <AboutSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating badges & widgets from screenshot (Awwwards Nominee, Social pill, Chat widget) */}
      <FloatingDecorations />
    </div>
  );
}
