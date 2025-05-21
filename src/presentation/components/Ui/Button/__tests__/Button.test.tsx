import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Button';

describe('Button', () => {
  it('renders with children', () => {
    render(<Button>Test Button</Button>);
    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    
    const button = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders with correct styles', () => {
    render(<Button>Styled Button</Button>);
    const button = screen.getByRole('button', { name: /styled button/i });
    
    // Verifica las clases de Tailwind
    expect(button).toHaveClass('bg-transparent');
    expect(button).toHaveClass('border');
    expect(button).toHaveClass('border-[#f5c518]');
    expect(button).toHaveClass('text-[#f5c518]');
    expect(button).toHaveClass('hover:bg-[#f5c518]');
    expect(button).toHaveClass('hover:text-black');
    expect(button).toHaveClass('cursor-pointer');
    expect(button).toHaveClass('transition');
  });

  it('works without onClick prop', () => {
    render(<Button>No Click Handler</Button>);
    const button = screen.getByRole('button', { name: /no click handler/i });
    
    // Verifica que el botón existe y no lanza error al hacer clic
    expect(button).toBeInTheDocument();
    expect(() => fireEvent.click(button)).not.toThrow();
  });
}); 