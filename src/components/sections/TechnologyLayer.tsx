import React from 'react';
export function TechnologyLayer(): JSX.Element {
  return (
    <section
      style={{
        backgroundColor: '#0d0d0d',
        padding: '128px 0',
        borderTop: '1px solid rgba(245,242,238,0.06)'
      }}>

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 56px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center'
        }}>

        {/* Left: Copy */}
        <div data-reveal>
          <span className="section-label">Infrastructure</span>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(36px, 4.5vw, 58px)',
              fontWeight: 300,
              color: '#F5F2EE',
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              marginBottom: '32px'
            }}>

            Ownership, recorded.
          </h2>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '15px',
              fontWeight: 300,
              color: 'rgba(245,242,238,0.6)',
              lineHeight: 1.85,
              maxWidth: '460px',
              marginBottom: '40px'
            }}>

            Kinari uses distributed ledger infrastructure to record and transfer
            ownership positions. This is not a feature — it is the foundation.
            On-chain records eliminate reconciliation risk, provide real-time
            audit capability, and enable ownership transfer without intermediary
            friction. The technology is invisible to the investor. The outcome —
            transparency, portability, and liquidity — is not.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px'
            }}>

            {[
            'On-Chain Ownership Records',
            'Secondary Market Infrastructure',
            'Regulatory-Compliant Token Structure'].
            map((tag) =>
            <span key={tag} className="capability-tag">
                {tag}
              </span>
            )}
          </div>
        </div>

        {/* Right: Abstract geometric visual */}
        <div
          data-reveal
          data-reveal-delay="200"
          className="geo-grid glass-panel"
          style={{
            height: '420px',
            borderRadius: '2px',
            position: 'relative'
          }}>

          {/* Central accent element */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1
            }}>

            <div
              style={{
                width: '120px',
                height: '120px',
                border: '1px solid rgba(201,168,76,0.2)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>

              <div
                style={{
                  width: '72px',
                  height: '72px',
                  border: '1px solid rgba(201,168,76,0.12)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>

                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    background: 'rgba(201,168,76,0.5)',
                    borderRadius: '50%'
                  }} />

              </div>
              {/* Orbit lines */}
              {[0, 60, 120, 180, 240, 300].map((deg) =>
              <div
                key={deg}
                style={{
                  position: 'absolute',
                  width: '1px',
                  height: '60px',
                  background:
                  'linear-gradient(to bottom, rgba(201,168,76,0.15), transparent)',
                  transformOrigin: 'bottom center',
                  transform: `rotate(${deg}deg) translateX(-50%)`,
                  left: '50%',
                  bottom: '50%'
                }} />

              )}
            </div>
          </div>

          {/* Corner labels */}
          {[
          {
            text: 'LEDGER',
            top: '24px',
            left: '24px'
          },
          {
            text: 'CUSTODY',
            top: '24px',
            right: '24px'
          },
          {
            text: 'LIQUIDITY',
            bottom: '24px',
            left: '24px'
          },
          {
            text: 'COMPLIANCE',
            bottom: '24px',
            right: '24px'
          }].
          map((label) =>
          <span
            key={label.text}
            style={{
              position: 'absolute',
              fontFamily: "'Inter', sans-serif",
              fontSize: '9px',
              fontWeight: 300,
              letterSpacing: '0.2em',
              color: 'rgba(201,168,76,0.3)',
              textTransform: 'uppercase',
              zIndex: 2,
              top: label.top,
              left: label.left,
              right: (label as any).right,
              bottom: (label as any).bottom
            }}>

              {label.text}
            </span>
          )}
        </div>
      </div>
    </section>);

}