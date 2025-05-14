import { Link } from 'react-router-dom';
import starWarsLogo from '../../assets/logo-sw-pagina-oficial.png';
import '../../styles/Header.css';
import LogSignButton from './Ui/LogSignButton';

const Header: React.FC = () => (
  <header className="header">
    <img src={starWarsLogo} alt="Star Wars Logo" className="logo" />
    <div className="auth-links">
      <Link to="/login"><LogSignButton>LOG IN</LogSignButton></Link>
      <Link to="/signup"><LogSignButton>SIGN UP</LogSignButton></Link>
    </div>
  </header>
);

export default Header;