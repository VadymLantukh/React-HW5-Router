import { useEffect, useState } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { movieDetails } from '../../service/api';
import MovieCast from '../../components/MovieCast/MovieCast';
import MovieReviews from '../../components/MovieReviews/MovieReviews';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const imageUrl = movie
    ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
    : 'Not found poster';

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

  if (isLoading) return <p>Loading...</p>;
  if (!movie) return <div>Movie not found</div>;

  return (
    <>
      <Link to="/">Go back</Link>
      <div>
        <img src={imageUrl} alt={movie.original_title} />
        <div>
          <h2>{`${movie.original_title}: (${movie.release_date})`}</h2>
          <p>{`Vote average: ${movie.vote_average.toFixed(1)}`}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
        </div>
        <div>
          <p>Additional information</p>
          <ul>
            <li>
              <Link to={`/movies/${movieId}/cast`}>Cast</Link>
            </li>
            <li>
              <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="cast" element={<MovieCast movieId={movieId} />} />
          <Route path="reviews" element={<MovieReviews movieId={movieId} />} />
        </Routes>
      </div>
    </>
  );
};

export default MovieDetailsPage;
