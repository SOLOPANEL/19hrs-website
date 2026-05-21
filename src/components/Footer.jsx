const socialLinks = [
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: 'facebook',
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    id: 'youtube',
    label: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Plans', href: '#plans' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#060606', borderTop: '1px solid #1a1a1a', padding: '4rem 1.5rem 2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Top Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem', marginBottom: '3.5rem' }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '3rem', color: '#FFD000', letterSpacing: '0.08em', lineHeight: 1, marginBottom: '0.8rem' }}>
              19HRS
            </div>
            <p style={{ color: '#FFD000', fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', letterSpacing: '0.18em', fontWeight: 600, textTransform: 'uppercase', marginBottom: '1rem' }}>
              Grind Never Stops
            </p>
            <p style={{ color: '#555', fontFamily: "'Inter', sans-serif", fontSize: '0.88rem', lineHeight: 1.7, maxWidth: '260px' }}>
              Mumbai's most dedicated fitness community. Built for the relentless. Open for everyone.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
              {socialLinks.map((s) => (
                <a
                  key={s.id}
                  id={`social-${s.id}`}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '6px',
                    border: '1px solid #222',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#666',
                    textDecoration: 'none',
                    transition: 'color 0.3s, border-color 0.3s, background 0.3s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#FFD000'; e.currentTarget.style.borderColor = '#FFD000'; e.currentTarget.style.background = 'rgba(255,208,0,0.06)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#666'; e.currentTarget.style.borderColor = '#222'; e.currentTarget.style.background = 'transparent'; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.2rem', color: '#fff', letterSpacing: '0.1em', marginBottom: '1.4rem' }}>QUICK LINKS</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {footerLinks.map((link) => (
                <li key={link.href} style={{ marginBottom: '0.7rem' }}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#666',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.9rem',
                      padding: 0,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      transition: 'color 0.3s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#FFD000')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#666')}
                  >
                    <span style={{ color: '#FFD000', fontSize: '0.7rem' }}>›</span> {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Snippet */}
          <div>
            <h4 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.2rem', color: '#fff', letterSpacing: '0.1em', marginBottom: '1.4rem' }}>CONTACT INFO</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: '', val: '+91 XXXXXXXXXX' },
                { icon: '', val: 'hello@19hrs.in' },
                { icon: '', val: 'Virar West, Mumbai — 401303' },
              ].map((item) => (
                <div key={item.icon} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span style={{ fontSize: '1rem', flexShrink: 0, marginTop: '1px' }}>{item.icon}</span>
                  <span style={{ color: '#666', fontFamily: "'Inter', sans-serif", fontSize: '0.88rem', lineHeight: 1.5 }}>{item.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #222, transparent)', marginBottom: '2rem' }} />

        {/* Bottom Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: '#444', fontFamily: "'Inter', sans-serif", fontSize: '0.82rem' }}>
            © 2025 19HRS. All Rights Reserved.
          </p>
          <p style={{ color: '#333', fontFamily: "'Inter', sans-serif", fontSize: '0.78rem' }}>
            Designed By Finix
          </p>
        </div>
      </div>
    </footer>
  );
}
