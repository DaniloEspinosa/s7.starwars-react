import { Link, useNavigate } from "react-router-dom";
import "../../styles/Header.css";
import Button from "./Ui/Button";
import StarField from "./animations/StarField";
import Navbar from "./Navbar";
import { useAuth } from "../../firebase/useAuth";
import { logout } from "../../firebase/firebaseAuthHelpers";

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
              <Button onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button>Login</Button>
              </Link>
              <Link to="/signup">
                <Button>Signup</Button>
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
