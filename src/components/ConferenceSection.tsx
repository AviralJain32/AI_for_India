import React from 'react';
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Globe, Calendar, ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";

const ConferenceSection = () => {
  const conferences = [
    {
      title: "CV-S3 2026",
      subtitle: "International Conference on Computer Vision for Smart Sustainable Systems",
      date: "23-24 September 2026",
      organizer: "Manipal Academy of Higher Education + Dong Nai University",
      focus: ["AI", "IoT", "Smart Grids", "Green Energy", "Blockchain", "Cloud Computing"],
    },
    {
      title: "ICI3T 2026",
      subtitle: "International Conference on Intelligent, Interconnected & Innovative Technologies",
      date: "26-27 October 2026",
      organizer: "Technical University of Iasi",
      focus: ["Networking", "Computing", "Data-driven technologies"],
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-deep-purple dark:bg-deep-purple relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute -right-40 top-20 w-96 h-96 bg-neon-purple/20 dark:bg-neon-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute -left-40 bottom-20 w-96 h-96 bg-neon-blue/20 dark:bg-neon-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Upcoming International </span>
            <span className="text-saffron">Conferences</span>
          </h2>
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
            We are proud to host international conferences focused on advancing research and innovation with global collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto items-start">
          {conferences.map((conf, index) => (
            <div key={index} className="glass-card p-6 sm:p-8 rounded-2xl hover-scale transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-saffron font-bold text-2xl sm:text-3xl mb-2">{conf.title}</h3>
                  <p className="text-foreground font-medium text-lg">{conf.subtitle}</p>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-foreground/70">
                  <Calendar className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>{conf.date}</span>
                </div>
                <div className="flex items-center text-foreground/70">
                  <Globe className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>{conf.organizer}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {conf.focus.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-3 py-1 bg-saffron/20 text-saffron rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              
              <Button className="w-full bg-saffron hover:bg-saffron/90 text-black ">
                Learn More
              </Button>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center mt-10">
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-foreground font-semibold text-xl mb-4">Conference Highlights</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center justify-center space-x-2">
                <BookOpen className="h-5 w-5 text-saffron" />
                <span className="text-foreground/80 text-sm">Springer-style Publication</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Users className="h-5 w-5 text-neon-blue" />
                <span className="text-foreground/80 text-sm">Peer-reviewed Papers</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Globe className="h-5 w-5 text-neon-purple" />
                <span className="text-foreground/80 text-sm">Global Keynotes</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Calendar className="h-5 w-5 text-neon-teal" />
                <span className="text-foreground/80 text-sm">Hybrid Mode</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceSection;