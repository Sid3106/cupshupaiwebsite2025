import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface FormSelectProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
  error?: string;
  disabled?: boolean;
}

export function FormSelect({
  label,
  name,
  value,
  onChange,
  options,
  error,
  disabled
}: FormSelectProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-200 mb-1">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`
          w-full h-[45px] px-4 rounded-lg bg-white/10 border-2
          text-white placeholder-gray-400
          transition-all duration-300
          focus:outline-none focus:border-[#00A979] focus:ring-2 focus:ring-[#00A979]/50
          disabled:opacity-50 disabled:cursor-not-allowed
          ${error ? 'border-red-400' : 'border-gray-700'}
        `}
        style={{
          boxShadow: '0 0 10px rgba(0, 169, 121, 0.1)',
        }}
      >
        <option value="" className="bg-gray-900">Select an option</option>
        {options.map(option => (
          <option 
            key={option.value} 
            value={option.value}
            className="bg-gray-900"
          >
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-sm text-red-400">{error}</p>
      )}
    </div>
  );
}