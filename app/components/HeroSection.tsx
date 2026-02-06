import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center bg-[var(--bg-black)] pt-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Social Proof */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 border-2 border-[var(--bg-black)] flex items-center justify-center text-white font-semibold text-sm">
                  50+
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-700 border-2 border-[var(--bg-black)] flex items-center justify-center text-white font-semibold text-sm">
                  200+
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-600 to-orange-800 border-2 border-[var(--bg-black)] flex items-center justify-center text-white font-semibold text-sm">
                  30+
                </div>
              </div>
              <div className="text-[var(--text-muted)] text-sm">
                Vertrauen bereits 200+ Immobilienprofis
              </div>
            </div>

            {/* Main Headlines */}
            <div className="space-y-6">
              <h1 className="display-xl text-white leading-tight">
                Mehr Zeit für <span className="highlight-orange">Werte.</span>
              </h1>
              
              <p className="body-text text-[var(--text-muted)] max-w-xl">
                aight estates ist Ihr strategischer Partner für KI-gestützte Automatisierung 
                in der Immobilienbranche. Wir verwandeln zeitaufwändige manuelle Prozesse in 
                intelligente, automatisierte Workflows und schaffen so mehr Zeit für das, 
                was wirklich zählt: Ihre Kunden und Ihr Business.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#ki-praxis" className="btn-primary">
                KI in der Praxis entdecken
              </a>
              <a href="#consulting" className="btn-secondary">
                Consulting & Automation
              </a>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-800">
              <div>
                <div className="text-3xl font-bold text-[var(--primary-orange)]">50+</div>
                <div className="text-sm text-[var(--text-muted)]">Automatisierte Workflows</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--primary-orange)]">200+</div>
                <div className="text-sm text-[var(--text-muted)]">Teilnehmer geschult</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--primary-orange)]">30+</div>
                <div className="text-sm text-[var(--text-muted)]">Zufriedene Kunden</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative z-10">
              {/* Abstract graphic placeholder - you can replace with actual image */}
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[var(--primary-orange)] to-orange-700 p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl font-bold mb-4">70%</div>
                    <div className="text-xl font-medium">Zeit-Ersparnis</div>
                    <div className="text-sm opacity-90 mt-2">durch Automatisierung</div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white/30 rounded-full"></div>
                <div className="absolute bottom-8 left-8 w-12 h-12 bg-white/20 rounded-full"></div>
                <div className="absolute top-1/2 left-4 w-2 h-16 bg-white/30 rounded-full transform -translate-y-1/2"></div>
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-[var(--primary-orange)]/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[var(--primary-orange)]/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}