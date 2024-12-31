import React from 'react';
import { ServiceLayout } from '../../components/services/ServiceLayout';
import { ServiceSection } from '../../components/services/ServiceSection';

export function AIToolsAndAgents() {
  return (
    <ServiceLayout
      title="AI Tools & Agents"
      description="Smart digital helpers that make your work easier and faster"
    >
      <ServiceSection title="Service Overview">
        <p>
          Think of AI Tools and Agents as your very own digital assistants - just like having extra team 
          members who never get tired! These smart helpers can do many tasks automatically, like answering 
          customer questions, organizing your files, or even helping you make better business decisions.
        </p>
        <p>
          Imagine having a helper who can read through thousands of emails in seconds, sort them by 
          importance, and even draft responses for you. That's what our AI tools can do!
        </p>
      </ServiceSection>

      <ServiceSection title="Business Applications">
        <ul>
          <li>
            <strong>Smart Customer Service:</strong> AI agents that can chat with your customers 24/7, 
            answer common questions, and help solve problems
          </li>
          <li>
            <strong>Data Helper:</strong> Tools that can read through lots of information quickly and 
            tell you the important parts
          </li>
          <li>
            <strong>Schedule Manager:</strong> AI that helps arrange meetings and manages your calendar 
            like a real assistant
          </li>
          <li>
            <strong>Writing Buddy:</strong> Helps write emails, reports, and other business documents
          </li>
          <li>
            <strong>Research Assistant:</strong> Finds and summarizes important information from the 
            internet
          </li>
        </ul>
      </ServiceSection>

      <ServiceSection title="Case Study">
        <p>
          A small clothing store was having trouble keeping up with customer questions on their website. 
          They were getting hundreds of messages every day! We gave them an AI helper that could answer 
          common questions about sizes, shipping, and returns. Now, the AI handles 80% of customer 
          questions automatically, and customers get answers in seconds instead of hours. The store 
          owners can now focus on more important tasks, and their customers are happier than ever!
        </p>
      </ServiceSection>

      <ServiceSection title="Benefits for SMBs">
        <ul>
          <li>
            <strong>Save Time:</strong> Let AI handle routine tasks while you focus on growing your 
            business
          </li>
          <li>
            <strong>Work 24/7:</strong> AI tools never sleep, so they can help customers anytime
          </li>
          <li>
            <strong>Save Money:</strong> Do more work without hiring more people
          </li>
          <li>
            <strong>Fewer Mistakes:</strong> AI tools are very accurate and don't get tired
          </li>
          <li>
            <strong>Happy Customers:</strong> Provide faster service and better experiences
          </li>
        </ul>
      </ServiceSection>
    </ServiceLayout>
  );
}