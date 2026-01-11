import React from 'react';
import { Button } from "@/components/ui/button";
import { Award, Users, Calendar } from 'lucide-react';
import StaticImage from './StaticImage';

const WomenInAISection = () => {
  return (
    <section id="women-in-ai" className="py-16 sm:py-20 lg:py-24 bg-dark-navy dark:bg-dark-navy relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute -right-20 bottom-20 w-96 h-96 bg-neon-purple/30 dark:bg-neon-purple/20 rounded-full blur-3xl"></div>
      <div className="absolute -left-20 top-20 w-96 h-96 bg-neon-pink/20 dark:bg-neon-pink/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                <span className="text-neon-pink">Women</span>
                <span className="text-foreground"> in </span>
                <span className="text-neon-blue">AI</span>
              </h2>
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                Empowering women to lead the AI revolution in India through mentorship, training, and networking opportunities.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4 pt-4">
              <div className="glass-card p-5 rounded-xl flex items-start space-x-4 hover-scale transition-all duration-300">
                <div className="p-2 rounded-lg bg-neon-pink/10">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 text-neon-pink flex-shrink-0" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground text-base sm:text-lg mb-1">Mentorship Programs</h3>
                  <p className="text-foreground/70 text-sm sm:text-base">Connect with leading women in tech</p>
                </div>
              </div>
              
              <div className="glass-card p-5 rounded-xl flex items-start space-x-4 hover-scale transition-all duration-300">
                <div className="p-2 rounded-lg bg-neon-pink/10">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-neon-pink flex-shrink-0" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground text-base sm:text-lg mb-1">Networking Events</h3>
                  <p className="text-foreground/70 text-sm sm:text-base">Build connections with industry experts</p>
                </div>
              </div>
              
              <div className="glass-card p-5 rounded-xl flex items-start space-x-4 hover-scale transition-all duration-300">
                <div className="p-2 rounded-lg bg-neon-pink/10">
                  <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-neon-pink flex-shrink-0" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground text-base sm:text-lg mb-1">Career Growth</h3>
                  <p className="text-foreground/70 text-sm sm:text-base">Accelerate your AI career path</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <Button className="bg-neon-pink hover:bg-neon-pink/90 text-black px-8 py-6 rounded-full text-lg font-semibold hover-scale shadow-lg shadow-neon-pink/20 w-full sm:w-auto">
                Join the Community
              </Button>
            </div>
          </div>
          
          <div className="rounded-2xl flex justify-center overflow-hidden shadow-2xl hover-scale transition-transform duration-300 order-1 lg:order-2">
            <StaticImage 
              src="/images/Women.jpg"
              alt="Women in AI Leadership" 
              className="w-full max-w-md lg:max-w-lg h-auto object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WomenInAISection;
