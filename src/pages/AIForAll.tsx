
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, Puzzle, UserPlus } from 'lucide-react';
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

const CommitmentCard = ({ title }) => {
  return (
    <div className="glass-card p-4 rounded-xl hover-scale">
      <p className="text-white text-center">{title}</p>
    </div>
  );
};

const AIForAll = () => {
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
                <span className="text-white">AI for </span>
                <span className="text-neon-pink">ALL</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8">Championing Inclusivity in AI: Empowering Women & Underrepresented Communities</p>
              <p className="text-lg text-white/70">Creating Equal Access to the Future of Technology</p>
            </div>
          </div>
        </section>


        <IntroSection
        
        para1={"At the core of our mission is the belief that Artificial Intelligence must be built by and for everyone. To truly harness AI's potential for social and economic transformation, we are committed to empowering women and underrepresented groups through targeted programs that foster inclusion, leadership, and long-term participation in India's AI ecosystem."}

        para2={"Our goal is to create a vibrant, supportive, and opportunity-rich ecosystem where talent thrives beyond barriers. This initiative ensures that diversity is not just a metric—but a movement driving real change in innovation, opportunity, and impact."}

        srcOfImage={"/images/Budhiya.jpg"}

        altText={"AI Pro"}
        
        ></IntroSection>
        
        {/* Key Pillars */}
        <section className="py-20 bg-deep-purple relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-dark-navy/80 to-deep-purple pointer-events-none"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-white">Key Pillars of the </span>
              <span className="text-saffron">Program</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <PillarCard 
                title="👩‍🎓 Fellowships & Scholarships"
                description="Exclusive opportunities for women, rural youth, and underrepresented communities to gain access to advanced AI training, certifications, and research support."
                icon={GraduationCap}
                color="bg-neon-pink"
              />
              
              <PillarCard 
                title="🤝 Mentorship & Networking Events"
                description="Curated interactions with successful women leaders, AI professionals, and startup founders—designed to inspire, guide and support participants in their journeys."
                icon={Users}
                color="bg-neon-purple"
              />
              
              <PillarCard 
                title="🧩 Community & Peer Support Networks"
                description="Inclusive AI clubs, women-in-tech chapters discussion forums and support groups that foster continuous engagement, knowledge exchange, and peer-driven learning."
                icon={Puzzle}
                color="bg-neon-blue"
              />
              
              <PillarCard 
                title="👩‍💼 Leadership Opportunities"
                description="Reserved leadership roles and spotlight tracks in AI hackathons, idea-thons, and startup competitions to amplify diverse voices and promote inclusive innovation."
                icon={UserPlus}
                color="bg-saffron"
              />
            </div>
          </div>
        </section>
        
        {/* Our Commitment */}
        <section className="py-20 bg-dark-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-white">Our </span>
              <span className="text-neon-pink">Commitment</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <CommitmentCard title="Equal access to trainings, competitions, and recognition" />
              <CommitmentCard title="Inclusive representation in jury panels, speaking slots, and organizing teams" />
              <CommitmentCard title="Building a pipeline of confident, skilled, and visible women leaders in AI across India" />
            </div>
          </div>
        </section>
        
        {/* Vision & CTA */}
        <section className="py-20 bg-deep-purple relative overflow-hidden">
          <div className="absolute -right-20 bottom-20 w-96 h-96 bg-neon-pink/20 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl mx-auto glass-card p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Our Vision</h3>
              <p className="text-white/90 text-center">
                To build a vibrant, inclusive AI ecosystem where every voice counts, every idea is heard, and every innovator—regardless of background—has the resources and recognition to succeed.
              </p>
            </div>
            
            <div className="text-center">
              <Button className="bg-neon-pink hover:bg-neon-pink/80 text-white px-8 py-6 rounded-full text-lg hover-scale">
                Get Involved
              </Button>
              <p className="text-white/70 mt-4">
                Collaborate with us to nurture a truly inclusive AI ecosystem. Be a mentor, sponsor a fellowship, or launch a diversity-focused initiative within your organization.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AIForAll;
