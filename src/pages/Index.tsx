import { useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CharactersSection from '@/components/CharactersSection';
import GallerySection from '@/components/GallerySection';
import SoundtrackSection from '@/components/SoundtrackSection';
import QuotesSection from '@/components/QuotesSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0A0E27] text-white">
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />
      <HeroSection onNavigate={scrollToSection} />
      <AboutSection />
      <CharactersSection />
      <GallerySection />
      <SoundtrackSection />
      <QuotesSection />
      <Footer />
    </div>
  );
};

export default Index;
