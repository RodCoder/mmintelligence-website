import React from 'react';
interface TrackProps {
  side: 'left' | 'right';
  label: string;
  headline: string;
  propositions: string[];
  ctaText: string;
}
function Track({
  side,
  label,
  headline,
  propositions,
  ctaText
}: TrackProps): JSX.Element {
  return (
    <div
      className={side === 'left' ? 'track-divider' : ''}
      style={{
        padding: '0 56px',
        display: 'flex',
        flexDirection: 'column'
      }}
      data-reveal
      data-reveal-delay={side === 'right' ? '150' : '0'}>

      <span className="section-label">{label}</span>

      <h3
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(28px, 3vw, 38px)',
          fontWeight: 300,
          color: '#F5F2EE',
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
          marginBottom: '40px',
          maxWidth: '420px'
        }}>

        {headline}
      </h3>

      <div
        style={{
          flex: 1,
          marginBottom: '40px'
        }}>

        {propositions.map((prop, i) =>
        <div key={i} className="value-prop">
            <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px',
              fontWeight: 300,
              color: 'rgba(245,242,238,0.7)',
              lineHeight: 1.75
            }}>

              {prop}
            </p>
          </div>
        )}
      </div>

      <button
        className="kinari-btn"
        style={{
          alignSelf: 'flex-start'
        }}>

        {ctaText}
      </button>
    </div>);

}
export function DualTrack(): JSX.Element {
  return (
    <section
      style={{
        backgroundColor: '#0A0A0A',
        padding: '128px 0',
        borderTop: '1px solid rgba(245,242,238,0.06)',
        borderBottom: '1px solid rgba(245,242,238,0.06)'
      }}>

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 0'
        }}>

        {/* Section header */}
        <div
          style={{
            padding: '0 56px',
            marginBottom: '72px'
          }}
          data-reveal>

          <span className="section-label">Two Tracks. One Platform.</span>
        </div>

        {/* Two columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 0
          }}>

          <Track
            side="left"
            label="For Investors"
            headline="Access the asset class that was never available to you."
            propositions={[
            'Curated deal flow from institutional-grade development projects, vetted before they reach the platform.',
            'Fractional entry points that do not compromise on asset quality or structural integrity.',
            'On-chain ownership records providing real-time transparency and a complete audit trail.',
            'Secondary market liquidity mechanisms — your position is not locked until project completion.']
            }
            ctaText="Apply to Invest" />

          <Track
            side="right"
            label="For Developers"
            headline="Capital that moves at the pace your project demands."
            propositions={[
            'Direct access to a curated pool of qualified investors who understand development-stage risk.',
            'Tokenization infrastructure, compliance layer, and deal structuring — without building it yourself.',
            'Raise capital without diluting project control or restructuring your existing ownership.',
            'Global investor reach through a single, regulated channel.']
            }
            ctaText="List Your Project" />

        </div>
      </div>
    </section>);

}