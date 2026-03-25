import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { Hero } from '../components/sections/Hero';
import { CapabilitiesPreview } from '../components/sections/CapabilitiesPreview';
import { MMLawCrossLink } from '../components/sections/MMLawCrossLink';

export function HomePage(): JSX.Element {
  return (
    <PageLayout>
      <Hero />
      <CapabilitiesPreview />
      <MMLawCrossLink variant="standalone" />
    </PageLayout>
  );
}
