import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies.map(movie => {
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <img src={movie.poster_path} alt={movie.title} />
              <h3>{movie.title}</h3>
            </Link>
          </li>;
          console.log(movie);
          console.log(movie.poster_path);
        })}
      </ul>
    </div>
  );
};

export default MovieList;
