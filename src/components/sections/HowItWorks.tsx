import React from 'react';
interface Step {
  number: string;
  text: string;
}
interface StepColumnProps {
  label: string;
  steps: Step[];
  side: 'left' | 'right';
}
function StepColumn({ label, steps, side }: StepColumnProps): JSX.Element {
  return (
    <div
      className={side === 'left' ? 'track-divider' : ''}
      style={{
        padding: '0 56px'
      }}
      data-reveal
      data-reveal-delay={side === 'right' ? '150' : '0'}>

      <span
        className="section-label"
        style={{
          marginBottom: '40px'
        }}>

        {label}
      </span>

      {steps.map((step, i) =>
      <div key={i} className="step-item">
          <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '24px'
          }}>

            <span
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '42px',
              fontWeight: 300,
              color: 'rgba(201,168,76,0.28)',
              lineHeight: 1,
              flexShrink: 0,
              minWidth: '52px'
            }}>

              {step.number}
            </span>
            <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px',
              fontWeight: 300,
              color: 'rgba(245,242,238,0.65)',
              lineHeight: 1.75,
              paddingTop: '8px'
            }}>

              {step.text}
            </p>
          </div>
        </div>
      )}
    </div>);

}
export function HowItWorks(): JSX.Element {
  const investorSteps: Step[] = [
  {
    number: '01',
    text: 'Submit your investor profile for review. Qualification is assessed against applicable regulatory standards.'
  },
  {
    number: '02',
    text: 'Receive curated project allocations matched to your mandate, risk profile, and capital horizon.'
  },
  {
    number: '03',
    text: 'Review deal documentation and commit capital on-chain through the Kinari infrastructure.'
  },
  {
    number: '04',
    text: 'Monitor your portfolio in real time and access secondary liquidity as it becomes available.'
  }];

  const developerSteps: Step[] = [
  {
    number: '01',
    text: 'Submit your project for initial assessment. Preliminary review completed within five business days.'
  },
  {
    number: '02',
    text: "Complete due diligence and compliance onboarding with Kinari's specialist team."
  },
  {
    number: '03',
    text: "Structure your token offering with Kinari's infrastructure and legal framework."
  },
  {
    number: '04',
    text: 'Launch to qualified investors and close your capital raise through a managed process.'
  }];

  return (
    <section
      style={{
        backgroundColor: '#0d0d0d',
        padding: '128px 0'
      }}>

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>

        {/* Header */}
        <div
          style={{
            padding: '0 56px',
            marginBottom: '80px'
          }}
          data-reveal>

          <span className="section-label">The Process</span>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(36px, 4.5vw, 56px)',
              fontWeight: 300,
              color: '#F5F2EE',
              lineHeight: 1.05,
              letterSpacing: '-0.025em'
            }}>

            Structured for precision.
          </h2>
        </div>

        {/* Two columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 0
          }}>

          <StepColumn
            label="Investor Track"
            steps={investorSteps}
            side="left" />

          <StepColumn
            label="Developer Track"
            steps={developerSteps}
            side="right" />

        </div>
      </div>
    </section>);

}