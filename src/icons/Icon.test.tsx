import React from 'react';
import { render } from '@testing-library/react';
import { Icon } from './Icon';

describe('Icon', () => {
  it('рендерит нужную иконку', () => {
    const { container } = render(<Icon name="check" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
    expect(container.innerHTML).toContain('polyline');
  });

  it('применяет size и color', () => {
    const { container } = render(<Icon name="plus" size={48} color="#F56D39" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '48');
    expect(svg).toHaveAttribute('height', '48');
    expect(svg).toHaveAttribute('stroke', '#F56D39');
  });

  it('ничего не рендерит для несуществующего имени', () => {
    // @ts-expect-error
    const { container } = render(<Icon name="not-exist" />);
    expect(container.innerHTML).toBe('');
  });
}); 