#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const toPascalCase = str => str.charAt(0).toUpperCase() + str.slice(1);

rl.question('Имя компонента (PascalCase): ', name => {
  if (!name) {
    console.log('Имя не указано.');
    rl.close();
    return;
  }
  const componentName = toPascalCase(name);
  const baseDir = path.join(__dirname, '../src/components', componentName);
  if (fs.existsSync(baseDir)) {
    console.log('Папка уже существует:', baseDir);
    rl.close();
    return;
  }
  fs.mkdirSync(baseDir);

  // Component
  fs.writeFileSync(
    path.join(baseDir, `${componentName}.tsx`),
    `import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export interface ${componentName}Props {
  children?: React.ReactNode;
}

export const ${componentName}: React.FC<${componentName}Props> = ({ children }) => (
  <Root>{children}</Root>
);
`
  );

  // index.ts
  fs.writeFileSync(
    path.join(baseDir, 'index.ts'),
    `export * from './${componentName}';\n`
  );

  // stories
  fs.writeFileSync(
    path.join(baseDir, `${componentName}.stories.tsx`),
    `import React from 'react';
import { ${componentName} } from './${componentName}';

export default {
  title: 'Components/${componentName}',
  component: ${componentName},
};

export const Basic = () => <${componentName}>Пример</${componentName}>;
`
  );

  // test
  fs.writeFileSync(
    path.join(baseDir, `${componentName}.test.tsx`),
    `import React from 'react';
import { render } from '@testing-library/react';
import { ${componentName} } from './${componentName}';

describe('${componentName}', () => {
  it('рендерится без ошибок', () => {
    render(<${componentName}>Тест</${componentName}>);
  });
});
`
  );

  console.log(`\nГотово! src/components/${componentName} создан.`);
  rl.close();
}); 