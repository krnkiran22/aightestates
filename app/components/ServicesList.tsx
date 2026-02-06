'use client';

import { motion } from 'framer-motion';

const services = [
  { id: "01", title: "Automatisierte Exposé-Erstellung", stat: "70%", sub: "Zeit-Ersparnis" },
  { id: "02", title: "Intelligentes Lead-Routing", stat: "+35%", sub: "Conversion" },
  { id: "03", title: "Automatisierte Reportings", stat: "+60%", sub: "Datenqualität" },
];

export default function ServicesList() {
  return (
    <section className="py-32 bg-brand-black">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brand-orange uppercase tracking-widest text-sm font-bold mb-12"
        >
          Unsere Lösungen
        </motion.h2>
        <div className="border-t border-white/10">
          {services.map((s, index) => (
            <motion.div 
              key={s.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group border-b border-white/10 py-12 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-white/[0.02] transition px-4"
            >
              <div className="flex items-center space-x-8 flex-1">
                <span className="font-mono text-brand-muted text-xl">{s.id}</span>
                <h3 className="text-3xl md:text-5xl font-bold text-white">{s.title}</h3>
              </div>
              <div className="text-left md:text-right mt-6 md:mt-0">
                <span className="text-5xl md:text-7xl font-black text-brand-orange block">{s.stat}</span>
                <span className="text-brand-muted uppercase text-xs tracking-widest">{s.sub}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
