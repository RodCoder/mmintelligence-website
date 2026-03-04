import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Positioning } from '../components/sections/Positioning';
import { DualTrack } from '../components/sections/DualTrack';
import { HowItWorks } from '../components/sections/HowItWorks';
import { DealStandards } from '../components/sections/DealStandards';
import { TechnologyLayer } from '../components/sections/TechnologyLayer';
import { TrustSignals } from '../components/sections/TrustSignals';
import { InvitationMechanic } from '../components/sections/InvitationMechanic';
import { FooterSection } from '../components/sections/FooterSection';
import { useScrollReveal } from '../components/hooks/useScrollReveal';
export function MMIntelligencePage(): JSX.Element {
  useScrollReveal();
  return (
    <main
      style={{
        backgroundColor: '#0A0A0A',
        minHeight: '100vh'
      }}>

      <Hero />
      <Positioning />
      <DualTrack />
      <HowItWorks />
      <DealStandards />
      <TechnologyLayer />
      <TrustSignals />
      <InvitationMechanic />
      <FooterSection />
    </main>);

}