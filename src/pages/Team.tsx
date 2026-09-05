import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const teamMembers = [
//   {
//   name: 'Dr. Prerna Mann',
//   role: 'Director',
//   photo: "/team/prerna-mann.jpeg",
//   color: '#6C63FF',
//   bio: 'Leading with vision and excellence to drive meaningful impact and organizational growth.',
// },
  {
    name: 'Aayushi Samantsinghar',
    role: 'Head of Operations',
    photo: "/team/aayushi.png",
    color: '#FF6B35',
    bio: 'Crafting unforgettable event experiences that align with vision and impact.',
  },
  {
    name: 'Debasis Maharana',
    role: 'Operations Manager',
    photo: "/team/debasis.png",
    color: '#7C3AED',
    bio: 'Orchestrating every detail to ensure seamless execution from start to finish.',
  },
  {
    name: 'Tanishq',
    role: 'Administrative Executive',
    photo: "/team/tanishq.jpeg",
    color: '#EC4899',
    bio: 'Keeping the engine running smoothly behind every project and initiative.',
  },
  {
    name: 'Bibhu Prasad Lenka',
    role: 'Event Technology Intern',
    photo: "/team/bibhu.png",
    color: '#10B981',
    bio: 'Bridging technology and live events to create immersive digital experiences.',
  },
  {
    name: 'Tanvi',
    role: 'Growth & Strategy Intern',
    photo: "/team/tanvi.jpeg",
    color: '#6366F1',
    bio: 'Shaping how we speak, connect, and resonate with audiences across India.',
  },
  {
    name: 'Santosh Kumar Senapati',
    role: 'Marketing & Communication Intern',
    photo: "/team/santosh.png",
    color: '#0EA5E9',
    bio: 'Building the technical backbone that powers every AI initiative we run.',
  },
  {
    name: 'Abhijit Mohanty',
    role: 'Marketing & Communication Intern',
    photo: "/team/abhijit.png",
    color: '#F59E0B',
    bio: 'Telling the story of AI for India through powerful, resonant narratives.',
  },
  {
    name: 'Ayusman',
    role: 'Digital Content Intern',
    photo: "/team/ayusman.png",
    color: '#14B8A6',
    bio: 'Crafting engaging digital content that brings the AI for India story to life.',
  },
  {
    name: 'Ayesha',
    role: 'Web & Creative Design Intern',
    photo: "/team/ayesha.png",
    color: '#F43F5E',
    bio: 'Designing thoughtful, creative digital experiences for the AI for India platform.',
  },
];

function getInitials(name: string) {
  return name.split(' ').map((n) => n[0]).slice(0, 2).join('').toUpperCase();
}

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

interface TeamMember {
  name: string;
  role: string;
  photo: string | null;
  color: string;
  bio: string;
}

const Team: React.FC = () => {
  const [members] = useState<TeamMember[]>(teamMembers);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-gray-100 text-gray-900">
      <Navbar />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div
            className="absolute inset-0 opacity-100 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
          <div
            className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(255,107,53,0.35), transparent)' }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.25), transparent)' }}
          />

          <div className="container mx-auto px-4 relative z-10 text-center">
            <div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-widest"
              style={{
                background: 'rgba(255,107,53,0.08)',
                color: '#FF6B35',
                border: '1px solid rgba(255,107,53,0.18)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              Meet The Team
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-none tracking-tight text-gray-900">
              The people powering{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #FF6B35, #F59E0B)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                AI for India
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-600">
              Meet the minds behind strategy, technology, content and event execution —
              making our AI initiatives memorable and impactful across the nation.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-12 pb-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {members.map((member, i) => {
                const rgb = hexToRgb(member.color);

                return (
                  <div
                    key={member.name}
                    className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)',
                      border: `1px solid rgba(${rgb.r},${rgb.g},${rgb.b},0.15)`,
                      boxShadow: '0 10px 35px rgba(0,0,0,0.06)',
                    }}
                  >
                    {/* Full-bleed photo at top */}
                    <div className="relative w-full h-56 overflow-hidden">
                      {member.photo ? (
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div
                          className="w-full h-full flex items-center justify-center text-4xl font-black"
                          style={{
                            background: `linear-gradient(135deg, rgba(${rgb.r},${rgb.g},${rgb.b},0.15), rgba(${rgb.r},${rgb.g},${rgb.b},0.05))`,
                            color: member.color,
                          }}
                        >
                          {getInitials(member.name)}
                        </div>
                      )}

                      {/* Gradient overlay at bottom of photo for smooth fade into card */}
                      <div
                        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                        style={{
                          background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.95))',
                        }}
                      />

                      {/* Color accent bar at very top */}
                      <div
                        className="absolute top-0 left-0 right-0 h-1"
                        style={{ background: `linear-gradient(90deg, ${member.color}, transparent)` }}
                      />
                    </div>

                    {/* Card content */}
                    <div className="px-6 pb-6 pt-2 relative z-10">
                      {/* Hover glow */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                          background: `radial-gradient(ellipse at top left, rgba(${rgb.r},${rgb.g},${rgb.b},0.06) 0%, transparent 70%)`,
                        }}
                      />

                      {/* Role badge */}
                      <div
                        className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-3"
                        style={{
                          background: `rgba(${rgb.r},${rgb.g},${rgb.b},0.12)`,
                          color: member.color,
                        }}
                      >
                        {member.role}
                      </div>

                      {/* Name */}
                      <h3 className="text-gray-900 font-bold text-xl leading-tight mb-2">
                        {member.name}
                      </h3>

                      {/* Bio */}
                      <p className="text-sm leading-relaxed text-gray-500">
                        {member.bio}
                      </p>

                      {/* Bottom accent line on hover */}
                      <div
                        className="mt-4 h-px w-0 group-hover:w-full transition-all duration-700"
                        style={{ background: `linear-gradient(90deg, ${member.color}, transparent)` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Team;