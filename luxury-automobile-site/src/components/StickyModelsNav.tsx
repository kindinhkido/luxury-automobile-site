import React, { useEffect, useState } from 'react';

interface StickyNavProps {
  models: Array<{ id: string; name: string }>;
}

const StickyModelsNav: React.FC<StickyNavProps> = ({ models }) => {
  const [navOffset, setNavOffset] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const navElement = document.querySelector('.all-models-top-nav') as HTMLElement | null;
    const headerElement = document.querySelector('header') as HTMLElement | null;
    
    if (!navElement) return;

    // Set nav offset on mount
    setNavOffset(navElement.offsetTop);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const headerHeight = headerElement?.offsetHeight || 64;

      // Track if scrolled for transparency
      setIsScrolled(currentScrollY > 20);

      // If scrolled past nav original position, make it fixed
      if (currentScrollY >= navOffset - headerHeight) {
        navElement.style.position = 'fixed';
        navElement.style.top = headerHeight + 'px';
        navElement.style.left = '0';
        navElement.style.right = '0';
        navElement.style.zIndex = '40';
        navElement.style.width = '100%';
      } else {
        navElement.style.position = 'relative';
        navElement.style.top = 'auto';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navOffset]);

  return (
    <nav className={`all-models-top-nav transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-sm' : 'bg-white'
    } border-b border-gray-200`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-center gap-8">
          {models.map((model) => (
            <a
              key={model.id}
              href={`#${model.id}`}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors relative group"
            >
              {model.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default StickyModelsNav;
