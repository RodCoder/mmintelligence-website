import React from 'react';
const audiences = [
'Family Offices',
'High Net-Worth and Ultra High Net-Worth Individuals',
'Legal and Professional Advisers',
'Institutional Counterparties'];

export function TrustSignals(): JSX.Element {
  const handleRequestAccess = () => {
    const el = document.getElementById('contact');
    if (el)
    el.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return (
    <section
      style={{
        backgroundColor: '#0d0d0d',
        padding: '112px 0',
        borderTop: '1px solid rgba(245,242,238,0.06)'
      }}>

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 56px'
        }}>

        <div
          data-reveal
          style={{
            marginBottom: '72px',
            textAlign: 'center'
          }}>

          <span
            className="section-label"
            style={{
              textAlign: 'center'
            }}>

            Designed for Complex Institutional Environments
          </span>
        </div>

        {/* Audience Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px',
            background: 'rgba(245,242,238,0.06)',
            marginBottom: '96px'
          }}>

          {audiences.map((audience, i) =>
          <div
            key={i}
            className="glass-panel"
            style={{
              background: '#0A0A0A',
              padding: '48px 32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              minHeight: '180px'
            }}
            data-reveal
            data-reveal-delay={`${i * 100}` as any}>

              <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '13px',
                fontWeight: 300,
                letterSpacing: '0.05em',
                color: 'rgba(245,242,238,0.85)',
                lineHeight: 1.6
              }}>

                {audience}
              </span>
            </div>
          )}
        </div>

        {/* Closing Statement */}
        <div
          style={{
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto'
          }}
          data-reveal>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(24px, 3vw, 32px)',
              fontWeight: 300,
              color: '#F5F2EE',
              lineHeight: 1.4,
              letterSpacing: '-0.01em',
              marginBottom: '48px'
            }}>

            Our role is to create structured technical intelligence that enables
            digital asset environments to become governable, defensible and
            operational within institutional frameworks.
          </p>

          <button className="kinari-btn" onClick={handleRequestAccess}>
            Discuss a Mandate
          </button>
        </div>
      </div>
    </section>);

}