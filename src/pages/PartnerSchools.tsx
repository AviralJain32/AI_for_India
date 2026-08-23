import React from 'react';
import { ArrowUpRight, BrainCircuit, Check, Lightbulb, ShieldCheck, Sparkles, Target, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const focusAreas = [
  { title: 'AI Literacy', icon: BrainCircuit, color: '#2563eb' },
  { title: 'Prompt Engineering', icon: Sparkles, color: '#db2777' },
  { title: 'Computational Thinking', icon: Target, color: '#059669' },
  { title: 'Critical Thinking', icon: Lightbulb, color: '#d97706' },
  { title: 'Responsible AI', icon: ShieldCheck, color: '#7c3aed' },
  { title: 'Future-Ready Skills', icon: Users, color: '#0891b2' },
];

const partnerSchools = [
  {
    name: 'Happy English School, Sharad Vihar',
    shortName: 'Happy English School',
    logo: '/NAILO-partners/HES_School.svg',
    website: 'https://www.hes.edu.in/',
    websiteLabel: 'Welcome to HES',
  },
  {
    name: 'Bharat National Public School',
    shortName: 'Bharat National Public School',
    logo: '/NAILO-partners/BNPC_school.png',
    website: 'https://bnpsramvihar.edu.in/',
    websiteLabel: 'Visit BNPS website',
  },
];

const PartnerSchoolDirectory = () => {
  return (
    <section className="directory-section" aria-label="NAILO partner schools">
      <div className="section-inner">
        <div className="directory-heading">
          <div>
            <p className="section-kicker">Our Network</p>
            <h2>Meet our <em>partner schools.</em></h2>
          </div>
          <p>Schools building a more AI-literate and future-ready India with NAILO.</p>
        </div>
        <div className="school-grid">
          {partnerSchools.map((school) => (
            <article className="school-card" key={school.name}>
              <div className="school-card-logo-wrap">
                <img src={school.logo} alt={`${school.name} logo`} className="school-card-logo" />
              </div>
              <div className="school-card-content">
                <p className="school-card-kicker">Official NAILO Partner School</p>
                <h3>{school.name}</h3>
                <a className="school-card-link" href={school.website} target="_blank" rel="noopener noreferrer">
                  Visit school website <ArrowUpRight size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const PartnerSchools = () => (
  <div className="partner-page">
    <Navbar />

    <main>
      <section className="partner-hero">
        <div className="hero-pattern" />
        <div className="hero-content">
          <div className="eyebrow"><span className="eyebrow-dot" /> NAILO Partner School Network</div>
          <h1>Schools shaping the<br /><span>future together.</span></h1>
          <p className="hero-copy">
            Meet the schools joining NAILO to help students become AI-literate,
            future-ready, and innovation-driven learners.
          </p>
          <div className="family-tag"><Sparkles size={17} /> Growing the NAILO family</div>
        </div>
        <div className="hero-mark" aria-hidden="true">AI<span>+</span></div>
      </section>

      <PartnerSchoolDirectory />

      <section className="focus-section">
        <div className="section-inner">
          <div className="focus-heading">
            <div>
              <p className="section-kicker">Partnership Focus</p>
              <h2>Skills for the<br /><em>world ahead.</em></h2>
            </div>
            <p>Building confident learners, responsible innovators, and leaders of tomorrow through practical, human-centred AI education.</p>
          </div>
          <div className="focus-grid">
            {focusAreas.map(({ title, icon: Icon, color }, index) => (
              <article className="focus-card" key={title} style={{ '--card-accent': color } as React.CSSProperties}>
                <span className="card-number">0{index + 1}</span>
                <div className="focus-icon"><Icon size={23} strokeWidth={1.8} /></div>
                <h3>{title}</h3>
                <Check className="check-icon" size={17} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-section">
        <div className="closing-inner">
          <p className="section-kicker">A shared commitment</p>
          <h2>Learning today.<br /><span>Leading tomorrow.</span></h2>
          <p>Happy English School, Sharad Vihar and NAILO are empowering every student to imagine, question, and build what comes next.</p>
          <div className="school-badge"><span>NAILO</span> Official Partner School <ArrowUpRight size={18} /></div>
        </div>
      </section>
    </main>

    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');
      .partner-page { min-height: 100vh; background: #f5f7f4; color: #15251f; font-family: 'DM Sans', sans-serif; overflow: hidden; }
      .partner-hero { min-height: 650px; padding: 150px 8vw 90px; position: relative; display: flex; align-items: center; background: #eaf1ec; overflow: hidden; }
      .hero-pattern { position: absolute; inset: 0; opacity: .45; background-image: linear-gradient(30deg, transparent 48%, rgba(21,37,31,.06) 49%, transparent 50%), linear-gradient(150deg, transparent 48%, rgba(21,37,31,.06) 49%, transparent 50%); background-size: 90px 90px; }
      .hero-content { position: relative; max-width: 820px; z-index: 1; }
      .eyebrow, .family-tag, .session-label, .school-badge { display: inline-flex; align-items: center; gap: 9px; font-size: 11px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }
      .eyebrow { color: #18745c; margin-bottom: 28px; }
      .eyebrow-dot { width: 8px; height: 8px; border-radius: 50%; background: #f08a4b; box-shadow: 0 0 0 5px rgba(240,138,75,.16); }
      .welcome-line { margin: 0 0 13px; color: #587067; font-size: 18px; }
      h1, h2 { font-family: 'Space Grotesk', sans-serif; letter-spacing: -.055em; }
      h1 { margin: 0; color: #102d25; font-size: clamp(3.2rem, 7vw, 7rem); line-height: .98; font-weight: 700; }
      h1 span, h2 em, .closing-section h2 span { color: #e8753d; font-style: normal; }
      .hero-copy { max-width: 530px; margin: 31px 0 26px; color: #4f675e; font-size: 18px; line-height: 1.65; }
      .family-tag { padding: 12px 17px; border: 1px solid rgba(24,116,92,.25); color: #18745c; border-radius: 4px; letter-spacing: .07em; }
      .hero-mark { position: absolute; right: 9vw; bottom: 11%; color: rgba(24,116,92,.13); font: 700 clamp(7rem, 20vw, 20rem)/.8 'Space Grotesk', sans-serif; letter-spacing: -.12em; transform: rotate(-8deg); }
      .hero-mark span { color: rgba(232,117,61,.2); }
      .directory-section { padding: 110px 8vw; background: #f5f7f4; }
      .directory-heading { display: flex; align-items: end; justify-content: space-between; gap: 40px; margin-bottom: 45px; }
      .directory-heading h2 { font-size: clamp(2.5rem, 5vw, 4.5rem); }
      .directory-heading > p { max-width: 340px; margin: 0 0 5px; color: #63766c; line-height: 1.7; }
      .school-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
      .school-card { display: grid; grid-template-columns: 190px 1fr; min-height: 250px; background: #fff; border: 1px solid #dce5df; transition: transform .25s, box-shadow .25s; }
      .school-card:hover { transform: translateY(-5px); box-shadow: 0 15px 30px rgba(21,37,31,.1); }
      .school-card-logo-wrap { display: grid; place-items: center; padding: 25px; background: #eaf1ec; }
      .school-card-logo { width: 100%; height: 145px; object-fit: contain; }
      .school-card-content { display: flex; flex-direction: column; align-items: flex-start; padding: 30px 25px; }
      .school-card-kicker { margin: 0 0 15px; color: #18745c; font-size: 10px; font-weight: 700; letter-spacing: .1em; line-height: 1.4; text-transform: uppercase; }
      .school-card h3 { margin: 0; color: #20342c; font: 600 22px/1.2 'Space Grotesk', sans-serif; }
      .school-card-link { display: inline-flex; align-items: center; gap: 7px; margin-top: auto; padding-top: 24px; color: #d96532; font-size: 12px; font-weight: 700; text-decoration: none; }
      .school-card-link:hover { color: #18745c; }
      .section-inner { max-width: 1160px; margin: 0 auto; }
      .school-intro { padding: 112px 8vw; background: #fff; }
      .intro-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 9vw; align-items: center; }
      .section-kicker { margin: 0 0 16px; color: #18745c; font-size: 11px; font-weight: 700; letter-spacing: .15em; text-transform: uppercase; }
      h2 { margin: 0; color: #15251f; font-size: clamp(2.5rem, 5vw, 5rem); line-height: 1.03; font-weight: 600; }
      .intro-copy { border-left: 2px solid #e8753d; padding-left: 28px; color: #53665d; font-size: 16px; line-height: 1.8; }
      .session-label { margin-bottom: 22px; color: #789187; letter-spacing: .08em; }
      .session-label strong { color: #15251f; }
      .focus-section { padding: 110px 8vw; background: #f5f7f4; }
      .focus-heading { display: flex; justify-content: space-between; align-items: end; gap: 40px; margin-bottom: 48px; }
      .focus-heading > p { max-width: 340px; margin: 0 0 5px; color: #63766c; line-height: 1.7; }
      .focus-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; }
      .focus-card { min-height: 190px; padding: 25px; position: relative; border: 1px solid #dce5df; background: #fff; transition: transform .25s, box-shadow .25s; }
      .focus-card:hover { transform: translateY(-5px); box-shadow: 0 15px 30px rgba(21,37,31,.1); }
      .card-number { color: var(--card-accent); font: 600 11px 'Space Grotesk', sans-serif; }
      .focus-icon { width: 44px; height: 44px; margin: 28px 0 20px; display: grid; place-items: center; color: var(--card-accent); background: color-mix(in srgb, var(--card-accent) 10%, white); }
      .focus-card h3 { margin: 0; color: #20342c; font: 600 19px 'Space Grotesk', sans-serif; }
      .check-icon { position: absolute; right: 22px; bottom: 24px; color: var(--card-accent); }
      .closing-section { padding: 120px 8vw; background: #152f27; color: #eff7f0; }
      .closing-inner { max-width: 700px; margin: 0 auto; text-align: center; }
      .closing-section .section-kicker { color: #f3a16f; }
      .closing-section h2 { color: #eff7f0; }
      .closing-section p:not(.section-kicker) { max-width: 500px; margin: 25px auto 32px; color: #b8cec0; line-height: 1.7; }
      .school-badge { color: #d5e6da; letter-spacing: .06em; }
      .school-badge span { padding: 7px 10px; background: #f08a4b; color: #152f27; font-size: 10px; }
      @media (max-width: 700px) { .partner-hero { min-height: 600px; padding: 130px 24px 70px; align-items: flex-start; } .hero-mark { right: -30px; bottom: 9%; } .hero-copy { font-size: 16px; } .directory-section, .school-intro, .focus-section, .closing-section { padding: 76px 24px; } .directory-heading { display: block; } .directory-heading > p { margin-top: 24px; } .school-grid { grid-template-columns: 1fr; } .school-card { grid-template-columns: 115px 1fr; min-height: 210px; } .school-card-logo-wrap { padding: 14px; } .school-card-logo { height: 115px; } .school-card-content { padding: 24px 18px; } .school-card h3 { font-size: 18px; } .school-intro, .focus-section, .closing-section { padding: 76px 24px; } .intro-grid, .focus-grid { grid-template-columns: 1fr; gap: 35px; } .focus-heading { display: block; } .focus-heading > p { margin-top: 24px; } .focus-card { min-height: 170px; } }
    `}</style>
    <Footer />
  </div>
);

export default PartnerSchools;
