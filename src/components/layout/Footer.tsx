import React from 'react';
import mmiLogoGrey from '../../assets/images/mmi-logo-grey.svg';
import mmlawLogoGrey from '../../assets/images/mmlaw-logo-grey.svg';

export function Footer(): JSX.Element {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer
      style={{
        backgroundColor: '#0A0A0A',
        borderTop: '1px solid rgba(245,242,238,0.05)',
        padding: '56px 0 0',
      }}>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 56px',
        }}>

        {/* Main footer row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'start',
            gap: '40px',
            marginBottom: '56px',
          }}>

          {/* Left — MMI grey logo */}
          <img
            src={mmiLogoGrey}
            alt="MM Intelligence"
            style={{ height: '26px', width: 'auto', display: 'block' }}
          />

          {/* Center — nav */}
          <nav style={{ display: 'flex', gap: '32px' }}>
            {[
              { label: 'Privacy Policy', id: 'home' },
              { label: 'Terms of Use', id: 'home' },
            ].map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '11px',
                  fontWeight: 300,
                  letterSpacing: '0.1em',
                  color: 'rgba(245,242,238,0.22)',
                  transition: 'color 0.3s ease',
                  padding: 0,
                }}
                onMouseEnter={(e) => { (e.target as HTMLButtonElement).style.color = 'rgba(201,168,76,0.7)'; }}
                onMouseLeave={(e) => { (e.target as HTMLButtonElement).style.color = 'rgba(245,242,238,0.22)'; }}>
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right — MMLaw grey logo + legal note */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
            <img
              src={mmlawLogoGrey}
              alt="MMLaw"
              style={{ height: '20px', width: 'auto', display: 'block' }}
            />
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '7.8px',
                fontWeight: 300,
                color: 'rgba(245,242,238,0.25)',
                lineHeight: 1.75,
                textAlign: 'right',
              }}>
              Legal advice and certification are <br/> led by MMLaw where required.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(245,242,238,0.05)', margin: '0 -56px' }} />

        {/* Bottom row */}
        <div style={{ padding: '28px 0 40px', textAlign: 'center' }}>
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '10px',
              fontWeight: 300,
              color: 'rgba(245,242,238,0.12)',
              letterSpacing: '0.05em',
            }}>
            © MM Intelligence 2026. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
