
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Lightbulb, Brain, Rocket, FileText, Award, Users, CheckCircle } from 'lucide-react';
import IntroSection from '@/components/IntroSection';

const CompetitionCard = ({ title, description, icon: Icon, color }) => {
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

const FocusAreaCard = ({ title, color }) => {
  return (
    <div className={`glass-card rounded-xl p-4 ${color} bg-opacity-10 hover-scale`}>
      <h3 className="text-lg font-medium text-white">{title}</h3>
    </div>
  );
};

const BenefitCard = ({ icon: Icon, title, description, color }) => {
  return (
    <div className="glass-card p-6 rounded-xl text-center hover-scale">
      <div className={`w-16 h-16 rounded-full ${color} flex items-center justify-center mx-auto mb-4`}>
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-white font-medium text-lg mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
};

const AIBattles = () => {
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
                <span className="text-white">AI </span>
                <span className="text-neon-purple">Battles</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8">AI Competitions for India: Fueling Innovation, Talent & Impact</p>
              <p className="text-lg text-white/70">Driving AI Excellence Through Competitive Innovation</p>
            </div>
          </div>
        </section>

        <IntroSection
        
        para1={"To accelerate the adoption of Artificial Intelligence in solving India's most pressing challenges, we organize a diverse range of AI-focused competitions designed to engage students, professionals, startups, and innovators. From Hackathons to AI Olympiads, our initiatives provide a dynamic platform for talent discovery, creative problem-solving, and real-world implementation."}

        para2={"These events are strategically crafted to not only inspire innovation but also to align with India's national priorities—such as healthcare access, smart agriculture, education, sustainability, and digital governance."}

        srcOfImage={"/images/ai_battle.jpg"}

        altText={"AI Pro"}
        
        ></IntroSection>
        
        {/* Flagship AI Competitions */}
        <section className="py-20 bg-deep-purple relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-dark-navy/80 to-deep-purple pointer-events-none"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-white">Flagship AI </span>
              <span className="text-saffron">Competitions</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <CompetitionCard 
                title="🔧 AI Hackathons"
                description="Rapid innovation events where coders and creators build working AI solutions to real-world challenges in 24–48 hours."
                icon={Code}
                color="bg-neon-blue"
              />
              
              <CompetitionCard 
                title="💡 Idea-thons"
                description="A launchpad for early-stage thinkers to pitch impactful AI-based ideas focused on social and sectoral needs."
                icon={Lightbulb}
                color="bg-saffron"
              />
              
              <CompetitionCard 
                title="🧠 AI Olympiads"
                description="National-level competitions assessing theoretical and practical AI knowledge for school and college students."
                icon={Brain}
                color="bg-neon-purple"
              />
              
              <CompetitionCard 
                title="🚀 Startup Challenges"
                description="Themed competitions empowering startups to develop scalable, AI-powered solutions for India's unique problems."
                icon={Rocket}
                color="bg-neon-pink"
              />
              
              <CompetitionCard 
                title="📂 Project Showcases"
                description="Platforms to exhibit live AI projects, prototypes, and research with mentorship, evaluation, and investor exposure."
                icon={FileText}
                color="bg-neon-teal"
              />
            </div>
          </div>
        </section>
        
        {/* Focus Areas */}
        <section className="py-20 bg-dark-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-white">Focus </span>
              <span className="text-neon-blue">Areas</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FocusAreaCard title="Agritech & Rural Development" color="bg-india-green" />
              <FocusAreaCard title="Healthcare Access & Diagnostics" color="bg-neon-teal" />
              <FocusAreaCard title="Smart Education & EdTech" color="bg-neon-blue" />
              <FocusAreaCard title="Language Technologies for India" color="bg-neon-purple" />
              <FocusAreaCard title="Women in AI & Inclusive Innovation" color="bg-neon-pink" />
              <FocusAreaCard title="Digital Governance & Policy" color="bg-saffron" />
            </div>
          </div>
        </section>
        
        {/* Why Participate */}
        <section className="py-20 bg-deep-purple relative overflow-hidden">
          <div className="absolute -right-20 bottom-20 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-white">Why </span>
              <span className="text-saffron">Participate</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <BenefitCard 
                icon={Users}
                title="Learning & Mentorship"
                description="from AI experts and industry leaders"
                color="bg-neon-blue"
              />
              
              <BenefitCard 
                icon={Award}
                title="Recognition & Awards"
                description="at International, national and regional levels"
                color="bg-saffron"
              />
              
              <BenefitCard 
                icon={Rocket}
                title="Showcase Opportunities"
                description="with investors, institutions, and incubators"
                color="bg-neon-purple"
              />
              
              <BenefitCard 
                icon={CheckCircle}
                title="Networking & Community"
                description="with International and India's top AI talent"
                color="bg-neon-pink"
              />
            </div>
            
            <div className="text-center mt-16">
              <Button className="bg-neon-purple hover:bg-neon-purple/80 text-white px-8 py-6 rounded-full text-lg hover-scale">
                Join the Movement
              </Button>
              <p className="text-white/70 mt-4">Be part of India's AI transformation by participating, mentoring, or sponsoring our next competition.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AIBattles;
