import React from 'react';
import { Icon, IconName } from './Icon';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';
import { StoryFn } from '@storybook/react';
import { icons } from './Icon';

export default {
  title: 'Icons/Icon',
  component: Icon,
  argTypes: {
    name: { control: 'select', options: Object.keys(icons) },
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
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32 }}>
      {Object.keys(icons).map((name) => (
        <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 80 }}>
          <Icon name={name as IconName} size={40} color={theme.colors.brown} />
          <span style={{ fontSize: 12, marginTop: 8 }}>{name}</span>
        </div>
      ))}
    </div>
  </ThemeProvider>
); 