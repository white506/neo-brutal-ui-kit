import React, { useState } from 'react';
import { Checkbox, CheckboxProps } from './Checkbox';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    label: { control: 'text' },
    error: { control: 'text' },
    accent: { control: 'select', options: ['orange', 'blue', 'red', undefined] },
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
  },
};

const Template = (args: CheckboxProps) => {
  const [checked, setChecked] = useState(!!args.checked);
  return (
    <ThemeProvider theme={theme}>
      <Checkbox {...args} checked={checked} onChange={e => setChecked(e.target.checked)} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Чекбокс',
};

export const Accent = Template.bind({});
Accent.args = {
  label: 'Оранжевый',
  accent: 'orange',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  label: 'Ошибка',
  error: 'Ошибка выбора',
}; 