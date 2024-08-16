import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id.toString()}`}>
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
