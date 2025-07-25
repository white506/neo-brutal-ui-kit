import React from 'react';
import { Tooltip, TooltipProps } from './Tooltip';
import { Button } from '../Button/Button';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';
import { StoryFn } from '@storybook/react';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    content: { control: 'text' },
    position: { control: 'select', options: ['top', 'right', 'bottom', 'left'] },
    accent: { control: 'select', options: ['orange', 'blue', 'red', undefined] },
  },
};

const Template: StoryFn<TooltipProps> = (args: TooltipProps) => (
  <ThemeProvider theme={theme}>
    <Tooltip {...args}>
      <Button>Hover me</Button>
    </Tooltip>
  </ThemeProvider>
);

export const Top = Template.bind({});
Top.args = {
  content: 'Top',
  position: 'top',
};

export const Right = Template.bind({});
Right.args = {
  content: 'Right',
  position: 'right',
};

export const Bottom = Template.bind({});
Bottom.args = {
  content: 'Bottom',
  position: 'bottom',
};

export const Left = Template.bind({});
Left.args = {
  content: 'Left',
  position: 'left',
};

export const AccentOrange = Template.bind({});
AccentOrange.args = {
  content: 'Orange accent',
  accent: 'orange',
};

export const AccentBlue = Template.bind({});
AccentBlue.args = {
  content: 'Blue accent',
  accent: 'blue',
};

export const AccentRed = Template.bind({});
AccentRed.args = {
  content: 'Red accent',
  accent: 'red',
}; 