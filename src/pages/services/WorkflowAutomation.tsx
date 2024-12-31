import React from 'react';
import { ServiceLayout } from '../../components/services/ServiceLayout';
import { ServiceSection } from '../../components/services/ServiceSection';

export function WorkflowAutomation() {
  return (
    <ServiceLayout
      title="Workflow Automation"
      description="Streamline your business processes with intelligent automation solutions"
    >
      <ServiceSection title="Service Overview">
        <p>
          Our Workflow Automation service transforms manual, time-consuming processes into streamlined, 
          automated workflows. By leveraging cutting-edge AI technology, we help businesses reduce operational 
          overhead, minimize errors, and free up valuable resources for strategic initiatives.
        </p>
      </ServiceSection>

      <ServiceSection title="Business Applications">
        <ul>
          <li>Document processing and data extraction</li>
          <li>Invoice processing and accounts payable automation</li>
          <li>Customer onboarding and KYC processes</li>
          <li>HR workflows and employee onboarding</li>
          <li>Inventory management and order processing</li>
        </ul>
      </ServiceSection>

      <ServiceSection title="Case Study">
        <p>
          A mid-sized retail chain implemented our workflow automation solution for their inventory 
          management process. The result: 70% reduction in processing time, 90% fewer errors, and 
          savings of 20 labor hours per week. The automated system now handles stock updates, 
          reorder notifications, and supplier communications seamlessly.
        </p>
      </ServiceSection>

      <ServiceSection title="Benefits for SMBs">
        <ul>
          <li>Reduced operational costs through automated task handling</li>
          <li>Improved accuracy and consistency in business processes</li>
          <li>Enhanced employee productivity and job satisfaction</li>
          <li>Better compliance through standardized processes</li>
          <li>Scalable solutions that grow with your business</li>
        </ul>
      </ServiceSection>
    </ServiceLayout>
  );
}