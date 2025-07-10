import React from 'react';
import styled, { css } from 'styled-components';

export interface TableColumn<T> {
  key: keyof T;
  title: string;
  align?: 'left' | 'center' | 'right';
  width?: string;
  accent?: boolean;
}

export interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  rowKey: (row: T) => string | number;
  highlightRow?: (row: T) => boolean;
}

const TableRoot = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamilies.grotesk};
  font-size: 1.3rem;
  font-weight: ${({ theme }) => theme.fontWeightBold};
  color: ${({ theme }) => theme.colors.black};
  box-shadow: none;
`;

const Th = styled.th<{ $accent?: boolean }>`
  border: ${({ theme }) => theme.borderWidth} solid ${({ theme }) => theme.colors.black};
  background: ${({ theme, $accent }) => $accent ? theme.colors.accentOrange : theme.colors.gray100};
  color: ${({ theme, $accent }) => $accent ? theme.colors.white : theme.colors.black};
  padding: 24px 32px;
  text-align: left;
  text-transform: uppercase;
  font-size: 1.2em;
`;

const Td = styled.td`
  border: ${({ theme }) => theme.borderWidth} solid ${({ theme }) => theme.colors.black};
  padding: 24px 32px;
  background: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamilies.mono};
  font-size: 1.1em;
`;

const Tr = styled.tr<{ $highlight?: boolean }>`
  ${({ $highlight, theme }) => $highlight && css`
    background: ${theme.colors.accentBlue};
    color: ${theme.colors.white};
    td { background: ${theme.colors.accentBlue}; color: ${theme.colors.white}; }
  `}
`;

export function Table<T extends object>({ columns, data, rowKey, highlightRow }: TableProps<T>) {
  return (
    <TableRoot>
      <thead>
        <tr>
          {columns.map(col => (
            <Th key={String(col.key)} $accent={col.accent} style={{ width: col.width, textAlign: col.align }}>{col.title}</Th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <Tr key={rowKey(row)} $highlight={highlightRow?.(row)}>
            {columns.map(col => (
              <Td key={String(col.key)} style={{ textAlign: col.align }}>{row[col.key]}</Td>
            ))}
          </Tr>
        ))}
      </tbody>
    </TableRoot>
  );
} 