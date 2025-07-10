import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { themeDay, themeNight } from '../../theme/theme';
import { GlobalStyle } from '../../theme/GlobalStyle';
import { ThemeSwitcher } from './ThemeSwitcher';
import { Button } from '../Button/Button';

export default {
  title: 'Utils/ThemeSwitcher',
  component: ThemeSwitcher,
};

export const Demo = () => {
  const [mode, setMode] = useState<'day' | 'night'>('day');
  const theme = mode === 'night' ? themeNight : themeDay;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div style={{ padding: 32 }}>
        <ThemeSwitcher themeMode={mode} onToggle={() => setMode(mode === 'day' ? 'night' : 'day')} />
        <div style={{ marginTop: 32 }}>
          <Button>Пример кнопки</Button>
        </div>
      </div>
    </ThemeProvider>
  );
}; 