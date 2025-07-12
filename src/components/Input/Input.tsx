import React, { useState } from 'react';
import styled, { DefaultTheme } from 'styled-components';
// Удалён невалидный импорт типов DOM

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  textarea?: boolean;
  withClear?: boolean;
  withShadow?: boolean;
  sx?: React.CSSProperties;
  variant?: string;
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

const shadow = '2px 2px 0 #353C42';

const inputBase = `
  font-family: 'IBM Plex Mono', 'Space Grotesk', Arial, sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: #18181A;
  background: #F9E2B0;
  border: 2px solid #4B2E05;
  border-radius: 0;
  padding: 12px 18px;
  outline: none;
  box-shadow: VAR_SHADOW;
  transition: box-shadow 0.15s, border-color 0.15s, background 0.15s, color 0.15s;
  min-width: 220px;
  min-height: 44px;
  width: 100%;

  &:focus {
    border-color: #FF6F00;
    box-shadow: VAR_SHADOW_FOCUS;
  }
  &:hover {
    box-shadow: VAR_SHADOW_HOVER;
  }
  &:disabled {
    background: #4A5A60;
    color: #353C42;
    cursor: not-allowed;
  }
`;

const StyledInput = styled.input<{ $error?: boolean; $withShadow?: boolean; $variant?: string }>`
  ${({ theme, $variant }) => (theme.variants && theme.variants.Input && $variant && theme.variants.Input[$variant]) ? theme.variants.Input[$variant] : ''}
  ${({ theme }) => ((theme.overrides as Record<string, any>)?.Input) ? (theme.overrides as Record<string, any>).Input : ''}
  ${({ $withShadow }) => {
    const s = $withShadow !== false ? shadow : 'none';
    return inputBase
      .replace(/VAR_SHADOW/g, s)
      .replace(/VAR_SHADOW_FOCUS/g, $withShadow !== false ? '4px 4px 0 #353C42' : 'none')
      .replace(/VAR_SHADOW_HOVER/g, $withShadow !== false ? '3px 3px 0 #353C42' : 'none');
  }}
  border-color: ${({ $error }) => ($error ? '#D72631' : '#4B2E05')};
`;

const StyledTextarea = styled.textarea<{ $error?: boolean; $withShadow?: boolean; $variant?: string }>`
  ${({ theme, $variant }) => (theme.variants && theme.variants.Input && $variant && theme.variants.Input[$variant]) ? theme.variants.Input[$variant] : ''}
  ${({ theme }) => ((theme.overrides as Record<string, any>)?.Input) ? (theme.overrides as Record<string, any>).Input : ''}
  ${({ $withShadow }) => {
    const s = $withShadow !== false ? shadow : 'none';
    return inputBase
      .replace(/VAR_SHADOW/g, s)
      .replace(/VAR_SHADOW_FOCUS/g, $withShadow !== false ? '4px 4px 0 #353C42' : 'none')
      .replace(/VAR_SHADOW_HOVER/g, $withShadow !== false ? '3px 3px 0 #353C42' : 'none');
  }}
  resize: vertical;
  border-color: ${({ $error }) => ($error ? '#D72631' : '#4B2E05')};
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
  color: #D72631;
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
  withShadow = true,
  value,
  onChange,
  sx,
  variant,
  ...rest
}) => {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState('');
  const inputValue = isControlled ? value : internalValue;

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) setInternalValue(e.target.value);
    if (onChange) onChange(e);
  };

  const handleChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!isControlled) setInternalValue(e.target.value);
    if (onChange) onChange(e as unknown as React.ChangeEvent<HTMLInputElement>);
  };

  const handleClear = () => {
    if (!isControlled) setInternalValue('');
    if (onChange) {
      const event = {
        target: { value: '' },
        currentTarget: { value: '' },
      } as unknown as React.ChangeEvent<HTMLInputElement>;
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
            $withShadow={withShadow}
            $variant={variant}
            value={inputValue}
            onChange={handleChangeTextarea}
            style={sx}
            {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <StyledInput
            $error={!!error}
            $withShadow={withShadow}
            $variant={variant}
            value={inputValue}
            onChange={handleChangeInput}
            style={sx}
            {...rest}
          />
        )}
        {withClear && inputValue && (
          <ClearBtn type="button" aria-label="clear" onClick={handleClear}>
            ×
          </ClearBtn>
        )}
        {icon && iconPosition === 'right' && <IconBox>{icon}</IconBox>}
      </InputBox>
      {error && <ErrorText>{error}</ErrorText>}
    </Wrapper>
  );
}; 