import { NavLink, Link } from 'react-router-dom';
import menuIcon from '../../icons/menu.svg';

function Header({ isMenuVisible, setIsMenuVisible }) {
  const menuHandler = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  return (
    <header className='main__header header'>
      <div className='header__wrapper'>
        <i className='mob__menu header__menu-button' onClick={menuHandler}>
          <img src={menuIcon} alt='menu icon' />
        </i>
        <div className='header__logo'>
          <h1>
            <Link to='/'>React CP</Link>
          </h1>
        </div>
        <nav className='header__nav nav'>
          <ul
            className='nav__list'
            style={isMenuVisible ? { display: 'block' } : { display: 'none' }}>
            <li className='nav__item'>
              <NavLink to='/' onClick={menuHandler}>
                Главная
              </NavLink>
            </li>
            <li className='nav__item'>
              <NavLink to='/new' onClick={menuHandler}>
                Добавить новый
              </NavLink>
            </li>
          </ul>
          <div
            className='nav__backdrop'
            style={isMenuVisible ? { display: 'block' } : { display: 'none' }}
            onClick={menuHandler}></div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
