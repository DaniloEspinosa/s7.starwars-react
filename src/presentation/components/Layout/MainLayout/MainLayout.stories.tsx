import type { Meta, StoryObj } from '@storybook/react';
import MainLayout from './MainLayout';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

const meta = {
  title: 'Layout/MainLayout',
  component: MainLayout,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Layout principal de la aplicación que incluye el header y el contenido principal.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Routes>
          <Route path="/*" element={<Story />} />
        </Routes>
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof MainLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Layout principal por defecto con header y área de contenido.',
      },
    },
  },
}; 