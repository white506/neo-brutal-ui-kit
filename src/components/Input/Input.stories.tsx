import React, { useState } from 'react';
import { Input, InputProps } from './Input';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';
import { MinusIcon } from '../../icons';
import { StoryFn } from '@storybook/react';

const Icon = () => (
  <MinusIcon width={24} height={24} />
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
  placeholder: 'Enter text',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'With icon',
  icon: <Icon />,
  iconPosition: 'left',
};

export const WithClear = Template.bind({});
WithClear.args = {
  label: 'With clear',
  withClear: true,
  value: 'Text',
};

export const Textarea = Template.bind({});
Textarea.args = {
  label: 'Textarea',
  textarea: true,
  placeholder: 'Enter a lot of text',
}; 