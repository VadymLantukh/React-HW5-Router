import { useEffect, useState } from 'react';
import { movieCast } from '../../service/api';
import css from './MovieCast.module.css';

const MovieCast = ({ movieId }) => {
  const [movieCats, setMovieCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        setIsLoading(true);
        const response = await movieCast(movieId);
        setMovieCast(response.data.cast);
      } catch (error) {
        throw new Error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieCast();
  }, [movieId]);

  isLoading && <p>Loading movie cats...</p>;

  return (
    <ul className={css.listCast}>
      {movieCats.map(actor => {
        return (
          <li className={css.itemCast} key={actor.id}>
            {' '}
            {actor.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
              />
            ) : (
              <p>Not found Available</p>
            )}
            <p>{actor.name}</p>
            <p className={css.character}>Character: {actor.character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieCast;
