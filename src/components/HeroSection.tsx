
import React from 'react';
import { Button } from "@/components/ui/button";
import StaticImage from './StaticImage';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-deep-purple relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute -right-40 bottom-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute -left-40 top-20 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-12 pt-32">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">AI </span>
            <span className="text-saffron">FOR </span>
            <span className="text-india-green">INDIA</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8">
            Join India's AI Revolution: A Premier Summit for Innovators, Leaders, and Visionaries.
          </p>
          <div className="space-x-4">
            <Button className="bg-saffron hover:bg-saffron/80 text-white px-8 py-4 rounded-full text-lg hover-scale">
              Register Now
            </Button>
            <Button variant="outline" className="text-white hover:text-saffron px-6 py-3 rounded-full text-lg hover-scale">
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="lg:w-1/2">
          <StaticImage
            src="/images/index.jpg"
            alt="AI for India Vision"
            className="rounded-2xl shadow-2xl hover-scale h-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
