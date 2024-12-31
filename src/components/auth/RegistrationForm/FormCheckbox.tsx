import React from 'react';

interface FormCheckboxProps {
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

export function FormCheckbox({
  name,
  checked,
  onChange,
  error,
  disabled,
  children
}: FormCheckboxProps) {
  return (
    <div>
      <label className="flex items-start space-x-3">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className={`
            mt-1 h-4 w-4 rounded border-2
            text-[#00A979] bg-white/10
            focus:ring-[#00A979] focus:ring-offset-0
            disabled:opacity-50 disabled:cursor-not-allowed
            ${error ? 'border-red-400' : 'border-gray-700'}
          `}
        />
        <span className="text-sm text-gray-200">{children}</span>
      </label>
      {error && (
        <p className="mt-1 text-sm text-red-400">{error}</p>
      )}
    </div>
  );
}