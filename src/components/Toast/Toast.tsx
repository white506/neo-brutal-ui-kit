import React from 'react';
import styled, { css } from 'styled-components';

export type ToastType = 'info' | 'success' | 'error' | 'warning';

export interface ToastProps {
  type?: ToastType;
  message: string;
  icon?: React.ReactNode;
  onClose?: () => void;
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

const ToastRoot = styled.div<{ $type: ToastType }>`
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
  box-shadow: none;
  position: relative;
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

export const Toast: React.FC<ToastProps> = ({ type = 'info', message, icon, onClose }) => (
  <ToastRoot $type={type}>
    {icon && <ToastIcon $type={type}>{icon}</ToastIcon>}
    <ToastMessage>{message}</ToastMessage>
    {onClose && <CloseBtn onClick={onClose} aria-label="Закрыть">×</CloseBtn>}
  </ToastRoot>
); 