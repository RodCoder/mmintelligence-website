import React from 'react';
interface PillarCard {
  title: string;
  body: string;
}
const pillars: PillarCard[] = [
{
  title: 'Legal-Led Environment',
  body: 'Technical intelligence designed to support structured legal and governance frameworks.'
},
{
  title: 'Forensic Clarity',
  body: 'Structured analysis that translates complex digital activity into decision-ready intelligence.'
},
{
  title: 'Privacy-First Architecture',
  body: 'Controlled environments prioritising confidentiality and minimised data exposure.'
}];

export function Positioning(): JSX.Element {
  return (
    <section
      style={{
        backgroundColor: '#0A0A0A',
        padding: '128px 0',
        borderTop: '1px solid rgba(245,242,238,0.06)'
      }}>

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 56px'
        }}>

        {/* Header */}
        <div
          data-reveal
          style={{
            marginBottom: '80px'
          }}>

          <span className="section-label">
            A Structured Technical Intelligence Framework
          </span>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontWeight: 300,
              color: '#F5F2EE',
              lineHeight: 1.4,
              letterSpacing: '-0.01em',
              maxWidth: '800px',
              marginBottom: '28px'
            }}>

            MM Intelligence operates within a multidisciplinary professional
            environment designed to translate complex digital asset environments
            into structured intelligence suitable for institutional contexts.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
            background: 'rgba(245,242,238,0.06)',
            marginBottom: '48px'
          }}>

          {pillars.map((card, i) =>
          <div
            key={i}
            className="glass-panel"
            style={{
              padding: '40px 36px',
              background: '#0A0A0A'
            }}
            data-reveal
            data-reveal-delay={`${i * 150}` as any}>

              <h4
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '11px',
                fontWeight: 400,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'rgba(201,168,76,0.85)',
                marginBottom: '20px'
              }}>

                {card.title}
              </h4>
              <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                fontWeight: 300,
                color: 'rgba(245,242,238,0.65)',
                lineHeight: 1.8
              }}>

                {card.body}
              </p>
            </div>
          )}
        </div>

        {/* Micro statement */}
        <div data-reveal data-reveal-delay="450">
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '12px',
              fontWeight: 300,
              color: 'rgba(245,242,238,0.4)',
              letterSpacing: '0.05em'
            }}>

            Operating within a multidisciplinary professional ecosystem
            alongside EU-qualified legal expertise.
          </p>
        </div>
      </div>
    </section>);

}