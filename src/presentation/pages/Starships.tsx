import { useEffect, useState } from "react";
import type { Starship } from "../../domain/models/Starships";
import StarshipModal from "../components/StarshipModal";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store/store";
import { fetchStarshipsAsync } from "../../store/features/starshipsSlice";
import InfiniteScroll from "../components/Ui/InfiniteScroll";

export const StarshipsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: starships, nextPage, loading } = useSelector((state: RootState) => state.starships);
  const [selectedStarship, setSelectedStarship] = useState<Starship | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchStarshipsAsync());
  }, [dispatch]);

  const fetchMoreStarships = () => {
    if (!nextPage || loading) return;
    dispatch(fetchStarshipsAsync(nextPage));
  };

  const handleStarshipClick = (starship: Starship) => {
    setSelectedStarship(starship);
    setModalOpen(true);
  };

  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Starships</h1>
        <InfiniteScroll
          onLoadMore={fetchMoreStarships}
          hasMore={!!nextPage}
          loading={loading}
        >
          <ul className="space-y-2">
            {starships.map((starship) => (
              <li key={starship.url} className="p-4 bg-gray-800 text-white rounded-lg"
                onClick={() => handleStarshipClick(starship)}
                style={{ cursor: 'pointer' }}>
                <h2 className="text-xl">{starship.name}</h2>
                <p>{starship.model}</p>
              </li>
            ))}
          </ul>
        </InfiniteScroll>
      </div>
      <StarshipModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        starship={selectedStarship}
      />
    </>
  );
};
