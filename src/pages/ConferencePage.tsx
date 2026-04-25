import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { conferences } from '@/lib/data';

/* ─── Scroll reveal ─────────────────────────────────────────── */
const useInView = (threshold = 0.15) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
};

const Reveal: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const { ref, visible } = useInView();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(28px)',
      transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
};

/* ─── Stat pill ─────────────────────────────────────────────── */
const StatPill: React.FC<{ label: string; value: string; accent?: boolean }> = ({ label, value, accent = false }) => (
  <div style={{
    background: accent ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' : '#ffffff',
    border: accent ? 'none' : '1.5px solid #e5e7eb',
    borderRadius: '16px', padding: '22px 20px', textAlign: 'center',
    boxShadow: accent ? '0 8px 24px rgba(245,158,11,0.28)' : '0 2px 12px rgba(0,0,0,0.06)',
  }}>
    <p style={{ fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: accent ? 'rgba(255,255,255,0.75)' : '#9ca3af', marginBottom: '6px', fontFamily: 'monospace' }}>{label}</p>
    <p style={{ fontSize: accent ? '22px' : '17px', fontWeight: 800, color: accent ? '#ffffff' : '#0f172a', lineHeight: 1.2 }}>{value}</p>
  </div>
);

/* ─── Main Page ─────────────────────────────────────────────── */
const ConferencePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const conference = conferences.find(c => c.slug === slug);

  if (!conference) {
    return (
      <div style={{ minHeight: '100vh', background: '#f9fafb' }}>
        <Navbar />
        <div style={{ textAlign: 'center', padding: '120px 16px' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#0f172a' }}>Conference Not Found</h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f9fafb',
      fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
      color: '#111827',
      overflowX: 'hidden',
    }}>
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '100px 16px 80px', position: 'relative', overflow: 'hidden' }}>
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
            radial-gradient(ellipse 70% 55% at 50% -5%, rgba(59,130,246,0.08) 0%, transparent 60%),
            radial-gradient(ellipse 40% 35% at 5% 90%, rgba(245,158,11,0.07) 0%, transparent 55%),
            radial-gradient(ellipse 35% 30% at 95% 75%, rgba(34,197,94,0.06) 0%, transparent 55%)
          `,
        }} />

        <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          {/* Organizer badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(59,130,246,0.07)', border: '1.5px solid rgba(59,130,246,0.2)',
            borderRadius: '100px', padding: '5px 18px', marginBottom: '24px',
            fontSize: '12px', color: '#2563eb', letterSpacing: '0.05em', fontWeight: 600,
            opacity: 0, animation: 'fadeUp 0.55s ease 0.1s forwards',
          }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#3b82f6', flexShrink: 0 }} />
            {conference.organizer}
          </div>

          {/* Short name */}
          <div style={{
            display: 'inline-block',
            fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
            fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase',
            color: '#f59e0b', marginBottom: '16px', fontFamily: 'monospace',
            opacity: 0, animation: 'fadeUp 0.55s ease 0.18s forwards',
          }}>
            {conference.short}
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: 'clamp(2rem, 5.5vw, 4.4rem)',
            fontWeight: 900, lineHeight: 1.06, letterSpacing: '-0.03em',
            color: '#0f172a', marginBottom: '44px', display: 'block',
            opacity: 0, animation: 'fadeUp 0.65s ease 0.26s forwards',
          }}>
            {conference.title}
          </h1>

          {/* Stat pills */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px',
            maxWidth: '480px', margin: '0 auto 44px',
            opacity: 0, animation: 'fadeUp 0.65s ease 0.38s forwards',
          }}>
            <StatPill label="Date" value={conference.date} accent />
            <StatPill label="Organizer" value={conference.organizer} />
          </div>

          {/* CTA */}
          <div style={{
            display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap',
            opacity: 0, animation: 'fadeUp 0.65s ease 0.5s forwards',
          }}>
            <a href={conference.link} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
              color: '#ffffff', fontWeight: 700,
              padding: '14px 32px', borderRadius: '12px', fontSize: '15px',
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(245,158,11,0.35)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 28px rgba(245,158,11,0.45)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = ''; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 20px rgba(245,158,11,0.35)'; }}
            >
              Register Now ↗
            </a>
            <button style={{
              display: 'inline-flex', alignItems: 'center',
              background: 'transparent', color: '#374151', fontWeight: 600,
              padding: '14px 28px', borderRadius: '12px', fontSize: '15px',
              border: '1.5px solid #d1d5db', cursor: 'pointer',
              transition: 'background 0.2s, border-color 0.2s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#f3f4f6'; (e.currentTarget as HTMLButtonElement).style.borderColor = '#9ca3af'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; (e.currentTarget as HTMLButtonElement).style.borderColor = '#d1d5db'; }}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* ── FOCUS AREAS ───────────────────────────────────────── */}
      <section style={{ padding: '80px 16px', background: '#f9fafb' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <p style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#f59e0b', fontFamily: 'monospace', fontWeight: 700, marginBottom: '10px' }}>Topics</p>
              <h2 style={{ fontSize: 'clamp(1.7rem, 3.2vw, 2.5rem)', fontWeight: 900, letterSpacing: '-0.025em', color: '#0f172a' }}>Focus Areas</h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
              {conference.focus.map((area, i) => {
                const colors = [
                  { bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.25)', color: '#b45309' },
                  { bg: 'rgba(34,197,94,0.08)', border: 'rgba(34,197,94,0.25)', color: '#15803d' },
                  { bg: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.25)', color: '#1d4ed8' },
                  { bg: 'rgba(168,85,247,0.08)', border: 'rgba(168,85,247,0.25)', color: '#7e22ce' },
                  { bg: 'rgba(236,72,153,0.08)', border: 'rgba(236,72,153,0.25)', color: '#be185d' },
                ];
                const c = colors[i % colors.length];
                return (
                  <span key={i} style={{
                    padding: '10px 20px', borderRadius: '100px',
                    background: c.bg, border: `1.5px solid ${c.border}`,
                    fontSize: '14px', fontWeight: 600, color: c.color,
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    cursor: 'default', display: 'inline-block',
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLSpanElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLSpanElement).style.boxShadow = `0 4px 14px ${c.border}`; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLSpanElement).style.transform = ''; (e.currentTarget as HTMLSpanElement).style.boxShadow = ''; }}
                  >
                    {area}
                  </span>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────────── */}
      <section style={{ padding: '80px 16px', background: '#ffffff' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <p style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#f59e0b', fontFamily: 'monospace', fontWeight: 700, marginBottom: '10px' }}>Overview</p>
              <h2 style={{ fontSize: 'clamp(1.7rem, 3.2vw, 2.5rem)', fontWeight: 900, letterSpacing: '-0.025em', color: '#0f172a' }}>About the Conference</h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div style={{
              background: '#f9fafb', border: '1.5px solid #f3f4f6',
              borderRadius: '24px', padding: '40px 40px',
              boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
              position: 'relative', overflow: 'hidden',
            }}>
              {/* Accent bar */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
                background: 'linear-gradient(90deg, #3b82f6 0%, #f59e0b 50%, #22c55e 100%)',
              }} />
              <p style={{ fontSize: '16px', lineHeight: 1.85, color: '#4b5563', margin: 0 }}>
                Join us for an exciting conference focused on cutting-edge technologies and innovative solutions in{' '}
                <strong style={{ color: '#0f172a', fontWeight: 700 }}>
                  {conference.focus.join(', ').toLowerCase()}
                </strong>.
                This event brings together leading experts, researchers, and practitioners to share knowledge and collaborate on future advancements.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section style={{ padding: '90px 16px', background: '#f9fafb', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 65% 55% at 50% 100%, rgba(59,130,246,0.06) 0%, transparent 65%)',
        }} />
        <Reveal>
          <div style={{
            maxWidth: '580px', margin: '0 auto', textAlign: 'center',
            padding: '52px 36px', borderRadius: '28px',
            background: '#ffffff', border: '1.5px solid #e5e7eb',
            boxShadow: '0 12px 48px rgba(0,0,0,0.07)',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
              background: 'linear-gradient(90deg, #3b82f6 0%, #f59e0b 50%, #22c55e 100%)',
            }} />
            <span style={{ fontSize: '40px', display: 'block', marginBottom: '16px' }}>🎤</span>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.1rem)', fontWeight: 900, letterSpacing: '-0.025em', color: '#0f172a', marginBottom: '10px' }}>
              Don't Miss This Event
            </h2>
            <p style={{ color: '#6b7280', marginBottom: '30px', lineHeight: 1.65, fontSize: '15px' }}>
              Connect with experts, discover breakthroughs, and shape the future at {conference.short || conference.title}.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={conference.link} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                color: '#ffffff', fontWeight: 700,
                padding: '13px 32px', borderRadius: '12px', fontSize: '15px',
                textDecoration: 'none',
                boxShadow: '0 4px 18px rgba(245,158,11,0.32)',
                transition: 'transform 0.2s',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = ''; }}
              >
                Register Now ↗
              </a>
              <a href={conference.link} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center',
                background: 'transparent', color: '#374151', fontWeight: 600,
                padding: '13px 24px', borderRadius: '12px', fontSize: '15px',
                border: '1.5px solid #d1d5db', textDecoration: 'none',
                transition: 'background 0.2s, border-color 0.2s',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#f3f4f6'; (e.currentTarget as HTMLAnchorElement).style.borderColor = '#9ca3af'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.borderColor = '#d1d5db'; }}
              >
                View Schedule
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 540px) {
          div[style*="repeat(2, 1fr)"] { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <Footer />
    </div>
  );
};

export default ConferencePage;
