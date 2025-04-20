
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Newspaper, Award, User, Calendar } from 'lucide-react';
import IntroSection from '@/components/IntroSection';

const NewsCard = ({ title, excerpt, date, category, color }) => {
  return (
    <Card className="glass-card border-0 hover-scale hover-glow overflow-hidden">
      <div className={`h-2 ${color}`}></div>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className={`text-xs ${color} bg-opacity-20 rounded-full px-3 py-1`}>{category}</span>
          <span className="text-white/60 text-xs">{date}</span>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
        <p className="text-white/80 mb-4">{excerpt}</p>
        <Button variant="link" className="text-saffron p-0 hover:text-saffron/80">Read More</Button>
      </CardContent>
    </Card>
  );
};

const OfferingCard = ({ title, description, icon: Icon, color }) => {
  return (
    <div className="glass-card p-6 rounded-xl hover-scale">
      <div className="flex items-center mb-4">
        <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center mr-4 flex-shrink-0`}>
          <Icon className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-lg font-medium text-white">{title}</h3>
      </div>
      <p className="text-white/70">{description}</p>
    </div>
  );
};

const News = () => {
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
                <span className="text-saffron">Headlines</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8">Inform. Inspire. Ignite.</p>
              <p className="text-lg text-white/70">AI News, Updates & Success Stories for India's Innovation Ecosystem</p>
            </div>
          </div>
        </section>
        

        <IntroSection 
        
        para1={"In a rapidly evolving AI landscape, staying informed is just as critical as staying skilled. Our initiative is committed to keeping the AI community across India updated, connected, and inspired through timely news, key developments, and real-world success stories that reflect the spirit of innovation in our nation."}

        para2={"By sharing breakthroughs, competition highlights, policy updates, and grassroots innovations, we aim to build a knowledge-rich, action-ready AI ecosystem that empowers every learner, creator, and leader."}

        srcOfImage={"/images/ai_headlines.jpg"}

        altText={"Women in AI Leadership"}
        
        ></IntroSection>
        
        {/* What We Offer */}
        <section className="py-20 bg-deep-purple relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-dark-navy/80 to-deep-purple pointer-events-none"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-white">What We </span>
              <span className="text-neon-blue">Offer</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <OfferingCard 
                title="🗞️ Timely News & Announcements"
                description="Covering key AI-related developments from India and around the world—government policies, funding news, tech launches, and academic breakthroughs."
                icon={Newspaper}
                color="bg-neon-blue"
              />
              
              <OfferingCard 
                title="🏆 Competition Highlights & Spotlights"
                description="Live updates and post-event coverage of AI hackathons, Olympiads, startup challenges, and idea-thons—with a focus on winners, innovations, and impact."
                icon={Award}
                color="bg-saffron"
              />
              
              <OfferingCard 
                title="🌟 Success Stories that Inspire"
                description="Real stories of women innovators, student champions, grassroots entrepreneurs, and Indian startups using AI to create change."
                icon={User}
                color="bg-neon-purple"
              />
              
              <OfferingCard 
                title="📢 Community Voices & Features"
                description="Thought pieces, interviews, and insights from educators, mentors, and emerging AI leaders across India's diverse regions."
                icon={Calendar}
                color="bg-neon-pink"
              />
            </div>
          </div>
        </section>
        
        {/* Latest News */}
        <section className="py-20 bg-dark-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-white">Latest </span>
              <span className="text-saffron">News</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <NewsCard 
                title="AI Summit 2025 Announced for Delhi"
                excerpt="The flagship AI for India Summit will bring together over 5,000 participants from industry, academia, and government."
                date="April 5, 2025"
                category="Events"
                color="bg-neon-blue"
              />
              
              <NewsCard 
                title="Women in AI Fellowship Opens Applications"
                excerpt="The prestigious fellowship will support 100 women to pursue advanced AI training and research opportunities."
                date="April 3, 2025"
                category="Opportunities"
                color="bg-neon-pink"
              />
              
              <NewsCard 
                title="AI Hackathon Winners Create Healthcare Solution"
                excerpt="Team Medbot's AI diagnostic assistant wins top prize for innovation addressing rural healthcare challenges."
                date="April 2, 2025"
                category="Competitions"
                color="bg-saffron"
              />
              
              <NewsCard 
                title="New AI Labs Launched in 50 Rural Schools"
                excerpt="The initiative aims to democratize AI education and bridge the digital divide for students in tier-3 cities."
                date="March 28, 2025"
                category="Education"
                color="bg-neon-teal"
              />
              
              <NewsCard 
                title="AI Policy Framework Released by Government"
                excerpt="The comprehensive policy document outlines India's strategic approach to AI development and regulation."
                date="March 25, 2025"
                category="Policy"
                color="bg-neon-purple"
              />
              
              <NewsCard 
                title="Indian AI Startup Raises $10M in Funding"
                excerpt="Language AI startup Bhashini secures significant investment to scale its multilingual translation platform."
                date="March 20, 2025"
                category="Startups"
                color="bg-india-green"
              />
            </div>
            
            <div className="text-center mt-12">
              <Button className="bg-saffron hover:bg-saffron/80 text-white">
                View All News
              </Button>
            </div>
          </div>
        </section>
        
        {/* Why It Matters & CTA */}
        <section className="py-20 bg-deep-purple relative overflow-hidden">
          <div className="absolute -right-20 bottom-20 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl mx-auto glass-card p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Why It Matters</h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start">
                  <span className="text-saffron font-bold mr-2">•</span>
                  <span>Bridges the gap between effort and visibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-saffron font-bold mr-2">•</span>
                  <span>Keeps the ecosystem informed, engaged, and future-ready</span>
                </li>
                <li className="flex items-start">
                  <span className="text-saffron font-bold mr-2">•</span>
                  <span>Celebrates India-centric innovation and motivates broader participation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-saffron font-bold mr-2">•</span>
                  <span>Builds a sense of community and shared progress</span>
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6 text-white">Be Part of the Story</h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Got news, updates, or a story worth telling? Reach out and help us shine a light on India's AI journey.
              </p>
              <Button className="bg-neon-blue hover:bg-neon-blue/80 text-white px-8 py-6 rounded-full text-lg hover-scale">
                Submit News
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default News;
