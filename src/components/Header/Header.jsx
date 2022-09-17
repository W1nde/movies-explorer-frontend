import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/user-context';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

function Header({main}) {
  const { userState } = useContext(CurrentUserContext);

  return (
    <header className={`header ${main ? "header__alt" : ""} `}>
      <Link to='/' className='header__logo'>
        <img src={logo} alt='логотип' />
      </Link>

      <Navigation loggedIn={userState.loggedIn} />
    </header>
  );
}

export default Header;
