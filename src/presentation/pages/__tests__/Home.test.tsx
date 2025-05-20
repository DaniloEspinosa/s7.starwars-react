import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Home } from '../Home';

// Mock useNavigate
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('Home', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  it('shows intro text initially', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    // Verifica que el texto de la intro está presente usando una búsqueda parcial
    expect(screen.getByText(/A long time ago in a galaxy/i)).toBeInTheDocument();
    expect(screen.getByText(/STAR WARS/i)).toBeInTheDocument();
  });

  it('shows welcome content after intro', async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    // Avanza el tiempo para que termine la intro
    await act(async () => {
      vi.advanceTimersByTime(17000);
    });

    // Verifica que el contenido de bienvenida está presente
    expect(screen.getByText(/Welcome to Star Wars App/i)).toBeInTheDocument();
    expect(screen.getByText(/Explore the galaxy/i)).toBeInTheDocument();
    expect(screen.getByText(/Click on any starship/i)).toBeInTheDocument();
  });

  it('navigates to starships page when button is clicked', async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    // Avanza el tiempo para que termine la intro
    await act(async () => {
      vi.advanceTimersByTime(17000);
    });

    // Encuentra y hace clic en el botón
    const button = screen.getByRole('button', { name: /view starships/i });
    await act(async () => {
      fireEvent.click(button);
    });

    // Verifica que se llamó a navigate con la ruta correcta
    expect(mockNavigate).toHaveBeenCalledWith('/starships');
  });

  it('cleans up timer on unmount', () => {
    const clearTimeoutSpy = vi.spyOn(window, 'clearTimeout');
    
    const { unmount } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    // Desmonta el componente
    unmount();

    // Verifica que se llamó a clearTimeout
    expect(clearTimeoutSpy).toHaveBeenCalled();
  });
}); 