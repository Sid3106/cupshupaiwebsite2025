import React from 'react';
import { Link } from 'react-router-dom';

interface FooterLink {
  name: string;
  href: string;
}

export const serviceLinks: FooterLink[] = [
  { name: 'Workflow Automation', href: '/services/workflow-automation' },
  { name: 'AI Tools & Agents', href: '/services/ai-tools-and-agents' },
  { name: 'Chatbots & GPTs', href: '/services/chatbots-and-gpts' },
  { name: 'Process Optimization', href: '/services/process-optimization' },
  { name: 'Integration Services', href: '/services/integration-services' }
];

export function FooterLinks() {
  return (
    <ul className="space-y-2">
      {serviceLinks.map(link => (
        <li key={link.href}>
          <Link
            to={link.href}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}