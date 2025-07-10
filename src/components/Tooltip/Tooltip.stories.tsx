import React from 'react';
import { Tooltip, TooltipProps } from './Tooltip';
import { Button } from '../Button/Button';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    content: { control: 'text' },
    position: { control: 'select', options: ['top', 'right', 'bottom', 'left'] },
    accent: { control: 'select', options: ['orange', 'blue', 'red', undefined] },
  },
};

const Template = (args: TooltipProps) => (
  <ThemeProvider theme={theme}>
    <Tooltip {...args}>
      <Button variant="primary">Наведи</Button>
    </Tooltip>
  </ThemeProvider>
);

export const Top = Template.bind({});
Top.args = {
  content: 'Tooltip сверху',
  position: 'top',
};

export const Right = Template.bind({});
Right.args = {
  content: 'Tooltip справа',
  position: 'right',
};

export const Bottom = Template.bind({});
Bottom.args = {
  content: 'Tooltip снизу',
  position: 'bottom',
};

export const Left = Template.bind({});
Left.args = {
  content: 'Tooltip слева',
  position: 'left',
};

export const AccentOrange = Template.bind({});
AccentOrange.args = {
  content: 'Оранжевый акцент',
  accent: 'orange',
};

export const AccentBlue = Template.bind({});
AccentBlue.args = {
  content: 'Синий акцент',
  accent: 'blue',
};

export const AccentRed = Template.bind({});
AccentRed.args = {
  content: 'Красный акцент',
  accent: 'red',
}; 