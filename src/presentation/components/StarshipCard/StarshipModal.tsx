import React from 'react';
import type { StarshipI } from '../../../models/StarshipsI';
import CloseButton from '../../components/Ui/CloseButton/CloseButton';

interface StarshipModalProps {
  starship: StarshipI;
  onClose: () => void;
}

const StarshipModal: React.FC<StarshipModalProps> = ({ starship, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 text-white rounded-lg p-6 max-w-2xl w-full relative">
        <CloseButton onClick={onClose} />
        <h2 className="text-2xl font-bold text-[#f5c518] mb-4">{starship.name}</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-400">Model</p>
            <p>{starship.model}</p>
          </div>
          <div>
            <p className="text-gray-400">Manufacturer</p>
            <p>{starship.manufacturer}</p>
          </div>
          <div>
            <p className="text-gray-400">Cost in Credits</p>
            <p>{starship.cost_in_credits}</p>
          </div>
          <div>
            <p className="text-gray-400">Length</p>
            <p>{starship.length}</p>
          </div>
          <div>
            <p className="text-gray-400">Crew</p>
            <p>{starship.crew}</p>
          </div>
          <div>
            <p className="text-gray-400">Passengers</p>
            <p>{starship.passengers}</p>
          </div>
          <div>
            <p className="text-gray-400">Cargo Capacity</p>
            <p>{starship.cargo_capacity}</p>
          </div>
          <div>
            <p className="text-gray-400">Consumables</p>
            <p>{starship.consumables}</p>
          </div>
          <div>
            <p className="text-gray-400">Hyperdrive Rating</p>
            <p>{starship.hyperdrive_rating}</p>
          </div>
          <div>
            <p className="text-gray-400">MGLT</p>
            <p>{starship.MGLT}</p>
          </div>
          <div>
            <p className="text-gray-400">Starship Class</p>
            <p>{starship.starship_class}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarshipModal; 