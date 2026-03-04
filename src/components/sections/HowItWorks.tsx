import React from 'react';
interface FrameworkItem {
  number: string;
  title: string;
  body: string;
}
const frameworkItems: FrameworkItem[] = [
{
  number: '01',
  title: 'Legal-first engagement context',
  body: 'Technical intelligence is developed to support structured legal and governance frameworks. Our work contributes factual analysis that may be integrated into legal advisory delivered independently by EU-qualified lawyers where appropriate.'
},
{
  number: '02',
  title: 'Proprietary methodology',
  body: 'We apply an internal methodology combining forensic analysis, risk modelling and governance architecture to translate complex digital activity into structured intelligence suitable for institutional decision-making.'
},
{
  number: '03',
  title: 'Peer review and professional oversight',
  body: 'Significant engagements follow internal review processes to ensure analytical rigour, consistency and reliability of technical findings.'
},
{
  number: '04',
  title: 'Controlled data environments',
  body: 'All analysis is conducted within secure, privacy-first environments designed to minimise unnecessary data exposure and maintain strict operational confidentiality.'
}];

export function HowItWorks(): JSX.Element {
  return (
    <section
      style={{
        backgroundColor: '#0d0d0d',
        padding: '128px 0'
      }}>

      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 56px'
        }}>

        {/* Header */}
        <div
          style={{
            marginBottom: '80px',
            textAlign: 'center'
          }}
          data-reveal>

          <span
            className="section-label"
            style={{
              textAlign: 'center'
            }}>

            Professional Framework
          </span>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(36px, 4.5vw, 56px)',
              fontWeight: 300,
              color: '#F5F2EE',
              lineHeight: 1.05,
              letterSpacing: '-0.025em'
            }}>

            Structured for clarity, consistency and confidentiality.
          </h2>
        </div>

        {/* Single column steps */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column'
          }}>

          {frameworkItems.map((item, i) =>
          <div
            key={i}
            className="step-item"
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '32px',
              paddingTop: '40px',
              paddingBottom: '40px'
            }}
            data-reveal
            data-reveal-delay={`${i * 100}` as any}>

              <span
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '48px',
                fontWeight: 300,
                color: 'rgba(201,168,76,0.28)',
                lineHeight: 1,
                flexShrink: 0,
                minWidth: '60px'
              }}>

                {item.number}
              </span>
              <div>
                <h4
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '16px',
                  fontWeight: 400,
                  color: '#F5F2EE',
                  marginBottom: '12px',
                  paddingTop: '8px'
                }}>

                  {item.title}
                </h4>
                <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '15px',
                  fontWeight: 300,
                  color: 'rgba(245,242,238,0.65)',
                  lineHeight: 1.75
                }}>

                  {item.body}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}