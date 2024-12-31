import React from 'react';
import { ChevronDown } from 'lucide-react';
import { countries } from './countries';

interface CountrySelectProps {
  value: string;
  onChange: (code: string) => void;
}

export function CountrySelect({ value, onChange }: CountrySelectProps) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none w-full pl-10 pr-8 py-2 border-2 border-gray-200 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary/20"
      >
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.flag} {country.name} (+{country.dialCode})
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
      <div className="absolute left-2 top-1/2 -translate-y-1/2">
        {countries.find(c => c.code === value)?.flag}
      </div>
    </div>
  );
}