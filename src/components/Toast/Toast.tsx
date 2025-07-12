import React from 'react';
import styled, { css } from 'styled-components';
import { InfoIcon } from '../../icons/info';
import { CheckIcon } from '../../icons/check';
import { WarningIcon } from '../../icons/warning';
import { CloseIcon } from '../../icons/close';

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
  gap: 24px;
  min-width: 400px;
  max-width: 600px;
  padding: 15px 24px;
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

const getDefaultIcon = (type: ToastType) => {
  switch (type) {
    case 'success': return <CheckIcon width={28} height={28} />;
    case 'warning': return <WarningIcon width={28} height={28} />;
    case 'error': return <CloseIcon width={28} height={28} />;
    case 'info':
    default: return <InfoIcon width={28} height={28} />;
  }
};

export const Toast: React.FC<ToastProps> = ({ type = 'info', message, icon, onClose, withShadow = true, sx, variant }) => (
  <ToastRoot $type={type} $withShadow={withShadow} $variant={variant} style={sx}>
    <ToastIcon $type={type}>{icon ?? getDefaultIcon(type)}</ToastIcon>
    <ToastMessage>{message}</ToastMessage>
    {onClose && <CloseBtn onClick={onClose} aria-label="Close">×</CloseBtn>}
  </ToastRoot>
); 