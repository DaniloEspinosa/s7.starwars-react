import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import Navbar from '../Navbar';

describe('Navbar', () => {
  it('renders navigation links', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(screen.getByText('HOME')).toBeInTheDocument();
    expect(screen.getByText('STARSHIPS')).toBeInTheDocument();
  });

  it('has correct links', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const homeLink = screen.getByText('HOME');
    const starshipsLink = screen.getByText('STARSHIPS');

    expect(homeLink.getAttribute('href')).toBe('/');
    expect(starshipsLink.getAttribute('href')).toBe('/starships');
  });

  it('applies the active class to the correct link', () => {
    // Simula que la ruta actual es /starships
    render(
      <MemoryRouter initialEntries={["/starships"]}>
        <Navbar />
      </MemoryRouter>
    );

    const homeLink = screen.getByText('HOME');
    const starshipsLink = screen.getByText('STARSHIPS');

    expect(homeLink).not.toHaveClass('active');
    expect(starshipsLink).toHaveClass('active');
  });
}); 