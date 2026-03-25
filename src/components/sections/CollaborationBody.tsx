import React from 'react';
import collabVideo from '../../assets/images/in-collab-video.mp4';

export function CollaborationBody(): JSX.Element {
  return (
    <section
      style={{
        padding: '128px 0',
        borderTop: '1px solid rgba(245,242,238,0.06)',
        background: 'linear-gradient(180deg, #0A0A0A 3.4%, rgba(17,17,17,0.2) 34%), linear-gradient(0deg, #0A0A0A 1.4%, rgba(17,17,17,0.2) 45%), linear-gradient(90deg, #111 0%, #111 100%)',
      }}>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 56px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}>

        {/* Left column */}
        <div data-reveal>
          <span className="section-label" style={{ marginBottom: '40px', fontWeight: 500 }}>Collaboration</span>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(36px, 4vw, 56px)',
              fontWeight: 300,
              color: '#F5F2EE',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '40px',
            }}>
            In Collaboration with MMLaw
          </h2>

          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '15px',
              fontWeight: 300,
              color: 'rgba(245,242,238,0.6)',
              lineHeight: '20px',
              marginBottom: '16px',
            }}>
            MM Intelligence operates as a specialist governance and technical capability. Where a mandate requires legal structuring, tax analysis or legal certification, those elements are led by MMLaw.
          </p>

          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '15px',
              fontWeight: 300,
              color: 'rgba(245,242,238,0.6)',
              lineHeight: '20px',
              marginBottom: '48px',
            }}>
            Our work is coordinated to ensure that operational, technical and legal aspects align within a structured and coherent framework.
          </p>

          <a
            href="https://mmlaw.global"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              border: '1px solid rgba(245,242,238,0.14)',
              padding: '10px 20px',
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '10px',
              fontWeight: 300,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(245,242,238,0.45)',
              textDecoration: 'none',
              borderRadius: '1px',
              transition: 'border-color 0.3s ease, color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = 'rgba(201,168,76,0.5)';
              el.style.color = 'rgba(201,168,76,0.8)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = 'rgba(245,242,238,0.14)';
              el.style.color = 'rgba(245,242,238,0.45)';
            }}>
            Learn about MMLaw →
          </a>
        </div>

        {/* Right column — video */}
        <div
          data-reveal
          data-reveal-delay="200"
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div
            style={{
              width: '100%',
              maxWidth: '504px',
              aspectRatio: '504/420',
              borderRadius: '2px',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(245,242,238,0.08)',
            }}>

            {/* Corner labels */}
            <span style={{
              position: 'absolute', top: '24px', left: '24px', zIndex: 2,
              fontFamily: "'Montserrat', sans-serif", fontSize: '9px', fontWeight: 300,
              letterSpacing: '0.18em', textTransform: 'uppercase', color: '#75622f',
            }}>
              digital
            </span>
            <span style={{
              position: 'absolute', top: '24px', right: '24px', zIndex: 2,
              fontFamily: "'Montserrat', sans-serif", fontSize: '9px', fontWeight: 300,
              letterSpacing: '0.18em', textTransform: 'uppercase', color: '#75622f',
              textAlign: 'right',
            }}>
              tax
            </span>
            <span style={{
              position: 'absolute', bottom: '24px', left: '24px', zIndex: 2,
              fontFamily: "'Montserrat', sans-serif", fontSize: '9px', fontWeight: 300,
              letterSpacing: '0.18em', textTransform: 'uppercase', color: '#75622f',
            }}>
              security
            </span>
            <span style={{
              position: 'absolute', bottom: '24px', right: '24px', zIndex: 2,
              fontFamily: "'Montserrat', sans-serif", fontSize: '9px', fontWeight: 300,
              letterSpacing: '0.18em', textTransform: 'uppercase', color: '#75622f',
              textAlign: 'right',
            }}>
              mmlaw
            </span>

            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}>
              <source src={collabVideo} type="video/mp4" />
            </video>

            {/* Dark overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(10,10,10,0.8)',
                zIndex: 1,
                pointerEvents: 'none',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
