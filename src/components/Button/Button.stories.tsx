import React from 'react';
import { Button, ButtonProps } from './Button';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';

const Icon = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
);

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'accent', 'danger', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
    iconLeft: { control: false },
    iconRight: { control: false },
    children: { control: 'text' },
  },
};

const Template = (args: ButtonProps) => (
  <ThemeProvider theme={theme}>
    <Button {...args} />
  </ThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  variant: 'primary',
};

export const Accent = Template.bind({});
Accent.args = {
  children: 'Accent',
  variant: 'accent',
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'Danger',
  variant: 'danger',
};

export const Ghost = Template.bind({});
Ghost.args = {
  children: 'Ghost',
  variant: 'ghost',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  children: 'Full Width',
  fullWidth: true,
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  children: 'С иконками',
  iconLeft: <Icon />,
  iconRight: <Icon />,
};

export const Sizes = () => (
  <ThemeProvider theme={theme}>
    <div style={{ display: 'flex', gap: 24 }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  </ThemeProvider>
); 