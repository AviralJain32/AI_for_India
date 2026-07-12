
import React, { useEffect } from 'react';
import { useTheme } from 'next-themes';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import StatsSection from '@/components/StatsSection';
import FlagshipEventsSection from '@/components/FlagshipEventsSection';
import ServicesSection from '@/components/ServicesSection';
import WomenInAISection from '@/components/WomenInAISection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import ImageCaraousal from '@/components/ImageCaraousal';

const Index = () => {
  const { setTheme } = useTheme();
  
  // Set light theme by default
  useEffect(() => {
    setTheme('light');
  }, [setTheme]);

  const images = [
    { src: '/caraousalImages/1.png', alt: 'Hackathon Event' },
    { src: '/caraousalImages/2.png', alt: 'AI Conference' },
    { src: '/caraousalImages/2_a.png', alt: 'AI Conference' },
    { src: '/caraousalImages/2_b.jpeg', alt: 'AI Conference' },
    { src: '/caraousalImages/2_c.png', alt: 'AI Conference' },
    { src: '/caraousalImages/3.png', alt: 'Research Collaboration' },
    { src: '/caraousalImages/3_a.png', alt: 'Research Collaboration' },
    { src: '/caraousalImages/3_b.png', alt: 'Research Collaboration' },
    { src: '/caraousalImages/4.png', alt: 'Student Innovation' },
    { src: '/caraousalImages/5.png', alt: 'Student Innovation' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="overflow-hidden">
        <HeroSection />
        {images.length > 0 && (
          <div className="mt-10">
            <ImageCaraousal images={images} />
          </div>
        )}
        <AboutSection />
        <StatsSection />
        <FlagshipEventsSection />
        {/* <WomenInAISection /> */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
