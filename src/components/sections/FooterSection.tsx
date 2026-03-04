import React from 'react';
export function FooterSection(): JSX.Element {
  return (
    <footer
      style={{
        backgroundColor: '#050505',
        borderTop: '1px solid rgba(245,242,238,0.05)',
        padding: '48px 0 0'
      }}>

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 56px'
        }}>

        {/* Top row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: '40px',
            flexWrap: 'wrap',
            gap: '24px'
          }}>

          {/* Wordmark */}
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '13px',
              fontWeight: 300,
              letterSpacing: '0.32em',
              color: 'rgba(245,242,238,0.35)',
              textTransform: 'uppercase'
            }}>

            KINARI
          </span>

          {/* Legal links */}
          <nav
            style={{
              display: 'flex',
              gap: '32px',
              alignItems: 'center'
            }}>

            {['Privacy Policy', 'Terms of Use', 'Regulatory Disclosures'].map(
              (link) =>
              <a
                key={link}
                href="#"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '11px',
                  fontWeight: 300,
                  letterSpacing: '0.1em',
                  color: 'rgba(245,242,238,0.22)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  ;(e.target as HTMLAnchorElement).style.color =
                  'rgba(245,242,238,0.5)';
                }}
                onMouseLeave={(e) => {
                  ;(e.target as HTMLAnchorElement).style.color =
                  'rgba(245,242,238,0.22)';
                }}>

                  {link}
                </a>

            )}
          </nav>

          {/* LinkedIn only */}
          <a
            href="#"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '11px',
              fontWeight: 300,
              letterSpacing: '0.12em',
              color: 'rgba(245,242,238,0.22)',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => {
              ;(e.target as HTMLAnchorElement).style.color =
              'rgba(245,242,238,0.5)';
            }}
            onMouseLeave={(e) => {
              ;(e.target as HTMLAnchorElement).style.color =
              'rgba(245,242,238,0.22)';
            }}>

            LinkedIn
          </a>
        </div>

        {/* Divider */}
        <div
          style={{
            height: '1px',
            background: 'rgba(245,242,238,0.05)',
            margin: '0 -56px'
          }} />


        {/* Legal disclaimer */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '10px',
            fontWeight: 300,
            color: 'rgba(245,242,238,0.18)',
            lineHeight: 1.75,
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto',
            padding: '28px 0 40px'
          }}>

          Kinari is not a licensed investment adviser. Nothing on this platform
          constitutes investment advice. Investments in real estate development
          projects carry significant risk, including loss of capital. Past
          performance is not indicative of future results. Access is restricted
          to qualified investors under applicable law. Kinari operates in
          compliance with applicable securities regulations in each jurisdiction
          of operation.
        </p>
      </div>
    </footer>);

}