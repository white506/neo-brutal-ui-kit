import React from 'react';
import styled from 'styled-components';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
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

const ModalBox = styled.div`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  border: ${({ theme }) => theme.borderWidth} solid ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.borderRadius};
  min-width: 400px;
  max-width: 90vw;
  min-height: 200px;
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: none;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Title = styled.div`
  font-family: ${({ theme }) => theme.fontFamilies.grotesk};
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.fontWeightBold};
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 24px;
  right: 32px;
  background: ${({ theme }) => theme.colors.accentRed};
  color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => theme.borderWidth} solid ${({ theme }) => theme.colors.black};
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

const ModalContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Modal: React.FC<ModalProps> = ({ open, onClose, title, children }) => {
  if (!open) return null;
  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <CloseBtn onClick={onClose}>X</CloseBtn>
        <ModalBox>
          {title && <Title>{title}</Title>}
          {children}
        </ModalBox>
      </ModalContainer>
    </Overlay>
  );
}; 