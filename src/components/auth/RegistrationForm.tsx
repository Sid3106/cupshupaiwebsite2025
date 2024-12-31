import React, { useState } from 'react';
import { X } from 'lucide-react';
import type { RegistrationFormData, AuthError } from '../../types/auth';
import { registerUser } from '../../services/authService';

const INDUSTRY_OPTIONS = [
  'Technology',
  'Healthcare',
  'Finance',
  'Education',
  'Manufacturing',
  'Retail',
  'Other'
];

const ORG_SIZE_OPTIONS = [
  { value: 'lt5', label: 'Less than 5 employees' },
  { value: '5-20', label: '5-20 employees' },
  { value: '20-100', label: '20-100 employees' },
  { value: 'gt100', label: 'More than 100 employees' }
];

interface RegistrationFormProps {
  onClose: () => void;
  onSuccess: () => void;
}

export function RegistrationForm({ onClose, onSuccess }: RegistrationFormProps) {
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    email: '',
    organization: '',
    orgSize: 'lt5',
    industry: ''
  });

  const [errors, setErrors] = useState<AuthError[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    if (!formData.organization.trim()) {
      newErrors.push({ field: 'organization', message: 'Organization name is required' });
    }

    if (!formData.industry) {
      newErrors.push({ field: 'industry', message: 'Please select an industry' });
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
      onSuccess();
    } catch (error) {
      setErrors([{ message: error instanceof Error ? error.message : 'Registration failed' }]);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    setErrors(errors.filter(error => error.field !== e.target.name));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Started with CupShup AI</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              disabled={isSubmitting}
            />
            {errors.find(e => e.field === 'fullName')?.message && (
              <p className="mt-1 text-sm text-red-600">
                {errors.find(e => e.field === 'fullName')?.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              disabled={isSubmitting}
            />
            {errors.find(e => e.field === 'email')?.message && (
              <p className="mt-1 text-sm text-red-600">
                {errors.find(e => e.field === 'email')?.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="organization" className="block text-sm font-medium text-gray-700">
              Organization/Company Name
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              disabled={isSubmitting}
            />
            {errors.find(e => e.field === 'organization')?.message && (
              <p className="mt-1 text-sm text-red-600">
                {errors.find(e => e.field === 'organization')?.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="orgSize" className="block text-sm font-medium text-gray-700">
              Organization Size
            </label>
            <select
              id="orgSize"
              name="orgSize"
              value={formData.orgSize}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              disabled={isSubmitting}
            >
              {ORG_SIZE_OPTIONS.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
              Industry
            </label>
            <select
              id="industry"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              disabled={isSubmitting}
            >
              <option value="">Select an industry</option>
              {INDUSTRY_OPTIONS.map(industry => (
                <option key={industry} value={industry}>
                  {industry}
                </option>
              ))}
            </select>
            {errors.find(e => e.field === 'industry')?.message && (
              <p className="mt-1 text-sm text-red-600">
                {errors.find(e => e.field === 'industry')?.message}
              </p>
            )}
          </div>

          {errors.find(e => !e.field)?.message && (
            <p className="text-sm text-red-600">
              {errors.find(e => !e.field)?.message}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Registering...' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
}