import { useEffect, useState } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { movieDetails } from '../../service/api';
import MovieCast from '../../components/MovieCast/MovieCast';
import MovieReviews from '../../components/MovieReviews/MovieReviews';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMoviesDetails = async () => {
      try {
        setIsLoading(true);
        const response = await movieDetails(movieId);
        setMovies(response.data);
      } catch (error) {
        throw new Error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMoviesDetails();
  }, [movieId]);

  isLoading && <p>Loading...</p>;
  if (!movie) return <div>Movie not found</div>;
  
    const imageUrl = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;

  return (
    <div>
      <img src={imageUrl} alt="asd" />

      <Link to="/">Go Home</Link>
      <Routes>
        <Route path="cast" element={<MovieCast movieId={movieId} />} />
        <Route path="reviews" element={<MovieReviews movieId={movieId} />} />
      </Routes>
    </div>
  );
};

export default MovieDetailsPage;
