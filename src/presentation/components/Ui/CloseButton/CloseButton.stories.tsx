import type { Meta, StoryObj } from '@storybook/react';
import CloseButton from './CloseButton';

const meta = {
  title: 'UI/CloseButton',
  component: CloseButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Botón de cierre con icono X. Usado comúnmente en modales y popups.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      action: 'clicked',
      description: 'Función que se ejecuta al hacer clic en el botón',
    },
  },
} satisfies Meta<typeof CloseButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Botón de cierre por defecto con icono X.',
      },
    },
  },
}; 