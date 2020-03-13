import React from 'react';
import { Box } from 'rebass';
import MovieListItem from './MovieListItem';

function MovieList({ movies, favorites, onClickDetails }) {
  return (
    <div style={{ paddingTop: '54px' }}>
      {movies.map(movie => (
        <Box key={movie.title} sx={{ p: 1 }}>
          <MovieListItem
            favorites={favorites}
            onClickDetails={onClickDetails}
            movie={movie}
          />
        </Box>
      ))}
    </div>
  );
}

export default MovieList;
