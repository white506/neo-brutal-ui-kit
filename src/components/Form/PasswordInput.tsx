import React, { useState } from 'react';
import styled from 'styled-components';
import { EyeIcon, EyeOffIcon } from '../../icons';

export interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  withShadow?: boolean;
  sx?: React.CSSProperties;
}

const shadow = '2px 2px 0 #353C42';

const StyledInput = styled.input<{ $error?: boolean; $withShadow?: boolean }>`
  font-family: 'IBM Plex Mono', 'Space Grotesk', Arial, sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: #18181A;
  background: #F9E2B0;
  border: 2px solid #672725;
  border-radius: 0;
  padding: 12px 36px 12px 18px;
  outline: none;
  box-shadow: ${({ $withShadow }) => $withShadow !== false ? shadow : 'none'};
  transition: box-shadow 0.15s, border-color 0.15s, background 0.15s, color 0.15s;
  min-height: 44px;

  border-color: ${({ $error }) => ($error ? '#F56D39' : '#672725')};
  &:focus {
    border-color: #F56D39;
    box-shadow: ${({ $withShadow }) => $withShadow !== false ? '4px 4px 0 #353C42' : 'none'};
  }
  &:hover {
    box-shadow: ${({ $withShadow }) => $withShadow !== false ? '3px 3px 0 #353C42' : 'none'};
  }
  &:disabled {
    background: #8A9EA5;
    color: #353C42;
    cursor: not-allowed;
  }
`;

const EyeBtn = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #8A9EA5;
  font-size: 1.5em;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const PasswordInput: React.FC<PasswordInputProps> = ({ error, withShadow = true, sx, ...rest }) => {
  const [visible, setVisible] = useState(false);
  return (
    <Wrapper>
      <StyledInput
        type={visible ? 'text' : 'password'}
        $error={!!error}
        $withShadow={withShadow}
        style={sx}
        {...rest}
      />
      <EyeBtn
        type="button"
        tabIndex={-1}
        aria-label={visible ? 'Hide password' : 'Show password'}
        onClick={() => setVisible((v) => !v)}
      >
        {visible ? <EyeOffIcon width={20} height={20} /> : <EyeIcon width={20} height={20} />}
      </EyeBtn>
      {error && (
        <div style={{ color: '#F56D39', fontSize: '1.1rem', fontWeight: 700, marginTop: 4 }}>{error}</div>
      )}
    </Wrapper>
  );
}; 