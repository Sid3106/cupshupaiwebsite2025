import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { ParticleBackground } from './ParticleBackground';
import { FormInput } from './FormInput';
import { FormSelect } from './FormSelect';
import { FormCheckbox } from './FormCheckbox';
import type { RegistrationFormData, AuthError } from '../../../types/auth';
import { registerUser } from '../../../services/authService';
import './styles.css';

const LEARNING_PATHS = [
  { value: 'ai-development', label: 'AI Development' },
  { value: 'data-science', label: 'Data Science & Analytics' },
  { value: 'automation', label: 'Business Process Automation' },
  { value: 'integration', label: 'System Integration' }
];

const EXPERIENCE_LEVELS = [
  { value: 'beginner', label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' },
  { value: 'expert', label: 'Expert' }
];

interface RegistrationFormProps {
  onClose: () => void;
  onSuccess: () => void;
}

export function RegistrationForm({ onClose, onSuccess }: RegistrationFormProps) {
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    email: '',
    phone: '',
    learningPath: '',
    experienceLevel: '',
    acceptTerms: false
  });

  const [errors, setErrors] = useState<AuthError[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: AuthError[] = [];

    if (!formData.fullName.trim()) {
      newErrors.push({ field: 'fullName', message: 'Full name is required' });
    }

    if (!formData.email.trim()) {
      newErrors.push({ field: 'email', message: 'Email is required' });
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.push({ field: 'email', message: 'Invalid email format' });
    }

    if (!formData.phone.trim()) {
      newErrors.push({ field: 'phone', message: 'Contact number is required' });
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.push({ field: 'phone', message: 'Invalid phone number format' });
    }

    if (!formData.learningPath) {
      newErrors.push({ field: 'learningPath', message: 'Please select a learning path' });
    }

    if (!formData.experienceLevel) {
      newErrors.push({ field: 'experienceLevel', message: 'Please select your experience level' });
    }

    if (!formData.acceptTerms) {
      newErrors.push({ field: 'acceptTerms', message: 'You must accept the terms and conditions' });
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    try {
      setIsSubmitting(true);
      await registerUser(formData);
      setShowSuccess(true);
      setTimeout(() => {
        onSuccess();
      }, 2000);
    } catch (error) {
      setErrors([{ message: error instanceof Error ? error.message : 'Registration failed' }]);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData(prev => ({
      ...prev,
      [e.target.name]: value
    }));
    setErrors(errors.filter(error => error.field !== e.target.name));
  };

  if (showSuccess) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="success-message">
          <CheckCircle className="h-16 w-16 text-[#00A979] mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Welcome aboard!</h2>
          <p className="text-gray-200">Your journey to AI mastery begins now.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="registration-form-container">
        <ParticleBackground />
        
        <button onClick={onClose} className="close-button">
          <X className="h-6 w-6" />
        </button>

        <div className="form-content">
          <h2 className="form-title">Step Into Your Future: Begin Your Journey</h2>
          <p className="text-gray-300 text-center mb-8">
            Join us in shaping the future of AI technology
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <FormInput
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              error={errors.find(e => e.field === 'fullName')?.message}
              disabled={isSubmitting}
              required
            />

            <FormInput
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.find(e => e.field === 'email')?.message}
              disabled={isSubmitting}
              required
            />

            <FormInput
              label="Contact Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              error={errors.find(e => e.field === 'phone')?.message}
              disabled={isSubmitting}
              required
            />

            <FormSelect
              label="Preferred Learning Path"
              name="learningPath"
              value={formData.learningPath}
              onChange={handleChange}
              options={LEARNING_PATHS}
              error={errors.find(e => e.field === 'learningPath')?.message}
              disabled={isSubmitting}
              required
            />

            <FormSelect
              label="Current Experience Level"
              name="experienceLevel"
              value={formData.experienceLevel}
              onChange={handleChange}
              options={EXPERIENCE_LEVELS}
              error={errors.find(e => e.field === 'experienceLevel')?.message}
              disabled={isSubmitting}
              required
            />

            <FormCheckbox
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
              error={errors.find(e => e.field === 'acceptTerms')?.message}
              disabled={isSubmitting}
            >
              I accept the <a href="/terms" className="text-[#00A979] hover:underline">terms and conditions</a>
            </FormCheckbox>

            {errors.find(e => !e.field)?.message && (
              <p className="error-message">
                {errors.find(e => !e.field)?.message}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="submit-button"
            >
              {isSubmitting ? 'Processing...' : 'Begin Your Journey'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}