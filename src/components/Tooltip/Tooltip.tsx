import React, { ReactNode, useState, useRef } from 'react';
import styled, { css } from 'styled-components';

export type TooltipPosition = 'top' | 'right' | 'bottom' | 'left';

export interface TooltipProps {
  content: ReactNode;
  position?: TooltipPosition;
  accent?: 'orange' | 'blue' | 'red';
  children: ReactNode;
  withShadow?: boolean;
  sx?: React.CSSProperties;
  variant?: string;
}

const accentColor = (accent: TooltipProps['accent'], theme: any) => {
  switch (accent) {
    case 'orange': return theme.colors.orange;
    case 'blue': return theme.colors.blueGray;
    case 'red': return theme.colors.accentRed;
    default: return theme.colors.brown;
  }
};

const shadow = '4px 4px 0 #353C42';

const TooltipWrapper = styled.span`
  position: relative;
  display: inline-block;
`;

const TooltipBox = styled.div<{ $position: TooltipPosition; $accent: TooltipProps['accent']; $withShadow?: boolean; $variant?: string }>`
  ${({ theme, $variant }) => (theme.variants && theme.variants.Tooltip && $variant && theme.variants.Tooltip[$variant]) ? theme.variants.Tooltip[$variant] : ''}
  ${({ theme }) => ((theme.overrides as any)?.Tooltip) ? (theme.overrides as any).Tooltip : ''}
  position: absolute;
  z-index: 100;
  min-width: 180px;
  max-width: 320px;
  padding: 20px 32px;
  background: ${({ theme }) => theme.colors.beige};
  color: ${({ theme }) => theme.colors.black};
  border: ${({ theme, $accent }) => theme.borderWidth} solid ${({ theme, $accent }) => accentColor($accent, theme)};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-family: ${({ theme }) => theme.fontFamilies.grotesk};
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.fontWeightBold};
  box-shadow: ${({ $withShadow }) => $withShadow !== false ? shadow : 'none'};
  transition: box-shadow 0.18s, transform 0.12s;
  text-transform: none;
  pointer-events: none;
  white-space: pre-line;
  ${({ $position }) => $position === 'top' && css`bottom: 100%; left: 50%; transform: translateX(-50%) translateY(-12px);`}
  ${({ $position }) => $position === 'bottom' && css`top: 100%; left: 50%; transform: translateX(-50%) translateY(12px);`}
  ${({ $position }) => $position === 'left' && css`right: 100%; top: 50%; transform: translateY(-50%) translateX(-12px);`}
  ${({ $position }) => $position === 'right' && css`left: 100%; top: 50%; transform: translateY(-50%) translateX(12px);`}
`;

const Arrow = styled.div<{ $position: TooltipPosition; $accent: TooltipProps['accent'] }>`
  position: absolute;
  width: 18px;
  height: 18px;
  background: ${({ theme }) => theme.colors.beige};
  border: ${({ theme, $accent }) => theme.borderWidth} solid ${({ theme, $accent }) => accentColor($accent, theme)};
  box-sizing: border-box;
  z-index: 101;
  ${({ $position }) => $position === 'top' && css`bottom: -10px; left: 50%; transform: translateX(-50%) rotate(45deg); border-top: none; border-left: none;`}
  ${({ $position }) => $position === 'bottom' && css`top: -10px; left: 50%; transform: translateX(-50%) rotate(45deg); border-bottom: none; border-right: none;`}
  ${({ $position }) => $position === 'left' && css`right: -10px; top: 50%; transform: translateY(-50%) rotate(45deg); border-top: none; border-right: none;`}
  ${({ $position }) => $position === 'right' && css`left: -10px; top: 50%; transform: translateY(-50%) rotate(45deg); border-bottom: none; border-left: none;`}
`;

export const Tooltip: React.FC<TooltipProps> = ({ content, position = 'top', accent, children, withShadow = true, sx, variant }) => {
  const [visible, setVisible] = useState(false);
  const timeout = useRef<NodeJS.Timeout | null>(null);

  const show = () => {
    timeout.current = setTimeout(() => setVisible(true), 100);
  };
  const hide = () => {
    if (timeout.current) clearTimeout(timeout.current);
    setVisible(false);
  };

  return (
    <TooltipWrapper
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      tabIndex={0}
    >
      {children}
      {visible && (
        <TooltipBox $withShadow={withShadow} $accent={accent} $position={position} $variant={variant} style={sx} role="tooltip">
          {content}
          <Arrow $position={position} $accent={accent} />
        </TooltipBox>
      )}
    </TooltipWrapper>
  );
}; 