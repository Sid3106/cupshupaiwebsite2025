export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  social?: {
    linkedin?: string;
    instagram?: string;
  };
}