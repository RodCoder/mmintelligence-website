import React from 'react';
const metrics = [
{
  value: '€2.4B+',
  label: 'Development value assessed'
},
{
  value: '34',
  label: 'Projects reviewed to date'
},
{
  value: '12',
  label: 'Jurisdictions covered'
}];

const partners = [
'Strategic Partner',
'Legal Counsel',
'Custodian',
'Regulator',
'Auditor'];

export function TrustSignals(): JSX.Element {
  return (
    <section
      style={{
        backgroundColor: '#0A0A0A',
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
            marginBottom: '72px'
          }}>

          <span className="section-label">Standing</span>
        </div>

        {/* Metrics */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
            background: 'rgba(245,242,238,0.06)',
            marginBottom: '72px'
          }}>

          {metrics.map((metric, i) =>
          <div
            key={i}
            style={{
              background: '#0A0A0A',
              padding: '48px 40px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}
            data-reveal
            data-reveal-delay={`${i * 100}` as any}>

              <span
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(48px, 5vw, 72px)',
                fontWeight: 300,
                color: '#F5F2EE',
                lineHeight: 1,
                letterSpacing: '-0.02em'
              }}>

                {metric.value}
              </span>
              <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '11px',
                fontWeight: 300,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(245,242,238,0.35)'
              }}>

                {metric.label}
              </span>
            </div>
          )}
        </div>

        {/* Partner logos */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '1px',
            background: 'rgba(245,242,238,0.06)',
            marginBottom: '56px'
          }}
          data-reveal>

          {partners.map((partner, i) =>
          <div
            key={i}
            className="logo-placeholder"
            style={{
              background: '#0A0A0A',
              height: '80px'
            }}>

              <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '9px',
                fontWeight: 300,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'rgba(245,242,238,0.18)'
              }}>

                {partner}
              </span>
            </div>
          )}
        </div>

        {/* Compliance note */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '11px',
            fontWeight: 300,
            color: 'rgba(245,242,238,0.28)',
            lineHeight: 1.7,
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 auto'
          }}
          data-reveal>

          Kinari operates under applicable securities regulations in each
          jurisdiction of operation. All investments involve risk. Access is
          restricted to qualified investors as defined by applicable law.
        </p>
      </div>
    </section>);

}