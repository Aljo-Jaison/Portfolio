import React, { createContext, useContext, useState, useEffect } from 'react';

const NavigationContext = createContext({
  currentPage: 'home',
  navigate: () => {},
  mobileMenuOpen: false,
  setMobileMenuOpen: () => {},
});

const PAGE_TITLES = {
  home: 'Aljo K J - UI/UX Product Designer',
  works: 'Works & Case Studies | Aljo K J - UI/UX Product Designer',
  about: 'About Me & Journey | Aljo K J - UI/UX Product Designer',
  contact: 'Contact & Discovery Call | Aljo K J - UI/UX Product Designer',
};

export function NavigationProvider({ children }) {
  const getInitialPage = () => {
    if (typeof window === 'undefined') return 'home';
    const path = window.location.pathname.toLowerCase().replace(/\/$/, '');
    const hash = window.location.hash.toLowerCase().replace(/^#/, '');

    if (path === '/works' || hash === 'works' || hash === 'process') return 'works';
    if (path === '/about' || hash === 'about' || hash === 'journey') return 'about';
    if (path === '/contact' || hash === 'contact') return 'contact';
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState(getInitialPage);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Keep page title synchronized
  useEffect(() => {
    document.title = PAGE_TITLES[currentPage] || PAGE_TITLES.home;
  }, [currentPage]);

  // Lock body scroll and prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navigate = (page, options = {}) => {
    const { targetId = null, replace = false } = options;
    const validPages = ['home', 'works', 'about', 'contact'];
    const targetPage = validPages.includes(page) ? page : 'home';

    setCurrentPage(targetPage);
    setMobileMenuOpen(false);

    const path = targetPage === 'home' ? '/' : `/${targetPage}`;
    const fullUrl = targetId ? `${path}#${targetId}` : path;

    if (replace) {
      window.history.replaceState({ page: targetPage }, '', fullUrl);
    } else {
      window.history.pushState({ page: targetPage }, '', fullUrl);
    }

    if (targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Listen to browser Back / Forward buttons & Hash changes
  useEffect(() => {
    const handleUrlChange = () => {
      const page = getInitialPage();
      setCurrentPage(page);
      setMobileMenuOpen(false);

      // If there's an anchor hash on popstate, scroll to it
      const hash = window.location.hash.replace(/^#/, '');
      if (hash) {
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 60);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);

    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

  return (
    <NavigationContext.Provider value={{ currentPage, navigate, mobileMenuOpen, setMobileMenuOpen }}>
      {children}
    </NavigationContext.Provider>
  );
}

export const useNavigation = () => useContext(NavigationContext);
