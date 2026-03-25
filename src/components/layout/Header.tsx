import React, { useState } from 'react';
import logoSrc from '../../assets/images/mmi-logo-gold.svg';
import mmlawLogoSrc from '../../assets/images/mmlaw-logo-gold.svg';

const navLinks = [
  { label: 'What we do', href: '#capabilities' },
  { label: 'Methodology', href: '#methodology' },
  { label: 'Collaboration', href: '#collaboration' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export function Header(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (href: string) => {
    setIsOpen(false);
    scrollTo(href.replace('#', ''));
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backdropFilter: 'blur(20px) saturate(1.2)',
          WebkitBackdropFilter: 'blur(20px) saturate(1.2)',
        }}>
        <div
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '0 56px',
            marginTop: '60px',
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
          }}>

          {/* Left — hamburger + MM LAW */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
            <button
              onClick={() => setIsOpen(true)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
              }}
              aria-label="Open menu">
              {[0, 1, 2].map(i => (
                <div key={i} style={{ width: '28px', height: '3px', background: '#75622f' }} />
              ))}
            </button>
          </div>

          {/* Center — MMI logo */}
          <button
            onClick={() => scrollTo('home')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <img
              src={logoSrc}
              alt="MM Intelligence"
              style={{ width: '80px', height: 'auto', display: 'block' }}
            />
          </button>

          {/* Right — "In collaboration with" + MMLAW logo */}
          <a
            href="https://mmlaw.global"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: '6px',
              textDecoration: 'none',
            }}>
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '6px',
                fontWeight: 400,
                letterSpacing: '0.2em',
                color: '#75622f',
                textTransform: 'uppercase',
                opacity: 0.6,
              }}>
              In collaboration with
            </span>
            <img
              src={mmlawLogoSrc}
              alt="MMLaw"
              style={{ height: '20px', width: 'auto', display: 'block' }}
            />
          </a>
        </div>
      </header>

      {/* Full-screen nav overlay */}
      {isOpen && (
        <div
          className="nav-overlay"
          onClick={() => setIsOpen(false)}>

          <button
            onClick={() => setIsOpen(false)}
            style={{
              position: 'absolute',
              top: '28px',
              right: '40px',
              background: 'none',
              border: 'none',
              color: 'rgba(245,242,238,0.4)',
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '10px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => { (e.target as HTMLButtonElement).style.color = 'rgba(245,242,238,0.8)'; }}
            onMouseLeave={(e) => { (e.target as HTMLButtonElement).style.color = 'rgba(245,242,238,0.4)'; }}>
            × Close
          </button>

          <nav
            onClick={(e) => e.stopPropagation()}
            style={{ textAlign: 'center' }}>
            {navLinks.map((link, i) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="nav-overlay-link"
                style={{
                  animationDelay: `${i * 60}ms`,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'block',
                  width: '100%',
                }}>
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
