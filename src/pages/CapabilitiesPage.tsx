import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { PageHero } from '../components/sections/PageHero';
import { CapabilityBlocks } from '../components/sections/CapabilityBlocks';
import { PageCTA } from '../components/sections/PageCTA';

export function CapabilitiesPage(): JSX.Element {
  return (
    <PageLayout>
      <PageHero
        headline="Capabilities"
        subtitle="Four specialist areas of technical delivery for high-value digital wealth environments."
      />
      <CapabilityBlocks />
      <PageCTA />
    </PageLayout>
  );
}
