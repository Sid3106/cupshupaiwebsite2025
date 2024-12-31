import { LeadFormData } from './types';

export function validateForm(data: LeadFormData) {
  const errors: { field: string; message: string }[] = [];

  if (!data.fullName.trim()) {
    errors.push({ field: 'fullName', message: 'Full name is required' });
  }

  if (!data.email.trim()) {
    errors.push({ field: 'email', message: 'Email is required' });
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push({ field: 'email', message: 'Invalid email format' });
  }

  if (!data.phone.trim()) {
    errors.push({ field: 'phone', message: 'Phone number is required' });
  } else if (!/^\+?[\d\s-]{10,}$/.test(data.phone)) {
    errors.push({ field: 'phone', message: 'Invalid phone number format' });
  }

  if (!data.requirements.trim()) {
    errors.push({ field: 'requirements', message: 'Requirements are required' });
  }

  return errors;
}