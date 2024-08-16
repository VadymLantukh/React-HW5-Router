import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./page/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./page/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('./page/MovieDetailsPage/MovieDetailsPage')
);
const NotFoundPage = lazy(() => import('./page/NotFoundPage/NotFoundPage'));

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
