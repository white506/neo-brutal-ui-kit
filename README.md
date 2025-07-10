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

### Пример кастомизации через theme.overrides

```tsx
import { ThemeProvider } from 'styled-components';
import { themeDay, Button } from 'neo-brutal-ui';

const customTheme = {
  ...themeDay,
  overrides: {
    Button: `
      background: #222 !important;
      color: #F56D39 !important;
      border-radius: 12px !important;
    `,
  },
};

<ThemeProvider theme={customTheme}>
  <Button>Кастомная кнопка</Button>
</ThemeProvider>
```

### Пример кастомизации variants

```tsx
import { ThemeProvider } from 'styled-components';
import { theme, Checkbox, Table, Title } from 'neo-brutal-ui';

const customTheme = {
  ...theme,
  variants: {
    Checkbox: {
      warning: `
        border: 2px dashed #F56D39 !important;
        background: #FFF3E0 !important;
      `,
    },
    Table: {
      compact: `
        font-size: 1.0rem !important;
        th, td { padding: 8px 12px !important; }
      `,
    },
    Title: {
      highlight: `
        color: #F56D39 !important;
        text-shadow: 2px 2px 0 #222;
      `,
    },
  },
};

<ThemeProvider theme={customTheme}>
  <Checkbox variant="warning" label="Внимание" />
  <Table
    variant="compact"
    columns={[{ key: 'name', title: 'Имя' }]}
    data={[{ name: 'Тест' }]}
    rowKey={row => row.name}
  />
  <Title variant="highlight">Заголовок</Title>
</ThemeProvider>
```

### Пример кастомизации через sx-проп

```tsx
<Button sx={{ background: '#222', color: '#F56D39', borderRadius: 12 }}>
  Inline-кастомизация
</Button>
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

---

## Генератор компонентов

Быстро создавай новый компонент по FSD-структуре:

```bash
yarn create:component
# или
npm run create:component
```

- Введи имя компонента (PascalCase)
- Будет создана папка src/components/ИмяКомпонента с файлами:
  - ИмяКомпонента.tsx (boilerplate)
  - index.ts (экспорт)
  - ИмяКомпонента.stories.tsx (Storybook)
  - ИмяКомпонента.test.tsx (тест)

---
