import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { getPopularMoviesByYear } from './api';
import MovieListPage from './pages/MovieListPage';
import MovieDetailsPage from './pages/MovieDetailsPage';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const history = useHistory();

  const handleClickDetails = movie => {
    history.push(`/movie/${movie.id}`);
    setSelectedMovie(movie);
  };

  const handleClickFavorite = (favorites, movie) => {
    const isFav = favoriteMovies.includes(movie.id);
    setFavoriteMovies(
      isFav
        ? favoriteMovies.filter(m => m.id === movie.id)
        : [...favoriteMovies, movie.id]
    );
  };

  useEffect(() => {
    getPopularMoviesByYear(2016).then(res => setMovies(res));
  }, []);

  return (
    <div>
      <Switch>
        <Route path='/movie/:id'>
          <MovieDetailsPage
            onFavorite={handleClickFavorite}
            movie={selectedMovie}
            favorites={favoriteMovies}
          />
        </Route>
        <Route path='/'>
          <MovieListPage
            favorites={favoriteMovies}
            onClickDetails={handleClickDetails}
            movies={movies}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
