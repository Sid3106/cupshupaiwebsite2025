export interface RegistrationFormData {
  fullName: string;
  email: string;
  phone: string;
  learningPath: string;
  experienceLevel: string;
  acceptTerms: boolean;
}

export interface AuthError {
  field?: string;
  message: string;
}