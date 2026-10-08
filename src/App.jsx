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
          ? 'filter blur-[8px] opacity-65 md:filter-none md:opacity-100'
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
          ? 'filter blur-[8px] opacity-65 md:filter-none md:opacity-100'
          : ''
      }`}
    >
      <Footer />
    </div>
  );
}

function MainApp() {
  const { mobileMenuOpen, setMobileMenuOpen } = useNavigation();

  return (
    <div className="min-h-screen w-full bg-white text-zinc-900 selection:bg-zinc-950 selection:text-white flex flex-col font-sans relative">
      {/* Universal Navbar across all pages (z-50) */}
      <Navbar />

      {/* Full-screen backdrop overlay: covers entire screen below the header (z-40) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-zinc-950/40 backdrop-blur-md md:hidden transition-opacity duration-200 cursor-pointer"
          onClick={() => setMobileMenuOpen(false)}
          onTouchMove={(e) => e.preventDefault()}
          aria-hidden="true"
        />
      )}

      {/* Dynamic Page Router */}
      <PageContent />

      {/* Universal Footer */}
      <PageFooter />

      {/* Floating Return To Top CTA */}
      <FloatingScrollToTop />
    </div>
  );
}

export default function App() {
  return (
    <NavigationProvider>
      <MainApp />
    </NavigationProvider>
  );
}
