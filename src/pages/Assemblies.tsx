
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, MessageSquare, Building, Landmark, Bookmark } from 'lucide-react';
import StaticImage from '@/components/StaticImage';
import IntroSection from '@/components/IntroSection';

const AssemblyCard = ({ title, description, icon: Icon, color }) => {
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

const ThemeCard = ({ title, color }) => {
  return (
    <div className={`glass-card rounded-xl p-4 ${color} bg-opacity-10 hover-scale`}>
      <h3 className="text-lg font-medium text-white">{title}</h3>
    </div>
  );
};

const Assemblies = () => {
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
                <span className="text-saffron">Assemblies</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8">Uniting Minds. Shaping Futures. Building India's AI Narrative.</p>
            </div>
          </div>
        </section>
        
        
        <IntroSection 
        
        para1={"To catalyze India’s leadership in Artificial Intelligence, we host high-impact AI assemblies—conferences, summits, symposiums, and conclaves. These gatherings unite the nation’s brightest minds—innovators, policymakers, startups, researchers, educators, and global thought leaders—to foster meaningful dialogue, collaboration, and policy direction."}

        para2={"Each event is thoughtfully curated to address India-specific challenges and opportunities, ensuring that AI conversations are cutting-edge, inclusive, localized, and action-driven."}

        srcOfImage={"/images/AI_assemblies.avif"}

        altText={"AI assemblies"}
        
        ></IntroSection>
        
        {/* Key Event Formats */}
        <section className="py-20 bg-deep-purple relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-dark-navy/80 to-deep-purple pointer-events-none"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-white">Key Event </span>
              <span className="text-saffron">Formats</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AssemblyCard 
                title="🏛️ International & National AI Conferences"
                description="Flagship events featuring keynote speakers, panel discussions, workshops, and exhibitions focused on sectoral AI innovation."
                icon={Building}
                color="bg-neon-blue"
              />
              
              <AssemblyCard 
                title="🌐 AI Summits"
                description="Industry-driven assemblies spotlighting startups, enterprise solutions, and AI policy at scale."
                icon={Landmark}
                color="bg-saffron"
              />
              
              <AssemblyCard 
                title="🧠 Academic Symposiums"
                description="Research-focused gatherings exploring theoretical advances, case studies, and interdisciplinary AI applications."
                icon={MessageSquare}
                color="bg-neon-purple"
              />
              
              <AssemblyCard 
                title="🤝 Conclaves & Roundtables"
                description="Invite-only leadership forums to shape AI strategy, ethics, and public-private partnerships in India."
                icon={Users}
                color="bg-neon-pink"
              />
            </div>
          </div>
        </section>
        
        {/* Focus Themes */}
        <section className="py-20 bg-dark-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-white">Focus </span>
              <span className="text-neon-blue">Themes</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ThemeCard title="AI for Bharat – Inclusion, rural tech, and vernacular AI" color="bg-saffron" />
              <ThemeCard title="Women in AI – Leadership, innovation, and empowerment" color="bg-neon-pink" />
              <ThemeCard title="AI in Public Sector – Governance, urban development, law, and policy" color="bg-neon-blue" />
              <ThemeCard title="AI in Education, Health & Agriculture – National mission alignment" color="bg-india-green" />
              <ThemeCard title="Startup Ecosystem & Talent Development" color="bg-neon-purple" />
              <ThemeCard title="AI Ethics, Safety & Regulation" color="bg-neon-teal" />
            </div>
          </div>
        </section>
        
        {/* Why Attend */}
        <section className="py-20 bg-deep-purple relative overflow-hidden">
          <div className="absolute -right-20 bottom-20 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-white">Why </span>
              <span className="text-saffron">Attend</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass-card p-6 rounded-xl text-center hover-scale">
                <div className="w-16 h-16 rounded-full bg-saffron/20 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-saffron" />
                </div>
                <h3 className="text-white font-medium text-lg mb-2">Engage with Thought Leaders</h3>
                <p className="text-white/70">from academia, industry, and government</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl text-center hover-scale">
                <div className="w-16 h-16 rounded-full bg-neon-blue/20 flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-neon-blue" />
                </div>
                <h3 className="text-white font-medium text-lg mb-2">Participate in Dialogues</h3>
                <p className="text-white/70">that shape India's AI trajectory</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl text-center hover-scale">
                <div className="w-16 h-16 rounded-full bg-neon-purple/20 flex items-center justify-center mx-auto mb-4">
                  <Landmark className="h-8 w-8 text-neon-purple" />
                </div>
                <h3 className="text-white font-medium text-lg mb-2">Showcase Innovations</h3>
                <p className="text-white/70">and build powerful partnerships</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl text-center hover-scale">
                <div className="w-16 h-16 rounded-full bg-neon-teal/20 flex items-center justify-center mx-auto mb-4">
                  <Bookmark className="h-8 w-8 text-neon-teal" />
                </div>
                <h3 className="text-white font-medium text-lg mb-2">Gain Insights & Foresight</h3>
                <p className="text-white/70">into India-centric AI trends and futures</p>
              </div>
            </div>
            
            <div className="text-center mt-16">
              <Button className="bg-saffron hover:bg-saffron/80 text-white px-8 py-6 rounded-full text-lg hover-scale">
                Get Involved
              </Button>
              <p className="text-white/70 mt-4">Join us to shape a responsible, inclusive, and innovation-driven AI future for India.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Assemblies;
