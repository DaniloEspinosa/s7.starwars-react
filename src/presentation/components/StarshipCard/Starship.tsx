import type { StarshipI } from "../../../models/StarshipsI";

interface Props {
  starship: StarshipI;
  handleStarshipClick: (starship: StarshipI) => void;
}

const Starship = ({ starship, handleStarshipClick }: Props) => {
  return (
    <li
      className="p-4 bg-gray-800 text-white rounded-lg"
      onClick={() => handleStarshipClick(starship)}
      style={{ cursor: "pointer" }}
    >
      <h2 className="text-xl text-[#f5c518]">{starship.name}</h2>
      <p>{starship.model}</p>
    </li>
  );
};

export default Starship;
