import React from 'react';
interface StandardCard {
  title: string;
  body: string;
}
const standards: StandardCard[] = [
{
  title: 'Financial Structure',
  body: 'Debt stack, equity waterfall, and return profile assessed against institutional benchmarks. Projects with structural ambiguity do not proceed.'
},
{
  title: 'Development Track Record',
  body: 'Sponsor history, delivery capability, and project pipeline evaluated by sector specialists. First-time sponsors are not listed.'
},
{
  title: 'Regulatory Standing',
  body: 'Jurisdiction-specific compliance review, ownership structure verification, and exit pathway analysis completed before any project reaches investors.'
}];

export function DealStandards(): JSX.Element {
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

          <span className="section-label">Deal Standards</span>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(38px, 5vw, 64px)',
              fontWeight: 300,
              color: '#F5F2EE',
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
              maxWidth: '680px',
              marginBottom: '28px'
            }}>

            Not every project is listed. That is the point.
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '15px',
              fontWeight: 300,
              color: 'rgba(245,242,238,0.55)',
              lineHeight: 1.8,
              maxWidth: '520px'
            }}>

            Every project on Kinari has cleared a multi-stage assessment
            covering financial structure, development track record, regulatory
            standing, and exit viability. The vetting process is not a formality
            — it is the product.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
            background: 'rgba(245,242,238,0.06)'
          }}>

          {standards.map((card, i) =>
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
                fontSize: '10px',
                fontWeight: 400,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'rgba(245,242,238,0.45)',
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
      </div>
    </section>);

}