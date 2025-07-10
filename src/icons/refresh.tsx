import React from 'react';

export const RefreshIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="23 4 23 10 17 10" />
    <path d="M1 20a11 11 0 0 0 17.9-4" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M23 4a11 11 0 0 0-17.9 4" />
  </svg>
); 