# neo-brutal-ui-kit

[![storybook](https://img.shields.io/badge/storybook-online-orange)](https://white506.github.io/neo-brutal-ui-kit)
[![npm version](https://img.shields.io/npm/v/@white506/neo-brutal-ui)](https://www.npmjs.com/package/@white506/neo-brutal-ui)

## Архитектурный брутализм для React

Мощный UI Kit в стиле архитектурного брутализма: массивные компоненты, жирная типографика, строгие границы, zero-radius, кастомная палитра, поддержка темизации и гибкой кастомизации.

---

## Быстрый старт

### Установка

```bash
npm i neo-brutal-ui styled-components
```

> **PeerDependencies:**
> - react >=17
> - styled-components >=5

### Использование

```tsx
import { Button, Input, Modal, Card, Tooltip, Toast, Select, Avatar, Checkbox, Table, Typography } from 'neo-brutal-ui';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from 'neo-brutal-ui';

<ThemeProvider theme={theme}>
  <GlobalStyle />
  <Button size="lg" withShadow>Пример</Button>
</ThemeProvider>
```

---

## Документация и демо

- 📖 **Storybook**: [https://white506.github.io/neo-brutal-ui-kit](https://white506.github.io/neo-brutal-ui-kit)
- 📦 **npm**: [@white506/neo-brutal-ui](https://www.npmjs.com/package/@white506/neo-brutal-ui)
- 📝 **Changelog**: [CHANGELOG.md](./CHANGELOG.md)

---

## Компоненты

- **Button** — размеры, иконки, fullWidth, варианты (primary, accent, danger, ghost)
- **Input** — textarea, иконка, withClear, error
- **Modal** — closable, background, withShadow
- **Card** — title, subtitle, actions, background
- **Tooltip** — position, accent, withShadow
- **Toast** — type, autoDismiss, action
- **Select** — accent, error, кастомные опции
- **Avatar** — initials, src, accent, size
- **Checkbox** — accent, error, withShadow
- **Table** — кастомные колонки, выделение строк
- **Typography** — Title, Subtitle, Text, Caption, as/size

> Все компоненты имеют интерактивные stories с controls и примерами ([Storybook](https://white506.github.io/neo-brutal-ui-kit)).

---

## Темизация и кастомизация

- **Поддержка тем:** бетон-день и бетон-ночь (ThemeSwitcher)
- **Палитра:** brown, orange, beige, blueGray, darkGray, black, white
- **Тема:**
  ```ts
  import { themeDay, themeNight } from 'neo-brutal-ui';
  // themeDay.colors, themeNight.colors
  ```
- **Глобальные стили:**
  ```ts
  import { GlobalStyle } from 'neo-brutal-ui';
  ```
- **withShadow:** любой компонент можно сделать плоским: `<Button withShadow={false} />`
- **accent:** для выделения (accent="orange" | "blue" | "red")
- **size:** для Button, Avatar, Typography

### Пример переключения темы

```tsx
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { themeDay, themeNight, GlobalStyle, ThemeSwitcher, Button } from 'neo-brutal-ui';

const App = () => {
  const [mode, setMode] = useState<'day' | 'night'>('day');
  const theme = mode === 'night' ? themeNight : themeDay;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ThemeSwitcher themeMode={mode} onToggle={() => setMode(mode === 'day' ? 'night' : 'day')} />
      <Button>Пример</Button>
    </ThemeProvider>
  );
};
```

---

## Примеры кастомизации

```tsx
// Кастомная тема
import { ThemeProvider } from 'styled-components';
import { theme } from 'neo-brutal-ui';

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    orange: '#FF9900',
    brown: '#4B2E05',
  },
};

<ThemeProvider theme={customTheme}>
  <Button variant="accent">Accent</Button>
</ThemeProvider>
```

---

## Тесты и качество

- Покрытие тестами: Button, Input, Modal, Card, Checkbox, Toast, Tooltip, Table
- Используется jest, @testing-library/react, jest-styled-components
- Полная типизация, строгий tsconfig, чистая сборка

---

## Roadmap и вклад

- Все задачи и баги — через Issues на [GitHub](https://github.com/white506/neo-brutal-ui-kit)
- PR приветствуются!

---

## Лицензия

MIT
