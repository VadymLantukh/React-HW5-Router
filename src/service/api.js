import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const params = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODFhZGNmMjM1ZDBiM2UwZTEyNGM4YzA3MmU3ZDIzZCIsIm5iZiI6MTcyMzc1MjkxNy43NjIxNzEsInN1YiI6IjY2YmUyYzRjYmNiMDQzZjQ1NTVhYWE0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0YgVIs4LG7Hd2YHBM93286BB5wTTe1ccaBAh8p3_728',
  },
};

export const fetchMovie = async () => {
  const dataTrendingMove = await axios.get('/trending/movie/day', params);
  return dataTrendingMove;
};

export const searchMovies = async query => {
  const dataSearcjMove = await axios.get('/search/movie', {
    params: { query },
  });
  return dataSearcjMove;
};

export const movieDetails = async movieId => {
  const dataMovieDetails = await axios.get(`/movie/${movieId}`);
  return dataMovieDetails;
};

export const movieCast = async movieId => {
  const dataMovieCast = await axios.get(`/movie/${movieId}/credits`);
  return dataMovieCast;
};

export const movieReviews = async movieId => {
  const dataMovieReviews = await axios.get(`/movie/${movieId}/reviews`);
  return dataMovieReviews;
};
