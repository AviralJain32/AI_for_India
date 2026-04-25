import React from 'react';
import { Button } from "@/components/ui/button";
import { FileText, Search, Users, BookOpen, Globe, Play, CheckCircle, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Paper Submission & Management System",
      description: "Streamlined online submission and tracking for research papers",
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Plagiarism Detection & Quality Check",
      description: "Advanced tools to ensure originality and academic integrity",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Reviewer & Editorial Management",
      description: "Efficient peer review process with expert editorial board",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Conference Proceedings Publishing",
      description: "Support for indexed publication of conference proceedings",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Website & Registration Management",
      description: "Custom conference websites with integrated registration",
    },
    {
      icon: <Play className="h-6 w-6" />,
      title: "Event Execution (Hybrid/Onsite)",
      description: "End-to-end event management for seamless execution",
    },
  ];

  const features = [
    "High-quality publications",
    "Transparent review processes",
    "Efficient workflow automation",
    "Global indexing support",
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-dark-navy dark:bg-dark-navy relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute -right-40 top-20 w-96 h-96 bg-neon-purple/20 dark:bg-neon-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute -left-40 bottom-20 w-96 h-96 bg-neon-teal/20 dark:bg-neon-teal/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Conference Management </span>
            <span className="text-saffron">Services</span>
          </h2>
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
            We provide end-to-end conference management solutions tailored for academic institutions, organizations, and professional bodies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="glass-card p-6 rounded-xl hover-scale transition-all duration-300">
              <div className="p-3 rounded-full bg-saffron/20 w-fit mb-4">
                <div className="text-saffron">{service.icon}</div>
              </div>
              <h3 className="text-foreground font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-foreground/70 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          <div className="glass-card p-6 sm:p-8 rounded-2xl">
            <h3 className="text-foreground font-semibold text-xl mb-6 text-center">Research-Based Solutions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-neon-teal flex-shrink-0" />
                  <span className="text-foreground/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;