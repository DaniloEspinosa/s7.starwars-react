import React from "react";
import starWarsLogo from "../../assets/star-wars.svg";
import "../../styles/StarshipModal.css";
import { usePilots } from "../../hooks/usePilots";
import { useFilms } from "../../hooks/useFilms";

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
  const { pilots, loadingPilots } = usePilots(starship?.pilots);
  const { films, loadingFilms } = useFilms(starship?.films);

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
          {loadingPilots && <p>Cargando pilotos...</p>}
          {!loadingPilots && pilots.length === 0 && <p>No hay pilotos.</p>}
          {!loadingPilots && pilots.length > 0 && (
            <ul>
              {pilots.map((pilot) => (
                <li key={pilot.url}>{pilot.name}</li>
              ))}
            </ul>
          )}
        </div>
        {/* Peliculas */}
        <div>
          <strong>Películas:</strong>
          {loadingFilms && <p>Cargando películas...</p>}
          {!loadingFilms && films.length === 0 && <p>No aparece en ninguna película.</p>}
          {!loadingFilms && films.length > 0 && (
            <ul>
              {films.map((film) => (
                <li key={film.url}>{film.title}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default StarshipModal;
