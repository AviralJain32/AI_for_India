
import React, { useEffect } from 'react';
import { useTheme } from 'next-themes';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import StatsSection from '@/components/StatsSection';
import HackathonsSection from '@/components/HackathonsSection';
import ConferenceSection from '@/components/ConferenceSection';
import ServicesSection from '@/components/ServicesSection';
import WomenInAISection from '@/components/WomenInAISection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  const { setTheme } = useTheme();
  
  // Set light theme by default
  useEffect(() => {
    setTheme('light');
  }, [setTheme]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="overflow-hidden">
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <HackathonsSection />
        <ConferenceSection />
        <ServicesSection />
        <WomenInAISection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
