import { useEffect, useState } from "react";
import type { Starship } from "../../domain/models/Starships";
import { fetchStarships } from "../../data/starships/starshipsRepository";

export const StarshipsPage = () => {
  const [starships, setStarships] = useState<Starship[]>([]);

  useEffect(() => {
    fetchStarships().then(setStarships);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Starships</h1>
      <ul className="space-y-2">
        {starships.map((ship) => (
          <li key={ship.name} className="p-4 bg-gray-800 text-white rounded-lg">
            <h2 className="text-xl">{ship.name}</h2>
            <p>{ship.model}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
