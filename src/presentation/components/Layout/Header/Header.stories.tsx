import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';

const meta = {
  title: 'Layout/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Encabezado principal de la aplicación con navegación.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Encabezado por defecto con logo y navegación.',
      },
    },
  },
}; 