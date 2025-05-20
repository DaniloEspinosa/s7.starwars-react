import { Link, useNavigate } from "react-router-dom";
import "../../styles/Header.css";
import LogSignButton from "./Ui/Button";
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
          <img
            src="logo-sw-pagina-oficial.png"
            alt="Star Wars Logo"
            className="logo"
          />
        </Link>

        <div className="auth-links">
          {user ? (
            <>
              <span className="font-semibold">Logeado</span>
              <button onClick={handleLogout}>
                <LogSignButton>Logout</LogSignButton>
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <LogSignButton>Login</LogSignButton>
              </Link>
              <Link to="/signup">
                <LogSignButton>Signup</LogSignButton>
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
