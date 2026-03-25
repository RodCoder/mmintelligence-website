import React from 'react';
import { useScrollReveal } from './components/hooks/useScrollReveal';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { SupportGoals } from './components/sections/SupportGoals';
import { CapabilitiesPreview } from './components/sections/CapabilitiesPreview';
import { MethodologySteps } from './components/sections/MethodologySteps';
import { CollaborationBody } from './components/sections/CollaborationBody';
import { TeamCards } from './components/sections/TeamCards';
import { ContactForm } from './components/sections/ContactForm';

export function App(): JSX.Element {
  useScrollReveal();
  return (
    <>
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="support-goals">
          <SupportGoals />
        </section>
        <section id="capabilities">
          <CapabilitiesPreview />
        </section>
        <section id="methodology">
          <MethodologySteps />
        </section>
        <section id="collaboration">
          <CollaborationBody />
        </section>
        <section id="team">
          <TeamCards />
        </section>
        <section id="contact">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
