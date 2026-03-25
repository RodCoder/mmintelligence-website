import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { PageHero } from '../components/sections/PageHero';
import { CollaborationBody } from '../components/sections/CollaborationBody';

export function CollaborationPage(): JSX.Element {
  return (
    <PageLayout>
      <PageHero headline="Collaboration with MMLaw" />
      <CollaborationBody />
    </PageLayout>
  );
}
