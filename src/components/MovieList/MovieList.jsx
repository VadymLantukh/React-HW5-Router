import { Link } from 'react-router-dom';
import css from './MovieList.module.css'

const MovieList = ({ movies }) => {
  return (
    <div>
      <ul className={css.listMovie}>
        {movies.map(movie => {
          return (
            <li className={css.itemMovie} key={movie.id}>
              <Link className={ css.itemLink} to={`/movies/${movie.id.toString()}`}>
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
