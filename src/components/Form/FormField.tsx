import React from 'react';

export interface FormFieldProps {
  label: string;
  error?: string;
  helper?: string;
  children: React.ReactNode;
}

export const FormField: React.FC<FormFieldProps> = ({ label, error, helper, children }) => (
  <div style={{ marginBottom: 24 }}>
    <label style={{ fontWeight: 700, display: 'block', marginBottom: 8 }}>{label}</label>
    <div style={{ marginBottom: 24 }}>
      {children}
    </div>
    {helper && !error && <div style={{ color: '#8A9EA5', fontSize: 13 }}>{helper}</div>}
    {error && <div style={{ color: '#D30000', fontSize: 13 }}>{error}</div>}
  </div>
); 