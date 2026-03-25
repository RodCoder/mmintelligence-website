import React from 'react';

interface MMLawCrossLinkProps {
  variant: 'standalone' | 'inline';
}

export function MMLawCrossLink({ variant }: MMLawCrossLinkProps): JSX.Element {
  if (variant === 'standalone') {
    return (
      <section
        style={{
          padding: '96px 0',
          borderTop: '1px solid rgba(245,242,238,0.06)',
        }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 56px',
          }}>
          <div
            className="glass-panel"
            data-reveal
            style={{
              padding: '56px 64px',
              maxWidth: '760px',
            }}>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(24px, 3vw, 36px)',
                fontWeight: 300,
                color: '#F5F2EE',
                letterSpacing: '-0.02em',
                marginBottom: '16px',
              }}>
              Working Alongside MMLaw
            </h3>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '15px',
                fontWeight: 300,
                color: 'rgba(245,242,238,0.55)',
                lineHeight: 1.8,
                marginBottom: '28px',
              }}>
              Legal services and legal deliverables are led by MMLaw where required.
            </p>
            <a
              href="https://mmlaw.global"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '11px',
                fontWeight: 300,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(201,168,76,0.8)',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = '#C9A84C'; }}
              onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = 'rgba(201,168,76,0.8)'; }}>
              → MMLaw
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div
      style={{
        border: '1px solid rgba(245,242,238,0.08)',
        padding: '20px 24px',
        marginTop: '24px',
        background: 'rgba(255,255,255,0.02)',
      }}>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '13px',
          fontWeight: 300,
          color: 'rgba(245,242,238,0.45)',
          lineHeight: 1.7,
          marginBottom: '10px',
        }}>
        Engagements requiring legal advice or certification are delivered under MMLaw's direction.
      </p>
      <a
        href="https://mmlaw.global"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '11px',
          fontWeight: 300,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'rgba(201,168,76,0.75)',
          textDecoration: 'none',
          transition: 'color 0.3s ease',
        }}
        onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = '#C9A84C'; }}
        onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = 'rgba(201,168,76,0.75)'; }}>
        → MMLaw
      </a>
    </div>
  );
}
