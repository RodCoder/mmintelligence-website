import React from 'react';
interface ServiceItem {
  title: string;
  body: string;
}
const services: ServiceItem[] = [
{
  title: 'Digital Exposure & Privacy Intelligence',
  body: 'We analyse personal and organisational exposure risks associated with digital asset ownership. This includes threat modelling, public data footprint analysis, wallet architecture review and operational security assessment. The objective is to reduce unnecessary visibility, strengthen privacy posture and minimise physical and digital risk.'
},
{
  title: 'Governance Architecture for Secure Asset Control',
  body: 'We support the technical implementation of governance frameworks combining legal oversight, distributed control and secure key management. Our role focuses on technical design and coordination within governance models defined by legal architecture, ensuring that security and operational resilience are aligned with documented governance rules.'
},
{
  title: 'Institutional Readiness & Forensic Intelligence',
  body: 'We provide structured forensic analysis and technical documentation supporting legal evidencing processes. This may include transaction intelligence, technical validation of asset history and data preparation aligned with institutional onboarding requirements.'
},
{
  title: 'Digital Asset Risk Protocols & Resilience Planning',
  body: 'In collaboration with specialist partners, we support the design of operational risk protocols addressing physical and cybersecurity threats. This includes technical input into governance structures designed to mitigate coercion risk and strengthen operational resilience.'
},
{
  title: 'Privacy Engineering & Compliance-by-Design Frameworks',
  body: 'We help organisations integrate privacy-first technical architecture from inception. This includes data minimisation models, segregation strategies, encryption standards and technical governance supporting regulatory robustness without excessive data exposure.'
}];

export function DualTrack(): JSX.Element {
  return (
    <section
      style={{
        backgroundColor: '#0A0A0A',
        padding: '128px 0',
        borderTop: '1px solid rgba(245,242,238,0.06)',
        borderBottom: '1px solid rgba(245,242,238,0.06)'
      }}>

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 56px'
        }}>

        {/* Section header */}
        <div
          style={{
            marginBottom: '72px'
          }}
          data-reveal>

          <span className="section-label">What We Do</span>
        </div>

        {/* Single column list */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column'
          }}>

          {services.map((service, i) =>
          <div
            key={i}
            className="value-prop"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '16px',
              paddingTop: '40px',
              paddingBottom: '40px'
            }}
            data-reveal
            data-reveal-delay={`${i * 100}` as any}>

              <h3
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '12px',
                fontWeight: 400,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#F5F2EE'
              }}>

                {service.title}
              </h3>
              <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '15px',
                fontWeight: 300,
                color: 'rgba(245,242,238,0.65)',
                lineHeight: 1.8,
                maxWidth: '800px'
              }}>

                {service.body}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>);

}