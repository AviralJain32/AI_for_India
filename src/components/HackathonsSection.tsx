
import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, Users, Award } from 'lucide-react';

interface HackathonCardProps {
  title: string;
  date: string;
  prize: string;
  teamSize: string;
  mode: string;
  color: string;
  delay: string;
}

const HackathonCard = ({ title, date, prize, teamSize, mode, color, delay }: HackathonCardProps) => {
  return (
    <div 
      className="glass-card rounded-xl overflow-hidden hover-scale hover-glow"
      style={{ animationDelay: delay }}
    >
      <div className={`h-2 ${color}`}></div>
      <div className="p-6">
        <h3 className="text-white font-bold text-lg mb-4">{title}</h3>
        <p className="text-sm text-white/70 flex items-center mb-2">
          <Calendar className="h-4 w-4 mr-2" />
          {date}
        </p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
          <div>
            <p className="text-xs text-white/70">Prize Pool</p>
            <p className="text-white font-medium">{prize}</p>
          </div>
          <div>
            <p className="text-xs text-white/70">Team Size</p>
            <p className="text-white font-medium">{teamSize}</p>
          </div>
          <div>
            <p className="text-xs text-white/70">Mode</p>
            <p className="text-white font-medium">{mode}</p>
          </div>
        </div>
        <Button className={`w-full ${color} hover:opacity-90`}>
          Register Now
        </Button>
      </div>
    </div>
  );
};

const HackathonsSection = () => {
  return (
    <section id="hackathons" className="py-20 bg-deep-purple relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute -left-40 bottom-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-white">Upcoming </span>
          <span className="text-saffron">Hackathons</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <HackathonCard 
            title="AI Healthcare Challenge"
            date="May 10-12, 2025"
            prize="₹10,00,000"
            teamSize="2-4 Members"
            mode="Online"
            color="bg-neon-purple"
            delay="0s"
          />
          <HackathonCard 
            title="Smart Cities Hackathon"
            date="June 15-18, 2025"
            prize="₹15,00,000"
            teamSize="3-5 Members"
            mode="Hybrid"
            color="bg-neon-blue"
            delay="0.1s"
          />
          <HackathonCard 
            title="EdTech Innovation"
            date="July 5-7, 2025"
            prize="₹5,00,000"
            teamSize="2-3 Members"
            mode="Online"
            color="bg-saffron"
            delay="0.2s"
          />
        </div>
      </div>
    </section>
  );
};

export default HackathonsSection;
