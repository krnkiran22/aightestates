import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ChallengesSection from './components/ChallengesSection';
import ServicesSection from './components/ServicesSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import StatsSection from './components/StatsSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-black">
      <Navigation />
      <main>
        <HeroSection />
        <ChallengesSection />
        <ServicesSection />
        <CaseStudiesSection />
        <StatsSection />
      </main>
      <Footer />
    </div>
  );
}
