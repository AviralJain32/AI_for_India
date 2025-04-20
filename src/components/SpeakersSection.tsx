
import React from 'react';
import StaticImage from './StaticImage';

interface SpeakerProps {
  name: string;
  title: string;
  organization: string;
  imageUrl: string;
  delay: string;
}

const Speaker = ({ name, title, organization, imageUrl, delay }: SpeakerProps) => {
  return (
    <div className="glass-card rounded-xl overflow-hidden hover-scale hover-glow">
      <div className="p-4 flex flex-col items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-saffron mb-3">
          <StaticImage
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-white font-medium text-lg">{name}</h3>
        <p className="text-white/70 text-sm">{title}</p>
        <p className="text-saffron text-xs mt-1">{organization}</p>
      </div>
    </div>
  );
};

const SpeakersSection = () => {
  const speakers = [
    {
      name: "Dr. Rajesh Kumar",
      title: "AI Research Director",
      organization: "IIT Delhi",
      imageUrl: "/images/person.png",
      delay: "0s"
    },
    {
      name: "Dr. Priya Sharma",
      title: "Head of AI",
      organization: "Microsoft India",
      imageUrl: "/images/person.png",
      delay: "0.1s"
    },
    {
      name: "Amit Patel",
      title: "CEO",
      organization: "AI Innovations",
      imageUrl: "/images/person.png",
      delay: "0.2s"
    },
    {
      name: "Dr. Meena Reddy",
      title: "AI Ethics Researcher",
      organization: "Google",
      imageUrl: "/images/person.png",
      delay: "0.3s"
    }
  ];

  return (
    <section className="py-20 bg-deep-purple">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-white">Featured </span>
          <span className="text-saffron">Speakers</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakers.map((speaker) => (
            <Speaker
              key={speaker.name}
              {...speaker}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
