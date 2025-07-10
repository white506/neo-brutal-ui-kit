import React from 'react';
import { Avatar, AvatarProps } from './Avatar';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    initials: { control: 'text' },
    accent: { control: 'select', options: ['orange', 'blue', 'red', undefined] },
    size: { control: 'select', options: ['md', 'lg'] },
    src: { control: 'text' },
  },
};

const Template = (args: AvatarProps) => (
  <ThemeProvider theme={theme}>
    <Avatar {...args} />
  </ThemeProvider>
);

export const Initials = Template.bind({});
Initials.args = {
  initials: 'AB',
};

export const Accent = Template.bind({});
Accent.args = {
  initials: 'NB',
  accent: 'orange',
};

export const Photo = Template.bind({});
Photo.args = {
  src: 'https://randomuser.me/api/portraits/men/32.jpg',
  alt: 'Фото',
};

export const Large = Template.bind({});
Large.args = {
  initials: 'XL',
  size: 'lg',
}; 