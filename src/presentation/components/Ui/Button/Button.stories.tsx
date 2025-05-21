import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

// Metadata para el componente
const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Botón personalizado con estilo Star Wars. Incluye efectos hover y transiciones suaves.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { 
      action: 'clicked',
      description: 'Función que se ejecuta al hacer clic en el botón',
    },
    children: { 
      control: 'text',
      description: 'Contenido del botón (texto o elementos)',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Historia básica
export const Default: Story = {
  args: {
    children: 'Click me',
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón por defecto con estilo Star Wars. Incluye borde dorado y efecto hover.',
      },
    },
  },
};

// Historia con texto personalizado
export const ViewStarships: Story = {
  args: {
    children: 'View Starships',
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón usado en la página principal para navegar a la lista de naves.',
      },
    },
  },
};

// Historia con texto largo
export const LongText: Story = {
  args: {
    children: 'This is a button with a very long text that might wrap',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de botón con texto largo para probar el comportamiento del diseño.',
      },
    },
  },
}; 