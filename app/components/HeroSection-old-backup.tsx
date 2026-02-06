'use client';

import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2340&auto=format&fit=crop"
          alt="Modern office"
          className="w-full h-full object-cover"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-[#0D0D0D]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center min-h-[calc(100vh-12rem)]">
          {/* Left Content - 7 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-10"
          >
            {/* Social Proof Row - Agevia Style with 5 avatars */}
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div
                    key={num}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF5722] to-[#E64A19] border-2 border-[#0D0D0D] flex items-center justify-center"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#FF5722]/80 to-[#E64A19]/80"></div>
                  </div>
                ))}
              </div>
              {/* Glassmorphism Pill Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-2">
                <TrendingUp className="w-4 h-4 text-[#FF5722]" />
                <span className="text-white/80 text-xs font-semibold uppercase tracking-wider">
                  50+ Automatisierte Workflows
                </span>
                <TrendingUp className="w-4 h-4 text-[#FF5722]" />
              </div>
            </div>

            {/* Massive Headline - 96px / 8xl */}
            <div className="space-y-8">
              <h1 className="text-7xl md:text-8xl lg:text-[96px] font-black tracking-tighter text-white leading-[1.1] max-w-2xl">
                Mehr Zeit für{' '}
                <span className="text-[#FF5722] inline-block">Werte.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/70 max-w-2xl leading-relaxed font-light">
                aight estates ist Ihr strategischer Partner für KI-gestützte Automatisierung 
                in der Immobilienbranche. Wir verwandeln zeitaufwändige manuelle Prozesse in 
                intelligente, automatisierte Workflows.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <a
                href="#ki-praxis"
                className="group inline-flex items-center justify-center bg-[#FF5722] text-white px-10 py-5 rounded-full font-bold hover:bg-[#E64A19] transition-all hover:scale-[1.02] text-base shadow-lg shadow-[#FF5722]/30"
              >
                KI in der Praxis entdecken
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#consulting"
                className="inline-flex items-center justify-center border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold hover:border-white/50 hover:bg-white/5 backdrop-blur-sm transition-all text-base"
              >
                Consulting & Automation
              </a>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/10">
              {[
                { value: '50+', label: 'Automatisierte Workflows' },
                { value: '200+', label: 'Teilnehmer' },
                { value: '30+', label: 'Zufriedene Kunden' }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-5xl font-black text-[#FF5722] mb-2">{stat.value}</div>
                  <div className="text-sm text-white/50 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - 5 columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Large Feature Card - Agevia Style */}
            <div className="relative">
              <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-[#FF5722] to-[#E64A19] p-12 relative overflow-hidden shadow-2xl shadow-[#FF5722]/30">
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent"></div>
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.5, type: "spring", bounce: 0.4 }}
                    className="text-9xl md:text-[160px] font-black mb-8 leading-none"
                  >
                    70%
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="space-y-2"
                  >
                    <div className="text-3xl md:text-4xl font-bold">Zeit-Ersparnis</div>
                    <div className="text-lg text-white/90 font-light">durch Automatisierung</div>
                  </motion.div>
                </div>
                
                {/* Decorative Circle Elements */}
                <div className="absolute top-10 right-10 w-28 h-28 border-2 border-white/20 rounded-full"></div>
                <div className="absolute bottom-12 left-12 w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm"></div>
                <div className="absolute top-1/3 left-10 w-4 h-24 bg-white/20 rounded-full"></div>
              </div>
            </div>

            {/* "Deal Footer" - Bottom Right Text Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -bottom-8 -right-4 max-w-[300px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
            >
              <p className="text-sm text-[#A0A0A0] leading-relaxed">
                Wir nehmen Ihre großen Ideen und verwandeln sie in klare, erfolgreiche Strategien. 
                Automatisierung, die funktioniert – ab Tag 1.
              </p>
            </motion.div>
            
            {/* Background Glow Effects */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#FF5722]/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-[#FF5722]/10 rounded-full blur-[100px] pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
