import { useEffect } from 'react';
import { useState } from 'react';
import { fetchMovie } from '../../service/api';
import MovieList from '../../components/MovieList/MovieList';
import css from './HomePage.module.css';
import { ClipLoader } from 'react-spinners';

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

  {
    isLoading && (
      <div className={css.iconLoader}>
        <ClipLoader color="fafafa" />
      </div>
    );
  }
  {
    isError && (
      <p>
        Sorry for the temporary inconvenience.
        <br />
        please reload the page or try again
      </p>
    );
  }

  return (
    <div className={css.boxHomePage}>
      <h1 className={css.mainTitle}>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
