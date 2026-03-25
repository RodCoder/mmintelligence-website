import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { PageHero } from '../components/sections/PageHero';
import { ContactForm } from '../components/sections/ContactForm';

export function ContactPage(): JSX.Element {
  return (
    <PageLayout>
      <PageHero
        headline="Contact"
        subtitle="Start a Confidential Discussion."
      />
      <ContactForm />
    </PageLayout>
  );
}
