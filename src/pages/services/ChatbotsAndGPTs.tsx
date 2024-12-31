import React from 'react';
import { ServiceLayout } from '../../components/services/ServiceLayout';
import { ServiceSection } from '../../components/services/ServiceSection';

export function ChatbotsAndGPTs() {
  return (
    <ServiceLayout
      title="Chatbots & GPTs"
      description="Smart conversation partners that help your business talk to customers"
    >
      <ServiceSection title="Service Overview">
        <p>
          Chatbots and GPTs are like friendly robots that can talk to your customers through text. 
          They're like having a super-smart customer service team that's always available! These 
          digital helpers can understand questions, provide helpful answers, and even make 
          suggestions - just like a real person would.
        </p>
        <p>
          The best part? They learn and get smarter over time, just like humans do. They can 
          remember past conversations and use that knowledge to provide better help next time.
        </p>
      </ServiceSection>

      <ServiceSection title="Business Applications">
        <ul>
          <li>
            <strong>Customer Support:</strong> Answer common questions about your products or services 
            instantly
          </li>
          <li>
            <strong>Order Helper:</strong> Help customers find products and make purchases
          </li>
          <li>
            <strong>Appointment Scheduler:</strong> Book meetings and appointments automatically
          </li>
          <li>
            <strong>FAQ Assistant:</strong> Answer questions about your business 24/7
          </li>
          <li>
            <strong>Lead Generator:</strong> Talk to potential customers and collect their information
          </li>
        </ul>
      </ServiceSection>

      <ServiceSection title="Case Study">
        <p>
          A local pizza restaurant was getting too many phone calls for orders and couldn't keep up. 
          We created a friendly chatbot that could take orders through their website and Facebook page. 
          Now, customers can order pizzas by chatting with the bot, customize their toppings, and even 
          get delivery updates - all without anyone at the restaurant having to pick up the phone! 
          Orders are more accurate, customers are happy, and the restaurant staff can focus on making 
          delicious pizzas.
        </p>
      </ServiceSection>

      <ServiceSection title="Benefits for SMBs">
        <ul>
          <li>
            <strong>Always Available:</strong> Help customers 24 hours a day, 7 days a week
          </li>
          <li>
            <strong>Handle Many Conversations:</strong> Talk to hundreds of customers at once
          </li>
          <li>
            <strong>Quick Responses:</strong> Answer questions instantly without making customers wait
          </li>
          <li>
            <strong>Save Money:</strong> Reduce the need for large customer service teams
          </li>
          <li>
            <strong>Better Service:</strong> Provide consistent, helpful responses every time
          </li>
        </ul>
      </ServiceSection>
    </ServiceLayout>
  );
}