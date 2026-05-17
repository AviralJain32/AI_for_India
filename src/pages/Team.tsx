// import React, { useState } from 'react';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';

// const teamMembers = [
//   {
//     name: 'Aayushi Samantsinghar',
//     role: 'Event Strategist',
//     photo: "/team/aayushi.jpeg",
//     color: '#FF6B35',
//     bio: 'Crafting unforgettable event experiences that align with vision and impact.',
//   },
//   {
//     name: 'Debasis Maharana',
//     role: 'Event Coordinator',
//     photo: "/team/debasis.png",
//     color: '#7C3AED',
//     bio: 'Orchestrating every detail to ensure seamless execution from start to finish.',
//   },
//   {
//     name: 'Santosh Kumar Senapati',
//     role: 'Technical Manager',
//     photo: "/team/santosh.png",
//     color: '#0EA5E9',
//     bio: 'Building the technical backbone that powers every AI initiative we run.',
//   },
//   {
//     name: 'Bibhu Prasad Lenka',
//     role: 'Event Technologist',
//     photo: "/team/bibhu.png",
//     color: '#10B981',
//     bio: 'Bridging technology and live events to create immersive digital experiences.',
//   },
//   {
//     name: 'Abhijit Mohanty',
//     role: 'Content Manager',
//     photo: "/team/abhijit.png",
//     color: '#F59E0B',
//     bio: 'Telling the story of AI for India through powerful, resonant narratives.',
//   },
//   {
//     name: 'Tanishq',
//     role: 'Administrative Executive',
//     photo: "/team/tanishq.png",
//     color: '#EC4899',
//     bio: 'Keeping the engine running smoothly behind every project and initiative.',
//   },
//   {
//     name: 'Tanvi',
//     role: 'Creative Communication Strategist',
//     photo: "/team/tanvi.png",
//     color: '#6366F1',
//     bio: 'Shaping how we speak, connect, and resonate with audiences across India.',
//   },
// ];

// function getInitials(name: string) {
//   return name
//     .split(' ')
//     .map((n) => n[0])
//     .slice(0, 2)
//     .join('')
//     .toUpperCase();
// }

// function hexToRgb(hex: string) {
//   const r = parseInt(hex.slice(1, 3), 16);
//   const g = parseInt(hex.slice(3, 5), 16);
//   const b = parseInt(hex.slice(5, 7), 16);
//   return { r, g, b };
// }

// interface TeamMember {
//   name: string;
//   role: string;
//   photo: string | null;
//   color: string;
//   bio: string;
// }

// interface MemberCardProps {
//   member: TeamMember;
//   index: number;
//   onPhotoChange: (name: string, url: string) => void;
// }

// const MemberCard: React.FC<MemberCardProps> = ({ member, index, onPhotoChange }) => {
//   const rgb = hexToRgb(member.color);
//   const initials = getInitials(member.name);
//   const isEven = index % 2 === 0;

//   const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     const url = URL.createObjectURL(file);
//     onPhotoChange(member.name, url);
//   };

//   return (
//     <div
//       className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
//       style={{
//         background: `linear-gradient(135deg, #0d1117 0%, #161b22 100%)`,
//         border: `1px solid rgba(${rgb.r},${rgb.g},${rgb.b},0.25)`,
//         animationDelay: `${index * 80}ms`,
//       }}
//     >
//       {/* Colored top bar */}
//       <div
//         className="h-1 w-full"
//         style={{ background: `linear-gradient(90deg, ${member.color}, transparent)` }}
//       />

//       {/* Glow effect on hover */}
//       <div
//         className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
//         style={{
//           background: `radial-gradient(ellipse at top left, rgba(${rgb.r},${rgb.g},${rgb.b},0.08) 0%, transparent 60%)`,
//         }}
//       />

//       <div className="p-7 relative z-10">
//         {/* Photo area */}
//         <div className="relative mb-5 w-fit">
//           <label className="cursor-pointer block group/photo">
//             <div
//               className="w-20 h-20 rounded-2xl overflow-hidden flex items-center justify-center text-white font-bold text-2xl relative"
//               style={{
//                 background: member.photo
//                   ? 'transparent'
//                   : `linear-gradient(135deg, rgba(${rgb.r},${rgb.g},${rgb.b},0.3), rgba(${rgb.r},${rgb.g},${rgb.b},0.15))`,
//                 border: `2px solid rgba(${rgb.r},${rgb.g},${rgb.b},0.5)`,
//               }}
//             >
//               {member.photo ? (
//                 <img
//                   src={member.photo}
//                   alt={member.name}
//                   className="w-full h-full object-cover"
//                 />
//               ) : (
//                 <span style={{ color: member.color }}>{initials}</span>
//               )}

//               {/* Upload overlay */}
//               <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/photo:opacity-100 transition-opacity duration-200 flex items-center justify-center">
//                 <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                 </svg>
//               </div>
//             </div>
//             <input type="file" accept="image/*" className="hidden" onChange={handleFile} />
//           </label>

//           {/* Upload hint badge */}
//           {!member.photo && (
//             <span
//               className="absolute -bottom-2 -right-2 text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider"
//               style={{
//                 background: `rgba(${rgb.r},${rgb.g},${rgb.b},0.2)`,
//                 color: member.color,
//                 border: `1px solid rgba(${rgb.r},${rgb.g},${rgb.b},0.4)`,
//               }}
//             >
//               + Photo
//             </span>
//           )}
//         </div>

//         {/* Role badge */}
//         <div
//           className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-3"
//           style={{
//             background: `rgba(${rgb.r},${rgb.g},${rgb.b},0.15)`,
//             color: member.color,
//           }}
//         >
//           {member.role}
//         </div>

//         {/* Name */}
//         <h3 className="text-white font-bold text-xl leading-tight mb-2">
//           {member.name}
//         </h3>

//         {/* Bio */}
//         <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
//           {member.bio}
//         </p>

//         {/* Bottom accent line */}
//         <div
//           className="mt-5 h-px w-0 group-hover:w-full transition-all duration-700"
//           style={{ background: `linear-gradient(90deg, ${member.color}, transparent)` }}
//         />
//       </div>
//     </div>
//   );
// };

// const Team: React.FC = () => {
//   const [members, setMembers] = useState<TeamMember[]>(teamMembers);

//   const handlePhotoChange = (name: string, url: string) => {
//     setMembers((prev) =>
//       prev.map((m) => (m.name === name ? { ...m, photo: url } : m))
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-gray-100 text-gray-900">
//   <Navbar />

//   <main className="pt-24">
//     {/* Hero Section */}
//     <section className="relative py-24 overflow-hidden">
//       {/* Grid */}
//       <div
//         className="absolute inset-0 opacity-100 pointer-events-none"
//         style={{
//           backgroundImage: `
//             linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
//           `,
//           backgroundSize: '60px 60px',
//         }}
//       />

//       {/* Gradient Blobs */}
//       <div
//         className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
//         style={{
//           background: 'radial-gradient(circle, rgba(255,107,53,0.35), transparent)',
//         }}
//       />

//       <div
//         className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
//         style={{
//           background: 'radial-gradient(circle, rgba(124,58,237,0.25), transparent)',
//         }}
//       />

//       <div className="container mx-auto px-4 relative z-10 text-center">
//         {/* Badge */}
//         <div
//           className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-widest"
//           style={{
//             background: 'rgba(255,107,53,0.08)',
//             color: '#FF6B35',
//             border: '1px solid rgba(255,107,53,0.18)',
//             backdropFilter: 'blur(10px)',
//           }}
//         >
//           <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
//           Meet The Team
//         </div>

//         {/* Heading */}
//         <h1 className="text-5xl md:text-7xl font-black mb-6 leading-none tracking-tight text-gray-900">
//           The people powering{' '}
//           <span
//             className="relative inline-block"
//             style={{
//               background: 'linear-gradient(90deg, #FF6B35, #F59E0B)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//             }}
//           >
//             AI for India
//           </span>
//         </h1>

//         {/* Description */}
//         <p className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-600">
//           Meet the minds behind strategy, technology, content and event execution —
//           making our AI initiatives memorable and impactful across the nation.
//         </p>
//       </div>
//     </section>

//     {/* Team Grid */}
//     <section className="py-12 pb-24">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {members.map((member, i) => {
//             const rgb = hexToRgb(member.color);

//             return (
//               <div
//                 key={member.name}
//                 className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
//                 style={{
//                   background:
//                     'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)',
//                   border: `1px solid rgba(${rgb.r},${rgb.g},${rgb.b},0.15)`,
//                   boxShadow: '0 10px 35px rgba(0,0,0,0.06)',
//                   backdropFilter: 'blur(16px)',
//                 }}
//               >
//                 {/* Top Accent */}
//                 <div
//                   className="h-1 w-full"
//                   style={{
//                     background: `linear-gradient(90deg, ${member.color}, transparent)`,
//                   }}
//                 />

//                 {/* Hover Glow */}
//                 <div
//                   className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
//                   style={{
//                     background: `radial-gradient(ellipse at top left, rgba(${rgb.r},${rgb.g},${rgb.b},0.08) 0%, transparent 60%)`,
//                   }}
//                 />

//                 <div className="p-7 relative z-10">
//                   {/* Avatar */}
//                   <div className="relative mb-5 w-fit">
//                     <div
//                       className="w-20 h-20 rounded-2xl overflow-hidden flex items-center justify-center text-white font-bold text-2xl relative"
//                       style={{
//                         background: member.photo
//                           ? 'transparent'
//                           : `linear-gradient(
//                               135deg,
//                               rgba(${rgb.r},${rgb.g},${rgb.b},0.18),
//                               rgba(${rgb.r},${rgb.g},${rgb.b},0.08)
//                             )`,
//                         border: `2px solid rgba(${rgb.r},${rgb.g},${rgb.b},0.35)`,
//                       }}
//                     >
//                       {member.photo ? (
//                         <img
//                           src={member.photo}
//                           alt={member.name}
//                           className="w-full h-full object-cover"
//                         />
//                       ) : (
//                         <span style={{ color: member.color }}>
//                           {getInitials(member.name)}
//                         </span>
//                       )}
//                     </div>

//                     {/* {!member.photo && (
//                       <span
//                         className="absolute -bottom-2 -right-2 text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider"
//                         style={{
//                           background: `rgba(${rgb.r},${rgb.g},${rgb.b},0.12)`,
//                           color: member.color,
//                           border: `1px solid rgba(${rgb.r},${rgb.g},${rgb.b},0.25)`,
//                         }}
//                       >
//                         + Photo
//                       </span>
//                     )} */}
//                   </div>

//                   {/* Role */}
//                   <div
//                     className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-3"
//                     style={{
//                       background: `rgba(${rgb.r},${rgb.g},${rgb.b},0.12)`,
//                       color: member.color,
//                     }}
//                   >
//                     {member.role}
//                   </div>

//                   {/* Name */}
//                   <h3 className="text-gray-900 font-bold text-xl leading-tight mb-2">
//                     {member.name}
//                   </h3>

//                   {/* Bio */}
//                   <p className="text-sm leading-relaxed text-gray-600">
//                     {member.bio}
//                   </p>

//                   {/* Bottom Accent */}
//                   <div
//                     className="mt-5 h-px w-0 group-hover:w-full transition-all duration-700"
//                     style={{
//                       background: `linear-gradient(90deg, ${member.color}, transparent)`,
//                     }}
//                   />
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   </main>

//   <Footer />
// </div>
//   );
// };

// export default Team;

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const teamMembers = [
  {
    name: 'Aayushi Samantsinghar',
    role: 'Event Strategist',
    photo: "/team/aayushi.png",
    color: '#FF6B35',
    bio: 'Crafting unforgettable event experiences that align with vision and impact.',
  },
  {
    name: 'Debasis Maharana',
    role: 'Event Coordinator',
    photo: "/team/debasis.png",
    color: '#7C3AED',
    bio: 'Orchestrating every detail to ensure seamless execution from start to finish.',
  },
  {
    name: 'Santosh Kumar Senapati',
    role: 'Technical Manager',
    photo: "/team/santosh.png",
    color: '#0EA5E9',
    bio: 'Building the technical backbone that powers every AI initiative we run.',
  },
  {
    name: 'Bibhu Prasad Lenka',
    role: 'Event Technologist',
    photo: "/team/bibhu.png",
    color: '#10B981',
    bio: 'Bridging technology and live events to create immersive digital experiences.',
  },
  {
    name: 'Abhijit Mohanty',
    role: 'Content Manager',
    photo: "/team/abhijit.png",
    color: '#F59E0B',
    bio: 'Telling the story of AI for India through powerful, resonant narratives.',
  },
  {
    name: 'Tanishq',
    role: 'Administrative Executive',
    photo: "/team/tanishq.jpeg",
    color: '#EC4899',
    bio: 'Keeping the engine running smoothly behind every project and initiative.',
  },
  {
    name: 'Tanvi',
    role: 'Creative Communication Strategist (Intern)',
    photo: "/team/tanvi.jpeg",
    color: '#6366F1',
    bio: 'Shaping how we speak, connect, and resonate with audiences across India.',
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