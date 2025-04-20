import React from 'react';
import { Button } from "@/components/ui/button";
import { Award, Users, Calendar } from 'lucide-react';
import StaticImage from './StaticImage';

const WomenInAISection = () => {
  return (
    <section id="women-in-ai" className="py-20 bg-dark-navy relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute -right-20 bottom-20 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl"></div>
      <div className="absolute -left-20 top-20 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-neon-pink">Women</span>
              <span className="text-white"> in </span>
              <span className="text-neon-blue">AI</span>
            </h2>
            <p className="text-white/80">
              Empowering women to lead the AI revolution in India through mentorship, training, and networking opportunities.
            </p>

            <div className="space-y-4">
              <div className="glass-card p-4 rounded-lg flex items-start space-x-4 hover-scale">
                <Award className="h-6 w-6 text-neon-pink flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-white">Mentorship Programs</h3>
                  <p className="text-white/70 text-sm">Connect with leading women in tech</p>
                </div>
              </div>
              
              <div className="glass-card p-4 rounded-lg flex items-start space-x-4 hover-scale">
                <Users className="h-6 w-6 text-neon-pink flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-white">Networking Events</h3>
                  <p className="text-white/70 text-sm">Build connections with industry experts</p>
                </div>
              </div>
              
              <div className="glass-card p-4 rounded-lg flex items-start space-x-4 hover-scale">
                <Calendar className="h-6 w-6 text-neon-pink flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-white">Career Growth</h3>
                  <p className="text-white/70 text-sm">Accelerate your AI career path</p>
                </div>
              </div>
            </div>
            
            <Button className="bg-neon-pink hover:bg-neon-pink/80 text-white px-6 py-2 rounded-lg hover-scale mt-4">
              Join the Community
            </Button>
          </div>
          
          <div className="rounded-xl flex justify-center overflow-hidden shadow-lg hover-scale">
            <StaticImage 
              src="/images/Women.jpg"
              alt="Women in AI Leadership" 
              className="w-[400px] h-[600px] object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WomenInAISection;
