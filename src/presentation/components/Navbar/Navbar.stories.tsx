import type { Meta, StoryObj } from '@storybook/react';
import Navbar from './Navbar';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

const withRouter = (initialEntries: string[]) => (Story: React.ComponentType) => (
  <MemoryRouter initialEntries={initialEntries}>
    <Routes>
      <Route path="/*" element={<Story />} />
    </Routes>
  </MemoryRouter>
);

const meta = {
  title: 'Navigation/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Barra de navegación principal con estilo Star Wars. Incluye logo y enlaces de navegación.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [withRouter(['/'])],
  parameters: {
    docs: {
      description: {
        story: 'Barra de navegación por defecto con todos los enlaces activos.',
      },
    },
  },
};

export const HomeActive: Story = {
  decorators: [withRouter(['/'])],
  parameters: {
    docs: {
      description: {
        story: 'Barra de navegación con el enlace Home activo.',
      },
    },
  },
};

export const StarshipsActive: Story = {
  decorators: [withRouter(['/starships'])],
  parameters: {
    docs: {
      description: {
        story: 'Barra de navegación con el enlace Starships activo.',
      },
    },
  },
}; 