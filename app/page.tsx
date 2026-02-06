import Navigation from './components/Navigation';
import Hero from './components/HeroSection';
import ServiceTable from './components/ServiceTable';
import Roadblocks from './components/Roadblocks';
import ServicesList from './components/ServicesList';
import ChallengesSection from './components/ChallengesSection';
import ServicesSection from './components/ServicesSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import StatsSection from './components/StatsSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="bg-[#0D0D0D] min-h-screen">
      <Navigation />
      <Hero />
      <Roadblocks />
      <ServicesList />
      <ChallengesSection />
      <ServicesSection />
      <CaseStudiesSection />
      <StatsSection />
      <Footer />
    </main>
  );
}
