import React from 'react';
import { Image, Box, Text, Flex } from 'rebass';
import moment from 'moment';
import Score from './Score';
import Star from './Icons/Star';

function MovieDetails({ movie, onFavorite, favorites }) {
  const onClickFavorite = () => {
    onFavorite(favorites, movie);
  };

  return (
    <Box style={{ paddingTop: '64px' }}>
      <Flex px={2}>
        <Box p={[0, 2]} width={1 / 3}>
          <Image
            sx={{ width: 256 }}
            src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${movie.poster_path}`}
          />
        </Box>
        <Box
          width={1 / 2}
          sx={{
            display: 'flex',
            alignItems: 'center'
          }}
          px={3}
        >
          <Text sx={{ display: 'inline' }} fontSize={[1, 2, 3]}>
            Released {moment(movie.release_date).format('MMMM Do YYYY')}
          </Text>
        </Box>
        <Box
          width={1 / 8}
          pt={[0, 2]}
          sx={{
            display: 'inline',
            paddingRight: 2
          }}
        >
          <Score sx={{ float: 'right' }} score={movie.popularity} />
        </Box>
        <Box
          width={1 / 10}
          pt={[0, 3]}
          sx={{
            display: 'inline'
          }}
        >
          <Star
            color='black'
            isFilled={favorites.includes(movie.id)}
            onClick={onClickFavorite}
            width='36'
            height='36'
          />
        </Box>
      </Flex>
      <Box px={2} pt={2}>
        {movie.overview}
      </Box>
    </Box>
  );
}

export default MovieDetails;
