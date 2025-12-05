import React from "react";
import { Calendar, MapPin, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AIConferenceCard = () => {
  return (

    <section className="py-20 bg-dark-navy">
        <Navbar/>
      <div className="container mx-auto px-4">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-white">AI </span>
          <span className="text-neon-blue">Conferences</span>
        </h2>

        <Card className="glass-card border-0 hover-scale hover-glow max-w-3xl mx-auto">
          <CardContent className="p-8">

            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-2">
              International Conference on Computer Vision for Smart Sustainable Systems
            </h3>
            <p className="text-white/70 mb-6">(CV-S3 2026)</p>

            {/* Details */}
            <div className="space-y-4 text-white/80 text-lg">

              <div className="flex items-center gap-3">
                <MapPin className="text-neon-purple w-6 h-6" />
                <span>Manipal University, Dubai</span>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="text-neon-blue w-6 h-6" />
                <span>25–26 September, 2026</span>
              </div>

              <div className="flex items-center gap-3">
                <Globe className="text-saffron w-6 h-6" />
                <a 
                  href="https://icstss.vercel.app/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="underline hover:text-white"
                >
                  https://icstss.vercel.app/
                </a>
              </div>

              <div className="mt-6">
                <p className="text-white/90 font-semibold mb-2">Focus Areas:</p>
                <p className="text-white/70">
                  AI, IoT, Smart Grids, Green Energy, Blockchain, Cloud Computing, Sustainable Systems
                </p>
              </div>

            </div>
          </CardContent>
        </Card>

      </div>
      <Footer/>
    </section>
  );
};

export default AIConferenceCard;
