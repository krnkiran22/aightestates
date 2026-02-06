'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { name: 'KI in der Praxis', href: '#ki-praxis' },
  { name: 'Consulting', href: '#consulting' },
  { name: 'Netzwerk', href: '#netzwerk' },
  { name: 'Cases', href: '#cases' },
  { name: 'Blog', href: '#blog' },
  { name: 'Karriere', href: '#karriere' },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#1A1A1A]/80 backdrop-blur-xl border-b border-white/5">
      <div className="flex items-stretch h-20 w-full">
        
        {/* Logo Section */}
        <div className="flex items-center px-12 border-r border-white/10">
          <Link href="/" className="flex items-center">
            <Image 
              src="/aightestates.png" 
              alt="aight estates" 
              width={180} 
              height={50}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Navigation Links - The Grid Style */}
        <div className="hidden lg:flex flex-grow">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center justify-center px-8 min-w-[140px] text-[11px] uppercase tracking-[0.15em] font-bold text-white/70 hover:text-white hover:bg-white/5 border-r border-white/10 transition-all"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden flex-grow items-center justify-end px-6">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2 hover:text-brand-orange transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Action Button - The Orange Block */}
        <Link 
          href="#kontakt"
          className="hidden lg:flex items-center bg-[#FF5722] group hover:bg-white transition-colors duration-300"
        >
          <div className="px-8 py-full text-white group-hover:text-black font-black text-sm uppercase tracking-widest flex items-center gap-4">
            Kontakt
            <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </Link>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/5">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-white/80 hover:text-[#FF5722] transition-colors py-2 text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#kontakt"
              className="block bg-[#FF5722] text-white px-6 py-4 rounded-sm font-bold text-center mt-4 hover:bg-white hover:text-black transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
