import React from 'react';
import styled from 'styled-components';
import { concreteTexture } from '../../theme/concreteTexture';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  background?: 'concrete';
  withShadow?: boolean;
  sx?: React.CSSProperties;
  variant?: string;
}

const Overlay = styled.div`
  position: fixed;
  z-index: 1000;
  inset: 0;
  background: rgba(0,0,0,0.85);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalBox = styled.div<{ $background?: 'concrete' }>`
  background: ${({ theme, $background }) =>
    $background === 'concrete'
      ? `${theme.colors.beige} ${concreteTexture} repeat`
      : theme.colors.beige};
  color: ${({ theme }) => theme.colors.black};
  border: ${({ theme }) => theme.borderWidth} solid ${({ theme }) => theme.colors.brown};
  border-radius: ${({ theme }) => theme.borderRadius};
  min-width: 600px;
  max-width: 90vw;
  min-height: 320px;
  padding: 64px;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  gap: 48px;
  background-blend-mode: multiply;
  opacity: 0.98;
`;

const Title = styled.div`
  font-family: ${({ theme }) => theme.fontFamilies.grotesk};
  font-size: 3rem;
  font-weight: ${({ theme }) => theme.fontWeightBold};
  text-transform: uppercase;
  margin-bottom: 48px;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 24px;
  right: 32px;
  background: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => theme.borderWidth} solid ${({ theme }) => theme.colors.brown};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1.2rem;
  font-family: ${({ theme }) => theme.fontFamilies.grotesk};
  font-weight: ${({ theme }) => theme.fontWeightBold};
  padding: 4px 16px;
  cursor: pointer;
  outline: none;
  box-shadow: none;
  z-index: 1;
`;

const shadow = '8px 8px 0 #353C42';

const ModalContainer = styled.div<{ $withShadow?: boolean; $variant?: string }>`
  ${({ theme, $variant }) => (theme.variants && theme.variants.Modal && $variant && theme.variants.Modal[$variant]) ? theme.variants.Modal[$variant] : ''}
  ${({ theme }) => ((theme.overrides as any)?.Modal) ? (theme.overrides as any).Modal : ''}
  position: relative;
  width: 100%;
  box-shadow: ${({ $withShadow }) => $withShadow !== false ? shadow : 'none'};
  transition: box-shadow 0.18s, transform 0.12s;
`;

export const Modal: React.FC<ModalProps> = ({ open, onClose, title, children, background, withShadow = true, sx, variant }) => {
  if (!open) return null;
  return (
    <Overlay data-testid="modal-overlay" onClick={onClose}>
      <ModalContainer $withShadow={withShadow} $variant={variant} style={sx} onClick={e => e.stopPropagation()}>
        <CloseBtn onClick={onClose}>X</CloseBtn>
        <ModalBox $background={background}>
          {title && <Title>{title}</Title>}
          {children}
        </ModalBox>
      </ModalContainer>
    </Overlay>
  );
}; 