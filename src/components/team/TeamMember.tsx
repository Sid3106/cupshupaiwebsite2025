import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';
import type { TeamMember as TeamMemberType } from './types';

interface TeamMemberProps {
  member: TeamMemberType;
}

export default function TeamMember({ member }: TeamMemberProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <img
          src={member.imageUrl}
          alt={member.name}
          className="h-[300px] w-[250px] object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
      </div>
      
      <div className="relative z-10 -mt-20 space-y-3 p-6 bg-[#00A979]">
        <div className="space-y-1">
          <h3 className="text-xl font-semibold text-white">{member.name}</h3>
          <p className="text-white font-medium">{member.role}</p>
        </div>
        <p className="text-white text-sm leading-relaxed">
          {member.description}
        </p>
        <div className="flex space-x-4 pt-2">
          {member.social?.linkedin && (
            <a
              href={member.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
              aria-label={`${member.name}'s LinkedIn profile`}
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          {member.social?.instagram && (
            <a
              href={member.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
              aria-label={`${member.name}'s Instagram profile`}
            >
              <Instagram className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export { TeamMember };