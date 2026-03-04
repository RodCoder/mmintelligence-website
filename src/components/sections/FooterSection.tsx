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
              letterSpacing: '0.32em',
              color: 'rgba(245,242,238,0.35)',
              textTransform: 'uppercase'
            }}>

            <span
              style={{
                fontWeight: 500
              }}>

              MM
            </span>{' '}
            <span
              style={{
                fontWeight: 300
              }}>

              INTELLIGENCE
            </span>
          </span>

          {/* Legal links */}
          <nav
            style={{
              display: 'flex',
              gap: '32px',
              alignItems: 'center'
            }}>

            {['Privacy Policy', 'Terms of Use'].map((link) =>
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

          {/* MMLaw link */}
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

            Legal Advisory: MMLaw
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
        <div
          style={{
            padding: '40px 0 48px',
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto'
          }}>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '10px',
              fontWeight: 300,
              color: 'rgba(245,242,238,0.18)',
              lineHeight: 1.75,
              marginBottom: '16px'
            }}>

            MM Intelligence provides specialised technical intelligence,
            forensic analysis and cybersecurity support within a
            multidisciplinary professional environment. Technical services do
            not constitute legal, financial or regulatory advice. Legal advisory
            services are delivered independently by qualified legal
            professionals where required. MMLaw is an independent legal practice
            operating under licence of the MMLaw trademark. Any legal engagement
            is governed by separate terms issued by the relevant legal entity.
          </p>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '10px',
              fontWeight: 300,
              color: 'rgba(245,242,238,0.18)',
              lineHeight: 1.75,
              marginBottom: '24px'
            }}>

            Analysis is conducted within controlled professional environments
            designed to prioritise confidentiality, data minimisation and
            operational security.
          </p>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '10px',
              fontWeight: 300,
              color: 'rgba(245,242,238,0.12)',
              letterSpacing: '0.05em'
            }}>

            © MM Intelligence 2026. All rights reserved.
          </p>
        </div>
      </div>
    </footer>);

}