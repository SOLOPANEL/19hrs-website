const stats = [
  { value: '5+', label: 'Years of Excellence' },
  { value: '2000+', label: 'Active Members' },
  { value: '50+', label: 'Certified Trainers' },
];

export default function About() {
  return (
    <section
      id="about"
      className="fade-section"
      style={{
        padding: 'clamp(4rem, 8vw, 7rem) 1.5rem',
        background: '#0a0a0a',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
        }}
      >
        {/* Left: Stats */}
        <div>
          <p style={{ color: '#FFD000', fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', letterSpacing: '0.18em', fontWeight: 600, marginBottom: '1rem', textTransform: 'uppercase' }}>
            Who We Are
          </p>
          <h2 className="section-heading" style={{ marginBottom: '2.5rem' }}>
            BUILT FOR THE <span style={{ color: '#FFD000' }}>RELENTLESS</span>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {stats.map((s) => (
              <div
                key={s.value}
                className="gold-glow-hover"
                style={{
                  border: '1px solid rgba(255,208,0,0.3)',
                  borderRadius: '4px',
                  padding: '1.4rem 1.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  background: '#111',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                  cursor: 'default',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: '3rem',
                    color: '#FFD000',
                    lineHeight: 1,
                    minWidth: '100px',
                  }}
                >
                  {s.value}
                </span>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: '#e5e5e5',
                    fontSize: '1rem',
                    fontWeight: 500,
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Story */}
        <div>
          <div
            style={{
              position: 'relative',
              padding: '2.5rem',
              border: '1px solid #1f1f1f',
              borderRadius: '4px',
              background: 'linear-gradient(135deg, #111 0%, #0d0d0d 100%)',
            }}
          >
            {/* Gold corner accent */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '40px', height: '40px', borderTop: '3px solid #FFD000', borderLeft: '3px solid #FFD000', borderRadius: '4px 0 0 0' }} />
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: '40px', height: '40px', borderBottom: '3px solid #FFD000', borderRight: '3px solid #FFD000', borderRadius: '0 0 4px 0' }} />

            <h3
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '1.8rem',
                color: '#FFD000',
                letterSpacing: '0.06em',
                marginBottom: '1.2rem',
              }}
            >
              THE 19 HOURS STORY
            </h3>

            <p
              style={{
                color: '#a0a0a0',
                lineHeight: 1.85,
                fontSize: '0.95rem',
                marginBottom: '1.2rem',
              }}
            >
              19 HOURS FITNESS was born from a simple belief — champions aren't made in comfort. They're forged in the hours most people sleep through. While the world rests, we grind. While others make excuses, our members make progress.
            </p>
            <p
              style={{
                color: '#a0a0a0',
                lineHeight: 1.85,
                fontSize: '0.95rem',
                marginBottom: '1.2rem',
              }}
            >
              Founded in Virar, 19 HOURS FITNESS represents non-stop dedication — a philosophy that your body is your most powerful asset, and every single hour counts. Our state-of-the-art facility is open late because we know real results don't follow a 9-to-5 schedule.
            </p>
            <p
              style={{
                color: '#a0a0a0',
                lineHeight: 1.85,
                fontSize: '0.95rem',
              }}
            >
              From elite athletes to beginners starting their first rep — everyone who walks through our doors gets the same promise: world-class coaching, zero judgment, and a community that pushes you beyond your limits.
            </p>

            <div
              style={{
                marginTop: '2rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid #1f1f1f',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <div style={{ width: '40px', height: '2px', background: '#FFD000' }} />
              <span style={{ color: '#FFD000', fontFamily: "'Bebas Neue', sans-serif", fontSize: '1rem', letterSpacing: '0.1em' }}>
                GRIND NEVER STOPS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
