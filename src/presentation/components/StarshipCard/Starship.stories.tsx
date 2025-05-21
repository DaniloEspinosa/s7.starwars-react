import type { Meta, StoryObj } from '@storybook/react';
import StarshipCard from './Starship';

const meta = {
  title: 'Components/StarshipCard',
  component: StarshipCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Tarjeta que muestra información de una nave espacial con estilo Star Wars.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    starship: {
      description: 'Datos de la nave espacial a mostrar',
    },
    handleStarshipClick: {
      action: 'starship clicked',
      description: 'Función que se ejecuta al hacer clic en la nave',
    },
  },
} satisfies Meta<typeof StarshipCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockStarship = {
  name: 'Millennium Falcon',
  model: 'YT-1300 light freighter',
  manufacturer: 'Corellian Engineering Corporation',
  cost_in_credits: '100000',
  length: '34.37',
  crew: '4',
  passengers: '6',
  cargo_capacity: '100000',
  consumables: '2 months',
  hyperdrive_rating: '0.5',
  MGLT: '75',
  starship_class: 'Light freighter',
  pilots: [],
  films: [
    'https://swapi.dev/api/films/1/',
    'https://swapi.dev/api/films/2/',
    'https://swapi.dev/api/films/3/',
  ],
  created: '2014-12-10T16:59:45.094000Z',
  edited: '2014-12-20T21:23:49.880000Z',
  url: 'https://swapi.dev/api/starships/10/',
};

export const Default: Story = {
  args: {
    starship: mockStarship,
    handleStarshipClick: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: 'Tarjeta por defecto mostrando información completa de una nave espacial.',
      },
    },
  },
};

export const LongName: Story = {
  args: {
    starship: {
      ...mockStarship,
      name: 'Super Long Starship Name That Might Wrap',
    },
    handleStarshipClick: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de tarjeta con un nombre de nave muy largo para probar el comportamiento del diseño.',
      },
    },
  },
}; 