import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps): JSX.Element {
  useScrollReveal();
  return (
    <div style={{ backgroundColor: '#0A0A0A', minHeight: '100vh' }}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
