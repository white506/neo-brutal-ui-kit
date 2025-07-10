import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Table, TableProps } from './Table';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';

type Row = { id: number; name: string; };
const columns = [
  { key: 'id', title: 'ID' },
  { key: 'name', title: 'Имя' },
];
const data = [
  { id: 1, name: 'Иван' },
  { id: 2, name: 'Ольга' },
];

describe('Table', () => {
  const renderTable = (props: Partial<TableProps<Row>> = {}) =>
    render(
      <ThemeProvider theme={theme}>
        <Table columns={columns} data={data} rowKey={row => row.id} {...props} />
      </ThemeProvider>
    );

  it('рендерит строки', () => {
    renderTable();
    expect(screen.getByText('Иван')).toBeInTheDocument();
    expect(screen.getByText('Ольга')).toBeInTheDocument();
  });

  it('выделяет строку (highlightRow)', () => {
    renderTable({ highlightRow: row => row.id === 2 });
    const row = screen.getByText('Ольга').closest('tr');
    // Проверяем, что стиль применён (blueGray)
    expect(row).toHaveStyle({ background: '#8A9EA5' });
  });

  // Если есть сортировка, добавить тест на клик по заголовку
  it('сортирует по столбцу (если есть сортировка)', () => {
    // Если Table поддерживает сортировку, реализовать тест
    // fireEvent.click(screen.getByText('ID'));
    // expect(...).toBe(...)
  });
}); 