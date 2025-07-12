import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { ArrowDownIcon } from '../../icons';

export interface CustomSelectOption {
  value: string;
  label: string;
}

export interface CustomSelectProps {
  label?: string;
  error?: string;
  options: CustomSelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  sx?: React.CSSProperties;
  accent?: 'orange' | 'blue' | 'red';
}

const accentColor = (accent: 'orange' | 'blue' | 'red' | undefined, theme: any) => {
  switch (accent) {
    case 'orange': return '#FF6F00';
    case 'blue': return '#3B82F6';
    case 'red': return '#F56D39';
    default: return '#F9E2B0'; // Бежевый для дефолта
  }
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;
  position: relative;
`;

const Label = styled.label`
  font-family: ${({ theme }) => theme.fontFamilies.grotesk};
  font-weight: ${({ theme }) => theme.fontWeightBold};
  font-size: 1.5rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.black};
`;

const SelectBox = styled.button<{ $error?: boolean; $open?: boolean; $disabled?: boolean }>`
  font-family: 'IBM Plex Mono', 'Space Grotesk', Arial, sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: #18181A;
  background: #F9E2B0;
  border: 2px solid
    ${({ $error, theme }) => $error ? theme.colors.accentRed : theme.colors.brown};
  border-radius: 0;
  padding: 14px 20px;
  min-width: 220px;
  min-height: 48px;
  width: 100%;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 2px 2px 0 #353C42;
  cursor: pointer;
  position: relative;
  transition: border-color 0.15s;
  &:focus {
    border-color: #FF6F00;
    outline: none;
  }
  &:disabled {
    background: #4A5A60;
    color: #353C42;
    cursor: not-allowed;
  }
  ${({ $disabled }) => $disabled && 'background: #8A9EA5; color: #353C42; cursor: not-allowed;'}
`;

const ArrowIconBox = styled.span<{ $open: boolean }>`
  margin-left: 12px;
  display: flex;
  align-items: center;
  transition: transform 0.22s cubic-bezier(0.4,0,0.2,1);
  transform: rotate(${({ $open }) => ($open ? 180 : 0)}deg);
`;

const Dropdown = styled.ul<{ $open: boolean }>`
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  z-index: 10;
  background: #F9E2B0;
  border: 2px solid #4B2E05;
  box-shadow: 4px 4px 0 #353C42;
  margin: 0;
  padding: 0;
  list-style: none;
  max-height: ${({ $open }) => ($open ? '240px' : '0')};
  // overflow-y: ${({ $open }) => ($open ? 'auto' : 'hidden')};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transform: ${({ $open }) => ($open ? 'translateY(0)' : 'translateY(10px)')};
  pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
  transition: opacity 0.22s cubic-bezier(0.4,0,0.2,1), transform 0.22s cubic-bezier(0.4,0,0.2,1), max-height 0.22s cubic-bezier(0.4,0,0.2,1);
`;

const Option = styled.li<{ $selected?: boolean; $highlighted?: boolean; $accent?: string }>`
  padding: 14px 20px;
  font-size: 1.2rem;
  font-family: 'IBM Plex Mono', 'Space Grotesk', Arial, sans-serif;
  font-weight: ${({ $selected }) => ($selected ? 900 : 700)};
  color: ${({ $selected, $highlighted, $accent }) =>
    $selected || $highlighted
      ? ($accent === '#F9E2B0' ? '#18181A' : '#fff')
      : '#18181A'};
  background: ${({ $selected, $highlighted, $accent }) =>
    $selected || $highlighted
      ? ($accent === '#F9E2B0' ? '#EAD49A' : $accent || '#FF6F00')
      : 'transparent'};
  border: ${({ $selected, $accent }) =>
    $selected && $accent === '#F9E2B0' ? '2px solid #E0C88B' : 'none'};
  cursor: pointer;
  transition: background 0.22s cubic-bezier(0.4,0,0.2,1), color 0.22s cubic-bezier(0.4,0,0.2,1), border 0.22s cubic-bezier(0.4,0,0.2,1);
  &:not(:last-child) {
    border-bottom: 1px solid #E0C88B;
  }
  &:hover {
    background: ${({ $accent }) => $accent === '#F9E2B0' ? '#EAD49A' : '#FF6F00'};
    color: ${({ $accent }) => $accent === '#F9E2B0' ? '#18181A' : '#fff'};
  }
`;

export const CustomSelect: React.FC<CustomSelectProps> = ({ label, error, options, value, onChange, disabled, sx, accent }: CustomSelectProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const handleSelect = (val: string) => {
    if (onChange) onChange(val);
    setOpen(false);
  };
  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    if (open) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);
  const selected = options.find((o: CustomSelectOption) => o.value === value);
  const accentBg = accentColor(accent, {});
  return (
    <Wrapper ref={ref} style={sx}>
      {label && <Label>{label}</Label>}
      <SelectBox type="button" onClick={() => setOpen((v: boolean) => !v)} $error={!!error} $open={open} $disabled={disabled} disabled={disabled}>
        <span>{selected ? selected.label : options[0]?.label}</span>
        <ArrowIconBox $open={open}>
          <ArrowDownIcon width={20} height={20} strokeWidth={3} style={{ minWidth: 20, minHeight: 20 }} />
        </ArrowIconBox>
      </SelectBox>
      <Dropdown $open={open}>
        {options.map((opt: CustomSelectOption) => {
          return (
            <Option
              key={opt.value}
              $selected={opt.value === value}
              $accent={accentBg}
              data-testid={opt.value === value ? 'custom-select-selected' : undefined}
              onClick={() => !disabled && handleSelect(opt.value)}
            >
              {opt.label}
            </Option>
          );
        })}
      </Dropdown>
      {error && <span style={{ color: '#F56D39', fontSize: '1.1rem', fontWeight: 700 }}>{error}</span>}
    </Wrapper>
  );
};
