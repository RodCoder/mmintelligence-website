import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { PageHero } from '../components/sections/PageHero';
import { TeamCards } from '../components/sections/TeamCards';

export function TeamPage(): JSX.Element {
  return (
    <PageLayout>
      <PageHero
        headline="Team"
        subtitle="Specialist, compact, and confidentiality-first."
        note="We keep biographies brief and avoid operational detail. Enquiries are coordinated through controlled channels."
      />
      <TeamCards />
    </PageLayout>
  );
}
