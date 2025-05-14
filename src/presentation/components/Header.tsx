import starWarsLogo from '../../assets/star-wars.svg';
import '../../styles/Header.css';

const Header: React.FC = () => (
  <header className="header">
    <img src={starWarsLogo} alt="Star Wars Logo" className="logo" />
    <div className="auth-links">
      <a href="/login">LOG IN</a> // <a href="/signup">SIGN UP</a>
    </div>
  </header>
);

export default Header;