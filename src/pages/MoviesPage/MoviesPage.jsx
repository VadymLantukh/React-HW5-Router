import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../service/api';
import MovieList from '../../components/MovieList/MovieList';
import css from './MoviesPage.module.css';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const fetchMovies = async () => {
      if (!query) return;

      try {
        const response = await searchMovies(query);
        setMovies(response.data.results);
      } catch (error) {
        throw new Error(error.message);
      }
    };

    fetchMovies();
  }, [query]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const searchQuery = form.elements.query.value.trim();

    if (searchQuery === '') {
      return;
    }

    setSearchParams({ query: searchQuery });
    form.reset();
  };

  return (
    <div className={css.boxSearchPage}>
      <form onSubmit={handleSubmit}>
        <input
          className={css.inputSearch}
          type="text"
          name="query"
          defaultValue={query}
          placeholder="Search..."
        />
        <button className={css.btnSearch} type="submit">
          Search
        </button>
      </form>

      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
