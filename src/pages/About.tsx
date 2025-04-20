
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Globe, Users, Sparkles, Target, Award } from 'lucide-react';

const About = () => {
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
                <span className="text-white">Intelligence. Innovation. </span>
                <span className="text-saffron">Inclusion</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8">Where Innovation Meets Inclusion</p>
            </div>
          </div>
        </section>
        
        {/* Vision & Mission */}
        <section className="py-20 bg-dark-navy relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Vision */}
              <div className="glass-card p-8 rounded-xl hover-scale">
                <h2 className="text-saffron text-3xl font-bold mb-6 flex items-center">
                  <Sparkles className="mr-3" /> Vision Statement
                </h2>
                <p className="text-white/90 leading-relaxed">
                  "To position India as a global leader in responsible and inclusive Artificial Intelligence innovation by empowering communities through education, entrepreneurship, engagement and equitable access to cutting-edge AI tools and opportunities."
                </p>
              </div>
              
              {/* Mission */}
              <div className="glass-card p-8 rounded-xl hover-scale">
                <h2 className="text-neon-blue text-3xl font-bold mb-6 flex items-center">
                  <Target className="mr-3" /> Mission Statement
                </h2>
                <ul className="text-white/90 space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-neon-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Catalyze AI innovation in India by hosting world-class conferences, summits, and competitions that bring together academia, industry, startups, and government stakeholders.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-neon-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Nurture the AI startup ecosystem through incubation, mentorship, funding access, and strategic networking opportunities.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-neon-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Deliver industry-relevant AI training programs, platforms, and simulators to equip individuals and institutions with hands-on skills for real-world applications.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-neon-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Build a national AI resource hub featuring curated tools, use cases and deployment-ready solutions.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-neon-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Champion inclusivity by empowering women and underrepresented groups through dedicated fellowships, mentorship events, community support and leadership opportunities.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* About Us */}
        <section className="py-20 bg-deep-purple relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-dark-navy/80 to-deep-purple pointer-events-none"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                <span className="text-white">About </span>
                <span className="text-saffron">Us</span>
              </h2>
              
              <div className="glass-card p-8 rounded-xl">
                <p className="text-white/90 leading-relaxed text-lg mb-6">
                  AI for India is on a mission to make Artificial Intelligence accessible, innovative, and inclusive across India. We are building a nationwide platform that unites startups, students, researchers, and professionals to collaborate, learn, and create impact through AI.
                </p>
                <p className="text-white/90 leading-relaxed text-lg">
                  Through conferences, training programs, competitions, startup showcases, curated toolkits, AI simulators, and inclusive outreach efforts, we're not just building a tech platform—we're nurturing a movement.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Offerings */}
        <section className="py-20 bg-dark-navy relative">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-white">Our </span>
              <span className="text-india-green">Offerings</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="glass-card border-0 hover-scale hover-glow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-saffron">🎓 AI Training Programs & Workshops</h3>
                  <p className="text-white/80">Industry-aligned learning experiences for professionals, students, and educators.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-0 hover-scale hover-glow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-neon-blue">🧠 Real-time AI Simulators & Sandboxes</h3>
                  <p className="text-white/80">Hands-on platforms for building and testing AI models with practical applications.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-0 hover-scale hover-glow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-neon-purple">🚀 Startup Incubation & Demo Days</h3>
                  <p className="text-white/80">Support systems for entrepreneurs building AI-powered solutions for India.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-0 hover-scale hover-glow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-india-green">📚 Curated Tool Listings & Use Cases</h3>
                  <p className="text-white/80">Repository of AI tools and applications tailored for Indian contexts and needs.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-0 hover-scale hover-glow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-saffron">🏆 Hackathons, Competitions & AI Challenges</h3>
                  <p className="text-white/80">Platforms for innovation, skill-building, and recognition in the AI space.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-0 hover-scale hover-glow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-neon-blue">🌐 International, National & Regional Conferences</h3>
                  <p className="text-white/80">Forums for knowledge exchange, networking, and showcasing the latest in AI.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-0 hover-scale hover-glow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-neon-pink">💪 Women-in-AI Fellowships and Leadership Tracks</h3>
                  <p className="text-white/80">Dedicated programs to promote gender diversity and inclusion in AI.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Objectives */}
        <section className="py-20 bg-deep-purple relative overflow-hidden">
          <div className="absolute -right-20 top-40 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-white">Objective of the </span>
              <span className="text-saffron">Company</span>
            </h2>
            
            <div className="glass-card p-8 rounded-xl max-w-4xl mx-auto">
              <p className="text-white/90 leading-relaxed text-lg">
                To establish a nationally recognized platform that advances Artificial Intelligence innovation in India by integrating education, enterprise, and ecosystem development—delivering strategic initiatives in training, startup incubation, inclusive participation, and knowledge dissemination to position India as a global hub for responsible AI leadership.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
