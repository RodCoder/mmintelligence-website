import React from 'react';

interface PageHeroProps {
  headline: string;
  subtitle?: string;
  note?: string;
}

export function PageHero({ headline, subtitle, note }: PageHeroProps): JSX.Element {
  return (
    <section
      style={{
        paddingTop: '160px',
        paddingBottom: '96px',
        borderBottom: '1px solid rgba(245,242,238,0.06)',
      }}>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 56px',
        }}>
        <h1
          data-reveal
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 300,
            color: '#F5F2EE',
            fontSize: 'clamp(42px, 5vw, 72px)',
            lineHeight: 1.0,
            letterSpacing: '-0.03em',
            maxWidth: '800px',
          }}>
          {headline}
        </h1>
        {subtitle && (
          <p
            data-reveal
            data-reveal-delay="200"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '16px',
              fontWeight: 300,
              color: 'rgba(245,242,238,0.5)',
              lineHeight: 1.7,
              marginTop: '28px',
              maxWidth: '640px',
            }}>
            {subtitle}
          </p>
        )}
        {note && (
          <p
            data-reveal
            data-reveal-delay="300"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '13px',
              fontWeight: 300,
              color: 'rgba(245,242,238,0.35)',
              lineHeight: 1.7,
              marginTop: '16px',
              maxWidth: '600px',
            }}>
            {note}
          </p>
        )}
      </div>
    </section>
  );
}
