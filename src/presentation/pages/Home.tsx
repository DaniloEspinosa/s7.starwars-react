import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to Star Wars App</h1>
      <nav className="space-x-4">
        <Link to="/starships" className="text-blue-500 hover:underline">
          Starships
        </Link>
        <Link to="/login" className="text-blue-500 hover:underline">
          Login
        </Link>
        <Link to="/sign-up" className="text-blue-500 hover:underline">
          Sign Up
        </Link>
      </nav>
    </div>
  );
};
