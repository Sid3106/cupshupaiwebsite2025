import React from 'react';

export function FormHeader() {
  return (
    <div className="form-header">
      <div className="flex items-center justify-center space-x-3 mb-2">
        <img
          src="https://xxxvwkgzmeadztgulado.supabase.co/storage/v1/object/public/cupshup_images/CupShupLogo.png?t=2024-12-23T07%3A15%3A58.336Z"
          alt="CupShup AI Logo"
          className="form-header-logo"
        />
        <h2 className="form-header-title">CupShup AI</h2>
      </div>
      <p className="form-header-tagline text-center">
        AI for ALL, ALL for AI
      </p>
    </div>
  );
}