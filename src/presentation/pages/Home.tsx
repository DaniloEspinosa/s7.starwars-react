import { useEffect, useState } from 'react';
import '../../styles/StarWarsIntro.css';
import StarField from '../components/Ui/StarField';

export const Home = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Ocultar el intro después de 60 segundos (duración de la animación)
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  const introText = `
    A long time ago in a galaxy far, far away...

    STAR WARS
    THE FORCE AWAKENS

    Luke Skywalker has vanished.
    In his absence, the sinister
    FIRST ORDER has risen from
    the ashes of the Empire
    and will not rest until
    Skywalker, the last Jedi,
    has been destroyed.

    With the support of the
    REPUBLIC, General Leia Organa
    leads a brave RESISTANCE.
    She is desperate to find her
    brother Luke and gain his
    help in restoring peace and
    justice to the galaxy.

    Leia has sent her most daring
    pilot on a secret mission
    to Jakku, where an old ally
    has discovered a clue to
    Luke's whereabouts....
  `;

  return (
    <>
      <div className="star-wars-intro">
        {showIntro ? (
          <div className="crawl">
            <div className="crawl-content">
              {introText.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>
        ) : (
          <div className="intro-text">
            <h1>Welcome to Star Wars App</h1>
            <p>Explore the galaxy and discover all the starships from the Star Wars universe.</p>
            <p>Click on any starship to learn more about it!</p>
          </div>
        )}
      </div>
    </>
  );
};
