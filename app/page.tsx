import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ServicesList from './components/ServicesList';
import ChallengesSection from './components/ChallengesSection';
import ServicesSection from './components/ServicesSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import StatsSection from './components/StatsSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="bg-brand-black min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesList />
      <ChallengesSection />
      <ServicesSection />
      <CaseStudiesSection />
      <StatsSection />
      <Footer />
    </main>
  );
}
