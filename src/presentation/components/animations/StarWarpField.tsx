// src/presentation/components/Ui/StarWarpField.tsx
import { useEffect, useRef } from 'react';

const STAR_COUNT = 200;
const SPEED = 0.035;

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

function createStar(width: number, height: number) {
  const angle = randomBetween(0, 2 * Math.PI);
  const radius = randomBetween(0, Math.min(width, height) / 2);
  return {
    x: width / 2,
    y: height / 2,
    angle,
    radius,
    speed: randomBetween(0.5, 2),
    length: randomBetween(40, 120),
  };
}

const StarWarpField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let stars = Array.from({ length: STAR_COUNT }, () => createStar(width, height));
    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      for (let star of stars) {
        // Calculate new position
        star.radius += star.speed + SPEED * star.radius;
        const x = width / 2 + Math.cos(star.angle) * star.radius;
        const y = height / 2 + Math.sin(star.angle) * star.radius;

        // Dibuja la línea (estrella fugaz)
        ctx.save();
        ctx.strokeStyle = 'white';
        ctx.globalAlpha = 1 - star.radius / (Math.min(width, height) / 2);
        ctx.beginPath();
        ctx.moveTo(width / 2 + Math.cos(star.angle) * (star.radius - star.length), height / 2 + Math.sin(star.angle) * (star.radius - star.length));
        ctx.lineTo(x, y);
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.restore();

        // Si la estrella sale de la pantalla, la reiniciamos
        if (
          x < 0 || x > width ||
          y < 0 || y > height
        ) {
          Object.assign(star, createStar(width, height));
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    }

    animate();

    // Redimensionar canvas al cambiar el tamaño de la ventana
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      stars = Array.from({ length: STAR_COUNT }, () => createStar(width, height));
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current!);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        background: 'black'
      }}
    />
  );
};

export default StarWarpField;