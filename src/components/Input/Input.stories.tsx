import React, { useState } from 'react';
import { Input, InputProps } from './Input';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';
import { StoryFn } from '@storybook/react';

const Icon = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /></svg>
);

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    label: { control: 'text' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    icon: { control: false },
    iconPosition: { control: 'select', options: ['left', 'right'] },
    textarea: { control: 'boolean' },
    withClear: { control: 'boolean' },
  },
};

const Template: StoryFn<InputProps> = (args: InputProps) => {
  const [value, setValue] = useState(args.value || '');
  return (
    <ThemeProvider theme={theme}>
      <Input {...args} value={value} onChange={e => setValue(e.target.value)} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  placeholder: 'Введите текст',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'С иконкой',
  icon: <Icon />,
  iconPosition: 'left',
};

export const WithClear = Template.bind({});
WithClear.args = {
  label: 'С очисткой',
  withClear: true,
  value: 'Текст',
};

export const Textarea = Template.bind({});
Textarea.args = {
  label: 'Textarea',
  textarea: true,
  placeholder: 'Введите много текста',
}; 