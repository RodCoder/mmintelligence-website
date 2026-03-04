import React from 'react';
export function TechnologyLayer(): JSX.Element {
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
          padding: '0 48px',
          display: 'flex',
          flexDirection: 'column',
          gap: '128px'
        }}>

        {/* PART 1 — About */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}>

          <div
            style={{
              maxWidth: '680px',
              width: '100%'
            }}
            data-reveal>

            <span className="section-label">About</span>

            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(18px, 2vw, 23px)',
                fontWeight: 300,
                color: '#F5F2EE',
                lineHeight: 1.75,
                letterSpacing: '0.005em',
                marginBottom: '40px'
              }}>

              MM Intelligence is a specialised technical intelligence practice
              focused on digital asset governance, forensic analysis and privacy
              architecture. Operating within a multidisciplinary professional
              environment, we provide structured technical capabilities that
              support legal advisory, institutional risk management and the
              secure deployment of complex digital wealth.
              <br />
              <br />
              Our work sits at the intersection of cybersecurity, forensic
              blockchain analysis and operational governance. Rather than
              offering isolated technical services, we contribute factual
              intelligence that enables legal professionals, family offices and
              institutional clients to understand risk, structure defensible
              frameworks and interact confidently with banks, regulators and
              counterparties.
              <br />
              <br />
              MM Intelligence operates as part of the MM group's integrated
              approach to digital wealth governance. Technical analysis is
              performed within controlled professional protocols and may be
              integrated into legal assessments delivered by EU-qualified
              lawyers where appropriate.
              <br />
              <br />
              Privacy and operational security are central to our methodology.
              Analysis is conducted within controlled environments, prioritising
              internal expertise and minimising unnecessary exposure of
              sensitive information to third-party platforms.
              <br />
              <br />
              Our objective is not merely technical analysis, but the creation
              of structured intelligence that makes complex digital asset
              environments understandable, governable and institutionally
              usable.
            </p>

            <div
              style={{
                width: '56px',
                height: '1px',
                background: 'rgba(201,168,76,0.35)'
              }} />

          </div>
        </div>

        {/* PART 2 — Team */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start'
          }}>

          <div
            style={{
              maxWidth: '680px',
              width: '100%'
            }}
            data-reveal>

            <span className="section-label">Our Team</span>

            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(18px, 2vw, 23px)',
                fontWeight: 300,
                color: '#F5F2EE',
                lineHeight: 1.75,
                letterSpacing: '0.005em'
              }}>

              MM Intelligence is intentionally structured as a focused and
              multidisciplinary technical unit operating alongside legal
              expertise within the MM professional ecosystem.
              <br />
              <br />
              Our team combines experience in blockchain analysis,
              cybersecurity, digital governance and risk architecture. Work is
              conducted under controlled professional protocols, ensuring that
              technical findings remain precise, confidential and suitable for
              integration into legal and institutional decision-making
              processes.
              <br />
              <br />
              We collaborate closely with legal professionals, governance
              specialists and external security partners where appropriate,
              allowing complex digital asset matters to be addressed through
              coordinated legal and technical expertise while maintaining strict
              separation of roles and responsibilities.
            </p>
          </div>
        </div>
      </div>
    </section>);

}