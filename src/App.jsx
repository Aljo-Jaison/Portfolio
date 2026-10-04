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
  const { currentPage } = useNavigation();

  return (
    <main className="flex-1">
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'works' && <WorksPage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'contact' && <ContactPage />}
    </main>
  );
}

export default function App() {
  return (
    <NavigationProvider>
      <div className="min-h-screen w-full bg-white text-zinc-900 selection:bg-zinc-950 selection:text-white flex flex-col font-sans relative">
        {/* Universal Navbar across all pages */}
        <Navbar />

        {/* Dynamic Page Router */}
        <PageContent />

        {/* Universal Footer across all pages */}
        <Footer />

        {/* Floating Return To Top CTA */}
        <FloatingScrollToTop />
      </div>
    </NavigationProvider>
  );
}
