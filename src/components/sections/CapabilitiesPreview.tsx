import React, { useState } from 'react';
import { useBreakpoint } from '../hooks/useBreakpoint';

interface Capability {
  title: string;
  subtitle: string;
  body: string;
  details: {
    intro: string;
    heading: string;
    items: string[];
    closing: string;
  };
}

const capabilitiesRow1: Capability[] = [
  {
    title: 'Operation and Cross-Border Platform Support',
    subtitle: 'Governance Across Jurisdictions',
    body: 'International holding and fiduciary structures require operational discipline beyond legal documentation.',
    details: {
      intro: 'International holding and fiduciary structures require operational discipline beyond legal documentation.',
      heading: 'We support:',
      items: [
        'Oversight routines for cross-border structures',
        'Documentation discipline within holding platforms',
        'Governance coordination between technical and legal workstreams',
        'Organised reporting standards for family-controlled entities',
      ],
      closing: 'Legal structuring and legal advice are delivered by MMLaw where required. Our role is operational governance and discipline.',
    },
  },
  {
    title: 'Business Structural Protection',
    subtitle: 'Organised and Disciplined Asset Structures',
    body: 'We support the organisation of holding structures so assets operate under defined governance rather than informal arrangements.',
    details: {
      intro: 'We support the organisation of holding structures so assets operate under defined governance rather than informal control.',
      heading: 'This may include:',
      items: [
        'Clarifying how digital assets sit within existing companies',
        'Aligning operational routines with holding structures',
        'Organising oversight standards within family-controlled entities',
        'Coordinating governance with legal and tax architecture led by MMLaw',
      ],
      closing: 'The objective is disciplined structure, not complexity.',
    },
  },
  {
    title: 'Digital Asset Forensics and Evidencing',
    subtitle: 'Clear and Defensible Records',
    body: 'Digital asset histories are often fragmented across exchanges, wallets and time periods. We organise this information into structured, defensible records.',
    details: {
      intro: 'Digital asset histories are often fragmented across exchanges, wallets and time periods. We organise this information into structured, coherent records suitable for institutional and coordinated legal processes.',
      heading: 'This may include:',
      items: [
        'Reconstructing historic transactions across multiple wallets',
        'Clarifying the origin and movement of assets over time',
        'Organising transaction history prior to exchange onboarding',
        'Preparing structured records ahead of legal certification or reporting',
      ],
      closing: 'The objective is clarity and defensibility, not disclosure beyond what is necessary.',
    },
  },
  {
    title: 'Digital Wealth Off-Ramp and Institutional Preparation',
    subtitle: 'Prepared for Institutional Review',
    body: 'Digital wealth often requires preparation before it can interact with banks, exchanges or institutional counterparties.',
    details: {
      intro: 'Digital wealth often requires preparation before it can interact with banks, exchanges or traditional investment platforms.',
      heading: 'We assist in organising:',
      items: [
        'Structured transaction history prior to onboarding',
        'Governance documentation requested by counterparties',
        'Clarified asset flows for banking review',
        'Coordinated preparation before capital deployment',
      ],
      closing: 'This allows digital wealth to function within institutional environments with reduced friction.',
    },
  },
];

const capabilitiesRow2: Capability[] = [
  {
    title: 'Wallet Architecture and Governance',
    subtitle: 'Structured Wallet Environments',
    body: 'Digital wealth is frequently held in informal arrangements that lack governance discipline. We design wallet environments with structured access, segregation and oversight.',
    details: {
      intro: 'Digital wealth is frequently held in informal arrangements that lack governance discipline. We design wallet environments organised by purpose and control.',
      heading: 'This may include:',
      items: [
        'Separating long-term holdings from liquidity and operational capital',
        'Defining approval standards for asset movement',
        'Introducing structured access roles',
        'Establishing documented oversight routines',
      ],
      closing: 'The result is an environment that is easier to manage, supervise and review over time.',
    },
  },
  {
    title: 'Cybersecurity Assurance',
    subtitle: 'Strengthened Control and Reduced Exposure',
    body: 'Digital wealth environments can be vulnerable due to informal access arrangements.',
    details: {
      intro: 'Digital wealth environments can be vulnerable due to informal access arrangements.',
      heading: 'We review:',
      items: [
        'Access pathways',
        'Key control points',
        'Exposure through operational habits',
        'Areas of unnecessary visibility',
      ],
      closing: 'The focus is practical protection and reduced operational risk.',
    },
  },
  {
    title: 'Controlled Technical Environment',
    subtitle: 'Internal Handling of Sensitive Information',
    body: 'All assessments are conducted within our internal technical environment. We do not rely on external analytical platforms.',
    details: {
      intro: 'All assessments are conducted within our internal technical environment.',
      heading: '',
      items: [],
      closing: 'We do not rely on external analytical platforms. Sensitive data is processed internally under defined access controls, logging protocols and confidentiality standards. Access to information is limited to designated personnel under structured supervision.',
    },
  },
  {
    title: 'AI-Supported Internal Analysis',
    subtitle: 'Internal AI, Controlled Environment',
    body: 'Where appropriate, internal AI workflows are used to assist in organising and reviewing large data sets.',
    details: {
      intro: 'Where appropriate, internal AI workflows are used to assist in organising and reviewing large data sets.',
      heading: '',
      items: [],
      closing: 'These tools operate exclusively within our controlled systems. Client information is not uploaded to public or third-party AI platforms. AI supports review discipline. It does not replace professional judgement.',
    },
  },
];

function CapabilityCard({ cap, onOpen, isMobile }: { cap: Capability; onOpen: () => void; isMobile: boolean }) {
  return (
    <div
      style={{
        background: '#0E0E0E',
        border: '1px solid rgba(245,242,238,0.08)',
        padding: isMobile ? '24px 20px' : '32px 37px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        justifyContent: 'center',
      }}>
      <div style={{ minHeight: '64px' }}>
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#75622f',
            lineHeight: '16.5px',
            marginBottom: '2px',
          }}>
          {cap.title}
        </p>
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#75622f',
            lineHeight: '16.5px',
          }}>
          {cap.subtitle}
        </p>
      </div>
      <p
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '12px',
          fontWeight: 300,
          color: 'rgba(245,242,238,0.8)',
          lineHeight: '18px',
          minHeight: '54px',
        }}>
        {cap.body}
      </p>
      <p
        onClick={onOpen}
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '12px',
          fontWeight: 300,
          color: 'rgba(245,242,238,0.65)',
          textAlign: 'right',
          marginTop: '8px',
          cursor: 'pointer',
          transition: 'color 0.3s ease',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(117,98,47,0.8)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(245,242,238,0.65)'; }}>
        <span style={{ textDecoration: 'underline' }}>Know more </span>
        <span>→</span>
      </p>
    </div>
  );
}

function DetailModal({ cap, onClose, isMobile }: { cap: Capability; onClose: () => void; isMobile: boolean }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: 'rgba(10,10,10,0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isMobile ? '16px' : '40px',
        cursor: 'pointer',
      }}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#111111',
          border: '1px solid rgba(245,242,238,0.1)',
          borderRadius: isMobile ? '12px' : '2px',
          padding: isMobile ? '32px 24px' : '56px 64px',
          maxWidth: isMobile ? '100%' : '640px',
          width: '100%',
          maxHeight: '80vh',
          overflowY: 'auto',
          cursor: 'default',
          position: 'relative',
        }}>

        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            background: 'none',
            border: 'none',
            color: 'rgba(245,242,238,0.4)',
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '10px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(245,242,238,0.8)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(245,242,238,0.4)'; }}>
          × Close
        </button>

        {/* Title */}
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '12px',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#75622f',
          lineHeight: '16.5px',
          marginBottom: '4px',
        }}>
          {cap.title}
        </p>
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '12px',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#75622f',
          lineHeight: '16.5px',
          marginBottom: '24px',
        }}>
          {cap.subtitle}
        </p>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(245,242,238,0.08)', marginBottom: '24px' }} />

        {/* Intro */}
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '14px',
          fontWeight: 300,
          color: 'rgba(245,242,238,0.75)',
          lineHeight: '22px',
          marginBottom: '20px',
        }}>
          {cap.details.intro}
        </p>

        {/* List heading + items */}
        {cap.details.heading && (
          <>
            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '13px',
              fontWeight: 500,
              color: 'rgba(245,242,238,0.6)',
              lineHeight: '20px',
              marginBottom: '12px',
            }}>
              {cap.details.heading}
            </p>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              marginBottom: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}>
              {cap.details.items.map((item, i) => (
                <li
                  key={i}
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '13px',
                    fontWeight: 300,
                    color: 'rgba(245,242,238,0.65)',
                    lineHeight: '20px',
                    paddingLeft: '16px',
                    position: 'relative',
                  }}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    color: 'rgba(117,98,47,0.5)',
                  }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
          </>
        )}

        {/* Closing */}
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '13px',
          fontWeight: 300,
          color: 'rgba(245,242,238,0.5)',
          lineHeight: '20px',
          fontStyle: 'italic',
        }}>
          {cap.details.closing}
        </p>
      </div>
    </div>
  );
}

export function CapabilitiesPreview(): JSX.Element {
  const [activeCapability, setActiveCapability] = useState<Capability | null>(null);
  const { isMobile, isTablet } = useBreakpoint();
  const cols = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)';
  const px = isMobile ? '0 20px' : isTablet ? '0 32px' : '0 56px';

  return (
    <>
      <section
        style={{
          padding: isMobile ? '64px 0' : '128px 0',
          background: 'linear-gradient(180deg, #111111 0%, #0A0A0A 100%)',
        }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: px,
          }}>

          {/* Section label */}
          <span
            className="section-label"
            data-reveal
            style={{ marginBottom: '32px', fontWeight: 500 }}>
            What we actually do
          </span>

          {/* Row 1 */}
          <div
            data-reveal
            data-reveal-delay="100"
            style={{
              display: 'grid',
              gridTemplateColumns: cols,
              gap: '1px',
              background: 'rgba(117,98,47,0.4)',
              marginBottom: '1px',
            }}>
            {capabilitiesRow1.map((cap, i) => (
              <CapabilityCard key={i} cap={cap} isMobile={isMobile} onOpen={() => setActiveCapability(cap)} />
            ))}
          </div>

          {/* Row 2 */}
          <div
            data-reveal
            data-reveal-delay="200"
            style={{
              display: 'grid',
              gridTemplateColumns: cols,
              gap: '1px',
              background: 'rgba(117,98,47,0.4)',
              marginBottom: '40px',
            }}>
            {capabilitiesRow2.map((cap, i) => (
              <CapabilityCard key={i} cap={cap} isMobile={isMobile} onOpen={() => setActiveCapability(cap)} />
            ))}
          </div>

          {/* Footer note */}
          <p
            data-reveal
            data-reveal-delay="300"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '12px',
              fontWeight: 300,
              color: 'rgba(245,242,238,0.4)',
              letterSpacing: '0.05em',
            }}>
            Engagements requiring legal advice or certification are delivered under MMLaw's direction.
          </p>
        </div>
      </section>

      {/* Detail modal */}
      {activeCapability && (
        <DetailModal cap={activeCapability} isMobile={isMobile} onClose={() => setActiveCapability(null)} />
      )}
    </>
  );
}
