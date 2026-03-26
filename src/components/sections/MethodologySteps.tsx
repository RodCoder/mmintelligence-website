import React, { useEffect, useRef, useState } from 'react';
import { useBreakpoint } from '../hooks/useBreakpoint';

import frame1 from '../../assets/images/Frame 1.png';
import frame2 from '../../assets/images/Frame 2.png';
import frame3 from '../../assets/images/Frame 3.png';
import frame4 from '../../assets/images/Frame 4.png';
import frame5 from '../../assets/images/Frame 5.png';

const steps = [
  {
    num: '01',
    title: 'Define the mandate',
    body: 'We clarify scope, assets involved, governance objectives and confidentiality requirements.',
    align: 'right' as const,
    image: frame1,
  },
  {
    num: '02',
    title: 'Organise and Map',
    body: 'Information is collected and structured within our controlled internal environment.',
    align: 'left' as const,
    image: frame2,
  },
  {
    num: '03',
    title: 'Review governance and controls',
    body: 'We assess how the structure operates in practice, identifying gaps and exposure points.',
    align: 'right' as const,
    image: frame3,
  },
  {
    num: '04',
    title: 'Produce Clear Outputs',
    body: 'We organise findings into structured, defensible records suitable for coordinated legal and institutional processes.',
    align: 'left' as const,
    image: frame4,
  },
  {
    num: '05',
    title: 'Implement and Refine',
    body: 'We provide practical guidance and continuously refine our methodology as standards evolve.',
    align: 'right' as const,
    image: frame5,
  },
];

export function MethodologySteps(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const { isMobile, isTablet } = useBreakpoint();

  const px = isMobile ? '20px' : isTablet ? '32px' : '56px';
  const scrollMultiplier = isMobile ? 80 : 100;

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const p = Math.min(1, Math.max(0, scrolled / totalScrollable));
      setActiveStep(Math.min(steps.length - 1, Math.floor(p * steps.length)));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ height: `${steps.length * scrollMultiplier}vh`, position: 'relative' }}>

      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#0A0A0A',
        }}>

        <div
          style={{
            maxWidth: '1200px',
            width: '100%',
            margin: '0 auto',
            position: 'relative',
            height: '100vh',
          }}>

          {/* Section label */}
          <div
            style={{
              position: 'absolute',
              top: isMobile ? '80px' : '160px',
              left: px,
              right: px,
            }}>
            <span
              className="section-label"
              style={{ marginBottom: '16px', fontWeight: 500 }}>
              Our Methodology
            </span>

            {/* Intro text */}
            <div style={{ maxWidth: '1088px' }}>
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: isMobile ? '13px' : '14px',
                fontWeight: 400,
                color: '#F5F2EE',
                lineHeight: '15px',
                marginBottom: '8px',
              }}>
                Structured. Standardised. Continuously Refined.
              </p>
              {!isMobile && (
                <p style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '14px',
                  fontWeight: 300,
                  color: 'rgba(245,242,238,0.65)',
                  lineHeight: '15px',
                  maxWidth: '1088px',
                }}>
                  We operate through a disciplined internal methodology applied across forensic reviews, wallet governance, family office structures and cybersecurity engagements. Our framework evolves continuously to improve evidencing standards, governance discipline and data protection.
                </p>
              )}
            </div>
          </div>

          {/* Step content */}
          {steps.map((s, i) => {
            const isActive = i === activeStep;
            const isPast = i < activeStep;
            const imageOnLeft = s.align === 'right';
            const imgSize = isMobile ? '320px' : isTablet ? '240px' : '400px';

            return (
              <div
                key={s.num}
                style={{
                  position: 'absolute',
                  top: isMobile ? '180px' : '280px',
                  left: px,
                  right: px,
                  opacity: isActive ? 1 : 0,
                  transform: isActive
                    ? 'translateY(0)'
                    : isPast ? 'translateY(-20px)' : 'translateY(20px)',
                  transition: 'opacity 0.55s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94)',
                  pointerEvents: isActive ? 'auto' : 'none',
                }}>
                <div style={{ width: '100%' }}>

                  {/* Divider line */}
                  <div
                    style={{
                      borderTop: '1px solid rgba(245,242,238,0.08)',
                      paddingTop: '20px',
                      display: 'flex',
                      flexDirection: isMobile
                        ? 'column-reverse'
                        : (imageOnLeft ? 'row' : 'row-reverse'),
                      alignItems: isMobile ? 'center' : 'flex-start',
                      gap: isMobile ? '24px' : isTablet ? '32px' : '60px',
                    }}>

                    {/* Image */}
                    <div style={{
                        flexShrink: 0,
                        width: imgSize,
                        height: imgSize,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        marginTop: isMobile ? '40px' : undefined,
                      }}>
                        <img
                          src={s.image}
                          alt=""
                          style={{
                            height: imgSize,
                            width: 'auto',
                            objectFit: 'contain',
                            opacity: 0.85,
                            userSelect: 'none',
                            pointerEvents: 'none',
                          }}
                        />
                      </div>

                    {/* Text */}
                    <div style={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: isMobile ? 'flex-start' : (s.align === 'right' ? 'flex-end' : 'flex-start'),
                      gap: '16px',
                    }}>
                      <h2
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: isMobile ? '14px' : 'clamp(14px, 1.4vw, 16px)',
                          fontWeight: 400,
                          color: '#F5F2EE',
                          letterSpacing: '0.11em',
                          textTransform: 'uppercase',
                          textAlign: isMobile ? 'left' : (s.align === 'right' ? 'right' : 'left'),
                          maxWidth: '800px',
                          lineHeight: 1.2,
                          margin: 0,
                        }}>
                        {s.title}
                      </h2>

                      <p
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: isMobile ? '13px' : '14px',
                          fontWeight: 300,
                          color: 'rgba(245,242,238,0.65)',
                          lineHeight: 1.85,
                          maxWidth: '560px',
                          textAlign: isMobile ? 'left' : (s.align === 'right' ? 'right' : 'left'),
                          margin: 0,
                        }}>
                        {s.body}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Step indicators */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              right: px,
              transform: 'translateY(-50%)',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}>
            {steps.map((_, i) => (
              <div
                key={i}
                style={{
                  width: '1px',
                  height: i === activeStep ? '28px' : '10px',
                  background: i === activeStep
                    ? 'rgba(117,98,47,0.8)'
                    : 'rgba(245,242,238,0.15)',
                  transition: 'height 0.4s ease, background 0.4s ease',
                }} />
            ))}
          </div>

          {/* Footer note */}
          <div
            style={{
              position: 'absolute',
              bottom: isMobile ? '24px' : '48px',
              left: px,
              right: px,
              textAlign: 'center',
            }}>
            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: isMobile ? '11px' : '12px',
              fontWeight: 800,
              color: 'rgba(245,242,238,0.4)',
              letterSpacing: '0.05em',
              lineHeight: '18px',
              marginBottom: '4px',
            }}>
              Controlled Environment
            </p>
            {!isMobile && (
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '12px',
                fontWeight: 300,
                color: 'rgba(245,242,238,0.4)',
                letterSpacing: '0.05em',
                lineHeight: '18px',
              }}>
                All stages are conducted within our internal systems.<br />
                We do not rely on third-party analytical platforms.<br />
                Access to client data is restricted, logged and governed by defined internal protocols.<br />
                Where appropriate, supervised internal AI workflows support review accuracy without external data exposure.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
