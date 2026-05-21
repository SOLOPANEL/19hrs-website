export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#0a0a0a',
      }}
    >
      {/* Diagonal Gold Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(135deg, rgba(255,208,0,0.12) 0%, transparent 50%, rgba(255,208,0,0.05) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Background Grid Pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,208,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,208,0,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      {/* Giant Background Text */}
      <div
        style={{
          position: 'absolute',
          bottom: '-2rem',
          right: '-1rem',
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(8rem, 22vw, 22rem)',
          color: 'rgba(255,208,0,0.04)',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
          letterSpacing: '-0.02em',
        }}
      >
        19HRS
      </div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '0 1.5rem',
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >


        {/* Main Headline */}
        <h1
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(3.5rem, 10vw, 9rem)',
            lineHeight: 0.92,
            color: '#fff',
            letterSpacing: '0.02em',
            marginBottom: '1.2rem',
          }}
        >
          NO DAYS OFF.{' '}
          <span style={{ color: '#FFD000' }}>NO EXCUSES.</span>
        </h1>

        {/* Subheading */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
            color: '#a0a0a0',
            marginBottom: '2.5rem',
            letterSpacing: '0.04em',
            fontWeight: 400,
          }}
        >
          19 HOURS FITNESS — Where the grind never stops.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            id="hero-trial-btn"
            className="btn-gold"
            onClick={() => scrollTo('#contact')}
            style={{ fontSize: '1rem', padding: '0.9rem 2.4rem', fontWeight: 700 }}
          >
            Start Free Trial
          </button>
          <button
            id="hero-plans-btn"
            className="btn-outline"
            onClick={() => scrollTo('#plans')}
            style={{ fontSize: '1rem', padding: '0.9rem 2.4rem', fontWeight: 700 }}
          >
            View Plans
          </button>
        </div>

        {/* Stats Strip */}
        <div
          style={{
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '4rem',
            padding: '1.5rem 2rem',
            borderTop: '1px solid rgba(255,208,0,0.2)',
          }}
        >
          {[
            { val: '2000+', label: 'Active Members' },
            { val: '50+', label: 'Expert Trainers' },
            { val: '5+ Yrs', label: 'Of Excellence' },
          ].map((s) => (
            <div key={s.val} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.2rem', color: '#FFD000', lineHeight: 1 }}>{s.val}</div>
              <div style={{ color: '#777', fontSize: '0.8rem', letterSpacing: '0.1em', marginTop: '0.25rem' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>



      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
