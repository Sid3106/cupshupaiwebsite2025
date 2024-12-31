import React from 'react';
import TeamMember from './TeamMember';
import { useTeamMembers } from './useTeamMembers';

export function TeamGrid() {
  const { members, isLoading } = useTeamMembers();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="h-[300px] bg-gray-700 rounded-2xl" />
            <div className="mt-4 space-y-3">
              <div className="h-4 w-2/3 rounded bg-gray-700" />
              <div className="h-4 w-1/2 rounded bg-gray-700" />
              <div className="h-16 w-full rounded bg-gray-700" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {members.map((member) => (
        <TeamMember key={member.id} member={member} />
      ))}
    </div>
  );
}