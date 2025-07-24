
import React, { useEffect } from 'react';
import { useTheme } from 'next-themes';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import CountdownTimer from '@/components/CountdownTimer';
import SpeakersSection from '@/components/SpeakersSection';
import WomenInAISection from '@/components/WomenInAISection';
import HackathonsSection from '@/components/HackathonsSection';
import Footer from '@/components/Footer';

const Index = () => {
  const { setTheme } = useTheme();
  
  // Set dark theme by default
  useEffect(() => {
    setTheme('dark');
  }, [setTheme]);

  // Summit date for countdown
  const summitDate = new Date('2025-03-15T09:00:00');

  return (
    <div className="min-h-screen bg-dark-navy">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <HackathonsSection />

        {/* <CountdownTimer targetDate={summitDate} /> */}
        {/* <SpeakersSection /> */}
        <WomenInAISection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
