import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { experts } from '@/lib/data';

const ExpertsPage = () => {
  const [filter, setFilter] = useState<string>('All');
  const [hovered, setHovered] = useState<number | null>(null);

  const categories = ['All', ...Array.from(new Set(experts.map(e => e.category)))];
  const filteredExperts = filter === 'All' ? experts : experts.filter(e => e.category === filter);

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
            radial-gradient(ellipse 60% 50% at 50% -10%, rgba(34,197,94,0.09) 0%, transparent 60%),
            radial-gradient(ellipse 40% 35% at 95% 80%, rgba(245,158,11,0.07) 0%, transparent 55%)
          `,
        }} />

        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(245,158,11,0.08)', border: '1.5px solid rgba(245,158,11,0.25)',
            borderRadius: '100px', padding: '5px 16px', marginBottom: '20px',
            fontSize: '11px', color: '#b45309', letterSpacing: '0.08em', fontWeight: 700,
            fontFamily: 'monospace', textTransform: 'uppercase',
          }}>
            ✦ Meet the Experts
          </div>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.8rem)',
            fontWeight: 900, lineHeight: 1.08, letterSpacing: '-0.03em',
            color: '#0f172a', marginBottom: '14px',
          }}>
            Our Industry Experts
          </h1>
          <p style={{ fontSize: '16px', color: '#6b7280', lineHeight: 1.65, maxWidth: '480px', margin: '0 auto' }}>
            Learn from practitioners and leaders shaping the future across technology, sustainability, and innovation.
          </p>
        </div>
      </section>

      {/* ── FILTER + GRID ─────────────────────────────────────── */}
      <section style={{ padding: '56px 16px 80px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* Filter pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', marginBottom: '48px' }}>
            {categories.map((category) => {
              const active = filter === category;
              return (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  style={{
                    padding: '8px 20px', borderRadius: '100px', fontSize: '13px', fontWeight: 600,
                    cursor: 'pointer', border: 'none', transition: 'all 0.2s',
                    background: active
                      ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
                      : '#ffffff',
                    color: active ? '#ffffff' : '#374151',
                    boxShadow: active
                      ? '0 4px 16px rgba(245,158,11,0.35)'
                      : '0 1px 6px rgba(0,0,0,0.08), inset 0 0 0 1.5px #e5e7eb',
                    transform: active ? 'translateY(-1px)' : '',
                  }}
                  onMouseEnter={e => {
                    if (!active) {
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 14px rgba(0,0,0,0.1), inset 0 0 0 1.5px #f59e0b';
                      (e.currentTarget as HTMLButtonElement).style.color = '#b45309';
                    }
                  }}
                  onMouseLeave={e => {
                    if (!active) {
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 1px 6px rgba(0,0,0,0.08), inset 0 0 0 1.5px #e5e7eb';
                      (e.currentTarget as HTMLButtonElement).style.color = '#374151';
                    }
                  }}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Expert grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '20px',
          }}>
            {filteredExperts.map((expert, index) => (
              <div
                key={index}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: '#ffffff',
                  border: `1.5px solid ${hovered === index ? '#f59e0b' : '#f3f4f6'}`,
                  borderRadius: '20px',
                  padding: '32px 20px 24px',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px',
                  textAlign: 'center',
                  cursor: 'default',
                  transition: 'border-color 0.25s, box-shadow 0.25s, transform 0.25s',
                  boxShadow: hovered === index
                    ? '0 12px 36px rgba(245,158,11,0.14), 0 2px 10px rgba(0,0,0,0.06)'
                    : '0 2px 12px rgba(0,0,0,0.05)',
                  transform: hovered === index ? 'translateY(-4px)' : '',
                }}
              >
                {/* Avatar */}
                <div style={{
                  width: '80px', height: '80px', borderRadius: '16px', overflow: 'hidden',
                  border: `2px solid ${hovered === index ? '#f59e0b' : '#f3f4f6'}`,
                  transition: 'border-color 0.25s',
                  flexShrink: 0,
                  boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
                }}>
                  <img
                    src={expert.logo}
                    alt={expert.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>

                {/* Name */}
                <h3 style={{
                  fontSize: '15px', fontWeight: 700, color: '#0f172a', lineHeight: 1.3,
                  margin: 0,
                }}>
                  {expert.name}
                </h3>

                {/* Category badge */}
                <span style={{
                  display: 'inline-block',
                  padding: '4px 12px', borderRadius: '100px',
                  fontSize: '11px', fontWeight: 600, letterSpacing: '0.04em',
                  background: hovered === index ? 'rgba(245,158,11,0.1)' : 'rgba(0,0,0,0.04)',
                  color: hovered === index ? '#b45309' : '#6b7280',
                  border: `1px solid ${hovered === index ? 'rgba(245,158,11,0.25)' : 'transparent'}`,
                  transition: 'all 0.25s',
                }}>
                  {expert.category}
                </span>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredExperts.length === 0 && (
            <div style={{ textAlign: 'center', padding: '64px 16px', color: '#9ca3af' }}>
              <p style={{ fontSize: '18px', fontWeight: 600 }}>No experts found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
      `}</style>

      <Footer />
    </div>
  );
};

export default ExpertsPage;