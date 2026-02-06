'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: '#ki-praxis', label: 'KI in der Praxis' },
  { href: '#consulting', label: 'Consulting' },
  { href: '#netzwerk', label: 'Netzwerk' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-md border-b border-white/10 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between gap-8" style={{ height: '80px' }}>
          {/* Logo - Left */}
          <Link href="/" className="flex items-center">
            <div className="font-bold text-2xl text-[#FF5722] hover:text-[#E64A19] transition-colors">
              aight estates
            </div>
          </Link>

          {/* Center Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-[#FF5722] transition-colors duration-200 font-medium text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right CTA Button */}
          <div className="flex items-center space-x-4">
            <a
              href="#kontakt"
              className="hidden md:inline-flex items-center bg-[#FF5722] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#E64A19] transition-all hover:scale-105 text-sm"
            >
              Kontakt
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 hover:text-[#FF5722] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/5">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-white/80 hover:text-[#FF5722] transition-colors py-2 text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="block bg-[#FF5722] text-white px-6 py-3 rounded-full font-semibold text-center mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Kontakt
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
