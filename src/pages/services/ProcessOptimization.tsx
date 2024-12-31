import React from 'react';
import { ServiceLayout } from '../../components/services/ServiceLayout';
import { ServiceSection } from '../../components/services/ServiceSection';

export function ProcessOptimization() {
  return (
    <ServiceLayout
      title="Process Optimization"
      description="Make your business work better, faster, and smarter"
    >
      <ServiceSection title="Service Overview">
        <p>
          Process Optimization is like giving your business a super-smart tune-up! We look at how your 
          business works - all the steps you take to get things done - and find ways to make everything 
          work better. It's like cleaning up a messy room and organizing everything so you can find what 
          you need quickly.
        </p>
        <p>
          We use AI to spot where things might be slowing down or causing problems, then suggest better 
          ways to do them. It's like having a really smart friend who can look at your daily routine and 
          show you shortcuts you never knew existed!
        </p>
      </ServiceSection>

      <ServiceSection title="Business Applications">
        <ul>
          <li>
            <strong>Work Flow Helper:</strong> Makes sure tasks move smoothly from start to finish, 
            like a well-organized assembly line
          </li>
          <li>
            <strong>Time Saver:</strong> Finds and fixes things that take too long or waste time
          </li>
          <li>
            <strong>Quality Checker:</strong> Helps make sure everything is done right the first time
          </li>
          <li>
            <strong>Resource Planner:</strong> Makes sure you're using your people and tools in the 
            best way possible
          </li>
          <li>
            <strong>Problem Spotter:</strong> Finds issues before they become big problems
          </li>
        </ul>
      </ServiceSection>

      <ServiceSection title="Case Study">
        <p>
          A small bakery was having trouble keeping up with orders during busy seasons. Their bakers 
          were working really hard, but sometimes orders got mixed up or took too long. We helped them 
          organize their kitchen workflow, set up a smart ordering system, and create better schedules 
          for baking different items. Now they can make 50% more cakes and cookies each day, orders 
          are always correct, and their bakers are much happier because everything runs smoothly!
        </p>
      </ServiceSection>

      <ServiceSection title="Benefits for SMBs">
        <ul>
          <li>
            <strong>Do More With Less:</strong> Get more work done without needing more resources
          </li>
          <li>
            <strong>Make Customers Happier:</strong> Deliver products and services faster and better
          </li>
          <li>
            <strong>Save Money:</strong> Stop wasting time and resources on inefficient processes
          </li>
          <li>
            <strong>Grow Easier:</strong> Have systems that can handle more business as you grow
          </li>
          <li>
            <strong>Less Stress:</strong> When everything works smoothly, everyone's happier!
          </li>
        </ul>
      </ServiceSection>
    </ServiceLayout>
  );
}