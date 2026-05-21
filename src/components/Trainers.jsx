const trainers = [
  {
    id: 'arjun',
    initials: 'AK',
    name: 'Arjun Kapoor',
    specialty: 'Strength & Conditioning',
    quote: '"Pain is temporary. The results you build here last a lifetime."',
    exp: '8 yrs exp',
    cert: 'NSCA-CSCS Certified',
  },
  {
    id: 'priya',
    initials: 'PS',
    name: 'Priya Sharma',
    specialty: 'HIIT & CrossFit',
    quote: '"Every rep is a vote for the person you want to become."',
    exp: '6 yrs exp',
    cert: 'CrossFit Level 2 Trainer',
  },
  {
    id: 'rohan',
    initials: 'RM',
    name: 'Rohan Mehta',
    specialty: 'Nutrition & Yoga',
    quote: '"Discipline is choosing between what you want now and what you want most."',
    exp: '5 yrs exp',
    cert: 'RYT-500 & Precision Nutrition',
  },
];

export default function Trainers() {
  return (
    <section id="trainers" style={{ background: '#0d0d0d', padding: 'clamp(4rem, 8vw, 7rem) 1.5rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="fade-section" style={{ marginBottom: '3.5rem' }}>
          <p style={{ color: '#FFD000', fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', letterSpacing: '0.18em', fontWeight: 600, marginBottom: '0.8rem', textTransform: 'uppercase' }}>Expert Coaches</p>
          <h2 className="section-heading">MEET THE <span style={{ color: '#FFD000' }}>TRAINERS</span></h2>
        </div>

        <div className="fade-section" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '1.5rem' }}>
          {trainers.map((t) => (
            <div
              key={t.id}
              id={`trainer-${t.id}`}
              style={{
                background: '#111',
                border: '1px solid #1f1f1f',
                borderTop: '3px solid #FFD000',
                borderRadius: '0 0 8px 8px',
                padding: '2.5rem 2rem',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                textAlign: 'center',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(255,208,0,0.1)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              {/* Avatar */}
              <div style={{ margin: '0 auto 1.5rem', width: '90px', height: '90px', borderRadius: '50%', background: '#FFD000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', color: '#0a0a0a', letterSpacing: '0.05em', boxShadow: '0 0 0 4px rgba(255,208,0,0.2)' }}>
                {t.initials}
              </div>

              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.6rem', color: '#fff', letterSpacing: '0.06em', marginBottom: '0.3rem' }}>{t.name}</h3>
              <p style={{ color: '#FFD000', fontFamily: "'Inter', sans-serif", fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{t.specialty}</p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1.4rem' }}>
                <span style={{ background: '#1a1a1a', color: '#888', fontSize: '0.75rem', padding: '0.25rem 0.75rem', borderRadius: '20px', fontFamily: "'Inter', sans-serif" }}>{t.exp}</span>
                <span style={{ background: '#1a1a1a', color: '#888', fontSize: '0.75rem', padding: '0.25rem 0.75rem', borderRadius: '20px', fontFamily: "'Inter', sans-serif" }}>{t.cert}</span>
              </div>

              <div style={{ height: '1px', background: '#1f1f1f', marginBottom: '1.4rem' }} />

              <p style={{ color: '#777', fontFamily: "'Inter', sans-serif", fontSize: '0.88rem', lineHeight: 1.7, fontStyle: 'italic' }}>{t.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
