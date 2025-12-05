
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Book, Award, Users, BarChart, Globe } from 'lucide-react';
import IntroSection from '@/components/IntroSection';
import CollegeRequirementsSection from '@/components/AIlabsForColleges';
import SchoolRequirements from '@/components/AILabsForSchools';

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

const ImpactCard = ({ count, label, icon: Icon, color }) => {
  return (
    <div className="glass-card p-6 rounded-xl text-center hover-scale">
      <div className={`w-16 h-16 rounded-full ${color} flex items-center justify-center mx-auto mb-4`}>
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-white text-2xl font-bold mb-2">{count}</h3>
      <p className="text-white/70">{label}</p>
    </div>
  );
};

const AILabs = () => {
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
                <span className="text-white">Build </span>
                <span className="text-neon-teal">AI Labs</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8">AI Labs in Schools & Colleges</p>
              <p className="text-lg text-white/70">Igniting Curiosity. Enabling Innovation. Empowering India's Future.</p>
            </div>
          </div>
        </section>
        

        <IntroSection
        
        para1={"To shape a generation ready for the age of Artificial Intelligence, we are setting up AI Labs in educational institutions across India—from urban tech hubs to rural classrooms. These labs serve as innovation zones where students and educators can explore, experiment, and excel in AI through hands-on learning, real-world projects, and competitive challenges."}

        para2={"Designed to align with India's educational diversity and national priorities, our AI Labs are not just tech setups—they are launchpads for future innovators, researchers, and changemakers."}

        srcOfImage={"/images/ai_labs.jpg"}

        altText={"AI Pro"}
        
        ></IntroSection>
        
        
        {/* Key Features */}
        <section className="py-20 bg-deep-purple relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-dark-navy/80 to-deep-purple pointer-events-none"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-white">Key Features of </span>
              <span className="text-saffron">AI Labs</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard 
                title="🖥️ Hands-On Learning Infrastructure"
                description="Equipped with AI-ready computers, toolkits, curated datasets, and simulation platforms tailored for India's languages and sectors."
                icon={Monitor}
                color="bg-neon-blue"
              />
              
              <FeatureCard 
                title="📚 Custom AI Curriculum & Skill Tracks"
                description="Modular learning paths for students and teachers—covering machine learning, data science, NLP, computer vision, ethics, and more."
                icon={Book}
                color="bg-saffron"
              />
              
              <FeatureCard 
                title="🧠 AI Competitions & Project Incubation"
                description="Support for hosting hackathons, Olympiads, and startup challenges—empowering students to ideate and prototype impactful solutions."
                icon={Award}
                color="bg-neon-purple"
              />
              
              <FeatureCard 
                title="👩‍🏫 Faculty Development & Mentorship"
                description="Training programs for educators to lead AI learning confidently, with access to mentorship networks and teaching resources."
                icon={Users}
                color="bg-neon-pink"
              />
            </div>
          </div>
        </section>

        <CollegeRequirementsSection></CollegeRequirementsSection>
        <SchoolRequirements/>
        {/* Impact Goals */}
        <section className="py-20 bg-dark-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-white">Impact </span>
              <span className="text-neon-blue">Goals</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ImpactCard 
                count="1M+"
                label="Students empowered with AI skills"
                icon={Users}
                color="bg-neon-blue"
              />
              
              <ImpactCard 
                count="500+"
                label="Labs in tier-2/3 cities"
                icon={Globe}
                color="bg-neon-purple"
              />
              
              <ImpactCard 
                count="10K+"
                label="Projects developed"
                icon={Award}
                color="bg-saffron"
              />
              
              <ImpactCard 
                count="100+"
                label="Startups incubated"
                icon={BarChart}
                color="bg-neon-pink"
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
                <span className="text-white">Let's Build the </span>
                <span className="text-saffron">Future Together</span>
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Partner with us to set up AI Labs in your school, college, or region—and unlock a new era of learning and innovation.
              </p>
              <Button className="bg-neon-teal hover:bg-neon-teal/80 text-white px-8 py-6 rounded-full text-lg hover-scale">
                Partner With Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AILabs;
