
import React from 'react';
import { Button } from "@/components/ui/button";
import StaticImage from './StaticImage';

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] bg-deep-purple dark:bg-deep-purple relative overflow-hidden flex items-center">
      {/* Gradient background */}
      <div className="absolute -right-40 bottom-0 w-96 h-96 bg-neon-blue/20 dark:bg-neon-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute -left-40 top-20 w-96 h-96 bg-neon-purple/20 dark:bg-neon-purple/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="text-foreground">AFI </span>
              <span className="text-saffron mt-2">Edutech</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed px-4">
            Advancing the AI Revolution: A Collaborative Hub for Researchers, Innovators, Developers and Visionaries.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button className="bg-saffron hover:bg-saffron/90 text-black px-8 py-6 rounded-full text-lg font-semibold hover-scale shadow-lg shadow-saffron/20 w-full sm:w-auto">
                Register Now
              </Button>
              <Button variant="outline" className="text-foreground border-2 border-foreground/30 hover:bg-saffron hover:text-black hover:border-saffron px-8 py-6 rounded-full text-lg font-semibold hover-scale w-full sm:w-auto">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
