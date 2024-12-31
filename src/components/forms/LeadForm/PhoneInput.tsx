import React from 'react';
import { ChevronDown } from 'lucide-react';

interface PhoneInputProps {
  value: string;
  countryCode: string;
  onChange: (value: string) => void;
  onCountryChange: (code: string) => void;
  error?: string;
  required?: boolean;
}

export function PhoneInput({
  value,
  countryCode,
  onChange,
  onCountryChange,
  error,
  required
}: PhoneInputProps) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
        Phone Number {required && <span className="text-red-500">*</span>}
      </label>
      <div className="grid grid-cols-[120px_1fr] gap-2">
        <div className="relative">
          <select
            value={countryCode}
            onChange={(e) => onCountryChange(e.target.value)}
            className="w-full appearance-none px-4 py-2.5 rounded-lg border-2 border-gray-200 focus:border-primary focus:ring focus:ring-primary/20"
          >
            <option value="US">🇺🇸 +1</option>
            <option value="IN">🇮🇳 +91</option>
            <option value="GB">🇬🇧 +44</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
        </div>
        <input
          type="tel"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="(555) 555-0123"
          className={`
            w-full px-4 py-2.5 rounded-lg border-2 
            ${error ? 'border-red-300' : 'border-gray-200'}
            focus:border-primary focus:ring focus:ring-primary/20
            placeholder:text-gray-400 text-gray-900
          `}
          required={required}
        />
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}