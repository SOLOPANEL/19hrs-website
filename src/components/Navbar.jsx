import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Plans', href: '#plans' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'background 0.4s ease, border-color 0.4s ease',
        background: scrolled ? '#0a0a0a' : 'transparent',
        borderBottom: scrolled ? '1px solid #FFD000' : '1px solid transparent',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '2rem',
              color: '#FFD000',
              letterSpacing: '0.08em',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              lineHeight: 1,
              padding: 0,
            }}
          >
            19 HOURS FITNESS
          </button>

          {/* Desktop Links */}
          <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }} className="hidden-mobile">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  style={{
                    color: '#e5e5e5',
                    textDecoration: 'none',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    letterSpacing: '0.05em',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#FFD000')}
                  onMouseLeave={(e) => (e.target.style.color = '#e5e5e5')}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Join Now Button - Desktop */}
          <a
            href="#contact"
            onClick={(e) => handleNav(e, '#contact')}
            className="btn-gold hidden-mobile"
            style={{ fontSize: '0.85rem', padding: '0.5rem 1.4rem', textDecoration: 'none' }}
          >
            JOIN NOW
          </a>

          {/* Hamburger */}
          <button
            id="hamburger-btn"
            onClick={() => setMenuOpen((o) => !o)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.3rem',
            }}
            className="show-mobile"
            aria-label="Toggle menu"
          >
            <div style={{ width: '24px', height: '2px', background: '#FFD000', marginBottom: '5px', transition: 'transform 0.3s', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
            <div style={{ width: '24px', height: '2px', background: '#FFD000', transition: 'opacity 0.3s', opacity: menuOpen ? 0 : 1 }} />
            <div style={{ width: '24px', height: '2px', background: '#FFD000', marginTop: '5px', transition: 'transform 0.3s', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        style={{
          maxHeight: menuOpen ? '400px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.4s ease',
          background: '#0a0a0a',
          borderTop: menuOpen ? '1px solid #1f1f1f' : 'none',
        }}
        className="show-mobile"
      >
        <ul style={{ listStyle: 'none', margin: 0, padding: '1rem 1.5rem 1.5rem' }}>
          {navLinks.map((link) => (
            <li key={link.href} style={{ borderBottom: '1px solid #1a1a1a' }}>
              <a
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                style={{
                  display: 'block',
                  padding: '0.9rem 0',
                  color: '#e5e5e5',
                  textDecoration: 'none',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: '1rem',
                  letterSpacing: '0.05em',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#FFD000')}
                onMouseLeave={(e) => (e.target.style.color = '#e5e5e5')}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li style={{ marginTop: '1rem' }}>
            <a
              href="#contact"
              onClick={(e) => handleNav(e, '#contact')}
              className="btn-gold"
              style={{ width: '100%', textDecoration: 'none', fontSize: '0.9rem' }}
            >
              JOIN NOW
            </a>
          </li>
        </ul>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
