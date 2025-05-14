import React from 'react';
import starWarsLogo from '../../assets/star-wars.svg';
import '../../styles/StarshipModal.css';

interface StarshipModalProps {
    isOpen: boolean;
    onClose: () => void;
    starship: any; // Puedes tipar mejor si tienes el tipo
}

const StarshipModal: React.FC<StarshipModalProps> = ({ isOpen, onClose, starship }) => {
    if (!isOpen || !starship) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>×</button>
                <img src={starWarsLogo} alt="Star Wars" className="modal-image" />
                <h2>{starship.name}</h2>
                <p><strong>Modelo:</strong> {starship.model}</p>
                <p><strong>Fabricante:</strong> {starship.manufacturer}</p>
                <p><strong>Clase:</strong> {starship.starship_class}</p>
                {/* Agrega más campos si lo deseas */}
            </div>
        </div>
    );
};

export default StarshipModal;