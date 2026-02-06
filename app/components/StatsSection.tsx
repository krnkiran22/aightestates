export default function StatsSection() {
  const stats = [
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

  const testimonials = [
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

  return (
    <section className="section-padding bg-[var(--bg-black)]">
      <div className="container">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-[var(--primary-orange)] mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-white mb-2">
                {stat.label}
              </div>
              <div className="text-[var(--text-muted)] text-sm leading-relaxed">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="text-center mb-16">
          <h2 className="display-lg text-white mb-6">
            Vertrauen durch <span className="highlight-orange">Expertise</span>
          </h2>
          <p className="body-text text-[var(--text-muted)] max-w-3xl mx-auto mb-12">
            Unsere Kunden sprechen für sich. Erfahren Sie, wie andere Immobilienprofis 
            mit unseren KI-Lösungen ihre Produktivität gesteigert haben.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card">
              {/* Quote */}
              <div className="mb-6">
                <div className="text-[var(--primary-orange)] text-4xl mb-4">"</div>
                <p className="text-white leading-relaxed italic">
                  {testimonial.quote}
                </p>
              </div>
              
              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[var(--primary-orange)] to-orange-700 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.author.split(' ').map(name => name[0]).join('')}
                </div>
                <div>
                  <div className="text-white font-semibold">
                    {testimonial.author}
                  </div>
                  <div className="text-[var(--text-muted)] text-sm">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Logos Placeholder */}
        <div className="text-center">
          <p className="text-[var(--text-muted)] text-sm mb-8">
            Vertrauen von führenden Immobilienunternehmen
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {/* Placeholder logos - replace with actual company logos */}
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="w-32 h-16 bg-[var(--card-bg)] rounded-lg flex items-center justify-center border border-gray-800">
                <div className="text-[var(--text-muted)] text-sm font-medium">
                  Partner {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}