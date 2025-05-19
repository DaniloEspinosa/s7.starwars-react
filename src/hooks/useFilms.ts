import { useEffect, useState } from "react";

export function useFilms(filmUrls: string[] = []) {
  const [films, setFilms] = useState<any[]>([]);
  const [loadingFilms, setLoading] = useState(false);

  useEffect(() => {
    if (!filmUrls || filmUrls.length === 0) {
      setFilms([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    Promise.all(
      filmUrls.map(url =>
        fetch(url).then(res => res.json())
      )
    )
      .then(setFilms)
      .finally(() => setLoading(false));
  }, [JSON.stringify(filmUrls)]);

  return { films, loadingFilms };
}