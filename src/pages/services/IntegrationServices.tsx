import React from 'react';
import { ServiceLayout } from '../../components/services/ServiceLayout';
import { ServiceSection } from '../../components/services/ServiceSection';

export function IntegrationServices() {
  return (
    <ServiceLayout
      title="Integration Services"
      description="Make all your business tools work together perfectly"
    >
      <ServiceSection title="Service Overview">
        <p>
          Integration Services is like being a really good team captain who helps all your different 
          business tools work together as friends! Imagine if your email, calendar, customer list, and 
          sales tools could talk to each other and share information automatically - that's what we do!
        </p>
        <p>
          Think of it like building bridges between different islands. Each island is one of your 
          business tools, and we build strong bridges so information can flow easily between them. No 
          more copying and pasting or entering the same information in different places!
        </p>
      </ServiceSection>

      <ServiceSection title="Business Applications">
        <ul>
          <li>
            <strong>Data Connector:</strong> Makes different software systems share information 
            automatically
          </li>
          <li>
            <strong>Information Sync:</strong> Keeps all your business information up-to-date 
            everywhere
          </li>
          <li>
            <strong>Smart Workflows:</strong> Creates automatic chains of actions across different 
            tools
          </li>
          <li>
            <strong>Report Builder:</strong> Combines information from different places into easy-to-read 
            reports
          </li>
          <li>
            <strong>System Talker:</strong> Helps old and new systems work together nicely
          </li>
        </ul>
      </ServiceSection>

      <ServiceSection title="Case Study">
        <p>
          A small online store was using five different tools: one for their website, another for 
          customer emails, a third for shipping, a fourth for inventory, and a fifth for accounting. 
          The store owner was spending hours copying information between these systems! We connected 
          all these tools so they could share information automatically. Now when a customer buys 
          something, the inventory updates itself, shipping labels are created automatically, and all 
          the accounting is done without any extra work. The owner saved 15 hours every week and has 
          zero mistakes in their records!
        </p>
      </ServiceSection>

      <ServiceSection title="Benefits for SMBs">
        <ul>
          <li>
            <strong>Save Time:</strong> No more entering the same information multiple times
          </li>
          <li>
            <strong>Fewer Mistakes:</strong> When systems talk to each other, there's less room for 
            errors
          </li>
          <li>
            <strong>Better Decisions:</strong> See all your business information in one place
          </li>
          <li>
            <strong>Work Smarter:</strong> Let computers handle the boring tasks of moving information 
            around
          </li>
          <li>
            <strong>Grow Easily:</strong> Add new tools and systems as your business grows
          </li>
        </ul>
      </ServiceSection>
    </ServiceLayout>
  );
}