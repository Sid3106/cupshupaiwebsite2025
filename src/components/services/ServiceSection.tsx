import React from 'react';

interface ServiceSectionProps {
  title: string;
  children: React.ReactNode;
}

export function ServiceSection({ title, children }: ServiceSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="prose prose-lg max-w-none">{children}</div>
    </section>
  );
}