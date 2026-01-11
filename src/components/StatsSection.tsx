
import React from 'react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  count: string;
  label: string;
  color: string;
  delay: string;
}

const StatCard = ({ count, label, color, delay }: StatCardProps) => {
  return (
    <div 
      className="glass-card rounded-xl p-6 sm:p-8 text-center hover-scale transition-all duration-300"
      style={{ animationDelay: delay }}
    >
      <h2 className={cn("text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3", color)}>
        {count}
      </h2>
      <p className="text-foreground/80 text-sm sm:text-base md:text-lg font-medium">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-deep-purple dark:bg-deep-purple relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-dark-navy/40 dark:from-dark-navy/80 to-deep-purple pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          <StatCard 
            count="50+" 
            label="AI Summits" 
            color="text-saffron"
            delay="0s"
          />
          <StatCard 
            count="10K+" 
            label="Trained Teachers" 
            color="text-neon-teal"
            delay="0.1s"
          />
          <StatCard 
            count="5K+" 
            label="Women in Tech" 
            color="text-neon-blue"
            delay="0.2s"
          />
          <StatCard 
            count="100+" 
            label="Hackathons" 
            color="text-neon-purple"
            delay="0.3s"
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
