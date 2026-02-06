'use client';

import { motion } from 'framer-motion';

const services = [
  { id: "01", title: "Automatisierte Exposé-Erstellung", stat: "70%", desc: "Zeit-Ersparnis pro Objekt" },
  { id: "02", title: "Intelligentes Lead-Routing", stat: "+35%", desc: "Höhere Conversion-Rate" },
  { id: "03", title: "Automatisierte Reportings", stat: "+60%", desc: "Bessere Datenqualität" },
];

export default function ServiceTable() {
  return (
    <section className="bg-[#0D0D0D] py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
            Wir lösen <br /><span className="text-[#FF5722]">Herausforderungen.</span>
          </h2>
          <p className="max-w-xs text-gray-400 text-sm">
            Konkrete Use Cases, die wir für unsere Kunden in der Immobilienwirtschaft umsetzen.
          </p>
        </motion.div>

        {/* The "Table" List */}
        <div className="border-t border-white/10">
          {services.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group border-b border-white/10 py-12 flex flex-col md:flex-row justify-between items-center hover:bg-white/[0.02] transition-colors px-4"
            >
              <div className="flex items-center gap-8 w-full">
                <span className="font-mono text-[#FF5722] text-sm">{item.id}</span>
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight group-hover:translate-x-2 transition-transform duration-300 text-white">
                  {item.title}
                </h3>
              </div>
              
              <div className="flex items-center gap-12 mt-8 md:mt-0 w-full md:w-auto justify-between md:justify-end">
                <div className="text-right">
                  <span className="text-4xl md:text-6xl font-black text-[#FF5722] block leading-none">{item.stat}</span>
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{item.desc}</span>
                </div>
                <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#FF5722] group-hover:border-[#FF5722] transition-all text-white">
                  →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
