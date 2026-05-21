import { useState } from 'react';

const inputStyle = {
  width: '100%',
  background: '#111',
  border: '1px solid #2a2a2a',
  borderRadius: '4px',
  padding: '0.85rem 1rem',
  color: '#e5e5e5',
  fontFamily: "'Inter', sans-serif",
  fontSize: '0.92rem',
  outline: 'none',
  transition: 'border-color 0.3s',
  boxSizing: 'border-box',
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', mobile: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', mobile: '', email: '', message: '' });
  };

  return (
    <section id="contact" style={{ background: '#0a0a0a', padding: 'clamp(4rem, 8vw, 7rem) 1.5rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="fade-section" style={{ marginBottom: '3.5rem' }}>
          <p style={{ color: '#FFD000', fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', letterSpacing: '0.18em', fontWeight: 600, marginBottom: '0.8rem', textTransform: 'uppercase' }}>Get In Touch</p>
          <h2 className="section-heading">CONTACT <span style={{ color: '#FFD000' }}>US</span></h2>
        </div>

        <div className="fade-section" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          {/* Left: Contact Info */}
          <div>
            <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.8rem', color: '#fff', letterSpacing: '0.06em', marginBottom: '2rem' }}>REACH US ANYTIME</h3>

            {[
              { icon: '', label: 'Phone', value: '+91 083906 79679' },
              { icon: '', label: 'Email', value: 'hello@19hrs.in' },
              { icon: '', label: 'Address', value: 'Plot No. 201–202, Varkhana Bhavan, Viva College Rd, opp. Banjara Hotel, Virar West, Maharashtra 401303' },
              { icon: '', label: 'Hours', value: 'Mon–Sat: 5AM – 11PM\nSunday: 6AM – 9PM' },
            ].map((item) => (
              <div key={item.label} style={{ display: 'flex', gap: '1.2rem', marginBottom: '1.8rem', alignItems: 'flex-start' }}>
                <div style={{ width: '46px', height: '46px', borderRadius: '6px', background: 'rgba(255,208,0,0.1)', border: '1px solid rgba(255,208,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ color: '#FFD000', fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>{item.label}</div>
                  <div style={{ color: '#a0a0a0', fontFamily: "'Inter', sans-serif", fontSize: '0.92rem', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Form */}
          <div>
            <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: '8px', padding: '2.5rem 2rem' }}>
              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.6rem', color: '#fff', letterSpacing: '0.06em', marginBottom: '1.8rem' }}>START YOUR JOURNEY</h3>

              {submitted && (
                <div style={{ background: 'rgba(255,208,0,0.1)', border: '1px solid rgba(255,208,0,0.4)', borderRadius: '4px', padding: '1rem', marginBottom: '1.5rem', color: '#FFD000', fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', textAlign: 'center' }}>
                  ✓ Message sent! We'll contact you within 24 hours.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1.1rem' }}>
                  <label style={{ display: 'block', color: '#777', fontFamily: "'Inter', sans-serif", fontSize: '0.78rem', letterSpacing: '0.08em', marginBottom: '0.4rem', textTransform: 'uppercase' }}>Full Name *</label>
                  <input id="contact-name" name="name" type="text" required placeholder="Rahul Verma" value={form.name} onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = '#FFD000')}
                    onBlur={(e) => (e.target.style.borderColor = '#2a2a2a')}
                  />
                </div>

                <div style={{ marginBottom: '1.1rem' }}>
                  <label style={{ display: 'block', color: '#777', fontFamily: "'Inter', sans-serif", fontSize: '0.78rem', letterSpacing: '0.08em', marginBottom: '0.4rem', textTransform: 'uppercase' }}>Mobile Number *</label>
                  <input id="contact-mobile" name="mobile" type="tel" required placeholder="+91 98765 43210" value={form.mobile} onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = '#FFD000')}
                    onBlur={(e) => (e.target.style.borderColor = '#2a2a2a')}
                  />
                </div>

                <div style={{ marginBottom: '1.1rem' }}>
                  <label style={{ display: 'block', color: '#777', fontFamily: "'Inter', sans-serif", fontSize: '0.78rem', letterSpacing: '0.08em', marginBottom: '0.4rem', textTransform: 'uppercase' }}>Email Address *</label>
                  <input id="contact-email" name="email" type="email" required placeholder="you@email.com" value={form.email} onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = '#FFD000')}
                    onBlur={(e) => (e.target.style.borderColor = '#2a2a2a')}
                  />
                </div>

                <div style={{ marginBottom: '1.8rem' }}>
                  <label style={{ display: 'block', color: '#777', fontFamily: "'Inter', sans-serif", fontSize: '0.78rem', letterSpacing: '0.08em', marginBottom: '0.4rem', textTransform: 'uppercase' }}>Message</label>
                  <textarea id="contact-message" name="message" rows={4} placeholder="Tell us your fitness goals..." value={form.message} onChange={handleChange}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '110px' }}
                    onFocus={(e) => (e.target.style.borderColor = '#FFD000')}
                    onBlur={(e) => (e.target.style.borderColor = '#2a2a2a')}
                  />
                </div>

                <button id="contact-submit" type="submit" className="btn-gold" style={{ width: '100%', fontSize: '1rem', padding: '0.95rem', letterSpacing: '0.08em' }}>
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="fade-section" style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid #1f1f1f' }}>
          <iframe
            title="19 HOURS FITNESS Gym Location — Virar West Mumbai"
            src="https://maps.app.goo.gl/vxd43DA5Kw9PnR6Y6"
            width="100%"
            height="320"
            style={{ border: 0, display: 'block', filter: 'grayscale(0.6) invert(0.1) contrast(1.1)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
