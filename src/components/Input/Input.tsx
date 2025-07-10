import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  textarea?: boolean;
  withClear?: boolean;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 24px;
`;

const Label = styled.label`
  font-family: 'Space Grotesk', 'IBM Plex Mono', 'Monument Grotesk', Arial, sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: #672725;
`;

const InputBox = styled.div<{ $iconLeft?: boolean; $iconRight?: boolean }>`
  display: flex;
  align-items: stretch;
  position: relative;
  flex-direction: ${({ $iconLeft }) => ($iconLeft ? 'row' : 'row-reverse')};
`;

const inputBase = `
  font-family: 'IBM Plex Mono', 'Space Grotesk', Arial, sans-serif;
  font-size: 1.35rem;
  font-weight: 700;
  color: #18181A;
  background: #F9E2B0;
  border: 2px solid #672725;
  border-radius: 0;
  padding: 20px 32px;
  outline: none;
  box-shadow: none;
  transition: none;
  min-height: 64px;
  width: 100%;

  &:focus {
    border-color: #F56D39;
  }
  &:disabled {
    background: #8A9EA5;
    color: #353C42;
    cursor: not-allowed;
  }
`;

const StyledInput = styled.input<{ $error?: boolean }>`
  ${inputBase}
  border-color: ${({ $error }) => ($error ? '#F56D39' : '#672725')};
`;

const StyledTextarea = styled.textarea<{ $error?: boolean }>`
  ${inputBase}
  resize: vertical;
  border-color: ${({ $error }) => ($error ? '#F56D39' : '#672725')};
`;

const IconBox = styled.span`
  display: flex;
  align-items: center;
  padding: 0 12px;
  color: #8A9EA5;
`;

const ClearBtn = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #8A9EA5;
  font-size: 1.2em;
  cursor: pointer;
`;

const ErrorText = styled.div`
  color: #F56D39;
  font-size: 1rem;
  margin-top: 4px;
`;

export const Input: React.FC<InputProps> = ({
  label,
  error,
  icon,
  iconPosition = 'left',
  textarea,
  withClear,
  value,
  onChange,
  ...rest
}) => {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState('');
  const inputValue = isControlled ? value : internalValue;

  const handleChange = (e: React.ChangeEvent<any>) => {
    if (!isControlled) setInternalValue(e.target.value);
    if (onChange) onChange(e);
  };

  const handleClear = () => {
    if (!isControlled) setInternalValue('');
    if (onChange) {
      const event = {
        target: { value: '' },
        currentTarget: { value: '' },
      } as unknown as React.ChangeEvent<any>;
      onChange(event);
    }
  };

  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <InputBox $iconLeft={!!(icon && iconPosition === 'left')} $iconRight={!!(icon && iconPosition === 'right')}>
        {icon && iconPosition === 'left' && <IconBox>{icon}</IconBox>}
        {textarea ? (
          <StyledTextarea
            $error={!!error}
            value={inputValue}
            onChange={handleChange}
            {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <StyledInput
            $error={!!error}
            value={inputValue}
            onChange={handleChange}
            {...rest}
          />
        )}
        {withClear && inputValue && (
          <ClearBtn type="button" aria-label="очистить" onClick={handleClear}>
            ×
          </ClearBtn>
        )}
        {icon && iconPosition === 'right' && <IconBox>{icon}</IconBox>}
      </InputBox>
      {error && <ErrorText>{error}</ErrorText>}
    </Wrapper>
  );
}; 