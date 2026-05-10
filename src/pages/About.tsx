
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Sparkles, Target } from 'lucide-react';

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
                <span className="text-black">Intelligence. Innovation. </span>
                <span className="text-saffron">Inclusion</span>
              </h1>
              <p className="text-xl md:text-2xl text-black/80 mb-8">Where Innovation Meets Inclusion</p>
            </div>
          </div>
        </section>
        
        {/* About Us */}
        <section className="py-20 bg-dark-navy relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="glass-card p-8 rounded-xl hover-scale">
                <h2 className="text-saffron text-3xl font-bold mb-6 flex items-center">
                  <Sparkles className="mr-3" /> About Us
                </h2>
                <p className="text-black/90 leading-relaxed">
                  We are a dynamic innovation and research-driven organization dedicated to transforming ideas into impactful solutions through technology, research and collaborative learning platforms.
                </p>
                <p className="text-black/90 leading-relaxed mt-4">
                  Our mission is to empower students, educators, researchers, professionals, startups and institutions by creating opportunities that foster innovation, creativity and future-ready skills.
                </p>
              </div>

              <div className="glass-card p-8 rounded-xl hover-scale">
                <h2 className="text-neon-blue text-3xl font-bold mb-6 flex items-center">
                  <Target className="mr-3" /> What We Do
                </h2>
                <p className="text-black/90 leading-relaxed">
                  We specialize in organizing hackathons, emerging technology tool challenges, AI summits, Olympiads, international conferences, workshops, innovation expos and research forums that bring together brilliant minds from academia and industry across the globe.
                </p>
                <p className="text-black/90 leading-relaxed mt-4">
                  Our initiatives are designed to encourage experiential learning, interdisciplinary collaboration and real-world problem solving in rapidly evolving domains such as Artificial Intelligence, Data Science, Cybersecurity, IoT, Robotics, Blockchain, Cloud Computing and Sustainable Technologies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 bg-deep-purple relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-dark-navy/80 to-deep-purple pointer-events-none"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="glass-card p-8 rounded-xl hover-scale">
                <h2 className="text-saffron text-3xl font-bold mb-6">Vision</h2>
                <p className="text-black/90 leading-relaxed">
                  To be a globally recognized innovation, research and Artificial Intelligence–driven organization committed to building a thriving AI ecosystem that empowers future leaders, researchers, innovators and institutions through excellence, collaboration, creativity and transformative growth for a sustainable and progressive future.
                </p>
              </div>

              <div className="glass-card p-8 rounded-xl hover-scale">
                <h2 className="text-neon-blue text-3xl font-bold mb-6">Mission</h2>
                <ul className="text-black/90 space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-neon-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Organize high-impact hackathons, emerging technology challenges, AI summits, Olympiads and international conferences that inspire innovation, creativity and real-world problem solving.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-neon-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Provide research-based solutions and technology consulting that address academic, industrial and societal challenges through cutting-edge innovation and interdisciplinary collaboration.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-neon-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Recognize and celebrate excellence in research, innovation, entrepreneurship and technology through prestigious awards at national and international levels.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-neon-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Foster a culture of scientific inquiry, critical thinking and experiential learning among students, researchers, educators, startups and professionals.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-neon-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Create global platforms for collaboration among academia, industry, government and research communities for knowledge exchange and technological advancement.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-neon-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Promote emerging technologies such as Artificial Intelligence, Data Science, Cybersecurity, IoT, Robotics, Blockchain and Sustainable Technologies through experiential events and capacity-building initiatives.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-neon-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Bridge the gap between education, research and industry by enabling mentorship, networking, skill development, innovation incubation and research dissemination opportunities.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-neon-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Nurture globally competent and socially responsible innovators capable of contributing to the advancement of technology, research and society.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section className="py-20 bg-dark-navy relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                <span className="text-black">About </span>
                <span className="text-saffron">Us</span>
              </h2>
              <div className="glass-card p-8 rounded-xl">
                <p className="text-black/90 leading-relaxed text-lg mb-6">
                  In addition to events and competitions, we provide research-based solutions and innovation-driven consulting services to academic institutions, industries and organizations seeking technological advancement and strategic transformation.
                </p>
                <p className="text-black/90 leading-relaxed text-lg mb-6">
                  Through our research and innovation awards, we recognize outstanding contributions that drive scientific progress, entrepreneurship and societal impact.
                </p>
                <p className="text-black/90 leading-relaxed text-lg">
                  By building a vibrant ecosystem of learning, networking, mentorship and innovation, we aim to bridge the gap between education, research and industry while nurturing globally competent innovators and leaders for the future.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Offerings */}
        <section className="py-20 bg-dark-navy relative">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-black">Our </span>
              <span className="text-india-green">Offerings</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="glass-card border-0 hover-scale hover-glow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-saffron">🎓 AI Training Programs & Workshops</h3>
                  <p className="text-black/80">Industry-aligned learning experiences for professionals, students, and educators.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-0 hover-scale hover-glow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-neon-blue">🧠 Real-time AI Simulators & Sandboxes</h3>
                  <p className="text-black/80">Hands-on platforms for building and testing AI models with practical applications.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-0 hover-scale hover-glow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-neon-purple">🚀 Startup Incubation & Demo Days</h3>
                  <p className="text-black/80">Support systems for entrepreneurs building AI-powered solutions for India.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-0 hover-scale hover-glow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-india-green">📚 Curated Tool Listings & Use Cases</h3>
                  <p className="text-black/80">Repository of AI tools and applications tailored for Indian contexts and needs.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-0 hover-scale hover-glow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-saffron">🏆 Hackathons, Competitions & AI Challenges</h3>
                  <p className="text-black/80">Platforms for innovation, skill-building, and recognition in the AI space.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-0 hover-scale hover-glow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-neon-blue">🌐 International, National & Regional Conferences</h3>
                  <p className="text-black/80">Forums for knowledge exchange, networking, and showcasing the latest in AI.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-0 hover-scale hover-glow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-neon-pink">💪 Women-in-AI Fellowships and Leadership Tracks</h3>
                  <p className="text-black/80">Dedicated programs to promote gender diversity and inclusion in AI.</p>
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
              <span className="text-black">Objective of the </span>
              <span className="text-saffron">Company</span>
            </h2>
            
            <div className="glass-card p-8 rounded-xl max-w-4xl mx-auto">
              <p className="text-black/90 leading-relaxed text-lg">
                Our objective is to build a thriving Artificial Intelligence, innovation and research ecosystem by creating impactful platforms that connect students, researchers, educators, industry experts, startups and institutions worldwide.
              </p>
              <p className="text-black/90 leading-relaxed text-lg mt-4">
                Through hackathons, AI summits, Olympiads, international conferences, innovation challenges, research-based solutions and recognition programs, we aim to foster creativity, collaboration, technological advancement and experiential learning.
              </p>
              <p className="text-black/90 leading-relaxed text-lg mt-4">
                We strive to bridge the gap between education, research and industry while empowering future-ready innovators and leaders to develop sustainable, ethical and technology-driven solutions for global challenges.
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
