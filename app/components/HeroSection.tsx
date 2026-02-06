'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center overflow-hidden bg-black text-white">
      {/* Background Image with Deep Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2400"
          alt="Modern Office"
          fill
          className="object-cover opacity-60" 
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </div>

      <div className="max-w-7xl relative z-10 mx-auto px-6">
        <div className="max-w-5xl">
          {/* Top Row: Avatars + Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="flex -space-x-3">
              {['A', 'B', 'C', 'D', 'E'].map((letter) => (
                <div key={letter} className="w-10 h-10 rounded-full bg-brand-orange border-2 border-black flex items-center justify-center font-bold text-xs">
                  {letter}
                </div>
              ))}
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1 rounded-full">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold">
                Vertraut von Branchenführern
              </span>
            </div>
          </motion.div>

          {/* Main Headline: Massive Scale */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-7xl md:text-[120px] font-black leading-[0.9] tracking-[-0.04em] mb-12"
          >
            Mehr Zeit für <br />
            <span className="text-[#FF5722]">Werte.</span>
          </motion.h1>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <button className="bg-[#FF5722] text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-orange-600 transition-all">
              Mehr erfahren 
              <span className="text-xl">→</span>
            </button>
            <button className="border border-white/30 backdrop-blur-sm px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
              Kontakt aufnehmen
            </button>
          </motion.div>
        </div>
      </div>

      {/* Asymmetrical Bottom-Right Text (Exact Agevia Style) */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-12 right-12 max-w-sm text-right hidden lg:block"
      >
        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
          aight estates ist Ihr strategischer Partner für KI-gestützte 
          Automatisierung in der Immobilienbranche. Von der Exposé-Erstellung 
          bis zum intelligenten Lead-Management – wir digitalisieren Ihre 
          Prozesse und schaffen mehr Zeit für das Wesentliche.
        </p>
      </motion.div>
    </section>
  );
}
