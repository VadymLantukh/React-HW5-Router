import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../service/api';
import MovieList from '../../components/MovieList/MovieList';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('query') ?? '';

  const handleSubmit = async evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const searchQuery = form.elements.query.value;
    setSearchParams({ query: searchQuery });
    form.reset();

    try {
      const response = await searchMovies(searchQuery);
      setMovies(response.data.results);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          defaultValue={query}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </form>

      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
