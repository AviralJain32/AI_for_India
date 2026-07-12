import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { aiChallengeEvents, hackathons } from '@/lib/data';

/* ─── Scroll reveal helper ──────────────────────────────────── */
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

const Reveal: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
  children, delay = 0, className = ''
}) => {
  const { ref, visible } = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(28px)',
      transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
};

/* ─── Stat pill ─────────────────────────────────────────────── */
const StatPill: React.FC<{ label: string; value: string; accent?: boolean; delay?: number }> = ({
  label, value, accent = false, delay = 0
}) => (
  <Reveal delay={delay}>
    <div style={{
      background: accent ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' : '#ffffff',
      border: accent ? 'none' : '1.5px solid #e5e7eb',
      borderRadius: '16px',
      padding: '20px 16px',
      textAlign: 'center',
      boxShadow: accent
        ? '0 8px 24px rgba(245,158,11,0.30), 0 2px 8px rgba(245,158,11,0.18)'
        : '0 2px 12px rgba(0,0,0,0.06)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <p style={{
        fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase',
        color: accent ? 'rgba(255,255,255,0.75)' : '#9ca3af',
        marginBottom: '6px', fontFamily: 'monospace',
      }}>{label}</p>
      <p style={{
        fontSize: accent ? '24px' : '17px', fontWeight: 800,
        color: accent ? '#ffffff' : '#111827', lineHeight: 1,
      }}>{value}</p>
    </div>
  </Reveal>
);

/* ─── Detail card ────────────────────────────────────────────── */
const DetailCard: React.FC<{ icon: string; title: string; value: string; delay?: number }> = ({
  icon, title, value, delay = 0
}) => (
  <Reveal delay={delay}>
    <div
      style={{
        background: '#ffffff',
        border: '1.5px solid #f3f4f6',
        borderRadius: '20px',
        padding: '28px 22px',
        display: 'flex', flexDirection: 'column', gap: '10px',
        boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
        transition: 'border-color 0.25s, box-shadow 0.25s, transform 0.25s',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = '#f59e0b';
        el.style.boxShadow = '0 8px 32px rgba(245,158,11,0.18)';
        el.style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = '#f3f4f6';
        el.style.boxShadow = '0 2px 16px rgba(0,0,0,0.05)';
        el.style.transform = '';
      }}
    >
      <span style={{ fontSize: '26px' }}>{icon}</span>
      <p style={{ fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#f59e0b', fontFamily: 'monospace', fontWeight: 600 }}>{title}</p>
      <p style={{ fontSize: '17px', fontWeight: 700, color: '#111827' }}>{value}</p>
    </div>
  </Reveal>
);

/* ─── Image carousel ─────────────────────────────────────────── */
const ImageCarousel: React.FC<{ images: string[] }> = ({ images }) => {
  const [active, setActive] = useState(0);
  const prev = () => setActive(i => (i - 1 + images.length) % images.length);
  const next = () => setActive(i => (i + 1) % images.length);

  useEffect(() => {
    const t = setInterval(next, 4200);
    return () => clearInterval(t);
  }, []);

   if (images.length === 0) {
    return (
      <div
        style={{
          width: "100%",
          maxWidth: "820px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            width: "100%",
            aspectRatio: "16/9",
            borderRadius: "20px",
            border: "2px dashed #d1d5db",
            background: "#f9fafb",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            color: "#6b7280",
            boxShadow: "0 24px 60px rgba(0,0,0,0.08)",
          }}
        >
          <div style={{ fontSize: "56px", marginBottom: "12px" }}>🖼️</div>
          <div
            style={{
              fontSize: "28px",
              fontWeight: 700,
              color: "#374151",
            }}
          >
            Coming Soon
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '820px', margin: '0 auto' }}>
      <div style={{
        width: '100%', aspectRatio: '16/9', borderRadius: '20px', overflow: 'hidden',
        border: '1.5px solid #e5e7eb',
        boxShadow: '0 24px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)',
        position: 'relative',
      }}>
        {images.map((src, i) => (
          <img key={i} src={src} alt={`Screenshot ${i + 1}`} style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
            opacity: i === active ? 1 : 0,
            transition: 'opacity 0.6s ease',
          }} />
        ))}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '35%',
          background: 'linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 100%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '14px', right: '18px',
          fontFamily: 'monospace', fontSize: '11px', color: 'rgba(255,255,255,0.9)',
          letterSpacing: '0.1em', fontWeight: 600,
        }}>
          {String(active + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
        </div>
      </div>

      {([{ fn: prev, side: 'left', char: '←' }, { fn: next, side: 'right', char: '→' }] as const).map(({ fn, side, char }) => (
        <button key={side} onClick={fn} style={{
          position: 'absolute', top: '50%', [side]: '-18px',
          transform: 'translateY(-50%)',
          width: '42px', height: '42px', borderRadius: '50%',
          background: '#ffffff', border: '1.5px solid #e5e7eb',
          color: '#374151', fontSize: '16px', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          transition: 'background 0.2s, border-color 0.2s, color 0.2s',
          zIndex: 10,
        }}
          onMouseEnter={e => {
            const b = e.currentTarget as HTMLButtonElement;
            b.style.background = '#f59e0b'; b.style.borderColor = '#f59e0b'; b.style.color = '#ffffff';
          }}
          onMouseLeave={e => {
            const b = e.currentTarget as HTMLButtonElement;
            b.style.background = '#ffffff'; b.style.borderColor = '#e5e7eb'; b.style.color = '#374151';
          }}
        >{char}</button>
      ))}

      <div style={{ display: 'flex', justifyContent: 'center', gap: '7px', marginTop: '20px' }}>
        {images.map((_, i) => (
          <button key={i} onClick={() => setActive(i)} style={{
            width: i === active ? '22px' : '8px', height: '8px', borderRadius: '4px',
            background: i === active ? '#f59e0b' : '#d1d5db',
            border: 'none', cursor: 'pointer', padding: 0,
            transition: 'width 0.3s, background 0.3s',
          }} />
        ))}
      </div>
    </div>
  );
};

/* ─── Main Page ─────────────────────────────────────────────── */
const HackathonPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const hackathon = [...hackathons, ...aiChallengeEvents].find(h => h.slug === slug);

  if (!hackathon) {
    return (
      <div style={{ minHeight: '100vh', background: '#f9fafb' }}>
        <Navbar />
        <div style={{ textAlign: 'center', padding: '120px 16px' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#111827' }}>Hackathon Not Found</h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f9fafb',
      color: '#111827',
      fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
      overflowX: 'hidden',
    }}>
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section style={{ position: 'relative', padding: '110px 16px 90px', overflow: 'hidden', background: '#ffffff' }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: `
            radial-gradient(ellipse 70% 55% at 50% -5%, rgba(34,197,94,0.10) 0%, transparent 60%),
            radial-gradient(ellipse 45% 40% at 5% 90%, rgba(245,158,11,0.08) 0%, transparent 55%),
            radial-gradient(ellipse 40% 35% at 95% 80%, rgba(59,130,246,0.06) 0%, transparent 55%)
          `,
        }} />
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.35,
          backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }} />

        <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(34,197,94,0.08)', border: '1.5px solid rgba(34,197,94,0.25)',
            borderRadius: '100px', padding: '6px 18px', marginBottom: '28px',
            fontSize: '12px', color: '#16a34a', letterSpacing: '0.05em', fontWeight: 600,
            opacity: 0, animation: 'fadeUp 0.55s ease 0.1s forwards',
          }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22c55e', flexShrink: 0 }} />
            {hackathon.organizer}
          </div>

          <h1 style={{
            fontSize: 'clamp(2.2rem, 5.5vw, 4.6rem)',
            fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.03em',
            color: '#0f172a', marginBottom: '20px',
            opacity: 0, animation: 'fadeUp 0.65s ease 0.2s forwards',
          }}>
            {hackathon.title}
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2.2vw, 1.25rem)',
            color: '#6b7280', maxWidth: '580px', margin: '0 auto 48px',
            lineHeight: 1.65, fontWeight: 400,
            opacity: 0, animation: 'fadeUp 0.65s ease 0.32s forwards',
          }}>
            {hackathon.tagline}
          </p>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px',
            maxWidth: '700px', margin: '0 auto 44px',
            opacity: 0, animation: 'fadeUp 0.65s ease 0.44s forwards',
          }}>
            <StatPill label="Date" value={hackathon.date} />
            <StatPill label="Mode" value={hackathon.mode.split(' ')[0]} />
            <StatPill label="Duration" value={hackathon.duration} />
            <StatPill label="Prize Pool" value={hackathon.prize} accent />
          </div>

          <div style={{
            display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap',
            opacity: 0, animation: 'fadeUp 0.65s ease 0.56s forwards',
          }}>
            <a href={hackathon.link} target="_blank" rel="noopener noreferrer" style={{
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
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'transparent', color: '#374151', fontWeight: 600,
              padding: '14px 28px', borderRadius: '12px', fontSize: '15px',
              border: '1.5px solid #d1d5db', cursor: 'pointer',
              transition: 'background 0.2s, border-color 0.2s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#f3f4f6'; (e.currentTarget as HTMLButtonElement).style.borderColor = '#9ca3af'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; (e.currentTarget as HTMLButtonElement).style.borderColor = '#d1d5db'; }}
            >
              View Details
            </button>
          </div>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────────── */}
      <section style={{ padding: '80px 16px', background: '#f9fafb' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center' }}>
            <Reveal>
              <div>
                <p style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#f59e0b', fontFamily: 'monospace', fontWeight: 700, marginBottom: '14px' }}>About the Event</p>
                <h2 style={{ fontSize: 'clamp(1.7rem, 3.2vw, 2.6rem)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.025em', color: '#0f172a', marginBottom: '18px' }}>
                  One Planet.<br />One Purpose.
                </h2>
                <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#6b7280' }}>
                  {hackathon.description}
                </p>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['AI-Driven Solutions', 'Environmental Challenges', 'Climate Innovation', 'Open to All'].map((tag, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: '14px',
                    padding: '15px 20px', borderRadius: '12px',
                    background: '#ffffff', border: '1.5px solid #f3f4f6',
                    boxShadow: '0 1px 6px rgba(0,0,0,0.04)',
                  }}>
                    <span style={{
                      width: '28px', height: '28px', borderRadius: '8px',
                      background: 'rgba(34,197,94,0.12)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, fontSize: '13px', color: '#16a34a',
                    }}>✦</span>
                    <span style={{ fontWeight: 600, color: '#1f2937', fontSize: '14px' }}>{tag}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SCREENSHOTS ───────────────────────────────────────── */}
      <section style={{ padding: '80px 16px', background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 65% 50% at 50% 50%, rgba(245,158,11,0.05) 0%, transparent 65%)',
        }} />
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '44px' }}>
              <p style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#f59e0b', fontFamily: 'monospace', fontWeight: 700, marginBottom: '10px' }}>Gallery</p>
              <h2 style={{ fontSize: 'clamp(1.7rem, 3.2vw, 2.5rem)', fontWeight: 900, letterSpacing: '-0.025em', color: '#0f172a' }}>Event Snapshots</h2>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <ImageCarousel images={hackathon.images} />
          </Reveal>
        </div>
      </section>

      {/* ── KEY DETAILS ───────────────────────────────────────── */}
      <section style={{ padding: '80px 16px', background: '#f9fafb' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '44px' }}>
              <p style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#f59e0b', fontFamily: 'monospace', fontWeight: 700, marginBottom: '10px' }}>Details</p>
              <h2 style={{ fontSize: 'clamp(1.7rem, 3.2vw, 2.5rem)', fontWeight: 900, letterSpacing: '-0.025em', color: '#0f172a' }}>Everything You Need</h2>
            </div>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '14px' }}>
            <DetailCard icon="🏆" title="Prize Pool" value={hackathon.prize} delay={0} />
            <DetailCard icon="⏱" title="Duration" value={hackathon.duration} delay={70} />
            <DetailCard icon="🌐" title="Mode" value={hackathon.mode} delay={140} />
            <DetailCard icon="📅" title="Date" value={hackathon.date} delay={210} />
            <DetailCard icon="🎓" title="Eligibility" value="Open to All" delay={280} />
          </div>
        </div>
      </section>

      {/* ── COLLABORATORS ─────────────────────────────────────── */}
      {hackathon.collaborators && hackathon.collaborators.length > 0 && (
        <section style={{ padding: '80px 16px', background: '#ffffff' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <Reveal>
              <div style={{ textAlign: 'center', marginBottom: '36px' }}>
                <p style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#f59e0b', fontFamily: 'monospace', fontWeight: 700, marginBottom: '10px' }}>Partners</p>
                <h2 style={{ fontSize: 'clamp(1.7rem, 3.2vw, 2.5rem)', fontWeight: 900, letterSpacing: '-0.025em', color: '#0f172a' }}>Collaborating Institutions</h2>
              </div>
            </Reveal>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
              {hackathon.collaborators.map((collab, i) => (
                <Reveal key={i} delay={i * 70}>
                  <div style={{
                    padding: '11px 22px', borderRadius: '100px',
                    background: '#f9fafb', border: '1.5px solid #e5e7eb',
                    fontSize: '13px', fontWeight: 600, color: '#374151',
                    transition: 'border-color 0.2s, background 0.2s, color 0.2s',
                    cursor: 'default',
                  }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.borderColor = '#f59e0b'; el.style.background = '#fffbeb'; el.style.color = '#b45309';
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.borderColor = '#e5e7eb'; el.style.background = '#f9fafb'; el.style.color = '#374151';
                    }}
                  >
                    {collab}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FINAL CTA ─────────────────────────────────────────── */}
      <section style={{ padding: '100px 16px', background: '#f9fafb', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(34,197,94,0.07) 0%, transparent 65%)',
        }} />
        <Reveal>
          <div style={{
            maxWidth: '620px', margin: '0 auto', textAlign: 'center',
            padding: '56px 40px', borderRadius: '28px',
            background: '#ffffff', border: '1.5px solid #e5e7eb',
            boxShadow: '0 12px 48px rgba(0,0,0,0.07), 0 2px 12px rgba(0,0,0,0.04)',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
              background: 'linear-gradient(90deg, #22c55e 0%, #f59e0b 50%, #3b82f6 100%)',
            }} />
            <span style={{ fontSize: '42px', display: 'block', marginBottom: '18px' }}>🌍</span>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 900, letterSpacing: '-0.025em', color: '#0f172a', marginBottom: '10px' }}>
              Ready to Build for the Planet?
            </h2>
            <p style={{ color: '#6b7280', marginBottom: '32px', lineHeight: 1.65, fontSize: '15px' }}>
              Join innovators, developers & sustainability enthusiasts from around the world.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={hackathon.link} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                color: '#ffffff', fontWeight: 700,
                padding: '14px 36px', borderRadius: '12px', fontSize: '15px',
                textDecoration: 'none',
                boxShadow: '0 4px 18px rgba(245,158,11,0.32)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = ''; }}
              >
                Register Now ↗
              </a>
              <a href={hackathon.link} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'transparent', color: '#374151', fontWeight: 600,
                padding: '14px 28px', borderRadius: '12px', fontSize: '15px',
                border: '1.5px solid #d1d5db', textDecoration: 'none',
                transition: 'background 0.2s, border-color 0.2s',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#f3f4f6'; (e.currentTarget as HTMLAnchorElement).style.borderColor = '#9ca3af'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.borderColor = '#d1d5db'; }}
              >
                Visit Website
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
        @media (max-width: 640px) {
          section > div > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="repeat(4, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>

      <Footer />
    </div>
  );
};

export default HackathonPage;