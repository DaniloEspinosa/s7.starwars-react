import { useEffect, useState } from "react";

export function usePilots(pilotUrls: string[] = []) {
  const [pilots, setPilots] = useState<any[]>([]);
  const [loadingPilots, setLoading] = useState(false);

  useEffect(() => {
    if (!pilotUrls || pilotUrls.length === 0) {
      setPilots([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    Promise.all(pilotUrls.map((url) => fetch(url).then((res) => res.json())))
      .then(setPilots)
      .finally(() => setLoading(false));
    // El truco: usar JSON.stringify para comparar el contenido del array
  }, [JSON.stringify(pilotUrls)]);

  return { pilots, loadingPilots };
}
