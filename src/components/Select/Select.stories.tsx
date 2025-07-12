import React, { useState } from 'react';
import { CustomSelect, CustomSelectOption } from './CustomSelect';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';

export default {
  title: 'Components/CustomSelect',
  component: CustomSelect,
};

const customOptions: CustomSelectOption[] = [
  { value: '', label: 'Select option' },
  { value: 'one', label: 'Option 1' },
  { value: 'two', label: 'Option 2' },
  { value: 'three', label: 'Option 3' },
];

export const Default = () => {
  const [value, setValue] = useState('');
  return (
    <ThemeProvider theme={theme}>
      <CustomSelect
        label="CustomSelect (custom)"
        options={customOptions}
        value={value}
        onChange={setValue}
      />
    </ThemeProvider>
  );
};

export const Accent = () => {
  const [value, setValue] = useState('');
  return (
    <ThemeProvider theme={theme}>
      <CustomSelect
        label="Accent"
        options={customOptions}
        value={value}
        onChange={setValue}
        accent="orange"
      />
    </ThemeProvider>
  );
};

export const Disabled = () => (
  <ThemeProvider theme={theme}>
    <CustomSelect
      label="Disabled"
      options={customOptions}
      value={''}
      onChange={() => {}}
      disabled
    />
  </ThemeProvider>
);

export const Error = () => {
  const [value, setValue] = useState('');
  return (
    <ThemeProvider theme={theme}>
      <CustomSelect
        label="Error"
        options={customOptions}
        value={value}
        onChange={setValue}
        error="Selection error"
      />
    </ThemeProvider>
  );
}; 