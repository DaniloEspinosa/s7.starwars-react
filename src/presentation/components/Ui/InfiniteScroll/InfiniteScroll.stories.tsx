import type { Meta, StoryObj } from '@storybook/react';
import InfiniteScroll from './InfiniteScroll';

const meta = {
  title: 'UI/InfiniteScroll',
  component: InfiniteScroll,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Componente para cargar contenido de forma infinita al hacer scroll.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onLoadMore: {
      action: 'load more',
      description: 'Función que se ejecuta cuando se necesita cargar más contenido',
    },
    hasMore: {
      control: 'boolean',
      description: 'Indica si hay más contenido para cargar',
    },
    children: {
      control: 'text',
      description: 'Contenido a mostrar dentro del scroll infinito',
    },
  },
} satisfies Meta<typeof InfiniteScroll>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    hasMore: true,
    children: 'Contenido de ejemplo',
  },
  parameters: {
    docs: {
      description: {
        story: 'Scroll infinito por defecto con contenido de ejemplo.',
      },
    },
  },
};

export const NoMoreContent: Story = {
  args: {
    hasMore: false,
    children: 'No hay más contenido para cargar',
  },
  parameters: {
    docs: {
      description: {
        story: 'Scroll infinito cuando no hay más contenido para cargar.',
      },
    },
  },
}; 