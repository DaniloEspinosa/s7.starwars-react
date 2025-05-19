import React from "react";
import starWarsLogo from "../../assets/star-wars.svg";
import "../../styles/StarshipModal.css";
import { usePilots } from "../../hooks/usePilots"; // importa el hook

interface StarshipModalProps {
  isOpen: boolean;
  onClose: () => void;
  starship: any;
}

const StarshipModal: React.FC<StarshipModalProps> = ({
  isOpen,
  onClose,
  starship,
}) => {
  const { pilots, loading } = usePilots(starship?.pilots);

  if (!isOpen || !starship) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <img src={starWarsLogo} alt="Star Wars" className="modal-image" />
        <h2>{starship.name}</h2>
        <p>
          <strong>Modelo:</strong> {starship.model}
        </p>
        <p>
          <strong>Fabricante:</strong> {starship.manufacturer}
        </p>
        <p>
          <strong>Clase:</strong> {starship.starship_class}
        </p>
        {/* Pilotos */}
        <div>
          <strong>Pilotos:</strong>
          {loading && <p>Cargando pilotos...</p>}
          {!loading && pilots.length === 0 && <p>No hay pilotos.</p>}
          {!loading && pilots.length > 0 && (
            <ul>
              {pilots.map((pilot) => (
                <li key={pilot.url}>{pilot.name}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default StarshipModal;
