import { useEffect, useState } from "react";
import "../../styles/StarWarsIntro.css";
import Button from "../components/Ui/VIewMoreButton";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export const Home = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 17000);

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

  const navigate = useNavigate();

  function handleClick() {
    navigate("/starships");
  }

  return (
    <>
      <Header />
      <div className="star-wars-intro">
        {showIntro ? (
          <div className="crawl">
            <div className="crawl-content">
              {introText.split("\n").map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>
        ) : (
          <div className="intro-text">
            <h1>Welcome to Star Wars App</h1>
            <p>
              Explore the galaxy and discover all the starships from the Star
              Wars universe.
            </p>
            <p>Click on any starship to learn more about it!</p>
            <Button onClick={handleClick}>View Starships</Button>
          </div>
        )}
      </div>
    </>
  );
};
