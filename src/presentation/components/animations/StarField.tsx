import { useEffect, useRef } from 'react';
import '../../../styles/Stars.css';

const StarField = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Crear 100 estrellas
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      // Posición aleatoria
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      
      // Duración aleatoria entre 1 y 3 segundos
      const duration = 1 + Math.random() * 2;
      star.style.setProperty('--duration', `${duration}s`);
      
      // Retraso aleatorio
      star.style.animationDelay = `${Math.random() * 2}s`;
      
      container.appendChild(star);
    }

    // Limpieza
    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return <div ref={containerRef} className="stars" />;
};

export default StarField; 