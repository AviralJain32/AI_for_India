
// import React from 'react';
// import { Button } from "@/components/ui/button";
// import { Calendar, Users, Award } from 'lucide-react';

// interface HackathonCardProps {
//   title: string;
//   date: string;
//   prize: string;
//   teamSize: string;
//   mode: string;
//   color: string;
//   delay: string;
// }

// const HackathonCard = ({ title, date, prize, teamSize, mode, color, delay }: HackathonCardProps) => {
//   return (
//     <div 
//       className="glass-card rounded-xl overflow-hidden hover-scale hover-glow"
//       style={{ animationDelay: delay }}
//     >
//       <div className={`h-2 ${color}`}></div>
//       <div className="p-6">
//         <h3 className="text-black font-bold text-lg mb-4">{title}</h3>
//         <p className="text-sm text-black/70 flex items-center mb-2">
//           <Calendar className="h-4 w-4 mr-2" />
//           {date}
//         </p>
//         <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
//           <div>
//             <p className="text-xs text-black/70">Prize Pool</p>
//             <p className="text-black font-medium">{prize}</p>
//           </div>
//           <div>
//             <p className="text-xs text-black/70">Team Size</p>
//             <p className="text-black font-medium">{teamSize}</p>
//           </div>
//           <div>
//             <p className="text-xs text-black/70">Mode</p>
//             <p className="text-black font-medium">{mode}</p>
//           </div>
//         </div>
//         <Button className={`w-full ${color} hover:opacity-90`}>
//           Register Now
//         </Button>
//       </div>
//     </div>
//   );
// };

// const HackathonsSection = () => {
//   return (
//     <section id="hackathons" className="py-20 bg-deep-purple relative overflow-hidden">
//       {/* Gradient background */}
//       <div className="absolute -left-40 bottom-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl"></div>
      
//       <div className="container mx-auto px-4 relative z-10">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//           <span className="text-black">Upcoming </span>
//           <span className="text-saffron">Hackathons</span>
//         </h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <HackathonCard 
//             title="AI Healthcare Challenge"
//             date="May 10-12, 2025"
//             prize="₹10,00,000"
//             teamSize="2-4 Members"
//             mode="Online"
//             color="bg-neon-purple"
//             delay="0s"
//           />
//           <HackathonCard 
//             title="Smart Cities Hackathon"
//             date="June 15-18, 2025"
//             prize="₹15,00,000"
//             teamSize="3-5 Members"
//             mode="Hybrid"
//             color="bg-neon-blue"
//             delay="0.1s"
//           />
//           <HackathonCard 
//             title="EdTech Innovation"
//             date="July 5-7, 2025"
//             prize="₹5,00,000"
//             teamSize="2-3 Members"
//             mode="Online"
//             color="bg-saffron"
//             delay="0.2s"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HackathonsSection;

import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
interface HackathonCardProps {
  title: string;
  date: string;
  prize: string;
  teamSize: string;
  mode: string;
  color: string;
  delay: string;
  url: string; // Added URL prop
}

const HackathonCard = ({
  title,
  date,
  prize,
  teamSize,
  mode,
  color,
  delay,
  url,
}: HackathonCardProps) => {
  return (
    <div
      className={`glass-card rounded-2xl overflow-hidden hover-scale hover-glow group transition-all duration-300 hover:shadow-xl ${
        color.includes("purple") ? "hover:shadow-purple-500/30" : "hover:shadow-blue-500/30"
      }`}
      style={{ animationDelay: delay }}
    >
      <div className={`h-1.5 ${color}`}></div>
      <div className="p-6 sm:p-8 flex flex-col h-full">
        <h3 className="text-foreground font-bold text-lg sm:text-xl md:text-2xl mb-4 sm:mb-5 leading-tight">{title}</h3>
        <div className="flex-1 space-y-4">
          <p className="text-sm sm:text-base text-foreground/70 flex items-center">
            <Calendar className="h-4 w-4 sm:h-5 sm:w-5 mr-2 flex-shrink-0" />
            <span>{date}</span>
          </p>
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            <div>
              <p className="text-xs text-foreground/60 uppercase tracking-wider mb-1.5">Prize Pool</p>
              <p className="text-foreground font-semibold text-base sm:text-lg">{prize}</p>
            </div>
            <div>
              <p className="text-xs text-foreground/60 uppercase tracking-wider mb-1.5">Team Size</p>
              <p className="text-foreground font-semibold text-base sm:text-lg">{teamSize}</p>
            </div>
            <div>
              <p className="text-xs text-foreground/60 uppercase tracking-wider mb-1.5">Mode</p>
              <p className="text-foreground font-semibold text-base sm:text-lg">{mode}</p>
            </div>
            <div className="flex items-start">
              <Award className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-foreground/70 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-foreground/60 uppercase tracking-wider mb-1.5">Status</p>
                <p className="text-foreground font-semibold text-base sm:text-lg">Open to All</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-6 mt-auto">
          <Link to={url}>
            <a target="_blank" rel="noopener noreferrer">
              <Button
                className={`w-full ${color} text-white hover:opacity-90 group-hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 py-6 text-base font-semibold rounded-xl shadow-lg`}
              >
                Register Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

const HackathonsSection = () => {
  return (
    <section id="hackathons" className="py-16 sm:py-20 lg:py-24 bg-deep-purple dark:bg-deep-purple relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute -left-40 bottom-0 w-96 h-96 bg-neon-blue/20 dark:bg-neon-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute -right-40 top-0 w-96 h-96 bg-neon-purple/20 dark:bg-neon-purple/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Recent </span>
            <span className="text-saffron text-transparent bg-clip-text bg-gradient-to-r from-saffron to-orange-500">
              Hackathons
            </span>
          </h2>
          <p className="text-foreground/70 text-base sm:text-lg max-w-2xl mx-auto">
            Join our exciting hackathons and showcase your innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          <HackathonCard
            title="OneEarth International Hackathon 2025"
            date="October 24-25, 2025"
            prize="£2500"
            teamSize="2-4 Members"
            mode="New Delhi, India"
            color="bg-neon-blue"
            delay="0s"
            url="https://oneearth-international-hackathon.aiforindia.co.in/"
          />
          <HackathonCard
            title="HackSecureX International Hackathon 2026"
            date="January 16-17, 2026"
            prize="$2000"
            teamSize="2-4 Members"
            mode="Online"
            color="bg-neon-purple"
            delay="0.1s"
            url="https://www.hacksecurex.com/"
          />
        </div>
      </div>
    </section>
  );
};

export default HackathonsSection;

