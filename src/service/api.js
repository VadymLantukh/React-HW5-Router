import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const params = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODFhZGNmMjM1ZDBiM2UwZTEyNGM4YzA3MmU3ZDIzZCIsIm5iZiI6MTcyMzc4OTUzMy4xMzUxMywic3ViIjoiNjZiZTJjNGNiY2IwNDNmNDU1NWFhYTQyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.DvPCpWRXyC4L5iRuiafijgKMIiFyyhckP5cHBfZM3sc',
  },
};

export const fetchMovie = async () => {
  const dataTrendingMove = await axios.get('/trending/movie/day', params);
  return dataTrendingMove;
};

export const searchMovies = async query => {
  const dataSearcjMove = await axios.get('/search/movie', {
    ...params,
    params: { query },
  });
  return dataSearcjMove;
};

export const movieDetails = async movieId => {
  const dataMovieDetails = await axios.get(`/movie/${movieId}`, params);
  return dataMovieDetails;
};

export const movieCast = async movieId => {
  const dataMovieCast = await axios.get(`/movie/${movieId}/credits`, params);
  return dataMovieCast;
};

export const movieReviews = async movieId => {
  const dataMovieReviews = await axios.get(`/movie/${movieId}/reviews`, params);
  return dataMovieReviews;
};
