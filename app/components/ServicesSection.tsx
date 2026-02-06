'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Users, Network } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  highlight: string;
}

const services: Service[] = [
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "KI in der Praxis",
    description: "Konkrete KI-Lösungen für den Immobilienalltag. Von automatisierter Exposé-Erstellung bis hin zu intelligentem Lead-Routing - praxiserprobte Tools, die sofort funktionieren.",
    features: [
      "Automatisierte Exposé-Erstellung",
      "Intelligentes Lead-Routing", 
      "Automatisiertes Reporting",
      "Custom GPTs für Immobilien"
    ],
    highlight: "70% Zeit-Ersparnis"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Consulting & Automation",
    description: "Strategische Beratung und maßgeschneiderte Automatisierungslösungen. Wir analysieren Ihre Prozesse und entwickeln individuelle KI-Workflows für maximale Effizienz.",
    features: [
      "Prozessanalyse & Strategie",
      "Custom Workflow Development",
      "Integration & Optimierung",
      "Change Management"
    ],
    highlight: "Individual Solutions"
  },
  {
    icon: <Network className="w-8 h-8" />,
    title: "Netzwerk & Speaker",
    description: "Werden Sie Teil unserer Community aus Immobilienprofis und KI-Experten. Profitieren Sie von regelmäßigen Events, Workshops und unserem Expertennetzwerk.",
    features: [
      "Exklusive Community",
      "Regelmäßige Workshops",
      "Expert Speaker Service",
      "Best Practice Sharing"
    ],
    highlight: "200+ Mitglieder"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-32 bg-brand-surface">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-end mb-20 flex-wrap gap-8"
        >
          <div>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight text-white">
              Unsere<br />
              <span className="text-[#FF5722]">Leistungen</span>
            </h2>
          </div>
          <p className="text-[#FF5722] font-mono text-sm uppercase tracking-wider">
            Drei Säulen für Ihren Erfolg
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-10 rounded-3xl bg-[#0D0D0D] border border-white/5 hover:border-[#FF5722]/50 transition-all group relative overflow-hidden"
            >
              {/* Highlight Badge */}
              <div className="absolute top-6 right-6 bg-[#FF5722] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {service.highlight}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-[#FF5722]/10 flex items-center justify-center text-[#FF5722] mb-8 group-hover:bg-[#FF5722] group-hover:text-white transition-all">
                {service.icon}
              </div>
              
              {/* Main Content */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#FF5722] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#A0A0A0] mb-12 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-12">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-[#A0A0A0]">
                    <span className="text-[#FF5722] mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className="w-full py-4 border border-white/10 rounded-xl hover:bg-[#FF5722] hover:border-[#FF5722] transition-all group/btn text-white font-semibold">
                <span className="inline-flex items-center">
                  Mehr erfahren
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </span>
              </button>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-linear-to-r from-[#FF5722]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="bg-[#FF5722] rounded-[3rem] p-12 md:p-20 text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-white">
              Bereit für die Transformation?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Starten Sie noch heute mit der Automatisierung Ihrer Immobilienprozesse. 
              Unser Team steht bereit, um Ihre Vision Realität werden zu lassen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#kontakt"
                className="inline-block bg-white text-[#FF5722] px-12 py-5 rounded-full text-xl font-bold hover:scale-105 transition-transform"
              >
                Kostenlose Erstberatung
              </a>
              <a
                href="#case-studies"
                className="inline-block border-2 border-white text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-white/10 transition-colors"
              >
                Success Stories
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
