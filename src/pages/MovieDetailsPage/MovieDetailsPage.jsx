import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { movieDetails } from '../../service/api';
import css from './MovieDetailsPage.module.css';
import { ClipLoader } from 'react-spinners';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const imageUrl = movie
    ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
    : 'Not found poster';
  const backLocation = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchMoviesDetails = async () => {
      try {
        setIsLoading(true);
        const response = await movieDetails(movieId);
        setMovie(response.data);
      } catch (error) {
        throw new Error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMoviesDetails();
  }, [movieId]);

  {
    if (isLoading)
      return (
        <div className={css.iconLoader}>
          <ClipLoader color="fafafa" />
        </div>
      );
  }
  {
    if (!movie) return <div>Movie not found</div>;
  }

  return (
    <>
      <Link className={css.linkBack} to={backLocation.current}>
        Go-back
      </Link>
      <div>
        <div className={css.boxFilm}>
          <div className={css.boxInformation}>
            <img src={imageUrl} alt={movie.original_title} />
            <div className={css.boxParameters}>
              <h2>{`${movie.original_title}: (${movie.release_date})`}</h2>
              <p
                className={css.average}
              >{`Vote average: ${movie.vote_average.toFixed(1)}`}</p>
              <h3>Overview</h3>
              <p className={css.overview}>{movie.overview}</p>
              <h3>Genres</h3>
              <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
            </div>
          </div>

          <div className={css.additional}>
            <h3 className={css.titleInformation}>Additional information</h3>
            <ul className={css.listInformation}>
              <li>
                <Link className={css.linkInformation} to={'cast'}>
                  Cast
                </Link>
              </li>
              <li>
                <Link className={css.linkInformation} to={'reviews'}>
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MovieDetailsPage;
