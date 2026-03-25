import React from 'react';
import { MMLawCrossLink } from './MMLawCrossLink';

const blocks = [
  {
    num: '01',
    title: 'Forensic Evidencing and Transaction Intelligence',
    body: 'Technical analysis to support structured evidencing and defensible narratives.',
  },
  {
    num: '02',
    title: 'Cybersecurity Assurance',
    body: 'Assessment and remediation planning focused on real-world holding and access pathways.',
  },
  {
    num: '03',
    title: 'Wallet Architecture and Operational Governance',
    body: 'Domain architecture, control design, and operating playbooks aligned to governance requirements.',
  },
  {
    num: '04',
    title: 'Controlled Technical Environment',
    body: 'Internal tooling and disciplined processes designed to reduce unnecessary data exposure.',
  },
];

export function CapabilityBlocks(): JSX.Element {
  return (
    <div>
      {blocks.map((block) => (
        <div
          key={block.num}
          data-reveal
          style={{
            borderTop: '1px solid rgba(245,242,238,0.07)',
            padding: '72px 0',
          }}>
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              padding: '0 56px',
              display: 'flex',
              gap: '64px',
              alignItems: 'flex-start',
            }}>
            {/* Number */}
            <span
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '56px',
                fontWeight: 300,
                color: 'rgba(245,242,238,0.1)',
                lineHeight: 1,
                flexShrink: 0,
                width: '80px',
              }}>
              {block.num}
            </span>

            {/* Content */}
            <div style={{ flex: 1 }}>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(24px, 3vw, 36px)',
                  fontWeight: 300,
                  color: '#F5F2EE',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  marginBottom: '20px',
                }}>
                {block.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '15px',
                  fontWeight: 300,
                  color: 'rgba(245,242,238,0.55)',
                  lineHeight: 1.85,
                  maxWidth: '640px',
                }}>
                {block.body}
              </p>
              <MMLawCrossLink variant="inline" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
