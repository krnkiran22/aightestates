'use client';

import { Clock, Lightbulb, Zap, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

interface Challenge {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const challenges: Challenge[] = [
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Zeitfresser manuelle Prozesse",
    description: "Stunden für Exposés, Berichte und Dokumentation - Zeit, die für Kundenbetreuung fehlt."
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Wissenslücke bei KI",
    description: "Unsicherheit über KI-Potentiale und fehlendes Know-how bei der praktischen Umsetzung."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Ineffiziente Workflows",
    description: "Medienbrüche, doppelte Dateneingaben und fehlende Prozessautomatisierung."
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Fehlende Skalierbarkeit",
    description: "Wachstum wird durch manuelle Prozesse gebremst - mehr Aufträge bedeuten mehr Stress."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function ChallengesSection() {
  return (
    <section className="py-24 bg-brand-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-16 text-center">
            Herausforderungen, die wir <span className="text-brand-orange">lösen</span>
          </h2>
          <p className="text-xl text-brand-muted max-w-3xl mx-auto leading-relaxed">
            Immobilienprofis verbringen täglich Stunden mit repetitiven Aufgaben, 
            während wichtige strategische Arbeit liegen bleibt. Zeit für eine Veränderung.
          </p>
        </motion.div>

        {/* Challenges Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-px bg-white/10 border border-white/10"
        >
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-brand-black p-8 hover:bg-brand-surface transition-all duration-500 group"
            >
              {/* Icon */}
              <div className="w-10 h-10 border border-brand-orange/30 rounded flex items-center justify-center mb-6 group-hover:bg-brand-orange group-hover:border-brand-orange transition-all">
                <div className="text-brand-orange group-hover:text-white transition-colors">
                  {challenge.icon}
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold mb-4 text-white">
                {challenge.title}
              </h3>
              
              <p className="text-brand-muted text-sm leading-relaxed">
                {challenge.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-white mb-8">
            Schluss mit der Zeitverschwendung. Lassen Sie uns gemeinsam Ihre Prozesse optimieren.
          </p>
          <a href="#consulting" className="inline-block bg-brand-orange text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform">
            Kostenloses Beratungsgespräch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
