import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      <ul className={css.listMovie}>
        {movies.map(movie => {
          return (
            <li className={css.itemMovie} key={movie.id}>
              <Link
                className={css.itemLink}
                to={`/movies/${movie.id.toString()}`}
                state={location}
              >
                <h3>{movie.title}</h3>
              </Link>
            </li> 
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
