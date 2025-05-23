import type { StarshipI } from "../../models/StarshipsI";

const API_URL = 'https://swapi.py4e.com/api/starships/';

export interface StarshipsResponse {
  results: StarshipI[];
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
