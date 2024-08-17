import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
  const addActive = ({ isActive }) => (isActive ? css.active : css.link);
  return (
    <nav className={css.navBox}>
      <NavLink className={addActive} to="/">
        Home
      </NavLink>
      <NavLink className={addActive} to="/movies">
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
