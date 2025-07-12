import React from 'react';
import { Button, ButtonProps } from './Button';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';
import { Icon } from '../../icons';
import { StoryFn } from '@storybook/react';

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

const Template: StoryFn<ButtonProps> = (args: ButtonProps) => (
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
  children: 'Full width',
  fullWidth: true,
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  children: 'With icons',
  iconLeft: <Icon name="search" />,
  iconRight: <Icon name="close" />,
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