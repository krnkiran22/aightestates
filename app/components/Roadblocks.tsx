'use client';

import React from 'react';
import { motion } from 'framer-motion';

const roadblocks = [
  { title: "Beratung & Strategie", icon: "◎" },
  { title: "Custom GPT Entwicklung", icon: "◎" },
  { title: "Prozessautomatisierung", icon: "◎" },
  { title: "KI-Training & Support", icon: "◎" },
];

const row1 = [
  "Wie skaliere ich mein Geschäft?", 
  "Wie verwalte ich meine Finanzen?",
  "Welche Marketing-Kanäle sind die besten?", 
  "Wie baue ich eine starke Marke auf?"
];

const row2 = [
  "Was ist die beste Preisstrategie?", 
  "Wie hebe ich mich von der Konkurrenz ab?",
  "Wer ist mein idealer Kunde?", 
  "Wie weiß ich, ob meine Idee funktioniert?"
];

const row3 = [
  "Wie viel Kapital benötige ich?", 
  "Welche Lizenzen brauche ich?",
  "Wie registriere ich mein Unternehmen?", 
  "Welche Rechtsform ist die richtige?"
];

const MarqueeRow = ({ items, direction }: { items: string[], direction: 'left' | 'right' }) => (
  <div className="flex w-fit gap-4 py-2">
    <div className={`flex gap-4 ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}>
      {/* Double the items to create a seamless loop */}
      {[...items, ...items].map((item, i) => (
        <span key={i} className="px-6 py-3 border border-black/10 rounded-lg bg-white/40 text-sm font-medium whitespace-nowrap shadow-sm text-gray-700">
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default function Roadblocks() {
  return (
    <section className="bg-[#FFFCEB] text-brand-black py-32 overflow-hidden border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter leading-tight">
            Wir beseitigen die Stolpersteine <br />
            <span className="relative inline-block">
               auf Ihrem Weg zum Erfolg
               <div className="absolute inset-0 bg-brand-orange/10 -rotate-1 -z-10 rounded-sm scale-110" />
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-medium">
            Es ist einfach, sich in einem Meer von Ratschlägen und Meinungen zu verlieren. 
            Wir filtern das Rauschen heraus und konzentrieren uns auf das, was wirklich zählt.
          </p>
        </motion.div>

        {/* Criss-Cross Moving Tag Cloud with Fading Mask */}
        <div className="relative mb-32 overflow-hidden mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex flex-col gap-2">
            <MarqueeRow items={row1} direction="left" />
            <MarqueeRow items={row2} direction="right" />
            <MarqueeRow items={row3} direction="left" />
          </div>
        </div>

        {/* 4-Column Dashed Grid */}
        <div className="grid md:grid-cols-4 border-t border-dashed border-black/20">
          {roadblocks.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-12 border-r border-dashed border-black/20 last:border-r-0 group hover:bg-white transition-all duration-500 ease-in-out"
            >
              {/* Geometric Icon */}
              <div className="w-16 h-16 mx-auto mb-10 relative flex items-center justify-center">
                 <div className="absolute inset-0 border border-black/10 rounded-full group-hover:scale-125 transition-transform duration-500" />
                 <div className="w-8 h-8 border-2 border-black rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-black rounded-full" />
                 </div>
              </div>
              
              {/* Brand Orange Accent */}
              <div className="w-10 h-10 border-2 border-brand-orange rounded-full mx-auto mb-8 flex items-center justify-center relative">
                 <div className="w-4 h-4 border border-brand-orange rounded-full animate-ping opacity-30" />
                 <div className="absolute w-6 h-6 border border-brand-orange rounded-full" />
              </div>

              <h3 className="text-xl font-bold tracking-tight uppercase group-hover:text-brand-orange transition-colors">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
