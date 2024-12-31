import React from 'react';
import { AboutHero } from './sections/AboutHero';
import { CompanyStory } from './sections/CompanyStory';
import { ServicesOverview } from './sections/ServicesOverview';
import { VisionSection } from './sections/VisionSection';
import { WhyChooseUs } from './sections/WhyChooseUs';
import { TeamOverview } from './sections/TeamOverview';
import { BlogPreview } from './sections/BlogPreview';
import { ContactCTA } from './sections/ContactCTA';
import { Breadcrumb } from './components/Breadcrumb';
import { SocialShare } from './components/SocialShare';

export function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb />
      <AboutHero />
      <CompanyStory />
      <ServicesOverview />
      <VisionSection />
      <WhyChooseUs />
      <TeamOverview />
      <BlogPreview />
      <ContactCTA />
      <SocialShare />
    </div>
  );
}