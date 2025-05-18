import { Link, useNavigate } from "react-router-dom";
import "../../styles/Header.css";
import LogSignButton from "./Ui/LogSignButton";
import StarField from "./animations/StarField";
import Navbar from "./Navbar";
import { useAuth } from "../../infra/api/useAuth";
import { logout } from "../../infra/api/firebaseAuthHelpers";

const Header = () => {
  const user = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <>
      <header className="header">
        <StarField />
        <Link to="/" className="font-bold text-2xl">
          <img src="logo-sw-pagina-oficial.png" alt="Star Wars Logo" className="logo" />
        </Link>

        <div className="auth-links">
        {user ? (
          <>
            <span className="font-semibold">Logeado</span>
            <button
              onClick={handleLogout}
              className="bg-[#f5c518] text-black px-4 py-2 rounded font-bold hover:bg-[#f5b518] transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="bg-[#f5c518] text-black px-4 py-2 rounded font-bold hover:bg-[#f5b518] transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-transparent border border-[#f5c518] text-[#f5c518] px-4 py-2 rounded font-bold hover:bg-[#f5c518] hover:text-black transition"
            >
              Signup
            </Link>
          </>
        )}
        </div>
      </header>
      <Navbar />
    </>
  );
};

export default Header;
