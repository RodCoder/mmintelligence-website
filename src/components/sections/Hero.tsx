import React, { useEffect, useRef, useState } from 'react';

const TOTAL_FRAMES = 90;
const frames = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
  const num = String(i + 1).padStart(3, '0');
  return new URL(`../../assets/images/vault-scroll-animation/ezgif-frame-${num}.png`, import.meta.url).href;
});

export function Hero(): JSX.Element {
  const bgRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    frames.forEach(src => { const img = new Image(); img.src = src; });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.min(1, Math.max(0, scrolled / totalScrollable));

      setFrameIndex(Math.min(TOTAL_FRAMES - 1, Math.floor(progress * TOTAL_FRAMES)));

      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${scrolled * 0.08}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRequestAccess = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={containerRef} style={{ height: '220vh', backgroundColor: '#101010' }}>
      <section
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          minHeight: '700px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#101010'
        }}>

        {/* Content */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1440px',
          width: '100%',
          margin: '0 auto',
          display: 'flex',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 56px',
          gap: '0'
        }}>
          <div style={{ width: '55%' }}>
            {/* Main headline */}
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 300,
                color: '#F5F2EE',
                lineHeight: 1.0,
                letterSpacing: '-0.03em',
                marginBottom: '28px',
                maxWidth: '820px',
                fontSize: 'clamp(48px, 6.5vw, 88px)'
              }}>
              Intelligence for Digital and Traditional Assets
            </h1>

            {/* Subline */}
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '18px',
                fontWeight: 300,
                color: 'rgba(245,242,238,0.5)',
                letterSpacing: '0.04em',
                marginBottom: '56px',
                maxWidth: '800px',
                lineHeight: 1.6
              }}>
              MM Intelligence provides technical evidencing, cybersecurity assurance,
              and operational governance support for high-value digital wealth environments.
              We deliver a partner-led work where outcomes depend on judgement, negotiation,
              and accountability. supported by controlled internal tooling where it improves
              rigour and confidentiality.
            </p>

            {/* CTA */}
            <button className="kinari-btn" onClick={handleRequestAccess}>
              Start a confidential discussion
            </button>
          </div>

          {/* Frame animation */}
          <div style={{ width: '45%', padding: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src={frames[frameIndex]}
              alt=""
              style={{
                width: '100%',
                maxWidth: '520px',
                height: 'auto',
                display: 'block',
                userSelect: 'none',
                pointerEvents: 'none'
              }}
              draggable={false}
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '48px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px'
          }}>
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '9px',
              letterSpacing: '0.25em',
              color: 'rgba(245,242,238,0.2)',
              textTransform: 'uppercase'
            }}>
            Scroll
          </span>
          <div
            style={{
              width: '1px',
              height: '48px',
              background: 'rgba(245,242,238,0.12)',
              position: 'relative',
              overflow: 'hidden'
            }}>
            <div
              className="scroll-dot"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '1px',
                height: '16px',
                background: 'rgba(201,168,76,0.6)'
              }} />
          </div>
        </div>
      </section>
    </div>
  );
}
