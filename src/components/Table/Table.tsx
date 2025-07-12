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
  sx?: React.CSSProperties;
  variant?: string;
}

const TableRoot = styled.table<{ $variant?: string }>`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background: ${({ theme }) => theme.colors.beige};
  font-family: ${({ theme }) => theme.fontFamilies.grotesk};
  font-size: 1.3rem;
  font-weight: ${({ theme }) => theme.fontWeightBold};
  color: ${({ theme }) => theme.colors.black};
  box-shadow: none;
  ${({ theme }) => ((theme.overrides as any)?.Table) ? (theme.overrides as any).Table : ''}
  ${({ theme, $variant }) => (theme.variants && theme.variants.Table && $variant && theme.variants.Table[$variant]) ? theme.variants.Table[$variant] : ''}
`;

const Th = styled.th<{ $accent?: boolean }>`
  border: ${({ theme }) => theme.borderWidth} solid ${({ theme }) => theme.colors.brown};
  background: ${({ theme, $accent }) => $accent ? theme.colors.orange : theme.colors.blueGray};
  color: ${({ theme, $accent }) => $accent ? theme.colors.white : theme.colors.black};
  padding: 15px 24px;
  text-align: left;
  text-transform: uppercase;
  font-size: 1.2em;
`;

const Td = styled.td`
  border: ${({ theme }) => theme.borderWidth} solid ${({ theme }) => theme.colors.brown};
  padding: 15px 24px;
  background: ${({ theme }) => theme.colors.beige};
  font-family: ${({ theme }) => theme.fontFamilies.mono};
  font-size: 1.1em;
`;

const Tr = styled.tr<{ $highlight?: boolean }>`
  ${({ $highlight, theme }) => $highlight && css`
    background: ${theme.colors.blueGray};
    color: ${theme.colors.white};
    td { background: ${theme.colors.blueGray}; color: ${theme.colors.white}; }
  `}
`;

export function Table<T extends object>({ columns, data, rowKey, highlightRow, sx, variant }: TableProps<T>) {
  return (
    <TableRoot $variant={variant} style={sx}>
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
              <Td key={String(col.key)} style={{ textAlign: col.align }}>{String(row[col.key])}</Td>
            ))}
          </Tr>
        ))}
      </tbody>
    </TableRoot>
  );
} 