const plans = [
  {
    id: 'monthly',
    name: 'Monthly',
    price: '₹1,999',
    period: '/month',
    badge: null,
    features: ['Full Gym Access', 'Group Classes (3/week)', 'Locker Room Access', 'Fitness Assessment', 'App Tracking'],
    highlight: false,
  },
  {
    id: 'quarterly',
    name: 'Quarterly',
    price: '₹4,999',
    period: '/3 months',
    badge: 'POPULAR',
    features: ['Full Gym Access', 'Unlimited Group Classes', 'Locker Room Access', '1 Personal Training Session', 'Nutrition Guide + App'],
    highlight: false,
  },
  {
    id: 'annual',
    name: 'Annual',
    price: '₹14,999',
    period: '/year',
    badge: 'BEST VALUE',
    features: ['Full 24/7 Gym Access', 'Unlimited All Classes', 'Private Locker', '12 Personal Training Sessions', 'Full Nutrition Coaching'],
    highlight: true,
  },
];

export default function Plans() {
  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="plans" style={{ background: '#0a0a0a', padding: 'clamp(4rem, 8vw, 7rem) 1.5rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="fade-section" style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
          <p style={{ color: '#FFD000', fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', letterSpacing: '0.18em', fontWeight: 600, marginBottom: '0.8rem', textTransform: 'uppercase' }}>Pricing</p>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff', lineHeight: 1 }}>
            CHOOSE YOUR <span style={{ color: '#FFD000' }}>PLAN</span>
          </h2>
          <p style={{ color: '#777', marginTop: '1rem', fontSize: '0.95rem', fontFamily: "'Inter', sans-serif" }}>
            No hidden fees. Cancel anytime. Commit to your goals.
          </p>
        </div>

        <div className="fade-section" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', alignItems: 'stretch' }}>
          {plans.map((plan) => (
            <div
              key={plan.id}
              id={`plan-${plan.id}`}
              style={{
                background: plan.highlight ? '#FFD000' : '#111',
                border: plan.highlight ? 'none' : '1px solid #222',
                borderRadius: '8px',
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                boxShadow: plan.highlight ? '0 0 40px rgba(255,208,0,0.25)' : 'none',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              {plan.badge && (
                <div style={{
                  position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)',
                  background: plan.highlight ? '#0a0a0a' : '#FFD000',
                  color: plan.highlight ? '#FFD000' : '#0a0a0a',
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '0.85rem', letterSpacing: '0.12em',
                  padding: '0.3rem 1.2rem', borderRadius: '20px',
                }}>
                  {plan.badge}
                </div>
              )}

              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.8rem', color: plan.highlight ? '#0a0a0a' : '#fff', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>{plan.name}</h3>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.3rem' }}>
                  <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '3.5rem', color: plan.highlight ? '#0a0a0a' : '#FFD000', lineHeight: 1 }}>{plan.price}</span>
                  <span style={{ color: plan.highlight ? '#333' : '#666', fontSize: '0.9rem' }}>{plan.period}</span>
                </div>
              </div>

              <div style={{ height: '1px', background: plan.highlight ? 'rgba(0,0,0,0.15)' : '#1f1f1f', marginBottom: '1.5rem' }} />

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1, marginBottom: '2rem' }}>
                {plan.features.map((feat, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.9rem', color: plan.highlight ? '#0a0a0a' : '#e5e5e5', fontFamily: "'Inter', sans-serif", fontSize: '0.92rem' }}>
                    <span style={{ color: plan.highlight ? '#0a0a0a' : '#FFD000', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {feat}
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                style={{
                  background: plan.highlight ? '#0a0a0a' : 'transparent',
                  color: plan.highlight ? '#FFD000' : '#FFD000',
                  border: plan.highlight ? '2px solid #0a0a0a' : '2px solid #FFD000',
                  padding: '0.85rem 1.5rem',
                  borderRadius: '3px',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  letterSpacing: '0.08em',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  width: '100%',
                }}
                onMouseEnter={(e) => {
                  if (plan.highlight) { e.currentTarget.style.background = '#111'; e.currentTarget.style.color = '#FFD000'; }
                  else { e.currentTarget.style.background = '#FFD000'; e.currentTarget.style.color = '#0a0a0a'; }
                }}
                onMouseLeave={(e) => {
                  if (plan.highlight) { e.currentTarget.style.background = '#0a0a0a'; e.currentTarget.style.color = '#FFD000'; }
                  else { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#FFD000'; }
                }}
              >
                GET STARTED
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
