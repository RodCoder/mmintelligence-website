import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { PageHero } from '../components/sections/PageHero';
import { MethodologySteps } from '../components/sections/MethodologySteps';
import { PageCTA } from '../components/sections/PageCTA';

export function MethodologyPage(): JSX.Element {
  return (
    <PageLayout>
      <PageHero
        headline="Methodology"
        subtitle="Our work is designed to support governance, counterparty expectations, and legal workstreams without unnecessary disclosure of sensitive detail."
      />
      <MethodologySteps />
      <PageCTA />
    </PageLayout>
  );
}
