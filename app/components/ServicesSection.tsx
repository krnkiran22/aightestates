export default function ServicesSection() {
  const services = [
    {
      title: "KI in der Praxis",
      description: "Konkrete KI-Lösungen für den Immobilienalltag. Von automatisierter Exposé-Erstellung bis hin zu intelligentem Lead-Routing - praxiserprobte Tools, die sofort funktionieren.",
      features: [
        "Automatisierte Exposé-Erstellung",
        "Intelligentes Lead-Routing", 
        "Automatisiertes Reporting",
        "Custom GPTs für Immobilien"
      ],
      highlight: "70% Zeit-Ersparnis",
      ctaText: "Mehr erfahren"
    },
    {
      title: "Consulting & Automation",
      description: "Strategische Beratung und maßgeschneiderte Automatisierungslösungen. Wir analysieren Ihre Prozesse und entwickeln individuelle KI-Workflows für maximale Effizienz.",
      features: [
        "Prozessanalyse & Strategie",
        "Custom Workflow Development",
        "Integration & Optimierung",
        "Change Management"
      ],
      highlight: "Individual Solutions",
      ctaText: "Beratung anfragen"
    },
    {
      title: "Netzwerk & Speaker",
      description: "Werden Sie Teil unserer Community aus Immobilienprofis und KI-Experten. Profitieren Sie von regelmäßigen Events, Workshops und unserem Expertennetzwerk.",
      features: [
        "Exklusive Community",
        "Regelmäßige Workshops",
        "Expert Speaker Service",
        "Best Practice Sharing"
      ],
      highlight: "200+ Mitglieder",
      ctaText: "Community beitreten"
    }
  ];

  return (
    <section className="section-padding bg-[var(--card-bg)]">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="display-lg text-white mb-6">
            Unsere <span className="highlight-orange">3 Säulen</span> für Ihren Erfolg
          </h2>
          <p className="body-text text-[var(--text-muted)] max-w-3xl mx-auto">
            Von der ersten KI-Idee bis zur vollständigen Prozessautomatisierung - 
            wir begleiten Sie auf jedem Schritt Ihrer digitalen Transformation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card group relative overflow-hidden">
              {/* Highlight Badge */}
              <div className="absolute top-4 right-4 bg-[var(--primary-orange)] text-white px-3 py-1 rounded-full text-sm font-medium">
                {service.highlight}
              </div>
              
              {/* Main Content */}
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-[var(--text-muted)] mb-6 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-white">
                    <div className="w-2 h-2 bg-[var(--primary-orange)] rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-auto">
                <a 
                  href={`#${service.title.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="inline-flex items-center text-[var(--primary-orange)] font-medium group-hover:text-white transition-colors duration-300"
                >
                  {service.ctaText}
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-orange)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="bg-[var(--bg-black)] rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Bereit für die <span className="highlight-orange">Transformation?</span>
            </h3>
            <p className="body-text text-[var(--text-muted)] mb-8">
              Starten Sie noch heute mit der Automatisierung Ihrer Immobilienprozesse. 
              Unser Team steht bereit, um Ihre Vision Realität werden zu lassen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#kontakt" className="btn-primary">
                Kostenloses Erstgespräch
              </a>
              <a href="#case-studies" className="btn-secondary">
                Success Stories ansehen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}