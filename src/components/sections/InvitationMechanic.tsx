import React, { useState } from 'react';
export function InvitationMechanic(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && name.trim()) {
      setSubmitted(true);
      console.log('Enquiry submitted:', {
        name,
        email,
        message
      });
    }
  };
  return (
    <section
      id="contact"
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

          Contact
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

          Discuss a Mandate
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

          If you represent a family office, institutional client or professional
          adviser requiring structured technical intelligence for digital asset
          governance, we welcome your enquiry.
        </p>

        {!submitted ?
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>

            <input
            type="text"
            className="kinari-input"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required />

            <input
            type="email"
            className="kinari-input"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />

            <textarea
            className="kinari-input"
            placeholder="Message (optional)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            style={{
              resize: 'none'
            }} />

            <button
            type="submit"
            className="kinari-btn"
            style={{
              width: '100%',
              textAlign: 'center',
              marginTop: '8px'
            }}>

              Submit Enquiry
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

              Your enquiry has been received.
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

              We will respond within two business days.
            </p>
          </div>
        }
      </div>
    </section>);

}