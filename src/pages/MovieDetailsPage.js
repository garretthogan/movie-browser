import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import AppBar from '../AppBar';
import MovieDetails from '../MovieDetails';
import { getMovieById } from '../api';
import Close from '../Icons/Close';

function MovieDetailsPage(props) {
  const location = useLocation();
  const params = location.pathname.split('/');
  const id = params[params.length - 1];

  const [movie, setMovie] = useState({ ...props.movie });

  if (!movie.id) {
    getMovieById(id).then(setMovie);
  }

  return (
    <div>
      <AppBar title={movie.title}>
        <Link style={{ color: 'white', paddingTop: '4px' }} to='/'>
          <Close />
        </Link>
      </AppBar>
      {movie.id && (
        <MovieDetails
          favorites={props.favorites}
          onFavorite={props.onFavorite}
          movie={movie}
        />
      )}
    </div>
  );
}

export default MovieDetailsPage;
