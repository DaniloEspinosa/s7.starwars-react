import type { Starship } from "../../domain/models/Starships";

const API_URL = 'https://swapi.py4e.com/api/starships/';

export interface StarshipsResponse {
  results: Starship[];
  next: string | null;
}

export const fetchStarships = async (url: string = API_URL): Promise<StarshipsResponse> => {
  const res = await fetch(url);
  const data = await res.json();
  return {
    results: data.results,
    next: data.next,
  };
};
