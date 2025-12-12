import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-sm py-2' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="/" className="font-medium tracking-wide text-primary text-lg">
          LUXURY
        </a>

        <nav className="flex items-center gap-8 text-base font-semibold text-primary" aria-label="primary" role="navigation">
          <a href="/models/aurora" className="hover:opacity-80 transition-opacity" aria-label="Models"> 
            Models
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Ownership">
            Ownership
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Discover">
            Discover
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Search">
            Search
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
