import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BookOpen, Globe, Briefcase } from 'lucide-react';

const CTASection = () => {
  const opportunities = [
    { icon: <Users className="h-8 w-8" />, title: "Student", desc: "Showcase your innovation" },
    { icon: <BookOpen className="h-8 w-8" />, title: "Researcher", desc: "Publish and collaborate" },
    { icon: <Globe className="h-8 w-8" />, title: "Institution", desc: "Partner with us" },
    { icon: <Briefcase className="h-8 w-8" />, title: "Organization", desc: "Host your conference" },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-deep-purple dark:bg-deep-purple relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute -right-40 bottom-20 w-96 h-96 bg-saffron/20 dark:bg-saffron/10 rounded-full blur-3xl"></div>
      <div className="absolute -left-40 top-20 w-96 h-96 bg-neon-blue/20 dark:bg-neon-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Get </span>
            <span className="text-saffron">Involved</span>
          </h2>
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
            Whether you are a student, researcher, institution, or organization — we have opportunities for everyone.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto mb-12">
          {opportunities.map((item, index) => (
            <div key={index} className="glass-card p-4 sm:p-6 rounded-xl text-center hover-scale transition-all duration-300">
              <div className="p-3 rounded-full bg-saffron/20 w-fit mx-auto mb-4">
                <div className="text-saffron">{item.icon}</div>
              </div>
              <h3 className="text-foreground font-semibold text-lg mb-1">{item.title}</h3>
              <p className="text-foreground/70 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-6 sm:p-8 rounded-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6">
              <span className="text-foreground">Join the </span>
              <span className="text-saffron">Innovation Movement</span>
              <span className="text-foreground"> Today</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button className="bg-saffron hover:bg-saffron/90 text-black py-6 rounded-xl font-semibold">
                Participate in Hackathons
              </Button>
              <Button className="bg-neon-blue hover:bg-neon-blue/90 text-black py-6 rounded-xl font-semibold">
                Submit Research Papers
              </Button>
              <Button className="bg-neon-purple hover:bg-neon-purple/90 text-black py-6 rounded-xl font-semibold">
                Partner for Conferences
              </Button>
              <Button className="bg-neon-teal hover:bg-neon-teal/90 text-black py-6 rounded-xl font-semibold">
                Explore Opportunities
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;