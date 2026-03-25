import React from 'react';
import { useBreakpoint } from '../hooks/useBreakpoint';

interface TeamMember {
  role: string;
  description: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    role: 'Senior Blockchain Architect',
    description: 'Senior developer with extensive experience in blockchain infrastructure, smart contracts and digital asset systems. Responsible for technical architecture, forensic reconstruction and internal analytical tooling.',
    imageUrl: 'https://www.figma.com/api/mcp/asset/4289dfd3-2584-42d3-bf44-d2809cb72e44',
  },
  {
    role: 'Senior Cybersecurity Lead',
    description: 'Experienced cybersecurity professional with a background in high-sensitivity environments. Oversees access discipline, operational risk review and internal security standards.',
    imageUrl: 'https://www.figma.com/api/mcp/asset/1d31e827-ca2d-4ddf-a489-dd76599d098a',
  },
  {
    role: 'Data and Transaction Analyst',
    description: 'Experienced cybersecurity professional with a background in high-sensitivity environments. Oversees access discipline, operational risk review and internal security standards.',
    imageUrl: 'https://www.figma.com/api/mcp/asset/66930745-3dac-49c7-82ef-794ff9b1a0a2',
  },
  {
    role: 'AML/CTF and Compliance Analyst',
    description: 'Focused on governance documentation standards, institutional expectations and alignment with anti-money laundering and counter-terrorist financing frameworks.',
    imageUrl: 'https://www.figma.com/api/mcp/asset/06488a44-ae0d-41da-a3e2-95a5c02025b9',
  },
];

export function TeamCards(): JSX.Element {
  const { isMobile, isTablet } = useBreakpoint();
  const px = isMobile ? '0 20px' : isTablet ? '0 32px' : '0 56px';

  return (
    <section
      style={{
        padding: isMobile ? '64px 0 80px' : '94px 0 128px',
        backgroundColor: '#0A0A0A',
      }}>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: px,
        }}>

        <span
          className="section-label"
          data-reveal
          style={{ textAlign: 'center', display: 'block', marginBottom: isMobile ? '40px' : '64px' }}>
          Team
        </span>

        {/* Grid */}
        <div
          data-reveal
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: '1px',
            background: 'rgba(117,98,47,0.06)',
            marginBottom: isMobile ? '48px' : '80px',
          }}>
          {teamMembers.map((member, i) => (
            <div
              key={i}
              style={{
                background: '#0A0A0A',
                border: '1px solid rgba(245,242,238,0.08)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                padding: '1px',
              }}>
              <div
                style={{
                  width: '100%',
                  aspectRatio: '1',
                  overflow: 'hidden',
                }}>
                <img
                  src={member.imageUrl}
                  alt={member.role}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
              <div
                style={{
                  padding: '0 16px 20px',
                  textAlign: 'center',
                }}>
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: isMobile ? '13px' : '14px',
                    fontWeight: 600,
                    color: '#75622f',
                    lineHeight: '20.8px',
                    marginBottom: '6px',
                    letterSpacing: '0.065em',
                    textTransform: 'uppercase'
                  }}>
                  {member.role}
                </p>
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: isMobile ? '13px' : '14px',
                    fontWeight: 300,
                    color: 'rgba(245,242,238,0.6)',
                    lineHeight: '20.8px',
                    letterSpacing: '0.065em',
                  }}>
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <div
          data-reveal
          style={{ textAlign: 'center', maxWidth: '967px', margin: '0 auto' }}>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: isMobile ? '20px' : '24px',
              fontWeight: 700,
              color: '#F5F2EE',
              lineHeight: isMobile ? '30px' : '38px',
              marginBottom: '8px',
            }}>
            Specialist. Compact. Confidential.
          </p>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: isMobile ? '18px' : '24px',
              fontWeight: 400,
              color: 'rgba(245,242,238,0.7)',
              lineHeight: isMobile ? '28px' : '38px',
              marginBottom: '8px',
            }}>
            MM Intelligence operates with a focused team of senior technical and governance professionals dedicated to the structured oversight of digital and cross-border wealth environments.
          </p>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: isMobile ? '18px' : '24px',
              fontWeight: 400,
              color: 'rgba(245,242,238,0.7)',
              lineHeight: isMobile ? '28px' : '38px',
            }}>
            Professional biographies are intentionally limited. Detailed credentials are shared within formal engagement parameters.
          </p>
        </div>
      </div>
    </section>
  );
}
