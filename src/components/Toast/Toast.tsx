import React from 'react';
import styled, { css } from 'styled-components';

export type ToastType = 'info' | 'success' | 'error' | 'warning';

export interface ToastProps {
  type?: ToastType;
  message: string;
  icon?: React.ReactNode;
  onClose?: () => void;
  withShadow?: boolean;
  sx?: React.CSSProperties;
  variant?: string;
}

const typeColor = (type: ToastType, theme: any) => {
  switch (type) {
    case 'success': return theme.colors.blueGray;
    case 'error': return theme.colors.accentRed;
    case 'warning': return theme.colors.orange;
    case 'info':
    default: return theme.colors.brown;
  }
};

const shadow = '6px 6px 0 #353C42';

const ToastRoot = styled.div<{ $type: ToastType; $withShadow?: boolean; $variant?: string }>`
  display: flex;
  align-items: center;
  gap: 32px;
  min-width: 400px;
  max-width: 600px;
  padding: 32px 48px;
  background: ${({ theme }) => theme.colors.beige};
  color: ${({ theme }) => theme.colors.black};
  border: ${({ theme, $type }) => theme.borderWidth} solid ${({ theme, $type }) => typeColor($type, theme)};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-family: ${({ theme }) => theme.fontFamilies.grotesk};
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fontWeightBold};
  box-shadow: ${({ $withShadow }) => $withShadow !== false ? shadow : 'none'};
  transition: box-shadow 0.18s, transform 0.12s;
  position: relative;
  ${({ theme }) => ((theme.overrides as any)?.Toast) ? (theme.overrides as any).Toast : ''}
  ${({ theme, $variant }) => (theme.variants && theme.variants.Toast && $variant && theme.variants.Toast[$variant]) ? theme.variants.Toast[$variant] : ''}
`;

const ToastIcon = styled.span<{ $type: ToastType }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  color: ${({ theme, $type }) => typeColor($type, theme)};
`;

const ToastMessage = styled.span`
  flex: 1;
  word-break: break-word;
`;

const CloseBtn = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.gray400};
  font-size: 2rem;
  font-family: ${({ theme }) => theme.fontFamilies.grotesk};
  font-weight: ${({ theme }) => theme.fontWeightBold};
  cursor: pointer;
  outline: none;
  margin-left: 24px;
`;

export const Toast: React.FC<ToastProps> = ({ type = 'info', message, icon, onClose, withShadow = true, sx, variant }) => (
  <ToastRoot $type={type} $withShadow={withShadow} $variant={variant} style={sx}>
    {icon && <ToastIcon $type={type}>{icon}</ToastIcon>}
    <ToastMessage>{message}</ToastMessage>
    {onClose && <CloseBtn onClick={onClose} aria-label="Закрыть">×</CloseBtn>}
  </ToastRoot>
); 