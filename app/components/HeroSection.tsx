'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative h-screen bg-brand-black overflow-hidden">
      {/* Depth Level 0: Full-Bleed Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2400"
          alt="Modern professional office"
          fill
          className="object-cover w-full h-screen"
          priority
        />
        {/* The Overlay - Dark gradient for text legibility */}
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/60 to-brand-black"></div>
      </div>

      {/* Content - Positioned above background */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        {/* Spacer for fixed navbar (80px) */}
        <div className="h-20"></div>

        <div className="container mx-auto px-6 pt-20 flex-1 flex flex-col justify-center">
          {/* Depth Level 1: Avatar Stack + Glass Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-6 mb-12"
          >
            {/* Avatar Stack with -space-x-3 */}
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full bg-linear-to-r from-brand-orange to-orange-600 border-2 border-brand-black flex items-center justify-center text-white font-bold text-sm shadow-lg"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}</div>
            {/* Glass Pill Badge */}
            <div className="px-4 py-2 rounded-full backdrop-blur-md bg-white/5 border border-white/10">
              <span style={{ fontSize: '10px', letterSpacing: '1px' }} className="font-semibold text-white uppercase">
                VERTRAUT VON BRANCHENFÜHRERN
              </span>
            </div>
          </motion.div>

          {/* Depth Level 2: Massive High-Contrast Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ 
              lineHeight: '0.9',
              letterSpacing: '-0.04em'
            }}
            className="text-7xl md:text-8xl lg:text-9xl font-black text-white mb-16"
          >
            Mehr Zeit für{' '}
            <span className="text-brand-orange">Werte.</span>
          </motion.h1>

          {/* CTA Row - Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            {/* Primary Button - Solid Orange Pill */}
            <a
              href="#ki-praxis"
              className="inline-flex items-center px-8 py-4 bg-brand-orange text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-brand-orange/30"
            >
              Mehr erfahren
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            {/* Ghost Button - Transparent with white border */}
            <a
              href="#kontakt"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:border-brand-orange hover:text-brand-orange transition-all"
            >
              Kontakt aufnehmen
            </a>
          </motion.div>
        </div>

        {/* Depth Level 3: Asymmetrical Description Block - Bottom Right */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="container mx-auto px-6 pb-16 w-full"
        >
          <div className="ml-auto" style={{ maxWidth: '380px' }}>
            <p style={{ fontSize: '16px' }} className="text-brand-muted leading-relaxed">
              aight estates ist Ihr strategischer Partner für KI-gestützte Automatisierung in der Immobilienbranche. Von der Exposé-Erstellung bis zum intelligenten Lead-Management - wir digitalisieren Ihre Prozesse und schaffen mehr Zeit für das Wesentliche.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
