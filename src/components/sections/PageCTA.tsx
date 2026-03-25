import React from 'react';
import { Link } from 'react-router-dom';

export function PageCTA(): JSX.Element {
  return (
    <section
      style={{
        padding: '96px 0',
        borderTop: '1px solid rgba(245,242,238,0.06)',
      }}>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 56px',
        }}
        data-reveal>
        <Link to="/contact" className="kinari-btn">
          Start a Confidential Discussion
        </Link>
      </div>
    </section>
  );
}
