'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center bg-brand-black pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Social Proof */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-brand-black bg-gradient-to-br from-brand-orange to-orange-700 flex items-center justify-center text-white text-xs font-bold"
                  >
                    {i * 10}+
                  </div>
                ))}
              </div>
              <div className="text-brand-muted text-sm uppercase tracking-wider">
                Vertraut von Branchenführern
              </div>
            </div>

            {/* Main Headlines */}
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-extrabold text-white leading-tight">
                Mehr Zeit für <span className="text-brand-orange">Werte.</span>
              </h1>
              
              <p className="text-xl text-brand-muted max-w-xl leading-relaxed">
                aight estates ist Ihr strategischer Partner für KI-gestützte Automatisierung 
                in der Immobilienbranche. Wir verwandeln zeitaufwändige manuelle Prozesse in 
                intelligente, automatisierte Workflows und schaffen so mehr Zeit für das, 
                was wirklich zählt: Ihre Kunden und Ihr Business.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#ki-praxis"
                className="group inline-flex items-center justify-center bg-brand-orange text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform"
              >
                KI in der Praxis entdecken
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#consulting"
                className="inline-flex items-center justify-center border-2 border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/5 transition-colors"
              >
                Consulting & Automation
              </a>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-800">
              {[
                { value: '50+', label: 'Automatisierte Workflows' },
                { value: '200+', label: 'Teilnehmer geschult' },
                { value: '30+', label: 'Zufriedene Kunden' }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-brand-orange">{stat.value}</div>
                  <div className="text-sm text-brand-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              {/* Abstract graphic with percentage */}
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-brand-orange to-orange-700 p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="text-7xl font-black mb-4"
                    >
                      70%
                    </motion.div>
                    <div className="text-2xl font-medium">Zeit-Ersparnis</div>
                    <div className="text-sm opacity-90 mt-2">durch Automatisierung</div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white/30 rounded-full animate-pulse"></div>
                <div className="absolute bottom-8 left-8 w-12 h-12 bg-white/20 rounded-full"></div>
                <div className="absolute top-1/2 left-4 w-2 h-16 bg-white/30 rounded-full transform -translate-y-1/2"></div>
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-brand-orange/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-brand-orange/5 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
