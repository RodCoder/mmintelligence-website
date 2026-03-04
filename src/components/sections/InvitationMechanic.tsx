import React, { useState } from 'react';
export function InvitationMechanic(): JSX.Element {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      console.log('Application submitted:', email);
    }
  };
  return (
    <section
      id="invitation"
      style={{
        backgroundColor: '#0A0A0A',
        padding: '160px 0',
        borderTop: '1px solid rgba(245,242,238,0.06)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>

      <div
        className="glass-panel"
        style={{
          maxWidth: '640px',
          width: '100%',
          margin: '0 48px',
          padding: '72px 64px',
          textAlign: 'center',
          borderRadius: '2px'
        }}
        data-reveal>

        <span
          className="section-label"
          style={{
            textAlign: 'center',
            display: 'block'
          }}>

          Access
        </span>

        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(34px, 4.5vw, 56px)',
            fontWeight: 300,
            color: '#F5F2EE',
            lineHeight: 1.05,
            letterSpacing: '-0.025em',
            marginBottom: '28px'
          }}>

          Kinari is not open to the public.
        </h2>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '15px',
            fontWeight: 300,
            color: 'rgba(245,242,238,0.5)',
            lineHeight: 1.85,
            maxWidth: '460px',
            margin: '0 auto 48px'
          }}>

          Access is extended by invitation or through a reviewed application. If
          you represent qualified capital or a development project of
          institutional scale, you may submit your details for consideration.
        </p>

        {!submitted ?
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>

            <input
            type="email"
            className="kinari-input"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />

            <button
            type="submit"
            className="kinari-btn"
            style={{
              width: '100%',
              textAlign: 'center'
            }}>

              Submit for Review
            </button>
          </form> :

        <div
          style={{
            padding: '32px',
            border: '1px solid rgba(201,168,76,0.2)',
            borderRadius: '1px'
          }}>

            <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '20px',
              fontWeight: 300,
              color: 'rgba(201,168,76,0.85)',
              letterSpacing: '0.02em'
            }}>

              Your application has been received.
            </p>
            <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '12px',
              fontWeight: 300,
              color: 'rgba(245,242,238,0.35)',
              marginTop: '12px',
              letterSpacing: '0.05em'
            }}>

              We will be in contact if your profile meets our current criteria.
            </p>
          </div>
        }

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '11px',
            fontWeight: 300,
            color: 'rgba(245,242,238,0.22)',
            marginTop: '20px',
            lineHeight: 1.6
          }}>

          Submission does not guarantee access. All applications are reviewed
          individually.
        </p>
      </div>
    </section>);

}