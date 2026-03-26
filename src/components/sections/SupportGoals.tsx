import React from 'react';
import { useBreakpoint } from '../hooks/useBreakpoint';

const goals = [
  'Protect and organise their traditional and digital asset structures',
  'Supervise holding and fiduciary arrangements',
  'Prepare assets for banking, onboarding and real-world deployment',
  'Organise the deployment of complex capital into investments and acquisitions',
  'Strengthen cybersecurity, control and confidentiality across sensitive wealth environments',
  'Apply internal AI processes to support structured review and organisation',
  'Bring security, order, oversight and continuity to family wealth',
];

export function SupportGoals(): JSX.Element {
  const { isMobile, isTablet } = useBreakpoint();
  const px = isMobile ? '0 20px' : isTablet ? '0 32px' : '0 56px';

  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: isMobile ? '80px 0 60px' : '139px 0 100px',
        background: 'linear-gradient(180deg, #101010 0%, #111111 40%)',
      }}>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: px,
        }}>

        {/* Intro text */}
        <p
          data-reveal
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: isMobile ? '14px' : '16px',
            fontWeight: 400,
            color: '#75622f',
            textTransform: 'uppercase',
            lineHeight: isMobile ? '28px' : '40px',
            marginBottom: isMobile ? '32px' : '48px',
            maxWidth: '1088px',
          }}>
          Our support is a powerful tool for high net worth individuals, families and private structures to
        </p>

        {/* Numbered goals */}
        <div
          data-reveal
          data-reveal-delay="100"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            maxWidth: '1088px',
            marginBottom: isMobile ? '40px' : '64px',
          }}>
          {goals.map((goal, i) => (
            <div
              key={i}
              style={{
                borderTop: '1px solid rgba(245,242,238,0.07)',
                paddingTop: '12px',
                display: 'flex',
                alignItems: 'baseline',
                gap: isMobile ? '20px' : isTablet ? '32px' : '48px',
              }}>
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: isMobile ? '16px' : '18px',
                  fontWeight: 300,
                  color: 'rgba(117,98,47,0.5)',
                  minWidth: '32px',
                  lineHeight: '38px',
                }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: isMobile ? '18px' : isTablet ? '20px' : '24px',
                  fontWeight: 300,
                  color: 'rgba(245,242,238,0.7)',
                  lineHeight: isMobile ? '28px' : '38px',
                  letterSpacing: '-0.013em',
                }}>
                {goal}
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div
          data-reveal
          data-reveal-delay="200"
          style={{
            textAlign: 'center',
            maxWidth: '1088px',
          }}>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: isMobile ? '11px' : '12px',
            fontWeight: 300,
            color: 'rgba(245,242,238,0.4)',
            lineHeight: '18px',
            letterSpacing: '0.05em',
            marginBottom: '4px',
          }}>
            All assessments are conducted within our own controlled technical environment. We do not rely on third-party analytical tools.
          </p>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: isMobile ? '11px' : '12px',
            fontWeight: 300,
            color: 'rgba(245,242,238,0.4)',
            lineHeight: '18px',
            letterSpacing: '0.05em',
            marginBottom: '4px',
          }}>
            Client data is processed internally under strict access protocols, using proprietary systems and supervised AI workflows.
          </p>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: isMobile ? '11px' : '12px',
            fontWeight: 300,
            color: 'rgba(245,242,238,0.4)',
            lineHeight: '18px',
            letterSpacing: '0.05em',
          }}>
            Technical work is delivered in coordination with MMLaw where legal structuring, legal analysis or legal opinions are required.
          </p>
        </div>
      </div>
    </section>
  );
}
