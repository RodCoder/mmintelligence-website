import React, { useEffect, useRef } from 'react';
export function Hero(): JSX.Element {
  const bgRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const scrollY = window.scrollY;
        bgRef.current.style.transform = `translateY(${scrollY * 0.28}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleRequestAccess = () => {
    const el = document.getElementById('invitation');
    if (el)
    el.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return (
    <section
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '700px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0A0A0A'
      }}>

      {/* Parallax background */}
      <div
        ref={bgRef}
        style={{
          position: 'absolute',
          inset: '-20%',
          background: `
            linear-gradient(135deg, #0c0c0c 0%, #141414 35%, #0e0e0e 60%, #0a0a0a 100%)
          `,
          willChange: 'transform'
        }} />


      {/* Radial gold glow — very subtle */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
          'radial-gradient(ellipse 75% 55% at 50% 38%, rgba(201,168,76,0.045) 0%, transparent 68%)',
          pointerEvents: 'none'
        }} />


      {/* Architectural texture lines */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(245,242,238,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,242,238,0.015) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          pointerEvents: 'none'
        }} />


      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          maxWidth: '900px',
          padding: '0 32px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>

        {/* Brand mark */}
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '11px',
            fontWeight: 300,
            letterSpacing: '0.38em',
            color: 'rgba(201,168,76,0.85)',
            textTransform: 'uppercase',
            marginBottom: '48px',
            display: 'block'
          }}>

          KINARI
        </span>

        {/* Main headline */}
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(48px, 7.5vw, 100px)',
            fontWeight: 300,
            color: '#F5F2EE',
            lineHeight: 1.0,
            letterSpacing: '-0.03em',
            marginBottom: '28px',
            maxWidth: '820px'
          }}>

          Where serious capital meets serious projects.
        </h1>

        {/* Subline */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '15px',
            fontWeight: 300,
            color: 'rgba(245,242,238,0.5)',
            letterSpacing: '0.1em',
            marginBottom: '56px',
            textTransform: 'uppercase'
          }}>

          Institutional real estate. On-chain ownership. By invitation.
        </p>

        {/* CTA */}
        <button className="kinari-btn" onClick={handleRequestAccess}>
          Request Access
        </button>
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
            fontFamily: "'Inter', sans-serif",
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
    </section>);

}