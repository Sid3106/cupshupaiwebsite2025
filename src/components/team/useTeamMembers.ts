import { useState, useEffect } from 'react';
import type { TeamMember } from './types';

export function useTeamMembers() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const teamMembers: TeamMember[] = [
      {
        id: '1',
        name: 'Sidharth Singh',
        role: 'Chief AI Officer',
        description: 'Experienced in Workflow Automation, deployment of AI agents and process optimisation',
        imageUrl: 'https://xxxvwkgzmeadztgulado.supabase.co/storage/v1/object/public/team_images/Sidharth%20Image.jpg?t=2024-12-20T06%3A54%3A51.988Z',
        social: {
          linkedin: 'https://www.linkedin.com/company/cupshup',
          instagram: 'https://www.instagram.com/cupshup.official'
        }
      },
      {
        id: '2',
        name: 'Sourav Kumar',
        role: 'Chief Sales Officer',
        description: 'Experienced in Sales and Operations of AI agents and tools',
        imageUrl: 'https://xxxvwkgzmeadztgulado.supabase.co/storage/v1/object/public/team_images/Sourav%20Kumar.jpeg?t=2024-12-20T06%3A55%3A04.738Z',
        social: {
          linkedin: 'https://www.linkedin.com/company/cupshup'
        }
      },
      {
        id: '3',
        name: 'Divyanshu',
        role: 'Technology Enthusiast',
        description: 'Keeps a keen eye on new technological enhancements',
        imageUrl: 'https://xxxvwkgzmeadztgulado.supabase.co/storage/v1/object/public/cupshup_images/CupShupLogo.png',
        social: {
          linkedin: 'https://www.linkedin.com/company/cupshup'
        }
      },
      {
        id: '4',
        name: 'Aakriti',
        role: 'Marketing Enthusiast',
        description: 'Works on taking CupShup services to the market',
        imageUrl: 'https://xxxvwkgzmeadztgulado.supabase.co/storage/v1/object/public/cupshup_images/CupShupLogo.png',
        social: {
          linkedin: 'https://www.linkedin.com/company/cupshup'
        }
      }
    ];

    // Simulate loading
    setTimeout(() => {
      setMembers(teamMembers);
      setIsLoading(false);
    }, 500);
  }, []);

  return { members, isLoading };
}