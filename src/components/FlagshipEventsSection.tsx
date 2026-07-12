import { Button } from "@/components/ui/button";
import { hackathons, conferences, aiChallengeEvents, olympiads } from "@/lib/data";
import { Calendar, Users, Award, ArrowRight, BookOpen, Globe, BarChart3, HeartPulse, Wallet, Cpu, Code, Mic2, Presentation, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

interface EventCardProps {
  title: string;
  date: string;
  prize: string;
  teamSize: string;
  mode: string;
  color: string;
  delay: string;
  url: string;
}

const EventCard = ({
  title,
  date,
  prize,
  teamSize,
  mode,
  color,
  delay,
  url,
}: EventCardProps) => {
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
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Button
              className={`w-full ${color} text-white hover:opacity-90 group-hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 py-6 text-base font-semibold rounded-xl shadow-lg`}
            >
              Register Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

// Filter hackathons for specific events
const hackathonEvents = hackathons.filter(h => 
  h.slug.includes("oneearth") || h.slug.includes("hacksecure") || h.slug.includes("intellitech") || h.slug.includes("hackagentaix")
);

const FlagshipEventsSection = () => {
  return (
    <section id="flagship-events" className="py-16 sm:py-20 lg:py-24 bg-deep-purple dark:bg-deep-purple relative  overflow-hidden">
      {/* Gradient background */}
      <div className="absolute -left-40 bottom-0 w-96 h-96 bg-neon-blue/20 dark:bg-neon-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute -right-40 top-0 w-96 h-96 bg-neon-purple/20 dark:bg-neon-purple/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Our </span>
            <span className="text-saffron text-transparent bg-clip-text bg-gradient-to-r from-saffron to-orange-500">
              Flagship Events 
            </span>
          </h2>
          <p className="text-foreground/70 text-base sm:text-lg max-w-2xl mx-auto">
            Explore our diverse range of technology events, hackathons, and conferences
          </p>
        </div>

        {/* Hackathons Category */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-neon-blue/20">
              <Code className="h-6 w-6 text-neon-blue" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Hackathons</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {hackathonEvents.map((hackathon, index) => (
              <EventCard
                key={hackathon.slug}
                title={hackathon.title}
                date={hackathon.date}
                prize={hackathon.prize}
                teamSize="2-4 Members"
                mode={hackathon.mode}
                color={index % 2 === 0 ? "bg-neon-blue" : "bg-neon-purple"}
                delay={`${index * 0.1}s`}
                url={hackathon.link}
              />
            ))}
          </div>
        </div>

        {/* AI & Emerging Tech Challenges Category */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-saffron/20">
              <Mic2 className="h-6 w-6 text-saffron" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">AI & Emerging Tech Challenges</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 sm:gap-8 max-w-md mx-auto">
            {aiChallengeEvents.map((challenge, index) => (
              <EventCard
                key={challenge.slug}
                title={challenge.title}
                date={challenge.date}
                prize={challenge.prize}
                teamSize="2-4 Members"
                mode={challenge.mode}
                color="bg-saffron"
                delay={`${index * 0.1}s`}
                url={challenge.link}
              />
            ))}
          </div>
        </div>

        {/* Conferences Category */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-neon-purple/20">
              <Presentation className="h-6 w-6 text-neon-purple" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Conferences</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {conferences.map((conference, index) => (
              <div
                key={conference.slug}
                className="glass-card rounded-2xl overflow-hidden hover-scale hover-glow group transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-1.5 bg-neon-purple"></div>
                <div className="p-6 sm:p-8 flex flex-col h-full">
                  <h3 className="text-foreground font-bold text-lg sm:text-xl md:text-2xl mb-4 sm:mb-5 leading-tight">{conference.title}</h3>
                  <div className="flex-1 space-y-4">
                    <p className="text-sm sm:text-base text-foreground/70 flex items-center">
                      <Calendar className="h-4 w-4 sm:h-5 sm:w-5 mr-2 flex-shrink-0" />
                      <span>{conference.date}</span>
                    </p>
                    <div className="grid grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <p className="text-xs text-foreground/60 uppercase tracking-wider mb-1.5">Focus Areas</p>
                        <p className="text-foreground font-semibold text-base sm:text-lg">{conference.focus.join(", ")}</p>
                      </div>
                      <div>
                        <p className="text-xs text-foreground/60 uppercase tracking-wider mb-1.5">Organizer</p>
                        <p className="text-foreground font-semibold text-base sm:text-lg">{conference.organizer.split(' + ')[0]}</p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6 mt-auto">
                    <a href={conference.link} target="_blank" rel="noopener noreferrer">
                      <Button
                        className="w-full bg-neon-purple text-white hover:opacity-90 group-hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 py-6 text-base font-semibold rounded-xl shadow-lg"
                      >
                        Register Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Olympiads Category */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-yellow-400/20">
              <Trophy className="h-6 w-6 text-yellow-400" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Olympiads</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 sm:gap-8 max-w-md mx-auto">
            {olympiads.map((olympiad, index) => (
              <EventCard
                key={olympiad.slug}
                title={olympiad.title}
                date={olympiad.date}
                prize={olympiad.prize}
                teamSize="Individual"
                mode={olympiad.mode}
                color="bg-yellow-400"
                delay={`${index * 0.1}s`}
                url={olympiad.link}
              />
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center mt-16">
          <div className="glass-card p-8 rounded-2xl border border-white/10 backdrop-blur-md">
            <h3 className="text-2xl font-semibold text-foreground mb-3">
              More Upcoming Hackathons & Tech Summits
            </h3>
            
            <p className="text-muted-foreground mb-8">
              We're constantly launching new challenges across cutting-edge domains
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              <div className="flex items-center gap-3 p-4 rounded-lg hover:bg-white/5 transition">
                <BookOpen className="h-5 w-5 text-saffron" />
                <span className="text-sm text-foreground/90">Agentic AI</span>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-lg hover:bg-white/5 transition">
                <BarChart3 className="h-5 w-5 text-neon-blue" />
                <span className="text-sm text-foreground/90">Data Science</span>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-lg hover:bg-white/5 transition">
                <Globe className="h-5 w-5 text-neon-purple" />
                <span className="text-sm text-foreground/90">Smart Cities</span>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-lg hover:bg-white/5 transition">
                <HeartPulse className="h-5 w-5 text-red-400" />
                <span className="text-sm text-foreground/90">HealthTech</span>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-lg hover:bg-white/5 transition">
                <Wallet className="h-5 w-5 text-green-400" />
                <span className="text-sm text-foreground/90">FinTech</span>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-lg hover:bg-white/5 transition">
                <Cpu className="h-5 w-5 text-yellow-400" />
                <span className="text-sm text-foreground/90">Web3 & Blockchain</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlagshipEventsSection;