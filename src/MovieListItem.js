import React from 'react';
import { Card, Image, Box, Text, Flex, Button } from 'rebass';
import moment from 'moment';
import Score from './Score';
import Star from './Icons/Star';

function MovieListItem({ movie, favorites, onClickDetails }) {
  const isFavorite = favorites.includes(movie.id);
  return (
    <Card
      sx={{
        p: 2,
        border: '0.3px solid #808080',
        borderRadius: 2,
        boxShadow: '0px 2px 10px #e0e0e0;'
      }}
    >
      <Box pb={2}>
        <Text fontSize={[2, 3, 4]}>
          {movie.title}
          {isFavorite && <Star color='#FFD700' isFilled={isFavorite} />}
        </Text>
      </Box>
      <Flex>
        <Box width={1 / 4}>
          <Image
            sx={{ width: [84, 128, 256] }}
            src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${movie.poster_path}`}
          />
        </Box>
        <Box
          display='flex'
          sx={{ alignItems: 'center', paddingBottom: '24px' }}
          width={1 / 1.5}
        >
          <Box py={2} sx={{ textAlign: 'center', width: '100%' }}>
            <Text fontSize={[1, 2, 3]} pt={2} pb={[3, 4]}>
              Released {moment(movie.release_date).format('MMMM Do YYYY')}
            </Text>
            <Button variant='outline' onClick={() => onClickDetails(movie)}>
              Show Details
            </Button>
          </Box>
        </Box>
        <Box width={1 / 8} display='flex' sx={{ alignItems: 'center' }}>
          <Score score={movie.popularity} />
        </Box>
      </Flex>
    </Card>
  );
}

export default MovieListItem;
