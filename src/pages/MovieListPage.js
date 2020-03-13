import React from 'react';
import MovieList from '../MovieList';
import AppBar from '../AppBar';

function MovieListPage({ onClickDetails, movies, favorites }) {
  return (
    <div>
      <AppBar title='Movies' />
      <MovieList
        favorites={favorites}
        onClickDetails={onClickDetails}
        movies={movies}
      />
    </div>
  );
}

export default MovieListPage;
