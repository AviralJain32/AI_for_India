
// import React from 'react';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Monitor, Book, Award, Users, BarChart, Globe } from 'lucide-react';
// import IntroSection from '@/components/IntroSection';
// import CollegeRequirementsSection from '@/components/AIlabsForColleges';
// import SchoolRequirements from '@/components/AILabsForSchools';

// const FeatureCard = ({ title, description, icon: Icon, color }) => {
//   return (
//     <Card className="glass-card border-0 hover-scale hover-glow">
//       <CardContent className="p-6">
//         <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center mb-4`}>
//           <Icon className="h-6 w-6 text-black" />
//         </div>
//         <h3 className="text-xl font-semibold mb-4 text-black">{title}</h3>
//         <p className="text-black/80">{description}</p>
//       </CardContent>
//     </Card>
//   );
// };

// const ImpactCard = ({ count, label, icon: Icon, color }) => {
//   return (
//     <div className="glass-card p-6 rounded-xl text-center hover-scale">
//       <div className={`w-16 h-16 rounded-full ${color} flex items-center justify-center mx-auto mb-4`}>
//         <Icon className="h-8 w-8 text-black" />
//       </div>
//       <h3 className="text-black text-2xl font-bold mb-2">{count}</h3>
//       <p className="text-black/70">{label}</p>
//     </div>
//   );
// };

// const AILabs = () => {
//   return (
//     <div className="min-h-screen bg-dark-navy">
//       <Navbar />
//       <main className="pt-24">
//         {/* Hero Section */}
//         <section className="py-16 bg-deep-purple relative overflow-hidden">
//           <div className="absolute -right-40 bottom-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl"></div>
//           <div className="absolute -left-40 top-20 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl"></div>
          
//           <div className="container mx-auto px-4 relative z-10">
//             <div className="text-center max-w-3xl mx-auto">
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
//                 <span className="text-black">Build </span>
//                 <span className="text-neon-teal">AI Labs</span>
//               </h1>
//               <p className="text-xl md:text-2xl text-black/80 mb-8">AI Labs in Schools & Colleges</p>
//               <p className="text-lg text-black/70">Igniting Curiosity. Enabling Innovation. Empowering India's Future.</p>
//             </div>
//           </div>
//         </section>
        

//         <IntroSection
        
//         para1={"To shape a generation ready for the age of Artificial Intelligence, we are setting up AI Labs in educational institutions across India—from urban tech hubs to rural classrooms. These labs serve as innovation zones where students and educators can explore, experiment, and excel in AI through hands-on learning, real-world projects, and competitive challenges."}

//         para2={"Designed to align with India's educational diversity and national priorities, our AI Labs are not just tech setups—they are launchpads for future innovators, researchers, and changemakers."}

//         srcOfImage={"/images/ai_labs.jpg"}

//         altText={"AI Pro"}
        
//         ></IntroSection>
        
        
//         {/* Key Features */}
//         <section className="py-20 bg-deep-purple relative overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-radial from-dark-navy/80 to-deep-purple pointer-events-none"></div>
          
//           <div className="container mx-auto px-4 relative z-10">
//             <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//               <span className="text-black">Key Features of </span>
//               <span className="text-saffron">AI Labs</span>
//             </h2>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <FeatureCard 
//                 title="🖥️ Hands-On Learning Infrastructure"
//                 description="Equipped with AI-ready computers, toolkits, curated datasets, and simulation platforms tailored for India's languages and sectors."
//                 icon={Monitor}
//                 color="bg-neon-blue"
//               />
              
//               <FeatureCard 
//                 title="📚 Custom AI Curriculum & Skill Tracks"
//                 description="Modular learning paths for students and teachers—covering machine learning, data science, NLP, computer vision, ethics, and more."
//                 icon={Book}
//                 color="bg-saffron"
//               />
              
//               <FeatureCard 
//                 title="🧠 AI Competitions & Project Incubation"
//                 description="Support for hosting hackathons, Olympiads, and startup challenges—empowering students to ideate and prototype impactful solutions."
//                 icon={Award}
//                 color="bg-neon-purple"
//               />
              
//               <FeatureCard 
//                 title="👩‍🏫 Faculty Development & Mentorship"
//                 description="Training programs for educators to lead AI learning confidently, with access to mentorship networks and teaching resources."
//                 icon={Users}
//                 color="bg-neon-pink"
//               />
//             </div>
//           </div>
//         </section>

//         <CollegeRequirementsSection></CollegeRequirementsSection>
//         <SchoolRequirements/>
//         {/* Impact Goals */}
//         <section className="py-20 bg-dark-navy">
//           <div className="container mx-auto px-4">
//             <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//               <span className="text-black">Impact </span>
//               <span className="text-neon-blue">Goals</span>
//             </h2>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               <ImpactCard 
//                 count="1M+"
//                 label="Students empowered with AI skills"
//                 icon={Users}
//                 color="bg-neon-blue"
//               />
              
//               <ImpactCard 
//                 count="500+"
//                 label="Labs in tier-2/3 cities"
//                 icon={Globe}
//                 color="bg-neon-purple"
//               />
              
//               <ImpactCard 
//                 count="10K+"
//                 label="Projects developed"
//                 icon={Award}
//                 color="bg-saffron"
//               />
              
//               <ImpactCard 
//                 count="100+"
//                 label="Startups incubated"
//                 icon={BarChart}
//                 color="bg-neon-pink"
//               />
//             </div>
//           </div>
//         </section>
        
//         {/* Call to Action */}
//         <section className="py-20 bg-deep-purple relative overflow-hidden">
//           <div className="absolute -right-20 bottom-20 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl"></div>
          
//           <div className="container mx-auto px-4 relative z-10">
//             <div className="text-center max-w-2xl mx-auto">
//               <h2 className="text-3xl md:text-4xl font-bold mb-6">
//                 <span className="text-black">Let's Build the </span>
//                 <span className="text-saffron">Future Together</span>
//               </h2>
//               <p className="text-lg text-black/80 mb-8">
//                 Partner with us to set up AI Labs in your school, college, or region—and unlock a new era of learning and innovation.
//               </p>
//               <Button className="bg-neon-teal hover:bg-neon-teal/80 text-black px-8 py-6 rounded-full text-lg hover-scale">
//                 Partner With Us
//               </Button>
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default AILabs;


import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Book, Award, Users, BarChart, Globe, Layers, Rocket, Cpu, School } from 'lucide-react';
import IntroSection from '@/components/IntroSection';
import ImageCarousel from '@/components/CarousalAILabs';

const FeatureCard = ({ title, description, icon: Icon, color }) => {
  return (
    <Card className="glass-card border-0 hover-scale hover-glow">
      <CardContent className="p-6">
        <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center mb-4`}>
          <Icon className="h-6 w-6 text-black" />
        </div>
        <h3 className="text-xl font-semibold mb-4 text-black">{title}</h3>
        <p className="text-black/80">{description}</p>
      </CardContent>
    </Card>
  );
};

  // Image list
  const carouselImages = [
  { src: "/ai-labs/csl_cover.png", alt: "Composite Skill Lab Cover" },
  { src: "/ai-labs/nano_lab.png", alt: "AI Nano Lab Setup" },
  { src: "/ai-labs/macro_lab.png", alt: "AI Macro Lab Setup" },
  { src: "/ai-labs/students_projects.png", alt: "Students Working on AI Projects" },
  { src: "/ai-labs/classroom_lab.png", alt: "AI Classroom Lab Environment" },
];

const AILabs = () => {
  return (
    <div className="min-h-screen bg-dark-navy">
      <Navbar />
      <main className="pt-24">

        {/* HERO SECTION */}
        <section className="py-16 bg-deep-purple relative overflow-hidden">
          <div className="absolute -right-40 bottom-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute -left-40 top-20 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black">
              Build <span className="text-neon-teal">AI Labs</span>
            </h1>
            <p className="text-xl md:text-2xl text-black/80 mb-4">AI Labs in Schools & Colleges</p>
            <p className="text-lg text-black/70">
              Igniting Curiosity. Enabling Innovation. Empowering India’s Future.
            </p>
          </div>
        </section>

        <section className="py-20 bg-deep-purple relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 flex justify-center">
            <div className="w-full max-w-5xl">
              {/* <CarouselAILabs /> */}
              <ImageCarousel images={carouselImages} />

            </div>
          </div>
        </section>

        {/* INTRO SECTION */}
        <IntroSection
          para1={
            "AI Labs are next-generation learning spaces designed to bring experiential learning in Artificial Intelligence, Robotics, Coding, IoT, Electronics, and Space Technology to schools and colleges across India. Supported by CBSE, NEP and global STEM standards, these labs foster curiosity-driven learning through hands-on projects and real-world challenges."
          }
          para2={
            "Students explore structured AI skill tracks, participate in competitions, build STEM projects, and gain certifications—preparing them for the future of innovation, research, and entrepreneurship."
          }
          srcOfImage={"/images/ai_labs.png"}
          altText={"AI Labs by AFI Edutech"}
        />

        {/* KEY FEATURES */}
        <section className="py-20 bg-deep-purple relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
              Key Features of <span className="text-saffron">AI Labs</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard
                title="Hands-On Learning Infrastructure"
                description="Robotics kits, AI kits, IoT kits, satellite models, VR, 3D printers, electronics tools, STEM materials and complete lab setup."
                icon={Monitor}
                color="bg-neon-blue"
              />

              <FeatureCard
                title="Custom AI Curriculum & Skill Tracks"
                description="CBSE-aligned modules including AI (901), Design Thinking (903), Coding (910), Satellites (932, 933) and advanced AI pathways."
                icon={Book}
                color="bg-saffron"
              />

              <FeatureCard
                title="AI Competitions & Project Incubation"
                description="Support for hackathons, Olympiads, WRO, exhibitions, ideathons and project-based real-world problem solving."
                icon={Award}
                color="bg-neon-purple"
              />

              <FeatureCard
                title="Faculty Development & Mentorship"
                description="Teacher training, curriculum alignment, online LMS access, continuous monitoring and expert mentorship."
                icon={Users}
                color="bg-neon-pink"
              />
            </div>
          </div>
        </section>

        {/* LAB TYPES */}
        <section className="py-20 bg-dark-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
              AI Lab <span className="text-neon-blue">Models</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              <Card className="glass-card p-8 hover-scale">
                <h3 className="text-black text-2xl font-bold mb-4">AI Nano Lab</h3>
                <p className="text-black/80 mb-4">
                  Ideal for schools starting their AI skilling journey. Includes:
                </p>
                <ul className="text-black/70 space-y-2">
                  <li>• AI Ultimate Kit</li>
                  <li>• Arduino & IoT Kits</li>
                  <li>• Basic Electronics Kit</li>
                  <li>• STEM Tools & Consumables</li>
                  <li>• Display Projects (Mars Rover, Garden Lights, Water Filler)</li>
                  <li>• Posters, Wallpapers & Lab Décor</li>
                </ul>
              </Card>

              <Card className="glass-card p-8 hover-scale">
                <h3 className="text-black text-2xl font-bold mb-4">AI Macro Lab</h3>
                <p className="text-black/80 mb-4">
                  A full-scale advanced AI education ecosystem with:
                </p>
                <ul className="text-black/70 space-y-2">
                  <li>• VR Headsets & 3D Printer</li>
                  <li>• Drone & Humanoid Robot</li>
                  <li>• AI Ultimate + IoT + Electronics Kits</li>
                  <li>• Aerospace Gliders</li>
                  <li>• Advanced Robotics Equipment</li>
                  <li>• Full Lab Display Infrastructure</li>
                </ul>
              </Card>

            </div>
          </div>
        </section>

        {/* COMPOSITE SKILL LAB SECTION */}
        <section className="py-20 bg-deep-purple relative">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl text-center font-bold text-black mb-10">
              Composite Skill Lab (CSL)
            </h2>

            <p className="text-center text-black/80 max-w-3xl mx-auto mb-10">
              The CSL integrates Robotics, Electronics, Satellites, Coding, AI and Space Technology
              aligned with CBSE Skill Modules (901, 903, 910, 932, 933). Includes teacher training, assessment
              framework, impact cards, certifications and project-based learning.
            </p>

            <Card className="glass-card p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl text-black font-bold mb-4">What CSL Includes:</h3>
              <ul className="text-black/70 space-y-2">
                <li>• Robotics Kits & Satellite Models</li>
                <li>• Electronics Tools & STEM Kits</li>
                <li>• CBSE Module-Aligned Curriculum</li>
                <li>• Student Engagement & Recognition</li>
                <li>• 3C’s Assessment: Critical Thinking, Creativity, Collaboration</li>
                <li>• Teacher Training & LMS Access</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* IMPLEMENTATION PROCESS */}
        <section className="py-20 bg-dark-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl text-center text-black font-bold mb-10">
              End-to-End Implementation
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FeatureCard icon={Layers} title="MOU & Agreement" description="Formal setup and onboarding." color="bg-neon-blue" />
              <FeatureCard icon={School} title="Customized Planning & Setup" description="Complete lab installation & decoration." color="bg-neon-purple" />
              <FeatureCard icon={Users} title="Teacher Training" description="Onsite + online training for educators." color="bg-saffron" />
              <FeatureCard icon={Cpu} title="Hardware Deployment" description="Delivery, testing and configuration." color="bg-neon-teal" />
              <FeatureCard icon={Rocket} title="Competitions & Exhibitions" description="Student events, showcases and mentorship." color="bg-neon-pink" />
              <FeatureCard icon={Globe} title="Ongoing Support & Monitoring" description="Continuous LMS + monthly sessions." color="bg-indigo-500" />
            </div>
          </div>
        </section>

        {/* IMPACT GOALS */}
        <section className="py-20 bg-dark-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
              Impact <span className="text-neon-blue">Goals</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-black text-3xl font-bold">1M+</h3>
                <p className="text-black/70">Students Skilled</p>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-black text-3xl font-bold">500+</h3>
                <p className="text-black/70">Labs Established</p>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-black text-3xl font-bold">10K+</h3>
                <p className="text-black/70">Projects Built</p>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-black text-3xl font-bold">100+</h3>
                <p className="text-black/70">Startups Incubated</p>
              </div>
            </div>
          </div>
        </section>

        {/* DOWNLOAD BROCHURES */}
<section className="py-20 bg-dark-navy">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl text-black font-bold mb-10">
      View <span className="text-neon-blue">Brochures</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">

      <a
        href="https://drive.google.com/file/d/1LxbkHmuG3fjFcaEZf3M3Eye0l0wYNqJp/view?usp=sharing"
        target="_blank"
        className="glass-card p-6 rounded-xl hover-scale text-black"
      >
        <h3 className="text-xl font-semibold mb-2">Main Brochure</h3>
        <p className="text-black/70">Overview of AI Labs, Programs & Offerings</p>
      </a>

      <a
        href="https://drive.google.com/file/d/1ELhVB7itigK3juuYgD4mPpkwCPVStK_a/view?usp=sharing"
        target="_blank"
        className="glass-card p-6 rounded-xl hover-scale text-black"
      >
        <h3 className="text-xl font-semibold mb-2">Composite Skill Lab</h3>
        <p className="text-black/70">CBSE Modules, Robotics, Electronics, Space Tech</p>
      </a>

      <a
        href="https://drive.google.com/file/d/142iEQGF32jAgdetfgoZWcgXwXNapYXcY/view?usp=sharing"
        target="_blank"
        className="glass-card p-6 rounded-xl hover-scale text-black"
      >
        <h3 className="text-xl font-semibold mb-2">AI Nano & Macro Labs</h3>
        <p className="text-black/70">Lab Setup, Kits, Tools, and Costing</p>
      </a>

    </div>
  </div>
</section>


        {/* CALL TO ACTION */}
        <section className="py-20 bg-deep-purple relative overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              Let's Build the <span className="text-saffron">Future Together</span>
            </h2>
            <p className="text-lg text-black/80 mb-8">
              Partner with us to set up AI Labs or Composite Skill Labs in your school or college.
            </p>
            <Button className="bg-neon-teal hover:bg-neon-teal/80 text-black px-8 py-6 rounded-full text-lg hover-scale">
              Partner With Us
            </Button>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default AILabs;
