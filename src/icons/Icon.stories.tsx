import React from 'react';
import { Icon, IconName } from './Icon';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';
import { StoryFn } from '@storybook/react';

export default {
  title: 'Icons/Icon',
  component: Icon,
  argTypes: {
    name: { control: 'select', options: ['search', 'close', 'user'] },
    size: { control: 'number' },
    color: { control: 'color' },
  },
};

const Template: StoryFn<any> = (args: any) => (
  <ThemeProvider theme={theme}>
    <Icon {...args} />
  </ThemeProvider>
);

export const Search = Template.bind({});
Search.args = { name: 'search', size: 32 };

export const Close = Template.bind({});
Close.args = { name: 'close', size: 32, color: theme.colors.brown };

export const User = Template.bind({});
User.args = { name: 'user', size: 32, color: theme.colors.orange };

export const AllIcons = () => (
  <ThemeProvider theme={theme}>
    <div style={{ display: 'flex', gap: 32 }}>
      <Icon name="search" size={40} color={theme.colors.brown} />
      <Icon name="close" size={40} color={theme.colors.orange} />
      <Icon name="user" size={40} color={theme.colors.blueGray} />
    </div>
  </ThemeProvider>
); 