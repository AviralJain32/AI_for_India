
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
      className="glass-card rounded-xl p-8 text-center hover-scale"
      style={{ animationDelay: delay }}
    >
      <h2 className={cn("text-4xl md:text-5xl font-bold mb-2", color)}>
        {count}
      </h2>
      <p className="text-white/80 text-lg">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 bg-deep-purple relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-dark-navy/80 to-deep-purple pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
