import React, { useState } from 'react';
import contactBgVideo from '../../assets/images/contact-form-video.mp4';
import { useBreakpoint } from '../hooks/useBreakpoint';

export function ContactForm(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { isMobile, isTablet } = useBreakpoint();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Contact form submitted:', { name, email, description });
  };

  return (
    <section
      style={{
        borderTop: '1px solid rgba(245,242,238,0.06)',
        position: 'relative',
        overflow: 'hidden',
        minHeight: isMobile ? 'auto' : '720px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isMobile ? '48px 0' : isTablet ? '64px 0' : '96px 0',
        backgroundColor: '#0A0A0A',
      }}>

      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          pointerEvents: 'none',
        }}>
        <source src={contactBgVideo} type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(10,10,10,0.4)',
          pointerEvents: 'none',
        }} />

      {/* Centered panel */}
      <div
        data-reveal
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: '780px',
          margin: '0 auto',
          padding: isMobile ? '0 16px' : '0 24px',
        }}>

        <div
          style={{
            background: '#111111',
            border: '1px solid rgba(245,242,238,0.08)',
            borderRadius: '2px',
            padding: isMobile ? '32px 20px' : isTablet ? '40px 32px' : '64px',
          }}>

          <span
            className="section-label"
            style={{ textAlign: 'center', display: 'block', marginBottom: '16px' }}>
            Contact
          </span>

          {!submitted ? (
            <>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: isMobile ? 'clamp(28px, 8vw, 36px)' : 'clamp(36px, 4vw, 46px)',
                  fontWeight: 300,
                  color: '#F5F2EE',
                  lineHeight: 1.2,
                  letterSpacing: '-0.025em',
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  marginBottom: '40px',
                }}>
                Start a confidential discussion
              </h2>

              <form
                onSubmit={handleSubmit}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}>
                <input
                  type="text"
                  className="kinari-input"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  className="kinari-input"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                  className="kinari-input"
                  placeholder="Message (optional)"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={5}
                  style={{ resize: 'none' }}
                />
                <button
                  type="submit"
                  style={{
                    marginTop: '8px',
                    width: '100%',
                    background: '#111',
                    border: '1px solid rgba(117,98,47,0.3)',
                    color: '#F5F2EE',
                    padding: '14px',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '12px',
                    fontWeight: 400,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    borderRadius: '1px',
                    transition: 'border-color 0.3s ease',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget).style.borderColor = 'rgba(201,168,76,0.6)'; }}
                  onMouseLeave={(e) => { (e.currentTarget).style.borderColor = 'rgba(117,98,47,0.3)'; }}>
                  Submit Enquiry
                </button>
              </form>
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '32px 0' }}>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '28px',
                  fontWeight: 300,
                  color: 'rgba(201,168,76,0.85)',
                  letterSpacing: '0.02em',
                  marginBottom: '12px',
                }}>
                Your enquiry has been received.
              </p>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '12px',
                  fontWeight: 300,
                  color: 'rgba(245,242,238,0.35)',
                  letterSpacing: '0.05em',
                }}>
                We will respond within two business days.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
