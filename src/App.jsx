import React from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingScrollToTop from './components/FloatingScrollToTop';
import HomePage from './pages/HomePage';
import WorksPage from './pages/WorksPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function PageContent() {
  const { currentPage, mobileMenuOpen } = useNavigation();

  return (
    <main
      className={`flex-1 transition-[filter,opacity] duration-300 ease-out ${
        mobileMenuOpen
          ? 'filter blur-[10px] opacity-65 md:filter-none md:opacity-100 pointer-events-none select-none'
          : ''
      }`}
    >
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'works' && <WorksPage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'contact' && <ContactPage />}
    </main>
  );
}

function PageFooter() {
  const { mobileMenuOpen } = useNavigation();

  return (
    <div
      className={`transition-[filter,opacity] duration-300 ease-out ${
        mobileMenuOpen
          ? 'filter blur-[10px] opacity-65 md:filter-none md:opacity-100 pointer-events-none select-none'
          : ''
      }`}
    >
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <NavigationProvider>
      <div className="min-h-screen w-full bg-white text-zinc-900 selection:bg-zinc-950 selection:text-white flex flex-col font-sans relative">
        {/* Universal Navbar across all pages */}
        <Navbar />

        {/* Dynamic Page Router with mobile menu blur */}
        <PageContent />

        {/* Universal Footer with mobile menu blur */}
        <PageFooter />

        {/* Floating Return To Top CTA */}
        <FloatingScrollToTop />
      </div>
    </NavigationProvider>
  );
}
