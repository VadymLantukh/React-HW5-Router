import { useEffect } from 'react';
import { useState } from 'react';
import { fetchMovie } from '../../service/api';
import MovieList from '../../components/MovieList/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const fetchTredingMovies = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const response = await fetchMovie();
        setMovies(response.data.results);
      } catch (error) {
        setError(true);
        throw new Error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTredingMovies();
  }, []);

  isLoading && <p>Loadling...</p>;
  isError && (
    <p>
      Sorry for the temporary inconvenience.
      <br />
      please reload the page or try again
    </p>
  );

  return (
    <div>
      <h1>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
