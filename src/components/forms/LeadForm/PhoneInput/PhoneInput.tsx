import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { countries } from './countries';

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
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const selectedCountry = countries.find(c => c.code === countryCode);
  const filteredCountries = countries.filter(country => 
    country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.dialCode.includes(searchTerm)
  );

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Phone Number {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <div className="grid grid-cols-[1fr] gap-2">
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="w-full flex items-center px-3 py-2 border rounded-lg bg-white hover:bg-gray-50"
            >
              <span className="mr-2">{selectedCountry?.flag}</span>
              <span>{selectedCountry?.name} (+{selectedCountry?.dialCode})</span>
            </button>

            {isOpen && (
              <div className="absolute z-50 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
                <div className="sticky top-0 bg-white p-2 border-b">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search countries..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-8 pr-4 py-2 border rounded-md"
                    />
                    <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </div>
                {filteredCountries.map((country) => (
                  <button
                    key={country.code}
                    type="button"
                    onClick={() => {
                      onCountryChange(country.code);
                      setIsOpen(false);
                      setSearchTerm('');
                    }}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center space-x-2"
                  >
                    <span>{country.flag}</span>
                    <span>{country.name}</span>
                    <span className="text-gray-500">+{country.dialCode}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <input
            type="tel"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="form-input mt-2"
            placeholder="Enter phone number"
            pattern="[0-9]{10}"
            maxLength={10}
            required={required}
          />
        </div>
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}