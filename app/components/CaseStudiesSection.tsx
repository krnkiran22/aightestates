'use client';

import { motion } from 'framer-motion';
import { FileText, Users as UsersIcon, BarChart3, ArrowRight } from 'lucide-react';

interface CaseStudy {
  icon: React.ReactNode;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  results: string[];
}

const caseStudies: CaseStudy[] = [
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Automatisierte Exposé-Erstellung",
    description: "Vollständig automatisierte Erstellung professioneller Immobilien-Exposés mit KI",
    metric: "70%",
    metricLabel: "Zeit-Ersparnis",
    results: [
      "2 Stunden → 10 Minuten pro Exposé",
      "Konsistente Qualität",
      "Automatische Bildoptimierung"
    ]
  },
  {
    icon: <UsersIcon className="w-8 h-8" />,
    title: "Intelligentes Lead-Routing",
    description: "KI-gestützte Verteilung von Anfragen an die richtigen Ansprechpartner",
    metric: "+35%",
    metricLabel: "Conversion Rate",
    results: [
      "Schnellere Reaktionszeiten",
      "Höhere Kundenzufriedenheit",
      "Optimierte Ressourcennutzung"
    ]
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Automatisiertes Reporting",
    description: "Automatische Erstellung von Marktberichten und Performance-Analysen",
    metric: "+60%",
    metricLabel: "Datenqualität",
    results: [
      "Echtzeit-Dashboards",
      "Automatische Insights",
      "Bessere Entscheidungsgrundlage"
    ]
  }
];

export default function CaseStudiesSection() {
  return (
    <section className="py-32 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-[#FF5722]">Praxisbeispiele</span> mit messbaren Ergebnissen
          </h2>
          <p className="text-xl text-[#A0A0A0] max-w-3xl mx-auto">
            Entdecken Sie, wie unsere Kunden mit KI-gestützten Lösungen ihre Produktivität 
            drastisch gesteigert haben.
          </p>
        </motion.div>

        {/* Case Studies as Horizontal Cards with Dividers */}
        <div className="space-y-0 divide-y divide-white/10 border-y border-white/10">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="py-12 hover:bg-white/[0.02] transition-colors duration-300 group"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                {/* Left: Icon and Title */}
                <div className="flex items-start gap-6 lg:flex-1">
                  <div className="w-14 h-14 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-all">
                    {study.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-brand-orange transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-brand-muted leading-relaxed">
                      {study.description}
                    </p>
                  </div>
                </div>

                {/* Center: Large Metric - Font Black */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left shrink-0 lg:w-40">
                  <div className="text-6xl md:text-7xl font-black text-brand-orange mb-2">
                    {study.metric}
                  </div>
                  <div className="text-sm text-brand-muted font-medium uppercase tracking-wider">
                    {study.metricLabel}
                  </div>
                </div>

                {/* Right: Results */}
                <div className="lg:flex-1">
                  <ul className="space-y-3">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-white">
                        <div className="w-2 h-2 bg-brand-orange rounded-full mr-3 shrink-0"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#case-details"
                    className="inline-flex items-center text-brand-orange font-medium mt-4 hover:gap-2 transition-all group-hover:translate-x-1"
                  >
                    Mehr erfahren
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
