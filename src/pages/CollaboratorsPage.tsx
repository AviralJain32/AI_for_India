import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { collaborators } from '@/lib/data';

const CollaboratorsPage = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f9fafb',
      fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
      color: '#111827',
      overflowX: 'hidden',
    }}>
      <Navbar />

      {/* ── HEADER ────────────────────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '72px 16px 56px', position: 'relative', overflow: 'hidden' }}>
        {/* Dot grid */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.35,
          backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }} />
        {/* Blobs */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: `
            radial-gradient(ellipse 60% 50% at 50% -10%, rgba(168,85,247,0.07) 0%, transparent 60%),
            radial-gradient(ellipse 40% 35% at 95% 85%, rgba(245,158,11,0.07) 0%, transparent 55%),
            radial-gradient(ellipse 35% 30% at 5% 80%, rgba(34,197,94,0.06) 0%, transparent 55%)
          `,
        }} />

        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(168,85,247,0.07)', border: '1.5px solid rgba(168,85,247,0.22)',
            borderRadius: '100px', padding: '5px 16px', marginBottom: '20px',
            fontSize: '11px', color: '#7e22ce', letterSpacing: '0.08em', fontWeight: 700,
            fontFamily: 'monospace', textTransform: 'uppercase',
          }}>
            ✦ Partners & Institutions
          </div>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.8rem)',
            fontWeight: 900, lineHeight: 1.08, letterSpacing: '-0.03em',
            color: '#0f172a', marginBottom: '14px',
          }}>
            Our Collaborators
          </h1>
          <p style={{ fontSize: '16px', color: '#6b7280', lineHeight: 1.65, maxWidth: '460px', margin: '0 auto' }}>
            Proud to work alongside world-class universities, organisations, and institutions driving meaningful change.
          </p>
        </div>
      </section>

      {/* ── GRID ──────────────────────────────────────────────── */}
      <section style={{ padding: '60px 16px 90px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Count badge */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{
              display: 'inline-block',
              padding: '6px 18px', borderRadius: '100px',
              background: '#ffffff', border: '1.5px solid #e5e7eb',
              fontSize: '13px', fontWeight: 600, color: '#6b7280',
              boxShadow: '0 1px 6px rgba(0,0,0,0.06)',
            }}>
              {collaborators.length} Collaborators
            </span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
            gap: '18px',
          }}>
            {collaborators.map((collaborator, index) => (
              <div
                key={index}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: '#ffffff',
                  border: `1.5px solid ${hovered === index ? '#a855f7' : '#f3f4f6'}`,
                  borderRadius: '20px',
                  padding: '32px 20px 24px',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px',
                  textAlign: 'center',
                  cursor: 'default',
                  transition: 'border-color 0.25s, box-shadow 0.25s, transform 0.25s',
                  boxShadow: hovered === index
                    ? '0 12px 36px rgba(168,85,247,0.12), 0 2px 10px rgba(0,0,0,0.05)'
                    : '0 2px 12px rgba(0,0,0,0.05)',
                  transform: hovered === index ? 'translateY(-4px)' : '',
                }}
              >
                {/* Logo area */}
                <div style={{
                  width: '100%', height: '72px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  padding: '0 12px',
                }}>
                  <img
                    src={collaborator.logo}
                    alt={collaborator.name}
                    style={{
                      maxHeight: '72px', maxWidth: '100%', objectFit: 'contain',
                      transition: 'transform 0.3s',
                      transform: hovered === index ? 'scale(1.06)' : 'scale(1)',
                      filter: hovered === index ? 'none' : 'grayscale(15%)',
                    }}
                  />
                </div>

                {/* Divider */}
                <div style={{
                  width: '100%', height: '1px',
                  background: hovered === index
                    ? 'linear-gradient(90deg, transparent, rgba(168,85,247,0.25), transparent)'
                    : 'linear-gradient(90deg, transparent, #f3f4f6, transparent)',
                  transition: 'background 0.3s',
                }} />

                {/* Name */}
                {/* <h3 style={{
                  fontSize: '13px', fontWeight: 700, color: hovered === index ? '#0f172a' : '#374151',
                  lineHeight: 1.4, margin: 0, transition: 'color 0.2s',
                }}>
                  {collaborator.name}
                </h3> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
      `}</style>

      <Footer />
    </div>
  );
};

export default CollaboratorsPage;