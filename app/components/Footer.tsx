'use client';

import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';

interface FooterLink {
  label: string;
  href: string;
}

const navigationLinks: FooterLink[] = [
  { label: 'KI in der Praxis', href: '#ki-praxis' },
  { label: 'Consulting', href: '#consulting' },
  { label: 'Netzwerk', href: '#netzwerk' },
  { label: 'Kontakt', href: '#kontakt' },
];

const serviceLinks: FooterLink[] = [
  { label: 'Prozessautomatisierung', href: '#automation' },
  { label: 'KI-Schulungen', href: '#training' },
  { label: 'Workshops', href: '#workshops' },
  { label: 'Speaker Service', href: '#speaking' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="py-16">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="font-display font-bold text-2xl text-white mb-4">
                aight <span className="text-[#FF5722]">estates</span>
              </div>
              <p className="text-[#A0A0A0] mb-6 leading-relaxed">
                Ihr strategischer Partner für KI-gestützte Automatisierung in der Immobilienbranche.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-[#A0A0A0] hover:text-[#FF5722] hover:border-[#FF5722]/50 transition-all"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-[#A0A0A0] hover:text-[#FF5722] hover:border-[#FF5722]/50 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-[#A0A0A0] hover:text-[#FF5722] hover:border-[#FF5722]/50 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-lg">Navigation</h4>
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[#A0A0A0] hover:text-[#FF5722] transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-lg">Services</h4>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[#A0A0A0] hover:text-[#FF5722] transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-lg">Kontakt</h4>
              <div className="space-y-4 text-[#A0A0A0] text-sm">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 mr-3 text-[#FF5722] shrink-0 mt-0.5" />
                  <a
                    href="mailto:info@aight-estates.com"
                    className="hover:text-[#FF5722] transition-colors"
                  >
                    info@aight-estates.com
                  </a>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 mr-3 text-[#FF5722] shrink-0 mt-0.5" />
                  <a
                    href="tel:+491234567890"
                    className="hover:text-[#FF5722] transition-colors"
                  >
                    +49 (0) 123 456 789
                  </a>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-[#FF5722] shrink-0 mt-0.5" />
                  <div>
                    Musterstraße 123<br />
                    12345 Berlin, Deutschland
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-[#A0A0A0] text-sm">
              © 2024 aight estates. Alle Rechte vorbehalten.
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a
                href="#datenschutz"
                className="text-[#A0A0A0] hover:text-[#FF5722] transition-colors"
              >
                Datenschutz
              </a>
              <a
                href="#impressum"
                className="text-[#A0A0A0] hover:text-[#FF5722] transition-colors"
              >
                Impressum
              </a>
              <a
                href="#agb"
                className="text-[#A0A0A0] hover:text-[#FF5722] transition-colors"
              >
                AGB
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
