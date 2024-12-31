import React from 'react';

interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
}

export function FormInput({
  label,
  name,
  type = 'text',
  value,
  onChange,
  error,
  placeholder,
  required
}: FormInputProps) {
  return (
    <div className="space-y-1">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          w-full px-4 py-2.5 rounded-lg border-2 
          ${error ? 'border-red-300' : 'border-gray-200'}
          focus:border-primary focus:ring focus:ring-primary/20
          placeholder:text-gray-400 text-gray-900
        `}
        required={required}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}