const services = [
  { id: 'strength', emoji: '', title: 'Strength Training', desc: 'Build raw power and muscle with progressive overload and expert programming.' },
  { id: 'crossfit', emoji: '', title: 'CrossFit', desc: 'High-intensity functional movements that forge elite fitness and mental toughness.' },
  { id: 'zumba', emoji: '', title: 'Zumba', desc: 'Dance your way to fitness with high-energy Latin-inspired cardio classes.' },
  { id: 'hiit', emoji: '', title: 'HIIT', desc: 'Torch fat fast with short bursts of maximum effort and active recovery.' },
  { id: 'yoga', emoji: '', title: 'Yoga', desc: 'Enhance flexibility, mindfulness, and recovery through disciplined breath and movement.' },
  { id: 'spin', emoji: '', title: 'Spin Class', desc: 'Push your cardio limits on the bike in our high-energy group cycling sessions.' },
  { id: 'personal', emoji: '', title: 'Personal Training', desc: '1-on-1 sessions with a certified coach tailored to your unique goals and body.' },
  { id: 'nutrition', emoji: '', title: 'Nutrition Coaching', desc: 'Fuel your performance with personalized diet plans crafted by nutrition experts.' },
];

export default function Services() {
  return (
    <section id="services" style={{ background: '#0d0d0d', padding: 'clamp(4rem, 8vw, 7rem) 1.5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="fade-section" style={{ marginBottom: '3.5rem' }}>
          <p style={{ color: '#FFD000', fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', letterSpacing: '0.18em', fontWeight: 600, marginBottom: '0.8rem', textTransform: 'uppercase' }}>What We Offer</p>
          <h2 className="section-heading">OUR SERVICES</h2>
        </div>
        <div className="fade-section" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.2rem' }}>
          {services.map((svc) => (
            <div
              key={svc.id}
              id={`service-${svc.id}`}
              className="gold-glow-hover"
              style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: '6px', padding: '2rem 1.6rem', cursor: 'default', transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: 1 }}>{svc.emoji}</div>
              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.4rem', color: '#fff', letterSpacing: '0.06em', marginBottom: '0.6rem' }}>{svc.title}</h3>
              <p style={{ color: '#777', fontSize: '0.88rem', lineHeight: 1.7, fontFamily: "'Inter', sans-serif" }}>{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
