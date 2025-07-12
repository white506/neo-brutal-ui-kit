import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Table, TableProps } from './Table';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';

type Row = { id: number; name: string; };
const columns = [
  { key: 'id', title: 'ID' },
  { key: 'name', title: 'Name' },
];
const data = [
  { id: 1, name: 'Ivan' },
  { id: 2, name: 'Olga' },
];

describe('Table', () => {
  const renderTable = (props: Partial<TableProps<Row>> = {}) =>
    render(
      <ThemeProvider theme={theme}>
        <Table columns={columns} data={data} rowKey={row => row.id} {...props} />
      </ThemeProvider>
    );

  it('renders rows', () => {
    renderTable();
    expect(screen.getByText('Ivan')).toBeInTheDocument();
    expect(screen.getByText('Olga')).toBeInTheDocument();
  });

  it('highlights row (highlightRow)', () => {
    renderTable({ highlightRow: row => row.id === 2 });
    const row = screen.getByText('Olga').closest('tr');
    // Проверяем, что стиль применён (blueGray)
    expect(row).toHaveStyle({ background: '#4A5A60' });
  });

  // Если есть сортировка, добавить тест на клик по заголовку
  it('sorts by column (if sorting is supported)', () => {
    // Если Table поддерживает сортировку, реализовать тест
    // fireEvent.click(screen.getByText('ID'));
    // expect(...).toBe(...)
  });
}); 