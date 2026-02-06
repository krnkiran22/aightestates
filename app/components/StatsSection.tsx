'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface Stat {
  number: string;
  label: string;
  description: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const stats: Stat[] = [
  {
    number: "50+",
    label: "Workflows",
    description: "Automatisierte Immobilienprozesse entwickelt und optimiert"
  },
  {
    number: "200+",
    label: "Teilnehmer",
    description: "In KI-Workshops und Trainings erfolgreich geschult"
  },
  {
    number: "30+",
    label: "Kunden",
    description: "Zufriedene Immobilienunternehmen vertrauen auf unsere Lösungen"
  },
  {
    number: "70%",
    label: "Zeit-Ersparnis",
    description: "Durchschnittliche Effizienzsteigerung durch Automatisierung"
  }
];

const testimonials: Testimonial[] = [
  {
    quote: "Dank aight estates haben wir unsere Exposé-Erstellung vollständig automatisiert. Was früher 2 Stunden dauerte, ist jetzt in 10 Minuten erledigt.",
    author: "Thomas Mueller",
    role: "Geschäftsführer",
    company: "Mueller Immobilien GmbH"
  },
  {
    quote: "Die KI-Workflows haben unser Lead-Management revolutioniert. Wir können jetzt doppelt so viele Anfragen bei gleichem Personalaufwand bearbeiten.",
    author: "Sarah Weber", 
    role: "Marketing Direktorin",
    company: "Weber & Partner"
  },
  {
    quote: "Das Consulting-Team hat unsere Prozesse von Grund auf analysiert und optimiert. Der ROI war bereits nach 3 Monaten erreicht.",
    author: "Michael Fischer",
    role: "Inhaber",
    company: "Fischer Immobilien"
  }
];

export default function StatsSection() {
  return (
    <section className="py-32 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 mb-32">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-start"
            >
              <div className="text-6xl lg:text-7xl font-black text-brand-orange mb-4 leading-none">
                {stat.number}
              </div>
              <div className="text-xl font-bold text-white mb-2 leading-snug">
                {stat.label}
              </div>
              <div className="text-brand-muted text-base leading-relaxed">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Vertrauen durch <span className="text-[#FF5722]">Expertise</span>
          </h2>
          <p className="text-xl text-[#A0A0A0] max-w-3xl mx-auto mb-12">
            Unsere Kunden sprechen für sich. Erfahren Sie, wie andere Immobilienprofis 
            mit unseren KI-Lösungen ihre Produktivität gesteigert haben.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20">
          {testimonials.slice(0, 2).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#141414] rounded-2xl p-12 border border-white/5 hover:border-[#FF5722]/30 transition-all"
            >
              {/* Quote Icon */}
              <Quote className="w-14 h-14 text-[#FF5722] mb-6" />
              
              {/* Quote */}
              <div className="mb-6">
                <p className="text-white leading-relaxed italic">
                  {testimonial.quote}
                </p>
              </div>
              
              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-linear-to-r from-[#FF5722] to-orange-700 rounded-full flex items-center justify-center text-white font-bold mr-4 text-sm">
                  {testimonial.author.split(' ').map(name => name[0]).join('')}
                </div>
                <div>
                  <div className="text-white font-semibold">
                    {testimonial.author}
                  </div>
                  <div className="text-[#A0A0A0] text-sm">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Logos Placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-[#A0A0A0] text-sm mb-8 uppercase tracking-wider">
            Vertrauen von führenden Immobilienunternehmen
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="w-32 h-16 bg-[#1A1A1A] rounded-lg flex items-center justify-center border border-white/10 hover:border-[#FF5722]/30 transition-colors"
              >
                <div className="text-[#A0A0A0] text-sm font-medium">
                  Partner {index + 1}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
