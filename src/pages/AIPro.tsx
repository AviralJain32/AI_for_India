
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ScrollText, Users, BookOpen, Globe, Award } from 'lucide-react';
import IntroSection from '@/components/IntroSection';
import AITrainingProgram from '@/components/AITrainingProgramForCollegeTeacher';
import AITrainingSchool from '@/components/AITrainingSchoolTeacher';

const FeatureCard = ({ title, description, icon: Icon, color }) => {
  return (
    <Card className="glass-card border-0 hover-scale hover-glow">
      <CardContent className="p-6">
        <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center mb-4`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
        <p className="text-white/80">{description}</p>
      </CardContent>
    </Card>
  );
};

const BenefitCard = ({ icon: Icon, title, color }) => {
  return (
    <div className="flex items-center space-x-3 glass-card p-4 rounded-xl hover-scale">
      <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center flex-shrink-0`}>
        <Icon className="h-5 w-5 text-white" />
      </div>
      <span className="text-white font-medium">{title}</span>
    </div>
  );
};

const AIPro = () => {
  return (
    <div className="min-h-screen bg-dark-navy">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-deep-purple relative overflow-hidden">
          <div className="absolute -right-40 bottom-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute -left-40 top-20 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-saffron">AI </span>
                <span className="text-white">Pro</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8">Master AI with Our Industry-Focused Training Ecosystem</p>
              <p className="text-lg text-white/70">Empower Your AI Journey with Hands-On Learning</p>
            </div>
          </div>
        </section>
        

        <IntroSection 
        
        para1={"Unlock the full potential of Artificial Intelligence with our expertly designed training programs, workshops, seminars, Faculty Development Programs (FDPs), and webinars—crafted to suit learners at every stage. Whether you're a student, educator, startup founder, or working professional, our offerings provide the skills, tools, and real-world exposure needed to thrive in the AI-driven future."}

        para2={"At the heart of our learning ecosystem is our AI Training Simulator—a unique platform that transforms theoretical knowledge into practical expertise. Through real-time simulations and guided exercises, participants can build, test, and deploy AI models across domains such as language processing, computer vision, data analytics, and automation."}

        srcOfImage={"/images/ai_pro.jpg"}

        altText={"AI Pro"}
        
        ></IntroSection>
        
        {/* What We Offer */}
        <section className="py-20 bg-deep-purple relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-dark-navy/80 to-deep-purple pointer-events-none"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-white">What We </span>
              <span className="text-neon-blue">Offer</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-card p-6 rounded-xl hover-scale">
                <CheckCircle className="h-6 w-6 text-neon-blue mb-4" />
                <h3 className="text-white text-xl font-medium mb-3">Structured AI Training Programs</h3>
                <p className="text-white/70">Beginner to advanced courses aligned with industry needs</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl hover-scale">
                <CheckCircle className="h-6 w-6 text-neon-blue mb-4" />
                <h3 className="text-white text-xl font-medium mb-3">FDPs & Educator Enablement</h3>
                <p className="text-white/70">Specialized content for faculty and academic institutions</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl hover-scale">
                <CheckCircle className="h-6 w-6 text-neon-blue mb-4" />
                <h3 className="text-white text-xl font-medium mb-3">Workshops & Hands-On Labs</h3>
                <p className="text-white/70">Focused skill-building sessions using our AI Simulator</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl hover-scale">
                <CheckCircle className="h-6 w-6 text-neon-blue mb-4" />
                <h3 className="text-white text-xl font-medium mb-3">Live Webinars & Seminars</h3>
                <p className="text-white/70">Interactions with AI experts and thought leaders</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl hover-scale">
                <CheckCircle className="h-6 w-6 text-neon-blue mb-4" />
                <h3 className="text-white text-xl font-medium mb-3">Capstone Projects & Certification</h3>
                <p className="text-white/70">Showcase your skills with verified credentials</p>
              </div>
            </div>
          </div>
        </section>

        <AITrainingProgram/>

        <div className='bg-deep-purple'>
          <AITrainingSchool/>
        </div>

        
        {/* Why Choose Us */}
        <section className="py-20 bg-dark-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-white">Why Choose </span>
              <span className="text-saffron">Us</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <BenefitCard 
                icon={ScrollText} 
                title="Practical Learning powered by real-world simulations" 
                color="bg-neon-blue"
              />
              
              <BenefitCard 
                icon={Globe} 
                title="India-centric Curriculum with support for local challenges and languages" 
                color="bg-saffron"
              />
              
              <BenefitCard 
                icon={Users} 
                title="Inclusive Focus with dedicated pathways for women and early-stage startups" 
                color="bg-neon-pink"
              />
              
              <BenefitCard 
                icon={Award} 
                title="Career-Ready Outcomes with project-based learning and mentorship" 
                color="bg-neon-purple"
              />
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 bg-deep-purple relative overflow-hidden">
          <div className="absolute -right-20 bottom-20 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-white">Get Started </span>
                <span className="text-saffron">Today</span>
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Join a vibrant AI learning community and become a part of India's growing innovation ecosystem.
              </p>
              <Button className="bg-saffron hover:bg-saffron/80 text-white px-8 py-6 rounded-full text-lg hover-scale">
                Explore Programs
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AIPro;
