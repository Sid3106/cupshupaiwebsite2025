export interface LeadFormData {
  fullName: string;
  email: string;
  phone: string;
  countryCode: string;
  organization?: string;
  companySize?: 'lt5' | '5-20' | '20-100' | 'gt100';
  requirements: string;
}

export interface FormError {
  field: string;
  message: string;
}