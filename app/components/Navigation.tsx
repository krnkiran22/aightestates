'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass' : 'bg-transparent'
    }`}>
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="font-display font-bold text-2xl text-white">
              aight <span className="highlight-orange">estates</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#ki-praxis" 
              className="text-white hover:text-[var(--primary-orange)] transition-colors duration-300 font-medium"
            >
              KI in der Praxis
            </a>
            <a 
              href="#consulting" 
              className="text-white hover:text-[var(--primary-orange)] transition-colors duration-300 font-medium"
            >
              Consulting
            </a>
            <a 
              href="#netzwerk" 
              className="text-white hover:text-[var(--primary-orange)] transition-colors duration-300 font-medium"
            >
              Netzwerk
            </a>
          </div>

          {/* CTA Button */}
          <div className="flex items-center">
            <a 
              href="#kontakt" 
              className="btn-primary hidden md:inline-block"
            >
              Kontakt
            </a>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden text-white p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}