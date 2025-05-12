import type { Starship } from "../../domain/models/Starships";

export const fetchStarships = async (): Promise<Starship[]> => {
  const res = await fetch("https://swapi.py4e.com/api/starships/");
  const data = await res.json();
  return data.results;
};
