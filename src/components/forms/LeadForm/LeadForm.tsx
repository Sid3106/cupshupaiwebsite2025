import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Modal } from '../../common/Modal/Modal';
import { FormInput } from './FormInput';
import { PhoneInput } from './PhoneInput';
import { useLeadForm } from './useLeadForm';
import type { LeadFormData } from './types';
import './styles.css';

interface LeadFormProps {
  onClose: () => void;
}

export function LeadForm({ onClose }: LeadFormProps) {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    email: '',
    phone: '',
    countryCode: 'US',
    organization: '',
    requirements: ''
  });

  const { submitForm, isSubmitting, isSuccess } = useLeadForm();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePhoneChange = (value: string) => {
    setFormData(prev => ({ ...prev, phone: value }));
  };

  const handleCountryChange = (code: string) => {
    setFormData(prev => ({ ...prev, countryCode: code }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await submitForm(formData);
    if (success) {
      setTimeout(onClose, 2000);
    }
  };

  return (
    <Modal isOpen={true} onClose={onClose}>
      <div className="form-container">
        <div className="form-header">
          <h2 className="text-xl font-semibold text-gray-900">Get Started</h2>
          <p className="text-sm text-gray-500 mt-1">
            Fill out the form below and we'll get back to you shortly
          </p>
        </div>

        <div className="form-content">
          <form onSubmit={handleSubmit} className="space-y-4">
            <FormInput
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Smith"
              required
            />

            <FormInput
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
            />

            <PhoneInput
              value={formData.phone}
              countryCode={formData.countryCode}
              onChange={handlePhoneChange}
              onCountryChange={handleCountryChange}
              required
            />

            <FormInput
              label="Company"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              placeholder="Your company name"
            />

            <div className="space-y-1">
              <label className="form-label">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                placeholder="Tell us about your requirements"
                className="form-input min-h-[100px] resize-y"
                required
              />
            </div>

            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </Modal>
  );
}