export default function ChallengesSection() {
  const challenges = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Zeitfresser manuelle Prozesse",
      description: "Stunden für Exposés, Berichte und Dokumentation - Zeit, die für Kundenbetreuung fehlt."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Wissenslücke bei KI",
      description: "Unsicherheit über KI-Potentiale und fehlendes Know-how bei der praktischen Umsetzung."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Ineffiziente Workflows",
      description: "Medienbrüche, doppelte Dateneingaben und fehlende Prozessautomatisierung."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Fehlende Skalierbarkeit",
      description: "Wachstum wird durch manuelle Prozesse gebremst - mehr Aufträge bedeuten mehr Stress."
    }
  ];

  return (
    <section className="section-padding bg-[var(--bg-black)]">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="display-lg text-white mb-6">
            Diese <span className="highlight-orange">Herausforderungen</span> kennen Sie?
          </h2>
          <p className="body-text text-[var(--text-muted)] max-w-3xl mx-auto">
            Immobilienprofis verbringen täglich Stunden mit repetitiven Aufgaben, 
            während wichtige strategische Arbeit liegen bleibt. Zeit für eine Veränderung.
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {challenges.map((challenge, index) => (
            <div key={index} className="card text-center group">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--primary-orange)]/10 text-[var(--primary-orange)] mb-6 group-hover:bg-[var(--primary-orange)] group-hover:text-white transition-all duration-300">
                {challenge.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-4">
                {challenge.title}
              </h3>
              
              <p className="text-[var(--text-muted)] leading-relaxed">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="body-text text-white mb-8">
            Schluss mit dem Zeitverschwendung. Lassen Sie uns gemeinsam Ihre Prozesse optimieren.
          </p>
          <a href="#consulting" className="btn-primary">
            Kostenloses Beratungsgespräch
          </a>
        </div>
      </div>
    </section>
  );
}