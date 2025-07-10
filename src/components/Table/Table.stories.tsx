import React from 'react';
import { Table, TableColumn } from './Table';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';

type User = { id: number; name: string; email: string; status: string };

const columns: TableColumn<User>[] = [
  { key: 'id', title: 'ID', width: '80px', accent: true },
  { key: 'name', title: 'Имя' },
  { key: 'email', title: 'Email' },
  { key: 'status', title: 'Статус', accent: true },
];

const data: User[] = [
  { id: 1, name: 'Иван', email: 'ivan@example.com', status: 'active' },
  { id: 2, name: 'Ольга', email: 'olga@example.com', status: 'pending' },
  { id: 3, name: 'Петр', email: 'petr@example.com', status: 'blocked' },
];

export default {
  title: 'Components/Table',
  component: Table,
};

export const Default = () => (
  <ThemeProvider theme={theme}>
    <Table columns={columns} data={data} rowKey={row => row.id} />
  </ThemeProvider>
);

export const HighlightRow = () => (
  <ThemeProvider theme={theme}>
    <Table
      columns={columns}
      data={data}
      rowKey={row => row.id}
      highlightRow={row => row.status === 'blocked'}
    />
  </ThemeProvider>
);

export const CompactVariant = () => (
  <ThemeProvider theme={theme}>
    <Table columns={columns} data={data} rowKey={row => row.id} variant="compact" />
  </ThemeProvider>
); 