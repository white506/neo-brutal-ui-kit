import React from 'react';

interface ThemeSwitcherProps {
  themeMode: 'day' | 'night';
  onToggle: () => void;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ themeMode, onToggle }) => (
  <button
    type="button"
    onClick={onToggle}
    style={{
      padding: '12px 24px',
      fontWeight: 700,
      fontFamily: 'inherit',
      fontSize: '1.1rem',
      border: '2px solid #353C42',
      background: themeMode === 'night' ? '#2B2320' : '#F9E2B0',
      color: themeMode === 'night' ? '#F9E2B0' : '#353C42',
      cursor: 'pointer',
      borderRadius: 0,
      boxShadow: themeMode === 'night' ? '2px 2px 0 #353C42' : '4px 4px 0 #353C42',
      transition: 'all 0.15s',
      margin: 0,
    }}
    aria-label="Toggle theme"
  >
    {themeMode === 'night' ? 'Concrete Day' : 'Concrete Night'}
  </button>
); 