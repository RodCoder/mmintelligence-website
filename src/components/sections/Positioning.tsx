import React from 'react';
export function Positioning(): JSX.Element {
  return (
    <section
      style={{
        backgroundColor: '#0A0A0A',
        padding: '128px 0'
      }}>

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 48px',
          display: 'flex',
          justifyContent: 'flex-end'
        }}>

        <div
          style={{
            maxWidth: '680px',
            width: '100%'
          }}
          data-reveal>

          <span className="section-label">The Platform</span>

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

            Kinari is a closed-access platform for the allocation of capital
            into large-scale real estate development — commercial, mixed-use,
            hospitality, and logistics assets at institutional scale. We do not
            aggregate retail demand. We connect qualified capital with projects
            that have already cleared a rigorous vetting process. Ownership is
            structured on-chain, providing investors with transparency,
            transferability, and access to secondary liquidity. Developers gain
            a capital channel that operates at the speed and sophistication
            their projects require.
          </p>

          <div
            style={{
              width: '56px',
              height: '1px',
              background: 'rgba(201,168,76,0.35)'
            }} />

        </div>
      </div>
    </section>);

}