
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, Database, BarChart, Globe, Users } from 'lucide-react';
import IntroSection from '@/components/IntroSection';

const PillarCard = ({ title, description, icon: Icon, color }) => {
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

const CategoryCard = ({ title, icon: Icon, color }) => {
  return (
    <div className="glass-card p-5 rounded-xl flex items-center space-x-4 hover-scale">
      <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center flex-shrink-0`}>
        <Icon className="h-5 w-5 text-white" />
      </div>
      <h3 className="text-white font-medium">{title}</h3>
    </div>
  );
};

const FrameworkCard = ({ title, criteria }) => {
  return (
    <div className="glass-card p-5 rounded-xl hover-scale">
      <h3 className="text-white font-medium mb-3">{title}</h3>
      <p className="text-white/70 text-sm">{criteria}</p>
    </div>
  );
};

const AITools = () => {
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
                <span className="text-neon-blue">AI </span>
                <span className="text-white">Tools</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8">Curating, Analyzing & Promoting Practical Applications</p>
            </div>
          </div>
        </section>
        

      <IntroSection
        
        para1={"Artificial Intelligence (AI) holds transformative potential for solving India's complex and diverse challenges—spanning education, healthcare, agriculture, governance, and entrepreneurship. The \"AI Tools for India\" initiative aims to systematically curate, analyze, and promote practical AI tools that are locally relevant, accessible, and scalable."}

        para2={"The goal is to bridge the gap between cutting-edge AI technologies and real-world impact in India. This initiative focuses not just on identifying tools but also on understanding their applicability, effectiveness, and adoption potential in the Indian context. It also aims to inspire innovation by showcasing live use cases, particularly encouraging adoption among startups, women entrepreneurs, and regional communities."}

        srcOfImage={"/images/ai_tools.jpg"}

        altText={"AI Pro"}
        
        ></IntroSection>
        
        
        {/* Key Pillars */}
        <section className="py-20 bg-dark-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-white">Key </span>
              <span className="text-saffron">Pillars</span>
            </h2>
            
            <div className="space-y-16">
              {/* Curation */}
              <div>
                <h3 className="text-2xl font-bold mb-8 text-center">
                  <span className="text-neon-blue">1. </span>
                  <span className="text-white">Curation</span>
                </h3>
                
                <p className="text-center text-white/80 max-w-2xl mx-auto mb-10">
                  Build a comprehensive, categorized repository of AI tools across sectors such as:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <CategoryCard title="Education & Skilling" icon={Database} color="bg-neon-blue" />
                  <CategoryCard title="Healthcare & Diagnostics" icon={Database} color="bg-neon-teal" />
                  <CategoryCard title="Agritech & Sustainability" icon={Database} color="bg-india-green" />
                  <CategoryCard title="Governance & Public Services" icon={Database} color="bg-saffron" />
                  <CategoryCard title="Language & Accessibility" icon={Database} color="bg-neon-purple" />
                  <CategoryCard title="Startups & Developer Ecosystems" icon={Database} color="bg-neon-pink" />
                </div>
              </div>
              
              {/* Analysis */}
              <div>
                <h3 className="text-2xl font-bold mb-8 text-center">
                  <span className="text-neon-blue">2. </span>
                  <span className="text-white">Analysis</span>
                </h3>
                
                <p className="text-center text-white/80 max-w-2xl mx-auto mb-10">
                  Each tool is evaluated on a standard framework:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <FrameworkCard 
                    title="Localization" 
                    criteria="Support for Indian languages, regional relevance"
                  />
                  <FrameworkCard 
                    title="Accessibility" 
                    criteria="Usability for non-technical audiences"
                  />
                  <FrameworkCard 
                    title="Deployment" 
                    criteria="Cloud/API availability, mobile-readiness"
                  />
                  <FrameworkCard 
                    title="Affordability" 
                    criteria="Cost-effectiveness for grassroots use"
                  />
                  <FrameworkCard 
                    title="Impact Potential" 
                    criteria="Scalability, inclusivity, and alignment with India's developmental goals"
                  />
                </div>
              </div>
              
              {/* Promotion & Use Cases */}
              <div>
                <h3 className="text-2xl font-bold mb-8 text-center">
                  <span className="text-neon-blue">3. </span>
                  <span className="text-white">Promotion & Use Cases</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <PillarCard 
                    title="Live Demonstrations"
                    description="Develop live demos, case studies, and conceptual prototypes tailored to Indian use cases"
                    icon={BarChart}
                    color="bg-neon-blue"
                  />
                  
                  <PillarCard 
                    title="Community Engagement"
                    description="Host competitions, workshops, and summits to encourage adoption and innovation"
                    icon={Users}
                    color="bg-neon-purple"
                  />
                  
                  <PillarCard 
                    title="Inclusivity Focus"
                    description="Spotlight tools developed by Indian startups and women-led initiatives"
                    icon={Globe}
                    color="bg-neon-pink"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Outcomes */}
        <section className="py-20 bg-deep-purple relative overflow-hidden">
          <div className="absolute -right-20 bottom-20 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-white">Outcomes </span>
              <span className="text-saffron">Expected</span>
            </h2>
            
            <div className="glass-card p-8 rounded-xl max-w-4xl mx-auto">
              <ul className="space-y-4 text-white/90">
                <li className="flex items-start">
                  <span className="text-saffron font-bold mr-2">•</span>
                  <span>A growing knowledge hub of actionable AI tools and frameworks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-saffron font-bold mr-2">•</span>
                  <span>Greater awareness and adoption of AI in underserved sectors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-saffron font-bold mr-2">•</span>
                  <span>Enhanced collaboration between developers, startups, and institutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-saffron font-bold mr-2">•</span>
                  <span>A stronger, inclusive AI ecosystem aligned with India's digital future</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AITools;
