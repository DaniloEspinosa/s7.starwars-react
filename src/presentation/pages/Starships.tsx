import { useEffect, useState } from "react";
import type { StarshipI } from "../../models/StarshipsI";
import StarshipModal from "../components/StarshipModal";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store/store";
import { fetchStarshipsAsync } from "../../store/features/starshipsSlice";
import InfiniteScroll from "../components/Ui/InfiniteScroll";
import Starship from "../components/Starship";

export const StarshipsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    items: starships,
    nextPage,
    loading,
  } = useSelector((state: RootState) => state.starships);
  const [selectedStarship, setSelectedStarship] = useState<StarshipI | null>(
    null
  );
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchStarshipsAsync());
  }, [dispatch]);

  const fetchMoreStarships = () => {
    if (!nextPage || loading) return;
    dispatch(fetchStarshipsAsync(nextPage));
  };

  const handleStarshipClick = (starship: StarshipI) => {
    setSelectedStarship(starship);
    setModalOpen(true);
  };

  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Starships Star Wars</h1>
        <InfiniteScroll
          onLoadMore={fetchMoreStarships}
          hasMore={!!nextPage}
          loading={loading}
        >
          <ul className="space-y-2">
            {starships.map((starship) => (
              <Starship
                key={starship.url}
                starship={starship}
                handleStarshipClick={handleStarshipClick}
              />
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
