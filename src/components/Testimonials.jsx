const reviews = [
  {
    id: 't1',
    name: 'Rahul Verma',
    role: 'Member since 2022',
    review: 'Joining 19 HOURS FITNESS completely transformed my life. Lost 18kg in 5 months under the guidance of trainer Arjun. The community here is unbeatable — everyone pushes everyone.',
  },
  {
    id: 't2',
    name: 'Sneha Patil',
    role: 'Member since 2023',
    review: "The HIIT and CrossFit classes are absolutely insane in the best way. Priya's energy is contagious. I've never felt stronger or more confident. 19 HOURS FITNESS is not just a gym, it's a lifestyle.",
  },
  {
    id: 't3',
    name: 'Karan Joshi',
    role: 'Member since 2024',
    review: "Best investment I've made for my health. The nutrition coaching paired with the annual plan is a game changer. Facilities are top-notch and always clean. Highly recommend.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ background: '#111111', padding: 'clamp(4rem, 8vw, 7rem) 1.5rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="fade-section" style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
          <p style={{ color: '#FFD000', fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', letterSpacing: '0.18em', fontWeight: 600, marginBottom: '0.8rem', textTransform: 'uppercase' }}>Real Results</p>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff', lineHeight: 1 }}>
            WHAT OUR <span style={{ color: '#FFD000' }}>MEMBERS SAY</span>
          </h2>
        </div>

        <div className="fade-section" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '1.5rem' }}>
          {reviews.map((r) => (
            <div
              key={r.id}
              id={`review-${r.id}`}
              style={{
                background: '#161616',
                border: '1px solid #222',
                borderRadius: '8px',
                padding: '2.2rem',
                transition: 'transform 0.3s ease, border-color 0.3s ease',
                position: 'relative',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = 'rgba(255,208,0,0.3)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#222'; }}
            >
              {/* Quote mark */}
              <div style={{ fontFamily: 'Georgia, serif', fontSize: '5rem', color: 'rgba(255,208,0,0.1)', lineHeight: 0.7, marginBottom: '1rem', userSelect: 'none' }}>"</div>

              {/* Stars */}
              <div style={{ color: '#FFD000', fontSize: '1.1rem', letterSpacing: '0.1em', marginBottom: '1.2rem' }}>★★★★★</div>

              {/* Review text */}
              <p style={{ color: '#a0a0a0', fontFamily: "'Inter', sans-serif", fontSize: '0.92rem', lineHeight: 1.8, marginBottom: '1.8rem', fontStyle: 'italic' }}>
                "{r.review}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(255,208,0,0.15)', border: '1px solid rgba(255,208,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ color: '#FFD000', fontFamily: "'Bebas Neue', sans-serif", fontSize: '1rem' }}>{r.name[0]}</span>
                </div>
                <div>
                  <div style={{ color: '#fff', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '0.9rem' }}>{r.name}</div>
                  <div style={{ color: '#555', fontFamily: "'Inter', sans-serif", fontSize: '0.78rem' }}>{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="fade-section" style={{ marginTop: '4rem', padding: '2rem', background: 'linear-gradient(135deg, rgba(255,208,0,0.08) 0%, transparent 100%)', border: '1px solid rgba(255,208,0,0.2)', borderRadius: '8px', textAlign: 'center' }}>
          <p style={{ color: '#e5e5e5', fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.4rem, 3vw, 2rem)', letterSpacing: '0.06em' }}>
            JOIN <span style={{ color: '#FFD000' }}>2000+</span> MEMBERS WHO CHOSE TO GRIND
          </p>
        </div>
      </div>
    </section>
  );
}
