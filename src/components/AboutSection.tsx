import React from 'react';
import { Button } from "@/components/ui/button";
import { Award, Globe, BookOpen, Users, ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-dark-navy dark:bg-dark-navy relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute -right-40 bottom-20 w-96 h-96 bg-neon-blue/20 dark:bg-neon-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute -left-40 top-20 w-96 h-96 bg-neon-purple/20 dark:bg-neon-purple/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">About </span>
            <span className="text-saffron">Us</span>
          </h2>
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
            We are a dynamic EdTech ecosystem dedicated to fostering innovation, research excellence, and global collaboration. With a strong foundation in technology-driven education, we specialize in organizing:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="glass-card p-6 rounded-xl text-center hover-scale transition-all duration-300">
            <div className="p-3 rounded-full bg-saffron/20 w-fit mx-auto mb-4">
              <Globe className="h-6 w-6 text-saffron" />
            </div>
            <h3 className="text-foreground font-semibold text-lg mb-2">International Hackathons</h3>
          </div>
          
          <div className="glass-card p-6 rounded-xl text-center hover-scale transition-all duration-300">
            <div className="p-3 rounded-full bg-neon-blue/20 w-fit mx-auto mb-4">
              <Award className="h-6 w-6 text-neon-blue" />
            </div>
            <h3 className="text-foreground font-semibold text-lg mb-2">AI & Emerging Tech Challenges</h3>
          </div>
          
          <div className="glass-card p-6 rounded-xl text-center hover-scale transition-all duration-300">
            <div className="p-3 rounded-full bg-neon-purple/20 w-fit mx-auto mb-4">
              <BookOpen className="h-6 w-6 text-neon-purple" />
            </div>
            <h3 className="text-foreground font-semibold text-lg mb-2">Research Conferences</h3>
          </div>
          
          <div className="glass-card p-6 rounded-xl text-center hover-scale transition-all duration-300">
            <div className="p-3 rounded-full bg-neon-teal/20 w-fit mx-auto mb-4">
              <Users className="h-6 w-6 text-neon-teal" />
            </div>
            <h3 className="text-foreground font-semibold text-lg mb-2">Academic & Industry Collaborations</h3>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center mt-10">
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
            Our mission is to bridge the gap between academia, industry, and innovation, enabling learners and professionals to solve real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;